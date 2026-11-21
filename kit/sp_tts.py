# DYK (owner 21 Nov 2026): English narration via Speechify voice "henry" (simba-3.5).
# usage: python3 sp_tts.py <id> "<narration>"  -> raw_<id>.mp3 + words_<id>.json (Scribe-like: text/start/end/type)
# then: python3 instant_stretch.py <id> raw_<id>.mp3 words_<id>.json <target> 0.6
# API key = network secret for api.sws.speechify.com (proxy injects it).
import sys, json, subprocess, base64
i, text = sys.argv[1], sys.argv[2]
body = json.dumps({"input": text, "voice_id": "henry", "audio_format": "mp3", "model": "simba-3.5"})
r = subprocess.run(['curl', '-s', '-X', 'POST', 'https://api.sws.speechify.com/v1/audio/speech',
                    '-H', 'Authorization: Bearer proxy-injected', '-H', 'Content-Type: application/json', '-d', body],
                   capture_output=True, text=True, check=True).stdout
d = json.loads(r)
open(f'raw_{i}.mp3', 'wb').write(base64.b64decode(d['audio_data']))
ws = []
def walk(m):
    if m.get('type') == 'word':
        parts = m['value'].split(); a0, a1 = m['start_time'] / 1000, m['end_time'] / 1000; L = sum(len(x) for x in parts) or 1; t = a0
        for x in parts:  # Speechify kadang gabung token (mis. 'UK: about fifty five,'), pecah proporsional
            d_ = (a1 - a0) * len(x) / L; ws.append({'text': x, 'start': round(t, 3), 'end': round(t + d_, 3), 'type': 'word'}); t += d_
    for c in m.get('chunks', []) or []: walk(c)
walk(d['speech_marks'])
json.dump({'words': ws}, open(f'words_{i}.json', 'w'))
print(i, len(ws), 'words', d.get('billable_characters_count'), 'chars', round(ws[-1]['end'], 2), 's')
