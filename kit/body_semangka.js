// ===== Masa Sih Telan Biji Semangka Bisa Tumbuh di Perut? =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Biji butuh')-0.15, b2=at('Jadi biji')-0.15, b4=at('Plot')-0.2, b5=at('Tapi tetap')-0.15, b6=at('Kamu tim')-0.15;
sHook({t0:0,t1:bc,key:'TUMBUH POHON?',keyAt:at('pohon'),keySize:84,prop:t=>melonSlice(1),ps:1.7,py:1050,bg:'#14301F',glow:'#F0506E',particle:(t,i)=>seedBlack(1,i*40),surpriseAt:at('pohon'),
 extra:t=>popAt(t,at('pohon'),sprout(t,1),V(1150,1300),800,1.2)});
sCard({t0:bc,t1:b1,lines:['MASA SIH','BIJI SEMANGKA','TUMBUH DI PERUT?'],yukAt:at('Yuk'),hold:t=>g('scale(.3)',melonSlice(1,false))});
const need=[['TANAH',at('tanah'),'#8A5A3B'],['AIR',at('air'),'#2C8FC4'],['CAHAYA',at('cahaya'),'#F2A541'],['OKSIGEN',at('oksigen'),'#3BB273']];
sFact({t0:b1,t1:b2,bg:'#16343F',glow:'#2E7E8F',
 world:t=>{let s=popAt(t,b1+0.1,g('',seedBlack(3)+g('translate(0,-30)',sprout(t,0.8))),960,760,1.2);
  need.forEach(([x,tt,c],i)=>{s+=popAt(t,tt,label(x,{size:48,bg:c}),V(720,640)+(i%2)*V(480,640),V(1050,1000)+Math.floor(i/2)*130,1,i%2?3:-3);});
  if(t>at('perut',b1)){s+=`<rect width="1920" height="1920" fill="#2A1F2B" opacity="${fmt(0.85*fadeIn(t,at('perut',b1)))}"/>`+g(tr(960,1000,1.8),stomach(t,1,ss((t-at('asam'))/0.6)))+g(tr(960,980,1),seedBlack(1.4))+xAt(t,at('satu pun'),V(1250,1350),700,1.0);}
  return s;},
 labels:[{at:b1+0.1,txt:'BIJI BUTUH 4 HAL',bg:'#5B6C8F',until:at('perut',b1)},{at:at('perut',b1),txt:'DI PERUT: NGGAK ADA',bg:'#E5383B',until:at('asam')},{at:at('asam'),txt:'MALAH ADA ASAM LAMBUNG',bg:'#E5383B',size:V(48,52)}],src:'Ilustrasi disederhanakan'});
sFact({t0:b2,t1:b4,bg:'#3B3A7A',glow:'#6E6CC4',grid:true,
 world:t=>g(tr(960,1000,V(1.1,1.5)),gut(t,1,{ballSvg:seedBlack(1.4),ball:clamp((t-at('lewat'))/((at('hari')+0.5)-at('lewat')))}))+(t>at('hari')?checkAt(t,at('hari'),V(1280,1400),640,1.1):''),
 labels:[{at:at('lewat'),txt:'CUMA LEWAT SALURAN CERNA',bg:'#5B6C8F',size:V(46,50),until:at('satu sampai')},{at:at('satu sampai'),txt:'KELUAR DALAM 1-3 HARI',bg:'#3BB273'}],src:'Ilustrasi disederhanakan',c0:[960,1050,1.05],c1:[960,1000,1.0]});
sPlot({t0:b4,t1:b5,bg:'#14301F',glow:'#3BB273',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';let s='';for(let i=0;i<9;i++)s+=popAt(t,p0+i*0.06,seedBlack(1.3,i*30),V(760,700)+(i%3)*V(120,140),900+Math.floor(i/3)*110,1);
  [['PROTEIN',at('protein'),'#E8505B'],['MAGNESIUM',at('magnesium'),'#5B6C8F'],['LEMAK SEHAT',at('lemak'),'#F2A541']].forEach(([x,tt,c],i)=>{s+=popAt(t,tt,label(x,{size:44,bg:c}),V(1220,1350),V(820,800)+i*120,1,i%2?3:-3);});
  return s;},
 labels:[{at:at('dimakan'),txt:'BIJINYA BISA DIMAKAN!',bg:'#3BB273',until:at('disangrai')},{at:at('disangrai'),txt:'DISANGRAI JADI CAMILAN',bg:'#F2A541',fill:OL,size:V(48,52)}]});
sCheck({t0:b5,t1:b6,title:'Tetap hati-hati:',items:[['Anak bisa tersedak',at('tersedak')],['Kunyah pelan',at('Kunyah')],['Jangan sambil lari',at('lari')]],hold:t=>g('scale(.3)',melonSlice(1,false)),label:'JADI GINI'});
sCTA({t0:b6,t1:E,ln:'TIM SAMA BIJINYA',ls:'TIM BIJI',rn:'TIM BUANG BIJI',rs:'TIM BUANG',lp:t=>melonSlice(0.7),rp:t=>seedBlack(3),aAt:at('makan',b6),bAt:at('buang'),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#F0506E',rc:'#3BB273'});
}
const THUMB={t:2.0,lines:['MASA SIH','BIJI SEMANGKA','TUMBUH DI PERUT?']};
