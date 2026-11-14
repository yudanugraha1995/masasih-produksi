// ===== Is ChatGPT BANNED in Your Country? (How Come, gaya kompetitor Allow/Ban, 9 negara) =====
/*SFX_EXTRA [[0.33,"pop",0.4],[0.51,"pop",0.4],[0.69,"pop",0.4],[0.87,"pop",0.4],[1.05,"pop",0.4],[1.23,"pop",0.4],[1.41,"pop",0.4],[1.59,"pop",0.45]]*/
/* urutan tipe scene untuk sfx.py: sHook({ sFact({ sFact({ sFact({ sFact({ sFact({ sFact({ sFact({ sFact({ sPlot({ sCTA({ */
{const E=DUR+0.2;
const C=[ // kode, nama, kata pemicu, boleh?, teks stempel, kata pemicu stempel, catatan kecil, sumber
 ['us','USA','America',true,'ALLOWED','allowed','Made in the USA','Source: OpenAI, supported countries'],
 ['au','AUSTRALIA','Australia',true,'ALLOWED','allowed','','Source: OpenAI, supported countries'],
 ['uk','UK','The UK',true,'ALLOWED','allowed','','Source: OpenAI, supported countries'],
 ['id','INDONESIA','Indonesia',true,'ALLOWED','allowed','','Source: OpenAI, supported countries'],
 ['cn','CHINA','China',false,'BLOCKED','blocked','Blocked since 2023','Source: Caixin (2024), OpenAI'],
 ['ru','RUSSIA','Russia',false,'NOT AVAILABLE','not','','Source: OpenAI, supported countries'],
 ['ir','IRAN','Iran',false,'BLOCKED','blocked','','Source: OpenAI, supported countries'],
 ['kp','NORTH KOREA','North',false,'NO INTERNET','internet','Most people are offline','Source: OpenAI, supported countries'],
];
const GRID=[...C.map(c=>[c[0],c[1]]),['it','ITALY']];
const bP=at('Plot')-0.15, bC=at('Is it')-0.15, tIT=at('Italy'), t23=at('2023'), t4=at('four');
const starts=C.map(c=>at(c[2])-0.15);
// 1) HOOK: 9 bendera
S.push({t0:0,t1:starts[0],
 world:t=>{let s=bgGlow('#101a33','#5DB7EA',.45)+rays(960,150,7,1400,9,.35,Math.sin(t*.5)*3);
  GRID.forEach(([c,n],i)=>{const x=700+(i%3)*260,y=820+Math.floor(i/3)*200,t0=0.15+i*0.18;
   s+=popAt(t,t0,flag(t,c,.4),x,y,1,(i%2?3:-3))+popAt(t,t0+0.08,`<text text-anchor="middle" font-family="B2" font-weight="800" font-size="32" fill="#fff" stroke="${OL}" stroke-width="8" paint-order="stroke">${n}</text>`,x,y+82,1);});
  return s;},
 cam:t=>camV(t,0,starts[0],[960,1010,1.0],[960,990,1.06]),
 hud:t=>g(tr(540,420,popS(t,0.1,.5),-4),`<text text-anchor="middle" font-family="B2" font-weight="800" font-size="96" fill="#fff" stroke="${OL}" stroke-width="12" paint-order="stroke">IS CHATGPT</text>`)+g(tr(540,530,popS(t,at('banned'),.45),3),`<text text-anchor="middle" font-family="B2" font-weight="800" font-size="110" fill="#E5383B" stroke="#fff" stroke-width="12" paint-order="stroke">BANNED?</text>`)+hudLabel(t,at('check'),'LET\'S CHECK 9 COUNTRIES',{y:1330,size:50,bg:'#5B6C8F'})});
// 2) 8 negara: bendera + robot + stempel
C.forEach(([c,n,w,ok,txt,sw,note,src],i)=>{const t0=starts[i],t1=i<C.length-1?starts[i+1]:bP,ts=at(sw,t0);
 sFact({t0,t1,bg:ok?'#12331F':'#3A1616',glow:ok?'#3BB273':'#E5383B',c0:[960,980,1.06],c1:[960,960,1.0],
  world:t=>popAt(t,t0+0.05,flag(t,c,.85),960,640,1,(i%2?3:-3))+popAt(t,t0+0.2,chatBot(t,.55),960,1000,1)+(ok?checkAt(t,ts+0.15,1110,880,0.75):xAt(t,ts+0.15,1110,880,0.85)),
  labels:[{at:t0+0.05,txt:n,bg:'#5B6C8F'}],
  hud:t=>stamp(t,ts,ok,txt,540,1200,.95)+(note?g(tr(540,1310,popS(t,ts+0.4,.4)),`<text text-anchor="middle" font-family="B2" font-weight="800" font-size="44" fill="#FFE27A" stroke="${OL}" stroke-width="9" paint-order="stroke">${note}</text>`):'')+`<text x="1040" y="330" text-anchor="end" font-family="B2" font-weight="800" font-size="44" fill="#fff" stroke="${OL}" stroke-width="8" paint-order="stroke" opacity="${fmt(fadeIn(t,t0,.2))}">${i+1}/9</text>`,
  src});});
// 3) PLOT TWIST: Italia
const tc=tIT-0.1;
S.push({t0:bP,t1:bC,
 world:t=>{let s=bgGlow('#2B1B14','#A3542A',.45)+rays(960,100,7,1500,8,.35);
  if(t<tc)return s+g(tr(960,1000,1.2),chatBot(t,1))+`<rect width="1920" height="1920" fill="#06121C" opacity=".5"/>`;
  return s+popAt(t,tIT,flag(t,'it',.85),960,640,1,-2)+popAt(t,tIT+0.2,chatBot(t,.55),960,1000,1)+(t<t4?xAt(t,at('banned',tIT)+0.1,1110,880,0.85):checkAt(t,t4+0.6,1110,880,0.75));},
 cam:t=>t<tc?camV(t,bP,tc,[960,980,1.0],[960,960,1.1]):camV(t,tc,bC,[960,1000,1.06],[960,960,1.0]),
 hud:t=>{let s='';if(t<tc+0.2){s+=letterbox(t,bP);const k=popS(t,bP+0.05,.4)*(1-ss((t-tc+0.1)/.3));if(k>0)s+=g(tr(540,430,k,-3),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="150" fill="url(#gold)" filter="url(#tsh)">PLOT TWIST!</text>`);return s;}
  s+=hudLabel(t,tIT,'ITALY',{bg:'#009246'})+`<text x="1040" y="330" text-anchor="end" font-family="B2" font-weight="800" font-size="44" fill="#FFE27A" stroke="${OL}" stroke-width="8" paint-order="stroke">9/9</text>`;
  s+=t<t4?stamp(t,t23,false,'BANNED 2023',540,1200,.9)+g(tr(540,1310,popS(t,at('first',tIT),.4)),`<text text-anchor="middle" font-family="B2" font-weight="800" font-size="42" fill="#FFE27A" stroke="${OL}" stroke-width="9" paint-order="stroke">1st Western country!</text>`):stamp(t,t4,true,'ONLY 4 WEEKS',540,1200,.9);
  return s+srcText('Source: Italian Garante (Mar 31 - Apr 28, 2023)',fadeIn(t,tIT,.4));}});
// 4) CTA
S.push({t0:bC,t1:E,
 world:t=>{const sl=eout((t-bC)/.4);let s=`<rect width="1920" height="1920" fill="#222"/><path d="M0,0L${fmt(lerp(-200,1040,sl))},0L${fmt(lerp(-400,880,sl))},1920L0,1920Z" fill="#3BB273"/><path d="M1920,0L${fmt(lerp(2120,1040,sl))},0L${fmt(lerp(2320,880,sl))},1920L1920,1920Z" fill="#E5383B"/>`;
  s+=popAt(t,bC+0.2,chatBot(t,.4),720,1050,1)+checkAt(t,bC+0.35,820,960,0.7)+popAt(t,bC+0.3,chatBot(t,.4),1200,1050,1)+xAt(t,bC+0.45,1300,960,0.8);
  s+=bigText('ALLOWED',720,760,66,{sw:10})+bigText('BLOCKED',1200,760,66,{sw:10});
  const kv=popS(t,bC+0.45,.4);if(kv>0)s+=g(tr(960,900,kv,-6),`<circle r="90" fill="#FFE27A" stroke="${OL}" stroke-width="10"/><text x="0" y="30" text-anchor="middle" font-family="B2" font-weight="800" font-size="84" fill="${OL}">VS</text>`,'filter="url(#dsh)"');
  const kc=popS(t,at('Comment'),.45);if(kc>0)s+=g(tr(960,1300,kc*.9,3),bubble(520,170,'bl')+`<text x="0" y="20" text-anchor="middle" font-family="B2" font-weight="800" font-size="58" fill="${OL}">Comment below!</text>`,'filter="url(#dsh)"');return s;},
 cam:t=>camV(t,bC,E,[960,1000,1.0],[960,980,1.06]),hud:t=>hudLabel(t,bC+0.1,'IS IT ALLOWED WHERE YOU LIVE?',{size:52,bg:'#5B6C8F'})});
}
const THUMB={t:2.3,cy:1500,lines:['IS CHATGPT','BANNED IN','YOUR COUNTRY?']};
