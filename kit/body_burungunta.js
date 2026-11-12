// ===== Masa Sih Burung Unta Ngumpetin Kepala di Pasir? =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Faktanya')-0.15, b4=at('Plot')-0.2, b6=at('Kamu tim')-0.15;
const sand=`<path d="M0,1350Q960,1250 1920,1350L1920,1920L0,1920Z" fill="#E3C27A"/>`;
sHook({t0:0,t1:bc,key:'KEPALA DI PASIR?',keyAt:at('kepala'),keySize:80,prop:t=>ostrich(t,1,{down:true}),ps:1.2,py:1050,bg:'#3A2A16',glow:'#F2A541',particle:(t,i)=>`<circle r="8" fill="#E3C27A"/>`,surpriseAt:at('ngumpetin')});
sCard({t0:bc,t1:b1,lines:['MASA SIH','BURUNG UNTA','NGUMPET DI PASIR?'],yukAt:bc+0.6,hold:t=>g('scale(.3)',ostrich(t,1))});
const tN=at('nunduk'),tT=at('telurnya'),tl=at('lari',b4);
sFact({t0:b1,t1:b4,bg:'#3B3A7A',glow:'#6E6CC4',
 world:t=>{let s=sand+g(tr(960,1080,1.3),ostrich(t,1,{down:t>tN}));
  if(t<tN)s+=xAt(t,at('pernah'),V(1300,1400),700,1);
  if(t>tT)s+=popAt(t,tT,eggs(1),V(760,700),1330,0.9);return s;},
 labels:[{at:at('pernah'),txt:'NGGAK PERNAH NGUBUR KEPALA',bg:'#E5383B',size:V(44,52),until:tN},{at:tN,txt:'CUMA NUNDUK NGURUS TELUR',bg:'#3BB273',size:V(44,52)}],src:'Sumber: San Diego Zoo Wildlife Alliance'});
sPlot({t0:b4,t1:b6,bg:'#14301F',glow:'#3BB273',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';const tk=at('tujuh');
  let s=sand+g(tr(960+(t>tl?Math.sin(t*3)*60:0),1080,1.1),ostrich(t,1,{run:t>tl}));
  if(t>tl)for(let i=0;i<4;i++)s+=`<path d="M${1220+i*30},${980+i*50}L${1350+i*30},${980+i*50}" stroke="#fff" stroke-width="10" stroke-linecap="round" opacity=".5"/>`;
  if(t>tk)s+=bigNum(t,tk,'70 km/jam','larinya burung unta',960,V(720,560),{size:110});return s;},
 labels:[{at:tl,txt:'MALAH LARI KENCANG!',bg:'#3BB273'}]});
sCTA({t0:b6,t1:E,ln:'TIM LARI',ls:'TIM LARI',rn:'TIM NGUMPET',rs:'TIM NGUMPET',lp:t=>ostrich(t,0.35,{run:true}),rp:t=>ostrich(t,0.35,{down:true}),aAt:at('lari',b6),bAt:at('ngumpet',b6),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#3BB273',rc:'#D9A55B'});
}
const THUMB={t:2.0,lines:['MASA SIH','BURUNG UNTA','NGUMPET DI PASIR?']};
