// ===== Masa Sih Micin Bikin Bodoh? =====
{const E=DUR+0.2;
const m1=at('jangan')-0.1, bc=at('Masa sih')-0.1, b1=at('Micin itu')-0.15, b2=at('Badan')-0.15, b3=at('Terus')-0.15, b4=at('Tapi tetap')-0.15, b5=at('Plot')-0.25, b6=at('Jadi micin')-0.15, b7=at('Kamu tim')-0.15;
sHook({t0:0,t1:m1,key:'MICIN?',keyAt:0.5,prop:t=>sachet(1),ps:2.4,bg:'#3A1E1E',glow:'#E8505B',particle:(t,i)=>`<rect x="-14" y="-14" width="28" height="28" rx="6" fill="#fff" opacity=".9" transform="rotate(${i*20})"/>`});
sMyth({t0:m1,t1:bc,bubbleAt:at('nanti'),bubble:'Nanti <tspan fill="#E5383B">BEGO!</tspan>',bw:520,label:'GENERASI MICIN?',labelAt:at('Generasi'),worryAt:at('bego'),holdR:t=>g('scale(.3)',sachet(1))});
sCard({t0:bc,t1:b1,lines:['MASA SIH','MICIN BIKIN','BODOH?'],yukAt:at('Yuk'),hold:t=>g('scale(.3)',sachet(1))});
// MSG = glutamat alami
const tT=at('tomat'),tK=at('keju'),tJ=at('jamur'),tB=at('Tubuh');
sFact({t0:b1,t1:b2,bg:'#16343F',glow:'#2E7E8F',
 world:t=>{let s='';const mv=ss((t-tT+0.3)/0.6);
  s+=popAt(t,b1+0.1,sachet(1),960,lerp(980,760,mv),lerp(1.5,0.9,mv));
  s+=popAt(t,tT,tomato(1),V(660,560),1150,1.2)+popAt(t,tK,cheese(1),960,1180,1.2)+popAt(t,tJ,mushroom(1),V(1260,1360),1150,1.2);
  if(t>tB){s+=`<rect width="1920" height="1920" fill="#0B1E26" opacity="${fmt(.6*ss((t-tB)/.4))}"/>`+yuma({x:960,y:1450,s:1.2*popS(t,tB,.5),expr:'happy',aL:60,aR:-40,blink:blinkAt(t,3)});
   for(let i=0;i<6;i++){const a=t*1.2+i*1.05;s+=g(tr(960+Math.cos(a)*260,1000+Math.sin(a)*120,0.6*popS(t,tB+0.3+i*0.08,.4)),molecule(1,'#F4C542'));}}
  return s;},
 labels:[{at:at('MSG'),txt:'MSG = monosodium glutamat',bg:'#F4C542',fill:OL,size:V(52,50),until:tT},{at:tT,txt:'GLUTAMAT ALAMI',bg:'#3BB273',until:tB},{at:tB+0.3,txt:'tubuh bikin sendiri',bg:'#5B6C8F',size:V(56,50)}],
 c0:[960,960,1.12],c1:[960,980,1.0]});
// FDA aman + uji buta
const tP=at('Penelitian'),tKo=at('konsisten');
sFact({t0:b2,t1:b3,bg:'#1C2F45',glow:'#5DB7EA',
 world:t=>{let s='';
  if(t<tP){s+=popAt(t,b2+0.15,shield(1),960,980,2.2);}
  else{const xs=[V(720,640),V(1200,1280)];for(let i=0;i<2;i++){s+=popAt(t,tP+i*0.2,`<rect x="-150" y="-60" width="300" height="160" rx="20" fill="#fff" stroke="${OL}" stroke-width="6"/><path d="M-170,-60Q0,-200 170,-60Z" fill="#9AA9B8" stroke="${OL}" stroke-width="6"/><text x="0" y="70" text-anchor="middle" font-family="B2" font-weight="800" font-size="90" fill="${OL}">?</text>`,xs[i],1040,1.3);}
   s+=yuma({x:960,y:1600,s:1.0,expr:t<tKo?'think':'happy',aL:70,aR:70,blink:blinkAt(t,5)});}
  return s;},
 labels:[{at:at('FDA'),txt:'FDA',bg:'#2C8FC4',until:tP},{at:at('aman'),txt:'UMUMNYA AMAN',bg:'#3BB273',y:V(540,220),until:tP},{at:tP+0.2,txt:'UJI BUTA',bg:'#5B6C8F',until:tKo},{at:tKo,txt:'gejala tidak konsisten',bg:'#3BB273',size:V(56,50)}],
 src:'Sumber: FDA (GRAS); Geha dkk., J Nutr (2000)',srcAt:b2+0.3,c0:[960,980,1.0],c1:[960,960,1.1]});
// diagram: usus & sawar otak
const tO=at('otak dijaga'),tBl=at('Belum');
sFact({t0:b3,t1:b4,bg:'#3B3A7A',glow:'#6E6CC4',grid:true,
 world:t=>{let s='';
  s+=`<path d="M760,520C760,380 900,330 990,360C1090,390 1120,480 1100,560L1080,640Q1070,700 1020,700L1000,700L1000,780Q1180,800 1240,900L1300,1500L640,1500L700,900Q740,810 880,780L880,700Q780,680 760,520Z" fill="#6E6CC4" stroke="#fff" stroke-width="6" opacity=".9"/>`;
  s+=g(tr(940,520,0.62),brain(t,1,'happy'));
  s+=`<path d="M820,1180C820,1100 1100,1100 1100,1180C1100,1260 840,1240 860,1320C880,1400 1080,1380 1080,1320" stroke="#F3A6B5" stroke-width="54" fill="none" stroke-linecap="round"/>`;
  for(let i=0;i<8;i++){const p=((t-b3)*0.5+i/8)%1;const y=lerp(820,1250,p);s+=`<circle cx="${fmt(960+Math.sin(p*9+i)*60)}" cy="${fmt(y)}" r="16" fill="#F4C542" stroke="${OL}" stroke-width="3" opacity="${fmt(1-ss((p-0.8)/0.2))}"/>`;}
  const ks=popS(t,tO,.45);if(ks>0)s+=g(tr(940,520,1.05*ks),`<path d="M-200,40A200,200 0 0 1 200,40" stroke="#5DB7EA" stroke-width="22" fill="none" stroke-linecap="round" opacity=".9"/>`);
  if(t>tO+0.3)s+=g(tr(1200,690,0.6),xmark(1),`opacity="${fmt(ss((t-tO-0.3)/.3))}"`);
  return s;},
 labels:[{at:at('usus'),txt:'dipakai di USUS',bg:'#E8505B',until:tO},{at:tO,txt:'SAWAR DARAH OTAK',bg:'#2C8FC4',until:tBl},{at:tBl,txt:'BELUM ADA BUKTI',bg:'#3BB273'}],
 src:'Ilustrasi disederhanakan',srcAt:b3+0.2,c0:[960,880,1.15],c1:[960,960,1.0]});
// natrium sepertiga garam
const tS=at('sepertiga'),tSe=at('sensitif');
sFact({t0:b4,t1:b5,bg:'#2A1F2B',glow:'#8E3B4F',
 world:t=>{let s='';const xs=[V(720,660),V(1200,1260)];const base=1100;
  s+=popAt(t,b4+0.2,saltShaker(1),xs[0],base+150,0.5)+popAt(t,b4+0.4,sachet(1),xs[1],base+110,0.45);
  const gh=clamp((t-tS+0.4)/0.8);const v=[39,12],c=['#E5383B','#F4C542'];
  for(let i=0;i<2;i++){const h=v[i]*V(13,11)*eout(gh);if(gh>0){s+=`<rect x="${xs[i]-90}" y="${fmt(base-h)}" width="180" height="${fmt(h)}" rx="14" fill="${c[i]}" stroke="${OL}" stroke-width="6"/>`+bigText(v[i]+' g',xs[i],fmt(base-h-30),64,{font:'Inter',sw:10,op:fadeIn(t,tS,.3)});}}
  if(t>tSe)s+=popAt(t,tSe,`<path d="M0,-220L210,150Q220,170 196,170L-196,170Q-220,170 -210,150Z" fill="#F4C542" stroke="${OL}" stroke-width="12" stroke-linejoin="round"/><rect x="-18" y="-110" width="36" height="160" rx="18" fill="${OL}"/><circle cx="0" cy="105" r="22" fill="${OL}"/>`,960,700,0.55);
  return s;},
 labels:[{at:at('natrium'),txt:'NATRIUM per 100 g',bg:'#5B6C8F',until:tSe},{at:tSe,txt:'ADA YANG SENSITIF',bg:'#E5383B'}],
 src:'Sumber: Harvard Health; USDA',srcAt:at('natrium')});
// plot twist
const tJa=at('jajanan'),tBu=at('bukan micinnya');
sPlot({t0:b5,t1:b6,
 world:t=>{let s='';const p0=b5+1.6;if(t<p0)return s;
  if(t<tJa){s+=popAt(t,p0,sachet(1),V(760,700),1100,1.0)+popAt(t,p0+0.2,saltShaker(1),V(1180,1240),1180,0.8);s+=popAt(t,at('gurih'),label('GURIH, natrium lebih sedikit',{size:44,bg:'#3BB273'}),960,700,1);}
  else{s+=popAt(t,tJa,chipsBag(1,'ASIN!'),V(720,640),1080,1.1)+popAt(t,at('gorengan'),gorengan(1),V(1200,1280),1120,1.3);s+=xAt(t,tJa+0.5,V(720,640),1080,1.0)+xAt(t,at('gorengan')+0.4,V(1200,1280),1120,1.0);
   if(t>tBu)s+=popAt(t,tBu,sachet(1),960,780,0.6)+checkAt(t,tBu+0.3,1060,700,0.6);}
  return s;},
 labels:[{at:b5+1.7,txt:'MICIN BANTU KURANGI GARAM',bg:'#3BB273',size:V(50,50),until:tJa},{at:tJa,txt:'JAJANAN SUPER ASIN',bg:'#E5383B',until:tBu},{at:tBu,txt:'bukan micinnya',bg:'#5B6C8F'}]});
sCheck({t0:b6,t1:b7,title:'Micin boleh:',items:[['Secukupnya',at('secukupnya')],['+ sayur',at('sayur')],['+ buah',at('buah')]],hold:t=>g('scale(.3)',sachet(1)),label:'JADI GINI'});
sCTA({t0:b7,t1:E,ln:'TIM PAKAI MICIN',ls:'TIM MICIN',rn:'TIM TANPA MICIN',rs:'TIM TANPA',lp:t=>sachet(1),rp:t=>g('translate(0 20)',tomato(1.1))+g('translate(-90 110) scale(.7)',mushroom(1)),aAt:at('pakai',b7),bAt:at('tanpa',b7),vsAt:at('atau',b7),commentAt:at('Tulis'),lc:'#E8505B',rc:'#3BB273'});
}
const THUMB={t:1.4,lines:['MASA SIH','MICIN BIKIN','BODOH?']};
