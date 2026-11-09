// ===== Tidur Lampu Nyala Tiap Malam (Style A) =====
const isV=ASP==='v';const BX=isV?1290:1000;
function bedroom(t,light=1){ // light 0 dark .. 1 blazing
  const wall=light>0.5?'#E9E4D2':'#2B3350', fl=light>0.5?'#B89B7E':'#3A3448';
  let s=`<rect width="1920" height="1920" fill="${wall}"/><rect y="1300" width="1920" height="620" fill="${fl}"/>`;
  // window with night sky + moon
  s+=`<rect x="1230" y="420" width="420" height="440" rx="18" fill="#1B2347" stroke="#7D6F60" stroke-width="16"/>`;
  for(let i=0;i<9;i++)s+=`<circle cx="${1260+rnd(i)*360}" cy="${450+rnd(i+30)*360}" r="${2+rnd(i+7)*3}" fill="#fff" opacity="${0.5+0.5*Math.sin(t*3+i)}"/>`;
  s+=`<circle cx="1540" cy="530" r="48" fill="#F6E7A8"/><circle cx="1562" cy="516" r="44" fill="#1B2347"/>`;
  s+=`<path d="M1440,420L1440,860M1230,640L1650,640" stroke="#7D6F60" stroke-width="12"/>`;
  // wall clock 00:00
  s+=`<circle cx="430" cy="560" r="110" fill="#fff" stroke="#5B4C40" stroke-width="14"/><path d="M430,560L430,480M430,560L430,495" stroke="#2E2430" stroke-width="12" stroke-linecap="round"/><circle cx="430" cy="560" r="10" fill="#E5383B"/>`;
  return s;}
function ceilingLamp(x,y,on=1,t=0){
  let s='';
  if(on>0){s+=`<circle cx="${x}" cy="${y+60}" r="${420*on}" fill="#FFF3B0" opacity="${0.45*on}" filter="url(#glowf)"/>`+rays(x,y+40,9,1600,10,0.45*on,Math.sin(t)*2);}
  s+=`<path d="M${x},0L${x},${y-40}" stroke="#444" stroke-width="8"/><path d="M${x-110},${y+40}Q${x},${y-80} ${x+110},${y+40}Z" fill="#F2F2F2" stroke="${OL}" stroke-width="6"/><ellipse cx="${x}" cy="${y+44}" rx="70" ry="22" fill="${on>0?'#FFF6C9':'#888'}"/>`;
  return s;}
function bed(x,y,s=1,inner=''){ // inner: head svg placed at pillow
  return g(tr(x,y,s),`<rect x="-520" y="-80" width="1040" height="200" rx="30" fill="#8C6A52" stroke="${OL}" stroke-width="6"/>
  <rect x="-560" y="-340" width="70" height="460" rx="24" fill="#7A5A44" stroke="${OL}" stroke-width="6"/>
  <rect x="-490" y="-130" width="980" height="90" rx="40" fill="#F4F1EA" stroke="${OL}" stroke-width="5"/>
  <rect x="-470" y="-215" width="260" height="110" rx="50" fill="#fff" stroke="${OL}" stroke-width="5"/>
  ${inner}
  <path d="M-260,-170Q120,-230 500,-150L500,-30Q120,-60 -260,-40Z" fill="#6FA8DC" stroke="${OL}" stroke-width="6" stroke-linejoin="round"/>
  <path d="M-220,-120Q120,-170 470,-110" stroke="#5B93C9" stroke-width="10" fill="none" stroke-linecap="round"/>`);}
