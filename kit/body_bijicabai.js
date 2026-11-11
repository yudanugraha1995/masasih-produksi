// ===== Masa Sih Makan Biji Cabai Bikin Usus Buntu? =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Usus buntu itu')-0.15, b2=at('Penyumbat')-0.15, b3=at('Terus')-0.15, b4=at('Plot')-0.2, b5=at('Yang penting')-0.15, b6=at('Kamu tim')-0.15;
sHook({t0:0,t1:bc,key:'USUS BUNTU?',keyAt:at('usus'),keySize:88,prop:t=>chili(t,1,{r:-12}),ps:1.9,bg:'#3A1616',glow:'#E5383B',particle:(t,i)=>seed(1.2,i*40),surpriseAt:at('usus'),
 extra:t=>{let s='';for(let i=0;i<5;i++)s+=popAt(t,at('biji')+i*0.1,seed(1.4,i*50),V(1080,1200)+i*40,820+((i*53)%90),1);return s;}});
sCard({t0:bc,t1:b1,lines:['MASA SIH','BIJI CABAI BIKIN','USUS BUNTU?'],yukAt:at('Yuk'),hold:t=>g('scale(.3)',chili(t,1,{face:false}))});
const tTs=at('tersumbat'),tBk=at('bakteri'),tMr=at('meradang');
sFact({t0:b1,t1:b2,bg:'#3B3A7A',glow:'#6E6CC4',grid:true,
 world:t=>{let s=g(tr(1000,980,1.5),appendix(t,1,t>tMr?1:0));
  if(t>tTs)s+=popAt(t,tTs,`<circle r="34" fill="#8A5A3B" stroke="${OL}" stroke-width="5"/>`,V(655,655),1090,1);
  if(t>tBk)for(let i=0;i<3;i++){const a=t*0.9+i*2.1;s+=g(tr(V(700,700)+Math.cos(a)*120,1260+Math.sin(a)*60,0.4*popS(t,tBk+i*0.12,.4)),bacterium(1,'#9C7BE0',0,'evil',t));}
  return s;},
 labels:[{at:at('kantong'),txt:'USUS BUNTU = KANTONG KECIL',bg:'#5B6C8F',size:V(50,52),until:at('kanan')},{at:at('kanan'),txt:'PERUT KANAN BAWAH',bg:'#2C8FC4',until:tTs},{at:tTs,txt:'TERSUMBAT',bg:'#E5383B',until:tMr},{at:tMr,txt:'MERADANG + BENGKAK',bg:'#E5383B'}],
 src:'Ilustrasi disederhanakan',c0:[960,1000,1.05],c1:[960,980,1.0]});
const tTj=at('tinja'),tGb=at('getah');
sFact({t0:b2,t1:b3,bg:'#2A1F2B',glow:'#8E3B4F',
 world:t=>{let s=g(tr(1000,V(1180,1080),0.8),appendix(t,1,1));
  s+=popAt(t,tTj,poopLump(2.2),V(680,600),760,1)+checkAt(t,tTj+0.4,V(680,600),560,0.8);
  if(t>tGb)for(let i=0;i<3;i++)s+=popAt(t,tGb+i*0.12,`<circle r="${46+8*Math.sin(t*4+i)}" fill="#F4C542" stroke="${OL}" stroke-width="6"/><circle cx="-12" cy="-12" r="10" fill="#fff" opacity=".6"/>`,V(1230,1300)+i*V(0,0),640+i*130,1);
  return s;},
 labels:[{at:b2+0.1,txt:'PENYUMBAT PALING SERING',bg:'#5B6C8F',size:V(52,52),until:tTj},{at:tTj,txt:'1. TINJA MENGERAS',bg:'#8A5A3B',until:tGb},{at:tGb,txt:'2. GETAH BENING BENGKAK',bg:'#F4C542',fill:OL,size:V(52,52)}]});
