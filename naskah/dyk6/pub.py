# pub.py <vid>            -> tampilkan slot (dueAt WITA, old id) + judul + teks deskripsi untuk Buffer
# pub.py <vid> done <newid> -> catat ke slots.json
import json,sys
from datetime import datetime,timedelta,timezone
P='/home/user/masasih-produksi/naskah/dyk6/'
S=json.load(open(P+'slots.json'));O=open(P+'order.txt').read().split()
v=sys.argv[1]
if len(sys.argv)>2:
    s=next(x for x in S if x.get('vid')==v or (x.get('plan')==v));s['new']=sys.argv[3];s['vid']=v;json.dump(S,open(P+'slots.json','w'),indent=0);print('saved');sys.exit()
free=[x for x in S if not x.get('vid')]
# 28 Nov slots appended if missing
for x in S: x.pop('plan',None)
k=O.index(v);s=free[k] if k<len(free) else None
for j,x in enumerate(free): 
    if j<len(O): x['plan']=O[j]
json.dump(S,open(P+'slots.json','w'),indent=0)
L=open(f'/home/user/masasih-produksi/kit/desc/{v}.txt').read().split('\n')
if s:
    w=datetime.fromisoformat(s['dueUTC'].replace('Z','+00:00')).astimezone(timezone(timedelta(hours=8))).strftime('%Y-%m-%dT%H:%M:00+08:00')
    print('DUE',w,'OLD',s['old'])
else: print('NO SLOT (28 Nov baru)')
print('TITLE',L[0]);print('TEXT');print('\n'.join(L[1:]).strip())
