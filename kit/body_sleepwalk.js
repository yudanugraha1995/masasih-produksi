// ===== Masa Sih Orang Tidur Sambil Jalan Nggak Boleh Dibangunin? =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Faktanya')-0.15, b4=at('Plot')-0.2, b6=at('Kamu pernah')-0.15;
sHook({t0:0,t1:bc,key:'NGGAK BOLEH DIBANGUNIN?',keyAt:at('dibangunin'),keySize:70,prop:t=>walker(t,1,{walk:true}),ps:1.3,py:1000,bg:'#1B1F3A',glow:'#6E6CC4',particle:(t,i)=>`<text font-size="50" fill="#fff" font-family="Inter" font-weight="800">Z</text>`,surpriseAt:at('bahaya')});
sCard({t0:bc,t1:b1,lines:['TIDUR JALAN','JANGAN','DIBANGUNIN?'],yukAt:bc+0.6,hold:t=>g('scale(.35)',moonIcon(1))});
const tN=at('nggak',b1),tB=at('bingung');
sFact({t0:b1,t1:b4,bg:'#3B3A7A',glow:'#6E6CC4',grid:true,
 world:t=>{let s=g(tr(960,1100,1.2),walker(t,1,{walk:t<tN,awake:t>tB}));
  if(t>tN)s+=checkAt(t,tN,V(1300,1350),760,1);
  if(t>tB)s+=popAt(t,tB,`<text text-anchor="middle" font-family="Inter" font-weight="800" font-size="150" fill="#F2A541">?</text>`,V(760,700),800,1);return s;},
 labels:[{at:tN,txt:'DIBANGUNIN NGGAK BAHAYA',bg:'#3BB273',size:V(46,52),until:tB},{at:tB,txt:'PALING CUMA BINGUNG',bg:'#5B6C8F'}],src:'Sumber: Sleep Foundation'});
sPlot({t0:b4,t1:b6,bg:'#3A1616',glow:'#E5383B',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';const tt=at('Tuntun');
  if(t<tt)return popAt(t,p0,stairs(1.2),V(820,760),1400,1)+g(tr(V(880,820)+Math.min(0,0),1000,0.7),walker(t,1,{walk:true}))+popAt(t,at('jatuh'),`<text text-anchor="middle" font-family="Inter" font-weight="800" font-size="160" fill="#E5383B">!</text>`,V(1250,1300),800,1);
  return bed(960,1250,1.1,'')+g(tr(V(700,640),1050,0.7),walker(t,1,{walk:true}))+checkAt(t,tt+0.3,V(1300,1350),800,1);},
 labels:[{at:at('justru'),txt:'DIBIARKAN JALAN LEBIH BAHAYA',bg:'#E5383B',size:V(42,52),until:at('Tuntun')},{at:at('Tuntun'),txt:'TUNTUN PELAN KE KASUR',bg:'#3BB273'}]});
sCTA({t0:b6,t1:E,ln:'PERNAH',ls:'PERNAH',rn:'NGGAK PERNAH',rs:'NGGAK',lp:t=>walker(t,0.35,{walk:true}),rp:t=>moonIcon(0.5),aAt:at('pernah',b6),bAt:at('jalan',b6),vsAt:at('tidur',b6),commentAt:at('Tulis'),lc:'#6E6CC4',rc:'#3BB273'});
}
const THUMB={t:2.0,lines:['TIDUR JALAN','JANGAN','DIBANGUNIN?']};
