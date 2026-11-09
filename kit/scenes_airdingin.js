// ---------- scenes ----------
// each scene: {t0,t1, world(t) -> svg (world 1920 sq), cam(t)->[cx,cy,zoom] per aspect, hud(t)->svg screen space}

// 1 HOOK 0 - 2.95
S.push({t0:0,t1:2.95,
 world:t=>{
  let s=`<rect width="1920" height="1920" fill="#0F2A3A"/><circle cx="960" cy="860" r="560" fill="#2C8FC4" opacity=".55" filter="url(#glowf)"/>`;
  s+=rays(960,240,7,1300,9,.5,Math.sin(t*.5)*3);
  // falling ice cubes background
  for(let i=0;i<14;i++){const sp=260+rnd(i)*240;const y=((t*sp+rnd(i+9)*1900)%2200)-200;const x=200+rnd(i+20)*1520;const sc=0.5+rnd(i+5)*0.9;const blur=sc<0.8?'url(#dof2)':(sc>1.2?'url(#dof)':'none');s+=g(tr(x,y,sc,t*60*(rnd(i)-.5)+i*20),iceCube(1),`filter="${blur}" opacity="${sc<0.8?.6:.95}"`);}
  // giant glass
  const k=popS(t,0.05,.6);
  s+=g(tr(960,1260,2.6*k),glass('cold',t),'filter="url(#dsh)"');
  // splash ice into glass
  const di=clamp((t-0.6)/0.5); if(di<1){s+=g(tr(960+(1-di)*40,lerp(380,820,eout(di)),1.1,di*120),iceCube(1));}
  // yuma bottom left holding up
  const yk=eout((t-0.15)/0.5);
  s+=yuma({x:lerp(420,560,yk),y:lerp(1900,1560,yk),s:1.25,expr:t<0.6?'surprised':'happy',aR:-40+Math.sin(t*8)*6,aL:70,blink:blinkAt(t,1)});
  return s;},
 cam:t=>camV(t,0,2.95,[960,1000,1.0],[960,960,1.12]),
 hud:t=>{const k=popS(t,0.15,.5);const k2=popS(t,0.65,.5);
  if(ASP==='v') return g(tr(540,420,k,-4),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="150" fill="#FFE27A" stroke="${OL}" stroke-width="14" paint-order="stroke">WOYYY!</text>`)+g(tr(540,600,k2),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="104" fill="#fff" stroke="${OL}" stroke-width="12" paint-order="stroke">AIR ES TIAP HARI?</text>`);
  return g(tr(330,230,k,-6),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="130" fill="#FFE27A" stroke="${OL}" stroke-width="12" paint-order="stroke">WOYYY!</text>`)+g(tr(1520,200,k2),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="90" fill="#fff" stroke="${OL}" stroke-width="11" paint-order="stroke">AIR ES</text><text x="0" y="100" text-anchor="middle" font-family="B2" font-weight="800" font-size="90" fill="#fff" stroke="${OL}" stroke-width="11" paint-order="stroke">TIAP HARI?</text>`);}
});

// 2 MOM SCOLDS 2.95 - 6.9
S.push({t0:2.95,t1:6.9,
 world:t=>{
  let s=room('#C9CFC4','#A7876D',true,t);
  s+=`<rect x="1240" y="380" width="420" height="520" fill="#FFF6D8" opacity=".25"/>`+rays(1450,380,5,1200,7,.35,-25);
  const talk=(t>3.1&&t<4.2)||(t>4.57&&t<6.3);
  s+=mom({x:ASP==='v'?700:640,y:1500,s:ASP==='v'?1.15:1.35,aR:-28+Math.sin(t*10)*(talk?6:0),aL:62,talk:talk&&Math.sin(t*22)>0,blink:blinkAt(t,4)});
  s+=yuma({x:ASP==='v'?1240:1300,y:1500,s:ASP==='v'?1.12:1.3,flip:true,expr:t>4.5?'worried':'surprised',aR:110,aL:65,holdR:glass('cold',t,0.55),blink:blinkAt(t,2)});
  // foreground blurred plant
  s+=g('translate(1760 1700)',`<path d="M0,0C-120,-260 -60,-420 0,-300C40,-460 160,-300 0,0" fill="#4E7F5C"/><rect x="-60" y="-10" width="120" height="160" rx="20" fill="#B56A4E"/>`,'filter="url(#dof)"');
  // bubbles
  const b1=popS(t,4.57,.45),b2=popS(t,5.32,.45);
  if(b1>0) s+=g(tr(ASP==='v'?880:380,ASP==='v'?620:660,b1*(ASP==='v'?.85:1),-3),bubble(560,200,'bl')+`<text x="0" y="22" text-anchor="middle" font-family="B2" font-weight="800" font-size="74" fill="${OL}">Nanti <tspan fill="#E5383B">GENDUT!</tspan></text>`,'filter="url(#dsh)"');
  if(b2>0) s+=g(tr(ASP==='v'?960:990,ASP==='v'?860:560,b2*(ASP==='v'?.8:1),3),bubble(700,200,'bl')+`<text x="0" y="22" text-anchor="middle" font-family="B2" font-weight="800" font-size="70" fill="${OL}">Nanti <tspan fill="#2C8FC4">BATUK PILEK!</tspan></text>`,'filter="url(#dsh)"');
  return s;},
 cam:t=>ASP==='v'?camV(t,2.95,6.9,[940,1000,1.0],[1000,980,1.08]):camV(t,2.95,6.9,[930,960,1.0],[1000,950,1.08]),
 hud:t=>''
});

