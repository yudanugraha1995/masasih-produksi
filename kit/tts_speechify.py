# usage: python3 tts_speechify.py <naskah.txt> <out.mp3> [voice=langit] [lang=id-ID] [ssml-wrap: plain|teen]
# Membuat narasi via Speechify (key disuntik proxy), menyimpan waktu per kata ke <out>.marks.json,
# dan mencatat pemakaian karakter per bulan ke speechify_usage.json (paket Free: 500K/bulan, Simba 3.5 250K setelah 21 Nov 2026).
import json, subprocess, base64, sys, datetime, os, re, html
src, out = sys.argv[1], sys.argv[2]
voice = sys.argv[3] if len(sys.argv) > 3 else 'langit'
lang = sys.argv[4] if len(sys.argv) > 4 else 'id-ID'
mode = sys.argv[5] if len(sys.argv) > 5 else 'plain'
text = ' '.join(l.strip() for l in open(src) if l.strip())
# pelafalan: singkatan dieja huruf per huruf (contoh BAB -> be a be)
FIX = {r'\bBAB\b': 'be a be'}
for a, b in FIX.items():
    text = re.sub(a, b, text)
inp = text
if mode == 'teen':
    inp = f'<speak><prosody pitch="+12%">{html.escape(text)}</prosody></speak>'
body = {'input': inp, 'voice_id': voice, 'audio_format': 'mp3', 'model': 'simba-3.5', 'language': lang}
r = subprocess.run(['curl', '-sS', '-m', '180', '-X', 'POST', 'https://api.speechify.ai/v1/audio/speech',
                    '-H', 'Authorization: Bearer proxy-injected', '-H', 'Content-Type: application/json',
                    '-d', json.dumps(body)], capture_output=True, text=True).stdout
d = json.loads(r)
if 'audio_data' not in d:
    sys.exit('Speechify error: ' + r[:500])
open(out, 'wb').write(base64.b64decode(d['audio_data']))
json.dump(d.get('speech_marks', {}), open(out.rsplit('.', 1)[0] + '.marks.json', 'w'), ensure_ascii=False)
n = d.get('billable_characters_count', len(text))
up = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'speechify_usage.json')
u = json.load(open(up)) if os.path.exists(up) else {}
m = datetime.date.today().strftime('%Y-%m')
u.setdefault(m, {'chars': 0, 'calls': []})
u[m]['chars'] += n
u[m]['calls'].append({'date': datetime.datetime.now().isoformat(timespec='seconds'), 'file': os.path.basename(out), 'voice': voice, 'chars': n})
json.dump(u, open(up, 'w'), indent=1, ensure_ascii=False)
print(f'{out}: {n} karakter; total {m}: {u[m]["chars"]}')
