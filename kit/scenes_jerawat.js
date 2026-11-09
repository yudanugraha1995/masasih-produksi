// ===== Gimana Kalau Sering Pencet Jerawat (Style A) =====
const isV=ASP==='v';
function srcText(txt,k=1){return `<text x="40" y="${H-(isV?60:34)}" font-family="Inter" font-weight="500" font-size="${isV?24:22}" fill="#fff" opacity="${.85*k}">${txt}</text>`;}
function bathroom(){let s=`<rect width="1920" height="1920" fill="#CFE3E6"/>`;
  for(let y=0;y<1920;y+=120)for(let x=(y/120%2)*60;x<1920;x+=120)s+=`<rect x="${x+4}" y="${y+4}" width="112" height="112" rx="10" fill="#DCEDEF"/>`;
  s+=`<rect y="1380" width="1920" height="540" fill="#9FB8BC"/><rect x="560" y="1320" width="800" height="80" rx="20" fill="#F4F4F4" stroke="${OL}" stroke-width="6"/>`;return s;}
function mirror(x,y,w,h,inner=''){return `<rect x="${x-w/2-24}" y="${y-h/2-24}" width="${w+48}" height="${h+48}" rx="60" fill="#B98E5E" stroke="${OL}" stroke-width="8"/><rect x="${x-w/2}" y="${y-h/2}" width="${w}" height="${h}" rx="44" fill="#E9F6F8"/>${inner}<path d="M${x-w/2+40},${y-h/2+60}L${x-w/2+140},${y-h/2+20}M${x-w/2+40},${y-h/2+140}L${x-w/2+240},${y-h/2+30}" stroke="#fff" stroke-width="18" stroke-linecap="round" opacity=".7"/>`;}
function pimple(x,y,s=1,red=1){return g(tr(x,y,s),`<circle r="${46}" fill="#F28B82" opacity="${0.45*red}"/><circle r="22" fill="#E5574F" stroke="#B83A33" stroke-width="3"/><circle cx="-4" cy="-6" r="9" fill="#FFF4C2"/>`);}
function bact(s=1,r=0,col='#A07BE0'){return g(`rotate(${fmt(r)}) scale(${s})`,`<path d="M-50,0C-50,-34 50,-34 50,0C50,34 -50,34 -50,0Z" fill="${col}" stroke="${OL}" stroke-width="5"/><path d="M-50,0L-74,-10M50,0L76,10M-30,-26L-40,-46M30,26L40,46" stroke="${OL}" stroke-width="5" stroke-linecap="round"/><circle cx="-14" cy="-4" r="6" fill="#2E2430"/><circle cx="14" cy="-4" r="6" fill="#2E2430"/><path d="M-10,10Q0,18 10,10" stroke="#2E2430" stroke-width="4" fill="none" stroke-linecap="round"/>`);}
function finger(rot=0,s=1){return g(`rotate(${rot}) scale(${s})`,`<path d="M-50,0L-50,-260Q-50,-320 0,-320Q50,-320 50,-260L50,0Z" fill="#F6D2BB" stroke="${OL}" stroke-width="6"/><path d="M-30,-250Q-30,-300 0,-300Q30,-300 30,-250L30,-220Q0,-232 -30,-220Z" fill="#FFF0E6" stroke="${OL}" stroke-width="4"/><path d="M-36,-150Q0,-140 36,-150" stroke="#D9A88C" stroke-width="5" fill="none" stroke-linecap="round"/>`);}
// skin cross-section with pore; opts: clog, bact, squeeze(0..1), deep(0..1), inflame(0..1)
function skinSection(t,o={}){
  const cx=960, top=820;
  let s=`<rect x="0" y="${top}" width="1920" height="1100" fill="#F3C7AE"/><rect x="0" y="${top}" width="1920" height="60" fill="#F7D9C6"/><rect x="0" y="${top+520}" width="1920" height="600" fill="#F9E0B8"/>`;
  for(let i=0;i<14;i++) s+=`<circle cx="${rnd(i)*1920}" cy="${top+560+rnd(i+4)*400}" r="${40+rnd(i+8)*40}" fill="#FCEBCB" stroke="#E9C998" stroke-width="3"/>`;
  if(o.inflame) s+=`<ellipse cx="${cx}" cy="${top+250}" rx="${260+360*o.inflame}" ry="${200+220*o.inflame}" fill="#E5574F" opacity="${0.35*o.inflame}" filter="url(#glowf)"/>`;
  const sq=o.squeeze||0, bulge=(o.inflame||0)*40;
  // pore shape (follicle)
  s+=`<path d="M${cx-90+sq*30},${top-bulge}Q${cx-110+sq*40},${top+150} ${cx-150+sq*30},${top+300}Q${cx},${top+400+(o.deep||0)*140} ${cx+150-sq*30},${top+300}Q${cx+110-sq*40},${top+150} ${cx+90-sq*30},${top-bulge}Z" fill="#E9A88A" stroke="#C4775A" stroke-width="6"/>`;
  if(o.clog){s+=`<path d="M${cx-120+sq*30},${top+260}Q${cx},${top+360+(o.deep||0)*140} ${cx+120-sq*30},${top+260}Q${cx+90},${top+80} ${cx},${top+40}Q${cx-90},${top+80} ${cx-120+sq*30},${top+260}Z" fill="#F6D86B" stroke="#D9B13A" stroke-width="5" opacity="${o.clog}"/>`;
   for(let i=0;i<6;i++){const x=cx-60+rnd(i)*120,y=top+80+rnd(i+2)*200;s+=`<path d="M${x-22},${y}L${x+22},${y-8}L${x+18},${y+12}L${x-20},${y+16}Z" fill="#EADCC8" stroke="#BFA88A" stroke-width="3" opacity="${o.clog}"/>`;}}
  if(o.bact){for(let i=0;i<4;i++){const bx=cx-60+i*40+Math.sin(t*6+i)*12, by=top+170+((i%2)*70)+Math.abs(Math.sin(t*5+i))*-30; s+=g(tr(bx,by,0.55*o.bact,Math.sin(t*4+i)*20),bact(1));}}
  if(o.deep){for(let i=0;i<5;i++){const a=i/4*Math.PI; const r=120+o.deep*160; s+=`<circle cx="${cx+Math.cos(a)*r*1.2}" cy="${top+320+Math.sin(a)*r*0.6}" r="${18}" fill="#F6D86B" stroke="#D9B13A" stroke-width="3" opacity="${o.deep}"/>`;}}
  return s;}

