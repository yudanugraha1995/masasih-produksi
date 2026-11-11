// ===== Masa Sih Nonton Dekat TV Bikin Mata Minus? =====
{const E=DUR+0.2;
const m1=at('langsung')-0.1, bc=at('Masa sih')-0.1, b1=at('Menurut')-0.15, b2=at('Tapi mata')-0.15, b3=at('Ada penelitian')-0.15, b4=at('Plot')-0.2, b5=at('Jadi pakai')-0.15, b6=at('Kamu tim')-0.15;
sHook({t0:0,t1:m1,key:'MEPET TV?',keyAt:at('TV'),prop:t=>tvSet(t,1),ps:1.8,py:1100,bg:'#10223A',glow:'#5DB7EA',particle:(t,i)=>`<circle r="10" fill="#BFE6F7"/>`});
sMyth({t0:m1,t1:bc,bubbleAt:at('mundur'),bubble:'<tspan fill="#E5383B">MUNDUR!</tspan> Nanti minus!',bw:640,worryAt:at('mundur'),extra:t=>g(tr(V(960,1500),V(1080,980),V(0.3,0.45)),tvSet(t,1))});
sCard({t0:bc,t1:b1,lines:['MASA SIH','DEKAT TV BIKIN','MATA MINUS?'],yukAt:at('Yuk')});
const tAn=at('Anak-anak'),tC=at('capek');
sFact({t0:b1,t1:b2,bg:'#10223A',glow:'#5DB7EA',
 world:t=>{let s='';if(t<tC){s+=g(tr(960,900,1.2),tvSet(t,1))+yuma({x:960,y:1600,s:1.1,expr:t<tAn?'surprised':'happy',aL:70,aR:70,blink:blinkAt(t,3)});s+=checkAt(t,at('nggak merusak'),V(1240,1400),640,1.0);}
  else s+=popAt(t,tC,eyeBall(t,1,true),960,1000,2.0);
  return s;},
 labels:[{at:at('perhimpunan'),txt:'DOKTER MATA AMERIKA',bg:'#2C8FC4',until:at('nggak merusak')},{at:at('nggak merusak'),txt:'TIDAK MERUSAK MATA',bg:'#3BB273',until:tAn},{at:tAn,txt:'anak kuat fokus dekat',bg:'#5B6C8F',size:V(54,50),until:tC},{at:tC,txt:'cuma bikin CAPEK',bg:'#F4C542',fill:OL}],
 src:'Sumber: American Academy of Ophthalmology',c0:[960,1050,1.05],c1:[960,980,1.0]});
const tKt=at('keturunan'),tMd=at('melihat'),tKr=at('kurang main');
sFact({t0:b2,t1:b3,bg:'#2A1F2B',glow:'#8E3B4F',
 world:t=>{let s=popAt(t,b2+0.1,eyeBall(t,1,false),960,720,1.0);const xs=[V(620,560),960,V(1300,1360)];
  s+=popAt(t,tKt,person(-50,0,1.1,'#E8505B')+person(60,30,0.8,'#F2A541'),xs[0],1220,1.0);
  s+=popAt(t,tMd,tvSet(t,1),xs[1],1150,0.4);
  s+=popAt(t,tKr,sun(t,1),xs[2],1130,0.65)+xAt(t,tKr+0.4,xs[2],1130,0.8);
  return s;},
 labels:[{at:b2+0.1,txt:'MATA MINUS MAKIN BANYAK',bg:'#E5383B',size:V(52,52),until:tKt},{at:tKt,txt:'1. KETURUNAN',bg:'#5B6C8F',until:tMd},{at:tMd,txt:'2. LIHAT DEKAT KELAMAAN',bg:'#5B6C8F',size:V(52,52),until:tKr},{at:tKr,txt:'3. KURANG MAIN DI LUAR',bg:'#E8505B',size:V(52,52)}],c0:[960,980,1.0],c1:[960,960,1.08]});
const t40=at('empat puluh'),t30=at('30'),t39=at('39');
sFact({t0:b3,t1:b4,bg:'#16343F',glow:'#2E7E8F',
 world:t=>{let s='';const xs=[V(720,660),V(1200,1260)],base=1150,v=[30.4,39.5],c=['#3BB273','#E5383B'],nm=['+40 menit di luar','tanpa tambahan'];
  s+=popAt(t,t40,sun(t,1),V(720,660),640,0.45);
  for(let i=0;i<2;i++){const tt=i?t39:t30;const gh=clamp((t-tt+0.3)/0.7);const h=v[i]*V(12,10)*eout(gh);
   if(gh>0)s+=`<rect x="${xs[i]-90}" y="${fmt(base-h)}" width="180" height="${fmt(h)}" rx="14" fill="${c[i]}" stroke="${OL}" stroke-width="6"/>`+bigText(String(v[i]).replace('.',',')+'%',xs[i],fmt(base-h-30),64,{font:'Inter',sw:10,op:fadeIn(t,tt,.3)})+g(tr(xs[i],base+70,1),label(nm[i],{size:V(36,40),bg:c[i]}));}
  return s;},
 labels:[{at:b3+0.1,txt:'GUANGZHOU, 2015',bg:'#5B6C8F',until:t30},{at:t30,txt:'kasus mata minus baru',bg:'#F4C542',fill:OL,size:V(52,50)}],
 src:'Sumber: He dkk., JAMA (2015)'});
sPlot({t0:b4,t1:b5,bg:'#1E4A2A',glow:'#9CD08A',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';return `<g opacity="${fmt(fadeIn(t,p0,.5))}">${park()}</g>`+popAt(t,at('cahaya'),sun(t,1),V(1220,1400),620,0.8)+yuma({x:V(860,800),y:1500,s:1.1*popS(t,p0+0.2,.5),expr:'happy',aL:70,aR:-60+Math.sin(t*6)*10,blink:blinkAt(t,7)})+popAt(t,at('jauh'),eyeBall(t,1,false),V(1160,1240),980,0.45);},
 labels:[{at:at('bukan jarak'),txt:'BUKAN JARAK TV',bg:'#E5383B',until:at('cahaya')},{at:at('cahaya'),txt:'CAHAYA MATAHARI + LIHAT JAUH',bg:'#3BB273',size:V(46,50)}]});
sCheck({t0:b5,t1:b6,title:'Aturan 20-20-20',items:[['Tiap 20 menit',at('Tiap 20')],['Lihat 6 meter',at('meter')],['Selama 20 detik',at('detik')],['Main di luar',at('ajak')]],label:'JADI GINI'});
sCTA({t0:b6,t1:E,ln:'TIM NONTON MEPET',ls:'TIM MEPET',rn:'TIM DUDUK JAUH',rs:'TIM JAUH',lp:t=>g('scale(.5)',tvSet(t,1)),rp:t=>sun(t,0.8),aAt:at('mepet',b6),bAt:at('duduk',b6),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#2C8FC4',rc:'#3BB273'});
}
const THUMB={t:1.4,lines:['MASA SIH','DEKAT TV BIKIN','MATA MINUS?']};
