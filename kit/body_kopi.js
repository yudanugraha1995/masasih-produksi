// ===== Masa Sih Ngopi Bikin Dehidrasi? =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Kafein memang')-0.15, b2=at('Ada penelitian')-0.15, b3=at('Jadi kopi')-0.15, b4=at('Tapi tunggu')-0.15, b5=at('Plot')-0.2, b6=at('Jadi ngopi')-0.15, b7=at('Kamu tim')-0.15;
const drop=(c='#5DB7EA')=>`<path d="M0,-40C16,-16 28,-2 28,14C28,32 14,42 0,42C-14,42 -28,32 -28,14C-28,-2 -16,-16 0,-40Z" fill="${c}" stroke="${OL}" stroke-width="4"/>`;
sHook({t0:0,t1:bc,key:'DEHIDRASI?',keyAt:at('dehidrasi'),prop:t=>cupCoffee(t,1),ps:2.2,bg:'#2B1B14',glow:'#A3542A',particle:(t,i)=>`<ellipse rx="16" ry="11" fill="#7A4A2A" stroke="${OL}" stroke-width="3"/><path d="M-10,0Q0,-6 10,0" stroke="#3A2418" stroke-width="3" fill="none"/>`,surpriseAt:at('toilet'),
 extra:t=>popAt(t,at('toilet'),toilet(1),V(1280,1420),1400,0.75)});
sCard({t0:bc,t1:b1,lines:['MASA SIH','NGOPI BIKIN','DEHIDRASI?'],yukAt:at('Yuk'),hold:t=>g('scale(.35)',cupCoffee(t,1))});
const tEk=at('efeknya kecil');
sFact({t0:b1,t1:b2,bg:'#2B1B14',glow:'#A3542A',
 world:t=>{let s=popAt(t,b1+0.1,cupCoffee(t,1),960,1150,1.6);for(let i=0;i<4;i++){const ph=((t-b1)*0.7+i/4)%1;s+=g(tr(V(1240,1380)+i*0,700+ph*500,0.8),drop(),`opacity="${fmt(Math.sin(ph*Math.PI))}"`);}
  if(t>tEk)s+=popAt(t,tEk,`<text x="0" y="0" text-anchor="middle" font-family="Inter" font-weight="800" font-size="160" fill="#3BB273" stroke="#fff" stroke-width="10" paint-order="stroke">KECIL</text>`,960,700,1,-4);
  return s;},
 labels:[{at:at('diuretik'),txt:'DIURETIK = pengen pipis',bg:'#F4C542',fill:OL,size:V(54,52),until:tEk},{at:at('biasa'),txt:'apalagi yang biasa ngopi',bg:'#5B6C8F',size:V(52,50)}]});
const tH=at('Hasilnya'),tV=at('Volume');
sFact({t0:b2,t1:b3,bg:'#16343F',glow:'#2E7E8F',
 world:t=>{let s='';const xs=[V(720,620),V(1200,1300)];const lv=lerp(0.5,0.72,ss((t-b2)/3));
  s+=bodyWater(t,xs[0],1050,t>tH?0.72:lv,'#A3542A',0.9)+bodyWater(t,xs[1],1050,t>tH?0.72:lv,'#5DB7EA',0.9);
  s+=popAt(t,at('empat cangkir'),cupCoffee(t,1),xs[0],1400,0.45)+popAt(t,at('air putih',b2),glass('cold',t,1),xs[1],1420,0.8);
  if(t>tH)s+=popAt(t,tH+0.3,`<circle r="78" fill="#fff" stroke="${OL}" stroke-width="7"/><path d="M-36,-16L36,-16M-36,18L36,18" stroke="${OL}" stroke-width="16" stroke-linecap="round"/>`,960,900,1);
  return s;},
 labels:[{at:b2+0.1,txt:'PENELITIAN 2014',bg:'#5B6C8F',until:at('Lima')},{at:at('Lima'),txt:'50 PRIA, 4 CANGKIR/HARI',bg:'#F4C542',fill:OL,size:V(52,52),until:tH},{at:tH,txt:'CAIRAN TUBUH SAMA',bg:'#3BB273',until:tV},{at:tV,txt:'volume pipis mirip',bg:'#3BB273'}],
 src:'Sumber: Killer dkk., PLoS ONE (2014)',c0:[960,1080,1.02],c1:[960,1040,1.0]});
