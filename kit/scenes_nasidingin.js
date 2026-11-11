// ===== Masa Sih Nasi Dingin Lebih Sehat? (Style A) =====
const isV=ASP==='v';
// ---------- objek khusus ----------
function riceMound(o={}){
  let gr='';
  for(let i=0;i<26;i++){const x=-130+rnd(i)*260;const top=-40-Math.sqrt(Math.max(0,1-(x/150)**2))*120;const y=lerp(top+18,-46,rnd(i+50)*0.85);
    gr+=`<ellipse cx="${fmt(x)}" cy="${fmt(y)}" rx="13" ry="6" fill="${o.cold?'#E4F2FB':'#FFFDF6'}" stroke="#D9D2C2" stroke-width="2" transform="rotate(${fmt(rnd(i+9)*180)} ${fmt(x)} ${fmt(y)})"/>`;}
  return `<path d="M-152,-40C-152,-150 -80,-168 0,-168C80,-168 152,-150 152,-40Z" fill="${o.cold?'#EAF5FC':'#FFFBF0'}" stroke="${OL}" stroke-width="5"/>${gr}`;}
function riceBowl(t,s=1,o={}){
  let steam='';
  if(o.steam){for(let i=0;i<3;i++){const ph=(t*0.55+i/3)%1;steam+=`<path d="M${-60+i*60},${-180-ph*150}q-22,-32 0,-64q22,-32 0,-64" stroke="#fff" stroke-width="13" fill="none" stroke-linecap="round" opacity="${fmt(0.75*Math.sin(ph*Math.PI))}"/>`;}}
  let frost='';
  if(o.cold){for(let i=0;i<5;i++){const a=t*0.6+i*1.3;frost+=g(tr(-140+i*70,-210-12*Math.sin(a),0.5+0.15*(i%2),a*30),snowflake());}}
  return g(`scale(${s})`,`${riceMound(o)}
   <path d="M-180,-44L180,-44Q172,88 0,104Q-172,88 -180,-44Z" fill="${o.col||'#F3F7FA'}" stroke="${OL}" stroke-width="6" stroke-linejoin="round"/>
   <path d="M-172,-6Q0,14 172,-6" stroke="${o.band||'#2C8FC4'}" stroke-width="14" fill="none"/>
   <path d="M-150,-26Q-140,40 -90,70" stroke="#fff" stroke-width="10" fill="none" stroke-linecap="round" opacity=".7"/>
   <rect x="-70" y="96" width="140" height="26" rx="10" fill="${o.col||'#E3EBF1'}" stroke="${OL}" stroke-width="5"/>${steam}${frost}`);}
function snowflake(){let p='';for(let i=0;i<3;i++)p+=`<path d="M0,-30L0,30" stroke="#BFE9FF" stroke-width="7" stroke-linecap="round" transform="rotate(${i*60})"/>`;return p+`<circle r="7" fill="#fff"/>`;}
function riceBox(s=1,cold=true){return g(`scale(${s})`,`<rect x="-150" y="-110" width="300" height="130" rx="22" fill="#DDF1FB" fill-opacity=".9" stroke="${OL}" stroke-width="5"/>
  <path d="M-130,-60Q-60,-100 0,-80Q60,-104 130,-62L130,0L-130,0Z" fill="${cold?'#EEF7FC':'#FFFBF0'}"/>
  <rect x="-164" y="-138" width="328" height="40" rx="16" fill="#2C8FC4" stroke="${OL}" stroke-width="5"/><rect x="-40" y="-150" width="80" height="20" rx="8" fill="#1F6E9C" stroke="${OL}" stroke-width="4"/>`);}
function fridge(t,open=0,glow=1){
  const d=open; // 0 closed .. 1 open
  let s=`<rect x="-240" y="-820" width="480" height="820" rx="40" fill="#E9EFF3" stroke="${OL}" stroke-width="7"/>`;
  s+=`<rect x="-210" y="-790" width="420" height="760" rx="26" fill="#BFE6F7"/>`;
  s+=`<circle cx="0" cy="-460" r="${260}" fill="#fff" opacity="${0.55*glow*d}" filter="url(#glowf)"/>`;
  s+=`<path d="M-210,-560L210,-560M-210,-330L210,-330" stroke="#fff" stroke-width="10" opacity=".9"/>`;
  s+=g('translate(0 -340)',riceBox(0.95));
  s+=`<rect x="-150" y="-700" width="90" height="130" rx="18" fill="#F6C76A" stroke="${OL}" stroke-width="4"/><rect x="40" y="-680" width="110" height="110" rx="20" fill="#9CD08A" stroke="${OL}" stroke-width="4"/>`;
  s+=`<rect x="-180" y="-250" width="360" height="200" rx="20" fill="#DDF1FB" stroke="${OL}" stroke-width="4" opacity=".8"/>`;
  // door
  const w=lerp(480,60,eout(d));
  s+=`<rect x="${fmt(240-w)}" y="-820" width="${fmt(w)}" height="820" rx="40" fill="#F7FAFC" stroke="${OL}" stroke-width="7"/>`;
  if(d<0.5) s+=`<rect x="${fmt(240-w+40)}" y="-640" width="22" height="200" rx="11" fill="#9AA9B8"/><path d="M${fmt(240-w)},-300L240,-300" stroke="${OL}" stroke-width="6" opacity=".4"/>`;
  for(let i=0;i<5;i++){const a=t*0.7+i*1.7;const fx=-170+rnd(i)*340, fy=-760+((t*40+rnd(i+5)*700)%700);s+=g(tr(fx,fy,0.45*d,a*40),snowflake(),`opacity="${0.8*d}"`);}
  return s;}
