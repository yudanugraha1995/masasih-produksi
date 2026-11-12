// ===== Masa Sih Ikan Hiu Nggak Bisa Kena Kanker? (Short malam ±55 detik) =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Faktanya')-0.15, b4=at('Plot')-0.2, b6=at('Kamu tim')-0.15;
const sea=t=>{let s='';for(let i=0;i<10;i++){const y=((t*60+i*217)%2100)-100;s+=`<circle cx="${200+(i*173)%1520}" cy="${fmt(1920-y)}" r="${8+(i%3)*5}" fill="none" stroke="#fff" stroke-width="3" opacity=".35"/>`;}return s;};
sHook({t0:0,t1:bc,key:'KEBAL KANKER?',keyAt:at('kanker'),keySize:88,prop:t=>shark(t,0.9),ps:1.3,py:1050,bg:'#0E2A40',glow:'#2C8FC4',particle:(t,i)=>`<circle r="9" fill="none" stroke="#fff" stroke-width="3"/>`,surpriseAt:at('kanker'),
 extra:t=>popAt(t,at('kanker')+1.2,shield(0.6),V(1250,1350),800,1)+popAt(t,at('kanker')+2.2,`<text text-anchor="middle" font-family="Inter" font-weight="800" font-size="150" fill="#F2A541">?</text>`,V(700,600),800,1)});
sCard({t0:bc,t1:b1,lines:['MASA SIH','HIU NGGAK BISA','KENA KANKER?'],yukAt:bc+0.6,hold:t=>g('scale(.3)',shark(t,1))});
const tT=at('tumor'),tP=at('putih');
sFact({t0:b1,t1:b4,bg:'#0E2A40',glow:'#2C8FC4',
 world:t=>{const x=V(960,960)+Math.sin((t-b1)*0.5)*V(80,300);let s=sea(t)+g(tr(x,1100,V(1.0,1.2)),shark(t,1,{tumor:t>tT}));
  if(t>tT)s+=popAt(t,tT,`<circle r="70" fill="none" stroke="#F2A541" stroke-width="10"/>`,x+V(40,48),1064,1.2);
  if(t>tP)s+=popAt(t,tP,label('HIU PUTIH BESAR',{size:48,bg:'#5B6C8F'}),960,V(1420,1400),1);
  if(t>tP+2)s+=popAt(t,tP+2,xAt(t,tP+2,0,0,1)+shield(0.5),V(1300,1450),700,1);
  return s;},
 labels:[{at:b1+0.1,txt:'PENELITI NEMUIN...',bg:'#5B6C8F',until:tT},{at:tT,txt:'TUMOR DI BANYAK HIU',bg:'#E5383B',until:tP+2},{at:tP+2,txt:'HIU BISA KENA KANKER',bg:'#E5383B'}],src:'Sumber: Ostrander dkk., Cancer Research (2004)'});
const tB=at('diburu'),tS=at('suplemen'),tN=at('nggak terbukti');
sPlot({t0:b4,t1:b6,bg:'#3A1616',glow:'#E5383B',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';let s=sea(t);
  s+=g(tr(V(760,640),1050,0.7),shark(t,1));
  if(t>tB)s+=popAt(t,tB,`<path d="M0,-200L0,120M-50,120Q0,170 50,120" stroke="#9AA9B8" stroke-width="12" fill="none" stroke-linecap="round"/>`,V(1150,1250),700,1);
  if(t>tS)s+=popAt(t,tS,pillBottle(1,'ANTI KANKER'),V(1250,1350),1250,1);
  if(t>tN)s+=xAt(t,tN,V(1250,1350),1250,1.3);
  return s;},
 labels:[{at:tB,txt:'HIU MALAH DIBURU',bg:'#E5383B',until:tS},{at:tS,txt:'TULANG RAWAN JADI SUPLEMEN',bg:'#F2A541',fill:OL,size:V(44,52),until:tN},{at:tN,txt:'NGGAK TERBUKTI!',bg:'#E5383B'}]});
sCTA({t0:b6,t1:E,ln:'TIM TAKUT HIU',ls:'TIM TAKUT',rn:'TIM KASIHAN',rs:'TIM KASIHAN',lp:t=>g(`translate(${fmt(Math.sin(t*1.5)*60)},0)`,shark(t,0.4)),rp:t=>heart(0.5,Math.sin(t*6)),aAt:at('takut'),bAt:at('kasihan'),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#2C8FC4',rc:'#E8505B'});
}
const THUMB={t:2.0,lines:['MASA SIH','HIU NGGAK BISA','KENA KANKER?']};
