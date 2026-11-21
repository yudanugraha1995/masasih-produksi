# usage: python3 dyk_desc.py <id> "<intro>" "<pertanyaan komentar>" "#tag1 #tag2" [map]
# Deskripsi YT lengkap (aturan owner 14 Nov): ringkasan, naskah, fakta tiap negara, plot twist, pertanyaan, sumber, kredit, subscribe. Hashtag 3-5 (sudah termasuk #shorts #DidYouKnow).
import sys,re,os
i=sys.argv[1];intro,q,tags=sys.argv[2],sys.argv[3],sys.argv[4];MAP=len(sys.argv)>5
cfg=open(f'cfg_{i}.js').read()
title=re.search(r'// ===== (.*?) \(Did You Know',cfg).group(1)
FL=lambda c:''.join(chr(0x1F1E6+ord(x)-97) for x in ('gb' if c=='uk' else c))
items=[tuple(x.replace("\\'","'") for x in t) for t in re.findall(r"\['([a-z]{2})','((?:[^'\\]|\\.)*)','(?:[^'\\]|\\.)*','((?:[^'\\]|\\.)*)','((?:[^'\\]|\\.)*)','(?:[^'\\]|\\.)*','((?:[^'\\]|\\.)*)','(ok|no)'",cfg)]
tw=re.search(r"twist:\{code:'([a-z]{2})',name:'([^']*)'.*?num:'([^']*)',unit:'([^']*)'.*?src:'([^']*)'",cfg)
cap=lambda s:s.title().replace('Usa','USA').replace('Uk','UK').replace('Uae','UAE')
nask=open(f'../naskah/{i}.txt').read().strip()
nask=re.sub(r'\[[^\]]*\]\s*','',nask)
L=[f'{title}',intro,'',q,'','🌍 COUNTRY BY COUNTRY']
srcs=[]
for k,(c,n,num,unit,src,mk) in enumerate(items,1):
    L.append(f'{k}. {FL(c)} {cap(n)}: {num.capitalize() if num.isupper() else num}{(" ("+unit+")") if unit else ""}')
    srcs.append(src.replace('Source: ',''))
c,n,num,unit,src=tw.groups();srcs.append(src.replace('Source: ',''))
L+=['',f'🤯 PLOT TWIST: {FL(c)} {cap(n)}: {num}{(" ("+unit+")") if unit else ""}','','🎙️ FULL SCRIPT',nask,'',
    '📚 SOURCES']+[f'• {s}' for s in dict.fromkeys(srcs)]
codes=[x[0] for x in items]+[c];cr=[]
for l in open('faces/CREDITS.md'):
    m=re.match(r'- (\w+): File:(.*?) \| (.*?) \| (.*?) \| (\S+)',l)
    if m and m.group(1) in codes: cr.append(f'• {re.sub(r"\.(jpe?g|png)$","",m.group(2),flags=re.I)}: {m.group(4)}, {m.group(3)}, via Wikimedia Commons: {m.group(5)}')
L+=['','📸 CREDITS']+cr+(['• World map data: Natural Earth (public domain)'] if MAP else [])+['• Flags: drawn for this channel','• Music: original royalty-free instrumental made for this channel',
 '• Photos are used only as reactions. They are not quotes or endorsements.',
 '','Facts are checked against the sources above at the time of publishing. Laws and numbers can change, so if something has changed in your country, tell us in the comments!',
 '','🔔 Subscribe to Did You Know Official for quick country comparisons and surprising world facts every day. Send this to a friend who would guess wrong!','',tags]
out='\n'.join(L);os.makedirs('desc',exist_ok=True);open(f'desc/{i}.txt','w').write(out);print(len(out),'karakter')