// 3 CHAPTER CARD 6.9 - 10.8
S.push({t0:6.9,t1:10.8,
 world:t=>{
  let s=room('#AEB7AE','#8F7560',true,t);
  s+=rays(1450,380,5,1300,7,.45,-25);
  s+=yuma({x:960,y:1520,s:1.55,expr:'think',aL:70,aR:115,holdR:glass('cold',t,0.5),blink:false});
  // thought dots
  for(let i=0;i<3;i++){const k=popS(t,7.3+i*0.2,.3);s+=`<circle cx="${1180+i*60}" cy="${640-i*70}" r="${(14+i*8)*k}" fill="#fff" opacity=".9"/>`;}
  return s+`<rect width="1920" height="1920" fill="#06121C" opacity=".55"/>`;},
 cam:t=>camV(t,6.9,10.8,[960,1000,1.12],[960,940,1.0]),
 hud:t=>{const lb=ss((t-6.9)/0.4)*(ASP==='v'?150:110);let s=`<rect width="${W}" height="${lb}" fill="#000"/><rect y="${H-lb}" width="${W}" height="${lb}" fill="#000"/>`;
  const k=fadeIn(t,7.05,.5);const ky=lerp(30,0,eout((t-7.05)/.6));
  const lines=['MASA SIH','AIR DINGIN','SEBURUK ITU?'];const fs=ASP==='v'?132:118;const y0=ASP==='v'?720:300;
  lines.forEach((l,i)=>{s+=`<text x="${W/2}" y="${y0+i*fs*1.02+ky}" text-anchor="middle" font-family="B2" font-weight="800" font-size="${fs}" fill="url(#gold)" opacity="${k}" filter="url(#tsh)">${l}</text>`;});
  const k2=popS(t,9.65,.4);if(k2>0)s+=g(tr(W/2,(ASP==='v'?1260:760),k2,-3),`<rect x="-250" y="-60" width="500" height="110" rx="30" fill="#E8505B" stroke="#fff" stroke-width="6"/><text x="0" y="22" text-anchor="middle" font-family="B2" font-weight="800" font-size="66" fill="#fff">Yuk kita cek!</text>`);
  return s;}
});

