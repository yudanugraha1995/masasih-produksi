// ===== Gimana Kalau Kamu Pakai Earphone Tiap Hari (Style A) =====
const isV=ASP==='v';
function srcText(txt,k=1){return `<text x="40" y="${H-(isV?60:34)}" font-family="Inter" font-weight="500" font-size="${isV?24:22}" fill="#fff" opacity="${.85*k}">${txt}</text>`;}
function earbud(s=1,r=0){return g(`rotate(${r}) scale(${s})`,`<path d="M-34,-10Q-40,-50 0,-52Q40,-50 34,-10Q30,24 0,26Q-30,24 -34,-10Z" fill="#fff" stroke="${OL}" stroke-width="5"/><rect x="-12" y="20" width="24" height="70" rx="12" fill="#fff" stroke="${OL}" stroke-width="5"/><circle cx="0" cy="-14" r="14" fill="#C9D3E3"/>`);}
function note(s=1,col='#F4C542'){return g(`scale(${s})`,`<path d="M10,-60L10,10" stroke="${OL}" stroke-width="10" stroke-linecap="round"/><path d="M10,-60Q40,-50 44,-24" stroke="${OL}" stroke-width="10" fill="none" stroke-linecap="round"/><ellipse cx="-6" cy="12" rx="22" ry="16" fill="${col}" stroke="${OL}" stroke-width="5" transform="rotate(-20 -6 12)"/>`);}
function yumaBuds(o,t){ // yuma with earbuds on head sides
  const base=yuma(o); const sc=o.s||1;
  const bl=g(tr(o.x-118*sc,o.y-450*sc,0.8*sc,-10),earbud(1)), br=g(tr(o.x+118*sc,o.y-450*sc,0.8*sc,10),earbud(1));
  const wire=`<path d="M${o.x-118*sc},${o.y-380*sc}Q${o.x-80*sc},${o.y-280*sc} ${o.x},${o.y-250*sc}Q${o.x+80*sc},${o.y-280*sc} ${o.x+118*sc},${o.y-380*sc}" stroke="#fff" stroke-width="${6*sc}" fill="none"/>`;
  return base+wire+bl+br;}
function soundWaves(x,y,n,t,col='#fff',amp=1){let s='';for(let i=0;i<n;i++){const ph=(t*1.2+i/n)%1;s+=`<path d="M${x+40+ph*220},${y-60-ph*40}Q${x+70+ph*240},${y} ${x+40+ph*220},${y+60+ph*40}" stroke="${col}" stroke-width="${12*amp}" fill="none" stroke-linecap="round" opacity="${1-ph}"/>`;}return s;}

