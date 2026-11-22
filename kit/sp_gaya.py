# Masa Sih video tambahan (user 22 Nov): Speechify suara "laras" gaya (SSML prosody, simba-3.5, id-ID)
# usage: python3 sp_gaya.py <id> <naskah.txt>  -> raw_<id>.mp3 + words_<id>.json ; lalu dyk_audio.py <id> raw_<id>.mp3 words_<id>.json 0.3
import sys,json,subprocess,base64,re
i,f=sys.argv[1],sys.argv[2]
txt=open(f).read().strip()
sents=re.findall(r'[^.!?]+[.!?]+',txt)
def esc(s):return s.replace('&','&amp;').replace('<','&lt;').replace('>','&gt;')
out=['<speak>']
for k,s in enumerate(sents):
    s=esc(s.strip())
    if k==0 and s.lower().startswith('woy'): out.append(f'<prosody volume="x-loud" rate="fast" pitch="high">{s}</prosody><break time="150ms"/>');continue
    if s.startswith('Tapi gimana kalau'): out.append(f'<prosody rate="105%" pitch="+8%"><emphasis level="strong">Tapi gimana kalau</emphasis>{s[len("Tapi gimana kalau"):]}</prosody><break time="200ms"/>')
    elif s.startswith('Selamat'): out.append(f'<prosody rate="108%" pitch="+10%"><emphasis level="strong">{s}</emphasis></prosody><break time="250ms"/>')
    else: out.append(f'<prosody rate="110%" pitch="+5%">{s}</prosody><break time="120ms"/>')
out.append('</speak>');ssml=''.join(out)
body=json.dumps({"input":ssml,"voice_id":"laras","audio_format":"mp3","model":"simba-3.5","language":"id-ID"})
d=json.loads(subprocess.run(['curl','-s','-X','POST','https://api.sws.speechify.com/v1/audio/speech','-H','Authorization: Bearer proxy-injected','-H','Content-Type: application/json','-d',body],capture_output=True,text=True,check=True).stdout)
open(f'raw_{i}.mp3','wb').write(base64.b64decode(d['audio_data']))
ws=[]
def walk(m):
    if m.get('type')=='word': ws.append({'text':m['value'],'start':m['start_time']/1000,'end':m['end_time']/1000,'type':'word'})
    for c in m.get('chunks',[]) or []: walk(c)
walk(d['speech_marks'])
json.dump({'words':ws},open(f'words_{i}.json','w'),ensure_ascii=False)
n=len(re.findall(r'\S+',txt))
print(i,len(ws),'/',n,'kata',round(ws[-1]['end'],1),'s')
