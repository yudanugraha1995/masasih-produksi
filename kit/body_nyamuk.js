// ===== Masa Sih Nyamuk Suka Darah Manis? =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Nyamuk betina')-0.15, b2=at('Penelitian')-0.15, b3=at('Ada juga')-0.15, b4=at('Plot')-0.2, b5=at('Biar aman')-0.15, b6=at('Kamu tim')-0.15;
sHook({t0:0,t1:bc,key:'DARAH MANIS?',keyAt:at('manis'),keySize:90,prop:t=>mosquito(t,1,{evil:true}),ps:1.8,py:1000,bg:'#2A1F2B',glow:'#E5383B',particle:(t,i)=>`<circle r="7" fill="#E5383B"/>`,surpriseAt:at('ngincer'),
 extra:t=>popAt(t,at('manis'),bloodDrop(0.9),V(1200,1350),1250,1)});
sCard({t0:bc,t1:b1,lines:['MASA SIH','NYAMUK SUKA','DARAH MANIS?'],yukAt:at('Yuk'),hold:t=>g('scale(.3)',mosquito(t,1))});
const tC=at('karbon'),tB=at('bau kulit'),tH=at('hangat');
sFact({t0:b1,t1:b2,bg:'#16343F',glow:'#2E7E8F',
 world:t=>{let s=g(tr(V(760,640),1100,1.1),sweatFace(t,1));
  const fx=V(1250,1450)-clamp((t-b1)/(b2-b1))*V(250,450);s+=g(tr(fx,800+Math.sin(t*3)*40,0.9),mosquito(t,1));
  if(t>tC)s+=popAt(t,tC,co2Cloud(t,0.9),V(960,900),720,1);
  if(t>tB)s+=popAt(t,tB,label('BAU KULIT',{size:46,bg:'#8A5A3B'}),V(760,640),880,1,-3);
  if(t>tH)s+=popAt(t,tH,thermo(t,0.6,0.7),V(1300,1450),1350,1);return s;},
 labels:[{at:b1+0.1,txt:'NYAMUK PAKAI SENSOR',bg:'#5B6C8F',until:tC},{at:tC,txt:'1. CO₂ DARI NAPAS',bg:'#2C8FC4',until:tB},{at:tB,txt:'2. BAU KULIT',bg:'#8A5A3B',until:tH},{at:tH,txt:'3. HANGAT BADAN',bg:'#E5383B'}],src:'Ilustrasi disederhanakan'});
const t100=at('seratus');
sFact({t0:b2,t1:b3,bg:'#3B3A7A',glow:'#6E6CC4',grid:true,
 world:t=>{let s='';if(t<t100)s+=g(tr(960,1050,1.1),sweatFace(t,1))+popAt(t,at('asam'),label('ASAM KARBOKSILAT',{size:44,bg:'#F2A541',fill:OL}),960,V(1330,1300),1);
  else{s+=bigNum(t,t100,'100x','lebih menarik buat nyamuk',960,V(800,760),{size:180});for(let i=0;i<6;i++)s+=g(tr(V(620,500)+i*V(85,180),V(1180,1150)+Math.sin(t*3+i)*25,0.4),mosquito(t+i,1));}
  if(t>at('nggak berubah'))s+=popAt(t,at('nggak berubah'),label('BERTAHUN-TAHUN SAMA',{size:44,bg:'#5B6C8F'}),960,V(1010,980),1);return s;},
 labels:[{at:at('Penelitian'),txt:'JURNAL CELL, 2022',bg:'#5B6C8F'}],src:'Sumber: De Obaldia dkk., Cell (2022)'});
sFact({t0:b3,t1:b4,bg:'#2A1F2B',glow:'#8E3B4F',
 world:t=>{let s='';['A','B','O','AB'].forEach((x,i)=>{s+=popAt(t,b3+0.2+i*0.15,bloodDrop(0.7,x),V(600,560)+i*V(240,270),1100,1);});
  if(t>at('golongan'))s+=g(tr(V(600,560)+2*V(240,270),880+Math.sin(t*4)*20,0.6),mosquito(t,1));
  if(t>at('diperdebatkan'))s+=popAt(t,at('diperdebatkan'),`<text text-anchor="middle" font-family="Inter" font-weight="800" font-size="170" fill="#F2A541">?</text>`,V(1300,1500),780,1);return s;},
 labels:[{at:b3+0.1,txt:'PENELITIAN DI JEPANG',bg:'#5B6C8F',until:at('golongan')},{at:at('golongan'),txt:'GOLONGAN DARAH O?',bg:'#E5383B',until:at('diperdebatkan')},{at:at('diperdebatkan'),txt:'MASIH DIPERDEBATKAN',bg:'#F2A541',fill:OL}],src:'Sumber: Shirai dkk., J Med Entomol (2004)'});
const tKr=at('keringetan'),tBj=at('baju gelap');
sPlot({t0:b4,t1:b5,bg:'#14301F',glow:'#3BB273',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';let s='';
  if(t<at('Abis'))s+=popAt(t,p0,bloodDrop(1),V(700,600),1050,1)+xAt(t,at('bukan',b4),V(700,600),1050,1.1)+popAt(t,at('bau kulitmu'),sweatFace(t,0.8),V(1250,1320),1050,1);
  else{s+=popAt(t,at('Abis'),sweatFace(t,0.8),V(700,560),1050,1)+(t>tBj?popAt(t,tBj,shirt(0.9),V(1250,1350),1100,1):'');for(let i=0;i<3;i++)s+=g(tr(V(700,560)+Math.cos(t*2+i*2)*220,950+Math.sin(t*2+i*2)*140,0.35),mosquito(t+i,1));}
  return s;},
 labels:[{at:at('bukan',b4),txt:'BUKAN DARAH MANIS',bg:'#E5383B',until:at('bau kulitmu')},{at:at('bau kulitmu'),txt:'TAPI BAU KULITMU!',bg:'#3BB273',until:at('Abis')},{at:at('Abis'),txt:'KERINGAT + BAJU GELAP',bg:'#F2A541',fill:OL}]});
sCheck({t0:b5,t1:b6,title:'Biar aman:',items:[['Losion anti nyamuk',at('losion')],['Baju terang',at('terang')],['Buang genangan air',at('genangan')]],hold:t=>g('scale(.3)',lotion(1)),label:'JADI GINI'});
sCTA({t0:b6,t1:E,ln:'TIM SANTAPAN',ls:'SANTAPAN',rn:'TIM KEBAL',rs:'KEBAL',lp:t=>mosquito(t,0.6,{evil:true}),rp:t=>shield(0.5),aAt:at('santapan'),bAt:at('kebal'),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#E5383B',rc:'#3BB273'});
}
const THUMB={t:2.0,lines:['MASA SIH','NYAMUK SUKA','DARAH MANIS?']};
