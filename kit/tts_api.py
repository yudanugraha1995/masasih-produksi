# Fallback TTS + transkrip lewat API ElevenLabs (akun cadangan), dipakai kalau connector ElevenLabs gagal
# karena kuota/token habis.
# usage: python3 tts_api.py <id>   -> narasi_<id>.mp3, timing_<id>.json, subs_<id>.json
# Key TIDAK disimpan di sini: proxy session menyuntik header xi-api-key untuk host api.elevenlabs.io
# (diisi owner lewat form request_credential). Script cuma kirim nilai dummy.
import sys, json, subprocess, urllib.request, uuid
VOICE = 'eESTQeTcGUli0jYysKtx'   # Senandika
MODEL = 'eleven_v3'
API = 'https://api.elevenlabs.io'
i = sys.argv[1]
text = open(f'../naskah/prompt_v3_{i}.txt').read().strip()
hdr = {'xi-api-key': 'dummy-diganti-proxy'}

def post(url, data, ctype):
    r = urllib.request.Request(url, data=data, headers={**hdr, 'Content-Type': ctype}, method='POST')
    with urllib.request.urlopen(r, timeout=300) as f:
        return f.read()

# 1) TTS
audio = post(f'{API}/v1/text-to-speech/{VOICE}?output_format=mp3_44100_128',
             json.dumps({'text': text, 'model_id': MODEL}).encode(), 'application/json')
open(f'narasi_{i}.mp3', 'wb').write(audio)
print('narasi', len(audio), 'bytes')

# 2) Transkrip Scribe (timing kata)
b = uuid.uuid4().hex
body = (f'--{b}\r\nContent-Disposition: form-data; name="model_id"\r\n\r\nscribe_v1\r\n'
        f'--{b}\r\nContent-Disposition: form-data; name="file"; filename="n.mp3"\r\nContent-Type: audio/mpeg\r\n\r\n').encode() + audio + f'\r\n--{b}--\r\n'.encode()
res = json.loads(post(f'{API}/v1/speech-to-text', body, f'multipart/form-data; boundary={b}'))
W = [{'w': w['text'], 's': w['start'], 'e': w['end']} for w in res['words']
     if w.get('type', 'word') == 'word' and not w['text'].startswith('[')]
json.dump({'words': W}, open(f'timing_{i}.json', 'w'), ensure_ascii=False)
subprocess.check_call(['python3', 'mksubs.py', f'timing_{i}.json', f'subs_{i}.json'])
print('timing', len(W), 'kata')
