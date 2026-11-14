# usage: python3 faces_fetch.py <kode> "<kata cari Commons>" [n]
# Cari foto di Wikimedia Commons, tampilkan kandidat + lisensi (hanya PD/CC0/CC BY/CC BY-SA). Ambil: --get <kode> <judul File:...>
import sys,json,urllib.request,urllib.parse,re
import time,os
D=os.environ.get('DIR','faces');W=int(os.environ.get('W','500'))
UA={'User-Agent':'DidYouKnowShortsBot/1.0 (https://github.com/yudanugraha1995/masasih-produksi)'}
def api(p):
    time.sleep(3);u='https://commons.wikimedia.org/w/api.php?'+urllib.parse.urlencode({**p,'format':'json'})
    for k in range(5):
        try: return json.load(urllib.request.urlopen(urllib.request.Request(u,headers=UA),timeout=30))
        except urllib.error.HTTPError as e:
            if e.code!=429: raise
            time.sleep(6*(k+1))
    raise SystemExit('429 terus')
def info(titles):
    d=api({'action':'query','titles':'|'.join(titles),'prop':'imageinfo','iiprop':'url|extmetadata','iiurlwidth':W,})
    out=[]
    for p in d['query']['pages'].values():
        if 'imageinfo' not in p: continue
        ii=p['imageinfo'][0];m=ii['extmetadata']
        lic=m.get('LicenseShortName',{}).get('value','?');art=re.sub('<[^>]+>','',m.get('Artist',{}).get('value','?'))[:60]
        out.append((p['title'],lic,art,ii.get('thumburl')))
    return out
OK=re.compile(r'^(public domain|pd|cc0|cc by(-sa)? ?[0-9.]*( [a-z]+)?)',re.I)
if sys.argv[1]=='--get':
    c,t=sys.argv[2],sys.argv[3];r=info([t])[0]
    if not OK.match(r[1]): sys.exit('LISENSI TIDAK OK: '+r[1])
    data=urllib.request.urlopen(urllib.request.Request(r[3],headers=UA),timeout=60).read()
    open(f'{D}/{c}.jpg','wb').write(data)
    open(f'{D}/CREDITS.md','a').write(f'- {c}: {r[0]} | {r[1]} | {r[2]} | https://commons.wikimedia.org/wiki/{urllib.parse.quote(r[0].replace(" ","_"))}\n')
    print('ok',c,r[1],r[2])
else:
    c,q=sys.argv[1],sys.argv[2];n=int(sys.argv[3]) if len(sys.argv)>3 else 5
    d=api({'action':'query','list':'search','srsearch':q+' filetype:bitmap','srnamespace':6,'srlimit':n})
    for t,l,a,_ in info([x['title'] for x in d['query']['search']]): print(c,'|',t,'|',l,'|',a)