function sugarStack(x,y,n,sz=30){let c='';for(let j=0;j<n;j++){c+=sugarCube(x-sz*0.7,y-j*sz*1.5,sz)+sugarCube(x+sz*0.7,y-j*sz*1.5+sz*0.35,sz);}return `<g filter="url(#dsh)">${c}</g>`;}
function person(x,y,s=1,col='#5B6C8F'){return g(tr(x,y,s),`<circle cx="0" cy="-118" r="34" fill="${col}"/><path d="M-50,0L-50,-50Q-50,-80 -20,-80L20,-80Q50,-80 50,-50L50,0Z" fill="${col}"/>`);}
function bacterium(s=1,col='#C77DDB',r=0,mood='evil',t=0){
  let fl='';for(let i=0;i<4;i++){fl+=`<path d="M${-60+i*40},40q-10,${fmt(26+6*Math.sin(t*8+i))} 6,${50}" stroke="${OL}" stroke-width="5" fill="none" stroke-linecap="round"/>`;}
  const eyes=mood==='evil'?`<path d="M-44,-22L-14,-10M44,-22L14,-10" stroke="#2E2430" stroke-width="7" stroke-linecap="round"/><circle cx="-26" cy="0" r="9" fill="#2E2430"/><circle cx="26" cy="0" r="9" fill="#2E2430"/><path d="M-20,26Q0,14 20,26" stroke="#2E2430" stroke-width="6" fill="none" stroke-linecap="round"/>`
   :`<path d="M-36,-2Q-26,-14 -16,-2M16,-2Q26,-14 36,-2" stroke="#2E2430" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M-16,18Q0,32 16,18" stroke="#2E2430" stroke-width="6" fill="none" stroke-linecap="round"/><ellipse cx="-50" cy="14" rx="11" ry="7" fill="#F59A92" opacity=".7"/><ellipse cx="50" cy="14" rx="11" ry="7" fill="#F59A92" opacity=".7"/>`;
  return g(`rotate(${fmt(r)}) scale(${s})`,`${fl}<rect x="-90" y="-46" width="180" height="92" rx="46" fill="${col}" stroke="${OL}" stroke-width="5"/><ellipse cx="-50" cy="-26" rx="18" ry="8" fill="#fff" opacity=".35"/>${eyes}`);}
function clockFace(t,s=1,speed=6){const a=t*speed*60, b=t*speed*5;return g(`scale(${s})`,`<circle r="110" fill="#fff" stroke="#5B4C40" stroke-width="14"/>${Array.from({length:12},(_,i)=>`<path d="M0,-92L0,-80" stroke="#5B4C40" stroke-width="6" transform="rotate(${i*30})"/>`).join('')}<path d="M0,0L0,-78" stroke="#2E2430" stroke-width="9" stroke-linecap="round" transform="rotate(${fmt(a)})"/><path d="M0,0L0,-52" stroke="#2E2430" stroke-width="13" stroke-linecap="round" transform="rotate(${fmt(b)})"/><circle r="10" fill="#E5383B"/>`);}
function flame(t,s=1){const f=1+0.08*Math.sin(t*18);return g(`scale(${s} ${fmt(s*f)})`,`<path d="M0,0C-90,0 -100,-90 -50,-150C-40,-110 -20,-110 -20,-110C-40,-180 0,-240 20,-260C20,-200 90,-170 80,-80C78,-30 50,0 0,0Z" fill="#F2A541" stroke="${OL}" stroke-width="5"/><path d="M0,-10C-40,-10 -50,-60 -20,-100C-10,-70 10,-80 10,-80C10,-120 30,-140 40,-150C40,-110 60,-80 50,-50C46,-26 30,-10 0,-10Z" fill="#FFE27A"/>`);}
function poisonDrop(s=1){return g(`scale(${s})`,`<path d="M0,-110C40,-50 70,-10 70,30C70,74 38,100 0,100C-38,100 -70,74 -70,30C-70,-10 -40,-50 0,-110Z" fill="#8BC34A" stroke="${OL}" stroke-width="6"/><circle cx="-22" cy="20" r="10" fill="#2E2430"/><circle cx="22" cy="20" r="10" fill="#2E2430"/><path d="M-26,-6L-10,4M26,-6L10,4" stroke="#2E2430" stroke-width="6" stroke-linecap="round"/><path d="M-18,58Q0,44 18,58" stroke="#2E2430" stroke-width="6" fill="none" stroke-linecap="round"/><ellipse cx="-36" cy="-20" rx="12" ry="20" fill="#fff" opacity=".35"/>`);}
function plateRice(s=1){return g(`scale(${s})`,`<ellipse cx="0" cy="0" rx="230" ry="62" fill="#fff" stroke="${OL}" stroke-width="6"/><ellipse cx="0" cy="-4" rx="170" ry="40" fill="#EEF2F4"/>${g('translate(0 6) scale(1 .7)',riceMound())}`);}
function enzyme(t,s=1,col='#F4C542'){const m=Math.abs(Math.sin(t*9))*34;return g(`scale(${s})`,`<path d="M0,0L${fmt(70*Math.cos(m*Math.PI/180))},${fmt(-70*Math.sin(m*Math.PI/180))}A70,70 0 1 0 ${fmt(70*Math.cos(m*Math.PI/180))},${fmt(70*Math.sin(m*Math.PI/180))}Z" fill="${col}" stroke="${OL}" stroke-width="5"/><circle cx="-6" cy="-36" r="8" fill="${OL}"/>`);}
// rantai pati: k=0 longgar (mudah dicerna), k=1 rapat (pati resisten)
function starchChain(t,k,x0,y0,n=14,col='#F6E7A8'){
  let s='',pts=[];
  for(let i=0;i<n;i++){const loose=[x0+i*56,y0+Math.sin(i*0.9+t*2)*70];const r=Math.floor(i/7), c=i%7;const tight=[x0+90+c*52,y0-40+r*58+(c%2)*10];
    pts.push([lerp(loose[0],tight[0],eio(k)),lerp(loose[1],tight[1],eio(k))]);}
  for(let i=0;i<n-1;i++)s+=`<path d="M${fmt(pts[i][0])},${fmt(pts[i][1])}L${fmt(pts[i+1][0])},${fmt(pts[i+1][1])}" stroke="${OL}" stroke-width="8"/>`;
  pts.forEach(p=>{s+=`<polygon points="${[0,1,2,3,4,5].map(j=>`${fmt(p[0]+24*Math.cos(j*Math.PI/3))},${fmt(p[1]+24*Math.sin(j*Math.PI/3))}`).join(' ')}" fill="${col}" stroke="${OL}" stroke-width="4"/>`;});
  return s;}
function srcText(txt,k=1){return k>0?`<text x="40" y="${H-(isV?60:34)}" font-family="Inter" font-weight="500" font-size="${isV?24:22}" fill="#fff" opacity="${fmt(.85*k)}">${txt}</text>`:'';}
function card(t,lines,y0v,y0h,t0){const k=fadeIn(t,t0,.5);const ky=lerp(30,0,eout((t-t0)/.6));const fs=isV?124:112;let s='';
  lines.forEach((l,i)=>{s+=`<text x="${W/2}" y="${fmt((isV?y0v:y0h)+i*fs*1.02+ky)}" text-anchor="middle" font-family="B2" font-weight="800" font-size="${fs}" fill="url(#gold)" opacity="${fmt(k)}" filter="url(#tsh)">${l}</text>`;});return s;}
