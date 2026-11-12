// ===== Masa Sih Bintik Putih di Kuku Tanda Kurang Kalsium? =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Faktanya')-0.15, b4=at('Plot')-0.2, b6=at('Kamu punya')-0.15;
sHook({t0:0,t1:bc,key:'KURANG KALSIUM?',keyAt:at('kalsium'),keySize:80,prop:t=>fingerNail(1,3),ps:1.3,py:1000,bg:'#3A1F2B',glow:'#E8505B',particle:(t,i)=>`<circle r="10" fill="#fff"/>`,surpriseAt:at('kalsium')});
sCard({t0:bc,t1:b1,lines:['MASA SIH','BINTIK DI KUKU','KURANG KALSIUM?'],yukAt:bc+0.6,hold:t=>g('scale(.3)',fingerNail(1,3))});
const tB=at('benturan'),tK=at('bukan');
sFact({t0:b1,t1:b4,bg:'#3B3A7A',glow:'#6E6CC4',grid:true,
 world:t=>{let s=g(tr(960,1150,1.8),fingerNail(1,t>tB?1:3,60));
  if(t>tB)s+=popAt(t,tB,`<path d="M-40,-40L40,40M40,-40L-40,40" stroke="#F2A541" stroke-width="16" stroke-linecap="round"/><circle r="70" fill="none" stroke="#F2A541" stroke-width="8"/>`,960,V(1350,1330),1);
  if(t>tK)s+=xAt(t,tK,V(1380,1450),720,1.0)+popAt(t,tK,label('KALSIUM',{size:48,bg:'#9AA9B8'}),V(1380,1450),860,1);
  return s;},
 labels:[{at:tB,txt:'BEKAS BENTURAN KECIL',bg:'#5B6C8F',until:tK},{at:tK,txt:'BUKAN KURANG KALSIUM',bg:'#E5383B',size:V(48,52)}],src:'Sumber: American Academy of Dermatology'});
sPlot({t0:b4,t1:b6,bg:'#14301F',glow:'#3BB273',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';const tg=at('tumbuh',b4),tp=at('dipotong');const sh=60-clamp((t-tg)/(tp-tg))*170;
  let s=g(tr(960,1150,1.8),fingerNail(1,t<tp+0.4?1:0,sh));
  if(t>tp)s+=popAt(t,tp,`<path d="M-60,-20L60,20M-60,20L60,-20" stroke="#9AA9B8" stroke-width="14" stroke-linecap="round"/>`,960,V(800,780),1.2);return s;},
 labels:[{at:at('tumbuh',b4),txt:'IKUT TUMBUH KE UJUNG',bg:'#3BB273',until:at('dipotong')},{at:at('dipotong'),txt:'HILANG SAAT DIPOTONG!',bg:'#F2A541',fill:OL}]});
sCTA({t0:b6,t1:E,ln:'PUNYA BINTIK',ls:'PUNYA',rn:'NGGAK PUNYA',rs:'NGGAK',lp:t=>fingerNail(0.4,3),rp:t=>fingerNail(0.4,0),aAt:at('punya',b6),bAt:at('nggak',b6),vsAt:at('kuku',b6),commentAt:at('Tulis'),lc:'#E8505B',rc:'#3BB273'});
}
const THUMB={t:2.0,lines:['MASA SIH','BINTIK DI KUKU','KURANG KALSIUM?']};
