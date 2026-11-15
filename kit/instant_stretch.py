# Bot Instant: python3 instant_stretch.py <id> <raw.mp3> <words.json> [target=26] [gpad=0.6]
# Like dyk_audio + dyk_stretch, but every cut/insert happens at the QUIETEST point between two words
# (searched in the real audio, not just Scribe timestamps) with 6 ms fades, so no word gets clipped.
import sys,json,re,subprocess,wave,os,numpy as np
i,raw,wj=sys.argv[1:4];T=float(sys.argv[4]) if len(sys.argv)>4 else 26.0;G=float(sys.argv[5]) if len(sys.argv)>5 else 0.6;SR=44100
d=json.load(open(wj));W=d['words'] if isinstance(d,dict) else d
W=[{'w':w['text'],'s':w['start'],'e':w['end']} for w in W if w.get('type','word')=='word' and not w['text'].startswith('[')]
x=np.frombuffer(subprocess.run(['ffmpeg','-v','error','-i',raw,'-f','s16le','-ac','1','-ar',str(SR),'-'],capture_output=True,check=True).stdout,np.int16).astype(np.float32)
N=len(x);win=int(.01*SR)
e2=np.convolve(x**2,np.ones(win)/win,mode='same')
def quiet(a,b):
    a=max(0,int(a*SR));b=min(N-1,int(b*SR))
    if b<=a: return a
    return a+int(np.argmin(e2[a:b]))
def lvl(p): return float(np.sqrt(e2[min(max(p,0),N-1)]))/32768
cfg=open(f'cfg_{i}.js').read()
names=re.findall(r"\['[a-z]{2}','[^']*','([^']*)'",cfg)+re.findall(r"trigger:'([^']*)'",cfg)
nz=lambda s:re.sub(r'[^a-z0-9]','',s.lower())
idx=set();p=0
for nm in names:
    q=[nz(t) for t in nm.split()]
    for k in range(p,len(W)-len(q)+1):
        if all(nz(W[k+j]['w'])==q[j] for j in range(len(q))):
            kk=k
            if k>1 and nz(W[k-1]['w']) in ('in','the','and','but','to','of'):
                ca=quiet(W[k-1]['e']-0.06,W[k]['s']+0.06);cb=quiet(W[k-2]['e']-0.06,W[k-1]['s']+0.06)
                if lvl(cb)<lvl(ca): kk=k-1
            idx.add(kk);p=k+1;break
    else: sys.exit('name not found: '+nm)
sent={k+1 for k,wd in enumerate(W[:-1]) if wd['w'][-1] in '.!?,' and k+1 not in idx}
# boundaries: (cut sample, target gap seconds)
start=quiet(max(0,W[0]['s']-0.15),W[0]['s']+0.02)
endq=quiet(W[-1]['e']-0.02,min(N/SR,W[-1]['e']+0.35))
bounds=[]
for k in range(1,len(W)):
    a,b=W[k-1]['e'],W[k]['s']
    c=quiet(a-0.06,b+0.06)
    bounds.append((k,c))
# measure real silent gap around each cut (samples below -40 dB)
def gaplen(c):
    th=0.01;l=c;r=c
    while l>0 and lvl(l-win)<th: l-=win
    while r<N-1 and lvl(r+win)<th: r+=win
    return l,r
base=0.12;sentg=None
fixed=sum(G+0.25 for k,c in bounds if k in idx)
voice=0
pieces=[];prev=start;shift=[]  # shift: (orig_time, delta)
plan=[]
for k,c in bounds:
    l,r=gaplen(c)
    cur=(r-l)/SR
    if k in idx: tgt=G+0.25
    elif k in sent: tgt=None
    else: continue  # never touch other word boundaries
    cur=(r-l)/SR; l=r=c  # never remove audio: only ADD silence at the quietest sample
    plan.append((k,c,l,r,cur,tgt))
# speech length if every gap set to its target (sentence gaps = 0 for now)
sp=0;last=start
for k,c,l,r,cur,tgt in plan: sp+=(l-last)/SR; last=r
sp+=(endq-last)/SR
fixedg=sum(t for *_,t in plan if t is not None)
ns=sum(1 for *_,t in plan if t is None)
tail=1.0
curs=sum(c for *_,c,t in plan)
g2=max(0.3,min(0.9,(T-sp+curs-fixedg-tail)/max(1,ns)))
fade=int(.006*SR)
def fo(s): s=s.copy(); n=min(fade,len(s)); s[len(s)-n:]*=np.linspace(1,0,n); return s
def fi(s): s=s.copy(); n=min(fade,len(s)); s[:n]*=np.linspace(0,1,n); return s
out=[];t_out=0;last=start;mp=[]  # map segments orig->new
for k,c,l,r,cur,tgt in plan:
    tg=g2 if tgt is None else tgt
    seg=x[last:l]; seg=fi(seg) if last!=start or True else seg; seg=fo(seg)
    mp.append((last/SR,l/SR,t_out)); out.append(seg); t_out+=len(seg)/SR
    ex=max(0.0,tg-cur); out.append(np.zeros(int(ex*SR),np.float32)); t_out+=ex
    last=r
seg=fo(fi(x[last:endq]));mp.append((last/SR,endq/SR,t_out));out.append(seg);t_out+=len(seg)/SR
y=np.concatenate(out);y=np.concatenate([y,np.zeros(max(0,int(T*SR)-len(y)),np.float32)])[:int(T*SR)]
def nt(t):
    for a,b,o in mp:
        if t<=b+1e-6: return o+max(0,t-a)
    a,b,o=mp[-1];return o+t-a
newW=[{'w':w['w'],'s':round(nt(w['s']),3),'e':round(nt(w['e']),3)} for w in W]
w=wave.open(f'_st_{i}.wav','wb');w.setnchannels(1);w.setsampwidth(2);w.setframerate(SR);w.writeframes(np.clip(y,-32767,32767).astype('<i2').tobytes());w.close()
subprocess.check_call(['ffmpeg','-y','-v','error','-i',f'_st_{i}.wav','-b:a','192k',f'narasi_{i}.mp3']);os.remove(f'_st_{i}.wav')
json.dump({'words':newW},open(f'timing_{i}.json','w'),ensure_ascii=False)
subprocess.check_call(['python3','mksubs.py',f'timing_{i}.json',f'subs_{i}.json'])
for k,c,l,r,cur,tgt in plan: print('  cut before',W[k]['w'],'level',round(lvl(c),4),'WARN' if lvl(c)>0.02 else '')
print(f'{i}: speech {sp:.1f}s, total {len(y)/SR:.1f}s (voice ends {t_out:.1f}s), sentence gap {g2:.2f}s, worst cut level {max(lvl(c) for *_ ,c in [(0,b[1]) for b in bounds]):.4f}')
