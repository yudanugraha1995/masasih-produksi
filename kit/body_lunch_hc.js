// ===== Australia Has NO Free School Lunch?! (How Come, English, ranking negara) =====
/* urutan tipe scene untuk sfx.py: sHook({ sFact({ sFact({ sFact({ sFact({ sPlot({ sCTA({ */
{const E=DUR+0.2;
// ---------- bendera vektor ----------
function star7(r){let p='';for(let i=0;i<14;i++){const a=-Math.PI/2+i*Math.PI/7,rr=i%2?r*0.45:r;p+=(i?'L':'M')+fmt(rr*Math.cos(a))+','+fmt(rr*Math.sin(a));}return `<path d="${p}Z" fill="#fff"/>`;}
function star5(r){let p='';for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,rr=i%2?r*0.42:r;p+=(i?'L':'M')+fmt(rr*Math.cos(a))+','+fmt(rr*Math.sin(a));}return `<path d="${p}Z" fill="#fff"/>`;}
function ujack(w,h){return `<rect x="${-w/2}" y="${-h/2}" width="${w}" height="${h}" fill="#012169"/><path d="M${-w/2},${-h/2}L${w/2},${h/2}M${w/2},${-h/2}L${-w/2},${h/2}" stroke="#fff" stroke-width="${h*0.2}"/><path d="M${-w/2},${-h/2}L${w/2},${h/2}M${w/2},${-h/2}L${-w/2},${h/2}" stroke="#C8102E" stroke-width="${h*0.07}"/><path d="M0,${-h/2}L0,${h/2}M${-w/2},0L${w/2},0" stroke="#fff" stroke-width="${h*0.33}"/><path d="M0,${-h/2}L0,${h/2}M${-w/2},0L${w/2},0" stroke="#C8102E" stroke-width="${h*0.2}"/>`;}
function flagBody(c){
 if(c==='us'){let s=`<rect x="-210" y="-130" width="420" height="260" fill="#fff"/>`;for(let i=0;i<13;i+=2)s+=`<rect x="-210" y="${-130+i*20}" width="420" height="20" fill="#B22234"/>`;s+=`<rect x="-210" y="-130" width="180" height="140" fill="#3C3B6E"/>`;for(let j=0;j<5;j++)for(let i=0;i<6;i++)s+=`<circle cx="${-195+i*30+(j%2)*15}" cy="${-115+j*27}" r="5" fill="#fff"/>`;return s;}
 if(c==='uk')return ujack(420,260);
 if(c==='au'){let s=`<rect x="-210" y="-130" width="420" height="260" fill="#012169"/>`+g('translate(-105 -65)',ujack(210,130))+g('translate(-105 70)',star7(36));
  for(const [x,y,r] of [[105,-80,17],[50,-10,17],[160,-25,17],[105,85,17]])s+=g(`translate(${x} ${y})`,star7(r));return s+g('translate(132 25)',star5(9));}
 if(c==='id')return `<rect x="-210" y="-130" width="420" height="130" fill="#E70011"/><rect x="-210" y="0" width="420" height="130" fill="#fff"/>`;
 return `<rect x="-210" y="-130" width="420" height="260" fill="#5B6C8F"/><text x="0" y="45" text-anchor="middle" font-family="B2" font-weight="800" font-size="150" fill="#fff">?</text>`;}
function flag(t,c,s=1){const id='fc_'+c+Math.round(s*100);const wv=2.5*Math.sin(t*3+(c.charCodeAt(0)));
 return g(`scale(${s}) skewY(${fmt(wv)})`,`<clipPath id="${id}"><rect x="-210" y="-130" width="420" height="260" rx="14"/></clipPath><g clip-path="url(#${id})">${flagBody(c)}<path d="M-210,-130L-60,-130L-210,40Z" fill="#fff" opacity=".12"/></g><rect x="-210" y="-130" width="420" height="260" rx="14" fill="none" stroke="${OL}" stroke-width="8"/>`);}
