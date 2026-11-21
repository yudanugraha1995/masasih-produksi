// ===== Roti Garam Lagi Viral? Masa Sih Bikin Darah Tinggi? ===== NEWFX B21FX
{const E=DUR+0.2;
const bc=at('Tapi masa')-0.1,b1=at('Faktanya')-0.15,b2=at('WHO')-0.15,b3=at('Plot')-0.15,b4=at('Jadi boleh')-0.15,b6=at('Kamu udah')-0.15;
sHook({t0:0,t1:bc,key:'LAGI VIRAL!',keyAt:at('viral'),keySize:100,prop:t=>saltBread(t,1),ps:1.5,py:1150,bg:'#3A2A16',glow:'#F2A541',
 particle:(t,i)=>`<rect width="18" height="18" rx="4" fill="#fff" opacity=".8"/>`,surpriseAt:at('antreannya'),extra:t=>popAt(t,at('antreannya'),label('ANTRE PANJANG',{size:60,bg:'#E8505B'}),960,1450,1)});
sCard({t0:bc,t1:b1,lines:['ROTI GARAM','BIKIN DARAH','TINGGI?'],yukAt:at('tinggi'),hold:t=>g('scale(.4)',saltBread(t,1))});
sFact({t0:b1,t1:b2,bg:'#14301F',glow:'#3BB273',
 world:t=>popAt(t,b1+0.2,saltBread(t,1.5),960,1150,1)+popAt(t,at('mentega'),butterBar(1.1),V(1080,1250),850,1,-8)+popAt(t,at('garam kasar'),saltShaker(0.8),V(830,640),860,1,10)+popAt(t,at('lemak'),oilDrop(1.3),V(1100,1250),1420,1),
 labels:[{at:b1+0.1,txt:'ADONAN + MENTEGA',bg:'#F2A541',fill:OL,until:at('Jadi ada')},{at:at('Jadi ada'),txt:'GARAM ADONAN + TABURAN',bg:'#E5383B',until:at('lemak')},{at:at('lemak'),txt:'PLUS LEMAK MENTEGA',bg:'#E5383B'}]});
sFact({t0:b2,t1:b3,bg:'#3B3A7A',glow:'#6E6CC4',grid:true,
 world:t=>bigNum(t,at('lima'),'5 g','garam per HARI',960,1000,{size:200})+popAt(t,at('sendok'),saltShaker(1),960,1400,1),
 labels:[{at:b2+0.1,txt:'SARAN WHO',bg:'#5B6C8F',until:at('kira-kira')},{at:at('kira-kira'),txt:'= KIRA-KIRA 1 SENDOK TEH',bg:'#F2A541',fill:OL}],src:'Sumber: WHO, Salt reduction'});
sPlot({t0:b3,t1:b4,bg:'#3A1616',glow:'#E5383B',
 world:t=>{const p0=b3+1.6;if(t<p0)return '';const lv=t<at('Yang bahaya')?0.25:Math.min(0.95,0.25+0.12*[at('roti',b3+3),at('mi'),at('kecap'),at('saus'),at('camilan')].filter(x=>t>x).length);
  let s=popAt(t,p0,bpGauge(t,1.1,lv),960,850,1);s+=popAt(t,at('roti',b3+3),saltBread(t,0.45),V(790,640),1230,1)+popAt(t,at('mi'),noodleBowl(t,0.5),V(960,960),1230,1)+popAt(t,at('kecap'),sachet(0.45,'KECAP','#3A2A16'),V(1130,1250),1230,1)+popAt(t,at('saus'),sachet(0.45,'SAUS','#E5383B'),V(870,800),1420,1)+popAt(t,at('camilan'),chipsBag(0.45,'ASIN'),V(1060,1120),1420,1);return s;},
 labels:[{at:at('satu roti'),txt:'1 ROTI NGGAK LANGSUNG BAHAYA',bg:'#3BB273',size:V(46,52),until:at('Yang bahaya')},{at:at('Yang bahaya'),txt:'TOTAL GARAM HARIANMU!',bg:'#E5383B'}]});
sCheck({t0:b4,t1:b6,title:'Boleh jajan:',items:[['Sesekali aja',at('sesekali')],['Air putih',at('air putih')],['Sayur & buah',at('sayur')]],hold:t=>g('scale(.35)',saltBread(t,1)),label:'JADI GINI'});
sCTAsub({t0:b6,t1:E,ln:'UDAH NYOBA',ls:'UDAH',rn:'BELUM NYOBA',rs:'BELUM',lp:t=>saltBread(t,0.5),rp:t=>`<text y="40" text-anchor="middle" font-family="B2" font-weight="800" font-size="160" fill="#fff">?</text>`,aAt:at('udah'),bAt:at('belum'),vsAt:at('garam',b6),commentAt:at('Tulis'),subAt:at('subscribe'),lc:'#F2A541',rc:'#5DB7EA'});
}
const THUMB={t:1.5,lines:['ROTI GARAM','BIKIN DARAH','TINGGI?']};
