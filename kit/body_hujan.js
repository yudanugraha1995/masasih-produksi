// ===== Masa Sih Kehujanan Bikin Pilek? =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Pilek dan')-0.15, b2=at('Tapi ada')-0.15, b3=at('Kenapa')-0.15, b4=at('Plot')-0.2, b5=at('Jadi setelah')-0.15, b6=at('Kamu tim')-0.15;
sHook({t0:0,t1:bc,key:'PILEK?',keyAt:at('pilek'),prop:t=>rainCloud(t,1),ps:1.9,py:880,bg:'#1B2A3F',glow:'#5DB7EA',particle:(t,i)=>`<path d="M0,-20Q14,0 0,20Q-14,0 0,-20Z" fill="#9FD8F2"/>`,surpriseAt:at('pilek')});
sCard({t0:bc,t1:b1,lines:['MASA SIH','KEHUJANAN','BIKIN PILEK?'],yukAt:at('Yuk'),hold:t=>g('scale(.3)',umbrella(1))});
const tVr=at('virus'),tAh=at('Air hujan'),tOt=at('otomatis');
sFact({t0:b1,t1:b2,bg:'#16343F',glow:'#2E7E8F',
 world:t=>{let s='';if(t<tAh)s+=popAt(t,b1+0.1,virus(t,1),960,980,2.2);
  else{s+=popAt(t,tAh,rainCloud(t,1),960,820,1.3)+g(tr(V(1300,1400),1260,0.8),virus(t,1))+xAt(t,at('membawa')+0.2,V(1300,1400),1260,0.9);
   if(t>tOt)s+=yuma({x:V(700,600),y:1550,s:1.0,expr:'happy',aL:70,aR:70,blink:blinkAt(t,3)});}
  return s;},
 labels:[{at:tVr,txt:'PENYEBAB = VIRUS',bg:'#7BC96F',fill:OL,until:at('rhinovirus')},{at:at('rhinovirus'),txt:'rhinovirus',bg:'#5B6C8F',until:tAh},{at:at('membawa'),txt:'HUJAN TIDAK BAWA VIRUS',bg:'#2C8FC4',size:V(52,52),until:tOt},{at:tOt,txt:'NGGAK OTOMATIS SAKIT',bg:'#3BB273'}],
 src:'Ilustrasi disederhanakan',c0:[960,1050,1.05],c1:[960,980,1.0]});
const tMr=at('merendam'),t29=at('dua puluh sembilan'),t9=at('cuma sembilan');
sFact({t0:b2,t1:b3,bg:'#10223A',glow:'#5DB7EA',
 world:t=>{let s='';if(t<at('Hasilnya'))s+=popAt(t,b2+0.1,footBucket(t,1),960,1050,1.6);
  else{const xs=[V(720,660),V(1200,1260)],base=V(1250,1130),v=[29,9],c=['#E5383B','#3BB273'],nm=['kaki direndam','tidak direndam'];
   for(let i=0;i<2;i++){const tt=i?t9:t29;const gh=clamp((t-tt+0.3)/0.7);const h=v[i]*V(22,15)*eout(gh);
    if(gh>0)s+=`<rect x="${xs[i]-90}" y="${fmt(base-h)}" width="180" height="${fmt(h)}" rx="14" fill="${c[i]}" stroke="${OL}" stroke-width="6"/>`+bigText(v[i]+'%',xs[i],fmt(base-h-30),70,{font:'Inter',sw:10,op:fadeIn(t,tt,.3)})+g(tr(xs[i],base+70,1),label(nm[i],{size:V(36,40),bg:c[i]}));}}
  return s;},
 labels:[{at:at('Universitas'),txt:'UNIVERSITAS CARDIFF',bg:'#5B6C8F',until:tMr},{at:tMr,txt:'KAKI DI AIR DINGIN 20 MENIT',bg:'#2C8FC4',size:V(46,50),until:at('Hasilnya')},{at:at('Hasilnya'),txt:'kena pilek dalam 5 hari',bg:'#F4C542',fill:OL,size:V(50,50)}],
 src:'Sumber: Johnson & Eccles, Family Practice (2005)'});