sFact({t0:b3,t1:b4,bg:'#CDEBF5',glow:'#fff',
 world:t=>popAt(t,b3+0.1,cupCoffee(t,1),V(740,680),1100,1.0)+popAt(t,b3+0.4,`<text x="0" y="40" text-anchor="middle" font-family="Inter" font-weight="800" font-size="140" fill="${OL}">+</text>`,960,1040,1)+popAt(t,b3+0.6,glass('cold',t,1),V(1180,1240),1160,1.4),
 labels:[{at:at('dihitung'),txt:'IKUT DIHITUNG CAIRAN',bg:'#3BB273'}]});
const tKa=at('Kafein berlebihan'),t400=at('empat ratus'),t4c=at('empat cangkir',b4);
sFact({t0:b4,t1:b5,bg:'#2A1F2B',glow:'#8E3B4F',
 world:t=>{let s='';if(t<tKa){s+=yuma({x:960,y:1500,s:1.3,expr:'think',aL:70,aR:120,blink:blinkAt(t,4)});}
  else if(t<t400){s+=popAt(t,tKa,heart(1,Math.abs(Math.sin(t*12))),V(760,700),980,1.0)+popAt(t,at('susah tidur'),`<circle r="90" fill="#F6E7A8"/><circle cx="34" cy="-20" r="80" fill="#2A1F2B"/>`,V(1180,1240),920,1.2);}
  else{s+=bigNum(t,t400,'400 mg','kafein per hari',960,800,{size:170});for(let i=0;i<4;i++)s+=popAt(t,t4c+i*0.12,cupCoffee(t,1),V(620,520)+i*V(230,290),1230,0.45);}
  return s;},
 labels:[{at:b4+0.1,txt:'TUNGGU DULU!',bg:'#F4C542',fill:OL,until:at('Penelitian ini')},{at:at('Penelitian ini'),txt:'pria, biasa ngopi, jumlah sedang',bg:'#5B6C8F',size:V(44,46),until:tKa},{at:tKa,txt:'DEBAR + SUSAH TIDUR',bg:'#E5383B',until:t400},{at:t400,txt:'BATAS AMAN DEWASA',bg:'#3BB273'}],
 src:'Sumber: FDA (batas 400 mg kafein/hari)',srcAt:t400});
sPlot({t0:b5,t1:b6,
 world:t=>{const p0=b5+1.6;if(t<p0)return '';let s=popAt(t,p0,toilet(1),960,1350,1.0);for(let i=0;i<5;i++)s+=popAt(t,at('minum',b5)+i*0.1,i%2?glass('cold',t,1):cupCoffee(t,1),V(600,520)+i*V(180,220),760,i%2?0.7:0.35);return s;},
 labels:[{at:at('minum',b5),txt:'MINUM CAIRANNYA BANYAK!',bg:'#3BB273',size:V(54,54)}]});
sCheck({t0:b6,t1:b7,title:'Ngopi aman:',items:[['Maks 4 cangkir',at('empat',b6)],['Tetap minum air',at('air putih',b6)]],hold:t=>g('scale(.3)',cupCoffee(t,1)),label:'JADI GINI'});
sCTA({t0:b7,t1:E,ln:'TIM KOPI HITAM',rn:'TIM KOPI SUSU',lp:t=>cupCoffee(t,1),rp:t=>cupCoffee(t,1,{milk:true}),aAt:at('hitam'),bAt:at('susu'),vsAt:at('atau',b7),commentAt:at('Tulis'),lc:'#3A2418',rc:'#C99A6B'});
}
const THUMB={t:2.2,lines:['MASA SIH','NGOPI BIKIN','DEHIDRASI?']};
