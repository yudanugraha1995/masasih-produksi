// ===== Masa Sih Makan Telur Bikin Bisulan? =====
{const E=DUR+0.2;
const m1=at('langsung')-0.1, bc=at('Masa sih')-0.1, b1=at('Bisul itu')-0.15, b2=at('Telur nggak')-0.15, b3=at('Terus kenapa')-0.15, b4=at('Plot')-0.2, b5=at('Yang perlu')-0.15, b6=at('Kamu tim')-0.15;
const staph=(t,s=1)=>{let c='';for(let i=0;i<7;i++){const a=i*0.9;c+=`<circle cx="${fmt(Math.cos(a)*40*(i?1:0))}" cy="${fmt(Math.sin(a)*40*(i?1:0))}" r="30" fill="#F4C542" stroke="${OL}" stroke-width="4"/>`;}return g(`scale(${s}) rotate(${fmt(t*20)})`,c+`<path d="M-16,-6L-4,0M16,-6L4,0" stroke="#2E2430" stroke-width="5" stroke-linecap="round"/><path d="M-10,18Q0,10 10,18" stroke="#2E2430" stroke-width="4" fill="none"/>`);};
sHook({t0:0,t1:m1,key:'TELUR?',keyAt:at('telur'),prop:t=>egg(1),ps:2.6,bg:'#3A2A16',glow:'#F4C542',particle:(t,i)=>g('scale(.25)',egg(1,false))});
sMyth({t0:m1,t1:bc,bubbleAt:at('awas'),bubble:'Awas <tspan fill="#E5383B">BISULAN!</tspan>',bw:600,worryAt:at('bisulan'),holdR:t=>g('scale(.3)',egg(1,false))});
sCard({t0:bc,t1:b1,lines:['MASA SIH','TELUR BIKIN','BISULAN?'],yukAt:at('Yuk'),hold:t=>g('scale(.3)',egg(1,false))});
const tSt=at('Staphylococcus'),tL=at('luka'),tG=at('garukan');
sFact({t0:b1,t1:b2,bg:'#2A1F2B',glow:'#8E3B4F',
 world:t=>{let s=g(tr(960,1180,1.25),skinBump(t,1,ss((t-b1)/1.2)));
  if(t>tSt){for(let i=0;i<4;i++){const a=t*0.8+i*1.6;s+=g(tr(960+Math.cos(a)*280,820+Math.sin(a)*90,0.9*popS(t,tSt+i*0.12,.4)),staph(t+i,1));}}
  if(t>tL)s+=`<path d="M720,1060L770,1040L820,1066" stroke="#C0392B" stroke-width="8" fill="none" opacity="${fmt(fadeIn(t,tL))}"/>`;
  if(t>tG)for(let i=0;i<3;i++)s+=`<path d="M${1120+i*26},1000L${1160+i*26},1080" stroke="#E5383B" stroke-width="7" stroke-linecap="round" opacity="${fmt(fadeIn(t,tG+i*0.1))}"/>`;
  return s;},
 labels:[{at:at('infeksi'),txt:'BISUL = INFEKSI',bg:'#E5383B',until:tSt},{at:tSt,txt:'Staphylococcus aureus',bg:'#F4C542',fill:OL,size:V(56,52),until:tL},{at:tL,txt:'masuk lewat luka',bg:'#5B6C8F'}],
 src:'Ilustrasi disederhanakan',c0:[960,1050,1.1],c1:[960,980,1.0]});
const tD=at('Dokter');
sFact({t0:b2,t1:b3,bg:'#16343F',glow:'#2E7E8F',
 world:t=>{let s=popAt(t,b2+0.1,egg(1),960,1050,2.0);
  s+=g(tr(V(1260,1340),760+20*Math.sin(t*3),0.9),staph(t,1))+xAt(t,at('bakteri',b2)+0.2,V(1260,1340),760,0.8);
  if(t>tD)s+=checkAt(t,tD+0.3,V(700,600),780,1.1);
  return s;},
 labels:[{at:at('membawa'),txt:'TELUR TIDAK BAWA BAKTERI',bg:'#3BB273',size:V(52,52),until:tD},{at:tD,txt:'BELUM ADA BUKTI ILMIAH',bg:'#3BB273',size:V(54,52)}],
 src:'Sumber: penjelasan dokter (detikHealth, Antara)'});
const tA=at('alergi'),tDg=at('digaruk');
sFact({t0:b3,t1:b4,bg:'#2A1F2B',glow:'#8E3B4F',
 world:t=>{let s=g(tr(960,1180,1.25),`<rect x="-360" y="-60" width="720" height="320" rx="60" fill="#F3C9A8" stroke="${OL}" stroke-width="6"/>`);
  for(let i=0;i<7;i++){const k=popS(t,tA+0.6+i*0.1,.35);if(k>0)s+=`<circle cx="${fmt(700+rnd(i)*520)}" cy="${fmt(1150+rnd(i+9)*160)}" r="${fmt(26*k)}" fill="#F08B84" stroke="#C0392B" stroke-width="3"/>`;}
  s+=popAt(t,tA,egg(1),V(760,560),760,0.8);
  if(t>tDg){const x=900+80*Math.sin(t*14);s+=`<path d="M${fmt(x)},1080l40,120M${fmt(x+40)},1070l40,120" stroke="#E5383B" stroke-width="9" stroke-linecap="round"/>`;}
  if(t>at('bakteri',b3))s+=g(tr(V(1240,1340),820,0.8*popS(t,at('bakteri',b3),.4)),staph(t,1));
  return s;},
 labels:[{at:at('mitos'),txt:'KENAPA AWET?',bg:'#5B6C8F',until:tA},{at:tA,txt:'ALERGI TELUR',bg:'#E5383B',until:tDg},{at:tDg,txt:'digaruk = luka',bg:'#E5383B'}]});
sPlot({t0:b4,t1:b5,bg:'#14301F',glow:'#3BB273',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';return popAt(t,p0,egg(1),V(800,760),1080,1.6)+popAt(t,at('enam'),proteinBadge(1,'6 g'),V(1220,1260),900,1.2)+popAt(t,at('sembuh'),`<rect x="-120" y="-40" width="240" height="80" rx="40" fill="#F4E1C1" stroke="${OL}" stroke-width="5"/><rect x="-40" y="-40" width="80" height="80" fill="#EBCB9B"/>`,V(800,760),760,0.9);},
 labels:[{at:b4+1.7,txt:'TELUR = PROTEIN',bg:'#3BB273'}],src:'Sumber: USDA FoodData Central (1 butir besar)'});
sCheck({t0:b5,t1:b6,title:'Cegah bisul:',items:[['Kulit bersih',at('kebersihan')],['Ganti baju basah',at('Ganti')],['Jangan pencet',at('pencet')],['Cek gula darah',at('cek gula')]],hold:t=>g('scale(.3)',egg(1,false)),label:'YANG PERLU DIJAGA'});
sCTA({t0:b6,t1:E,ln:'TIM TELUR TIAP HARI',ls:'TIM TELUR',rn:'TIM TAKUT BISULAN',rs:'TIM TAKUT',lp:t=>egg(1),rp:t=>g('scale(.5)',skinBump(t,1,1)),aAt:at('telur',b6),bAt:at('takut',b6),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#F2A541',rc:'#8E3B4F'});
}
const THUMB={t:1.3,lines:['MASA SIH','TELUR BIKIN','BISULAN?']};