function letterbox(t,t0){const lb=ss((t-t0)/0.4)*(isV?150:110);return `<rect width="${W}" height="${fmt(lb)}" fill="#000"/><rect y="${fmt(H-lb)}" width="${W}" height="${fmt(lb)}" fill="#000"/>`;}
function hudLabel(t,t0,txt,o={}){const k=popS(t,t0,.45);if(k<=0)return '';return g(tr(o.x??W/2,o.y??(isV?420:110),k,o.r??-3),label(txt,{size:o.size??(isV?72:62),bg:o.bg||'#E8505B',fill:o.fill||'#fff'}));}
function table(){return `<rect y="1250" width="1920" height="670" fill="#8C6A52"/><rect y="1240" width="1920" height="26" fill="#6E5140"/>`;}

// 1 HOOK 0 - 5.05
S.push({t0:0,t1:5.05,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#3A2416"/><circle cx="960" cy="900" r="620" fill="#E59A3C" opacity=".5" filter="url(#glowf)"/>`;
  s+=rays(960,200,7,1400,9,.45,Math.sin(t*.5)*3);
  for(let i=0;i<12;i++){const sp=180+rnd(i)*200;const y=((t*sp+rnd(i+9)*1900)%2200)-200;const x=200+rnd(i+20)*1520;const sc=0.6+rnd(i+5)*0.9;s+=`<ellipse cx="${fmt(x)}" cy="${fmt(y)}" rx="${fmt(16*sc)}" ry="${fmt(8*sc)}" fill="#FFFBF0" stroke="#D9D2C2" stroke-width="2" transform="rotate(${fmt(t*80*(rnd(i)-.5)+i*30)} ${fmt(x)} ${fmt(y)})" ${sc>1.2?'filter="url(#dof2)"':''}/>`;}
  const k=popS(t,0.05,.6);
  s+=g(tr(960,1180,2.3*k),riceBowl(t,1,{steam:true}),'filter="url(#dsh)"');
  const yk=eout((t-0.2)/0.5);
  s+=yuma({x:lerp(380,520,yk),y:lerp(1950,1600,yk),s:1.15,expr:t<4.0?'happy':'surprised',aR:-50+Math.sin(t*8)*8,aL:70,blink:blinkAt(t,1)});
  const ks=popS(t,4.06,.45);if(ks>0)s+=g(tr(isV?1200:1350,1500,ks,4),bubble(360,160,'bl')+`<text x="0" y="22" text-anchor="middle" font-family="B2" font-weight="800" font-size="74" fill="${OL}">SAMA!</text>`,'filter="url(#dsh)"');
  return s;},
 cam:t=>camV(t,0,5.05,[960,1060,1.0],[960,1000,1.12]),
 hud:t=>{const k=popS(t,0.15,.5),k2=popS(t,1.7,.5);
  if(isV) return g(tr(540,420,k,-4),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="150" fill="#FFE27A" stroke="${OL}" stroke-width="14" paint-order="stroke">WOYYY!</text>`)+g(tr(540,590,k2),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="100" fill="#fff" stroke="${OL}" stroke-width="12" paint-order="stroke">NASI ANGET?</text>`);
  return g(tr(1500,170,k,-6),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="130" fill="#FFE27A" stroke="${OL}" stroke-width="12" paint-order="stroke">WOYYY!</text>`)+g(tr(1500,290,k2),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="84" fill="#fff" stroke="${OL}" stroke-width="11" paint-order="stroke">NASI ANGET?</text>`);}
});

// 2 MITOS: nasi kulkas lebih sehat 5.05 - 10.1
S.push({t0:5.05,t1:10.1,
 world:t=>{let s=room('#C9CFC4','#A7876D',false,t);
  const open=ss((t-7.9)/0.6);
  s+=g(`translate(${isV?1240:1400} 1320) scale(${isV?0.95:1.05})`,fridge(t,open));
  const talk=(t>5.12&&t<6.4)||(t>6.44&&t<9.9);
  s+=mom({x:isV?720:620,y:1500,s:isV?1.1:1.3,aR:-28+Math.sin(t*10)*(talk?6:0),aL:62,talk:talk&&Math.sin(t*22)>0,blink:blinkAt(t,4)});
  const b=popS(t,6.44,.45);
  if(b>0)s+=g(tr(isV?960:700,isV?680:720,b*(isV?.72:1),-3),bubble(640,200,'bl')+`<text x="0" y="22" text-anchor="middle" font-family="B2" font-weight="800" font-size="66" fill="${OL}">Nasi <tspan fill="#2C8FC4">KULKAS</tspan> lebih sehat!</text>`,'filter="url(#dsh)"');
  return s;},
 cam:t=>camV(t,5.05,10.1,[isV?900:960,1000,1.0],[isV?1080:1000,980,1.08]),
 hud:t=>hudLabel(t,6.8,'NASI SISA SEMALAM',{bg:'#5B6C8F',size:isV?62:54,x:isV?W/2:1360,y:isV?420:110})
});

// 3 KARTU BAB 10.1 - 13.0
S.push({t0:10.1,t1:13.0,
 world:t=>{let s=room('#AEB7AE','#8F7560',false,t);
  s+=yuma({x:960,y:1520,s:1.5,expr:'think',aL:70,aR:120,holdR:g('scale(.4)',riceBowl(t,1,{cold:true})),blink:false});
  for(let i=0;i<3;i++){const k=popS(t,10.4+i*0.2,.3);s+=`<circle cx="${1180+i*60}" cy="${660-i*70}" r="${fmt((14+i*8)*k)}" fill="#fff" opacity=".9"/>`;}
  return s+`<rect width="1920" height="1920" fill="#06121C" opacity=".55"/>`;},
 cam:t=>camV(t,10.1,13.0,[960,1000,1.12],[960,940,1.0]),
 hud:t=>{let s=letterbox(t,10.1)+card(t,['MASA SIH','NASI DINGIN','LEBIH SEHAT?'],700,300,10.2);
  const k2=popS(t,11.89,.4);if(k2>0)s+=g(tr(W/2,isV?1240:760,k2,-3),`<rect x="-250" y="-60" width="500" height="110" rx="30" fill="#E8505B" stroke="#fff" stroke-width="6"/><text x="0" y="22" text-anchor="middle" font-family="B2" font-weight="800" font-size="66" fill="#fff">Yuk kita cek!</text>`);
  return s;}
});

