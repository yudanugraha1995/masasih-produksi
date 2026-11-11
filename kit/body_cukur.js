// ===== Masa Sih Cukur Bulu Bikin Makin Tebal? =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Bulu tumbuh')-0.15, b2=at('Penelitian soal')-0.15, b3=at('Terus kenapa')-0.15, b4=at('Plot')-0.2, b5=at('Tapi hati')-0.15, b6=at('Kamu tim')-0.15;
sHook({t0:0,t1:bc,key:'MAKIN TEBAL?',keyAt:at('tebal'),keySize:86,prop:t=>razor(1),ps:1.5,py:1000,bg:'#16343F',glow:'#5DB7EA',particle:(t,i)=>`<path d="M0,-20Q8,0 0,20" stroke="#2E2430" stroke-width="6" fill="none"/>`,surpriseAt:at('tebal')});
sCard({t0:bc,t1:b1,lines:['MASA SIH','CUKUR BULU BIKIN','MAKIN TEBAL?'],yukAt:at('Yuk'),hold:t=>g('scale(.3)',razor(1))});
const tDc=at('dicukur');
sFact({t0:b1,t1:b2,bg:'#3B3A7A',glow:'#6E6CC4',grid:true,
 world:t=>{let s=g(tr(960,1150,V(1.6,1.9)),hairs(t,1,t>tDc+0.4?1:0));
  if(t>tDc&&t<tDc+1.2)s+=g(tr(lerp(V(500,400),V(1400,1500),clamp((t-tDc)/1)),980,0.8,-90),razor(1));
  if(t>at('tersentuh'))s+=checkAt(t,at('tersentuh'),V(1300,1400),640,1.0);
  return s;},
 labels:[{at:at('folikel'),txt:'AKAR = FOLIKEL',bg:'#5B6C8F',until:at('terpotong')},{at:at('terpotong'),txt:'YANG KEPOTONG CUMA BATANG',bg:'#F2A541',size:V(44,50),until:at('tersentuh')},{at:at('tersentuh'),txt:'AKAR NGGAK KESENTUH',bg:'#3BB273'}],src:'Ilustrasi disederhanakan',c0:[960,1050,1.05],c1:[960,1000,1.0]});
sFact({t0:b2,t1:b3,bg:'#16343F',glow:'#2E7E8F',
 world:t=>{let s=bigNum(t,at('1928'),'1928','penelitian pertama',960,800,{size:200});
  [['TEBAL',at('ketebalan')],['WARNA',at('warna')],['KECEPATAN',at('kecepatan')]].forEach(([x,tt],i)=>{s+=popAt(t,tt,label(x+': SAMA',{size:46,bg:'#3BB273'}),960,V(1080,1060)+i*V(120,110),1,i%2?3:-3);});
  return s;},
 labels:[{at:at('Mayo'),txt:'MAYO CLINIC SETUJU',bg:'#2C8FC4'}],src:'Sumber: Trotter, Anatomical Record (1928); Mayo Clinic'});
const tTp=at('tumpul');
sFact({t0:b3,t1:b4,bg:'#2A1F2B',glow:'#8E3B4F',
 world:t=>{let s='';const tip=(x,blunt)=>`<g transform="translate(${x},900) scale(3)"><path d="M-14,160L-14,${blunt?-60:-40}${blunt?'L14,-60':'Q0,-140 14,-40'}L14,160Z" fill="#2E2430"/></g>`;
  s+=(t>b3+0.1?tip(V(720,660),false):'')+(t>tTp?tip(V(1200,1260),true):'');
  if(t>b3+0.1)s+=g(tr(V(720,660),1330,1),label('BELUM DICUKUR',{size:40,bg:'#5B6C8F'}));
  if(t>tTp)s+=g(tr(V(1200,1260),1330,1),label('SESUDAH DICUKUR',{size:40,bg:'#E8505B'}));
  return s;},
 labels:[{at:at('runcing'),txt:'UJUNG RUNCING & HALUS',bg:'#5B6C8F',size:V(48,52),until:tTp},{at:tTp,txt:'UJUNG TUMPUL = KASAR',bg:'#E8505B',size:V(48,52)}],src:'Ilustrasi disederhanakan'});
sPlot({t0:b4,t1:b5,bg:'#16343F',glow:'#5DB7EA',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';return popAt(t,p0,hairs(t,1,1),960,1150,V(1.5,1.8))+xAt(t,at('bertambah'),V(1300,1400),700,1.0);},
 labels:[{at:at('bertambah'),txt:'NGGAK BERTAMBAH TEBAL',bg:'#3BB273',until:at('ujungnya',b4)},{at:at('ujungnya',b4),txt:'CUMA UJUNGNYA BERUBAH',bg:'#F2A541',size:V(48,52)}]});
sCheck({t0:b5,t1:b6,title:'Cukur yang benar:',items:[['Pisau tajam',at('pisau')],['Basahi kulit',at('basahi')],['Searah bulu',at('searah')]],hold:t=>g('scale(.3)',razor(1)),label:'BIAR NGGAK IRITASI'});
sCTA({t0:b6,t1:E,ln:'TIM RAJIN CUKUR',ls:'TIM CUKUR',rn:'TIM BIARIN AJA',rs:'TIM BIARIN',lp:t=>razor(0.9),rp:t=>hairs(t,0.5,0),aAt:at('rajin'),bAt:at('biarin'),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#2C8FC4',rc:'#5B3A2A'});
}
const THUMB={t:2.0,lines:['MASA SIH','CUKUR BULU BIKIN','MAKIN TEBAL?']};