const tMy=at('menyempit'),tMl=at('melemah'),tMs=at('menyerang');
sFact({t0:b3,t1:b4,bg:'#2A1F2B',glow:'#8E3B4F',
 world:t=>{let s=g(tr(960,1050,1.8),nose(t,1,ss((t-tMy+0.3)/0.8)));
  if(t>at('kedinginan'))s+=g(tr(V(1280,1380),640,0.9*popS(t,at('kedinginan'),.4)),snowflake())+g(tr(V(640,540),700,1.2*popS(t,at('kedinginan')+0.1,.4)),snowflake());
  if(t>tMl)s+=popAt(t,tMl,`<path d="M0,-90L70,-60L70,10Q70,70 0,100Q-70,70 -70,10L-70,-60Z" fill="#9AA9B8" stroke="${OL}" stroke-width="6" opacity=".8"/><path d="M-20,-40L10,0L-10,20L20,60" stroke="#E5383B" stroke-width="8" fill="none"/>`,V(680,560),1250,1.1);
  if(t>tMs){const ph=clamp((t-tMs)/1.2);s+=g(tr(lerp(V(1400,1500),1010,ph),lerp(1400,1230,ph),0.6),virus(t,1));}
  return s;},
 labels:[{at:at('kedinginan'),txt:'BADAN KEDINGINAN',bg:'#2C8FC4',until:tMy},{at:tMy,txt:'PEMBULUH DI HIDUNG MENYEMPIT',bg:'#5B6C8F',size:V(42,48),until:tMl},{at:tMl,txt:'PERTAHANAN MELEMAH',bg:'#E5383B',until:tMs},{at:tMs,txt:'VIRUS GAMPANG MENYERANG',bg:'#E5383B',size:V(50,52)}],src:'Ilustrasi disederhanakan'});
const tPm=at('pintu');
sPlot({t0:b4,t1:b5,bg:'#1B2A3F',glow:'#5DB7EA',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';let s='';
  if(t<at('tapi',b4))s+=popAt(t,p0,rainCloud(t,1),960,950,1.4)+xAt(t,at('bukan',b4),960,950,1.2);
  else{s+=popAt(t,at('tapi',b4),`<rect x="-150" y="-230" width="300" height="460" rx="20" fill="#8A5A3B" stroke="${OL}" stroke-width="8"/><rect x="-120" y="-200" width="240" height="400" rx="12" fill="#1B2347"/><circle cx="90" cy="20" r="14" fill="#F4C542"/>`,960,1050,1.2)+g(tr(lerp(V(1350,1450),960,clamp((t-tPm)/1.2)),1050,1.1),virus(t,1))+g(tr(V(640,520),700,1.6),snowflake());}
  return s;},
 labels:[{at:at('hujan',b4),txt:'HUJAN BUKAN PENYEBAB',bg:'#2C8FC4',until:tPm},{at:tPm,txt:'DINGIN = PINTU MASUK VIRUS',bg:'#E5383B',size:V(46,50)}]});
sCheck({t0:b5,t1:b6,title:'Habis kehujanan:',items:[['Keringkan badan',at('keringkan')],['Ganti baju basah',at('ganti')],['Minum yang hangat',at('minum')],['Cuci tangan',at('cuci')]],hold:t=>g('scale(.3)',towel(1)),label:'JADI GINI'});
sCTA({t0:b6,t1:E,ln:'TIM HUJAN',ls:'TIM HUJAN',rn:'TIM PAYUNG',rs:'TIM PAYUNG',lp:t=>rainCloud(t,1.0),rp:t=>umbrella(0.9,'#F4C542'),aAt:at('main',b6),bAt:at('bawa'),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#2C8FC4',rc:'#E8505B'});
}
const THUMB={t:2.0,lines:['MASA SIH','KEHUJANAN','BIKIN PILEK?']};
