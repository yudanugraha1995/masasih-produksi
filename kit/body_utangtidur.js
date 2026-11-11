// ===== Masa Sih Begadang Bisa Dibayar Tidur Seharian? =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Orang dewasa')-0.15, b2=at('Ada penelitian')-0.15, b3=at('Plot')-0.2, b4=at('Tidur siang')-0.15, b5=at('Jadi yang')-0.15, b6=at('Kamu tim')-0.15;
sHook({t0:0,t1:bc,key:'UTANG TIDUR?',keyAt:at('utang'),keySize:88,prop:t=>calendar(t,1,['S','S','R','K','J','S','M'],t>at('Sabtu')?[5,6]:[0,1,2,3,4]),ps:1.5,py:1050,bg:'#141A3A',glow:'#5B6C8F',particle:(t,i)=>`<text x="0" y="0" font-family="B2" font-weight="800" font-size="60" fill="#fff" opacity=".8">Z</text>`,surpriseAt:at('lunas')});
sCard({t0:bc,t1:b1,lines:['MASA SIH','UTANG TIDUR','BISA DIBAYAR?'],yukAt:at('Yuk')});
const tKu=at('Kalau kurang'),tSu=at('Susah');
sFact({t0:b1,t1:b2,bg:'#141A3A',glow:'#5B6C8F',
 world:t=>{let s='';if(t<tKu)s+=bigNum(t,at('tujuh'),'7-9 JAM','tidur per malam',960,900,{size:190});
  else{s+=popAt(t,tKu,battery(t,1,lerp(0.9,0.15,ss((t-tKu)/2.2))),960,820,1.4);
   const it=[['susah fokus',at('fokus')],['gampang lapar',at('lapar')],['mood naik turun',at('mood')]];it.forEach(([x,tt],i)=>{s+=popAt(t,tt,label(x,{size:46,bg:'#E8505B'}),V(960,560+i*400),V(1060+i*110,1120),1,i%2?3:-3);});}
  return s;},
 labels:[{at:at('Orang'),txt:'ORANG DEWASA',bg:'#5B6C8F',until:tKu},{at:at('utang',tKu),txt:'UTANG TIDUR',bg:'#E5383B'}],
 src:'Sumber: AASM / CDC (7-9 jam untuk dewasa)'});
const tHa=at('Hasilnya'),tIn=at('sensitivitas');
sFact({t0:b2,t1:b3,bg:'#16343F',glow:'#2E7E8F',
 world:t=>{let s='';if(t<tHa){s+=g(tr(960,900,1.3),calendar(t,1,['S','S','R','K','J','S','M'],t>at('akhir pekan')?[5,6]:[0,1,2,3,4]));
   if(t>at('akhir pekan'))s+=g(tr(960,1300,0.36),bed(0,0,1,lyingHead('sip',true)))+zzz(1100,1120,t);}
  else{s+=popAt(t,tHa,scaleWeight(t,1,'+ kg'),V(720,660),1150,1.0);if(t>tIn)s+=popAt(t,tIn,`<rect x="-120" y="-120" width="240" height="240" rx="30" fill="#fff" stroke="${OL}" stroke-width="7"/><path d="M-80,-60L0,20L80,90" stroke="#E5383B" stroke-width="16" fill="none" stroke-linecap="round"/><path d="M60,80L84,94L76,64" stroke="#E5383B" stroke-width="12" fill="none" stroke-linecap="round"/>`,V(1200,1260),1080,1.0);}
  return s;},
 labels:[{at:b2+0.1,txt:'CURRENT BIOLOGY 2019',bg:'#5B6C8F',until:at('akhir pekan')},{at:at('akhir pekan'),txt:'TIDUR SEPUASNYA WEEKEND',bg:'#3BB273',size:V(50,52),until:tHa},{at:tHa,txt:'BERAT TETAP NAIK',bg:'#E5383B',until:tIn},{at:tIn,txt:'INSULIN TETAP TURUN',bg:'#E5383B'}],
 src:'Sumber: Depner dkk., Current Biology (2019)'});
const tBa=at('Bangun'),tJl=at('jet');
sPlot({t0:b3,t1:b4,bg:'#141A3A',glow:'#5B6C8F',
 world:t=>{const p0=b3+1.6;if(t<p0)return '';let s='';if(t<tBa)s+=popAt(t,p0,clockFace(t,1,10),960,950,1.6);
  else if(t<tJl)s+=popAt(t,tBa,clockFace(t,1,1),960,900,1.4)+popAt(t,at('Minggu',tBa),label('MINGGU 13.00',{size:56,bg:'#F4C542',fill:OL}),960,1180,1);
  else s+=g(tr(lerp(500,1500,(t-tJl)/3),900,1.2*popS(t,tJl,.4),-8),plane(1))+yuma({x:960,y:1550,s:1.1,expr:'worried',aL:70,aR:70,blink:blinkAt(t,2)});
  return s;},
 labels:[{at:b3+1.7,txt:'JAM BIOLOGIS KACAU',bg:'#E5383B',until:tJl},{at:tJl,txt:'SENIN = JET LAG',bg:'#E5383B'}]});
sFact({t0:b4,t1:b5,bg:'#CDEBF5',glow:'#fff',
 world:t=>popAt(t,b4+0.1,fanTimer(t,1,'20'),V(760,700),950,1.3)+g(tr(V(1150,1250),1250,0.32),bed(0,0,1,lyingHead('sip',true)))+zzz(V(1230,1330),1060,t)+(t>at('pusing')?xAt(t,at('pusing'),V(760,700),950,0.8):''),
 labels:[{at:b4+0.1,txt:'TIDUR SIANG BOLEH',bg:'#3BB273',until:at('cukup')},{at:at('cukup'),txt:'cukup 10-20 menit',bg:'#5B6C8F',until:at('pusing')},{at:at('pusing'),txt:'kelamaan = pusing',bg:'#E5383B'}]});
sCheck({t0:b5,t1:b6,title:'Paling ampuh:',items:[['Jam tidur sama',at('tidur dan')],['Jam bangun sama',at('bangun',b5)],['Termasuk weekend',at('termasuk')]],label:'JADI GINI'});
sCTA({t0:b6,t1:E,ln:'TIM BALAS DENDAM',ls:'TIM BALAS',rn:'TIM TIDUR TERATUR',rs:'TIM TERATUR',lp:t=>g('scale(.32)',bed(0,0,1,lyingHead('sip',true))),rp:t=>clockFace(t,1.2,1),aAt:at('balas',b6),bAt:at('teratur'),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#8E3B4F',rc:'#2C8FC4'});
}
const THUMB={t:2.0,lines:['MASA SIH','BEGADANG BISA','DIBAYAR?']};