// 1 HOOK 0 - 4.4
S.push({t0:0,t1:4.4,
 world:t=>{let s=bathroom();
  s+=mirror(960,900,760,820, g(tr(960,1290,1.15),yHead(t>2.4?'surprised':'think',blinkAt(t,2))+pimple(55,-418,0.9,1),'filter="url(#dsh)"'));
  // finger approaching
  const fk=eout((t-2.2)/1.2); s+=g(tr(lerp(1700,1220,fk),lerp(1500,1210,fk),1,-35),finger(0,1.2),'filter="url(#dsh)"');
  return s;},
 cam:t=>camV(t,0,4.4,[960,1000,1.0],[1040,880,1.25]),
 hud:t=>{const k=popS(t,0.05,.5),k2=popS(t,2.56,.45);
  return g(tr(W/2,isV?430:170,k,-4),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="${isV?160:130}" fill="#FFE27A" stroke="${OL}" stroke-width="14" paint-order="stroke">WOI!</text>`)+(k2>0?g(tr(W/2,isV?1260:290,k2,2),label('LANGSUNG PENCET?',{size:isV?70:60,bg:'#E5383B'})):'');}
});

// 2 CHAPTER 4.4 - 7.6
S.push({t0:4.4,t1:7.6,
 world:t=>{let s=bathroom();s+=mirror(960,900,760,820,g(tr(960,1290,1.15),yHead('worried',false)+pimple(55,-418,1.1,1.4)));return s+`<rect width="1920" height="1920" fill="#06121C" opacity=".6"/>`;},
 cam:t=>camV(t,4.4,7.6,[1000,900,1.2],[960,960,1.05]),
 hud:t=>{const lb=ss((t-4.4)/0.4)*(isV?150:110);let s=`<rect width="${W}" height="${lb}" fill="#000"/><rect y="${H-lb}" width="${W}" height="${lb}" fill="#000"/>`;
  const k=fadeIn(t,4.55,.5),ky=lerp(30,0,eout((t-4.55)/.6));const L=['MASA SIH','DIPENCET DIKIT','BISA PARAH?'];const fs=isV?120:110;const y0=isV?720:300;
  L.forEach((l,i)=>{s+=`<text x="${W/2}" y="${y0+i*fs*1.02+ky}" text-anchor="middle" font-family="B2" font-weight="800" font-size="${fs}" fill="url(#gold)" opacity="${k}" filter="url(#tsh)">${l}</text>`;});return s;}
});

// 3 WHAT IS A PIMPLE 7.6 - 13.6
S.push({t0:7.6,t1:13.6,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#3B3A7A"/>`;
  s+=skinSection(t,{clog:fadeIn(t,8.9,.5),bact:popS(t,11.6,.5)});
  const k1=popS(t,9.5,.4),k2=popS(t,10.4,.4),k3=popS(t,11.8,.4);
  if(k1>0) s+=g(tr(isV?700:620,isV?1300:1000,k1,-3),label('minyak',{size:isV?40:46,bg:'#D9B13A'}));
  if(k2>0) s+=g(tr(isV?1210:1310,isV?1300:1060,k2,3),label('sel kulit mati',{size:isV?38:42,bg:'#8C7A66'}));
  if(k3>0) s+=g(tr(960,isV?730:640,k3,-2),label('bakteri pesta! 🎉',{size:50,bg:'#9C7BE0'}));
  if(k3>0) for(let i=0;i<14;i++){const ph=((t-11.6)*0.8+rnd(i))%1;s+=`<rect x="${700+rnd(i+5)*520}" y="${700+ph*400}" width="14" height="22" rx="3" fill="${['#F4C542','#E8505B','#3BB273','#2C8FC4'][i%4]}" transform="rotate(${t*200+i*40} ${700+rnd(i+5)*520} ${700+ph*400})" opacity="${1-ph}"/>`;}
  return s;},
 cam:t=>camV(t,7.6,13.6,[960,860,1.0],[960,1000,1.2]),
 hud:t=>{const k=popS(t,8.0,.45);if(k<=0)return '';return g(tr(W/2,isV?420:110,k,-3),label('JERAWAT = PORI TERSUMBAT',{size:isV?56:52,bg:'#F4C542',fill:OL}))+srcText('Ilustrasi disederhanakan',k);}
});

// 4 SQUEEZE 13.6 - 19.6
S.push({t0:13.6,t1:19.6,
 world:t=>{const sq=ss((t-13.8)/1.0)*(0.7+0.15*Math.sin(t*6));const deep=ss((t-17.1)/1.2);
  let s=`<rect width="1920" height="1920" fill="#3B3A7A"/>`+skinSection(t,{clog:1,bact:1,squeeze:sq,deep});
  s+=g(tr(lerp(500,680,sq),900,1,62),finger(0,1.1),'filter="url(#dsh)"')+g(tr(lerp(1420,1240,sq),900,1,-62),finger(0,1.1),'filter="url(#dsh)"');
  // a little comes out
  const out=ss((t-14.6)/0.8); if(out>0) s+=`<path d="M940,${820-out*60}Q960,${780-out*90} 980,${820-out*60}Z" fill="#F6D86B" stroke="#D9B13A" stroke-width="4"/>`;
  if(deep>0) s+=`<path d="M960,1150L960,${1150+deep*150}" stroke="#E5383B" stroke-width="16" stroke-linecap="round"/><path d="M930,${1130+deep*150}L960,${1180+deep*150}L990,${1130+deep*150}" stroke="#E5383B" stroke-width="16" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
  const kd=popS(t,15.42,.45); if(kd>0) s+=g(tr(960,isV?730:600,kd,-2),label('nggak semua keluar',{size:48,bg:'#5B6C8F'}));
  const kk=popS(t,17.3,.45); if(kk>0) s+=g(tr(isV?1180:1320,1420,kk,3),label('kedorong makin dalam',{size:isV?40:46,bg:'#E5383B'}));
  return s;},
 cam:t=>camV(t,13.6,19.6,[960,980,1.12],[960,1080,1.0]),
 hud:t=>{const k=popS(t,14.54,.45);if(k<=0)return '';return g(tr(W/2,isV?420:110,k,-3),label('KATA DOKTER KULIT',{size:isV?66:56,bg:'#F4C542',fill:OL}));}
});

// 5 INFLAMMATION 19.6 - 23.9
S.push({t0:19.6,t1:23.9,
 world:t=>{const inf=ss((t-19.7)/1.4);let s=`<rect width="1920" height="1920" fill="#3B3A7A"/>`+skinSection(t,{clog:1,bact:1,deep:1,inflame:inf});
  const L=[['MERAH',21.34,'#E5383B',-4],['BENGKAK',21.86,'#F2A541',3],['LAMA SEMBUH',22.6,'#5B6C8F',-2]];
  L.forEach((l,i)=>{const k=popS(t,l[1],.4);if(k>0)s+=g(tr(isV?(700+i*260):(560+i*400),620+(i%2)*90,k,l[3]),label(l[0],{size:isV?44:54,bg:l[2]}));});
  return s;},
 cam:t=>camV(t,19.6,23.9,[960,980,1.0],[960,940,1.1]),
 hud:t=>{const k=popS(t,19.8,.45);if(k<=0)return '';return g(tr(W/2,isV?420:110,k,-3),label('PERADANGAN MELUAS',{size:isV?64:56,bg:'#E5383B'}));}
});

// 6 NAIL BACTERIA 23.9 - 28.5
S.push({t0:23.9,t1:28.5,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#1F2E25"/><circle cx="960" cy="900" r="600" fill="#3E7B4A" opacity=".5" filter="url(#glowf)"/>`;
  // big fingertip with dirty nail
  s+=g(tr(760,1500,1.9,25),finger(0,1),'filter="url(#dsh)"');
  s+=g(tr(1010,1030,1.9,25),`<path d="M-30,-250Q-30,-300 0,-300Q30,-300 30,-250" fill="none" stroke="#6B5A3A" stroke-width="10" stroke-linecap="round"/>`);
  // wound
  s+=g(tr(1300,1200,1),`<ellipse rx="130" ry="50" fill="#F3C7AE" stroke="#C4775A" stroke-width="5"/><ellipse rx="40" ry="16" fill="#C0392B"/>`);
  // bacteria jumping from nail to wound
  for(let i=0;i<5;i++){const st=24.2+i*0.35; const p=clamp((t-st)/0.9); if(p<=0) continue;
   const x=lerp(1020,1290+(i-2)*14,p), y=lerp(880,1190,p)-Math.sin(p*Math.PI)*260;
   s+=g(tr(x,y,0.6,p*360),bact(1,0,'#7BC96F'));}
  const ki=popS(t,26.78,.45); if(ki>0) s+=g(tr(1300,980,ki*(1+0.05*Math.sin(t*12)),-4),label('INFEKSI!',{size:72,bg:'#E5383B'}));
  return s;},
 cam:t=>isV?camV(t,23.9,28.5,[1000,1050,1.0],[1200,1080,1.1]):camV(t,23.9,28.5,[1000,1050,1.05],[1060,1060,1.15]),
 hud:t=>{const k=popS(t,24.0,.45);if(k<=0)return '';return g(tr(W/2,isV?420:110,k,-3),label('BAKTERI DARI KUKU',{size:isV?64:56,bg:'#5B6C8F'}));}
});

// 7 SCARS 28.5 - 32.4
S.push({t0:28.5,t1:32.4,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#E9DCCB"/><circle cx="960" cy="900" r="560" fill="#fff" opacity=".6" filter="url(#glowf)"/>`;
  // close-up cheek
  s+=`<ellipse cx="960" cy="1000" rx="520" ry="460" fill="#F7DCC8" stroke="${OL}" stroke-width="8"/>`;
  const k=fadeIn(t,29.3,.6);
  for(let i=0;i<6;i++){const x=780+rnd(i)*360,y=860+rnd(i+3)*300;s+=`<ellipse cx="${x}" cy="${y}" rx="${22+rnd(i+6)*16}" ry="${16+rnd(i+1)*10}" fill="#9C6B55" opacity="${0.6*k}"/>`;}
  for(let i=0;i<5;i++){const x=760+rnd(i+11)*400,y=900+rnd(i+13)*260;s+=`<ellipse cx="${x}" cy="${y}" rx="18" ry="14" fill="#D9B39C" stroke="#B88A72" stroke-width="3" opacity="${k}"/><path d="M${x-12},${y+6}Q${x},${y-8} ${x+12},${y+6}" stroke="#A97A62" stroke-width="3" fill="none" opacity="${k}"/>`;}
  // calendar flipping years
  const kc=popS(t,30.4,.45);
  if(kc>0){const yr=2026+Math.floor(clamp((t-30.6)/1.6)*5);s+=g(tr(isV?1260:1420,660,kc,6),`<rect x="-120" y="-130" width="240" height="250" rx="24" fill="#fff" stroke="${OL}" stroke-width="7"/><rect x="-120" y="-130" width="240" height="70" rx="20" fill="#E5383B"/><text x="0" y="50" text-anchor="middle" font-family="Inter" font-weight="800" font-size="74" fill="${OL}">${yr}</text>`,'filter="url(#dsh)"');}
  const kl=popS(t,29.5,.45); if(kl>0) s+=g(tr(isV?780:700,640,kl,-3),label('bekas gelap & bopeng',{size:isV?42:48,bg:'#8C5A44'}));
  return s;},
 cam:t=>camV(t,28.5,32.4,[960,1000,1.12],[960,960,1.0]),
 hud:t=>''
});

