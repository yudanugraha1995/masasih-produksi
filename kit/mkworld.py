# usage: python3 mkworld.py <world-atlas countries-50m.json> <i18n-iso-countries codes.json> -> world_dyk.js
# Natural Earth (public domain) via world-atlas: poligon negara disederhanakan, kunci = ISO alpha-2 kecil (GB -> uk)
import json,sys
T=json.load(open(sys.argv[1]));num={r[2]:r[0].lower() for r in json.load(open(sys.argv[2]))}
num['gb']='uk'
tr=T['transform'];sx,sy=tr['scale'];tx,ty=tr['translate']
arcs=[]
for a in T['arcs']:
    x=y=0;pts=[]
    for dx,dy in a: x+=dx;y+=dy;pts.append((x*sx+tx,y*sy+ty))
    arcs.append(pts)
def ring(ix):
    out=[]
    for i in ix:
        p=arcs[i] if i>=0 else arcs[~i][::-1]
        out+=p if not out else p[1:]
    return out
def simp(r,tol=0.25):
    o=[r[0]]
    for p in r[1:]:
        if abs(p[0]-o[-1][0])+abs(p[1]-o[-1][1])>=tol: o.append(p)
    return o
W={}
for g in T['objects']['countries']['geometries']:
    k=num.get(g.get('id'));k='uk' if k=='gb' else k
    if not k: continue
    polys=g['arcs'] if g['type']=='MultiPolygon' else [g['arcs']] if g['type']=='Polygon' else []
    rs=[]
    for P in polys:
        r=simp(ring(P[0]))
        if len(r)>=4: rs.append([v for p in r for v in (round(p[0],1),round(p[1],1))])
    if rs: W.setdefault(k,[]).extend(rs)
open('world_dyk.js','w').write('// peta dunia Natural Earth (public domain) via world-atlas, disederhanakan\nconst WORLD='+json.dumps(W,separators=(',',':'))+';\n')
print(len(W),'negara',round(len(open('world_dyk.js').read())/1024),'KB')