function lyingHead(expr,blink){return g('translate(-340 -175) rotate(-78) scale(.72) translate(0 470)',yHead(expr,blink));}
function zzz(x,y,t){let s='';for(let i=0;i<3;i++){const ph=(t*0.5+i/3)%1;s+=`<text x="${x+ph*80+i*10}" y="${y-ph*160}" font-family="B2" font-weight="800" font-size="${50+i*14}" fill="#fff" opacity="${fmt(Math.sin(ph*Math.PI))}" stroke="${OL}" stroke-width="5" paint-order="stroke">Z</text>`;}return s;}
function heart(s=1,beat=0){const k=1+0.08*beat;return g(`scale(${s*k})`,`<path d="M0,60C-120,-20 -110,-120 -50,-120C-20,-120 0,-95 0,-75C0,-95 20,-120 50,-120C110,-120 120,-20 0,60Z" transform="scale(1.6)" fill="#E5383B" stroke="${OL}" stroke-width="5"/><ellipse cx="-70" cy="-120" rx="22" ry="14" fill="#fff" opacity=".4"/>`);}
function molecule(s=1,col='#9C7BE0'){return g(`scale(${s})`,`<path d="M-40,0L0,-30L40,0L0,30Z" stroke="${OL}" stroke-width="6" fill="none"/><circle cx="-40" cy="0" r="18" fill="${col}" stroke="${OL}" stroke-width="4"/><circle cx="0" cy="-30" r="18" fill="${col}" stroke="${OL}" stroke-width="4"/><circle cx="40" cy="0" r="18" fill="${col}" stroke="${OL}" stroke-width="4"/><circle cx="0" cy="30" r="18" fill="#C9B6F2" stroke="${OL}" stroke-width="4"/>`);}
function srcText(txt,k=1){return `<text x="40" y="${H-(isV?60:34)}" font-family="Inter" font-weight="500" font-size="${isV?24:22}" fill="#fff" opacity="${.85*k}">${txt}</text>`;}

// 1 HOOK 0 - 5.2
S.push({t0:0,t1:5.2,
 world:t=>{let s=bedroom(t,1);
  s+=ceilingLamp(960,330,1+0.05*Math.sin(t*20),t);
  s+=bed(BX,1420,1.05,lyingHead(t<1.9?'surprised':'worried',false));
  const k=popS(t,1.94,.5); if(k>0) s+=g(tr(960,980,k,-3),`<rect x="-330" y="-70" width="660" height="140" rx="30" fill="#2C8FC4" stroke="#fff" stroke-width="8"/><text x="0" y="24" text-anchor="middle" font-family="B2" font-weight="800" font-size="66" fill="#fff">24 JAM BUKA!</text>`,'filter="url(#dsh)"');
  return s;},
 cam:t=>camV(t,0,5.2,[960,1050,1.15],[960,1000,1.0]),
 hud:t=>{const k=popS(t,0.05,.5),k2=popS(t,0.6,.5);
  return g(tr(W/2,isV?430:180,k,-4),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="${isV?150:120}" fill="#FFE27A" stroke="${OL}" stroke-width="14" paint-order="stroke">WOYYY!</text>`)+
   g(tr(W/2,isV?580:300,k2),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="${isV?92:76}" fill="#fff" stroke="${OL}" stroke-width="12" paint-order="stroke">UDAH TENGAH MALAM!</text>`);}
});