// ---------- props ----------
function globe(t,s=1){const o=(t*40)%400;let c='';for(const [x,y,rx,ry] of [[-120,-60,90,60],[60,40,110,70],[-40,110,70,40],[150,-90,60,40],[-200,60,50,70]]){c+=`<ellipse cx="${fmt(((x+o+600)%800)-400)}" cy="${y}" rx="${rx}" ry="${ry}" fill="#7BC96F"/>`;}
 return g(`scale(${s})`,`<clipPath id="glb"><circle r="230"/></clipPath><circle r="230" fill="#3A8FD6"/><g clip-path="url(#glb)">${c}<circle cx="-80" cy="-90" r="160" fill="#fff" opacity=".12"/></g><circle r="230" fill="none" stroke="${OL}" stroke-width="9"/>`);}
function tray(s=1){return g(`scale(${s})`,`<rect x="-230" y="-140" width="460" height="280" rx="40" fill="#C9D3DA" stroke="${OL}" stroke-width="7"/><rect x="-205" y="-115" width="200" height="230" rx="24" fill="#E8EEF2"/><rect x="15" y="-115" width="190" height="105" rx="20" fill="#E8EEF2"/><rect x="15" y="10" width="190" height="105" rx="20" fill="#E8EEF2"/>`+g('translate(-105 10) scale(.75 .6)',riceMound())+`<circle cx="110" cy="-62" r="40" fill="#E5383B" stroke="${OL}" stroke-width="5"/><path d="M110,-102q6,-18 22,-22" stroke="#5E9C6B" stroke-width="7" fill="none"/><path d="M50,80q30,-50 60,0q30,-50 60,0" fill="#5E9C6B" stroke="${OL}" stroke-width="5"/>`);}
function school(s=1){let w='';for(let i=0;i<3;i++)w+=`<rect x="${-190+i*140}" y="-70" width="90" height="80" rx="8" fill="#BFE6F7" stroke="${OL}" stroke-width="5"/>`;
 return g(`scale(${s})`,`<rect x="-250" y="-130" width="500" height="290" fill="#F2C38B" stroke="${OL}" stroke-width="7"/><path d="M-280,-130L0,-290L280,-130Z" fill="#E5383B" stroke="${OL}" stroke-width="7" stroke-linejoin="round"/><circle cx="0" cy="-185" r="34" fill="#fff" stroke="${OL}" stroke-width="5"/>${w}<rect x="-50" y="40" width="100" height="120" rx="10" fill="#8C6A52" stroke="${OL}" stroke-width="5"/>`);}
function kids(t,t0,n,x0,y0,cols){let s='';for(let i=0;i<n;i++){const k=popS(t,t0+i*0.06,.35);if(k>0)s+=g(tr(x0+(i%8)*95,y0+Math.floor(i/8)*150,k*0.62),person(0,0,1,cols[i%cols.length]));}return s;}
function auMap(t,s=1){const pz=0.5+0.5*Math.sin(t*6);return g(`scale(${s})`,`<path d="M-300,-40C-300,-120 -220,-160 -150,-130C-110,-210 -40,-200 0,-150C30,-230 110,-230 130,-170C190,-200 260,-120 270,-40C300,40 250,120 180,150C120,200 40,170 0,130C-60,170 -160,170 -220,110C-280,80 -300,20 -300,-40Z" fill="#E9A23B" stroke="${OL}" stroke-width="8"/><path d="M130,215C150,200 185,205 190,230C192,255 160,270 140,255C125,245 120,228 130,215Z" fill="#E9A23B" stroke="${OL}" stroke-width="7"/><circle cx="160" cy="235" r="${fmt(40+30*pz)}" fill="none" stroke="#E5383B" stroke-width="8" opacity="${fmt(1-pz*0.6)}"/>`);}
const bW=at('Around')-0.15, bUS=at('In America')-0.15, bUK=at('In the UK')-0.15, bID=at('Indonesia')-0.15, bP=at('The plot')-0.15, bC=at('Should')-0.15;
const tNO=at('NO'), t466=at('466'), t101=at('101000'), tAge=at('four'), t60=at('60'), tAU=at('Australia'), tTas=at('Only');
// 1) HOOK
S.push({t0:0,t1:bW,
 world:t=>{let s=bgGlow('#14213D','#F2A541',.5)+rays(960,150,7,1400,9,.4,Math.sin(t*.5)*3);
  for(let i=0;i<10;i++){const sp=160+rnd(i)*160;const y=((t*sp+rnd(i+9)*1900)%2200)-200;const x=200+rnd(i+20)*1520;s+=g(tr(x,y,.5+rnd(i+5)*.5,t*50*(rnd(i)-.5)),`<circle r="34" fill="#E5383B" stroke="${OL}" stroke-width="4"/><path d="M0,-34q5,-16 18,-18" stroke="#5E9C6B" stroke-width="6" fill="none"/>`,'opacity=".8"');}
  s+=popAt(t,0.1,globe(t,1),960,960,1.05);s+=popAt(t,0.6,flag(t,'q',0.55),1250,790,1,8);
  s+=popAt(t,tNO,tray(.55),1180,1290,1,-4)+xAt(t,tNO+0.25,1180,1290,1.0);
  s+=popAt(t,0.9,`<text text-anchor="middle" font-family="B2" font-weight="800" font-size="220" fill="#FFE27A" stroke="${OL}" stroke-width="14" paint-order="stroke">?</text>`,700,1320,1,-12);return s;},
 cam:t=>camV(t,0,bW,[960,1060,1.0],[960,1000,1.1]),
 hud:t=>g(tr(540,470,popS(t,0.1,.5),-4),`<text text-anchor="middle" font-family="B2" font-weight="800" font-size="120" fill="#FFE27A" stroke="${OL}" stroke-width="14" paint-order="stroke">DID YOU KNOW?</text>`)+hudLabel(t,tNO,'NO FREE SCHOOL LUNCH?!',{y:600,size:62,bg:'#E5383B'})});