// 1 HOOK 0 - 5.2
S.push({t0:0,t1:5.2,
 world:t=>{ // sky cycles day->night
  const c=clamp(t/4.5); const sky=c<0.5?'#7EC8F0':'#1B2347';
  let s=`<rect width="1920" height="1920" fill="#7EC8F0"/><rect width="1920" height="1920" fill="#1B2347" opacity="${ss((c-0.35)/0.4)}"/>`;
  const a=lerp(-60,240,c)*Math.PI/180; s+=g(tr(960+Math.cos(a)*620,820-Math.sin(a)*420,1),c<0.55?`<circle r="90" fill="#F6C945"/>`+rays(0,0,10,160,36,.5):`<circle r="80" fill="#F6E7A8"/><circle cx="30" cy="-20" r="72" fill="#1B2347"/>`);
  s+=`<rect y="1360" width="1920" height="560" fill="${c<0.5?'#8FBF7A':'#2F3D55'}"/>`;
  s+=yumaBuds({x:960,y:1440,s:1.35,expr:t<3?'happy':'think',aR:70+Math.sin(t*6)*6,aL:70,blink:blinkAt(t,1)},t);
  for(let i=0;i<6;i++){const ph=(t*0.6+i/6)%1;s+=g(tr(960+(i%2?1:-1)*(220+ph*280),1000-ph*420,0.9+0.3*rnd(i),Math.sin(t*3+i)*15),note(1,['#F4C542','#E8505B','#3BB273'][i%3]),`opacity="${1-ph}"`);}
  return s;},
 cam:t=>camV(t,0,5.2,[960,1050,1.1],[960,1000,1.0]),
 hud:t=>{const k=popS(t,0.05,.5),k2=popS(t,0.7,.5);
  return g(tr(W/2,isV?430:170,k,-4),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="${isV?150:120}" fill="#FFE27A" stroke="${OL}" stroke-width="14" paint-order="stroke">WOYYY!</text>`)+(k2>0?g(tr(W/2,isV?580:290,k2,2),label('PAGI SAMPAI MALAM?',{size:isV?66:58,bg:'#2C8FC4'})):'');}
});

// 2 CHAPTER 5.2 - 9.0
S.push({t0:5.2,t1:9.0,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#1B2347"/><rect y="1360" width="1920" height="560" fill="#2F3D55"/>`;s+=yumaBuds({x:960,y:1440,s:1.35,expr:'worried',aL:70,aR:70},t);return s+`<rect width="1920" height="1920" fill="#06121C" opacity=".55"/>`;},
 cam:t=>camV(t,5.2,9.0,[960,1000,1.12],[960,960,1.0]),
 hud:t=>{const lb=ss((t-5.2)/0.4)*(isV?150:110);let s=`<rect width="${W}" height="${lb}" fill="#000"/><rect y="${H-lb}" width="${W}" height="${lb}" fill="#000"/>`;
  const k=fadeIn(t,5.35,.5),ky=lerp(30,0,eout((t-5.35)/.6));const L=isV?['MASA SIH','EARPHONE TIAP','HARI BIKIN','PENDENGARAN','RUSAK?']:['MASA SIH','EARPHONE TIAP HARI','BIKIN PENDENGARAN RUSAK?'];const fs=isV?104:96;const y0=isV?620:300;
  L.forEach((l,i)=>{s+=`<text x="${W/2}" y="${y0+i*fs*1.05+ky}" text-anchor="middle" font-family="B2" font-weight="800" font-size="${fs}" fill="url(#gold)" opacity="${k}" filter="url(#tsh)">${l}</text>`;});return s;}
});

// 3 THREE FACTORS 9.0 - 15.6
S.push({t0:9.0,t1:15.6,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#16343F"/><circle cx="960" cy="960" r="620" fill="#2E7E8F" opacity=".5" filter="url(#glowf)"/>`;
  const items=[[10.54,'SEBERAPA KERAS','vol'],[12.30,'SEBERAPA LAMA','clock'],[13.44,'SEBERAPA SERING','cal']];
  items.forEach((it,i)=>{const k=popS(t,it[0],.5); if(k<=0) return; const y=isV?640+i*300:900, x=isV?960:520+i*440;
   let icon='';
   if(it[2]==='vol'){const lv=0.5+0.5*Math.sin(t*3);icon=`<path d="M-90,-30L-50,-30L-10,-70L-10,70L-50,30L-90,30Z" fill="#fff" stroke="${OL}" stroke-width="6" stroke-linejoin="round"/>`+[0,1,2].map(j=>`<path d="M${20+j*30},-${40+j*20}Q${50+j*36},0 ${20+j*30},${40+j*20}" stroke="${j/2<=lv?'#F4C542':'#5C7A84'}" stroke-width="12" fill="none" stroke-linecap="round"/>`).join('');}
   if(it[2]==='clock'){icon=`<circle r="80" fill="#fff" stroke="${OL}" stroke-width="7"/><path d="M0,0L0,-56" stroke="${OL}" stroke-width="10" stroke-linecap="round" transform="rotate(${t*200})"/><path d="M0,0L36,0" stroke="${OL}" stroke-width="10" stroke-linecap="round" transform="rotate(${t*20})"/>`;}
   if(it[2]==='cal'){icon=`<rect x="-80" y="-80" width="160" height="160" rx="18" fill="#fff" stroke="${OL}" stroke-width="7"/><rect x="-80" y="-80" width="160" height="44" rx="14" fill="#E5383B"/>`+Array.from({length:9},(_,j)=>`<circle cx="${-46+(j%3)*46}" cy="${-6+Math.floor(j/3)*36}" r="10" fill="${j<=Math.floor((t-13.44)*6)?'#2C8FC4':'#D5DCE6'}"/>`).join('');}
   const card=isV?`<rect x="-400" y="-120" width="800" height="240" rx="40" fill="#22495A" stroke="#fff" stroke-width="6"/>${g('translate(-260 0)',icon)}<text x="-130" y="22" font-family="B2" font-weight="800" font-size="62" fill="#fff">${it[1]}</text>`
                 :`<rect x="-200" y="-230" width="400" height="460" rx="40" fill="#22495A" stroke="#fff" stroke-width="6"/>${g('translate(0 -60)',icon)}<text x="0" y="150" text-anchor="middle" font-family="B2" font-weight="800" font-size="46" fill="#fff">${it[1]}</text>`;
   s+=g(tr(x,y,k,(i-1)*2),card,'filter="url(#dsh)"');});
  return s;},
 cam:t=>camV(t,9.0,15.6,[960,960,1.08],[960,960,1.0]),
 hud:t=>{const k=popS(t,9.12,.45);if(k<=0)return '';return g(tr(W/2,isV?420:150,k,-3),label('BELUM TENTU!',{size:isV?80:66,bg:'#3BB273'}));}
});

