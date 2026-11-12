// ===== Tidur Pakai Kaos Kaki Tiap Malam? Masa Sih Bikin Cepat Tidur? =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Biar bisa')-0.15, b2=at('Nah')-0.15, b3=at('Makanya')-0.15, b4=at('Plot')-0.2, b5=at('Jadi kalau')-0.15, b6=at('Kamu tim')-0.15;
sHook({t0:0,t1:bc,key:'ANEH & GERAH?',keyAt:at('aneh'),keySize:88,prop:t=>bed(0,0,0.9,`<g transform="translate(260,-10) scale(.5)">${sock(1,'#E8505B',-30)}</g>`),ps:1,py:1150,bg:'#1B1F3A',glow:'#6E6CC4',particle:(t,i)=>`<text font-size="50" fill="#fff" font-family="Inter" font-weight="800">Z</text>`,surpriseAt:at('kaos'),
 extra:t=>popAt(t,at('kaos'),sock(1,'#E8505B',-12),V(1250,1350),800,0.9)});
sCard({t0:bc,t1:b1,lines:['TIDUR PAKAI','KAOS KAKI','BIKIN CEPAT TIDUR?'],yukAt:at('Yuk'),hold:t=>g('scale(.4)',sock(1))});
const tP=at('pembuluh'),tB=at('dibuang');
sFact({t0:b1,t1:b2,bg:'#3B3A7A',glow:'#6E6CC4',grid:true,
 world:t=>{let s=popAt(t,b1+0.1,thermo(t,1,1-0.3*clamp((t-b1)/4)),V(700,560),1050,1)+g(tr(V(1250,1300),1100,1.2),footWarm(t,1,{vessel:t>tP,wide:t>tP+1}));
  if(t>tB)for(let i=0;i<4;i++){const ph=((t-tB)*0.8+i/4)%1;s+=`<path d="M${V(1250,1300)+120+i*30},${fmt(1000-ph*300)}q15,-20 0,-40" stroke="#F2A541" stroke-width="8" fill="none" opacity="${fmt(1-ph)}"/>`;}
  return s;},
 labels:[{at:b1+0.1,txt:'SUHU INTI HARUS TURUN',bg:'#5B6C8F',until:tP},{at:tP,txt:'PEMBULUH DI KAKI MELEBAR',bg:'#E5383B',size:V(46,52),until:tB},{at:tB,txt:'PANAS DIBUANG LEWAT KULIT',bg:'#F2A541',fill:OL,size:V(46,52)}],src:'Ilustrasi disederhanakan'});
const t7=at('tujuh');
sFact({t0:b2,t1:b3,bg:'#16343F',glow:'#2E7E8F',
 world:t=>{let s='';if(t<at('Penelitian'))s+=g(tr(960,1150,1.2),footWarm(t,1,{warm:true,vessel:true,wide:true}))+popAt(t,b2+0.3,sock(0.8,'#E8505B',-10),V(1300,1400),850,1);
  else{if(t<t7)s+=g(tr(960,1150,1.1),sock(1,'#E8505B',-8))+popAt(t,at('Korea'),label('KOREA, 2018',{size:48,bg:'#5B6C8F'}),960,V(760,700),1);s+=bigNum(t,t7,'±7 menit','lebih cepat terlelap',960,V(800,760),{size:150});s+=popAt(t,at('jarang'),moonIcon(0.8),960,V(1250,1200),1);}
  return s;},
 labels:[{at:b2+0.1,txt:'KAKI HANGAT = CEPAT MELEBAR',bg:'#3BB273',size:V(44,52),until:at('Penelitian')},{at:at('Penelitian'),txt:'PENELITIAN KOREA, 2018',bg:'#5B6C8F',until:at('jarang')},{at:at('jarang'),txt:'JARANG KEBANGUN',bg:'#3BB273'}],src:'Sumber: Ko & Lee, J Physiol Anthropol (2018)'});
sFact({t0:b3,t1:b4,bg:'#1B1F3A',glow:'#2C8FC4',
 world:t=>g(tr(V(760,640),1100,1),footWarm(t,1,{}))+popAt(t,at('dingin'),g('scale(4)',snowflake()),V(760,640),760,1)+popAt(t,at('kamar'),acUnit(t,0.8),V(1250,1300),800,1),
 labels:[{at:at('dingin'),txt:'KAKI DINGIN = SUSAH TIDUR',bg:'#2C8FC4',size:V(46,52)}],src:'Ilustrasi disederhanakan'});
sPlot({t0:b4,t1:b5,bg:'#3A1616',glow:'#E5383B',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';const tk=at('ketat'),tl=at('lembap');let s='';
  if(t<tl)s+=g(tr(960,1100,1.3),sock(1,'#E8505B'))+(t>tk?`<path d="M${V(890,880)},${900}L${V(1030,1040)},900" stroke="#E5383B" stroke-width="14"/>`+xAt(t,tk+0.4,V(1300,1400),800,1):'');
  else{s+=g(tr(960,1100,1.3),sock(1,'#9AA9B8'));for(let i=0;i<6;i++)s+=popAt(t,tl+i*0.1,`<circle r="${12+(i%3)*6}" fill="#7BA05B" opacity=".85"/>`,V(880,840)+(i%3)*V(80,100),1080+Math.floor(i/3)*90,1);}
  return s;},
 labels:[{at:at('ketat'),txt:'TERLALU KETAT = DARAH TERGANGGU',bg:'#E5383B',size:V(40,50),until:at('lembap')},{at:at('lembap'),txt:'DIPAKAI SEHARIAN = JAMURAN',bg:'#7BA05B',size:V(44,52)}]});
sCheck({t0:b5,t1:b6,title:'Kalau mau coba:',items:[['Kaos kaki bersih',at('bersih')],['Longgar & adem',at('longgar')],['Copot kalau panas',at('copot')]],hold:t=>g('scale(.35)',sock(1)),label:'JADI GINI'});
sCTA({t0:b6,t1:E,ln:'TIM KAOS KAKI',ls:'KAOS KAKI',rn:'TIM KAKI BEBAS',rs:'KAKI BEBAS',lp:t=>sock(0.45,'#E8505B'),rp:t=>footWarm(t,0.45,{}),aAt:at('kaos',b6),bAt:at('bebas'),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#E8505B',rc:'#3BB273'});
}
const THUMB={t:2.0,lines:['TIDUR PAKAI','KAOS KAKI','BIKIN CEPAT TIDUR?']};