// 2) DUNIA
sFact({t0:bW,t1:bUS,bg:'#16343F',glow:'#2E7E8F',
 world:t=>popAt(t,bW+0.1,globe(t,1),960,700,.8)+kids(t,t466,16,630,1170,['#F2A541','#E8505B','#3BB273','#5DB7EA']),
 labels:[{at:bW+0.1,txt:'AROUND THE WORLD',bg:'#5B6C8F'}],hud:t=>bigNum(t,t466,'466M','kids fed at school',540,1010,{size:160}),
 src:'Source: WFP, State of School Feeding Worldwide 2025'});
// 3) USA
sFact({t0:bUS,t1:bUK,bg:'#1B2347',glow:'#B22234',
 world:t=>popAt(t,bUS+0.1,flag(t,'us',.85),960,660,1,-3)+popAt(t,bUS+0.6,school(.55),790,1290,1)+popAt(t,t101-0.3,tray(.45),1160,1320,1,4),
 labels:[{at:bUS+0.1,txt:'USA',bg:'#3C3B6E'}],hud:t=>bigNum(t,t101,'101,000+','schools serve lunch',540,990,{size:140}),
 src:'Source: USDA, National School Lunch Program'});
// 4) UK
sFact({t0:bUK,t1:bID,bg:'#14213D',glow:'#C8102E',
 world:t=>popAt(t,bUK+0.1,flag(t,'uk',.85),960,660,1,3)+kids(t,tAge,4,700,1290,['#F2A541','#5DB7EA','#E8505B','#3BB273'])+popAt(t,at('free',bUK),tray(.45),1180,1300,1,-4),
 labels:[{at:bUK+0.1,txt:'UNITED KINGDOM',bg:'#012169'}],hud:t=>bigNum(t,tAge,'AGE 4-7','eat lunch for FREE',540,990,{size:140}),
 src:'Source: UK Dept for Education (Universal Infant Free School Meals)'});
// 5) INDONESIA
sFact({t0:bID,t1:bP,bg:'#3A1616',glow:'#E70011',
 world:t=>popAt(t,bID+0.1,flag(t,'id',.85),960,660,1,-3)+kids(t,t60-0.4,16,630,1170,['#E70011','#F2A541','#fff','#5DB7EA']),
 labels:[{at:bID+0.1,txt:'INDONESIA',bg:'#E70011',until:at('biggest')},{at:at('biggest'),txt:'ONE OF THE BIGGEST EVER',bg:'#F2A541',fill:OL,size:58}],hud:t=>bigNum(t,t60,'~60M','people fed every day',540,990,{size:150}),
 src:'Source: Kemenkeu & BGN (MBG program), 2026'});
