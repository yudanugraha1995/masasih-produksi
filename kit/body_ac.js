// ===== Masa Sih Tidur Pakai AC Semalaman Bikin Pilek? (Short malam ±55 detik) =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Faktanya')-0.15, b4=at('Plot')-0.2, b6=at('Kamu tim')-0.15;
sHook({t0:0,t1:bc,key:'BIKIN PILEK?',keyAt:at('pilek'),keySize:92,prop:t=>acUnit(t,1),ps:1.2,py:900,bg:'#16213F',glow:'#2C8FC4',particle:(t,i)=>`<circle r="8" fill="#7FD1FF" opacity=".6"/>`,surpriseAt:at('masuk'),
 extra:t=>popAt(t,at('semalaman'),moonIcon(0.6),V(1250,1350),600,1)+popAt(t,at('pilek')+1.5,nose(t,0.7),V(960,960),1350,1)+popAt(t,at('pilek')+3,`<text text-anchor="middle" font-family="Inter" font-weight="800" font-size="150" fill="#F2A541">?</text>`,V(700,600),1300,1)});
sCard({t0:bc,t1:b1,lines:['TIDUR PAKAI AC','SEMALAMAN','BIKIN PILEK?'],yukAt:bc+0.6,hold:t=>g('scale(.3)',acUnit(t,1))});
const tV=at('virus'),tK=at('kering');
sFact({t0:b1,t1:b4,bg:'#3B3A7A',glow:'#6E6CC4',grid:true,
 world:t=>{let s='';if(t<tK){s+=g(tr(960,1050,1.3),virus(t,1,'#7BC96F'))+popAt(t,at('bukan',b1),acUnit(t,0.5,{off:true}),V(1250,1350),1450,1)+xAt(t,at('bukan',b1)+0.2,V(1250,1350),1450,0.9);}
  else{s+=g(tr(V(1000,1150),850,0.8),acUnit(t,1));s+=g(tr(V(800,700),1250,1.1),nose(t,1));for(let i=0;i<5;i++){const ph=((t-tK)*0.5+i/5)%1;s+=`<circle cx="${fmt(V(1000,1150)-ph*300)}" cy="${fmt(950+ph*250)}" r="10" fill="#7FD1FF" opacity="${fmt(1-ph)}"/>`;}
   s+=popAt(t,tK+1,label('KERING',{size:52,bg:'#F2A541',fill:OL}),V(1250,1350),1300,1);}
  return s;},
 labels:[{at:tV,txt:'PILEK = VIRUS, BUKAN AC',bg:'#3BB273',until:tK},{at:tK,txt:'TAPI UDARA AC KERING',bg:'#F2A541',fill:OL}],src:'Sumber: CDC (common cold disebabkan virus)'});
const tF=at('filter'),tJ=at('jamur');
sPlot({t0:b4,t1:b6,bg:'#3A1616',glow:'#E5383B',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';let s=g(tr(960,1000,1.2),acUnit(t,1,{dirty:t>tF}));
  if(t>tJ)for(let i=0;i<5;i++){const ph=((t-tJ)*0.4+i/5)%1;s+=`<circle cx="${fmt(800+i*80+Math.sin(t*2+i)*30)}" cy="${fmt(1150+ph*350)}" r="${10+(i%3)*5}" fill="${i%2?'#6B5A4A':'#7BA05B'}" opacity="${fmt(1-ph)}"/>`;}
  if(t>tJ+2)s+=popAt(t,tJ+2,label('BERSIHIN TIAP 2 MINGGU',{size:44,bg:'#3BB273'}),960,V(1500,1450),1);
  return s;},
 labels:[{at:tF,txt:'FILTER JARANG DIBERSIHIN',bg:'#E5383B',until:tJ},{at:tJ,txt:'SARANG DEBU & JAMUR!',bg:'#E5383B'}]});
sCTA({t0:b6,t1:E,ln:'TIM AC',ls:'TIM AC',rn:'TIM KIPAS',rs:'TIM KIPAS',lp:t=>acUnit(t,0.45),rp:t=>elecFan(t,0.4),aAt:at('semalaman',b6),bAt:at('kipas',b6),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#2C8FC4',rc:'#3BB273'});
}
const THUMB={t:2.0,lines:['TIDUR PAKAI AC','SEMALAMAN','BIKIN PILEK?']};
