// ===== Gimana Kalau Kamu Minum Es Teh Manis Tiap Hari? =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Tehnya')-0.15, b2=at('Masalahnya')-0.15, b3=at('Kalau tiap')-0.15, b4=at('Plot')-0.2, b5=at('Biar tetap')-0.15, b6=at('Kamu tim')-0.15;
sHook({t0:0,t1:bc,key:'TIAP HARI?',keyAt:at('tiap'),keySize:96,prop:t=>iceTea(t,1),ps:1.5,py:1080,bg:'#3A2A16',glow:'#F2A541',particle:(t,i)=>`<rect width="22" height="22" rx="5" fill="#fff" opacity=".7"/>`,surpriseAt:at('tiap'),
 extra:t=>popAt(t,at('Panas'),sun(t,0.6),V(1250,1350),720,1)});
sCard({t0:bc,t1:b1,lines:['ES TEH MANIS','TIAP HARI','AMAN NGGAK?'],yukAt:at('Yuk'),hold:t=>g('scale(.35)',iceTea(t,1))});
sFact({t0:b1,t1:b2,bg:'#14301F',glow:'#3BB273',
 world:t=>{let s=g(tr(V(760,640),1100,1.1),iceTea(t,1,0));for(let i=0;i<3;i++)s+=popAt(t,b1+0.4+i*0.2,teaLeaf(0.6,i*40-30),V(1250,1350)+(i-1)*V(70,120),850+i*120,1);
  if(t>at('antioksidan'))s+=popAt(t,at('antioksidan'),shield(0.5),V(1250,1350),1350,1);return s;},
 labels:[{at:b1+0.1,txt:'TEHNYA SENDIRI BAIK',bg:'#3BB273',until:at('antioksidan')},{at:at('antioksidan'),txt:'ANTIOKSIDAN: KATEKIN',bg:'#3BB273'}],src:'Ilustrasi disederhanakan'});
const tG=at('dua sampai'),tK=at('Kementerian');
sFact({t0:b2,t1:b3,bg:'#3B3A7A',glow:'#6E6CC4',grid:true,
 world:t=>{let s=g(tr(V(700,560),1100,1),iceTea(t,1));
  if(t>tG)for(let i=0;i<4;i++)s+=popAt(t,tG+i*0.25,sugarSpoon(0.6),V(1150,1250)+(i%2)*V(150,200),850+Math.floor(i/2)*260,1,-20);
  if(t>tK)s+=bigNum(t,tK,'4 sdm','batas gula per HARI',960,V(620,600),{size:130});return s;},
 labels:[{at:b2+0.1,txt:'MASALAHNYA DI GULA',bg:'#E5383B',until:tG},{at:tG,txt:'1 GELAS = 2-4 SDM GULA',bg:'#F2A541',fill:OL,until:tK},{at:tK,txt:'BATAS KEMENKES: ±4 SDM',bg:'#5B6C8F'}],src:'Sumber: Permenkes No. 30/2013 (batas gula 50 g/hari)'});
sFact({t0:b3,t1:b4,bg:'#2A1F2B',glow:'#8E3B4F',
 world:t=>popAt(t,at('berat'),scaleWeight(t,1.3,'+'),V(640,560),1000,1)+popAt(t,at('gigi'),tooth(t,1,{}),960,1300,1)+popAt(t,at('diabetes'),label('DIABETES TIPE 2',{size:44,bg:'#E5383B'}),V(1280,1360),1000,1),
 labels:[{at:b3+0.1,txt:'KELEBIHAN GULA TIAP HARI',bg:'#E5383B',size:V(46,52)}],src:'Ilustrasi disederhanakan'});
sPlot({t0:b4,t1:b5,bg:'#3A1616',glow:'#E5383B',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';let s='';const t3=at('tiga');if(t<at('kenyang'))s+=g(tr(960,1100,1.3),iceTea(t,1));
  s+=popAt(t,at('kenyang'),stomach(t,0.9,0),V(700,560),1050,1)+popAt(t,at('kenyang')+0.3,`<text text-anchor="middle" font-family="Inter" font-weight="800" font-size="130" fill="#F2A541">?</text>`,V(700,560),760,1);
  if(t>t3)for(let i=0;i<3;i++)s+=popAt(t,t3+i*0.2,iceTea(t,0.45),V(1150,1250)+i*V(110,150),1100,1);return s;},
 labels:[{at:at('kenyang'),txt:'GULA MINUMAN NGGAK BIKIN KENYANG',bg:'#E5383B',size:V(40,50),until:at('tiga')},{at:at('tiga'),txt:'3 GELAS TANPA SADAR!',bg:'#F2A541',fill:OL}]});
sCheck({t0:b5,t1:b6,title:'Biar tetap nikmat:',items:[['Gula setengah',at('setengah')],['Sesekali teh tawar',at('tawar')],['Air putih dulu',at('putih')]],hold:t=>g('scale(.35)',iceTea(t,1)),label:'JADI GINI'});
sCTA({t0:b6,t1:E,ln:'TIM ES TEH MANIS',ls:'MANIS',rn:'TIM TEH TAWAR',rs:'TAWAR',lp:t=>iceTea(t,0.45),rp:t=>teaLeaf(0.6),aAt:at('manis',b6),bAt:at('tawar',b6),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#F2A541',rc:'#3BB273'});
}
const THUMB={t:2.0,lines:['ES TEH MANIS','TIAP HARI','AMAN NGGAK?']};