const t9=at('sembilan'),tSp=at('setengah'),tKl=at('keluar');
sFact({t0:b3,t1:b4,bg:'#16343F',glow:'#2E7E8F',
 world:t=>{let s='';if(t<tSp)s+=popAt(t,b3+0.1,chili(t,1,{face:true}),960,820,1.0)+(t>t9?bigNum(t,t9,'9.000+','sampel operasi',960,1170,{size:140}):'');
  else if(t<tKl){s+=bigNum(t,tSp,'0,5%','ada biji tanaman',960,V(700,790),{size:180});for(let i=0;i<200;i++){const st=V(30,34),x=960-9.5*st+(i%20)*st,y=V(900,950)+Math.floor(i/20)*V(36,28);s+=`<circle cx="${x}" cy="${y}" r="${V(11,12)}" fill="${i==0?'#E5383B':'#9AA9B8'}" opacity="${fmt(fadeIn(t,tSp+0.3+i*0.003,.2))}"/>`;}}
  else{s+=g(tr(960,1000,0.9),appendix(t,1,0));for(let i=0;i<5;i++){const ph=((t-tKl)*0.6+i/5)%1;s+=g(tr(lerp(V(500,420),V(1500,1600),ph),lerp(820,880,ph)+Math.sin(ph*9)*20,1.4),seed(1,ph*360),`opacity="${fmt(Math.sin(ph*Math.PI))}"`);}}
  return s;},
 labels:[{at:at('Penelitian'),txt:'PENELITIAN DI TURKI',bg:'#5B6C8F',until:tSp},{at:tSp,txt:'CUMA SETENGAH PERSEN',bg:'#3BB273',size:V(54,52),until:tKl},{at:tKl,txt:'BIJI IKUT KELUAR',bg:'#3BB273'}],
 src:'Sumber: Turk Patoloji Dergisi (2023), 9.480 sampel'});
const tKs=at('kurang serat'),tPd=at('pedas',b4);
sPlot({t0:b4,t1:b5,bg:'#14301F',glow:'#3BB273',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';let s='';
  if(t<tPd){s+=popAt(t,p0,chili(t,1,{sad:true}),V(680,600),1000,1.1)+xAt(t,at('bukan',b4),V(680,600),1000,1.1)+popAt(t,tKs,broccoli(1),V(1240,1320),1000,1.3);
   if(t>at('Makanan'))s+=popAt(t,at('keras'),poopLump(1.2),V(1240,1320),1450,1);}
  else s+=popAt(t,tPd,chili(t,0.9,{}),V(620,560),900,1)+g(tr(V(1150,1300),1050,V(1.3,1.6)),stomach(t,1,ss((t-at('mulas')+0.3)/0.6)));
  return s;},
 labels:[{at:tKs,txt:'KURANG SERAT!',bg:'#3BB273',until:tPd},{at:tPd,txt:'PEDAS BERLEBIHAN = MULAS',bg:'#E5383B',size:V(48,52)}],src:'Peran serat masih diteliti'});
sCheck({t0:b5,t1:b6,title:'Kenali gejala:',items:[['Nyeri kanan bawah',at('nyeri')],['Demam',at('demam')],['Mual',at('mual')],['Nggak nafsu makan',at('nafsu')]],hold:t=>g('scale(.3)',chili(t,1,{face:false})),label:'LANGSUNG KE DOKTER'});
sCTA({t0:b6,t1:E,ln:'TIM PEDAS',ls:'TIM PEDAS',rn:'TIM NGGAK KUAT',rs:'TIM NGGAK KUAT',lp:t=>chili(t,1.3,{}),rp:t=>chili(t,1.3,{col:'#7BC96F',sad:true}),aAt:at('pedas',b6),bAt:at('nggak kuat'),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#E5383B',rc:'#3BB273'});
}
const THUMB={t:2.2,lines:['MASA SIH','BIJI CABAI BIKIN','USUS BUNTU?']};