// 4 NEGARA NASI -> GULA 13.0 - 19.35
S.push({t0:13.0,t1:19.35,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#3B1E1E"/><circle cx="960" cy="900" r="640" fill="#C0392B" opacity=".35" filter="url(#glowf)"/>`;
  // bendera latar
  s+=`<g opacity=".18"><rect x="0" y="300" width="1920" height="500" fill="#E5383B"/><rect x="0" y="800" width="1920" height="500" fill="#fff"/></g>`;
  const toSugar=clamp((t-17.4)/1.0);
  const kb=popS(t,13.1,.5);
  s+=g(tr(960,1150,2.0*kb*(1-0.25*toSugar)),riceBowl(t,1,{steam:true,band:'#E5383B'}),'filter="url(#dsh)"');
  // butir nasi terbang jadi gula
  if(t>16.4){for(let i=0;i<9;i++){const k=clamp((t-16.4-i*0.08)/1.1);const sx=960+(rnd(i)-.5)*200, sy=900;const ex=520+(i%3)*80+(i>5?880:i>2?440:0)*0, ey=0;
    const tx=isV?(660+(i%3)*300):(560+(i%5)*200), ty=isV?(650+Math.floor(i/3)*0):(650);
    const x=lerp(sx,tx,eout(k)), y=lerp(sy,ty,eout(k))-Math.sin(k*Math.PI)*180;
    if(k<0.6) s+=`<ellipse cx="${fmt(x)}" cy="${fmt(y)}" rx="16" ry="8" fill="#FFFBF0" stroke="${OL}" stroke-width="3" transform="rotate(${fmt(k*400+i*40)} ${fmt(x)} ${fmt(y)})"/>`;
    else s+=`<g filter="url(#dsh)">${sugarCube(x,y,30*popS(t,16.4+i*0.08+0.66,.4))}</g>`;}}
  return s;},
 cam:t=>t<15.3?camV(t,13.0,15.3,[960,1060,1.15],[960,1000,1.0]):camV(t,15.3,19.35,[960,1000,1.0],[960,900,1.1]),
 hud:t=>{let s=hudLabel(t,13.57,'INDONESIA = NEGARA NASI',{bg:'#E5383B',size:isV?60:56})+'';
  const k=popS(t,18.16,.45);if(k>0)s+=g(tr(isV?W/2:1500,isV?560:250,k,2),label('cepat jadi GULA',{size:isV?56:50,bg:'#F4C542',fill:OL}));
  s+=srcText('Ilustrasi disederhanakan',fadeIn(t,16.4,.4));return s;}
});

// 5 DIABETES 19.35 - 27.3
S.push({t0:19.35,t1:27.3,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#2A1F2B"/><circle cx="960" cy="940" r="640" fill="#8E3B4F" opacity="${fmt(0.35+0.1*Math.sin(t*4))}" filter="url(#glowf)"/>`;
  // grid orang
  const cols=isV?8:14, rows=isV?5:4;const x0=isV?560:520, dx=isV?115:126, y0=isV?1000:960, dy=isV?110:95;
  for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){const i=r*cols+c;const k=popS(t,21.2+i*0.025,.35);if(k<=0)continue;s+=person(x0+c*dx,y0+r*dy,0.62*k,'#E8505B');}
  const kn=popS(t,21.2,.55);
  if(kn>0)s+=g(tr(960,isV?800:760,kn),`<text x="0" y="0" text-anchor="middle" font-family="Inter" font-weight="800" font-size="200" fill="#fff" filter="url(#tsh)">±20 JUTA</text><text x="0" y="74" text-anchor="middle" font-family="B2" font-weight="800" font-size="58" fill="#FFB3BA">orang dewasa dengan diabetes</text>`);
  return s;},
 cam:t=>camV(t,19.35,27.3,[960,1000,1.12],[960,960,1.0]),
 hud:t=>{let s='';const k=popS(t,25.51,.45);
  if(k>0)s+=g(tr(W/2,isV?420:120,k,-3),`<rect x="-330" y="-80" width="660" height="140" rx="34" fill="#F4C542" stroke="${OL}" stroke-width="6"/><text x="0" y="22" text-anchor="middle" font-family="B2" font-weight="800" font-size="${isV?74:68}" fill="${OL}">#5 DUNIA!</text>`);
  s+=srcText('Sumber: IDF Diabetes Atlas (2024): 20,4 juta orang dewasa',fadeIn(t,21.2,.4));return s;}
});

// 6 NASI DINGIN MASUK: pati resisten 27.3 - 34.05
S.push({t0:27.3,t1:34.05,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#16343F"/><circle cx="960" cy="900" r="640" fill="#2E7E8F" opacity=".5" filter="url(#glowf)"/>`;
  if(t<30.9){
   const open=ss((t-27.5)/0.5);
   s+=g('translate(960 1420) scale(1.1)',fridge(t,open));
   const into=clamp((t-29.3)/1.0);
   if(into<1) s+=g(tr(lerp(isV?760:560,960,eout(into)),lerp(1250,1050,eout(into)),0.9*(1-0.4*into)),riceBowl(t,1,{steam:into<0.4}),'filter="url(#dsh)"');
  } else {
   // diagram pati
   s+=`<g opacity=".12">${Array.from({length:20},(_,i)=>`<path d="M${i*100},0L${i*100},1920M0,${i*100}L1920,${i*100}" stroke="#fff" stroke-width="2"/>`).join('')}</g>`;
   const k=ss((t-31.6)/1.6);
   s+=starchChain(t,k,isV?600:560,960,14,lerp(0,1,k)>0.5?'#F4C542':'#F6E7A8');
   for(let i=0;i<6;i++){const a=t*0.6+i*1.1;s+=g(tr(500+i*190,560+40*Math.sin(a),0.7,a*30),snowflake(),'opacity=".7"');}
  }
  return s;},
 cam:t=>t<30.9?camV(t,27.3,30.9,[960,1060,1.0],[960,960,1.12]):camV(t,30.9,34.05,[960,960,1.15],[960,960,1.0]),
 hud:t=>{let s='';if(t<30.9)s+=hudLabel(t,28.36,'NASI DINGIN',{bg:'#2C8FC4'});
  else {s+=hudLabel(t,31.1,'menyusun ulang...',{bg:'#5B6C8F',size:isV?58:50});const k=popS(t,33.0,.45);if(k>0)s+=g(tr(W/2,isV?1240:250,k,2),label('PATI RESISTEN',{size:isV?80:64,bg:'#F4C542',fill:OL}));
   s+=srcText('Ilustrasi disederhanakan',fadeIn(t,31.0,.4));}
  return s;}
});