// 4 COCHLEA HAIR CELLS 15.6 - 24.4
S.push({t0:15.6,t1:24.4,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#3B3A7A"/><g opacity=".12">${Array.from({length:20},(_,i)=>`<path d="M${i*100},0L${i*100},1920M0,${i*100}L1920,${i*100}" stroke="#fff" stroke-width="2"/>`).join('')}</g>`;
  // loud waves from left
  const loud=ss((t-15.8)/0.8);
  for(let i=0;i<4;i++){const ph=(t*1.5+i/4)%1;s+=`<path d="M${420+ph*360},${760}Q${470+ph*380},${960} ${420+ph*360},${1160}" stroke="#F4C542" stroke-width="${18*loud}" fill="none" stroke-linecap="round" opacity="${(1-ph)*loud}"/>`;}
  // hair cells row
  const dmg=ss((t-18.4)/1.6);
  const RX=isV?560:760,NH=isV?7:9;s+=`<rect x="${RX}" y="1040" width="${NH*80+40}" height="120" rx="40" fill="#F3A6B5" stroke="#fff" stroke-width="6"/>`;
  for(let i=0;i<NH;i++){const x=RX+60+i*80; const broken=i%3!==1&&dmg>0.2; const bend=Math.sin(t*14+i)*10*loud + (broken?50*dmg:0);
   s+=`<path d="M${x},1040Q${x+bend*0.4},${960} ${x+bend},${broken?900+60*dmg:880}" stroke="${broken?'#9A8FB8':'#FFE27A'}" stroke-width="16" fill="none" stroke-linecap="round"/><circle cx="${x}" cy="1050" r="18" fill="#E2788F"/>`;}
  const k1=popS(t,18.6,.45); if(k1>0) s+=g(tr(isV?900:1140,1260,k1,-2),label('sel rambut halus di telinga dalam',{size:isV?36:42,bg:'#2E4373'}));
  const k2=popS(t,20.6,.45); if(k2>0) s+=g(tr(isV?960:1140,760,k2,3),label('BISA RUSAK PERMANEN',{size:isV?50:56,bg:'#E5383B'}));
  // hearing meter dropping slowly
  const k3=fadeIn(t,22.5,.4);
  if(k3>0){const lv=1-0.45*ss((t-22.6)/1.8);s+=g(tr(isV?1340:540,1000,1),`<rect x="-50" y="-220" width="100" height="440" rx="40" fill="#22335A" stroke="#fff" stroke-width="6"/><rect x="-32" y="${fmt(200-400*lv)}" width="64" height="${fmt(400*lv)}" rx="24" fill="${lv>0.7?'#3BB273':'#F2A541'}"/><text x="0" y="280" text-anchor="middle" font-family="B2" font-weight="800" font-size="40" fill="#fff">👂</text>`,`opacity="${k3}"`);}
  return s;},
 cam:t=>isV?camV(t,15.6,24.4,[900,1000,1.12],[960,980,1.0]):camV(t,15.6,24.4,[1040,980,1.15],[980,980,1.0]),
 hud:t=>{let s='';const k=popS(t,15.8,.45);if(k>0)s+=g(tr(W/2,isV?420:110,k,-3),label('TERLALU KERAS + KELAMAAN',{size:isV?54:52,bg:'#F4C542',fill:OL}));
  s+=srcText('Sumber: WHO, Make Listening Safe · Ilustrasi disederhanakan',fadeIn(t,16,.4));return s;}
});