// 4 ZERO CALORIE 10.8 - 18.3
S.push({t0:10.8,t1:18.3,
 world:t=>{
  let s=`<rect width="1920" height="1920" fill="#16343F"/><circle cx="960" cy="960" r="620" fill="#2E7E8F" opacity=".5" filter="url(#glowf)"/>`;
  // pedestals
  const p=(x,c)=>`<ellipse cx="${x}" cy="1240" rx="230" ry="60" fill="#0B1E26" opacity=".6"/><path d="M${x-200},1100L${x+200},1100L${x+200},1230Q${x},1290 ${x-200},1230Z" fill="${c}"/><ellipse cx="${x}" cy="1100" rx="200" ry="52" fill="#E9F1F2"/>`;
  s+=p(640,'#B7C9CC')+p(1280,'#B7C9CC');
  const k1=popS(t,10.94,.5),k2=popS(t,11.9,.5);
  s+=g(tr(640,1110,1.7*k1),glass('cold',t),'filter="url(#dsh)"');
  s+=g(tr(1280,1110,1.7*k2),glass('warm',t),'filter="url(#dsh)"');
  // zero labels big above
  const kz=popS(t,12.92,.5);
  if(kz>0){for(const x of [640,1280]) s+=g(tr(x,560,kz),`<text x="0" y="0" text-anchor="middle" font-family="Inter" font-weight="800" font-size="170" fill="#fff" filter="url(#tsh)">0</text><text x="0" y="62" text-anchor="middle" font-family="B2" font-weight="800" font-size="56" fill="#9FE3F5">kkal</text>`);}
  // fat blob with X (after 14.37) and belly (16.29)
  const kf=popS(t,14.4,.45);
  if(kf>0){s+=`<rect width="1920" height="1920" fill="#0B1E26" opacity="${0.55*ss((t-14.3)/.4)}"/>`;
   s+=g(tr(780,880,kf),`<path d="M-130,-40C-150,-140 -20,-170 20,-110C80,-180 190,-110 150,-20C210,40 140,140 60,110C10,170 -110,150 -110,80C-190,60 -180,-20 -130,-40Z" fill="#F6D365" stroke="${OL}" stroke-width="6"/><circle cx="-40" cy="-20" r="10" fill="${OL}"/><circle cx="40" cy="-20" r="10" fill="${OL}"/><path d="M-20,20Q0,8 20,20" stroke="${OL}" stroke-width="6" fill="none" stroke-linecap="round"/>`,'filter="url(#dsh)"');
   s+=g(tr(780,1080,0.9*kf),label('LEMAK',{size:64,bg:'#F2A541'}));
   const kx=popS(t,15.0,.35); if(kx>0) s+=g(tr(780,880,1.6*kx,8),xmark(1));
   const kb=popS(t,16.29,.45);
   if(kb>0){s+=yuma({x:1240,y:1330,s:1.05*kb,expr:'happy',aL:45,aR:45,blink:blinkAt(t,7)});s+=g(tr(1240,640,kb),label('PERUT BUNCIT?',{size:54,bg:'#5B6C8F'}));const kx2=popS(t,16.9,.35);if(kx2>0)s+=g(tr(1240,640,.75*kx2,-8),xmark(1));}
  }
  return s;},
 cam:t=>{if(t<14.3) return camV(t,10.8,14.3,[960,900,1.15],[960,880,1.0]); return camV(t,14.3,18.3,[960,960,1.05],[1010,980,1.14]);},
 hud:t=>{let s='';const k=fadeIn(t,12.92,.4)*(1-fadeIn(t,14.3,.3));
  if(k>0){s+=`<text x="${ASP==='v'?40:40}" y="${H-(ASP==='v'?60:34)}" font-family="Inter" font-weight="500" font-size="${ASP==='v'?24:22}" fill="#fff" opacity="${.85*k}">Sumber: USDA FoodData Central: air putih 0 kkal</text>`;
   const fs=ASP==='v'?84:72;if(ASP==='v')s+=`<text x="${W/2}" y="${ASP==='v'?430:150}" text-anchor="middle" font-family="B2" font-weight="800" font-size="${fs}" fill="#fff" opacity="${k}" filter="url(#tsh)">Dingin = Hangat</text>`;}
  return s;}
});

// 5 VIRUS 18.3 - 22.1
S.push({t0:18.3,t1:22.1,
 world:t=>{
  let s=`<rect width="1920" height="1920" fill="#1F2E25"/><circle cx="1150" cy="900" r="600" fill="#3E7B4A" opacity=".55" filter="url(#glowf)"/>`;
  // ice cube innocent left
  const ki=popS(t,18.45,.5);
  s+=g(tr(620,980,2.2*ki,Math.sin(t*2)*4),iceCube(1),'filter="url(#dsh)"');
  s+=g(tr(620,980,ki),`<circle cx="-22" cy="-6" r="8" fill="${OL}"/><circle cx="22" cy="-6" r="8" fill="${OL}"/><path d="M-14,18Q0,30 14,18" stroke="${OL}" stroke-width="6" fill="none" stroke-linecap="round"/>`);
  const kb=popS(t,19.2,.45); if(kb>0) s+=g(tr(620,700,kb,-4),label('BUKAN SALAH ES',{size:52,bg:'#3BB273'}));
  // viruses swarm right
  const kv=fadeIn(t,20.5,.5);
  for(let i=0;i<9;i++){const ang=t*0.8+i*0.7;const R=170+rnd(i)*190;const x=1300+Math.cos(ang)*R, y=900+Math.sin(ang*1.3)*R*0.7;const sc=(0.5+rnd(i+3)*0.6)*popS(t,20.54+i*0.06,.4);const blur=sc>0.95?'url(#dof2)':'none';
   if(sc>0) s+=g(tr(x,y,sc,t*40+i*30),virus(1),`filter="${blur}" opacity="${0.4+0.6*kv}"`);}
  const kl=popS(t,20.9,.45); if(kl>0) s+=g(tr(1300,560,kl,3),label('VIRUS!',{size:72,bg:'#E5383B'}));
  return s;},
 cam:t=>ASP==='v'?(t<20.3?camV(t,18.3,20.3,[660,960,1.0],[700,950,1.06]):camV(t,20.3,22.1,[700,950,1.06],[1260,930,1.0])):camV(t,18.3,22.1,[900,920,1.1],[1000,900,1.0]),
 hud:t=>''
});

