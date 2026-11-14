# usage: python3 mkdyk.py <id>  -> body_<id>.js = cfg_<id>.js + FACES (foto bebas lisensi, base64) + tpl_dyk.js (Did You Know)
import sys,re,io,base64,os
from PIL import Image
i=sys.argv[1];cfg=open(f'cfg_{i}.js').read()
codes=set(re.findall(r"\['([a-z]{2})',",cfg))|set(re.findall(r"code:'([a-z]{2})'",cfg))
cred={}
if os.path.exists('faces/CREDITS.md'):
    for l in open('faces/CREDITS.md'):
        m=re.match(r'- (\w+): (.*?) \| (.*?) \| (.*?) \|',l)
        if m: cred[m.group(1)]=f'{m.group(4).strip()[:26]} ({m.group(3).strip()})'
F={};P={}
for c in sorted(codes):
    p=f'faces/{c}.jpg'
    if not os.path.exists(p) or c not in cred: continue
    im=Image.open(p).convert('RGB');w,h=im.size;s=min(w,h);top=int(max(0,(h-s)*0.15))
    im=im.crop(((w-s)//2,top,(w-s)//2+s,top+s)).resize((240,240))
    b=io.BytesIO();im.save(b,'JPEG',quality=82);F[c]='data:image/jpeg;base64,'+base64.b64encode(b.getvalue()).decode();P[c]=cred[c]
LP={};LC={}
if os.path.exists('landmarks/CREDITS.md'):
    for l in open('landmarks/CREDITS.md'):
        q=re.match(r'- (\w+): (.*?) \| (.*?) \| (.*?) \|',l)
        if q: LC[q.group(1)]=f'{q.group(4).strip()[:22]} ({q.group(3).strip()})'
for c in sorted(codes):
    p=f'landmarks/{c}.jpg'
    if not os.path.exists(p) or c not in LC: continue
    im=Image.open(p).convert('RGB');w,h=im.size;tw=min(w,int(h*0.66));im=im.crop(((w-tw)//2,0,(w-tw)//2+tw,h));im.thumbnail((660,1000))
    b=io.BytesIO();im.save(b,'JPEG',quality=72);LP[c]='data:image/jpeg;base64,'+base64.b64encode(b.getvalue()).decode()
js='const LMPH='+repr(LP).replace("'",'"')+';const LMCR='+repr(LC).replace("'",'"')+';\n'
js+='const FACES='+repr(F).replace("'",'"')+';const PHOTO='+repr(P).replace("'",'"')+';\n'
open(f'body_{i}.js','w').write(cfg+'\n'+js+open('tpl_dyk.js').read());print('ok body',i,'faces:',','.join(F),'landmarks:',','.join(LP))
