// ===== Masa Sih Harus Minum 8 Gelas Sehari? =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Anjuran ini')-0.15, b2=at('Buah')-0.15, b3=at('Kebutuhan tiap')-0.15, b4=at('Plot')-0.2, b5=at('Cara gampang')-0.15, b6=at('Kamu tim')-0.15;
const row8=(t,s=1)=>{let r='';for(let i=0;i<8;i++)r+=g(tr(-525+i*150,(i%2)*20,0.45),glassW(t,1,0.75));return g(`scale(${s})`,r);};
sHook({t0:0,t1:bc,key:'8 GELAS?',keyAt:at('delapan'),prop:t=>row8(t,1),ps:1.0,py:1000,bg:'#10223A',glow:'#5DB7EA',particle:(t,i)=>`<path d="M0,-20Q14,0 0,20Q-14,0 0,-20Z" fill="#9FD8F2"/>`,surpriseAt:at('kurang')});
sCard({t0:bc,t1:b1,lines:['MASA SIH','HARUS MINUM','8 GELAS SEHARI?'],yukAt:at('Yuk'),hold:t=>g('scale(.3)',glassW(t,1))});
const tSb=at('sebagian');
sFact({t0:b1,t1:b2,bg:'#16343F',glow:'#2E7E8F',
 world:t=>{let s='';if(t<at('dua setengah'))s+=bigNum(t,b1+0.1,'1945','rekomendasi di Amerika',960,900,{size:200});
  else{s+=bigNum(t,at('dua setengah'),'2,5 L','air per hari',960,760,{size:170});if(t>tSb)s+=popAt(t,tSb,plateRice?plateRice(1):'',V(720,640),1250,0.8)+popAt(t,tSb+0.2,tomato(1),V(1200,1280),1250,0.8);}
  return s;},
 labels:[{at:at('Amerika'),txt:'ASALNYA TAHUN 1945',bg:'#5B6C8F',until:at('dilupakan')},{at:at('dilupakan'),txt:'KALIMAT YANG DILUPAKAN',bg:'#E5383B',size:V(48,52),until:tSb},{at:tSb,txt:'SEBAGIAN DARI MAKANAN',bg:'#3BB273'}],src:'Sumber: Food and Nutrition Board, AS (1945)'});
sFact({t0:b2,t1:b3,bg:'#14301F',glow:'#3BB273',
 world:t=>{let s='';[[tomato(1),at('Buah')],[noodleBowl(t,0.8,{}),at('sup')],[plateRice(1),at('nasi')],[cupCoffee(t,0.8,{}),at('kopi')]].forEach(([p,tt],i)=>{s+=popAt(t,tt,p,V(680,600)+(i%2)*V(560,720),V(640,700)+Math.floor(i/2)*V(320,340),V(0.75,0.85));});
  if(t>at('dua puluh'))s+=bigNum(t,at('dua puluh'),'20%','cairan dari makanan',960,V(1300,1250),{size:130});
  return s;},
 labels:[{at:at('menyumbang'),txt:'MAKANAN JUGA MENYUMBANG CAIRAN',bg:'#3BB273',size:V(40,48)}]});
sFact({t0:b3,t1:b4,bg:'#3A1616',glow:'#E8505B',
 world:t=>{let s=yuma({x:960,y:1500,s:1.1,expr:'worried',aL:70,aR:70,blink:blinkAt(t,2)});
  if(t>at('berkeringat'))for(let i=0;i<4;i++){const ph=((t-at('berkeringat'))*0.8+i/4)%1;s+=g(tr(820+i*90,lerp(950,1150,ph),0.8),`<path d="M0,-20Q14,0 0,20Q-14,0 0,-20Z" fill="#9FD8F2"/>`,`opacity="${fmt(1-ph)}"`);}
  s+=popAt(t,at('panas',b3),sun(t,1),V(1250,1380),640,0.7)+popAt(t,at('hamil'),label('IBU HAMIL',{size:48,bg:'#F7A1C4',fill:OL}),V(700,620),700,1);
  return s;},
 labels:[{at:b3+0.1,txt:'KEBUTUHAN TIAP ORANG BEDA',bg:'#5B6C8F',size:V(46,50),until:at('berkeringat')},{at:at('berkeringat'),txt:'BANYAK KERINGAT = BUTUH LEBIH',bg:'#E8505B',size:V(42,48)}]});
sPlot({t0:b4,t1:b5,bg:'#10223A',glow:'#5DB7EA',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';let s=popAt(t,p0,row8(t,1),960,900,V(0.8,1.0))+xAt(t,at('ajaib'),960,900,1.3);
  if(t>at('haus'))s+=popAt(t,at('haus'),`<circle r="110" fill="#E5383B" stroke="${OL}" stroke-width="8"/><path d="M-40,-50L-40,30M40,-50L40,30M-60,60L60,60" stroke="#fff" stroke-width="16" stroke-linecap="round"/>`,960,1300,1);
  return s;},
 labels:[{at:at('ajaib'),txt:'NGGAK ADA ANGKA AJAIB',bg:'#5B6C8F',until:at('haus')},{at:at('haus'),txt:'ALARM TUBUH: RASA HAUS',bg:'#E5383B',size:V(48,52)}]});
sCheck({t0:b5,t1:b6,title:'Cek warna kencing:',items:[['Muda = aman',at('muda')],['Pekat = minum',at('pekat')]],hold:t=>g('scale(.25)',urineChart(1)),label:'CARA GAMPANG'});
sCTA({t0:b6,t1:E,ln:'TIM BOTOL MINUM',ls:'TIM BOTOL',rn:'TIM LUPA MINUM',rs:'TIM LUPA',lp:t=>glassW(t,0.8,0.8),rp:t=>glassW(t,0.8,0.1),aAt:at('botol'),bAt:at('lupa'),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#2C8FC4',rc:'#E8505B'});
}
const THUMB={t:2.0,lines:['MASA SIH','HARUS MINUM','8 GELAS SEHARI?']};
