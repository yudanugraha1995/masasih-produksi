// ===== Mandi Habis Keringetan? Masa Sih Bikin Paru-Paru Basah? ===== NEWFX B21FX
{const E=DUR+0.2;
const bm=at('terus')-0.1,bc=at('Masa sih')-0.1,b1=at('Faktanya')-0.15,b2=at('Penyebabnya')-0.15,b3=at('Tapi ada')-0.15,b4=at('Plot')-0.15,b5=at('cukup istirahat')-0.15,b6=at('Kamu tim')-0.15;
sHook({t0:0,t1:bm,key:'LANGSUNG MANDI?',keyAt:at('langsung'),keySize:92,prop:t=>runner(t,1),ps:1.4,py:1250,bg:'#0F2A3A',glow:'#2C8FC4',
 particle:(t,i)=>`<path d="M0,-30C14,-12 22,0 22,12C22,24 12,32 0,32C-12,32 -22,24 -22,12C-22,0 -14,-12 0,-30Z" fill="#5DB7EA"/>`,surpriseAt:at('mandi')});
sMyth({t0:bm,t1:bc,bubble:'Nanti paru-paru basah!',bubbleAt:at('nanti'),worryAt:at('basah'),bw:760});
sCard({t0:bc,t1:b1,lines:['MANDI KERINGETAN','BIKIN PARU-PARU','BASAH?'],yukAt:at('sih',bc),hold:t=>g('scale(.35)',shower(t,1))});
sFact({t0:b1,t1:b2,bg:'#14301F',glow:'#3BB273',
 world:t=>popAt(t,b1+0.2,lungs(t,1.5,{}),960,1100,1)+(t>at('pneumonia')?popAt(t,at('infeksi'),virus(t,0.6),V(1100,1250),900,1):'')+(t>at('cairan')?g(tr(960,1100,1.5),lungs(t,1,{water:true})):''),
 labels:[{at:at('pneumonia'),txt:'PNEUMONIA = INFEKSI PARU',bg:'#3BB273',until:at('cairan')},{at:at('cairan'),txt:'ATAU CAIRAN DI SEKITAR PARU',bg:'#5B6C8F',size:V(50,56)}],src:'Sumber: Kemenkes RI, Pneumonia'});
sFact({t0:b2,t1:b3,bg:'#3B3A7A',glow:'#6E6CC4',grid:true,
 world:t=>{let s=popAt(t,at('bakteri'),bacterium(1.6,'#7BC96F',0,'evil',t),V(830,640),880,1)+popAt(t,at('virus'),virus(t,1.4),V(1090,1250),880,1)+popAt(t,at('jamur'),mushroom(1.4),960,1130,1);
  if(t>at('Air mandi'))s+=popAt(t,at('Air mandi'),shower(t,1.2),V(840,640),1430,1)+xAt(t,at('lewat kulit'),V(1100,1250),1450,1.4);return s;},
 labels:[{at:b2+0.1,txt:'PENYEBAB: KUMAN, BUKAN AIR',bg:'#E5383B',size:V(50,56)}]});
sFact({t0:b3,t1:b4,bg:'#2A1F2B',glow:'#8E3B4F',
 world:t=>popAt(t,at('Habis olahraga',b3),runner(t,1.3),V(830,640),1350,1)+popAt(t,at('jantung',b3),heart(1.2,Math.sin(t*14)),V(1080,1250),950,1)+popAt(t,at('air dingin',b3),snowflake(),V(820,640),850,2.2)+popAt(t,at('kaget'),label('KAGET!',{size:70,bg:'#E5383B'}),960,1100,1),
 labels:[{at:b3+0.1,txt:'TAPI PERHATIKAN INI',bg:'#F2A541',fill:OL,until:at('jantung',b3)},{at:at('jantung',b3),txt:'JANTUNG MASIH KENCANG',bg:'#E5383B'}]});
sPlot({t0:b4,t1:b5,bg:'#2B3A16',glow:'#7BC96F',cardDur:1.0,
 world:t=>{const p0=b4+1.0;if(t<p0)return '';return popAt(t,at('dilarang'),shower(t,1.7),960,1150,1)+checkAt(t,at('mandi',b4),V(1120,1250),900,1.4);},
 labels:[{at:at('bukan',b4),txt:'BUKAN DILARANG MANDI!',bg:'#3BB273'}]});
sCheck({t0:b5,t1:b6,title:'Habis olahraga:',items:[['Istirahat 10-15 mnt',at('sepuluh')],['Tunggu napas normal',at('napas')],['Baru mandi',at('baru mandi')]],hold:t=>g('scale(.35)',towel(1)),label:'JADI GINI'});
sCTAsub({t0:b6,t1:E,ln:'TIM LANGSUNG MANDI',ls:'LANGSUNG',rn:'TIM NUNGGU KERING',rs:'NUNGGU',lp:t=>shower(t,0.45),rp:t=>towel(0.7),aAt:at('langsung',b6),bAt:at('nunggu'),vsAt:at('atau',b6),commentAt:at('Tulis'),subAt:at('subscribe'),lc:'#5DB7EA',rc:'#F2A541'});
}
const THUMB={t:1.2,lines:['MANDI KERINGETAN','BIKIN PARU-PARU','BASAH?']};