// 5 MOISTURE / INFECTION 24.4 - 30.6
S.push({t0:24.4,t1:30.6,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#1F2E25"/><circle cx="960" cy="900" r="600" fill="#3E7B4A" opacity=".5" filter="url(#glowf)"/>`;
  s+=g(tr(960,960,3.2,-20+Math.sin(t*1.5)*3),earbud(1),'filter="url(#dsh)"');
  const km=fadeIn(t,26.0,.5);
  for(let i=0;i<7;i++){const x=840+rnd(i)*260,y=820+rnd(i+3)*200+((t*40+i*30)%60);s+=`<path d="M${x},${y}q12,20 0,30q-12,-10 0,-30z" fill="#8ED1F3" stroke="#5AAEDB" stroke-width="3" opacity="${km}"/>`;}
  const kv=fadeIn(t,28.6,.4);
  for(let i=0;i<5;i++){const a=t*0.9+i*1.25,R=260;if(kv>0)s+=g(tr(960+Math.cos(a)*R,960+Math.sin(a)*R*0.8,0.5*kv,t*40+i*50),virus(1));}
  const k1=popS(t,26.0,.45); if(k1>0) s+=g(tr(960,640,k1,-3),label('LEMBAP & IRITASI',{size:56,bg:'#2C8FC4'}));
  const k2=popS(t,28.7,.45); if(k2>0) s+=g(tr(960,1300,k2,2),label('lebih rentan infeksi',{size:50,bg:'#E5383B'}));
  return s;},
 cam:t=>camV(t,24.4,30.6,[960,960,1.2],[960,960,1.0]),
 hud:t=>{const k=popS(t,24.6,.45);if(k<=0)return '';return g(tr(W/2,isV?420:110,k,-3),label('EARBUD DIPAKAI LAMA',{size:isV?62:54,bg:'#5B6C8F'}));}
});

// 6 PLOT TWIST 30.6 - 37.8
S.push({t0:30.6,t1:37.8,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#2B1B14"/><circle cx="960" cy="960" r="680" fill="#A3542A" opacity=".45" filter="url(#glowf)"/>`+rays(960,100,7,1500,8,.35);
  // phone with playlist + volume
  const kp=popS(t,31.5,.5);
  if(kp>0){const vmax=t<35?1:1-0.55*ss((t-35)/1.2);
   const rows=['Lagu Favorit #1','Lagu Galau #7','Lagu Semangat'].map((r,i)=>`<rect x="-150" y="${-170+i*90}" width="300" height="70" rx="16" fill="#fff"/><circle cx="-110" cy="${-135+i*90}" r="22" fill="${['#E8505B','#9C7BE0','#3BB273'][i]}"/><text x="-74" y="${-124+i*90}" font-family="B2" font-weight="800" font-size="30" fill="${OL}">${r}</text>`).join('');
   s+=g(tr(isV?960:820,1000,kp*1.3),`<rect x="-190" y="-340" width="380" height="680" rx="50" fill="#22335A" stroke="${OL}" stroke-width="8"/><rect x="-166" y="-300" width="332" height="600" rx="28" fill="#2E2A3A"/>${rows}
    <path d="M-120,180L120,180" stroke="#555" stroke-width="22" stroke-linecap="round"/><path d="M-120,180L${fmt(-120+240*vmax)},180" stroke="${vmax>0.8?'#E5383B':'#3BB273'}" stroke-width="22" stroke-linecap="round"/><circle cx="${fmt(-120+240*vmax)}" cy="180" r="24" fill="#fff"/><text x="0" y="250" text-anchor="middle" font-family="B2" font-weight="800" font-size="36" fill="#fff">VOLUME</text>`,'filter="url(#dsh)"');
   const kh=popS(t,32.2,.4); if(kh>0) s+=g(tr(isV?1250:1300,760,kh,4),label('playlist aman ✓',{size:isV?42:50,bg:'#3BB273'}));
   const kx=popS(t,34.4,.4); if(kx>0) s+=g(tr(isV?1240:1300,1240,kx,-4),label('gas volume terus ✕',{size:isV?42:50,bg:'#E5383B'}));}
  return s;},
 cam:t=>camV(t,30.6,37.8,[960,1000,1.1],[960,1000,1.0]),
 hud:t=>{let s='';if(t<31.7){const lb=ss((t-30.6)/.3)*(isV?150:110);s+=`<rect width="${W}" height="${lb}" fill="#000"/><rect y="${H-lb}" width="${W}" height="${lb}" fill="#000"/>`;}
  const k=popS(t,30.74,.45)*(1-ss((t-31.6)/.3));if(k>0)s+=g(tr(W/2,isV?700:330,k,-3),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="${isV?140:120}" fill="url(#gold)" filter="url(#tsh)">PLOT TWIST!</text>`);
  const k2=popS(t,33.9,.45);if(k2>0)s+=g(tr(W/2,isV?420:110,k2,-2),label('YANG DIPUTUS: KEBIASAANNYA',{size:isV?50:50,bg:'#5B6C8F'}));return s;}
});

// 7 TIPS 37.8 - 43.4
S.push({t0:37.8,t1:43.4,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#CDEBF5"/><circle cx="960" cy="800" r="600" fill="#fff" opacity=".6" filter="url(#glowf)"/>`+rays(960,0,7,1500,9,.5)+`<rect y="1380" width="1920" height="540" fill="#9FD3E6"/>`;
  s+=yumaBuds({x:isV?640:640,y:1440,s:isV?0.9:1.2,expr:'happy',aR:-50,aL:70,blink:blinkAt(t,11)},t);
  const kc=popS(t,37.9,.5);
  if(kc>0){const items=[['Kecilkan volume',38.4],['Kasih jeda',39.72],['Bersihkan earbud',40.84]];
   let inner=`<rect x="-300" y="-250" width="600" height="500" rx="40" fill="#fff" stroke="${OL}" stroke-width="8"/><text x="0" y="-160" text-anchor="middle" font-family="B2" font-weight="800" font-size="60" fill="${OL}">Jadi:</text>`;
   items.forEach((it,i)=>{const k=popS(t,it[1],.4);const y=-60+i*120;if(k>0)inner+=g(tr(-230,y,k),check(0.5));inner+=`<text x="-180" y="${y+18}" font-family="B2" font-weight="800" font-size="52" fill="${OL}" opacity="${fadeIn(t,it[1])}">${it[0]}</text>`;});
   s+=g(tr(isV?1130:1240,960,kc*(isV?.9:1),2),inner,'filter="url(#dsh)"');}
  return s;},
 cam:t=>camV(t,37.8,43.4,[1000,1000,1.08],[1000,960,1.0]),
 hud:t=>''
});

