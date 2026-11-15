# Bot Instant DYK "everyday science" Short composer (no fixed mascot; AI illustrations per topic).
# usage: python3 sci_compose.py <cfg.json>
# cfg: {id, audio, words, imgA, imgB, title:[lines], kw:[[trigger, text, color]], twist:"But", q:"QUESTION?", target:23}
# Timeline: cover 0-0.5 s over imgA -> scene A (hook + common answer) -> PLOT TWIST (imgB, from cfg.twist word)
#           -> CTA (question + SUBSCRIBE) from the first word after the twist sentence that starts the question.
# Audio: pauses ADDED only at the quietest point between sentences (never removes audio), BGM + whoosh/pop/ding.
import json, sys, os, re, subprocess, math, numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter
K = os.path.dirname(os.path.abspath(__file__)); SR = 44100; W, H, FPS = 1080, 1920, 30
C = json.load(open(sys.argv[1])); ID = C['id']; OUT = f"{K}/../videos/instant/{ID}.mp4"
def font(sz, w=b'ExtraBold'):
    f = ImageFont.truetype(f'{K}/Baloo2.ttf', sz); f.set_variation_by_name(w); return f
# ---------- audio ----------
x = np.frombuffer(subprocess.run(['ffmpeg', '-v', 'error', '-i', C['audio'], '-f', 's16le', '-ac', '1', '-ar', str(SR), '-'], capture_output=True, check=True).stdout, np.int16).astype(np.float32)
d = json.load(open(C['words'])); Wd = d['words'] if isinstance(d, dict) else d
Wd = [{'w': w['text'], 's': w['start'], 'e': w['end']} for w in Wd if w.get('type', 'word') == 'word' and not w['text'].startswith('[')]
N = len(x); win = int(.01 * SR); e2 = np.convolve(x ** 2, np.ones(win) / win, mode='same')
def quiet(a, b):
    a = max(0, int(a * SR)); b = min(N - 1, int(b * SR)); return a + int(np.argmin(e2[a:b])) if b > a else a
