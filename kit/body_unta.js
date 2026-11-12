// ===== Masa Sih Punuk Unta Isinya Air? =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Faktanya')-0.15, b4=at('Plot')-0.2, b6=at('Kamu tim')-0.15;
sHook({t0:0,t1:bc,key:'ISINYA AIR?',keyAt:at('air'),keySize:96,prop:t=>camel(t,1),ps:1.1,py:1050,bg:'#3A2A16',glow:'#F2A541',particle:(t,i)=>`<circle r="10" fill="#2C8FC4"/>`,surpriseAt:at('air')});
sCard({t0:bc,t1:b1,lines:['MASA SIH','PUNUK UNTA','ISINYA AIR?'],yukAt:bc+0.6,hold:t=>g('scale(.3)',camel(t,1))});
const tL=at('lemak');
sFact({t0:b1,t1:b4,bg:'#3B3A7A',glow:'#6E6CC4',grid:true,
 world:t=>{let s=g(tr(960,1150,1.4),camel(t,1));
  if(t>tL)s+=popAt(t,tL,`<ellipse rx="90" ry="60" fill="#FFE9A8" stroke="${OL}" stroke-width="6"/><text y="16" text-anchor="middle" font-family="Inter" font-weight="800" font-size="44" fill="${OL}">LEMAK</text>`,V(950,950),V(850,850),1.2)+xAt(t,at('bukan'),V(1300,1350),720,0.9)+popAt(t,at('bukan'),`<path d="M0,-50C30,-10 40,20 0,40C-40,20 -30,-10 0,-50Z" fill="#2C8FC4" stroke="${OL}" stroke-width="5"/>`,V(1300,1350),870,1);
  return s;},
 labels:[{at:tL,txt:'PUNUK = LEMAK',bg:'#F2A541',fill:OL,until:at('bukan')},{at:at('bukan'),txt:'BUKAN AIR!',bg:'#E5383B'}],src:'Ilustrasi disederhanakan'});
sPlot({t0:b4,t1:b6,bg:'#14301F',glow:'#3BB273',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';const tm=at('minum',b4);
  let s=popAt(t,p0,camel(t,0.9),V(820,760),1150,1)+popAt(t,at('energi'),label('ENERGI ⚡',{size:48,bg:'#F2A541'}),V(820,760),760,1);
  if(t>tm)s+=bigNum(t,tm,'100+ L','dalam belasan menit',V(1060,1350),V(1420,1350),{size:100});return s;},
 labels:[{at:at('energi'),txt:'LEMAK JADI ENERGI',bg:'#3BB273',until:at('minum',b4)},{at:at('minum',b4),txt:'MINUM 100 LITER LEBIH!',bg:'#2C8FC4'}],src:'Sumber: San Diego Zoo Wildlife Alliance'});
sCTA({t0:b6,t1:E,ln:'TIM NAIK UNTA',ls:'TIM UNTA',rn:'TIM NAIK KUDA',rs:'TIM KUDA',lp:t=>camel(t,0.35),rp:t=>`<text text-anchor="middle" y="40" font-size="150">🐎</text>`,aAt:at('unta',b6),bAt:at('kuda'),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#D9A55B',rc:'#3BB273'});
}
const THUMB={t:2.0,lines:['MASA SIH','PUNUK UNTA','ISINYA AIR?']};