// 8 DANGER TRIANGLE 32.4 - 41.9
S.push({t0:32.4,t1:41.9,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#2A1F2B"/><circle cx="960" cy="900" r="620" fill="#8E3B4F" opacity="${0.3+0.1*Math.sin(t*4)}" filter="url(#glowf)"/>`;
  s+=g(tr(960,1620,2.1),yHead('worried',blinkAt(t,8)),'filter="url(#dsh)"');
  // triangle: nose bridge (0,-470) to mouth corners (±40,-395) in head coords -> world: 960+x*2.1, 1620+y*2.1
  const kt=ss((t-32.6)/0.8); const P=(x,y)=>[960+x*2.1,1620+y*2.1];
  const a=P(0,-486),b=P(-46,-388),c=P(46,-388);
  s+=`<path d="M${a[0]},${a[1]}L${b[0]},${b[1]}L${c[0]},${c[1]}Z" fill="#E5383B" fill-opacity="${0.25*kt}" stroke="#E5383B" stroke-width="10" stroke-dasharray="26 16" stroke-linejoin="round" opacity="${kt}"/>`;
  // vessels to brain
  const kv=ss((t-36.4)/1.0);
  if(kv>0){s+=g(tr(isV?1290:1420,560,popS(t,36.4,.5)*(isV?.8:1)),`<path d="M-120,40C-160,-60 -60,-130 0,-110C60,-130 160,-60 120,40C100,90 -100,90 -120,40Z" fill="#F3A6B5" stroke="${OL}" stroke-width="6"/><path d="M0,-108L0,70M-80,-20Q-40,0 -60,40M80,-20Q40,0 60,40" stroke="#D97890" stroke-width="5" fill="none"/>`,'filter="url(#dsh)"');
   const L=900*kv;s+=`<path d="M${a[0]},${a[1]}C${a[0]+40},${a[1]-260} ${(isV?1290:1420)-200},${640} ${(isV?1290:1420)-90},600" stroke="#E5383B" stroke-width="12" fill="none" stroke-dasharray="${L} 2000" stroke-linecap="round"/>`;}
  const k1=popS(t,38.68,.4),k2=popS(t,40.42,.4);
  if(k1>0) s+=g(tr(isV?720:560,isV?1160:1500,k1,-3),label('langka banget',{size:46,bg:'#3BB273'}));
  if(k2>0) s+=g(tr(isV?1200:1360,isV?1260:1500,k2,3),label('tapi bisa serius',{size:46,bg:'#E5383B'}));
  return s;},
 cam:t=>t<36.2?camV(t,32.4,36.2,[960,820,1.25],[960,860,1.1]):camV(t,36.2,41.9,[960,820,1.0],[960,900,1.0]),
 hud:t=>{const k=popS(t,32.5,.45);if(k<=0)return '';return g(tr(W/2,isV?420:110,k,-3),label('SEGITIGA BAHAYA',{size:isV?70:58,bg:'#E5383B'}));}
});

