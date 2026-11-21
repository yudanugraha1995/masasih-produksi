# usage: python3 b22proc.py <status.json> <naskah_dir>  -> raw/words/narasi/timing/subs per transcript (cocokkan teks ke naskah)
import json,sys,subprocess,glob,os,re
d=json.load(open(sys.argv[1]))
if isinstance(d,list): d=json.loads(d[0]['text'])
N={os.path.basename(f)[:-4]:open(f).read() for f in glob.glob(sys.argv[2]+'/*.txt')}
norm=lambda s:re.sub(r'[^a-z]','',re.sub(r'\[[^\]]*\]','',s.lower()))[:120]
print('completed',d.get('all_completed'),'transcripts',len(d.get('transcripts',[])))
for tr in d.get('transcripts',[]):
    tn=norm(tr['text']);best=max(N,key=lambda k:sum(a==b for a,b in zip(norm(N[k]),tn)))
    if os.path.exists(f'subs_{best}.json'): print('skip',best);continue
    subprocess.check_call(['curl','-sS','-o',f'raw_{best}.mp3',tr['source']['url']])
    json.dump({'words':tr['words']},open(f'words_{best}.json','w'),ensure_ascii=False)
    print(subprocess.check_output(['python3','dyk_audio.py',best,f'raw_{best}.mp3',f'words_{best}.json','0.3']).decode().strip())
    subprocess.check_call(['python3','mksubs.py',f'timing_{best}.json',f'subs_{best}.json'],stdout=subprocess.DEVNULL)
