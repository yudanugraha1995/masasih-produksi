# usage: python3 sfx.py <id>  -> sfx_<id>.wav (track SFX sepanjang narasi, transisi scene)
import sys,json,re,subprocess,wave,numpy as np
i=sys.argv[1];SR=44100
def load(n):
    w=wave.open(f'sfx/{n}.wav');x=np.frombuffer(w.readframes(w.getnframes()),'<i2')/32767;return x
S={k:load(k) for k in ['pop','whoosh','ding']}
info=json.loads(subprocess.check_output(['node','scene_t0.js',i]).decode().strip().splitlines()[-1])
types=re.findall(r'\bs(Hook|Card|Fact|Plot|Check|CTA|Myth)\(\{',open(f'body_{i}.js').read())
ev=[]
for k,t0 in enumerate(info['t0']):
    ty=types[k] if k<len(types) else 'Fact'
    if ty=='Hook': ev.append((max(t0,0.15),'pop',0.55))
    elif ty=='Plot': ev+= [(t0,'whoosh',0.45),(t0+0.15,'ding',0.4),(t0+1.6,'pop',0.5)]
    elif ty=='CTA': ev+= [(t0,'whoosh',0.45),(t0+0.4,'pop',0.5)]
    elif ty=='Card': ev+= [(t0,'whoosh',0.45),(t0+0.3,'ding',0.3)]
    else: ev.append((t0,'whoosh',0.45))
# SFX tambahan opsional dari body: komentar /*SFX_EXTRA [[detik,"pop",volume],...]*/
m=re.search(r'/\*SFX_EXTRA (\[.*?\])\*/',open(f'body_{i}.js').read(),re.S)
if m: ev+= [tuple(e) for e in json.loads(m.group(1))]
N=int((info['dur']+1)*SR);out=np.zeros(N)
for t,n,v in ev:
    a=int(t*SR);x=S[n]*v;b=min(N,a+len(x));out[a:b]+=x[:b-a]
out*=0.7
w=wave.open(f'sfx_{i}.wav','wb');w.setnchannels(1);w.setsampwidth(2);w.setframerate(SR);w.writeframes((np.clip(out,-1,1)*32767).astype('<i2').tobytes());w.close()
print(f'sfx_{i}.wav',len(ev),'events')
