# usage: python3 dyk_audio.py <id> <raw.mp3> <words.json(url or file)> [maxgap=0.3]
# Did You Know: buang hening awal, padatkan jeda panjang jadi maxgap, tulis narasi_<id>.mp3 + timing_<id>.json (lalu stretch.py <id> 35 2)
import sys,json,re,subprocess,wave,os,numpy as np
i,raw,wj=sys.argv[1:4];MG=float(sys.argv[4]) if len(sys.argv)>4 else 0.3;SR=44100
d=json.loads(subprocess.check_output(['curl','-sS',wj]).decode()) if wj.startswith('http') else json.load(open(wj))
W=d['words'] if isinstance(d,dict) else d
W=[{'w':w['text'],'s':w['start'],'e':w['end']} for w in W if w.get('type','word')=='word' and not w['text'].startswith('[')]
subprocess.check_call(['ffmpeg','-y','-v','error','-i',raw,'-ac','1','-ar',str(SR),'_a.wav'])
w=wave.open('_a.wav');x=np.frombuffer(w.readframes(w.getnframes()),'<i2').astype(np.float32);w.close();os.remove('_a.wav')
# jeda = celah antar kata (plus awal/akhir)
gaps=[(0.0,W[0]['s'],0.08)]+[(W[k]['e'],W[k+1]['s'],MG) for k in range(len(W)-1)]+[(W[-1]['e'],len(x)/SR,0.15)]
segs=[];cur=0.0;shift=[];removed=0.0
for a,b,keep in gaps:
    if b-a>keep:
        m=(a+b)/2;ca=m-keep/2;cb=m+keep/2  # potong di tengah celah
        if a==0.0: ca,cb=0.0,b-keep
        if keep==0.15: ca,cb=a+keep,len(x)/SR
        segs.append(x[int(cur*SR):int(ca*SR)]);shift.append((cb,cb-ca));cur=cb
segs.append(x[int(cur*SR):]);y=np.concatenate(segs)
def sh(t): return t-sum(r for c,r in shift if c<=t+1e-6)
for wd in W: wd['s']=round(sh(wd['s']),3);wd['e']=round(sh(wd['e']),3)
w=wave.open('_b.wav','wb');w.setnchannels(1);w.setsampwidth(2);w.setframerate(SR);w.writeframes(y.astype('<i2').tobytes());w.close()
subprocess.check_call(['ffmpeg','-y','-v','error','-i','_b.wav','-b:a','192k',f'narasi_{i}.mp3']);os.remove('_b.wav')
for f in [f'narasi_{i}_raw.mp3',f'timing_{i}_raw.json']:
    if os.path.exists(f): os.remove(f)
json.dump({'words':W},open(f'timing_{i}.json','w'),ensure_ascii=False)
print(f'{i}: {len(x)/SR:.2f}s -> {len(y)/SR:.2f}s, {len(W)} kata')