// 9 PLOT TWIST + SPREAD 41.9 - 51.0
S.push({t0:41.9,t1:51.0,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#2B1B14"/><circle cx="960" cy="960" r="680" fill="#A3542A" opacity=".45" filter="url(#glowf)"/>`;
  if(t<47.3){ // two bars: dipencet vs dibiarkan healing time
   const g1=eout((t-43.2)/1.2),g2=eout((t-45.4)/1.2);
   s+=`<path d="M520,1250L1400,1250" stroke="#fff" stroke-width="8" opacity=".8"/>`;
   s+=`<rect x="520" y="820" width="${fmt(380*g1)}" height="120" rx="20" fill="#3BB273" stroke="${OL}" stroke-width="6"/><rect x="520" y="1040" width="${fmt(820*g2)}" height="120" rx="20" fill="#E5383B" stroke="${OL}" stroke-width="6"/>`;
   s+=bigText('dibiarkan',520,790,46,{anchor:'start'})+bigText('dipencet',520,1010,46,{anchor:'start'});
   if(g2>0.9) s+=g(tr(1340,1100,popS(t,46.6,.4)),`<text x="0" y="20" text-anchor="middle" font-family="B2" font-weight="800" font-size="56" fill="#fff">⏳</text>`);
   const kl=popS(t,45.6,.45); if(kl>0) s+=g(tr(960,1380,kl,-2),label('lebih LAMA sembuh',{size:52,bg:'#E5383B'}));
  } else { // spreading pimples
   s+=`<ellipse cx="960" cy="1000" rx="560" ry="480" fill="#F7DCC8" stroke="${OL}" stroke-width="8"/>`;
   s+=pimple(960,980,2.0,1.4);
   for(let i=0;i<7;i++){const k=popS(t,47.6+i*0.28,.4);if(k<=0)continue;const a=i*0.9,R=200+rnd(i)*160;s+=pimple(960+Math.cos(a)*R,980+Math.sin(a)*R*0.8,1.1*k,1);}
   const kf=popS(t,49.3,.45); if(kf>0) s+=g(tr(960,600,kf,3),label('ngajak temen-temennya!',{size:isV?44:50,bg:'#9C7BE0'}));
  }
  return s;},
 cam:t=>t<47.3?camV(t,41.9,47.3,[960,1000,1.05],[960,1020,1.0]):camV(t,47.3,51.0,[960,980,1.0],[960,960,1.12]),
 hud:t=>{let s='';if(t<43.0){const lb=ss((t-41.9)/.3)*(isV?150:110);s+=`<rect width="${W}" height="${lb}" fill="#000"/><rect y="${H-lb}" width="${W}" height="${lb}" fill="#000"/>`;}
  const k=popS(t,41.98,.45)*(1-ss((t-43.0)/.3));if(k>0)s+=g(tr(W/2,isV?700:330,k,-3),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="${isV?140:120}" fill="url(#gold)" filter="url(#tsh)">PLOT TWIST!</text>`);
  const k2=popS(t,43.06,.45)*(1-ss((t-47.1)/.25));if(k2>0)s+=g(tr(W/2,isV?420:110,k2,-2),label('DIPENCET ≠ CEPAT KEMPES',{size:isV?56:52,bg:'#5B6C8F'}));
  const k3=popS(t,47.44,.45);if(k3>0)s+=g(tr(W/2,isV?420:110,k3,2),label('BAKTERI NYEBAR',{size:isV?66:56,bg:'#E5383B'}));return s;}
});

// 10 SOLUTIONS 51.0 - 58.6
S.push({t0:51.0,t1:58.6,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#CDEBF5"/><circle cx="960" cy="800" r="600" fill="#fff" opacity=".6" filter="url(#glowf)"/>`+rays(960,0,7,1500,9,.5);
  s+=`<rect y="1380" width="1920" height="540" fill="#9FD3E6"/>`;
  s+=yuma({x:isV?640:640,y:1440,s:isV?0.9:1.2,expr:'happy',aR:-50,aL:70,blink:blinkAt(t,11)});
  const kc=popS(t,51.1,.5);
  if(kc>0){const items=[['Cuci muka 2x sehari',51.8],['Jangan dipegang-pegang',53.18],['Pimple patch / obat apotek',54.32],['Parah? Ke dokter kulit',57.58]];
   let inner=`<rect x="-330" y="-300" width="660" height="600" rx="40" fill="#fff" stroke="${OL}" stroke-width="8"/><text x="0" y="-210" text-anchor="middle" font-family="B2" font-weight="800" font-size="60" fill="${OL}">Solusinya:</text>`;
   items.forEach((it,i)=>{const k=popS(t,it[1],.4);const y=-110+i*115;if(k>0)inner+=g(tr(-270,y,k),check(0.45));inner+=`<text x="-225" y="${y+16}" font-family="B2" font-weight="800" font-size="44" fill="${OL}" opacity="${fadeIn(t,it[1])}">${it[0]}</text>`;});
   s+=g(tr(isV?1130:1240,960,kc*(isV?.9:1),2),inner,'filter="url(#dsh)"');}
  return s;},
 cam:t=>camV(t,51.0,58.6,[1000,1000,1.08],[1000,960,1.0]),
 hud:t=>''
});

