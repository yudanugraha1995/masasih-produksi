// ===== Masa Sih Keretekin Jari Bikin Radang Sendi? =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Bunyi krek')-0.15, b2=at('Ada dokter')-0.15, b3=at('Penelitian lain')-0.15, b4=at('Plot')-0.2, b5=at('Jadi boleh')-0.15, b6=at('Kamu tim')-0.15;
const tKr=at('keretekin');
sHook({t0:0,t1:bc,key:'RADANG SENDI?',keyAt:at('radang'),keySize:82,prop:t=>hand(t,1,{crack:t>tKr?clamp(1-((t-tKr)%0.8)/0.8):0}),ps:1.5,py:1100,bg:'#2A1F2B',glow:'#8E3B4F',particle:(t,i)=>gasBubble(t,0.4),surpriseAt:at('radang')});
sCard({t0:bc,t1:b1,lines:['MASA SIH','KERETEKIN JARI','BIKIN RADANG?'],yukAt:at('Yuk'),hold:t=>g('scale(.25)',hand(t,1))});
const tGb=at('gelembung');
sFact({t0:b1,t1:b2,bg:'#3B3A7A',glow:'#6E6CC4',grid:true,
 world:t=>{let s=`<g transform="translate(960,1000) scale(1.6)"><rect x="-200" y="-50" width="180" height="100" rx="50" fill="#F3C9A8" stroke="${OL}" stroke-width="7"/><rect x="20" y="-50" width="180" height="100" rx="50" fill="#F3C9A8" stroke="${OL}" stroke-width="7"/><ellipse cx="0" cy="0" rx="50" ry="${fmt(36+10*ss((t-at('ditarik'))/0.6))}" fill="#BFE6F7" opacity=".7" stroke="${OL}" stroke-width="5"/></g>`;
  if(t>tGb)for(let i=0;i<4;i++)s+=popAt(t,tGb+i*0.1,gasBubble(t,1),960+(i-1.5)*40,1000+((i%2)?-20:20),0.8);
  if(t>at('bunyi',tGb))s+=popAt(t,at('bunyi',tGb),`<text font-family="B2" font-weight="800" font-size="110" fill="#FFE27A" stroke="${OL}" stroke-width="12" paint-order="stroke" text-anchor="middle">KREK!</text>`,960,720,1);
  return s;},
 labels:[{at:at('cairan'),txt:'CAIRAN PELUMAS SENDI',bg:'#2C8FC4',until:at('tekanannya')},{at:at('tekanannya'),txt:'TEKANAN TURUN',bg:'#5B6C8F',until:tGb},{at:tGb,txt:'GELEMBUNG GAS = BUNYI',bg:'#F4C542',fill:OL,size:V(48,52)}],src:'Ilustrasi disederhanakan'});
const t60=at('enam puluh'),tSm=at('sama-sama');
sFact({t0:b2,t1:b3,bg:'#16343F',glow:'#2E7E8F',
 world:t=>{let s='';if(t<t60)s+=yuma({x:960,y:1500,s:1.2,expr:'think',aL:70,aR:120,blink:blinkAt(t,2)});if(t<at('kiri'))s+=bigNum(t,t60,'60+ TAHUN','satu dokter, satu percobaan',960,950,{size:150});
  else{s+=popAt(t,at('kiri'),hand(t,1,{crack:clamp(1-((t*1.3)%1))}),V(720,640),1050,0.8)+popAt(t,at('kanannya'),hand(t,1,{}),V(1200,1280),1050,0.8)+popAt(t,at('kiri'),label('KIRI: DIKERETEK',{size:40,bg:'#E8505B'}),V(720,640),1350,1)+popAt(t,at('kanannya'),label('KANAN: NGGAK',{size:40,bg:'#5B6C8F'}),V(1200,1280),1350,1);
   if(t>tSm)s+=checkAt(t,tSm,V(720,640),760,0.9)+checkAt(t,tSm+0.15,V(1200,1280),760,0.9);}
  return s;},
 labels:[{at:at('Donald'),txt:'DR. DONALD UNGER',bg:'#5B6C8F',until:tSm},{at:tSm,txt:'DUA-DUANYA SEHAT',bg:'#3BB273',until:at('Ig')},{at:at('Ig'),txt:'PENGHARGAAN IG NOBEL',bg:'#F4C542',fill:OL}],
 src:'Sumber: Unger, Arthritis & Rheumatism (1998)'});
sFact({t0:b3,t1:b4,bg:'#14301F',glow:'#3BB273',
 world:t=>{let s='';for(let i=0;i<12;i++)s+=popAt(t,at('ratusan')+i*0.05,person(0,0,1,['#E8505B','#5B6C8F','#F2A541','#3BB273'][i%4]),V(600,560)+(i%6)*V(72,160),980+Math.floor(i/6)*220,V(0.7,0.9));
  if(t>at('hubungan'))s+=xAt(t,at('hubungan')+0.2,960,800,1.3);return s;},
 labels:[{at:at('ratusan'),txt:'RATUSAN ORANG DITELITI',bg:'#5B6C8F',size:V(50,52),until:at('hubungan')},{at:at('hubungan'),txt:'TIDAK ADA HUBUNGAN',bg:'#3BB273'}],
 src:'Sumber: deWeber dkk., J Am Board Fam Med (2011)'});
sPlot({t0:b4,t1:b5,bg:'#2A1F2B',glow:'#E5383B',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';let s=popAt(t,p0,hand(t,1,{}),960,1050,1.1);
  if(t>at('nyeri',b4))s+=`<circle cx="960" cy="${V(830,830)}" r="${fmt(90+20*Math.sin(t*6))}" fill="#E5383B" opacity=".35"/>`+popAt(t,at('nyeri',b4),label('NYERI / BENGKAK',{size:54,bg:'#E5383B'}),960,1450,1);
  return s;},
 labels:[{at:at('bukan bunyinya'),txt:'BUKAN BUNYINYA',bg:'#5B6C8F',until:at('nyeri',b4)},{at:at('tanda'),txt:'TANDA MASALAH LAIN',bg:'#E5383B'}]});
sCheck({t0:b5,t1:b6,title:'Keretekin jari:',items:[['Jangan dipaksa',at('dipaksa')],['Sakit? Berhenti',at('berhenti')],['Rajin peregangan',at('peregangan')]],hold:t=>g('scale(.25)',hand(t,1)),label:'BOLEH, ASAL...'});
sCTA({t0:b6,t1:E,ln:'TIM HOBI KRETEK',ls:'TIM KRETEK',rn:'TIM NGILU',rs:'TIM NGILU',lp:t=>hand(t,0.6,{crack:1}),rp:t=>yuma({x:0,y:120,s:0.5,expr:'worried',aL:70,aR:70,blink:false}),aAt:at('hobi'),bAt:at('ngilu'),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#8E3B4F',rc:'#2C8FC4'});
}
const THUMB={t:2.0,lines:['MASA SIH','KERETEKIN JARI','BIKIN RADANG?']};
