// ===== Nasi Kotak Hajatan Dimakan Besok? Masa Sih Bikin Keracunan? ===== NEWFX B21FX
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1,b1=at('Baru-baru')-0.15,b2=at('Faktanya')-0.15,b3=at('Plot')-0.15,b4=at('Biar aman')-0.15,b6=at('Kamu pernah')-0.15;
sHook({t0:0,t1:bc,key:'BESOK PAGINYA?',keyAt:at('besok'),keySize:92,prop:t=>nasiKotak(1,1),ps:1.4,py:1150,bg:'#3A2A16',glow:'#F2A541',
 particle:(t,i)=>`<circle r="14" fill="#fff" opacity=".7"/>`,surpriseAt:at('besok'),extra:t=>popAt(t,at('besok'),clockFace(t,0.8,6),V(1150,1350),800,1)});
sCard({t0:bc,t1:b1,lines:['NASI KOTAK','BIKIN','KERACUNAN?'],yukAt:at('keracunan'),hold:t=>g('scale(.35)',nasiKotak(1,0))});
sFact({t0:b1,t1:b2,bg:'#2A1F2B',glow:'#8E3B4F',
 world:t=>bigNum(t,at('lebih dari'),'100+','orang keracunan',960,1000,{size:200})+popAt(t,at('hidangan'),nasiKotak(0.9,1),960,1400,1),
 labels:[{at:b1+0.1,txt:'BARU-BARU INI DI KEBUMEN',bg:'#E5383B'}],src:'Sumber: pemberitaan media nasional, Nov 2026'});
sFact({t0:b2,t1:b3,bg:'#3B3A7A',glow:'#6E6CC4',grid:true,
 world:t=>{let s=popAt(t,b2+0.2,nasiKotak(1.1,1),960,1150,1)+popAt(t,at('dua jam'),clockFace(t,1,10),V(1100,1250),800,1);
  if(t>at('bakteri'))s+=bacteriaSwarm(t,7,960,1080,220,at('bakteri'));
  if(t>at('Apalagi'))s+=popAt(t,at('bersantan'),label('SANTAN',{size:70,bg:'#F2A541',fill:OL}),V(830,640),1450,1)+popAt(t,at('daging'),meat(0.8),V(1100,1250),1450,1);return s;},
 labels:[{at:b2+0.1,txt:'> 2 JAM DI SUHU RUANG',bg:'#E5383B',until:at('Apalagi')},{at:at('Apalagi'),txt:'SANTAN & DAGING PALING RAWAN',bg:'#E5383B',size:V(46,52)}],src:'Sumber: WHO, 5 Keys to Safer Food'});
sPlot({t0:b3,t1:b4,bg:'#3A1616',glow:'#E5383B',
 world:t=>{const p0=b3+1.6;if(t<p0)return '';let s=popAt(t,p0,nasiKotak(1,1),960,1100,1)+popAt(t,at('nggak bau'),nose(t,1),V(830,640),800,1)+xAt(t,at('kelihatan'),V(1100,1250),820,1.3);
  if(t>at('Beberapa'))s+=popAt(t,at('Beberapa'),poisonDrop(1.2),V(830,640),1330,1)+popAt(t,at('dipanaskan',b3),flame(t,1),V(1100,1250),1380,1);return s;},
 labels:[{at:at('nggak bau'),txt:'NGGAK BAU, NGGAK KELIHATAN BASI',bg:'#E5383B',size:V(42,50),until:at('Beberapa')},{at:at('Beberapa'),txt:'RACUN BAKTERI TAHAN PANAS',bg:'#E5383B'}]});
sCheck({t0:b4,t1:b6,title:'Biar aman:',items:[['Makan < 2 jam',at('maksimal')],['Simpan di kulkas',at('kulkas')],['Panaskan mendidih',at('mendidih')]],hold:t=>g('scale(.3)',nasiKotak(1,0)),label:'JADI GINI'});
sCTAsub({t0:b6,t1:E,ln:'PERNAH',ls:'PERNAH',rn:'BELUM PERNAH',rs:'BELUM',lp:t=>sweatFace(t,0.8),rp:t=>nasiKotak(0.45,1),aAt:at('pernah',b6),bAt:at('makanan',b6),vsAt:at('pesta',b6),commentAt:at('Tulis'),subAt:at('subscribe'),lc:'#E5383B',rc:'#3BB273'});
}
const THUMB={t:1.5,lines:['NASI KOTAK HAJATAN','BIKIN','KERACUNAN?']};
