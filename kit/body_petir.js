// ===== Masa Sih Petir Nggak Pernah Nyambar Tempat yang Sama Dua Kali? =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Faktanya')-0.15, b4=at('Plot')-0.2, b6=at('Kamu tim')-0.15;
sHook({t0:0,t1:bc,key:'DUA KALI?',keyAt:at('dua'),keySize:96,prop:t=>rainCloud(t,1),ps:1.4,py:950,bg:'#1B1F3A',glow:'#6E6CC4',particle:(t,i)=>bolt(t,0.15),surpriseAt:at('sama'),
 extra:t=>popAt(t,at('nyambar'),bolt(t,1),V(1000,1050),1250,1.1)});
sCard({t0:bc,t1:b1,lines:['MASA SIH','PETIR NYAMBAR','CUMA SEKALI?'],yukAt:bc+0.6,hold:t=>g('scale(.35)',bolt(t,1))});
const tE=at('Empire'),tN=at('dua puluh');
sFact({t0:b1,t1:b4,bg:'#16213F',glow:'#2E5E8F',
 world:t=>{let s=popAt(t,b1+0.1,tower(1.2),V(700,760),1150,1);
  const k=Math.floor((t-tE)*2.2);if(t>tE&&(t*3%1)<0.35)s+=g(tr(V(700,760),450,1.0),bolt(t,1));
  if(t>tN)s+=bigNum(t,tN,'±20x','disambar per tahun',V(1170,1350),V(950,900),{size:120});
  return s;},
 labels:[{at:tE,txt:'EMPIRE STATE, NEW YORK',bg:'#5B6C8F',until:tN},{at:tN,txt:'±20 KALI SETAHUN!',bg:'#F2A541',fill:OL}],src:'Sumber: NOAA / National Weather Service'});
sPlot({t0:b4,t1:b6,bg:'#14301F',glow:'#3BB273',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';const A=V(680,620),B=V(1240,1300);let s=popAt(t,p0,tower(0.8),A,1250,1)+popAt(t,p0+0.2,tower(0.8),B,1250,1);
  if(t>at('tinggi',b4)&&(t*2.5%1)<0.4)s+=g(tr(A,725,0.9),bolt(t,1));
  if(t>at('berulang'))s+=g(tr(B,725,0.9),bolt(t,1,(t*3%1)<0.4?1:0));return s;},
 labels:[{at:at('tinggi',b4),txt:'SUKA YANG TINGGI & RUNCING',bg:'#3BB273',size:V(46,52),until:at('berulang')},{at:at('berulang'),txt:'BISA BERULANG KALI!',bg:'#E5383B'}]});
sCTA({t0:b6,t1:E,ln:'TIM TAKUT PETIR',ls:'TIM TAKUT',rn:'TIM SUKA KILAT',rs:'TIM KILAT',lp:t=>rainCloud(t,0.7),rp:t=>bolt(t,0.7),aAt:at('takut'),bAt:at('suka'),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#5B6C8F',rc:'#F2A541'});
}
const THUMB={t:2.0,lines:['MASA SIH','PETIR NYAMBAR','CUMA SEKALI?']};
