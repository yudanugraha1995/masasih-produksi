// ===== Masa Sih Ingatan Ikan Mas Cuma 3 Detik? =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Para ilmuwan')-0.15, b2=at('Hasilnya')-0.15, b3=at('Ikan mas juga')-0.15, b4=at('Plot')-0.2, b5=at('Jadi kalau')-0.15, b6=at('Kamu tim')-0.15;
const fish=(t,x,y,s)=>g(tr(x+Math.sin(t*1.5)*60,y+Math.sin(t*3)*15,s),goldfish(t,1,{bubble:true}));
sHook({t0:0,t1:bc,key:'3 DETIK?',keyAt:at('tiga'),prop:t=>g('',fishBowl(t,1)+g(tr(Math.sin(t*1.5)*60,0,0.8),goldfish(t,1,{bubble:true}))),ps:1.6,py:1050,bg:'#10223A',glow:'#5DB7EA',particle:(t,i)=>`<circle r="12" fill="none" stroke="#BFE6F7" stroke-width="4"/>`,surpriseAt:at('tiga')});
sCard({t0:bc,t1:b1,lines:['MASA SIH','INGATAN IKAN MAS','CUMA 3 DETIK?'],yukAt:at('Yuk'),hold:t=>g('scale(.3)',goldfish(t,1))});
sFact({t0:b1,t1:b2,bg:'#10223A',glow:'#2E7E8F',
 world:t=>{let s=g(tr(960,1050,1.6),fishBowl(t,1))+fish(t,900,1020,0.9);
  if(t>at('tuas'))s+=popAt(t,at('tuas'),`<rect x="-14" y="-120" width="28" height="140" rx="12" fill="#E5383B" stroke="${OL}" stroke-width="6" transform="rotate(${fmt(12*Math.sin(t*4))})"/><rect x="-60" y="10" width="120" height="40" rx="10" fill="#5B6C8F" stroke="${OL}" stroke-width="6"/>`,V(1200,1280),1050,1);
  if(t>at('makanan',b1))for(let i=0;i<5;i++)s+=popAt(t,at('makanan',b1)+i*0.08,`<circle r="12" fill="#C96A1F"/>`,V(1150,1230)-i*30,800+i*20,1);
  return s;},
 labels:[{at:at('percobaan'),txt:'PERCOBAAN DI LAB',bg:'#5B6C8F',until:at('tuas')},{at:at('tuas'),txt:'DORONG TUAS = DAPAT MAKAN',bg:'#F2A541',size:V(46,50)}],src:'Ilustrasi disederhanakan'});
sFact({t0:b2,t1:b3,bg:'#16343F',glow:'#2E7E8F',
 world:t=>{let s=popAt(t,b2+0.1,calendar(t,1,['S','S','R','K','J','S','M'],t>at('berminggu')?[0,1,2,3,4,5,6]:[0]),960,850,1.3);
  if(t>at('bunyi'))s+=popAt(t,at('bunyi'),`<path d="M-40,-30L0,-30L40,-70L40,70L0,30L-40,30Z" fill="#F4C542" stroke="${OL}" stroke-width="6"/><path d="M70,-40Q100,0 70,40M100,-70Q150,0 100,70" stroke="#fff" stroke-width="8" fill="none" stroke-linecap="round"/>`,V(700,600),1300,1)+fish(t,V(1150,1250),1300,0.8);
  return s;},
 labels:[{at:at('berminggu'),txt:'INGAT BERMINGGU-MINGGU',bg:'#3BB273',size:V(48,52),until:at('berbulan')},{at:at('berbulan'),txt:'BAHKAN BERBULAN-BULAN',bg:'#3BB273',until:at('bunyi')},{at:at('bunyi'),txt:'BUNYI = JAM MAKAN',bg:'#F4C542',fill:OL}],src:'Sumber: studi pelatihan ikan mas (Univ. Plymouth, 2003)'});
sFact({t0:b3,t1:b4,bg:'#3B3A7A',glow:'#6E6CC4',grid:true,
 world:t=>{let s=fish(t,960,900,1.3);
  s+=popAt(t,at('warna'),[0,1,2].map(i=>`<circle cx="${i*110-110}" cy="0" r="44" fill="${['#E8505B','#3BB273','#5DB7EA'][i]}" stroke="${OL}" stroke-width="5"/>`).join(''),V(700,600),1350,1);
  s+=popAt(t,at('bentuk'),`<rect x="-150" y="-40" width="80" height="80" fill="#F4C542" stroke="${OL}" stroke-width="5"/><path d="M0,-45L45,40L-45,40Z" fill="#F2A541" stroke="${OL}" stroke-width="5"/><circle cx="120" r="42" fill="#9C7BE0" stroke="${OL}" stroke-width="5"/>`,960,1350,1);
  s+=popAt(t,at('wajah'),yuma({x:0,y:120,s:0.5,expr:'happy',aL:70,aR:70,blink:false}),V(1250,1320),1300,1);
  return s;},
 labels:[{at:at('warna'),txt:'BEDAKAN WARNA',bg:'#E8505B',until:at('bentuk')},{at:at('bentuk'),txt:'BEDAKAN BENTUK',bg:'#F2A541',until:at('wajah')},{at:at('wajah'),txt:'KENAL WAJAH ORANG!',bg:'#9C7BE0'}]});
sPlot({t0:b4,t1:b5,bg:'#10223A',glow:'#5DB7EA',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';let s=bigNum(t,p0,'3 DETIK','kata mitos',960,800,{size:150})+xAt(t,at('jauh'),960,760,1.4);
  if(t>at('berbulan',b4))s+=popAt(t,at('berbulan',b4),label('BERBULAN-BULAN!',{size:64,bg:'#3BB273'}),960,1200,1);return s;},
 labels:[{at:at('jauh'),txt:'JAUH LEBIH PANJANG',bg:'#3BB273'}]});
sCheck({t0:b5,t1:b6,title:'Pelihara ikan mas:',items:[['Makan di jam sama',at('jam yang')],['Jangan kebanyakan',at('terlalu')],['Rajin ganti air',at('ganti')]],hold:t=>g('scale(.3)',goldfish(t,1)),label:'JADI GINI'});
sCTA({t0:b6,t1:E,ln:'TIM PELIHARA IKAN',ls:'TIM IKAN',rn:'TIM PELIHARA KUCING',rs:'TIM KUCING',lp:t=>goldfish(t,0.8,{bubble:true}),rp:t=>catFace(0.9),aAt:at('ikan',b6),bAt:at('kucing'),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#2C8FC4',rc:'#F2A541'});
}
const THUMB={t:2.0,lines:['MASA SIH','INGATAN IKAN MAS','CUMA 3 DETIK?']};