// 7 PATI BANDEL di tubuh 34.05 - 43.75
S.push({t0:34.05,t1:43.75,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#3B3A7A"/><g opacity=".12">${Array.from({length:20},(_,i)=>`<path d="M${i*100},0L${i*100},1920M0,${i*100}L1920,${i*100}" stroke="#fff" stroke-width="2"/>`).join('')}</g>`;
  // perut + usus sederhana
  s+=`<path d="M700,560C640,640 660,760 780,780C900,800 1000,740 1020,640C1040,560 960,500 880,520C820,535 760,500 700,560Z" fill="#F3A6B5" stroke="#fff" stroke-width="6"/>`;
  s+=`<path d="M1000,700C1150,700 1200,820 1150,900C1100,980 760,960 720,1040C680,1120 800,1180 960,1170C1120,1160 1220,1220 1180,1300" stroke="#F3A6B5" stroke-width="70" fill="none" stroke-linecap="round"/>`;
  s+=`<path d="M1180,1300C1140,1380 760,1360 720,1300" stroke="#E2788F" stroke-width="96" fill="none" stroke-linecap="round"/>`;
  // pati bandel (kubus pati dengan wajah)
  const path=[[860,650],[1100,820],[760,1040],[1130,1210],[960,1330]];
  const p=clamp((t-39.4)/3.0);const seg=Math.min(3,Math.floor(p*4)),f=p*4-seg;
  const px=t<39.4?860:lerp(path[seg][0],path[seg+1][0],f), py=t<39.4?650:lerp(path[seg][1],path[seg+1][1],f);
  const kb=popS(t,34.2,.5);
  s+=g(tr(px,py,1.1*kb,Math.sin(t*5)*6),`<polygon points="${[0,1,2,3,4,5].map(j=>`${fmt(60*Math.cos(j*Math.PI/3))},${fmt(60*Math.sin(j*Math.PI/3))}`).join(' ')}" fill="#F4C542" stroke="${OL}" stroke-width="6"/><path d="M-30,-18L-8,-8M30,-18L8,-8" stroke="#2E2430" stroke-width="6" stroke-linecap="round"/><circle cx="-18" cy="2" r="7" fill="#2E2430"/><circle cx="18" cy="2" r="7" fill="#2E2430"/><path d="M-14,24Q0,16 14,24" stroke="#2E2430" stroke-width="5" fill="none" stroke-linecap="round"/>`,'filter="url(#dsh)"');
  // enzim memantul
  if(t>35.8&&t<39.4){const b=Math.abs(Math.sin((t-35.8)*4));s+=g(tr(px-130-b*60,py-20,0.8),enzyme(t,1));const kx=popS(t,36.5,.35);if(kx>0)s+=g(tr(px-150,py-140,0.5*kx),xmark(1));}
  // gula tidak muncul
  if(t>37.6&&t<39.6){const k=popS(t,37.8,.4);s+=g(tr(px+170,py-60,k),`<g filter="url(#dsh)">${sugarCube(0,0,40)}</g>`)+g(tr(px+170,py-40,0.55*popS(t,38.3,.35)),xmark(1));}
  // bakteri baik di usus besar
  for(let i=0;i<5;i++){const k=popS(t,41.8+i*0.12,.4);if(k<=0)continue;const a=t*1.2+i*1.3;s+=g(tr(780+i*100,1330+18*Math.sin(a),0.55*k,Math.sin(a)*10),bacterium(1,['#7BC96F','#5DB7EA','#9CD08A','#F59A92','#7BC96F'][i],0,'good',t));}
  return s;},
 cam:t=>t<39.4?camV(t,34.05,39.4,[900,760,1.25],[920,760,1.18]):camV(t,39.4,43.75,[960,960,1.05],[960,1150,1.15]),
 hud:t=>{let s=hudLabel(t,35.03,'BANDEL!',{bg:'#E8505B'});
  if(t>36.1&&t<39.4)s+=hudLabel(t,36.15,'susah dicerna',{bg:'#5B6C8F',size:isV?54:48,y:isV?540:220,r:2});
  if(t>41.0)s+=hudLabel(t,41.1,'USUS BESAR',{bg:'#F4C542',fill:OL,size:isV?56:50,y:isV?540:220,r:2});
  s+=srcText('Ilustrasi disederhanakan',fadeIn(t,34.1,.4));return s;}
});

