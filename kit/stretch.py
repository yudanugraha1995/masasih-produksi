# usage: python3 stretch.py <id> [target_detik=55] [tail=4]
# Sisipkan hening di akhir kalimat + ekor CTA supaya durasi ~target. Suara TIDAK diperlambat.
# Simpan asli ke narasi_<id>_raw.mp3 / timing_<id>_raw.json (sekali), lalu tulis ulang narasi/timing/subs.
import sys,json,os,shutil,subprocess,wave,numpy as np
i=sys.argv[1];T=float(sys.argv[2]) if len(sys.argv)>2 else 55;TAIL=float(sys.argv[3]) if len(sys.argv)>3 else 4;SR=44100
if not os.path.exists(f'narasi_{i}_raw.mp3'): shutil.copy(f'narasi_{i}.mp3',f'narasi_{i}_raw.mp3'); shutil.copy(f'timing_{i}.json',f'timing_{i}_raw.json')
subprocess.check_call(['ffmpeg','-y','-v','error','-i',f'narasi_{i}_raw.mp3','-ac','1','-ar',str(SR),f'_raw_{i}.wav'])
w=wave.open(f'_raw_{i}.wav');x=np.frombuffer(w.readframes(w.getnframes()),'<i2').astype(np.float32);w.close();os.remove(f'_raw_{i}.wav')
W=json.load(open(f'timing_{i}_raw.json'))['words'];dur=len(x)/SR
cuts=[k for k,wd in enumerate(W[:-1]) if wd['w'][-1] in '.!?']
gap=max(0,(T-dur-TAIL)/max(1,len(cuts)));gap=min(gap,6)
segs=[];prev=0;shift=0;newW=[dict(w) for w in W]
for k in cuts:
    cp=(W[k]['e']+W[k+1]['s'])/2;a=int(prev*SR);b=int(cp*SR);segs.append(x[a:b]);segs.append(np.zeros(int(gap*SR),np.float32));prev=cp
    for j in range(k+1,len(W)): newW[j]['s']+=gap;newW[j]['e']+=gap
segs.append(x[int(prev*SR):]);segs.append(np.zeros(int(TAIL*SR),np.float32))
y=np.concatenate(segs)
w=wave.open(f'_st_{i}.wav','wb');w.setnchannels(1);w.setsampwidth(2);w.setframerate(SR);w.writeframes(y.astype('<i2').tobytes());w.close()
subprocess.check_call(['ffmpeg','-y','-v','error','-i',f'_st_{i}.wav','-b:a','192k',f'narasi_{i}.mp3']);os.remove(f'_st_{i}.wav')
json.dump({'words':newW},open(f'timing_{i}.json','w'),ensure_ascii=False)
subprocess.check_call(['python3','mksubs.py',f'timing_{i}.json',f'subs_{i}.json'])
print(f'{i}: {dur:.1f}s -> {len(y)/SR:.1f}s, {len(cuts)} jeda x {gap:.2f}s + ekor {TAIL}s')
