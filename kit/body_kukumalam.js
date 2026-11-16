// NEWFX ===== Katanya Potong Kuku Malam Bikin Umur Pendek? =====
{const E=DUR+0.2;
const b1=at('Masa sih'),b2=at('Zaman'),b3=at('Makanya'),b4=at('Plot')-0.1,b5=at('Kamu tim')-0.1;
THUMB={t:1.2,lines:['POTONG KUKU','MALAM BIKIN','UMUR PENDEK?']};
sHook({t0:0,t1:b1,key:'UMUR PENDEK?',keyAt:at('umurmu'),keySize:100,prop:t=>scissors(t,1),ps:1.6,py:1050,bg:'#FFE9A8',glow:'#FFFFFF',particle:(t,i)=>moonIcon(0.35),surpriseAt:at('umurmu')});
sFact({t0:b1,t1:b2,bg:'#CFF1FF',glow:'#FFFFFF',
 world:t=>popAt(t,b1+0.1,hand(t,1.4,{}),V(960,900),1150,1)+xAt(t,at('nggak'),V(1170,1350),900,1.3),
 labels:[{at:b1+0.05,txt:'MASA SIH?',bg:'#5B6C8F',until:at('Faktanya')},{at:at('Faktanya'),txt:'NGGAK NGARUH KE UMUR!',bg:'#3BB273'}]});
sFact({t0:b2,t1:b3,bg:'#FFE1C7',glow:'#FFFFFF',
 world:t=>{let s=popAt(t,b2+0.1,oilLamp(t,1.3),V(740,560),1250,1);
  s+=popAt(t,at('pisau'),scissors(t,0.9),V(1180,1380),1000,1,15);
  if(t>at('jari'))s+=popAt(t,at('jari'),label('AUWW!',{size:80,bg:'#E5383B'}),V(1200,1300),700,1,-8);return s;},
 labels:[{at:b2+0.05,txt:'DULU BELUM ADA LISTRIK',bg:'#F2A541',fill:OL,until:at('jari')},{at:at('jari'),txt:'JARI BISA KEPOTONG!',bg:'#E5383B'}],src:'Penjelasan: mitos ini berasal dari kebiasaan zaman sebelum ada listrik'});
sFact({t0:b3,t1:b4,bg:'#E3F7D9',glow:'#FFFFFF',
 world:t=>{const kk=popS(t,b3+0.1,.5);return mom({x:V(760,640),y:1500,s:V(1.15,1.3)*Math.max(kk,0.01),aR:-28+Math.sin(t*10)*6,aL:62,talk:Math.sin(t*22)>0,blink:blinkAt(t,4)})+bubbleAt(t,b3+0.3,'JANGAN YA NAK!',V(1080,1320),760,520,V(.8,1));},
 labels:[{at:b3+0.05,txt:'MAKANYA DILARANG',bg:'#5B6C8F'}]});
sPlot({t0:b4,t1:b5,bg:'#FFF1B8',glow:'#FFFFFF',
 world:t=>{const p0=b4+1.4;if(t<p0)return '';return popAt(t,at('mandi'),g('',`<circle r="170" fill="#BFE9FF" stroke="${OL}" stroke-width="7"/><text y="30" text-anchor="middle" font-size="140">🛁</text>`),V(740,560),1050,1)+popAt(t,at('lembut'),fingerNail(1.3,0,0),V(1180,1380),1080,1)+checkAt(t,at('gampang'),V(1180,1380),760,1);},
 labels:[{at:Math.max(at('mandi'),b4+1.7),txt:'HABIS MANDI = KUKU LEMBUT',bg:'#3BB273',size:V(52,56)}]});
sEnd({t0:b5,t1:E,qLines:['TIM POTONG KUKU','MALAM ATAU PAGI?'],commentAt:at('Jawab'),subAt:at('subscribe'),prop:t=>scissors(t,1),bg:'#FFE7A3'});
}
