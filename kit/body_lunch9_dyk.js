// ===== 9 Countries Feed Kids for FREE... But Not Australia?! (Did You Know, 9 negara) =====
/*SFX_EXTRA [[0.33,"pop",0.4],[0.51,"pop",0.4],[0.69,"pop",0.4],[0.87,"pop",0.4],[1.05,"pop",0.4],[1.23,"pop",0.4],[1.41,"pop",0.4],[1.59,"pop",0.45]]*/
/* urutan tipe scene untuk sfx.py: sHook({ sFact({ sFact({ sFact({ sFact({ sFact({ sFact({ sFact({ sFact({ sPlot({ sCTA({ */
{const E=DUR+0.2;
const C=[ // kode, nama, kata pemicu scene, angka, satuan, kata pemicu angka, sumber, props
 ['fi','FINLAND','Finland','1948','free lunch since','1948','Source: Finnish National Agency for Education','tray'],
 ['se','SWEDEN','Sweden','FREE','for every student','free','Source: Swedish Education Act','tray'],
 ['ee','ESTONIA','Estonia','FREE','for all students','free','Source: Euronews (2023)','tray'],
 ['br','BRAZIL','Brazil','40M','students fed (PNAE)','40','Source: Brazil FNDE / PNAE','kids'],
 ['in','INDIA','India','110M','kids - the BIGGEST!','110','Source: India Ministry of Education (PM POSHAN), 2025','kids'],
 ['id','INDONESIA','Indonesia','60M','people fed (MBG)','60','Source: Kemenkeu & BGN (MBG), 2026','kids'],
 ['us','USA','America','101,000+','schools serve lunch','101000','Source: USDA, National School Lunch Program','school'],
 ['uk','UK','The UK','AGE 4-7','eat lunch for FREE','four','Source: UK Dept for Education (UIFSM)','kids4'],
];
const GRID=[...C.map(c=>[c[0],c[1]]),['q','???']];
const bP=at('Plot')-0.15, bC=at('Should')-0.15, tAU=at('Australia'), tNO=at('doesn');
const starts=C.map(c=>at(c[2])-0.15);
// 1) HOOK: 9 bendera grid 3x3 di detik awal
S.push({t0:0,t1:starts[0],
 world:t=>{let s=bgGlow('#14213D','#F2A541',.5)+rays(960,150,7,1400,9,.4,Math.sin(t*.5)*3);
  GRID.forEach(([c,n],i)=>{const x=700+(i%3)*260,y=800+Math.floor(i/3)*200,t0=0.15+i*0.18;
   s+=popAt(t,t0,flag(t,c,.4),x,y,1,(i%2?3:-3))+popAt(t,t0+0.08,`<text text-anchor="middle" font-family="B2" font-weight="800" font-size="34" fill="#fff" stroke="${OL}" stroke-width="8" paint-order="stroke">${n}</text>`,x,y+82,1);});
  if(t>tNO)s+=xAt(t,tNO+0.1,1220,1200,0.75);return s;},
 cam:t=>camV(t,0,starts[0],[960,1010,1.0],[960,990,1.06]),
 hud:t=>g(tr(540,440,popS(t,0.1,.5),-4),`<text text-anchor="middle" font-family="B2" font-weight="800" font-size="104" fill="#FFE27A" stroke="${OL}" stroke-width="13" paint-order="stroke">9 COUNTRIES</text>`)+hudLabel(t,at('feed'),'FEED KIDS AT SCHOOL FOR FREE',{y:560,size:50,bg:'#3BB273'})+hudLabel(t,tNO,"...BUT ONE RICH COUNTRY DOESN'T!",{y:1330,size:46,bg:'#E5383B'})});
// 2) 8 negara, masing-masing satu scene
C.forEach(([c,n,w,num,unit,nw,src,prop],i)=>{const t0=starts[i],t1=i<C.length-1?starts[i+1]:bP,tn=at(nw,t0);
 sFact({t0,t1,bg:['#1B2347','#14213D','#16343F','#14301F','#3A2416','#3A1616','#1B2347','#14213D'][i],glow:['#002F6C','#FECC02','#0072CE','#009C3B','#FF9933','#E70011','#B22234','#C8102E'][i],
  c0:[960,980,1.08],c1:[960,960,1.0],
  world:t=>{let s=popAt(t,t0+0.05,flag(t,c,.85),960,660,1,(i%2?3:-3));
   if(prop==='tray')s+=popAt(t,tn,tray(.5),960,1290,1,-3);
   if(prop==='kids')s+=kids(t,tn,8,630,1290,['#F2A541','#E8505B','#3BB273','#5DB7EA']);
   if(prop==='kids4')s+=kids(t,tn,4,820,1290,['#F2A541','#5DB7EA','#E8505B','#3BB273']);
   if(prop==='school')s+=popAt(t,tn,school(.5),960,1300,1);return s;},
  labels:[{at:t0+0.05,txt:n,bg:'#5B6C8F'}],
  hud:t=>bigNum(t,tn,num,unit,540,990,{size:num.length>6?130:150})+`<text x="1040" y="330" text-anchor="end" font-family="B2" font-weight="800" font-size="44" fill="#fff" stroke="${OL}" stroke-width="8" paint-order="stroke" opacity="${fmt(fadeIn(t,t0,.2))}">${i+1}/9</text>`,
  src});});
// 3) PLOT TWIST: Australia
const tc=tAU-0.1;
S.push({t0:bP,t1:bC,
 world:t=>{let s=bgGlow('#2B1B14','#A3542A',.45)+rays(960,100,7,1500,8,.35);
  if(t<tc)return s+g(tr(960,1000,1.3),globe(t,1))+`<rect width="1920" height="1920" fill="#06121C" opacity=".5"/>`;
  return s+popAt(t,tAU,flag(t,'au',1.1),960,760,1,-2)+xAt(t,at('no',tAU),960,760,1.5)+popAt(t,at('national',tAU),tray(.5),960,1270,1,-4)+xAt(t,at('national',tAU)+0.2,960,1270,1);},
 cam:t=>t<tc?camV(t,bP,tc,[960,980,1.0],[960,960,1.1]):camV(t,tc,bC,[960,1000,1.06],[960,960,1.0]),
 hud:t=>{let s='';if(t<tc+0.2){s+=letterbox(t,bP);const k=popS(t,bP+0.05,.4)*(1-ss((t-tc+0.1)/.3));if(k>0)s+=g(tr(540,430,k,-3),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="150" fill="url(#gold)" filter="url(#tsh)">PLOT TWIST!</text>`);return s;}
  return hudLabel(t,tAU,'AUSTRALIA',{bg:'#012169'})+hudLabel(t,at('no',tAU),'NO NATIONAL PROGRAM',{y:560,size:56,bg:'#E5383B'})+`<text x="1040" y="330" text-anchor="end" font-family="B2" font-weight="800" font-size="44" fill="#FFE27A" stroke="${OL}" stroke-width="8" paint-order="stroke">9/9</text>`+srcText('Source: InDaily (Jan 2026), Tasmanian Government',fadeIn(t,tAU,.4));}});
// 4) CTA
S.push({t0:bC,t1:E,
 world:t=>{const sl=eout((t-bC)/.4);let s=`<rect width="1920" height="1920" fill="#222"/><path d="M0,0L${fmt(lerp(-200,1040,sl))},0L${fmt(lerp(-400,880,sl))},1920L0,1920Z" fill="#3BB273"/><path d="M1920,0L${fmt(lerp(2120,1040,sl))},0L${fmt(lerp(2320,880,sl))},1920L1920,1920Z" fill="#E5383B"/>`;
  s+=popAt(t,bC+0.2,tray(.5),720,1050,1)+popAt(t,bC+0.35,tray(.5),1200,1050,1)+xAt(t,bC+0.5,1200,1050,1);
  s+=bigText('FREE LUNCH',720,760,62,{sw:10})+bigText('NO FREE LUNCH',1200,760,54,{sw:10});
  const kv=popS(t,bC+0.45,.4);if(kv>0)s+=g(tr(960,900,kv,-6),`<circle r="90" fill="#FFE27A" stroke="${OL}" stroke-width="10"/><text x="0" y="30" text-anchor="middle" font-family="B2" font-weight="800" font-size="84" fill="${OL}">VS</text>`,'filter="url(#dsh)"');
  const kc=popS(t,at('Comment'),.45);if(kc>0)s+=g(tr(960,1300,kc*.9,3),bubble(520,170,'bl')+`<text x="0" y="20" text-anchor="middle" font-family="B2" font-weight="800" font-size="58" fill="${OL}">Comment below!</text>`,'filter="url(#dsh)"');return s;},
 cam:t=>camV(t,bC,E,[960,1000,1.0],[960,980,1.06]),hud:t=>hudLabel(t,bC+0.1,'SHOULD YOUR COUNTRY DO IT?',{size:54,bg:'#5B6C8F'})});
}
const THUMB={t:2.4,cy:1500,lines:['9 COUNTRIES','FEED KIDS FREE...','BUT NOT THIS ONE?']};
