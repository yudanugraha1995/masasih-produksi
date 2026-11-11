// ===== Masa Sih Manusia Cuma Pakai 10% Otak? =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Mitos ini')-0.15, b2=at('Faktanya')-0.15, b3=at('Otak cuma')-0.15, b4=at('Plot')-0.2, b5=at('Jadi biar')-0.15, b6=at('Kamu tim')-0.15;
const lit=(t,frac,seed=0)=>{let s='';for(let i=0;i<14;i++){if(i/14>=frac)break;const a=rnd(i+seed)*6.28,r=rnd(i+seed+20)*110;s+=`<circle cx="${fmt(Math.cos(a)*r)}" cy="${fmt(Math.sin(a)*r*0.7)}" r="${fmt(26+8*Math.sin(t*4+i))}" fill="#FFE27A" opacity=".8"/>`;}return s;};
sHook({t0:0,t1:bc,key:'10% OTAK?',keyAt:at('sepuluh'),prop:t=>brain(t,1,'happy'),ps:2.2,bg:'#1E1B3A',glow:'#9C7BE0',particle:(t,i)=>`<circle r="10" fill="#FFE27A"/>`,surpriseAt:at('otaknya')});
sCard({t0:bc,t1:b1,lines:['MASA SIH','KITA CUMA PAKAI','10% OTAK?'],yukAt:at('Yuk'),hold:t=>g('scale(.3)',brain(t,1,'happy'))});
sFact({t0:b1,t1:b2,bg:'#1E1B3A',glow:'#6E6CC4',
 world:t=>{let s=g(tr(960,950,2.0),brain(t,1,'think')+g('',lit(t,0.1)));
  if(t>at('jenius'))s+=popAt(t,at('jenius'),`<path d="M0,-70L20,-20L70,-15L30,15L45,70L0,40L-45,70L-30,15L-70,-15L-20,-20Z" fill="#FFE27A" stroke="${OL}" stroke-width="6"/>`,V(1260,1380),620,1.2);
  return s;},
 labels:[{at:at('film'),txt:'MITOS DARI FILM',bg:'#5B6C8F',until:at('jenius')},{at:at('jenius'),txt:'JADI JENIUS SUPER?',bg:'#9C7BE0'}]});
const tH=at('hampir');
sFact({t0:b2,t1:b3,bg:'#16343F',glow:'#2E7E8F',grid:true,
 world:t=>{let s=g(tr(960,950,2.0),brain(t,1,t>at('tidur',b2)?'sip':'happy')+g('',lit(t,t<tH?0.1:lerp(0.1,1,ss((t-tH)/1.5)),3)));
  if(t>at('tidur',b2))s+=zzz(V(1250,1380),640,t);return s;},
 labels:[{at:at('fMRI'),txt:'SCAN OTAK fMRI',bg:'#2C8FC4',until:tH},{at:tH,txt:'HAMPIR SEMUA AKTIF',bg:'#3BB273',until:at('tidur',b2)},{at:at('tidur',b2),txt:'SAAT TIDUR PUN KERJA',bg:'#5B6C8F'}],
 src:'Sumber: Scientific American; studi pencitraan otak (fMRI/PET)',c0:[960,1000,1.05],c1:[960,980,1.0]});
const t2=at('dua persen'),t20=at('dua puluh');
sFact({t0:b3,t1:b4,bg:'#3B3A7A',glow:'#6E6CC4',
 world:t=>{let s='';const xs=[V(720,660),V(1200,1260)],base=1250,v=[2,20],c=['#5B6C8F','#E8505B'],nm=['berat badan','energi tubuh'];
  for(let i=0;i<2;i++){const tt=i?t20:t2;const gh=clamp((t-tt+0.3)/0.7);const h=(8+v[i]*V(24,20))*eout(gh);
   if(gh>0)s+=`<rect x="${xs[i]-90}" y="${fmt(base-h)}" width="180" height="${fmt(h)}" rx="14" fill="${c[i]}" stroke="${OL}" stroke-width="6"/>`+bigText(v[i]+'%',xs[i],fmt(base-h-30),70,{font:'Inter',sw:10,op:fadeIn(t,tt,.3)})+g(tr(xs[i],base+70,1),label(nm[i],{size:V(36,40),bg:c[i]}));}
  if(t>at('nganggur'))s+=popAt(t,at('nganggur'),brain(t,1,'happy'),960,640,0.5);
  return s;},
 labels:[{at:b3+0.1,txt:'OTAK = 2% BERAT BADAN',bg:'#5B6C8F',size:V(50,52),until:t20},{at:t20,txt:'TAPI PAKAI 20% ENERGI',bg:'#E8505B',size:V(50,52)}],src:'Sumber: Raichle & Gusnard, PNAS (2002)'});
const tSb=at('sambungan');
sPlot({t0:b4,t1:b5,bg:'#1E1B3A',glow:'#9C7BE0',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';let s=popAt(t,p0,brain(t,1,'happy'),960,980,1.8);
  if(t>tSb)for(let i=0;i<9;i++){const k=clamp((t-tSb-i*0.12)/0.4);if(k<=0)continue;const a=rnd(i+40)*6.28,b=rnd(i+60)*6.28;s+=`<path d="M${fmt(960+Math.cos(a)*180)},${fmt(980+Math.sin(a)*120)}L${fmt(960+Math.cos(a)*180+(Math.cos(b)*220-Math.cos(a)*180)*k)},${fmt(980+Math.sin(a)*120+(Math.sin(b)*150-Math.sin(a)*120)*k)}" stroke="#FFE27A" stroke-width="10" stroke-linecap="round"/>`;}
  return s;},
 labels:[{at:at('hampir',b4),txt:'SUDAH DIPAKAI SEMUA',bg:'#3BB273',until:tSb},{at:tSb,txt:'BELAJAR = SAMBUNGAN BARU',bg:'#9C7BE0',size:V(46,50)}]});
sCheck({t0:b5,t1:b6,title:'Biar otak tajam:',items:[['Tidur cukup',at('tidur',b5)],['Rajin bergerak',at('bergerak')],['Belajar hal baru',at('terus')]],hold:t=>g('scale(.25)',brain(t,1,'happy')),label:'JADI GINI'});
sCTA({t0:b6,t1:E,ln:'TIM BELAJAR MALAM',ls:'TIM MALAM',rn:'TIM BELAJAR PAGI',rs:'TIM PAGI',lp:t=>moonIcon(1),rp:t=>sun(t,0.8),aAt:at('malam',b6),bAt:at('pagi',b6),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#1E1B3A',rc:'#F2A541'});
}
const THUMB={t:2.0,lines:['MASA SIH','KITA CUMA PAKAI','10% OTAK?']};
