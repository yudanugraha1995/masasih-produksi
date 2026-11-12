// ===== Masa Sih Kelelawar Itu Buta? =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Faktanya')-0.15, b4=at('Plot')-0.2, b6=at('Kamu tim')-0.15;
sHook({t0:0,t1:bc,key:'BUTA?',keyAt:at('buta'),keySize:110,prop:t=>bat(t,1),ps:1.4,py:950,bg:'#1B1F3A',glow:'#6E6CC4',particle:(t,i)=>`<circle r="5" fill="#fff"/>`,surpriseAt:at('buta'),
 extra:t=>popAt(t,at('suara'),soundWaves(t,1.2),V(1150,1250),950,1)});
sCard({t0:bc,t1:b1,lines:['MASA SIH','KELELAWAR','ITU BUTA?'],yukAt:bc+0.6,hold:t=>g('scale(.35)',bat(t,1))});
const tN=at('nggak',b1),tT=at('tajam');
sFact({t0:b1,t1:b4,bg:'#16213F',glow:'#2E5E8F',
 world:t=>{let s=g(tr(960,1150,1.6),bat(t,1));
  if(t>tN)s+=xAt(t,tN,V(1300,1400),720,0.9)+popAt(t,tN,label('BUTA',{size:48,bg:'#9AA9B8'}),V(1300,1400),860,1);
  if(t>at('mata',b1))s+=popAt(t,at('mata',b1),eyeView(0.6),V(680,560),760,1);return s;},
 labels:[{at:tN,txt:'KELELAWAR NGGAK BUTA',bg:'#3BB273',until:tT},{at:tT,txt:'ADA YANG MATANYA TAJAM!',bg:'#F2A541',fill:OL,size:V(46,52)}],src:'Sumber: U.S. Geological Survey'});
sPlot({t0:b4,t1:b6,bg:'#14301F',glow:'#3BB273',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';let s=g(tr(960,1150,1.4),bat(t,1));
  s+=popAt(t,at('mata',b4),eyeView(0.5),V(680,560),760,1)+popAt(t,at('ekolokasi'),soundWaves(t,1.2),V(1150,1250),1150,1)+popAt(t,at('radar'),radar(t,0.5),V(1280,1380),760,1);return s;},
 labels:[{at:at('mata',b4),txt:'MATA + EKOLOKASI',bg:'#3BB273',until:at('radar')},{at:at('radar'),txt:'KAYAK PUNYA 2 RADAR!',bg:'#2C8FC4'}]});
sCTA({t0:b6,t1:E,ln:'TIM LUCU',ls:'TIM LUCU',rn:'TIM TAKUT',rs:'TIM TAKUT',lp:t=>bat(t,0.4),rp:t=>moonIcon(0.5),aAt:at('lucu'),bAt:at('takut'),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#6E6CC4',rc:'#2E2430'});
}
const THUMB={t:2.0,lines:['MASA SIH','KELELAWAR','ITU BUTA?']};