// 6 HYDRATION 22.1 - 25.9
S.push({t0:22.1,t1:25.9,
 world:t=>{
  let s=`<rect width="1920" height="1920" fill="#E7EEF0"/><rect x="0" y="0" width="960" height="1920" fill="#D5ECF8"/><rect x="960" y="0" width="960" height="1920" fill="#F8E6D2"/>`;
  const fill=ss((t-22.6)/2.4);
  const fig=(x,col)=>{ // silhouette with water level
   const id='c'+x;
   return `<clipPath id="${id}"><path d="M${x-60},780 a60,60 0 1 1 120,0 a60,60 0 1 1 -120,0Z M${x-95},870 Q${x},840 ${x+95},870 L${x+110},1130 Q${x+112},1150 ${x+90},1150 L${x+70},1150 L${x+70},1400 Q${x+70},1420 ${x+50},1420 L${x+15},1420 L${x+10},1170 L${x-10},1170 L${x-15},1420 L${x-50},1420 Q${x-70},1420 ${x-70},1400 L${x-70},1150 L${x-90},1150 Q${x-112},1150 ${x-110},1130Z"/></clipPath>
   <g clip-path="url(#${id})"><rect x="${x-130}" y="700" width="260" height="740" fill="#ffffff"/><rect x="${x-130}" y="${fmt(1430-fill*640)}" width="260" height="760" fill="${col}"/><path d="M${x-130},${fmt(1430-fill*640)} q32,${fmt(-14*Math.sin(t*4))} 65,0 t65,0 t65,0 t65,0" fill="${col}"/></g>
   <path d="M${x-60},780 a60,60 0 1 1 120,0 a60,60 0 1 1 -120,0Z M${x-95},870 Q${x},840 ${x+95},870 L${x+110},1130 Q${x+112},1150 ${x+90},1150 L${x+70},1150 L${x+70},1400 Q${x+70},1420 ${x+50},1420 L${x+15},1420 L${x+10},1170 L${x-10},1170 L${x-15},1420 L${x-50},1420 Q${x-70},1420 ${x-70},1400 L${x-70},1150 L${x-90},1150 Q${x-112},1150 ${x-110},1130Z" fill="none" stroke="${OL}" stroke-width="7" stroke-linejoin="round"/>`;};
  s+=fig(740,'#5DB7EA')+fig(1180,'#7FC8EE');
  s+=g(tr(ASP==='v'?560:520,1300,1.0),glass('cold',t,0.75),'filter="url(#dsh)"')+g(tr(ASP==='v'?1360:1400,1300,1.0),glass('cold',t,0.75),'filter="url(#dsh)"');
  const ke=popS(t,23.4,.45); if(ke>0) s+=g(tr(960,1050,ke),`<circle r="78" fill="#fff" stroke="${OL}" stroke-width="7"/><path d="M-36,-16L36,-16M-36,18L36,18" stroke="${OL}" stroke-width="16" stroke-linecap="round"/>`,'filter="url(#dsh)"');
  s+=bigText('AIR DINGIN',740,ASP==='v'?620:680,58,{fill:'#1D5F8A'})+bigText('AIR BIASA',1180,ASP==='v'?620:680,58,{fill:'#9A5A22'});
  return s;},
 cam:t=>camV(t,22.1,25.9,[960,1040,1.0],[960,1020,1.1]),
 hud:t=>{const k=popS(t,24.2,.45);if(k<=0)return '';return g(tr(ASP==='v'?W/2:1600,ASP==='v'?400:470,k,-3),label('HIDRASI: SAMA BAGUS!',{size:ASP==='v'?64:56,bg:'#3BB273'}));}
});

