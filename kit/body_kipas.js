// ===== Masa Sih Tidur Pakai Kipas Semalaman Berbahaya? =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Mitos ini')-0.15, b2=at('Faktanya')-0.15, b3=at('Tapi ada')-0.15, b4=at('Plot')-0.2, b5=at('Jadi kalau')-0.15, b6=at('Kamu tim')-0.15;
sHook({t0:0,t1:bc,key:'KIPAS ANGIN?',keyAt:at('kipas'),keySize:86,prop:t=>elecFan(t,1,{wind:true}),ps:1.4,py:900,bg:'#10223A',glow:'#5DB7EA',particle:(t,i)=>`<path d="M-20,0q20,-14 40,0" stroke="#fff" stroke-width="8" fill="none" stroke-linecap="round"/>`,surpriseAt:at('meninggal')});
sCard({t0:bc,t1:b1,lines:['MASA SIH','TIDUR PAKAI KIPAS','BERBAHAYA?'],yukAt:at('Yuk'),hold:t=>g('scale(.25)',elecFan(t,1))});
const tFd=at('fan'),tOk=at('oksigen');
sFact({t0:b1,t1:b2,bg:'#141A3A',glow:'#5B6C8F',
 world:t=>{let s=moonNight()+popAt(t,b1+0.1,elecFan(t,1,{wind:true}),V(760,680),1000,1.1)+g(tr(V(1120,1300),1300,0.6),bed(0,0,1,lyingHead('worried',false)));
  if(t>tOk)for(let i=0;i<4;i++){const k=1-clamp((t-tOk-i*0.2)/1.2);s+=g(tr(V(1150,1240)+i*V(60,80),760-i*50,1.3*Math.max(k,0)),o2(1));}
  return s;},
 labels:[{at:at('Korea'),txt:'MITOS DI KOREA SELATAN',bg:'#5B6C8F',until:tFd},{at:tFd,txt:'"FAN DEATH"',bg:'#E5383B',until:tOk},{at:tOk,txt:'katanya oksigen habis',bg:'#F4C542',fill:OL}]});
const tMu=at('memutar'),tBk=at('Belum');
sFact({t0:b2,t1:b3,bg:'#16343F',glow:'#2E7E8F',grid:true,
 world:t=>{let s=popAt(t,b2+0.1,elecFan(t,1),960,980,1.1);
  for(let i=0;i<5;i++){const a=t*1.2+i*1.256;s+=g(tr(960+Math.cos(a)*V(380,520),940+Math.sin(a)*240,1.2*popS(t,tMu+i*0.1,.4)),o2(1));}
  if(t>tBk)s+=checkAt(t,tBk+0.3,V(1280,1400),620,1.1);
  return s;},
 labels:[{at:at('nggak menghabiskan'),txt:'OKSIGEN TIDAK HABIS',bg:'#3BB273',until:tMu},{at:tMu,txt:'cuma memutar udara',bg:'#2C8FC4',until:tBk},{at:tBk,txt:'BELUM ADA BUKTI ILMIAH',bg:'#3BB273',size:V(52,52)}],
 src:'Ilustrasi disederhanakan'});
const t35=at('tiga puluh'),tWho=at('Organisasi');
sFact({t0:b3,t1:b4,bg:'#3A1616',glow:'#E8505B',
 world:t=>{let s=popAt(t,b3+0.1,sun(t,1),V(1220,1380),640,0.9)+popAt(t,b3+0.1,thermo(t,1,0.3+0.6*ss((t-t35)/1.2)),V(700,600),1050,1.4);
  if(t>at('meniupkan'))s+=popAt(t,at('meniupkan'),elecFan(t,0.7,{wind:true}),V(1180,1300),1150,1);
  return s;},
 labels:[{at:b3+0.1,txt:'TAPI ADA CATATAN',bg:'#5B6C8F',until:t35},{at:t35,txt:'DI ATAS 35°C',bg:'#E5383B',until:tWho},{at:tWho,txt:'WHO: KIPAS SAJA NGGAK CUKUP',bg:'#E5383B',size:V(44,50)}],
 src:'Sumber: WHO Europe, Heat and health'});
const tMt=at('Mata');
sPlot({t0:b4,t1:b5,bg:'#10223A',glow:'#5DB7EA',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';let s=popAt(t,p0,elecFan(t,0.8,{wind:true}),V(640,560),1000,1)+g(tr(V(1100,1300),1350,0.6),bed(0,0,1,lyingHead(t>tMt?'worried':'sip',true)));
  if(t>tMt){const it=[['MATA KERING',tMt],['HIDUNG KERING',at('hidung')],['KULIT KERING',at('kulit')],['OTOT KAKU',at('otot')]];it.forEach(([x,tt],i)=>{s+=popAt(t,tt,label(x,{size:44,bg:'#E8505B'}),V(1200,1300),V(640,700)+i*V(90,80),1,i%2?3:-3);});}
  return s;},
 labels:[{at:at('bukan kipasnya'),txt:'ANGIN LANGSUNG SEMALAMAN',bg:'#E5383B',size:V(46,50)}]});
sCheck({t0:b5,t1:b6,title:'Tidur pakai kipas:',items:[['Arahkan ke dinding',at('dinding')],['Pakai mode putar',at('putar')],['Jaga jarak',at('dekat')],['Minum air cukup',at('minum')]],hold:t=>g('scale(.22)',elecFan(t,1)),label:'JADI GINI'});
sCTA({t0:b6,t1:E,ln:'TIM KIPAS NYALA',ls:'TIM KIPAS',rn:'TIM NGGAK BISA',rs:'TIM NGGAK BISA',lp:t=>elecFan(t,0.7,{}),rp:t=>g('scale(.5)',bed(0,0,1,lyingHead('worried',false))),aAt:at('kipas',b6),bAt:at('nggak bisa'),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#2C8FC4',rc:'#5B6C8F'});
}
const THUMB={t:2.0,lines:['MASA SIH','TIDUR PAKAI KIPAS','BERBAHAYA?']};