// 8 PENELITIAN 2015 43.75 - 58.45
S.push({t0:43.75,t1:58.45,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#16343F"/><circle cx="960" cy="900" r="640" fill="#2E7E8F" opacity=".45" filter="url(#glowf)"/>`;
  if(t<54.7){
   const kD=popS(t,43.85,.5);
   if(t<46.4) s+=g(tr(960,1000,1.6*kD,-2),`<rect x="-220" y="-280" width="440" height="560" rx="26" fill="#fff" stroke="${OL}" stroke-width="7"/><rect x="-170" y="-220" width="340" height="40" rx="10" fill="#2C8FC4"/>${[0,1,2,3,4,5,6].map(i=>`<rect x="-170" y="${-140+i*50}" width="${i%3==2?220:340}" height="18" rx="9" fill="#C9D3E3"/>`).join('')}`,'filter="url(#dsh)"');
   else {
    // dua mangkuk + batang
    const base=isV?1150:1100, xs=isV?[740,1180]:[700,1220], val=[0.64,1.65], col=['#F2A541','#2C8FC4'], nm=['Nasi baru','Nasi kulkas 24 jam'];
    for(let i=0;i<2;i++){const k=popS(t,i==0?46.6:47.7,.5);if(k<=0)continue;
     s+=g(tr(xs[i],base+60,0.62*k),riceBowl(t,1,{steam:i==0,cold:i==1}),'filter="url(#dsh)"');
     const gh=clamp((t-50.9-i*0.25)/1.0);const hh=val[i]*(isV?270:190)*eout(gh);
     if(gh>0){s+=`<rect x="${xs[i]-90}" y="${fmt(base-80-hh)}" width="180" height="${fmt(hh)}" rx="14" fill="${col[i]}" stroke="${OL}" stroke-width="6"/>`;
      s+=bigText(String(val[i]).replace('.',','),xs[i],fmt(base-110-hh),74,{font:'Inter',sw:10,op:fadeIn(t,51.4+i*0.25,.3)});}
     s+=g(tr(xs[i],base+175,k),label(nm[i],{size:isV?40:44,bg:col[i]}));}
    const kx=popS(t,52.2,.45);if(kx>0)s+=g(tr(960,base-300,kx,-4),`<circle r="110" fill="#FFE27A" stroke="${OL}" stroke-width="10"/><text x="0" y="34" text-anchor="middle" font-family="Inter" font-weight="800" font-size="92" fill="${OL}">2,5x</text>`,'filter="url(#dsh)"');
   }
  } else {
   // grafik gula darah
   const X0=isV?520:420, X1=isV?1400:1500, Y0=1260, Y1=640;
   s+=`<rect x="${X0-60}" y="${Y1-80}" width="${X1-X0+120}" height="${Y0-Y1+180}" rx="30" fill="#0E2730" opacity=".7"/>`;
   s+=`<path d="M${X0},${Y1}L${X0},${Y0}L${X1},${Y0}" stroke="#fff" stroke-width="8" fill="none" stroke-linecap="round"/>`;
   const dr=clamp((t-54.9)/1.6);
   const curve=(amp,col)=>{let d='';const N=40;for(let i=0;i<=N*dr;i++){const x=i/N;const y=amp*Math.exp(-Math.pow((x-0.32)/0.2,2))*1.0+amp*0.15*x;d+=(i?'L':'M')+fmt(lerp(X0,X1,x))+','+fmt(Y0-20-y);}return `<path d="${d}" stroke="${col}" stroke-width="14" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;};
   s+=curve(480,'#F2A541')+curve(330,'#2C8FC4');
   const kl=fadeIn(t,56.4,.4);
   s+=`<g opacity="${fmt(kl)}">`+label('nasi baru',{x:X1-190,y:Y1+40,size:40,bg:'#F2A541'})+label('nasi kulkas',{x:X1-190,y:Y1+140,size:40,bg:'#2C8FC4'})+`</g>`;
   s+=bigText('gula darah',X0+20,Y1-20,46,{anchor:'start',fill:'#9FE3F5'});
  }
  return s;},
 cam:t=>t<46.4?camV(t,43.75,46.4,[960,1000,1.0],[960,980,1.1]):t<54.7?camV(t,46.4,54.7,[960,1080,1.05],[960,1000,1.0]):camV(t,54.7,58.45,[960,980,1.0],[960,960,1.08]),
 hud:t=>{let s='';if(t<46.4)s+=hudLabel(t,44.2,'PENELITIAN 2015',{bg:'#5B6C8F'});
  else if(t<54.7)s+=hudLabel(t,50.9,'PATI RESISTEN',{bg:'#F4C542',fill:OL});
  else s+=hudLabel(t,57.7,'LEBIH RENDAH!',{bg:'#3BB273'});
  s+=srcText('Sumber: Sonia dkk., Asia Pac J Clin Nutr (2015)'+(t>46.4&&t<54.7?' · satuan g/100 g':''),fadeIn(t,44.2,.4));return s;}
});

// 9 TUNGGU DULU 58.45 - 73.15
S.push({t0:58.45,t1:73.15,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#E7E1D6"/><circle cx="960" cy="900" r="600" fill="#fff" opacity=".6" filter="url(#glowf)"/>`;
  if(t<65.9){
   const kb=popS(t,61.4,.5);
   if(t<61.4) s+=yuma({x:960,y:1480,s:1.45,expr:'think',aL:70,aR:-80+Math.sin(t*3)*4,blink:blinkAt(t,5)});
   else {s+=g(tr(960,1150,1.9*kb),riceBowl(t,1,{cold:true}),'filter="url(#dsh)"');
    // tongkat sihir + bintang
    for(let i=0;i<5;i++){const a=t*2+i*1.25;s+=g(tr(960+Math.cos(a)*330,900+Math.sin(a)*160,0.6*kb),`<path d="M0,-40L12,-12L42,-12L18,6L28,36L0,18L-28,36L-18,6L-42,-12L-12,-12Z" fill="#FFE27A" stroke="${OL}" stroke-width="4"/>`);}
    const kx=popS(t,63.1,.4);if(kx>0)s+=g(tr(960,1000,1.9*kx,6),xmark(1));
    const kk=popS(t,63.7,.45);if(kk>0)s+=g(tr(960,isV?1340:1330,kk),label('kalori turun SEDIKIT',{size:isV?50:52,bg:'#5B6C8F'}));}
  } else if(t<69.5){
   const cols=5;for(let i=0;i<15;i++){const k=popS(t,68.36+i*0.04,.35);if(k<=0)continue;s+=person(isV?640+(i%cols)*160:600+(i%cols)*180,900+Math.floor(i/cols)*190,0.9*k,'#5B6C8F');}
   const kd=popS(t,66.05,.45);if(kd>0)s+=g(tr(960,isV?1500:1440,kd),`<rect x="-190" y="-60" width="380" height="110" rx="20" fill="#fff" stroke="${OL}" stroke-width="6"/><circle cx="-120" cy="-6" r="26" fill="none" stroke="${OL}" stroke-width="8"/><path d="M-100,14L-80,34" stroke="${OL}" stroke-width="10" stroke-linecap="round"/><text x="30" y="14" text-anchor="middle" font-family="B2" font-weight="800" font-size="48" fill="${OL}">studi kecil</text>`,'filter="url(#dsh)"');
  } else {
   const xs=isV?[740,1180]:[700,1220];
   for(let i=0;i<2;i++){const k=popS(t,70.86+i*0.2,.45);if(k>0)s+=g(tr(xs[i],1080,(isV?0.85:1)*k),plateRice(1),'filter="url(#dsh)"');}
   s+=yuma({x:960,y:1600,s:1.05,expr:'surprised',aL:120,aR:120,blink:blinkAt(t,6)});
   const ke=popS(t,71.8,.4);if(ke>0)s+=g(tr(960,820,ke),`<circle r="78" fill="#fff" stroke="${OL}" stroke-width="7"/><path d="M-36,-16L36,-16M-36,18L36,18" stroke="${OL}" stroke-width="16" stroke-linecap="round"/>`,'filter="url(#dsh)"');
  }
  return s;},
 cam:t=>t<61.4?camV(t,58.45,61.4,[960,1150,1.15],[960,1100,1.05]):t<65.9?camV(t,61.4,65.9,[960,1080,1.0],[960,1050,1.1]):t<69.5?camV(t,65.9,69.5,[960,1050,1.08],[960,1050,1.0]):camV(t,69.5,73.15,[960,1150,1.0],[960,1100,1.1]),
 hud:t=>{let s='';
  if(t<61.4) s+=hudLabel(t,59.3,'TUNGGU DULU!',{bg:'#F4C542',fill:OL});
  else if(t<65.9) s+=hudLabel(t,62.3,'DIET AJAIB?',{bg:'#5B6C8F'});
  else if(t<69.5){s+=hudLabel(t,68.36,'CUMA 15 ORANG',{bg:'#E8505B'});}
  else s+=hudLabel(t,71.1,'2 PIRING = SAMA AJA',{bg:'#E8505B',size:isV?62:58});
  return s;}
});

// 10 BAHAYA: Bacillus cereus 73.15 - 91.85
S.push({t0:73.15,t1:91.85,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#2A1F2B"/><circle cx="960" cy="900" r="640" fill="#8E3B4F" opacity="${fmt(0.35+0.15*Math.sin(t*6))}" filter="url(#glowf)"/>`;
  if(t<75.3){const kw=popS(t,73.3,.5);s+=g(tr(960,1000,1.3*kw),`<path d="M0,-220L210,150Q220,170 196,170L-196,170Q-220,170 -210,150Z" fill="#F4C542" stroke="${OL}" stroke-width="12" stroke-linejoin="round"/><rect x="-18" y="-110" width="36" height="160" rx="18" fill="${OL}"/><circle cx="0" cy="105" r="22" fill="${OL}"/>`,'filter="url(#dsh)"');}
  else if(t<79.6){
   s+=g(tr(960,1180,1.5),riceBowl(t,1,{}),'filter="url(#dsh)"');
   for(let i=0;i<6;i++){const k=popS(t,76.54+i*0.08,.4);if(k<=0)continue;const a=i*1.05+t*0.4;s+=`<circle cx="${fmt(960+Math.cos(a)*120)}" cy="${fmt(990+Math.sin(a)*40)}" r="${fmt(18*k)}" fill="#C77DDB" stroke="${OL}" stroke-width="4"/>`;}
   const kb=popS(t,77.27,.5);if(kb>0)s+=g(tr(isV?1180:1320,760,0.95*kb,-6),bacterium(1,'#C77DDB',0,'evil',t),'filter="url(#dsh)"');
   if(t>78.4){s+=g(tr(960,1420,1.1),flame(t,1));const ks=popS(t,78.8,.4);if(ks>0)s+=g(tr(isV?760:620,800,ks,-3),label('TAHAN DIMASAK',{size:44,bg:'#E5383B'}));}
  } else if(t<84.95){
   s+=table();s+=`<rect x="1240" y="380" width="420" height="440" rx="18" fill="#1B2347" stroke="#7D6F60" stroke-width="16"/><circle cx="1540" cy="500" r="48" fill="#F6E7A8"/><circle cx="1562" cy="486" r="44" fill="#1B2347"/>`;
   s+=g(tr(isV?720:560,640,0.9),clockFace(t,1,8));
   s+=g(tr(960,1240,1.3),riceBowl(t,1,{}),'filter="url(#dsh)"');
   const n=Math.floor(clamp((t-82.4)/1.6)*14);
   for(let i=0;i<n;i++){const a=i*0.9+t;const R=120+rnd(i)*240;s+=g(tr(960+Math.cos(a)*R,960+Math.sin(a*1.2)*R*0.45,0.42,a*20),bacterium(1,'#C77DDB',0,'evil',t));}
   const kr=popS(t,84.33,.45);if(kr>0)s+=g(tr(isV?1200:1340,820,1.1*kr),poisonDrop(1),'filter="url(#dsh)"');
  } else if(t<88.3){
   s+=g(tr(960,1300,1.3),flame(t,1.3));
   s+=g(tr(960,1000,1.25),riceBowl(t,1,{steam:true}),'filter="url(#dsh)"');
   s+=g(tr(isV?1180:1300,820,1.0+0.05*Math.sin(t*6)),poisonDrop(1),'filter="url(#dsh)"');
   const kx=popS(t,85.71,.45);if(kx>0)s+=g(tr(isV?1180:1500,isV?600:1000,kx,3),label('TETAP ADA!',{size:56,bg:'#E5383B'}));
  } else {
   s+=g(`translate(960 ${isV?1820:1560}) scale(1.6)`,`<g>${yHead('worried',false)}</g>`,'filter="url(#dsh)"');
   s+=`<path d="M880,980Q960,1000 1040,980" stroke="#7BC96F" stroke-width="0"/>`;
   const nm=['MUAL','MUNTAH','DIARE'],tt=[89.25,89.97,91.02];
   for(let i=0;i<3;i++){const k=popS(t,tt[i],.45);if(k>0)s+=g(tr(isV?640+i*320:520+i*440,isV?720+((i%2)*60):660,k,i==1?3:-3),label(nm[i],{size:isV?48:64,bg:'#E5383B'}));}
  }
  return s;},
 cam:t=>t<75.3?camV(t,73.15,75.3,[960,1000,1.0],[960,1000,1.12]):t<79.6?camV(t,75.3,79.6,[960,1050,1.0],[980,1000,1.1]):t<84.95?camV(t,79.6,84.95,[960,1000,1.1],[960,960,1.0]):t<88.3?camV(t,84.95,88.3,[960,1050,1.0],[960,1000,1.1]):camV(t,88.3,91.85,[960,1000,1.12],[960,960,1.0]),
 hud:t=>{let s='';
  if(t<75.3) s+=hudLabel(t,74.1,'ADA BAHAYANYA!',{bg:'#E5383B'});
  else if(t<79.6) s+=hudLabel(t,77.27,'Bacillus cereus',{bg:'#F4C542',fill:OL});
  else if(t<84.95){s+=hudLabel(t,81.4,'SUHU RUANG BERJAM-JAM',{bg:'#5B6C8F',size:isV?54:52});}
  else if(t<88.3) s+=hudLabel(t,85.0,'DIPANASKAN LAGI?',{bg:'#5B6C8F'});
  s+=srcText('Sumber: Food Standards Scotland / NHS',fadeIn(t,77.3,.4));return s;}
});

