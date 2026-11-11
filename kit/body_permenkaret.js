// ===== Masa Sih Permen Karet Nempel di Usus 7 Tahun? =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Permen karet memang')-0.15, b2=at('Tapi nggak')-0.15, b3=at('Ada laporan')-0.15, b4=at('Plot')-0.2, b5=at('Jadi kalau')-0.15, b6=at('Kamu tim')-0.15;
sHook({t0:0,t1:bc,key:'7 TAHUN?',keyAt:at('tujuh'),prop:t=>gum(t,1,{blob:true}),ps:2.6,bg:'#3A1F3A',glow:'#F7A1C4',particle:(t,i)=>g('scale(.25)',gum(t,1,{blob:true,face:false})),surpriseAt:at('nempel')});
sCard({t0:bc,t1:b1,lines:['MASA SIH','PERMEN KARET','NEMPEL 7 TAHUN?'],yukAt:at('Yuk'),hold:t=>g('scale(.3)',gum(t,1))});
const tGb=at('gum'),tEz=at('enzim');
sFact({t0:b1,t1:b2,bg:'#3B3A7A',glow:'#6E6CC4',grid:true,
 world:t=>{let s=popAt(t,b1+0.1,gum(t,1),960,820,1.6);
  if(t>tGb)s+=popAt(t,tGb,gum(t,1,{blob:true}),960,1200,1.6);
  if(t>tEz){for(let i=0;i<3;i++){const ph=((t-tEz)*0.7+i/3)%1;s+=g(tr(lerp(V(560,520),860,ph),1150+i*40,0.8),enzyme(t,1),`opacity="${fmt(Math.sin(ph*Math.PI))}"`);}s+=xAt(t,tEz+0.5,V(1240,1300),1150,0.9);}
  return s;},
 labels:[{at:at('beda'),txt:'BEDA DARI MAKANAN LAIN',bg:'#5B6C8F',size:V(52,52),until:tGb},{at:tGb,txt:'GUM BASE',bg:'#F7A1C4',fill:OL,until:tEz},{at:tEz,txt:'NGGAK BISA DICERNA',bg:'#E5383B'}],src:'Ilustrasi disederhanakan'});
const tPe=at('peristaltik'),tKl=at('keluar');
sFact({t0:b2,t1:b3,bg:'#2A1F2B',glow:'#8E3B4F',
 world:t=>g(tr(960,1000,V(1.1,1.5)),gut(t,1,{ballSvg:gum(t,0.7,{blob:true,face:false}),ball:clamp((t-at('mendorong'))/((tKl+1)-at('mendorong')))}))+(t>tKl?checkAt(t,tKl+0.3,V(1280,1400),640,1.1):''),
 labels:[{at:at('bukan berarti'),txt:'BUKAN BERARTI NEMPEL',bg:'#3BB273',until:tPe},{at:tPe,txt:'USUS BERGERAK = PERISTALTIK',bg:'#5B6C8F',size:V(44,50),until:tKl},{at:tKl,txt:'KELUAR DALAM BEBERAPA HARI',bg:'#3BB273',size:V(46,50)}],
 src:'Ilustrasi disederhanakan',c0:[960,1050,1.05],c1:[960,980,1.0]});
const tTs=at('tersumbat'),tBy=at('banyak'),tKn=at('koin');
sFact({t0:b3,t1:b4,bg:'#16343F',glow:'#2E7E8F',
 world:t=>{let gs=V(0.95,1.0);let s=g(tr(960,1150,gs),gut(t,1,{w:110}));
  if(t>tTs)s+=popAt(t,tTs,`<circle r="80" fill="none" stroke="#E5383B" stroke-width="14"/>`,960+320*gs,1150+160*gs,1);
  if(t>tBy)for(let i=0;i<8;i++)s+=popAt(t,tBy+i*0.08,gum(t,1,{blob:true,face:false}),V(600,500)+(i%4)*V(130,150),640+Math.floor(i/4)*130,0.8);
  if(t>tKn)for(let i=0;i<2;i++)s+=popAt(t,tKn+i*0.12,coin(1),V(1250,1340)+i*V(120,150),720,1.5);
  return s;},
 labels:[{at:at('Pediatrics'),txt:'JURNAL PEDIATRICS 1998',bg:'#5B6C8F',until:tTs},{at:tTs,txt:'USUS ANAK TERSUMBAT',bg:'#E5383B',until:tBy},{at:tBy,txt:'NELAN BANYAK TIAP HARI',bg:'#E5383B',size:V(50,52)}],
 src:'Sumber: Milov dkk., Pediatrics (1998)'});
sPlot({t0:b4,t1:b5,bg:'#3A1F3A',glow:'#F7A1C4',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';let s=popAt(t,p0,gum(t,1,{blob:true}),V(680,600),1000,1.3)+checkAt(t,p0+0.4,V(680,600),760,0.9);
  if(t>at('kebiasaan')){for(let i=0;i<6;i++)s+=popAt(t,at('kebiasaan')+i*0.1,gum(t,1,{blob:true,face:false}),V(1150,1240)+(i%3)*V(90,110),900+Math.floor(i/3)*110,0.5);s+=xAt(t,at('kebiasaan')+0.8,V(1240,1350),960,1.1);}
  return s;},
 labels:[{at:at('satu'),txt:'1 KETELAN = AMAN',bg:'#3BB273',until:at('kebiasaan')},{at:at('kebiasaan'),txt:'NELAN TERUS-TERUSAN = BAHAYA',bg:'#E5383B',size:V(42,48)}]});
sCheck({t0:b5,t1:b6,title:'Permen karet:',items:[['Ketelan 1? Santai',at('santai')],['Buang ke sampah',at('buang')],['Jauhkan dari balita',at('anak',b5)]],hold:t=>g('scale(.3)',gum(t,1)),label:'JADI GINI'});
sCTA({t0:b6,t1:E,ln:'TIM NELAN',ls:'TIM NELAN',rn:'TIM BUANG',rs:'TIM BUANG',lp:t=>gum(t,1.3,{blob:true}),rp:t=>gum(t,1.1),aAt:at('pernah'),bAt:at('dibuang'),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#E8505B',rc:'#2C8FC4'});
}
const THUMB={t:2.0,lines:['MASA SIH','PERMEN KARET','NEMPEL 7 TAHUN?']};