// 11 CTA 58.6 - end
S.push({t0:58.6,t1:67.2,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#2E4373"/><circle cx="960" cy="900" r="640" fill="#5AA9F0" opacity=".45" filter="url(#glowf)"/>`;
  // phone with share
  const kp=popS(t,58.8,.5);
  if(kp>0) s+=g(tr(isV?1180:1300,900,kp,6),`<rect x="-150" y="-280" width="300" height="560" rx="44" fill="#22335A" stroke="${OL}" stroke-width="8"/><rect x="-128" y="-240" width="256" height="470" rx="24" fill="#E9F6F8"/>
   ${g('translate(0 130) scale(.42)',yHead('happy',false).replace(/translate/g,'translate')+'')}<g transform="translate(0 120)"><circle r="56" fill="#3BB273"/><path d="M-20,10L20,-20M-20,10L20,30" stroke="#fff" stroke-width="10" stroke-linecap="round"/><circle cx="-22" cy="10" r="12" fill="#fff"/><circle cx="22" cy="-20" r="12" fill="#fff"/><circle cx="22" cy="30" r="12" fill="#fff"/></g>`,'filter="url(#dsh)"');
  const btn=(x,y,k,col,txt)=>k>0?g(tr(x,y,k),`<rect x="-130" y="-56" width="260" height="112" rx="56" fill="${col}" stroke="#fff" stroke-width="6"/><text x="0" y="18" text-anchor="middle" font-family="B2" font-weight="800" font-size="${txt.length>8?40:48}" fill="#fff">${txt}</text>`,'filter="url(#dsh)"'):'';
  const bx=isV?960:960;
  s+=btn(isV?690:560,600,popS(t,62.16,.4),'#E8505B','👍 LIKE')+btn(isV?960:960,600,popS(t,63.0,.4),'#2C8FC4','💬 KOMEN')+btn(isV?1230:1360,600,popS(t,63.24,.4),'#E5383B','SUBSCRIBE');
  const yk=eout((t-58.8)/.6);
  s+=yuma({x:isV?760:700,y:lerp(1900,1460,yk),s:1.1,expr:'happy',aR:t>66?-60+Math.sin(t*12)*18:-40,aL:70,blink:blinkAt(t,13)});
  const kd=popS(t,66.16,.4); if(kd>0) s+=g(tr(isV?1080:1100,1150,kd,4),bubble(380,150,'bl')+`<text x="0" y="20" text-anchor="middle" font-family="B2" font-weight="800" font-size="62" fill="${OL}">Da-dah!</text>`,'filter="url(#dsh)"');
  return s;},
 cam:t=>camV(t,58.6,67.2,[960,1000,1.0],[960,960,1.05]),
 hud:t=>{const k=popS(t,58.9,.45);if(k<=0)return '';return g(tr(W/2,isV?420:110,k,-3),label('SHARE KE TEMENMU!',{size:isV?66:56,bg:'#3BB273'}));}
});