// 11 PLOT TWIST 91.85 - 101.6
S.push({t0:91.85,t1:101.6,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#2B1B14"/><circle cx="960" cy="960" r="700" fill="#A3542A" opacity=".45" filter="url(#glowf)"/>`+rays(960,100,7,1500,8,.35);
  if(t<97.7){
   const xs=isV?[720,1200]:[600,1320];
   const kl=popS(t,94.2,.5);
   s+=g(tr(xs[0],1240,1.0*kl),riceBox(1.1),'filter="url(#dsh)"');
   if(t>95.4){const kx=popS(t,95.6,.4);s+=g(tr(xs[0],1180,1.2*kx,8),xmark(1));}
   if(t>96.4){const kf=popS(t,96.6,.5);s+=`<circle cx="${xs[1]}" cy="1000" r="420" fill="#BFE9FF" opacity="${fmt(0.35*kf)}" filter="url(#glowf)"/>`+g(`translate(${xs[1]} 1440) scale(${(0.8*kf).toFixed(3)})`,fridge(t,1));}
  } else {
   s+=table();
   s+=`<rect x="1240" y="380" width="420" height="440" rx="18" fill="#1B2347" stroke="#7D6F60" stroke-width="16"/><circle cx="1540" cy="500" r="48" fill="#F6E7A8"/><circle cx="1562" cy="486" r="44" fill="#1B2347"/>`;
   s+=g(tr(960,1240,1.4),riceBowl(t,1,{}),'filter="url(#dsh)"');
   for(let i=0;i<8;i++){const k=popS(t,98.2+i*0.1,.4);if(k<=0)continue;const a=i*0.8+t;s+=g(tr(960+Math.cos(a)*300,980+Math.sin(a*1.3)*120,0.42*k,a*20),bacterium(1,'#C77DDB',0,'evil',t));}
  }
  return s;},
 cam:t=>t<93.5?camV(t,91.85,93.5,[960,980,1.0],[960,960,1.1]):t<97.7?camV(t,93.5,97.7,[isV?720:900,1050,1.0],[isV?1200:1000,1050,1.0]):camV(t,97.7,101.6,[960,1050,1.0],[960,1000,1.12]),
 hud:t=>{let s='';
  if(t<93.6){s+=letterbox(t,91.85);const k=popS(t,92.0,.45)*(1-ss((t-93.3)/.3));if(k>0)s+=g(tr(W/2,isV?430:180,k,-3),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="${isV?140:120}" fill="url(#gold)" filter="url(#tsh)">PLOT TWIST!</text>`);}
  else if(t<97.7){s+=hudLabel(t,95.34,'BUKAN SISANYA',{bg:'#E5383B',x:isV?W/2:600,y:isV?420:130});if(t>96.6)s+=hudLabel(t,96.77,'TAPI KULKASNYA!',{bg:'#3BB273',x:isV?W/2:1320,y:isV?560:130,r:3});}
  else s+=hudLabel(t,100.0,'PALING BERISIKO!',{bg:'#E5383B'});
  return s;}
});

// 12 CARA AMAN 101.6 - 113.7
S.push({t0:101.6,t1:113.7,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#CDEBF5"/><circle cx="960" cy="800" r="600" fill="#fff" opacity=".6" filter="url(#glowf)"/>`+rays(960,0,7,1500,9,.5)+`<rect y="1360" width="1920" height="560" fill="#9FD3E6"/>`;
  s+=yuma({x:isV?700:620,y:1440,s:isV?1.05:1.3,expr:'happy',aR:-60+Math.sin(t*3)*6,aL:60,holdR:g('scale(.35)',riceBox(1)),blink:blinkAt(t,11)});
  const kc=popS(t,102.0,.5);
  if(kc>0){const items=[['Dinginkan ≤ 1 jam',104.25],['Simpan di kulkas',106.7],['Habiskan 1 hari',108.0],['Panaskan 1x',109.9]];
   let c=`<rect x="-300" y="-330" width="600" height="660" rx="40" fill="#fff" stroke="${OL}" stroke-width="8"/><text x="0" y="-240" text-anchor="middle" font-family="B2" font-weight="800" font-size="62" fill="${OL}">Cara aman:</text>`;
   items.forEach(([txt,tt],i)=>{const y=-120+i*130;const k=popS(t,tt,.4);if(k>0)c+=g(tr(-210,y,k),check(0.6));c+=`<text x="-150" y="${y+20}" font-family="B2" font-weight="800" font-size="52" fill="${OL}" opacity="${fmt(fadeIn(t,tt))}">${txt}</text>`;});
   s+=g(tr(isV?1150:1260,isV?960:900,(isV?0.82:0.85)*kc,2),c,'filter="url(#dsh)"');}
  return s;},
 cam:t=>isV?camV(t,101.6,113.7,[860,1000,1.0],[1100,980,1.04]):camV(t,101.6,113.7,[960,1000,1.08],[1000,960,1.0]),
 hud:t=>hudLabel(t,102.3,'JADI CARANYA GINI',{bg:'#3BB273'})+srcText('Sumber: Food Standards Scotland / NHS',fadeIn(t,104.2,.4))
});

// 13 CTA 113.7 - end
S.push({t0:113.7,t1:118.4,
 world:t=>{const sl=eout((t-113.7)/.5);
  let s=`<rect width="1920" height="1920" fill="#222"/>`;
  s+=`<path d="M0,0L${fmt(lerp(-200,1040,sl))},0L${fmt(lerp(-400,880,sl))},1920L0,1920Z" fill="#E07B39"/><path d="M1920,0L${fmt(lerp(2120,1040,sl))},0L${fmt(lerp(2320,880,sl))},1920L1920,1920Z" fill="#2C8FC4"/>`;
  const L=isV?720:620,Rr=isV?1200:1320;
  s+=g(tr(L,1080,(isV?0.75:0.95)*popS(t,114.5,.5)),riceBowl(t,1,{steam:true}),'filter="url(#dsh)"')+g(tr(Rr,1080,(isV?0.75:0.95)*popS(t,115.5,.5)),riceBowl(t,1,{cold:true}),'filter="url(#dsh)"');
  s+=bigText(isV?'TIM ANGET':'TIM NASI ANGET',L,640,isV?66:80,{sw:10})+bigText(isV?'TIM KULKAS':'TIM NASI KULKAS',Rr,640,isV?66:80,{sw:10});
  const kv=popS(t,115.25,.4);if(kv>0)s+=g(tr(960,870,kv,-6),`<circle r="96" fill="#FFE27A" stroke="${OL}" stroke-width="10"/><text x="0" y="30" text-anchor="middle" font-family="B2" font-weight="800" font-size="90" fill="${OL}">VS</text>`,'filter="url(#dsh)"');
  const yk=eout((t-113.9)/.6);
  s+=yuma({x:960,y:lerp(1900,1480,yk),s:1.0,expr:'happy',aR:-60+Math.sin(t*9)*14,aL:70,blink:blinkAt(t,13)});
  const kc=popS(t,116.79,.45);if(kc>0)s+=g(tr(isV?1130:1290,1240,kc*(isV?.85:1),3),bubble(520,170,'bl')+`<text x="0" y="20" text-anchor="middle" font-family="B2" font-weight="800" font-size="58" fill="${OL}">Tulis di komentar!</text>`,'filter="url(#dsh)"');
  return s;},
 cam:t=>camV(t,113.7,118.4,[960,1000,1.0],[960,980,1.06]),
 hud:t=>''
});

const THUMB={t:3.0,lines:['MASA SIH','NASI DINGIN','LEBIH SEHAT?']};
