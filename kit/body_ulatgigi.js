// ===== Masa Sih Gigi Berlubang Karena Ulat? =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Mitos')-0.15, b2=at('Faktanya')-0.15, b3=at('Makanya')-0.15, b4=at('Plot')-0.2, b5=at('Cara')-0.15, b6=at('Kamu tim')-0.15;
const bact=(t,s=1)=>bacterium(s,'#9C7BE0',0,'evil',t);
sHook({t0:0,t1:bc,key:'ULAT GIGI?',keyAt:at('ulatnya'),prop:t=>tooth(t,1,{hole:true,sad:true}),ps:2.0,bg:'#2A1F2B',glow:'#E8505B',particle:(t,i)=>candy(0.3,['#E8505B','#F4C542','#5DB7EA'][i%3]),surpriseAt:at('ulatnya'),
 extra:t=>popAt(t,at('ulatnya'),worm(t,1),1040,880,1.2)});
sCard({t0:bc,t1:b1,lines:['MASA SIH','GIGI BOLONG','KARENA ULAT?'],yukAt:at('Yuk')});
sFact({t0:b1,t1:b2,bg:'#4A3A22',glow:'#D9A35A',
 world:t=>{let s=`<rect width="1920" height="1920" fill="#E9D4A8" opacity=".25"/>`+popAt(t,b1+0.1,tooth(t,1,{hole:true,col:'#F6EBD2',face:false}),960,1050,2.0);
  if(t>at('cacing'))s+=g(tr(1060,860,1.1*popS(t,at('cacing'),.4)),worm(t,1));
  return s;},
 labels:[{at:at('Babilonia'),txt:'MITOS SEJAK BABILONIA',bg:'#D99A2B',until:at('cacing')},{at:at('cacing'),txt:'"cacing gigi"',bg:'#5B6C8F'}],
 src:'Sumber: British Dental Journal (sejarah mitos ulat gigi)',srcAt:at('Babilonia')});
const tPe=at('Pelakunya'),tGu=at('gula'),tAs=at('asam'),tEm=at('email');
sFact({t0:b2,t1:b3,bg:'#3B3A7A',glow:'#6E6CC4',grid:true,
 world:t=>{let s=g(tr(960,1080,1.9),tooth(t,1,{hole:t>tEm,face:false}));
  if(t<tPe)s+=g(tr(1060,860,1.1),worm(t,1))+xAt(t,at('nggak ada'),1060,860,1.2);
  else{for(let i=0;i<3;i++){const a=t*0.8+i*2.1;s+=g(tr(960+Math.cos(a)*330,820+Math.sin(a)*110,0.55*popS(t,tPe+i*0.12,.4)),bact(t));}
   s+=popAt(t,tGu,candy(1),V(700,600),700,0.7);
   if(t>tAs)for(let i=0;i<5;i++){const ph=((t-tAs)*0.8+i/5)%1;s+=g(tr(880+i*40,lerp(760,940,ph),0.45),acidDrop(1),`opacity="${fmt(Math.sin(ph*Math.PI))}"`);}}
  return s;},
 labels:[{at:at('nggak ada'),txt:'ULAT GIGI NGGAK ADA',bg:'#E5383B',until:tPe},{at:tPe,txt:'BAKTERI DI MULUT',bg:'#9C7BE0',until:tGu},{at:tGu,txt:'makan sisa GULA',bg:'#F4C542',fill:OL,until:tAs},{at:tAs,txt:'hasilkan ASAM',bg:'#7BC96F',fill:OL,until:tEm},{at:tEm,txt:'EMAIL LARUT = BOLONG',bg:'#E5383B'}],
 src:'Ilustrasi disederhanakan',c0:[960,1000,1.1],c1:[960,960,1.0]});
sFact({t0:b3,t1:b4,bg:'#2A1F2B',glow:'#8E3B4F',
 world:t=>{let s=g(tr(960,1150,1.4),tooth(t,1,{hole:true,sad:true}));for(let i=0;i<6;i++)s+=popAt(t,at('ngemil')+i*0.18,candy(1,['#E8505B','#F4C542','#5DB7EA'][i%3]),V(560,480)+i*V(160,190),700,0.45);
  if(t>at('diserang'))for(let i=0;i<4;i++){const ph=((t-at('diserang'))+i/4)%1;s+=g(tr(860+i*60,lerp(900,1040,ph),0.5),acidDrop(1),`opacity="${fmt(Math.sin(ph*Math.PI))}"`);}
  return s;},
 labels:[{at:at('ngemil'),txt:'SERING NGEMIL MANIS',bg:'#E8505B',until:at('diserang')},{at:at('diserang'),txt:'= SERING DISERANG ASAM',bg:'#E5383B',size:V(54,52)}]});
const tNg=at('ngaku');
sPlot({t0:b4,t1:b5,
 world:t=>{const p0=b4+1.6;if(t<p0)return '';let s='';
  if(t<tNg){s+=popAt(t,p0,worm(t,1),V(720,640),1000,1.2)+xAt(t,p0+0.3,V(720,640),1000,1.1)+yuma({x:V(1180,1260),y:1500,s:1.1,expr:'think',aL:70,aR:120,blink:blinkAt(t,5)});}
  else s+=popAt(t,tNg,tooth(t,1,{face:false}),960,1050,1.4)+g(tr(1080,880,1.1),worm(t,1))+popAt(t,at('percaya'),`<circle r="110" fill="none" stroke="#E5383B" stroke-width="20"/><path d="M-78,-78L78,78" stroke="#E5383B" stroke-width="20"/>`,1080,880,1.1);
  return s;},
 labels:[{at:at('kebiasaan'),txt:'KEBIASAAN KITA SENDIRI',bg:'#E5383B',size:V(50,56),until:tNg},{at:at('percaya'),txt:'JANGAN LANGSUNG PERCAYA',bg:'#5B6C8F',size:V(52,52)}]});
sCheck({t0:b5,t1:b6,title:'Cegah gigi bolong:',items:[['Sikat 2x sehari',at('sikat')],['Pasta berfluoride',at('berfluoride')],['Kurangi manis',at('kurangi')],['Cek tiap 6 bulan',at('periksa')]],hold:t=>g('scale(.25)',toothbrush(1,-60)),label:'CARA MENCEGAH'});
sCTA({t0:b6,t1:E,ln:'TIM SIKAT GIGI',ls:'TIM SIKAT',rn:'TIM SUKA LUPA',rs:'TIM LUPA',lp:t=>toothbrush(0.6,-30),rp:t=>tooth(t,0.8,{hole:true,sad:true}),aAt:at('sikat',b6),bAt:at('lupa'),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#2C8FC4',rc:'#8E3B4F'});
}
const THUMB={t:2.2,lines:['MASA SIH','GIGI BOLONG','KARENA ULAT?']};