// 8 CROSSING 43.4 - 47.8
S.push({t0:43.4,t1:47.8,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#5E6B73"/>`;
  s+=`<rect y="600" width="1920" height="720" fill="#3D464D"/>`;for(let i=0;i<9;i++)s+=`<rect x="${560+i*90}" y="640" width="54" height="640" rx="6" fill="#F2F2F2"/>`;
  s+=`<rect y="1320" width="1920" height="600" fill="#B8B2A6"/><rect y="0" width="1920" height="600" fill="#B8B2A6"/>`;
  // car approaching
  const cx=lerp(2100,1350,eout((t-43.6)/2.4));
  s+=g(tr(cx,900,1.2),`<rect x="-200" y="-90" width="400" height="180" rx="50" fill="#E8505B" stroke="${OL}" stroke-width="7"/><rect x="-130" y="-70" width="200" height="140" rx="30" fill="#BFE9FF" stroke="${OL}" stroke-width="5"/><circle cx="-210" cy="-50" r="16" fill="#FFE27A"/><circle cx="-210" cy="50" r="16" fill="#FFE27A"/>`,'filter="url(#dsh)"');
  // yuma at curb removing buds
  const off=ss((t-44.7)/0.6);
  const o={x:760,y:1560,s:1.1,expr:off>0.5?'smile':'surprised',aR:off>0?-100+60*(1-off):70,aL:70,blink:blinkAt(t,5)};
  s+=off<0.5?yumaBuds(o,t):yuma({...o,holdR:earbud(.6)});
  const k=popS(t,44.68,.45); if(k>0) s+=g(tr(isV?1150:1200,1460,k,3),label('LEPAS DULU!',{size:56,bg:'#E5383B'}));
  if(off>0.5) for(let i=0;i<2;i++){const ph=(t*1.2+i/2)%1;s+=`<path d="M${1050-ph*120},${820-ph*40}Q${1020-ph*140},${900} ${1050-ph*120},${980+ph*40}" stroke="#fff" stroke-width="10" fill="none" stroke-linecap="round" opacity="${1-ph}"/>`;}
  return s;},
 cam:t=>isV?camV(t,43.4,47.8,[960,1150,1.0],[1000,1150,1.05]):camV(t,43.4,47.8,[960,1100,1.1],[1000,1080,1.0]),
 hud:t=>{const k=popS(t,43.58,.45);if(k<=0)return '';return g(tr(W/2,isV?420:110,k,-3),label('MAU NYEBRANG?',{size:isV?74:62,bg:'#F4C542',fill:OL}));}
});

