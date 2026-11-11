// ===== Masa Sih Mi Instan Dilapisi Lilin? =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Mi instan dibuat')-0.15, b2=at('BPOM')-0.15, b3=at('Tapi ada')-0.15, b4=at('Plot')-0.2, b5=at('Jadi tips')-0.15, b6=at('Kamu tim')-0.15;
sHook({t0:0,t1:bc,key:'LILIN?',keyAt:at('lilin'),prop:t=>noodleBowl(t,1,{}),ps:2.3,bg:'#3A2416',glow:'#E59A3C',particle:(t,i)=>`<path d="M-30,0q15,-12 30,0t30,0" stroke="#F2C14E" stroke-width="8" fill="none"/>`,surpriseAt:at('lilin'),
 extra:t=>popAt(t,at('lilin'),candle(t,1),V(1260,1400),900,1.1)});
sCard({t0:bc,t1:b1,lines:['MASA SIH','MI INSTAN','DILAPISI LILIN?'],yukAt:at('Yuk'),hold:t=>g('scale(.35)',noodleBlock(1))});
const tK=at('dikukus'),tGo=at('digoreng'),tM=at('minyak'),tKe=at('keruh');
sFact({t0:b1,t1:b2,bg:'#3A2416',glow:'#E59A3C',
 world:t=>{let s='';
  if(t<tKe){s+=popAt(t,b1+0.1,noodleBlock(1),960,1020,1.6);
   if(t>tK&&t<tGo)for(let i=0;i<3;i++){const ph=((t-tK)*0.8+i/3)%1;s+=`<path d="M${880+i*80},${fmt(860-ph*200)}q-20,-30 0,-60q20,-30 0,-60" stroke="#fff" stroke-width="14" fill="none" stroke-linecap="round" opacity="${fmt(Math.sin(ph*Math.PI))}"/>`;}
   if(t>tGo){for(let i=0;i<8;i++){const ph=((t-tGo)*0.9+i/8)%1;s+=`<circle cx="${fmt(700+rnd(i)*520)}" cy="${fmt(1260-ph*400)}" r="${fmt(10+rnd(i+3)*10)}" fill="none" stroke="#F4C542" stroke-width="5" opacity="${fmt(1-ph)}"/>`;}s+=popAt(t,tM,oilDrop(1),V(700,600),780,1.1);}
   if(t>at('lilin',b1)){s+=popAt(t,at('lilin',b1),candle(t,1),V(1240,1340),900,0.9)+xAt(t,at('lilin',b1)+0.2,V(1240,1340),820,1.0);}}
  else{s+=popAt(t,tKe,noodleBowl(t,1,{soup:'#EAD9B0'}),960,1100,1.8);for(let i=0;i<10;i++){s+=`<circle cx="${fmt(800+rnd(i)*320)}" cy="${fmt(990+rnd(i+4)*40)}" r="${fmt(6+rnd(i+8)*6)}" fill="#fff" opacity="${fmt(.6*fadeIn(t,tKe+0.3))}"/>`;}}
  return s;},
 labels:[{at:at('tepung'),txt:'TEPUNG TERIGU',bg:'#F4C542',fill:OL,until:tK},{at:tK,txt:'DIKUKUS',bg:'#5B6C8F',until:tGo},{at:tGo,txt:'DIGORENG',bg:'#E8505B',until:tM},{at:tM,txt:'KILAP = MINYAK',bg:'#3BB273',until:tKe},{at:tKe,txt:'keruh = PATI larut',bg:'#5B6C8F'}],c0:[960,1000,1.1],c1:[960,980,1.0]});
sFact({t0:b2,t1:b3,bg:'#1C2F45',glow:'#5DB7EA',
 world:t=>{let s=popAt(t,b2+0.1,shield(1),960,900,1.6);const k=popS(t,at('hoaks'),.4);
  if(k>0)s+=g(tr(960,1150,k*1.3,-10),`<rect x="-230" y="-80" width="460" height="160" rx="20" fill="none" stroke="#E5383B" stroke-width="16"/><text x="0" y="40" text-anchor="middle" font-family="B2" font-weight="800" font-size="120" fill="#E5383B">HOAKS</text>`);
  return s;},
 labels:[{at:b2+0.1,txt:'BPOM + AHLI GIZI',bg:'#2C8FC4'}],src:'Sumber: BPOM; cek fakta Tirto'});
const tDj=at('Dua jam'),tPk=at('Penelitiannya');
sFact({t0:b3,t1:b4,bg:'#3B3A7A',glow:'#6E6CC4',grid:true,
 world:t=>{let s=g(tr(960,1050,2.0),stomach(t,1,0));
  for(let i=0;i<5;i++)s+=`<path d="M${880+i*14},${1040+i*24}q30,-20 60,0t60,0t60,0" stroke="#F2C14E" stroke-width="12" fill="none" opacity="${fmt(t>tDj?1:0.4)}"/>`;
  const p=clamp((t-at('kamera')+0.3)/1.5);s+=g(tr(lerp(560,900,eout(p)),lerp(700,980,eout(p)),0.8*popS(t,at('kamera'),.4),20),capsuleCam(t,1));
  if(t>tDj)s+=popAt(t,tDj,clockFace(t,1,2),V(1300,1420),700,0.8);
  return s;},
 labels:[{at:at('kamera'),txt:'KAMERA KAPSUL',bg:'#F4C542',fill:OL,until:tDj},{at:tDj,txt:'2 JAM: MASIH UTUH',bg:'#E8505B',until:tPk},{at:tPk,txt:'STUDI KECIL',bg:'#5B6C8F'}],
 src:'Sumber: Dr. Braden Kuo, Massachusetts General Hospital (studi kecil)',srcAt:at('kamera')});
const tBu=at('Bumbu');
sPlot({t0:b4,t1:b5,
 world:t=>{const p0=b4+1.6;if(t<p0)return '';let s=popAt(t,p0,candle(t,1),V(720,640),1080,1.0)+xAt(t,p0+0.3,V(720,640),980,1.0)+popAt(t,at('garamnya'),saltShaker(1),V(1200,1280),1160,1.0);
  if(t>tBu)s+=popAt(t,tBu,sachet(1,'BUMBU','#F2A541'),960,820,0.8)+popAt(t,at('nasi',tBu),plateRice(0.6),960,1300,1);
  return s;},
 labels:[{at:at('garamnya'),txt:'GARAMNYA!',bg:'#E5383B',until:tBu},{at:tBu,txt:'TINGGI NATRIUM',bg:'#E5383B'}]});
sCheck({t0:b5,t1:b6,title:'Tips mi instan:',items:[['+ sayur',at('sayur')],['+ telur',at('telur')],['Bumbu secukupnya',at('secukupnya')],['Jangan tiap hari',at('jangan')]],hold:t=>g('scale(.3)',noodleBlock(1)),label:'TIPS'});
sCTA({t0:b6,t1:E,ln:'TIM MI KUAH',rn:'TIM MI GORENG',lp:t=>noodleBowl(t,1,{egg:true}),rp:t=>noodleBowl(t,1,{soup:'#C98C5A',col:'#2C8FC4'}),aAt:at('kuah'),bAt:at('goreng',b6),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#E8505B',rc:'#F2A541'});
}
const THUMB={t:2.6,lines:['MASA SIH','MI INSTAN','ADA LILINNYA?']};