// 2 CONFUSED 5.2 - 9.6
S.push({t0:5.2,t1:9.6,
 world:t=>{let s=bedroom(t,1);s+=ceilingLamp(960,330,1,t);
  s+=bed(BX,1420,1.05,lyingHead('think',blinkAt(t,3)));
  for(let i=0;i<3;i++){const k=popS(t,7.4+i*0.3,.4);if(k>0)s+=g(tr((isV?1000:620)+i*120,(isV?900:860)-i*90,k*(1+0.06*Math.sin(t*5+i)),-10+i*12),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="${110+i*20}" fill="#9C7BE0" stroke="${OL}" stroke-width="10" paint-order="stroke">?</text>`);}
  return s;},
 cam:t=>isV?camV(t,5.2,9.6,[1000,1100,1.0],[1020,1120,1.15]):camV(t,5.2,9.6,[900,1100,1.0],[760,1150,1.2]),
 hud:t=>{const k=popS(t,7.4,.45);if(k<=0)return '';return g(tr(W/2,isV?420:150,k,-3),label('TUBUH IKUT BINGUNG?',{size:isV?66:58,bg:'#5B6C8F'}));}
});

// 3 BIOLOGICAL CLOCK + MELATONIN 9.6 - 17.4
S.push({t0:9.6,t1:17.4,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#141B3A"/><circle cx="960" cy="900" r="620" fill="#3B4FA0" opacity=".5" filter="url(#glowf)"/>`;
  // big clock = jam biologis
  const kc=popS(t,9.8,.6);
  if(kc>0){let ticks='';for(let i=0;i<12;i++){ticks+=`<path d="M0,-250L0,-${i%3?225:205}" stroke="${OL}" stroke-width="${i%3?6:12}" stroke-linecap="round" transform="rotate(${i*30})"/>`;}
   const hr=t*25, mn=t*300;
   s+=g(tr(960,860,kc),`<circle r="290" fill="#2E4373" stroke="${OL}" stroke-width="10"/><circle r="265" fill="#F6F1E3" stroke="${OL}" stroke-width="6"/>${ticks}
    <path d="M-90,0A90,90 0 1 0 0,-90A70,70 0 1 1 -90,0Z" fill="#F4C542" opacity=".35" transform="translate(110 90) scale(.9)"/>
    <path d="M0,0L0,-150" stroke="${OL}" stroke-width="16" stroke-linecap="round" transform="rotate(${hr})"/><path d="M0,0L0,-210" stroke="${OL}" stroke-width="10" stroke-linecap="round" transform="rotate(${mn})"/><circle r="18" fill="#E5383B"/>`,'filter="url(#dsh)"');}
  // lamp light hitting from right after 12.36
  const kl=ss((t-12.3)/.6);
  if(kl>0){s+=`<g opacity="${kl}">${rays(1700,200,6,1400,8,.5,40)}</g>`+g(tr(1700,230,1,-35),`<path d="M-80,40Q0,-60 80,40Z" fill="#F2F2F2" stroke="${OL}" stroke-width="6"/><ellipse cx="0" cy="44" rx="52" ry="16" fill="#FFF6C9"/>`);}
  // melatonin molecules floating, shrink & fade after 13.2
  for(let i=0;i<7;i++){const a=t*0.5+i*0.9, R=380+rnd(i)*70;const x=960+Math.cos(a)*R, y=860+Math.sin(a)*R*0.8;
   const appear=popS(t,10.6+i*0.1,.4); const sup=1-0.75*ss((t-13.2-i*0.12)/0.8);
   if(appear>0) s+=g(tr(x,y,0.9*appear*sup,t*30+i*40),molecule(1),`opacity="${0.3+0.7*sup}"`);}
  const km=popS(t,13.6,.45); if(km>0) s+=g(tr(960,1200,km,-2),label('MELATONIN ↓',{size:64,bg:'#9C7BE0'}));
  const kh=popS(t,14.86,.45); if(kh>0) s+=g(tr(960,1310,kh,2),label('hormon penanda malam',{size:44,bg:'#2E4373'}));
  return s;},
 cam:t=>camV(t,9.6,17.4,[960,900,1.18],[960,980,1.0]),
 hud:t=>{let s='';const k=popS(t,9.9,.45);if(k>0)s+=g(tr(W/2,isV?420:110,k,-3),label('JAM BIOLOGIS',{size:isV?74:60,bg:'#F4C542',fill:OL}));
  const kk=fadeIn(t,12.4,.4);if(kk>0)s+=srcText('Sumber: Gooley dkk., J Clin Endocrinol Metab (2011)',kk);return s;}
});

// 4 SLEEP SIGNAL SHIFTS 17.4 - 23.5
S.push({t0:17.4,t1:23.5,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#1D2547"/>`;
  // timeline
  const y=900; s+=`<path d="M420,${y}L1500,${y}" stroke="#fff" stroke-width="10" stroke-linecap="round" opacity=".8"/>`;
  const lbls=['21.00','22.00','23.00','00.00','01.00'];lbls.forEach((l,i)=>{const x=520+i*220;s+=`<path d="M${x},${y-20}L${x},${y+20}" stroke="#fff" stroke-width="8"/><text x="${x}" y="${y+80}" text-anchor="middle" font-family="Inter" font-weight="700" font-size="40" fill="#C8D2F0">${l}</text>`;});
  // ghost moon at normal position, moving moon shifts later
  const sh=eio((t-18.6)/2.2); const mx=lerp(740,1180,sh);
  s+=g(tr(740,y-150,1),`<circle r="70" fill="#F6E7A8" opacity=".25"/><circle cx="26" cy="-18" r="64" fill="#1D2547"/>`);
  s+=g(tr(mx,y-150,1+0.04*Math.sin(t*4)),`<circle r="70" fill="#F6E7A8"/><circle cx="26" cy="-18" r="64" fill="#1D2547"/>`+zzz(40,-40,t),'filter="url(#dsh)"');
  if(sh>0.05) s+=`<path d="M780,${y-280}Q${(780+mx)/2},${y-360} ${mx-40},${y-280}" stroke="#F4C542" stroke-width="10" fill="none" stroke-dasharray="20 16" stroke-linecap="round"/><path d="M${mx-60},${y-300}L${mx-30},${y-276}L${mx-66},${y-262}Z" fill="#F4C542"/>`;
  const kl=popS(t,18.7,.45); if(kl>0) s+=g(tr(960,640,kl,-2),label('SINYAL NGANTUK BERGESER',{size:50,bg:'#E8505B'}));
  // eye squint "silau" crossed at 21.78
  const ke=popS(t,21.78,.45); if(ke>0){ s+=g(tr(960,1180,ke),`<ellipse rx="150" ry="70" fill="#fff" stroke="${OL}" stroke-width="8"/><circle r="44" fill="#2E2430"/><circle cx="14" cy="-14" r="12" fill="#fff"/>`+rays(0,-200,5,200,14,.6),'filter="url(#dsh)"');
   s+=g(tr(960,1330,ke,-2),label('bukan cuma silau',{size:44,bg:'#5B6C8F'})); }
  return s;},
 cam:t=>camV(t,17.4,23.5,[960,880,1.12],[960,960,1.0]),
 hud:t=>''
});

// 5 PLOT TWIST 23.5 - 28.6
S.push({t0:23.5,t1:28.6,
 world:t=>{let s=bedroom(t,0.3);s+=`<rect width="1920" height="1920" fill="#000" opacity=".25"/>`;s+=ceilingLamp(960,330,0.8,t);
  s+=bed(BX,1420,1.05,lyingHead('happy',false));
  s+=zzz(BX-420,940,t);
  // body signals pulse rings
  const kp=fadeIn(t,25.6,.5);
  for(let i=0;i<3;i++){const ph=(t*0.8+i/3)%1;s+=`<circle cx="1060" cy="1300" r="${80+ph*300}" fill="none" stroke="#FF6B8A" stroke-width="${10*(1-ph)}" opacity="${kp*(1-ph)}"/>`;}
  const kr=popS(t,26.4,.45); if(kr>0) s+=g(tr(isV?1080:1220,880,kr,3),label('tubuh tetap merespons',{size:isV?44:48,bg:'#E5383B'}));
  return s;},
 cam:t=>camV(t,23.5,28.6,[960,1100,1.0],[1000,1080,1.15]),
 hud:t=>{let s='';if(t<24.6){const lb=ss((t-23.5)/.3)*(isV?150:110);s+=`<rect width="${W}" height="${lb}" fill="#000"/><rect y="${H-lb}" width="${W}" height="${lb}" fill="#000"/>`;}
  const k=popS(t,23.62,.45)*(1-ss((t-25.2)/.3));if(k>0)s+=g(tr(W/2,isV?620:300,k,-3),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="${isV?140:120}" fill="url(#gold)" filter="url(#tsh)">PLOT TWIST!</text>`);
  const k2=popS(t,25.0,.45);if(k2>0)s+=g(tr(W/2,isV?420:110,k2,-2),label('TIDUR PULAS ≠ AMAN',{size:isV?66:58,bg:'#5B6C8F'}));return s;}
});

// 6 STUDY: HEART + INSULIN 28.6 - 35.4
S.push({t0:28.6,t1:35.4,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#2A1F2B"/><circle cx="960" cy="900" r="620" fill="#8E3B4F" opacity=".35" filter="url(#glowf)"/>`;
  const kh=popS(t,28.9,.5);
  if(t<32.5){
   const beat=Math.max(0,Math.sin(t*Math.PI*2*1.6))**8;
   if(kh>0) s+=g(tr(960,820,1.3*kh),heart(1,beat),'filter="url(#dsh)"');
   // ECG line
   const off=(t*400)%240;let d='M420,1120';for(let x=420;x<=1500;x+=10){const ph=((x+off)%240)/240;let yy=1120;if(ph>.4&&ph<.45)yy=1000;else if(ph>.45&&ph<.5)yy=1180;else if(ph>.5&&ph<.53)yy=1090;d+=`L${x},${yy}`;}
   s+=`<path d="${d}" stroke="#7CF29A" stroke-width="10" fill="none" stroke-linejoin="round" opacity="${kh}"/>`;
   const kl=popS(t,30.4,.45);if(kl>0)s+=g(tr(960,1290,kl,-2),label('DENYUT JANTUNG ↑',{size:58,bg:'#E5383B'}));
  } else {
   const ki=popS(t,32.7,.5);
   s+=`<rect width="1920" height="1920" fill="#F2E3C9" opacity="${ss((t-32.5)/.4)}"/>`;
   // sunrise
   s+=g(tr(1380,620,ki),`<circle r="110" fill="#F6B73C"/>`+rays(0,0,12,200,30,.6));
   // bar chart insulin
   const gr=eout((t-33.0)/0.8);
   s+=`<path d="M500,1250L1400,1250" stroke="${OL}" stroke-width="8"/>`;
   s+=`<rect x="620" y="${1250-260*gr}" width="200" height="${260*gr}" rx="14" fill="#8FA9C9" stroke="${OL}" stroke-width="6"/><rect x="1060" y="${1250-430*gr}" width="200" height="${430*gr}" rx="14" fill="#E5383B" stroke="${OL}" stroke-width="6"/>`;
   s+=bigText('gelap',720,1320,46,{fill:OL})+bigText('lampu nyala',1160,1320,46,{fill:OL});
   if(ki>0) s+=g(tr(940,760,ki,-2),label('RESPONS INSULIN BERUBAH',{size:48,bg:'#2E4373'}));
  }
  return s;},
 cam:t=>t<32.5?camV(t,28.6,32.5,[960,950,1.0],[960,950,1.12]):camV(t,32.5,35.4,[960,1050,1.08],[960,1000,1.0]),
 hud:t=>{let s='';const k=popS(t,28.9,.45);if(k>0)s+=g(tr(W/2,isV?420:110,k,-3),label('STUDI KECIL',{size:isV?70:58,bg:'#F4C542',fill:OL}));
  s+=srcText('Sumber: Mason dkk., PNAS (2022)',fadeIn(t,28.9,.4));return s;}
});

// 7 NOT PROOF 35.4 - 42.6
S.push({t0:35.4,t1:42.6,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#DCE8F2"/><circle cx="960" cy="860" r="560" fill="#fff" opacity=".7" filter="url(#glowf)"/>`;
  const k1=popS(t,35.6,.5);
  if(k1>0){ s+=g(tr(isV?690:620,880,k1*(isV?.85:1)),`<circle r="150" fill="#1B2347" stroke="${OL}" stroke-width="8"/><circle cx="20" cy="-10" r="60" fill="#F6E7A8"/><circle cx="44" cy="-26" r="54" fill="#1B2347"/>`+g('translate(0 120)',`<rect x="-120" y="-30" width="240" height="70" rx="20" fill="#F4C542" stroke="${OL}" stroke-width="5"/><text x="0" y="18" text-anchor="middle" font-family="B2" font-weight="800" font-size="44" fill="${OL}">1 MALAM</text>`),'filter="url(#dsh)"');
   const kn=popS(t,36.4,.4); if(kn>0) s+=g(tr(960,880,kn),`<circle r="78" fill="#fff" stroke="${OL}" stroke-width="7"/><path d="M-36,-16L36,-16M-36,18L36,18" stroke="${OL}" stroke-width="16" stroke-linecap="round"/><path d="M-40,44L40,-44" stroke="#E5383B" stroke-width="16" stroke-linecap="round"/>`,'filter="url(#dsh)"');
   const kd=popS(t,37.0,.45); if(kd>0) s+=g(tr(isV?1240:1300,880,kd,3),label('DIABETES',{size:isV?60:70,bg:'#E5383B'}));
  }
  const km=popS(t,39.64,.5);
  if(km>0) s+=g(tr(isV?820:960,1220,km,-6+4*Math.sin(t*2)),`<circle r="110" fill="#BFE9FF" opacity=".5" stroke="${OL}" stroke-width="16"/><path d="M78,78L180,180" stroke="${OL}" stroke-width="34" stroke-linecap="round"/><path d="M78,78L180,180" stroke="#8C6A52" stroke-width="22" stroke-linecap="round"/><circle cx="-34" cy="-34" r="22" fill="#fff" opacity=".7"/>`,'filter="url(#dsh)"')+g(tr(isV?1170:1300,isV?1230:1300,km,3),label('masih perlu diteliti',{size:isV?38:44,bg:'#2E4373'}));
  return s;},
 cam:t=>camV(t,35.4,42.6,[960,900,1.1],[960,1050,1.0]),
 hud:t=>{const k=popS(t,35.6,.45);if(k<=0)return '';return g(tr(W/2,isV?420:110,k,-3),label('BUKAN BUKTI LANGSUNG',{size:isV?64:56,bg:'#3BB273'}));}
});

// 8 DIM THEN DARK 42.6 - 47.4
S.push({t0:42.6,t1:47.4,
 world:t=>{const dim=1-0.55*ss((t-42.9)/1.6); const dark=ss((t-45.3)/0.8);
  let s=bedroom(t,dim>0.6?1:0.3);s+=ceilingLamp(960,330,Math.max(0.05,dim*(1-dark)),t);
  s+=bed(BX,1420,1.05,lyingHead(dark>0.5?'happy':'smile',dark>0.5?false:blinkAt(t,5)));
  s+=`<rect width="1920" height="1920" fill="#0B1030" opacity="${0.35*(1-dim)+0.5*dark}"/>`;
  if(dark>0.5) s+=zzz(BX-420,940,t);
  // dimmer slider UI
  const ks=popS(t,42.82,.45);
  if(ks>0){const kn=1-ss((t-43.0)/1.4);s+=g(tr(isV?1380:1500,1000,ks),`<rect x="-70" y="-230" width="140" height="460" rx="60" fill="#fff" stroke="${OL}" stroke-width="8"/><rect x="-18" y="-180" width="36" height="360" rx="18" fill="#D5DCE6"/><rect x="-18" y="${fmt(180-360*kn)}" width="36" height="${fmt(360*kn)}" rx="18" fill="#F4C542"/><circle cx="0" cy="${fmt(180-360*kn)}" r="44" fill="#fff" stroke="${OL}" stroke-width="7"/>`,'filter="url(#dsh)"');}
  return s;},
 cam:t=>isV?camV(t,42.6,47.4,[1060,1080,1.0],[1040,1110,1.08]):camV(t,42.6,47.4,[1050,1080,1.0],[1000,1120,1.12]),
 hud:t=>{let s='';const k=popS(t,42.82,.4)*(1-ss((t-45.1)/.25));if(k>0)s+=g(tr(W/2,isV?420:110,k,-3),label('1. REDUPKAN',{size:isV?74:62,bg:'#F4C542',fill:OL}));
  const k2=popS(t,45.26,.4);if(k2>0)s+=g(tr(W/2,isV?420:110,k2,3),label('2. GELAPKAN',{size:isV?74:62,bg:'#2E4373'}));return s;}
});

// 9 NIGHT LIGHT NEAR FLOOR 47.4 - 52.9
S.push({t0:47.4,t1:52.9,
 world:t=>{let s=bedroom(t,0);s+=`<rect width="1920" height="1920" fill="#0B1030" opacity=".35"/>`;
  // floor night light glow
  const kl=popS(t,49.54,.5);
  s+=`<circle cx="860" cy="1380" r="${300*Math.max(.2,kl)}" fill="#FFC56B" opacity="${0.35*Math.max(.2,kl)}" filter="url(#glowf)"/>`;
  s+=g(tr(860,1400,1),`<rect x="-46" y="-80" width="92" height="80" rx="20" fill="#FFE2A8" stroke="${OL}" stroke-width="6"/><rect x="-30" y="0" width="60" height="22" rx="8" fill="#B5A08A" stroke="${OL}" stroke-width="4"/>`);
  if(kl>0) s+=g(tr(860,1200,kl),check(0.65))+g(tr(860,1080,kl,-2),label('redup, dekat lantai',{size:42,bg:'#3BB273'}));
  // desk lamp to face crossed
  const kx=popS(t,51.34,.45);
  s+=g(tr(1280,1180,1),`<rect x="-80" y="0" width="160" height="26" rx="10" fill="#555" stroke="${OL}" stroke-width="4"/><path d="M0,0L-40,-160L60,-230" stroke="#555" stroke-width="14" fill="none" stroke-linecap="round"/><path d="M40,-270L130,-200L60,-170Z" fill="#E8505B" stroke="${OL}" stroke-width="5" stroke-linejoin="round"/>`+(kx>0?`<g opacity="${.6*kx}">${rays(90,-200,4,300,12,.6,-70)}</g>`:''));
  if(kx>0) s+=g(tr(1290,1000,1.0*kx,6),xmark(.8))+g(tr(1290,850,kx,3),label('menyorot wajah',{size:42,bg:'#E5383B'}));
  return s;},
 cam:t=>isV?camV(t,47.4,52.9,[1060,1150,1.0],[1080,1110,1.05]):camV(t,47.4,52.9,[1000,1100,1.1],[1000,1050,1.0]),
 hud:t=>{const k=popS(t,47.6,.45);if(k<=0)return '';return g(tr(W/2,isV?420:110,k,-3),label('BUTUH LAMPU? PILIH INI',{size:isV?60:54,bg:'#5B6C8F'}));}
});

// 10 CTA 52.9 - end
S.push({t0:52.9,t1:58.5,
 world:t=>{const sl=eout((t-52.9)/.5);
  let s=`<rect width="1920" height="1920" fill="#222"/>`;
  s+=`<path d="M0,0L${fmt(lerp(-200,1040,sl))},0L${fmt(lerp(-400,880,sl))},1920L0,1920Z" fill="#1B2347"/><path d="M1920,0L${fmt(lerp(2120,1040,sl))},0L${fmt(lerp(2320,880,sl))},1920L1920,1920Z" fill="#F2B84B"/>`;
  const L=isV?720:620,Rr=isV?1200:1320;
  const k1=popS(t,53.3,.5),k2=popS(t,54.6,.5);
  if(k1>0)s+=g(tr(L,980,1.3*k1),`<circle r="110" fill="#F6E7A8"/><circle cx="40" cy="-26" r="100" fill="#1B2347"/>`,'filter="url(#dsh)"');
  if(k2>0)s+=g(tr(Rr,1040,1.3*k2),`<circle cx="0" cy="-90" r="120" fill="#FFF3B0" opacity=".6" filter="url(#glowf)"/><rect x="-60" y="-120" width="120" height="110" rx="30" fill="#FFE2A8" stroke="${OL}" stroke-width="6"/><rect x="-40" y="-10" width="80" height="30" rx="10" fill="#B5A08A" stroke="${OL}" stroke-width="4"/>`,'filter="url(#dsh)"');
  s+=bigText(isV?'TIM GELAP':'TIM TIDUR GELAP',L,700,isV?70:76,{sw:10})+bigText('TIM LAMPU KECIL',Rr,700,isV?60:72,{sw:10});
  const kv=popS(t,54.2,.4);if(kv>0)s+=g(tr(960,900,kv,-6),`<circle r="96" fill="#FFE27A" stroke="${OL}" stroke-width="10"/><text x="0" y="30" text-anchor="middle" font-family="B2" font-weight="800" font-size="90" fill="${OL}">VS</text>`,'filter="url(#dsh)"');
  const yk=eout((t-53.0)/.6);
  s+=yuma({x:960,y:lerp(1900,1480,yk),s:1.0,expr:'happy',aR:-60+Math.sin(t*9)*14,aL:70,blink:blinkAt(t,13)});
  const kc=popS(t,56.66,.45);if(kc>0)s+=g(tr(isV?1130:1290,1240,kc*(isV?.85:1),3),bubble(540,170,'bl')+`<text x="0" y="20" text-anchor="middle" font-family="B2" font-weight="800" font-size="56" fill="${OL}">Cerita di komentar!</text>`,'filter="url(#dsh)"');
  return s;},
 cam:t=>camV(t,52.9,58.5,[960,1000,1.0],[960,980,1.06]),
 hud:t=>''
});
const THUMB={t:4.8,lines:['TIDUR LAMPU','NYALA','TIAP MALAM?']};