// 6) PLOT TWIST
const tc=at('That')-0.1;
S.push({t0:bP,t1:bC,
 world:t=>{let s=bgGlow('#2B1B14','#A3542A',.45)+rays(960,100,7,1500,8,.35);
  if(t<tc)return s+g(tr(960,1000,1.3),globe(t,1))+`<rect width="1920" height="1920" fill="#06121C" opacity=".5"/>`;
  if(t<tTas-0.1){s+=t<tAU?popAt(t,tc,flag(t,'q',1.2),960,800,1):popAt(t,tAU,flag(t,'au',1.25),960,800,1,-2)+xAt(t,tAU+0.35,960,800,1.6);
   s+=popAt(t,tAU+0.5,tray(.55),960,1270,1,-4)+xAt(t,tAU+0.7,960,1270,1);return s;}
  return s+popAt(t,tTas,auMap(t,1.25),960,820,1)+popAt(t,tTas+0.4,`<text text-anchor="middle" font-family="B2" font-weight="800" font-size="60" fill="#fff" stroke="${OL}" stroke-width="10" paint-order="stroke">TASMANIA</text>`,1160,1210,1);},
 cam:t=>t<tc?camV(t,bP,tc,[960,980,1.0],[960,960,1.1]):(t<tTas-0.1?camV(t,tc,tTas,[960,1000,1.05],[960,960,1.0]):camV(t,tTas,bC,[960,960,1.0],[1020,1000,1.1])),
 hud:t=>{let s='';if(t<tc+0.2){s+=letterbox(t,bP);const k=popS(t,bP+0.1,.45)*(1-ss((t-tc+0.1)/.3));if(k>0)s+=g(tr(540,430,k,-3),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="150" fill="url(#gold)" filter="url(#tsh)">PLOT TWIST!</text>`);return s;}
  if(t<tTas-0.1)return hudLabel(t,tAU,'AUSTRALIA',{bg:'#012169'})+hudLabel(t,tAU+0.4,'NO NATIONAL PROGRAM',{y:560,size:56,bg:'#E5383B'})+srcText('Source: InDaily (Jan 2026), Tasmanian Government',fadeIn(t,tAU,.4));
  return hudLabel(t,tTas,'ONLY SOME SCHOOLS IN TASMANIA',{size:52,bg:'#F2A541',fill:OL})+srcText('Source: Premier of Tasmania, School Lunch Program 2025',fadeIn(t,tTas,.4));}});
// 7) CTA
S.push({t0:bC,t1:E,
 world:t=>{const sl=eout((t-bC)/.5);let s=`<rect width="1920" height="1920" fill="#222"/><path d="M0,0L${fmt(lerp(-200,1040,sl))},0L${fmt(lerp(-400,880,sl))},1920L0,1920Z" fill="#3BB273"/><path d="M1920,0L${fmt(lerp(2120,1040,sl))},0L${fmt(lerp(2320,880,sl))},1920L1920,1920Z" fill="#E5383B"/>`;
  s+=popAt(t,bC+0.3,tray(.5),720,1050,1)+popAt(t,bC+0.5,tray(.5),1200,1050,1)+xAt(t,bC+0.7,1200,1050,1);
  s+=bigText('FREE LUNCH',720,760,62,{sw:10})+bigText('NO FREE LUNCH',1200,760,54,{sw:10});
  const kv=popS(t,bC+0.6,.4);if(kv>0)s+=g(tr(960,900,kv,-6),`<circle r="90" fill="#FFE27A" stroke="${OL}" stroke-width="10"/><text x="0" y="30" text-anchor="middle" font-family="B2" font-weight="800" font-size="84" fill="${OL}">VS</text>`,'filter="url(#dsh)"');
  const kc=popS(t,at('Comment'),.45);if(kc>0)s+=g(tr(960,1300,kc*.9,3),bubble(520,170,'bl')+`<text x="0" y="20" text-anchor="middle" font-family="B2" font-weight="800" font-size="58" fill="${OL}">Comment below!</text>`,'filter="url(#dsh)"');return s;},
 cam:t=>camV(t,bC,E,[960,1000,1.0],[960,980,1.06]),hud:t=>hudLabel(t,bC+0.1,'SHOULD YOUR COUNTRY DO IT?',{size:54,bg:'#5B6C8F'})});
}
const THUMB={t:2.6,lines:['WHICH COUNTRY','HAS NO FREE','SCHOOL LUNCH?']};