// 7 EXCEPTION + MIGRAINE 25.9 - 31.2
S.push({t0:25.9,t1:31.2,
 world:t=>{
  let s=`<rect width="1920" height="1920" fill="#2A1F2B"/><circle cx="960" cy="900" r="620" fill="#8E3B4F" opacity="${0.35+0.15*Math.sin(t*6)}" filter="url(#glowf)"/>`;
  const kw=popS(t,25.96,.5)*(1-ss((t-27.4)/.4));
  if(kw>0) s+=g(tr(960,900,kw),`<path d="M0,-220L210,150Q220,170 196,170L-196,170Q-220,170 -210,150Z" fill="#F4C542" stroke="${OL}" stroke-width="12" stroke-linejoin="round"/><rect x="-18" y="-110" width="36" height="160" rx="18" fill="${OL}"/><circle cx="0" cy="105" r="22" fill="${OL}"/>`,'filter="url(#dsh)"');
  const km=fadeIn(t,27.5,.4);
  if(km>0){
   s+=g(`translate(960 1560) scale(1.7)`,`<g opacity="${km}">${yHead(t>28.9?'worried':'think',false).replace('url(#skin)','url(#skin)')}</g>`,'filter="url(#dsh)"');
   // jagged pain bolts around head
   for(let i=0;i<4;i++){const kk=popS(t,28.9+i*0.15,.35);const a=-150+i*40;const R=430;const x=960+Math.cos(a*Math.PI/180)*R*0.9,y=760+Math.sin(a*Math.PI/180)*R*0.6;
    if(kk>0)s+=g(tr(x,y,kk*(1+0.08*Math.sin(t*14+i)),a+90),`<path d="M-20,-70L20,-20L-6,-10L26,60L-24,0L4,-8Z" fill="#FFE27A" stroke="${OL}" stroke-width="6" stroke-linejoin="round"/>`);}
   s+=g(tr(ASP==='v'?1290:1420,1300,0.9*km),glass('cold',t,1),'filter="url(#dsh)"');
  }
  return s;},
 cam:t=>t<27.5?camV(t,25.9,27.5,[960,900,1.0],[960,900,1.12]):camV(t,27.5,31.2,[960,960,1.0],[960,900,1.14]),
 hud:t=>{let s='';const k=popS(t,26.2,.4)*(1-ss((t-27.4)/.3));if(k>0)s+=g(tr(W/2,ASP==='v'?1290:880,k),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="${ASP==='v'?110:96}" fill="url(#gold)" filter="url(#tsh)">PENGECUALIAN</text>`);
  const k2=popS(t,27.7,.4);if(k2>0)s+=g(tr(ASP==='v'?W/2:330,ASP==='v'?400:200,k2,-3),label('MIGRAIN',{size:ASP==='v'?76:68,bg:'#E5383B'}));
  const k3=popS(t,28.9,.4);if(k3>0)s+=g(tr(ASP==='v'?W/2:1560,ASP==='v'?530:200,k3,2),label('bisa memicu sakit kepala',{size:ASP==='v'?44:42,bg:'#5B3A55'}));
  return s;}
});

// 8 AKALASIA 31.2 - 35.9
S.push({t0:31.2,t1:35.9,
 world:t=>{
  let s=`<rect width="1920" height="1920" fill="#3B3A7A"/><g opacity=".12">${Array.from({length:20},(_,i)=>`<path d="M${i*100},0L${i*100},1920M0,${i*100}L1920,${i*100}" stroke="#fff" stroke-width="2"/>`).join('')}</g>`;
  // profile body silhouette
  s+=`<path d="M760,520C760,380 900,330 990,360C1090,390 1120,480 1100,560L1080,640Q1070,700 1020,700L1000,700L1000,780Q1180,800 1240,900L1300,1500L640,1500L700,900Q740,810 880,780L880,700Q780,680 760,520Z" fill="#6E6CC4" stroke="#fff" stroke-width="6" opacity=".95"/>`;
  // esophagus tube
  const tube=`M960,600 C960,700 950,800 950,900 C950,1000 955,1100 960,1180`;
  s+=`<path d="${tube}" stroke="#F3A6B5" stroke-width="64" fill="none" stroke-linecap="round"/><path d="${tube}" stroke="#E2788F" stroke-width="64" fill="none" stroke-linecap="round" opacity=".35" stroke-dasharray="6 18"/>`;
  // stomach
  s+=`<path d="M940,1180C900,1200 880,1300 960,1360C1060,1430 1180,1350 1150,1240C1130,1180 1040,1200 1000,1190Z" fill="#F3A6B5" stroke="#fff" stroke-width="6"/>`;
  // tight valve
  const kv=popS(t,32.6,.4); s+=`<ellipse cx="962" cy="1172" rx="${46+6*Math.sin(t*8)}" ry="16" fill="#E5383B" stroke="#fff" stroke-width="5" opacity="${0.4+0.6*kv}"/>`;
  // bolus moving slowly & stopping
  const by=lerp(620,1120,eout((t-31.4)/3.2)) + (t>34.6?Math.sin(t*10)*3:0);
  s+=g(tr(955,by,1),`<circle r="30" fill="#BFE9FF" stroke="${OL}" stroke-width="5"/><rect x="-16" y="-16" width="20" height="20" rx="5" fill="#fff" opacity=".9"/>`);
  const ka=popS(t,33.73,.4);if(ka>0) s+=g(tr(1200,1110,ka),`<path d="M0,0L-150,50" stroke="#fff" stroke-width="10" stroke-linecap="round" stroke-dasharray="4 18"/>`)+g(tr(ASP==='v'?1210:1330,1000,ka,-3),label('susah menelan',{size:46,bg:'#E5383B'}));
  return s;},
 cam:t=>camV(t,31.2,35.9,[960,820,1.25],[960,960,1.0]),
 hud:t=>{let s='';const k=popS(t,31.3,.45);if(k>0)s+=g(tr(W/2,ASP==='v'?400:110,k,-2),label('AKALASIA',{size:ASP==='v'?84:70,bg:'#F4C542',fill:OL}));
  const k2=popS(t,32.53,.45);if(k2>0)s+=g(tr(W/2,ASP==='v'?530:205,k2,1.5),label('gangguan kerongkongan',{size:ASP==='v'?46:42,bg:'#2B2A5E'}));
  const kk=fadeIn(t,31.4,.4);s+=`<text x="40" y="${H-(ASP==='v'?60:34)}" font-family="Inter" font-weight="500" font-size="${ASP==='v'?24:22}" fill="#fff" opacity="${.8*kk}">Ilustrasi disederhanakan</text>`;return s;}
});

// 9 WARM DRINK FOR COLD 35.9 - 39.9
S.push({t0:35.9,t1:39.9,
 world:t=>{
  let s=room('#E9C9A3','#B07A55',true,t);
  s+=`<rect width="1920" height="1920" fill="#F59E4B" opacity=".18"/>`+rays(1450,380,6,1300,7,.45,-30);
  // sofa
  s+=`<rect x="420" y="1020" width="1080" height="300" rx="60" fill="#7E5A9B"/><rect x="380" y="960" width="160" height="380" rx="60" fill="#6C4B88"/><rect x="1380" y="960" width="160" height="380" rx="60" fill="#6C4B88"/>`;
  // yuma in blanket
  s+=yuma({x:960,y:1420,s:1.25,expr:'sip',aL:150,aR:150,blink:blinkAt(t,9),holdR:'',noLegs:true});
  s+=`<path d="M720,1420C700,1220 760,1060 960,1050C1160,1060 1220,1220 1200,1420Z" fill="#F2B84B" stroke="${OL}" stroke-width="6"/><path d="M760,1240Q960,1200 1160,1240M770,1330Q960,1290 1150,1330" stroke="#E79B2E" stroke-width="10" fill="none" stroke-linecap="round"/>`;
  s+=g(tr(1000,1120,0.95,-6),mug(t,1),'filter="url(#dsh)"');
  // tissue box
  s+=`<rect x="1240" y="1300" width="170" height="90" rx="14" fill="#8ED1F3" stroke="${OL}" stroke-width="5"/><path d="M1300,1300Q1320,1240 1350,1300" fill="#fff" stroke="${OL}" stroke-width="4"/>`;
  const k=popS(t,37.2,.45);if(k>0)s+=g(tr(ASP==='v'?1130:1420,ASP==='v'?1200:930,k,3),label('Hangat = ingus lancar',{size:ASP==='v'?40:50,bg:'#E8505B'}));
  return s;},
 cam:t=>camV(t,35.9,39.9,[960,1100,1.0],[1000,1060,1.12]),
 hud:t=>{const k=popS(t,36.0,.4);if(k<=0)return '';return g(tr(W/2,ASP==='v'?420:120,k,-3),label('LAGI PILEK?',{size:ASP==='v'?80:70,bg:'#5B6C8F'}));}
});

// 10 PLOT TWIST + SUGAR 39.9 - 47.3
S.push({t0:39.9,t1:47.3,
 world:t=>{
  let s=`<rect width="1920" height="1920" fill="#2B1B14"/><circle cx="960" cy="960" r="700" fill="#A3542A" opacity=".45" filter="url(#glowf)"/>`;
  s+=rays(960,100,7,1500,8,.35);
  if(t<42.9){ // ice cube innocent + spotlight
   const k=popS(t,40.91,.5);
   s+=`<ellipse cx="960" cy="1250" rx="300" ry="60" fill="#FFE9B0" opacity=".25"/>`;
   s+=g(tr(960,1080,2.6*k,Math.sin(t*3)*5),iceCube(1),'filter="url(#dsh)"');
   s+=g(tr(960,1080,k),`<path d="M-34,-6Q-22,-16 -10,-6M10,-6Q22,-16 34,-6" stroke="${OL}" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M-16,22Q0,34 16,22" stroke="${OL}" stroke-width="7" fill="none" stroke-linecap="round"/>`);
   const kb=popS(t,41.6,.4);if(kb>0)s+=g(tr(960,760,kb,-3),label('BUKAN ESNYA',{size:62,bg:'#3BB273'}));
  } else {
   // drinks lineup with sugar stacks (isometric blocks)
   const xs=[560,960,1360], tp=['tea','boba','kopi'], tt=[43.0,44.68,45.28], nm=['Es teh manis','Boba','Kopi susu'], hgt=[6,8,7];
   for(let i=0;i<3;i++){
    const k=popS(t,tt[i],.45); if(k<=0) continue;
    s+=`<ellipse cx="${xs[i]}" cy="1215" rx="170" ry="40" fill="#000" opacity=".3" filter="url(#sh)"/>`;
    s+=g(tr(xs[i],1210,1.35*k),glass(tp[i],t),'filter="url(#dsh)"');
    const grow=clamp((t-tt[i]-0.3)/1.2);const n=Math.floor(hgt[i]*eout(grow)+0.001);
    let cubes='';for(let j=0;j<n;j++){cubes+=sugarCube(xs[i]-24,860-j*52,34)+sugarCube(xs[i]+24,860-j*52+12,34);}
    s+=`<g filter="url(#dsh)">${cubes}</g>`;
    s+=g(tr(xs[i],1300,k),label(nm[i],{size:44,bg:'#E8505B'}));
   }
  }
  return s;},
 cam:t=>{if(t<42.9) return camV(t,39.9,42.9,[960,980,1.0],[960,960,1.15]);
  return ASP==='v'?camV(t,42.9,47.3,[640,1040,1.0],[1280,1000,1.0]):camV(t,42.9,47.3,[960,1000,1.04],[960,960,1.0]);},
 hud:t=>{let s='';if(t<40.9){const lb=ss((t-39.9)/.3)*(ASP==='v'?150:110);s+=`<rect width="${W}" height="${lb}" fill="#000"/><rect y="${H-lb}" width="${W}" height="${lb}" fill="#000"/>`;}
  const k=popS(t,39.97,.45)*(1-ss((t-42.6)/.3));if(k>0)s+=g(tr(W/2,ASP==='v'?430:180,k,-3),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="${ASP==='v'?140:120}" fill="url(#gold)" filter="url(#tsh)">PLOT TWIST!</text>`);
  const kg=popS(t,43.0,.45);if(kg>0)s+=g(tr(ASP==='v'?W/2:290,ASP==='v'?420:260,kg,-2),label('PELAKUNYA: GULA',{size:ASP==='v'?72:48,bg:'#E5383B'}));
  return s;}
});

// 11 SAFE WAY 47.3 - 52.3
S.push({t0:47.3,t1:52.3,
 world:t=>{
  let s=`<rect width="1920" height="1920" fill="#CDEBF5"/><circle cx="960" cy="800" r="600" fill="#fff" opacity=".6" filter="url(#glowf)"/>`;
  s+=rays(960,0,7,1500,9,.5);
  s+=`<rect y="1360" width="1920" height="560" fill="#9FD3E6"/>`;
  const sip=Math.sin(t*1.6)>0.3;
  s+=yuma({x:760,y:1420,s:1.35,expr:sip?'sip':'happy',aR:sip?-80:-60,aL:60,holdR:glass('cold',t,0.55),blink:blinkAt(t,11)});
  // checklist card
  const kc=popS(t,47.5,.5);
  if(kc>0){s+=g(tr(1270,960,kc,2),`<rect x="-260" y="-230" width="520" height="460" rx="40" fill="#fff" stroke="${OL}" stroke-width="8"/>
   <text x="0" y="-140" text-anchor="middle" font-family="B2" font-weight="800" font-size="62" fill="${OL}">Aman kalau:</text>
   ${popS(t,49.12,.4)>0?g(tr(-170,-20,popS(t,49.12,.4)),check(0.7)):''}<text x="-110" y="0" font-family="B2" font-weight="800" font-size="58" fill="${OL}" opacity="${fadeIn(t,49.12)}">Air putih</text>
   ${popS(t,50.33,.4)>0?g(tr(-170,130,popS(t,50.33,.4)),check(0.7)):''}<text x="-110" y="150" font-family="B2" font-weight="800" font-size="58" fill="${OL}" opacity="${fadeIn(t,50.33)}">Pelan-pelan</text>`,'filter="url(#dsh)"');}
  return s;},
 cam:t=>ASP==='v'?camV(t,47.3,52.3,[820,1000,1.0],[1180,980,1.05]):camV(t,47.3,52.3,[1000,1000,1.1],[1000,960,1.0]),
 hud:t=>{const k=popS(t,47.45,.4);if(k<=0)return '';return g(tr(W/2,ASP==='v'?420:110,k,-3),label('AIR DINGIN BOLEH!',{size:ASP==='v'?74:64,bg:'#3BB273'}));}
});

// 12 CTA SPLIT 52.3 - end
S.push({t0:52.3,t1:56.2,
 world:t=>{
  const sl=eout((t-52.3)/.5);
  let s=`<rect width="1920" height="1920" fill="#222"/>`;
  s+=`<path d="M0,0L${fmt(lerp(-200,1040,sl))},0L${fmt(lerp(-400,880,sl))},1920L0,1920Z" fill="#2C8FC4"/><path d="M1920,0L${fmt(lerp(2120,1040,sl))},0L${fmt(lerp(2320,880,sl))},1920L1920,1920Z" fill="#E07B39"/>`;
  const L=ASP==='v'?720:620,Rr=ASP==='v'?1200:1320;s+=g(tr(L,1060,(ASP==='v'?1.2:1.5)*popS(t,52.6,.5)),glass('cold',t),'filter="url(#dsh)"')+g(tr(Rr,1060,(ASP==='v'?1.2:1.5)*popS(t,53.4,.5)),glass('warm',t),'filter="url(#dsh)"');
  s+=bigText(ASP==='v'?'TIM ES':'TIM AIR ES',L,640,ASP==='v'?72:84,{sw:10})+bigText(ASP==='v'?'TIM HANGAT':'TIM AIR HANGAT',Rr,640,ASP==='v'?64:76,{sw:10});
  const kv=popS(t,53.1,.4);if(kv>0)s+=g(tr(960,870,kv,-6),`<circle r="96" fill="#FFE27A" stroke="${OL}" stroke-width="10"/><text x="0" y="30" text-anchor="middle" font-family="B2" font-weight="800" font-size="90" fill="${OL}">VS</text>`,'filter="url(#dsh)"');
  const yk=eout((t-52.5)/.6);
  s+=yuma({x:960,y:lerp(1900,1480,yk),s:1.0,expr:'happy',aR:-60+Math.sin(t*9)*14,aL:70,blink:blinkAt(t,13)});
  const kc=popS(t,54.67,.45);if(kc>0)s+=g(tr(ASP==='v'?1130:1290,1240,kc*(ASP==='v'?.85:1),3),bubble(520,170,'bl')+`<text x="0" y="20" text-anchor="middle" font-family="B2" font-weight="800" font-size="58" fill="${OL}">Tulis di komentar!</text>`,'filter="url(#dsh)"');
  return s;},
 cam:t=>camV(t,52.3,56.2,[960,1000,1.0],[960,980,1.06]),
 hud:t=>''
});

const THUMB={t:2.6,lines:['MINUM AIR','DINGIN','TIAP HARI?']};