// 9 TINNITUS 47.8 - 52.4
S.push({t0:47.8,t1:52.4,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#2A1F2B"/><circle cx="960" cy="900" r="600" fill="#8E3B4F" opacity=".35" filter="url(#glowf)"/>`;
  s+=g(tr(960,1640,1.9),yHead('worried',blinkAt(t,7)),'filter="url(#dsh)"');
  for(let i=0;i<3;i++){const ph=(t*2+i/3)%1;s+=`<path d="M${1220+ph*120},${700}q20,-30 40,0t40,0t40,0" stroke="#FFE27A" stroke-width="10" fill="none" stroke-linecap="round" opacity="${1-ph}"/><path d="M${700-ph*120},${700}q-20,-30 -40,0t-40,0t-40,0" stroke="#FFE27A" stroke-width="10" fill="none" stroke-linecap="round" opacity="${1-ph}"/>`;}
  const kn=popS(t,48.2,.4); if(kn>0) s+=g(tr(isV?1180:1360,560,kn,6),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="72" fill="#FFE27A" stroke="${OL}" stroke-width="8" paint-order="stroke">NGIIING~</text>`);
  const kb=fadeIn(t,49.6,.4); if(kb>0) s+=g(tr(isV?720:560,580,1,-4),bubble(320,130,'br')+`<text x="0" y="16" text-anchor="middle" font-family="B2" font-weight="800" font-size="48" fill="#999">...?? ...</text>`,`opacity="${0.8*kb}"`);
  const kd=popS(t,51.26,.45); if(kd>0) s+=g(tr(960,1300,kd,-2),label('PERIKSAKAN KE DOKTER',{size:isV?52:58,bg:'#3BB273'}));
  return s;},
 cam:t=>camV(t,47.8,52.4,[960,900,1.15],[960,960,1.0]),
 hud:t=>''
});

// 10 CTA 52.4 - end
S.push({t0:52.4,t1:56.5,
 world:t=>{const sl=eout((t-52.4)/.5);
  let s=`<rect width="1920" height="1920" fill="#222"/>`;
  s+=`<path d="M0,0L${fmt(lerp(-200,1040,sl))},0L${fmt(lerp(-400,880,sl))},1920L0,1920Z" fill="#2C8FC4"/><path d="M1920,0L${fmt(lerp(2120,1040,sl))},0L${fmt(lerp(2320,880,sl))},1920L1920,1920Z" fill="#9C7BE0"/>`;
  const L=isV?720:620,Rr=isV?1200:1320;
  const k1=popS(t,52.8,.5),k2=popS(t,53.6,.5);
  if(k1>0)s+=g(tr(L,1000,2.2*k1,-15),earbud(1),'filter="url(#dsh)"');
  if(k2>0)s+=g(tr(Rr,1020,1.3*k2),`<rect x="-90" y="-150" width="180" height="300" rx="30" fill="#2E2A3A" stroke="${OL}" stroke-width="7"/><circle cx="0" cy="-70" r="40" fill="#555" stroke="#888" stroke-width="6"/><circle cx="0" cy="50" r="62" fill="#555" stroke="#888" stroke-width="8"/>`+soundWaves(60,50,3,t,'#fff',.7),'filter="url(#dsh)"');
  s+=bigText('TIM EARPHONE',L,700,isV?62:76,{sw:10})+bigText('TIM SPEAKER',Rr,700,isV?62:76,{sw:10});
  const kv=popS(t,53.3,.4);if(kv>0)s+=g(tr(960,900,kv,-6),`<circle r="96" fill="#FFE27A" stroke="${OL}" stroke-width="10"/><text x="0" y="30" text-anchor="middle" font-family="B2" font-weight="800" font-size="90" fill="${OL}">VS</text>`,'filter="url(#dsh)"');
  const yk=eout((t-52.5)/.6);
  s+=yuma({x:960,y:lerp(1900,1480,yk),s:1.0,expr:'happy',aR:-60+Math.sin(t*9)*14,aL:70,blink:blinkAt(t,13)});
  const kc=popS(t,54.98,.45);if(kc>0)s+=g(tr(isV?1130:1290,1240,kc*(isV?.85:1),3),bubble(520,170,'bl')+`<text x="0" y="20" text-anchor="middle" font-family="B2" font-weight="800" font-size="58" fill="${OL}">Tulis di komentar!</text>`,'filter="url(#dsh)"');
  return s;},
 cam:t=>camV(t,52.4,56.5,[960,1000,1.0],[960,980,1.06]),
 hud:t=>''
});