st = quiet(max(0, Wd[0]['s'] - .15), Wd[0]['s'] + .02); en = quiet(Wd[-1]['e'] - .02, min(N / SR, Wd[-1]['e'] + .35))
cuts = [k for k in range(1, len(Wd)) if Wd[k - 1]['w'][-1] in '.!?:']
speech = (en - st) / SR; T = float(C.get('target', 23)); tail = 1.3
gap = max(0.25, min(1.0, (T - speech - tail) / max(1, len(cuts))))
segs = []; mp = []; last = st; t = 0.0; f6 = int(.006 * SR)
def fade(s):
    s = s.copy(); n = min(f6, len(s) // 2)
    if n: s[:n] *= np.linspace(0, 1, n); s[-n:] *= np.linspace(1, 0, n)
    return s
for k in cuts:
    c = quiet(Wd[k - 1]['e'] - .06, Wd[k]['s'] + .06); s = fade(x[last:c]); segs += [s, np.zeros(int(gap * SR), np.float32)]
    mp.append((last / SR, c / SR, t)); t += len(s) / SR + gap; last = c
s = fade(x[last:en]); segs.append(s); mp.append((last / SR, en / SR, t)); t += len(s) / SR
TOT = round(min(25.0, max(20.0, t + tail)), 2)
y = np.concatenate(segs); y = np.concatenate([y, np.zeros(max(0, int(TOT * SR) - len(y)), np.float32)])[:int(TOT * SR)]
def nt(tt):
    for a, b, o in mp:
        if tt <= b + 1e-6: return o + max(0, tt - a)
    a, b, o = mp[-1]; return o + tt - a
for w in Wd: w['s'], w['e'] = round(nt(w['s']), 3), round(nt(w['e']), 3)
nz = lambda s: re.sub(r'[^a-z0-9]', '', s.lower())
def at(word, after=0.0):
    for w in Wd:
        if w['s'] >= after - 1e-6 and nz(w['w']) == nz(word): return w['s']
    return None
tTw = at(C.get('twist', 'But'), 2.0)
# question sentence = last sentence that ends with '?' after twist, else the sentence that holds "Comment"
qs = [i for i in range(1, len(Wd)) if Wd[i]['s'] > tTw and Wd[i - 1]['w'][-1] in '.!?' ]
qstart = None
for i in qs:
    seg = ' '.join(w['w'] for w in Wd[i:i + 12])
    if '?' in seg.split('!')[0] or nz(Wd[i]['w']) == 'comment': qstart = Wd[i]['s']; break
tCTA = (qstart or Wd[-6]['s']) - 0.1; tSub = at('subscribe', tCTA) or (TOT - 1.5)
# ---------- sfx + bgm ----------
def wav(n):
    r = subprocess.run(['ffmpeg', '-v', 'error', '-i', f'{K}/sfx/{n}.wav', '-f', 's16le', '-ac', '1', '-ar', str(SR), '-'], capture_output=True).stdout
    return np.frombuffer(r, np.int16).astype(np.float32)
S = {n: wav(n) for n in ['pop', 'whoosh', 'ding']}; fx = np.zeros(len(y), np.float32)
def add(tt, n, v):
    a = int(tt * SR)
    if 0 <= a < len(fx): b = min(len(fx), a + len(S[n])); fx[a:b] += S[n][:b - a] * v
kws = []
for trig, txt, col in C['kw']:
    tt = at(trig, 0.4)
    if tt is not None: kws.append((tt, txt, col)); add(tt, 'pop', .35)
add(0.05, 'pop', .4); add(tTw - .05, 'whoosh', .45); add(tTw + .1, 'ding', .35); add(tCTA, 'whoosh', .4); add(tSub, 'pop', .45)
bg = subprocess.run(['ffmpeg', '-v', 'error', '-stream_loop', '-1', '-i', f'{K}/bgm_dyk.mp3', '-t', str(TOT), '-f', 's16le', '-ac', '1', '-ar', str(SR), '-'], capture_output=True).stdout
bg = np.frombuffer(bg, np.int16).astype(np.float32); bg = np.pad(bg, (0, max(0, len(y) - len(bg))))[:len(y)]
fo = int(1.5 * SR); bg[-fo:] *= np.linspace(1, 0, fo)
mix = y + fx * .7 + bg * .13; mix = mix / max(1.0, np.abs(mix).max() / 32000)
open(f'/tmp/{ID}.pcm', 'wb').write(mix.astype('<i2').tobytes())
# ---------- visuals ----------
FH = 1060; FY = 330  # foreground band (16:9 art) height & top
def prep(p):
    im = Image.open(p).convert('RGB')
    r = max(W / im.width, H / im.height); bgi = im.resize((int(im.width * r) + 1, int(im.height * r) + 1)).filter(ImageFilter.GaussianBlur(30))
    bgi = bgi.crop(((bgi.width - W) // 2, (bgi.height - H) // 2, (bgi.width - W) // 2 + W, (bgi.height - H) // 2 + H))
    bgi = Image.blend(bgi, Image.new('RGB', (W, H), (255, 255, 255)), .25)
    s = FH * 1.15 / im.height; fg = im.resize((int(im.width * s), int(im.height * s)), Image.LANCZOS)
    return bgi, fg
A, B = prep(C['imgA']), prep(C['imgB'])
def kb(pair, p, z0=1.0, z1=1.12, dx=0.0):
    bgi, fg = pair; z = z0 + (z1 - z0) * p
    ch = fg.height / 1.15 / z; cw = W * ch / FH
    cx = fg.width / 2 + dx * (fg.width - cw) / 2 * (2 * p - 1); cy = fg.height / 2
    crop = fg.crop((int(cx - cw / 2), int(cy - ch / 2), int(cx + cw / 2), int(cy + ch / 2))).resize((W, FH), Image.BILINEAR)
    fr = bgi.copy(); fr.paste(crop, (0, FY)); return fr
wm = Image.open(f'{K}/wm_hc.png').convert('RGBA'); wm = wm.resize((330, int(wm.height * 330 / wm.width)))
def otext(d, xy, s, f, fill='#fff', sw=10, anchor='mm'):
    d.text(xy, s, font=f, fill=fill, stroke_width=sw, stroke_fill='#111', anchor=anchor)
def pop(t, t0, dur=.25):
    if t < t0: return 0
    p = min(1, (t - t0) / dur); return 1 + .35 * math.sin(p * math.pi) * (1 - p) if p < 1 else 1
KWF = {}
F_sub, F_kw, F_cov, F_tw, F_q = font(78), font(150), font(120), font(130), font(84)
chunks = []; cur = []
for w in Wd:
    cur.append(w)
    if len(cur) == 3 or w['w'][-1] in '.!?,:': chunks.append(cur); cur = []
if cur: chunks.append(cur)
def layer_text(base, txt, f, xy, fill, sc, sw=12):
    if sc <= 0: return
    L = Image.new('RGBA', (W, 400), (0, 0, 0, 0)); d = ImageDraw.Draw(L); otext(d, (W // 2, 200), txt, f, fill, sw)
    if sc != 1: L = L.resize((int(W * sc), int(400 * sc)))
    base.alpha_composite(L, (int(xy[0] - L.width / 2), int(xy[1] - L.height / 2)))
nF = int(TOT * FPS)
ff = subprocess.Popen(['ffmpeg', '-y', '-v', 'error', '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-s', f'{W}x{H}', '-r', str(FPS), '-i', '-',
                       '-f', 's16le', '-ar', str(SR), '-ac', '1', '-i', f'/tmp/{ID}.pcm', '-c:v', 'libx264', '-crf', '20', '-preset', 'veryfast',
                       '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '192k', '-shortest', '-movflags', '+faststart', OUT], stdin=subprocess.PIPE)
for i in range(nF):
    t = i / FPS
    if t < tTw: fr = kb(A, t / tTw, 1.0, 1.15, .4)
    elif t < tCTA: fr = kb(B, (t - tTw) / max(.1, tCTA - tTw), 1.05, 1.18, -.3)
    else: fr = A[0].copy()
    fr = fr.convert('RGBA')
    if t >= tCTA or t < .5:
        dk = Image.new('RGBA', (W, H), (0, 0, 0, 120 if t < .5 else 90)); fr.alpha_composite(dk)
    if tTw <= t < tTw + .12 or tCTA <= t < tCTA + .1: fr.alpha_composite(Image.new('RGBA', (W, H), (255, 255, 255, 170)))
    d = ImageDraw.Draw(fr)
    if t < .5:  # title cover
        n = len(C['title']); y0 = H / 2 - (n - 1) * 70
        for j, l in enumerate(C['title']): otext(d, (W / 2, y0 + j * 140), l, F_cov, '#FFE27A' if j == n - 1 else '#fff', 14)
    else:
        for tt, txt, col in kws:  # keyword pop-ups, ~1.4 s each
            if tt <= t < tt + 1.4 and not (tCTA <= t):
                fk = KWF.setdefault(txt, font(max(70, min(150, int(150 * (W - 120) / max(1, F_kw.getlength(txt)))))))
                layer_text(fr, txt, fk, (W / 2, 640), col, pop(t, tt))
        if tTw <= t < tTw + 1.6: layer_text(fr, 'PLOT TWIST!', F_tw, (W / 2, 420), '#FFD23F', pop(t, tTw, .3), 14)
        if t >= tCTA:
            for j, l in enumerate(C['q']): otext(d, (W / 2, 620 + j * 105), l, F_q, '#fff', 10)
            sc = pop(t, tSub, .3)
            if sc:
                bw, bh = int(560 * sc), int(150 * sc); bx, by = W // 2 - bw // 2, 1000 - bh // 2
                d.rounded_rectangle((bx, by, bx + bw, by + bh), radius=bh // 2, fill='#E5383B', outline='#fff', width=8)
                otext(d, (W / 2, 1000), 'SUBSCRIBE', font(int(84 * sc)), '#fff', 4)
        for ch in chunks:  # subtitles, ALL CAPS
            if ch[0]['s'] - .05 <= t < ch[-1]['e'] + .15:
                s = ' '.join(w['w'] for w in ch).upper(); otext(d, (W / 2, 1450), s, F_sub, '#FFFFFF', 9); break
    fr.alpha_composite(wm, (30, 60))
    ff.stdin.write(fr.convert('RGB').tobytes())
ff.stdin.close(); ff.wait(); os.remove(f'/tmp/{ID}.pcm')
json.dump({'words': Wd, 'total': TOT, 'twist': tTw, 'cta': tCTA}, open(f'{K}/timing_{ID}.json', 'w'))
print(ID, 'total', TOT, 'speech', round(speech, 2), 'gap', round(gap, 2), 'twist', round(tTw, 2), 'cta', round(tCTA, 2), 'sub', round(tSub, 2))
