# usage: python3 fetch_el.py <id> <words_url> <audio_url>
import sys,json,subprocess
i,wu,au=sys.argv[1:4]
subprocess.check_call(['curl','-sS','-o',f'narasi_{i}.mp3',au])
d=json.loads(subprocess.check_output(['curl','-sS',wu]))
W=d['words'] if isinstance(d,dict) else d
out=[{'w':w['text'],'s':w['start'],'e':w['end']} for w in W if w.get('type','word')=='word' and not w['text'].startswith('[')]
json.dump({'words':out},open(f'timing_{i}.json','w'),ensure_ascii=False)
subprocess.check_call(['python3','mksubs.py',f'timing_{i}.json',f'subs_{i}.json'])
