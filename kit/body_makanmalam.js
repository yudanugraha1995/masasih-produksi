// ===== Masa Sih Makan Malam Bikin Gemuk? =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Pada')-0.15, b2=at('Tapi jam')-0.15, b3=at('Plot')-0.2, b4=at('Selain')-0.15, b5=at('Jadi makan malam boleh')-0.15, b6=at('Kamu tim')-0.15;
sHook({t0:0,t1:bc,key:'BIKIN GEMUK?',keyAt:at('gemuk'),keySize:86,prop:t=>plateDinner(1),ps:2.0,bg:'#141A3A',glow:'#F2A541',particle:(t,i)=>`<circle r="10" fill="#F6E7A8"/>`,surpriseAt:at('takut'),
 extra:t=>popAt(t,0.4,clockFace(t,1,0.2),V(1250,1400),620,0.6)});
sCard({t0:bc,t1:b1,lines:['MASA SIH','MAKAN MALAM','BIKIN GEMUK?'],yukAt:at('Yuk')});
const tKm=at('kalori'),tKd=at('kalori',tKm+0.5),tPw=at('porsi');
sFact({t0:b1,t1:b2,bg:'#16343F',glow:'#2E7E8F',
 world:t=>{let s='';const tilt=t<tPw?Math.sin(t*2)*4:0;
  s+=g(tr(960,1000,1,tilt),`<rect x="-420" y="-10" width="840" height="20" rx="10" fill="#E9EFF3" stroke="${OL}" stroke-width="5"/><path d="M-380,0L-380,90M380,0L380,90" stroke="${OL}" stroke-width="6"/>`)+`<path d="M960,1010L900,1300L1020,1300Z" fill="#9AA9B8" stroke="${OL}" stroke-width="6"/>`;
  s+=popAt(t,tKm,plateDinner(0.6),V(680,580),1120,1)+popAt(t,tKd,flame(t,1),V(1240,1340),1180,0.6);
  if(t>tPw)s+=checkAt(t,tPw+0.3,960,720,1.0);
  return s;},
 labels:[{at:tKm,txt:'KALORI MASUK',bg:'#F2A541',until:tKd},{at:tKd,txt:'vs KALORI DIPAKAI',bg:'#E5383B',until:tPw},{at:tPw,txt:'PORSI WAJAR = AMAN',bg:'#3BB273'}],c0:[960,1050,1.05],c1:[960,1020,1.0]});
const tLa=at('larut'),tKb=at('dibakar');
sFact({t0:b2,t1:b3,bg:'#141A3A',glow:'#5B6C8F',
 world:t=>{let s=moonNight()+popAt(t,b2+0.1,clockFace(t,1,2),V(720,640),900,1.2);
  if(t>tLa)s+=yuma({x:V(1180,1260),y:1500,s:1.1,expr:'worried',aL:70,aR:70,blink:blinkAt(t,4)})+popAt(t,at('lapar'),stomach(t,1,0),V(1180,1260),640,0.4);
  if(t>tKb)s+=popAt(t,tKb,flame(t,1),V(720,640),1300,0.5)+`<path d="M${V(820,740)},1220L${V(820,740)},1320M${V(800,720)},1300L${V(820,740)},1330L${V(840,760)},1300" stroke="#E5383B" stroke-width="12" fill="none" stroke-linecap="round"/>`;
  return s;},
 labels:[{at:b2+0.1,txt:'JAM MAKAN BERPENGARUH',bg:'#5B6C8F',size:V(54,52),until:at('menemukan')},{at:at('menemukan'),txt:'CELL METABOLISM 2022',bg:'#2C8FC4',until:at('lapar')},{at:at('lapar'),txt:'LEBIH LAPAR',bg:'#E5383B',until:tKb},{at:tKb,txt:'kalori dibakar sedikit lebih rendah',bg:'#E5383B',size:V(40,46)}],
 src:'Sumber: Vujovic dkk., Cell Metabolism (2022)'});
sPlot({t0:b3,t1:b4,bg:'#141A3A',glow:'#5DB7EA',
 world:t=>{const p0=b3+1.6;if(t<p0)return '';let s=moonNight()+g(tr(960,1280,0.6),tvSet(t,1));
  s+=popAt(t,at('gorengan'),gorengan(1),V(680,560),900,0.9)+popAt(t,at('mi instan'),noodleBowl(t,0.7,{}),960,800,1)+popAt(t,at('martabak'),martabak(1),V(1240,1360),900,0.7);
  return s;},
 labels:[{at:at('kedua'),txt:'MAKAN MALAM KEDUA!',bg:'#E5383B'}]});
sFact({t0:b4,t1:b5,bg:'#3B3A7A',glow:'#6E6CC4',grid:true,
 world:t=>g(tr(960,980,2.0),stomach(t,1,ss((t-at('asam',b4)+0.3)/0.6)))+g(tr(960,1420,0.3),bed(0,0,1,lyingHead('worried',false))),
 labels:[{at:at('langsung tidur'),txt:'MAKAN BERAT + LANGSUNG TIDUR',bg:'#5B6C8F',size:V(44,48),until:at('begah')},{at:at('begah'),txt:'BEGAH + ASAM LAMBUNG NAIK',bg:'#E5383B',size:V(48,50)}],src:'Ilustrasi disederhanakan'});
sCheck({t0:b5,t1:b6,title:'Makan malam:',items:[['Porsi secukupnya',at('secukupnya')],['Sayur dan protein',at('sayur')],['2-3 jam sebelum tidur',at('selesai')]],hold:t=>g('scale(.25)',plateDinner(1)),label:'BOLEH, ASAL...'});
sCTA({t0:b6,t1:E,ln:'TIM MAKAN MALAM',ls:'TIM MAKAN',rn:'TIM SKIP MAKAN MALAM',rs:'TIM SKIP',lp:t=>plateDinner(0.8),rp:t=>clockFace(t,1,1),aAt:at('makan',b6),bAt:at('skip'),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#F2A541',rc:'#141A3A'});
}
const THUMB={t:2.0,lines:['MASA SIH','MAKAN MALAM','BIKIN GEMUK?']};
