// ===== Bumi berputar (Did You Know): rotasi ke negara, sorot wilayah, zoom masuk. Data: world_dyk.js (Natural Earth, PD) =====
const GCTR={us:[-98,39],ru:[95,60],fr:[2.5,46.5],nz:[172,-41],ca:[-100,57],no:[10,62],nl:[5.3,52.2],dk:[10,56],cl:[-71,-35],id:[118,-2],kp:[127,40],uk:[-2,54],es:[-3.7,40],pt:[-8,39.6],ec:[-78,-1.5],mx:[-102,23],au:[134,-25],jp:[138,37]};
const _gc={};
function gInfo(c){if(_gc[c])return _gc[c];const R=(typeof WORLD!=='undefined'&&WORLD[c])||[];let big=R[0]||[];R.forEach(r=>{if(r.length>big.length)big=r;});
 let lo=0,la=0,n=big.length/2;for(let i=0;i<big.length;i+=2){lo+=big[i];la+=big[i+1];}
 const ctr=GCTR[c]||(n?[lo/n,la/n]:[0,20]);let ext=1;
 R.forEach(r=>{if(r.length<big.length*0.15)return;for(let i=0;i<r.length;i+=2){const d=gDist(ctr,[r[i],r[i+1]]);if(d<35&&d>ext)ext=d;}});
 return _gc[c]={ctr,ext};}
function gDist(a,b){const r=Math.PI/180;return Math.acos(Math.min(1,Math.sin(a[1]*r)*Math.sin(b[1]*r)+Math.cos(a[1]*r)*Math.cos(b[1]*r)*Math.cos((a[0]-b[0])*r)))/r;}
function gProj(l0,p0,R){const r=Math.PI/180,sp0=Math.sin(p0*r),cp0=Math.cos(p0*r);
 return (lo,la)=>{const cp=Math.cos(la*r),sp=Math.sin(la*r),dl=(lo-l0)*r,cd=Math.cos(dl);let x=R*cp*Math.sin(dl),y=-R*(cp0*sp-sp0*cp*cd);const cc=sp0*sp+cp0*cp*cd;
  if(cc<0){const m=Math.hypot(x,y)||1;x=x/m*R;y=y/m*R;}return [x,y,cc];};}
function gPath(rings,P,lim){let d='';for(const r of rings){let s='',vis=false;for(let i=0;i<r.length;i+=2){const [x,y,cc]=P(r[i],r[i+1]);if(cc>0&&Math.abs(x)<lim&&Math.abs(y)<lim)vis=true;s+=(i?'L':'M')+x.toFixed(1)+','+y.toFixed(1);}if(vis)d+=s+'Z';}return d;}
// globe(t, dari kode, ke kode, t0 mulai): putar 0..0.6s, zoom 0.35..0.9s, pudar 0.7..0.95s
function spinGlobe(t,from,to,t0,cx=960,cy=980){const u=t-t0;if(u<0||u>1)return '';
 const A=from?gInfo(from).ctr:[to==='us'?-20:60,15],B=gInfo(to).ctr;let dl=B[0]-A[0];if(dl>180)dl-=360;if(dl<-180)dl+=360;
 const k=eio(clamp(u/0.6)),l0=A[0]+dl*k-(1-k)*25,p0=A[1]+(B[1]-A[1])*k;
 const Rz=clamp(330/Math.sin(Math.min(60,gInfo(to).ext*1.15)*Math.PI/180),480,5200),zk=eio(clamp((u-0.35)/0.55)),R=440*Math.pow(Rz/440,zk);
 const op=1-ss((u-0.7)/0.25),P=gProj(l0,p0,R),lim=1400;
 let land='',hi='';for(const c in WORLD){if(c===to)continue;land+=gPath(WORLD[c],P,lim);}hi=gPath(WORLD[to]||[],P,lim);
 const pulse=0.5+0.5*Math.sin(u*14);const [mx,my]=P(B[0],B[1]);
 return `<g opacity="${fmt(op)}" transform="translate(${cx} ${cy})"><defs><radialGradient id="gO" cx=".38" cy=".32" r=".8"><stop offset="0" stop-color="#6EC6FF"/><stop offset="1" stop-color="#0D47A1"/></radialGradient><clipPath id="gC"><circle r="${fmt(R)}"/></clipPath></defs>`
 +`<circle r="${fmt(R+28)}" fill="#BDE7FF" opacity=".35"/><circle r="${fmt(R)}" fill="url(#gO)"/><g clip-path="url(#gC)"><path d="${land}" fill="#9BE07F" stroke="#2E7D32" stroke-width="2" stroke-linejoin="round"/>`
 +`<path d="${hi}" fill="#FFC93C" stroke="${OL}" stroke-width="5" stroke-linejoin="round"/><circle cx="${fmt(mx)}" cy="${fmt(my)}" r="${fmt(26+pulse*16)}" fill="none" stroke="#E5383B" stroke-width="7" opacity="${fmt(clamp(u/0.4))}"/>`
 +`<circle cx="${fmt(-R*0.35)}" cy="${fmt(-R*0.4)}" r="${fmt(R*0.55)}" fill="#fff" opacity=".10"/></g><circle r="${fmt(R)}" fill="none" stroke="${OL}" stroke-width="8"/></g>`;}
