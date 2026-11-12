// ===== Masa Sih Cabut Satu Uban Tumbuh Tujuh? =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Satu helai')-0.15, b2=at('Uban muncul')-0.15, b3=at('Jadi uban')-0.15, b4=at('Plot')-0.2, b5=at('Jadi kalau',b4)-0.15, b6=at('Kamu tim')-0.15;
sHook({t0:0,t1:bc,key:'TUMBUH TUJUH?',keyAt:at('tujuh'),keySize:90,prop:t=>g('',hairStrand(t,1.4,'#E9E9F2',380)),ps:1.4,py:1250,bg:'#2A1F2B',glow:'#9AA9B8',particle:(t,i)=>`<path d="M0,0C10,-30 -10,-60 0,-90" stroke="#E9E9F2" stroke-width="6" fill="none"/>`,surpriseAt:at('cabut'),
 extra:t=>{let s='';if(t>at('tujuh'))for(let i=0;i<7;i++)s+=popAt(t,at('tujuh')+i*0.06,hairStrand(t+i,0.8,'#E9E9F2',260),V(780,700)+i*V(55,90),1300,1,(i-3)*8);return s;}});
sCard({t0:bc,t1:b1,lines:['MASA SIH','CABUT 1 UBAN','TUMBUH 7?'],yukAt:at('Yuk'),hold:t=>g('scale(.35)',scissors(t,1))});
const tF=at('folikel',b1),tTe=at('tetap');
sFact({t0:b1,t1:b2,bg:'#3B3A7A',glow:'#6E6CC4',grid:true,
 world:t=>{let s=g(tr(960,1150,1.3),follicle(t,1,{grey:true,len:380}));
  if(t>tTe)s+=bigNum(t,tTe,'1 = 1','satu folikel, satu helai',960,V(700,640),{size:150});return s;},
 labels:[{at:b1+0.1,txt:'1 HELAI = 1 FOLIKEL',bg:'#5B6C8F',until:tTe},{at:tTe,txt:'DICABUT? TETAP 1 HELAI',bg:'#3BB273',size:V(46,52)}],src:'Ilustrasi disederhanakan'});
const tG=at('genetik'),tN=at('Nature'),tT=at('tikus');
sFact({t0:b2,t1:b3,bg:'#16343F',glow:'#2E7E8F',
 world:t=>{let s='';if(t<tN){const p=1-clamp((t-b2-0.5)/3);s+=g(tr(960,1150,1.3),follicle(t,1,{grey:p<0.5,pig:p,len:380}));
   if(t>tG)s+=popAt(t,tG,label('GENETIK + UMUR',{size:48,bg:'#F2A541',fill:OL}),960,V(700,640),1);}
  else{s+=bigNum(t,tN,'2020','jurnal Nature',960,V(700,640),{size:150});s+=popAt(t,at('stres'),`<text text-anchor="middle" font-family="Inter" font-weight="800" font-size="120" fill="#E5383B">STRES</text>`,960,1000,1);
   if(t>tT)s+=popAt(t,tT,mouse(t,1.1),960,1300,1);}
  return s;},
 labels:[{at:b2+0.1,txt:'SEL PIGMEN BERHENTI',bg:'#5B6C8F',until:tN},{at:tN,txt:'STRES BERAT?',bg:'#E5383B',until:tT},{at:tT,txt:'BARU DIUJI DI TIKUS',bg:'#F2A541',fill:OL}],src:'Sumber: Zhang dkk., Nature (2020)'});
sFact({t0:b3,t1:b4,bg:'#2A1F2B',glow:'#8E3B4F',
 world:t=>{let s='';for(let i=0;i<9;i++){const gr=t>b3+0.6+i*0.25;s+=g(tr(V(640,560)+i*V(100,100),1300,0.9),hairStrand(t+i,1,gr?'#E9E9F2':'#2E2430',340));}
  s+=popAt(t,at('bukan',b3),xAt(t,at('bukan',b3),0,0,0.9)+label('DICABUT',{size:44,bg:'#9AA9B8'}),960,V(700,640),1);return s;},
 labels:[{at:b3+0.1,txt:'FOLIKEL LAIN IKUT BERUBAN',bg:'#5B6C8F',size:V(46,52),until:at('bukan',b3)},{at:at('bukan',b3),txt:'BUKAN KARENA DICABUT',bg:'#E5383B'}],src:'Ilustrasi disederhanakan'});
const tR=at('rusak');
sPlot({t0:b4,t1:b5,bg:'#3A1616',glow:'#E5383B',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';const tn=at('nggak tumbuh');
  let s=g(tr(960,1150,1.3),follicle(t,1,{grey:true,dmg:t>tR,noHair:t>tn,len:380}));
  if(t>at('terus-terusan'))s+=popAt(t,at('terus-terusan'),`<text text-anchor="middle" font-family="Inter" font-weight="800" font-size="110" fill="#F2A541">x100</text>`,V(1300,1400),780,1);
  if(t>tn)s+=xAt(t,tn,960,V(820,760),1.1);return s;},
 labels:[{at:at('terus-terusan'),txt:'DICABUT TERUS-TERUSAN',bg:'#E5383B',until:tR},{at:tR,txt:'FOLIKEL BISA RUSAK',bg:'#E5383B',until:at('nggak tumbuh')},{at:at('nggak tumbuh'),txt:'RAMBUT NGGAK TUMBUH LAGI',bg:'#E5383B',size:V(46,52)}]});
sCheck({t0:b5,t1:b6,title:'Kalau risih:',items:[['Gunting dekat akar',at('gunting')],['Pewarna aman',at('pewarna')],['Jangan stres',at('stres',b5)]],hold:t=>g('scale(.35)',scissors(t,1)),label:'JADI GINI'});
sCTA({t0:b6,t1:E,ln:'TIM CABUT',ls:'TIM CABUT',rn:'TIM BIARIN',rs:'TIM BIARIN',lp:t=>hairStrand(t,0.6,'#E9E9F2',260),rp:t=>scissors(t,0.5),aAt:at('cabut',b6),bAt:at('biarin'),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#9AA9B8',rc:'#3BB273'});
}
const THUMB={t:2.0,lines:['MASA SIH','CABUT 1 UBAN','TUMBUH 7?']};
