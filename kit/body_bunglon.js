// ===== Masa Sih Bunglon Ganti Warna Buat Nyamar? =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Faktanya')-0.15, b4=at('Plot')-0.2, b6=at('Kalau kamu')-0.15;
const cyc=t=>['#7BC96F','#F2A541','#2C8FC4','#E8505B'][Math.floor(t*1.2)%4];
sHook({t0:0,t1:bc,key:'BUAT NYAMAR?',keyAt:at('nyamar'),keySize:92,prop:t=>chameleon(t,1,cyc(t)),ps:1.3,py:1050,bg:'#14301F',glow:'#3BB273',particle:(t,i)=>`<circle r="10" fill="#7BC96F"/>`,surpriseAt:at('nyamar')});
sCard({t0:bc,t1:b1,lines:['BUNGLON','GANTI WARNA','BUAT NYAMAR?'],yukAt:bc+0.6,hold:t=>g('scale(.3)',chameleon(t,1))});
const tS=at('suhu'),tK=at('kode'),tm=at('marah'),tp=at('pedekate');
sFact({t0:b1,t1:b4,bg:'#3B3A7A',glow:'#6E6CC4',grid:true,
 world:t=>{let s=g(tr(960,1150,1.3),chameleon(t,1,t>tS?(t<tK?'#4E7A3E':'#7BC96F'):'#7BC96F'));
  if(t>tS)s+=popAt(t,tS,thermo(t,1,0.6),V(700,560),720,0.8)+popAt(t,tS,sun(t,0.5),V(1250,1350),700,1);
  if(t>tK)s+=popAt(t,tK,`<g transform="scale(-1,1)">${chameleon(t,0.6,'#F2A541')}</g>`,V(1300,1450),1450,1);return s;},
 labels:[{at:tS,txt:'NGATUR SUHU BADAN',bg:'#F2A541',fill:OL,until:tK},{at:tK,txt:'NGASIH KODE KE TEMAN',bg:'#5B6C8F'}],src:'Ilustrasi disederhanakan'});
sPlot({t0:b4,t1:b6,bg:'#3A1616',glow:'#E5383B',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';
  let s=g(tr(V(760,700),1150,1),chameleon(t,1,t>tm?(t>tp?'#F25FA4':'#E5383B'):'#7BC96F'));
  if(t>tp)s+=popAt(t,tp,heart(0.6,Math.sin(t*8)),V(1250,1300),850,1);return s;},
 labels:[{at:tm,txt:'MARAH = TERANG',bg:'#E5383B',until:tp},{at:tp,txt:'PEDEKATE = TERANG!',bg:'#F25FA4'}]});
sCTA({t0:b6,t1:E,ln:'WARNA HIJAU',ls:'HIJAU',rn:'WARNA PINK',rs:'PINK',lp:t=>chameleon(t,0.4,'#7BC96F'),rp:t=>chameleon(t,0.4,'#F25FA4'),aAt:at('ganti',b6),bAt:at('mau',b6),vsAt:at('warna',b6),commentAt:at('Tulis'),lc:'#3BB273',rc:'#F25FA4'});
}
const THUMB={t:2.0,lines:['BUNGLON','GANTI WARNA','BUAT NYAMAR?']};
