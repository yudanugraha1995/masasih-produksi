# usage: python3 dyk_stretch.py <id> [target=auto|detik] [gpad=0.6] [tail=1.2]
# auto (owner 15 Nov): durasi MAKS 35 dtk (boleh lebih pendek) sesuai isi, jeda kalimat pendek (<=0.35 dtk), tidak dipanjangin demi 40.
# DYK: sisipkan hening `gpad` detik TEPAT sebelum nama tiap negara (6 + plot twist) untuk momen bumi berputar/zoom,
# sisa durasi dibagi ke akhir kalimat lain, lalu ekor CTA. Suara TIDAK diperlambat. Cfg wajib berisi gpad yang sama.
import sys,json,os,re,shutil,subprocess,wave,numpy as np
i=sys.argv[1];TA=sys.argv[2] if len(sys.argv)>2 else 'auto';G=float(sys.argv[3]) if len(sys.argv)>3 else 0.6;TAIL=float(sys.argv[4]) if len(sys.argv)>4 else 1.2;SR=44100
if not os.path.exists(f'narasi_{i}_raw.mp3'): shutil.copy(f'narasi_{i}.mp3',f'narasi_{i}_raw.mp3'); shutil.copy(f'timing_{i}.json',f'timing_{i}_raw.json')
subprocess.check_call(['ffmpeg','-y','-v','error','-i',f'narasi_{i}_raw.mp3','-ac','1','-ar',str(SR),f'_raw_{i}.wav'])
w=wave.open(f'_raw_{i}.wav');x=np.frombuffer(w.readframes(w.getnframes()),'<i2').astype(np.float32);w.close();os.remove(f'_raw_{i}.wav')
W=json.load(open(f'timing_{i}_raw.json'))['words'];dur=len(x)/SR
cfg=open(f'cfg_{i}.js').read()
names=re.findall(r"\['[a-z]{2}','[^']*','([^']*)'",cfg)+re.findall(r"trigger:'([^']*)'",cfg)
n=lambda s:re.sub(r'[^a-z0-9]','',s.lower())
idx=[];p=0
for nm in names:
    q=[n(t) for t in nm.split()]
    for k in range(p,len(W)-len(q)+1):
        if all(n(W[k+j]['w'])==q[j] for j in range(len(q))): idx.append(k);p=k+1;break
    else: sys.exit('nama tidak ketemu di narasi: '+nm)
cuts={k:G for k in idx}
AUTO=TA=='auto'
sent=[k+1 for k,wd in enumerate(W[:-1]) if wd['w'][-1] in '.!?' and k+1 not in cuts]
if AUTO:
    g2=0.35;T=min(35.0,dur+TAIL+G*len(idx)+g2*len(sent))
    g2=min(0.6,max(0.35,(T-dur-TAIL-G*len(idx))/max(1,len(sent))))
else:
    T=float(TA);rest=max(0,T-dur-TAIL-G*len(idx));g2=min(rest/max(1,len(sent)),1.5)
for k in sent: cuts[k]=g2
segs=[];prev=0;newW=[dict(w) for w in W];acc=0
for k in sorted(cuts):
    cp=max(W[k-1]['e'],W[k]['s']-0.08) if k else 0;a=int(prev*SR);b=int(cp*SR);segs+= [x[a:b],np.zeros(int(cuts[k]*SR),np.float32)];prev=cp
    for j in range(k,len(W)): newW[j]['s']+=cuts[k];newW[j]['e']+=cuts[k]
segs+=[x[int(prev*SR):]];y=np.concatenate(segs);pad=max(0,int(T*SR)-len(y));y=np.concatenate([y,np.zeros(pad,np.float32)])[:int(T*SR)]
w=wave.open(f'_st_{i}.wav','wb');w.setnchannels(1);w.setsampwidth(2);w.setframerate(SR);w.writeframes(y.astype('<i2').tobytes());w.close()
subprocess.check_call(['ffmpeg','-y','-v','error','-i',f'_st_{i}.wav','-b:a','192k',f'narasi_{i}.mp3']);os.remove(f'_st_{i}.wav')
json.dump({'words':newW},open(f'timing_{i}.json','w'),ensure_ascii=False)
subprocess.check_call(['python3','mksubs.py',f'timing_{i}.json',f'subs_{i}.json'])
print(f'{i}: {dur:.1f}s -> {len(y)/SR:.1f}s, {len(idx)} jeda peta x {G}s, {len(sent)} jeda kalimat x {g2:.2f}s')
