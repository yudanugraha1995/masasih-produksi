// ===== Masa Sih Makan Wortel Bikin Mata Tajam? =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Wortel memang')-0.15, b2=at('Tapi kalau vitamin')-0.15, b3=at('Terus mitos')-0.15, b4=at('Plot')-0.2, b5=at('Jadi tetap')-0.15, b6=at('Kamu tim')-0.15;
sHook({t0:0,t1:bc,key:'MATA TAJAM?',keyAt:at('tajam'),prop:t=>carrot(1,-15),ps:1.6,py:1050,bg:'#3A2A16',glow:'#F2913D',particle:(t,i)=>carrot(0.25,i*40),surpriseAt:at('pilot'),
 extra:t=>popAt(t,at('pilot'),plane(1),V(1150,1300),640,0.6)});
sCard({t0:bc,t1:b1,lines:['MASA SIH','WORTEL BIKIN','MATA TAJAM?'],yukAt:at('Yuk'),hold:t=>g('scale(.3)',carrot(1))});
sFact({t0:b1,t1:b2,bg:'#14301F',glow:'#3BB273',
 world:t=>{let s=popAt(t,b1+0.1,carrot(1),V(700,620),1050,1.1);
  s+=popAt(t,at('vitamin'),`<circle r="90" fill="#F4C542" stroke="${OL}" stroke-width="7"/><text y="30" text-anchor="middle" font-family="Inter" font-weight="800" font-size="90" fill="${OL}">A</text>`,960,800,1);
  s+=popAt(t,at('penting'),eyeBall(t,1,false),V(1220,1300),1050,0.9);
  if(t>at('rabun'))s+=`<rect width="1920" height="1920" fill="#000" opacity="${fmt(0.35*fadeIn(t,at('rabun')))}"/>`;
  return s;},
 labels:[{at:at('beta'),txt:'BETA KAROTEN',bg:'#F2913D',until:at('vitamin')},{at:at('vitamin'),txt:'JADI VITAMIN A',bg:'#F4C542',fill:OL,until:at('rabun')},{at:at('rabun'),txt:'KURANG = RABUN SENJA',bg:'#E5383B'}]});
sFact({t0:b2,t1:b3,bg:'#16343F',glow:'#2E7E8F',
 world:t=>{let s=popAt(t,b2+0.1,eyeBall(t,1,false),960,900,1.6);
  for(let i=0;i<5;i++)s+=popAt(t,at('sebanyak')+i*0.08,carrot(0.5,-20+i*10),V(560,480)+i*V(200,240),1400,1);
  if(t>at('melebihi'))s+=xAt(t,at('melebihi')+0.2,960,900,1.2);return s;},
 labels:[{at:at('cukup'),txt:'SUDAH CUKUP? NGGAK JADI SUPER',bg:'#5B6C8F',size:V(40,48),until:at('minus')},{at:at('minus'),txt:'MATA MINUS NGGAK SEMBUH',bg:'#E5383B',size:V(46,50)}]});
const tRd=at('radar');
sFact({t0:b3,t1:b4,bg:'#141A3A',glow:'#5B6C8F',
 world:t=>{let s=moonNight();if(t<at('Supaya'))s+=popAt(t,tRd,radar(t,1),960,1000,1.4)+g(tr(lerp(400,1500,(t*0.15)%1),620,0.6,-6),plane(1));
  else{s+=g(tr(lerp(400,1500,(t*0.15)%1),700,0.8,-6),plane(1))+popAt(t,at('wortel',at('Supaya')),carrot(1),960,1150,1.2);}
  return s;},
 labels:[{at:at('Perang'),txt:'PERANG DUNIA II',bg:'#5B6C8F',until:tRd},{at:tRd,txt:'INGGRIS PUNYA RADAR RAHASIA',bg:'#3BB273',size:V(42,48),until:at('menyebarkan')},{at:at('menyebarkan'),txt:'ALASAN PALSU: WORTEL!',bg:'#F2913D'}],
 src:'Sumber: Smithsonian Magazine (sejarah propaganda wortel RAF)'});
sPlot({t0:b4,t1:b5,bg:'#3A2A16',glow:'#F2913D',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';return popAt(t,p0,carrot(1),V(720,640),1050,1.1)+popAt(t,at('radar',b4),radar(t,1),V(1220,1300),1050,0.9);},
 labels:[{at:at('propaganda'),txt:'PROPAGANDA PERANG',bg:'#E5383B',until:at('radar',b4)},{at:at('radar',b4),txt:'UNTUK MENUTUPI RADAR',bg:'#3BB273'}]});
sCheck({t0:b5,t1:b6,title:'Jaga mata:',items:[['Makan wortel',at('wortel',b5)],['Sayur berwarna',at('sayur')],['Bukan mata super',at('jangan')]],hold:t=>g('scale(.3)',carrot(1)),label:'TETAP SEHAT'});
sCTA({t0:b6,t1:E,ln:'TIM WORTEL MENTAH',ls:'TIM MENTAH',rn:'TIM DIMASAK',rs:'TIM DIMASAK',lp:t=>carrot(0.9),rp:t=>noodleBowl(t,0.6,{}),aAt:at('mentah'),bAt:at('dimasak'),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#F2913D',rc:'#3BB273'});
}
const THUMB={t:2.0,lines:['MASA SIH','WORTEL BIKIN','MATA TAJAM?']};
