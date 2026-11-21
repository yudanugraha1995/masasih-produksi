// ===== Nasi Dipanasin Berkali-kali? Masa Sih Bisa Jadi Racun? ===== NEWFX B21FX
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1,b1=at('Beras')-0.15,b2=at('Kalau nasi')-0.15,b3=at('Masalahnya')-0.15,b4=at('Plot')-0.15,b5=at('Biar aman')-0.15,b6=at('Kamu tim')-0.15;
sHook({t0:0,t1:bc,key:'DIPANASIN LAGI?',keyAt:at('besoknya'),keySize:92,prop:t=>riceBowl(t,1,{steam:true}),ps:1.6,py:1100,bg:'#3A2A16',glow:'#F2A541',
 particle:(t,i)=>flame(t,0.35),surpriseAt:at('besoknya'),extra:t=>popAt(t,at('besoknya'),flame(t,0.8),V(1150,1350),1350,1)});
sCard({t0:bc,t1:b1,lines:['NASI DIPANASIN','BERKALI-KALI','JADI RACUN?'],yukAt:at('Ternyata'),hold:t=>g('scale(.35)',riceBowl(t,1,{steam:true}))});
sFact({t0:b1,t1:b2,bg:'#14301F',glow:'#3BB273',
 world:t=>{let s=g(tr(960,1200,1.5),riceBowl(t,1));for(let i=0;i<5;i++)s+=popAt(t,at('spora')+i*0.15,spore(t,1.7),V(780,700)+i*V(100,130),820+(i%2)*130,1);
  if(t>at('Spora ini'))s+=popAt(t,at('tahan'),flame(t,1.2),V(860,960),1480,1)+popAt(t,at('nggak mati'),shield(0.8),V(1090,1250),1430,1);return s;},
 labels:[{at:b1+0.1,txt:'SPORA BACILLUS CEREUS',bg:'#3BB273',until:at('Spora ini')},{at:at('Spora ini'),txt:'SPORA TAHAN PANAS!',bg:'#E5383B'}],src:'Sumber: FSA UK & NHS, Bacillus cereus pada nasi'});
sFact({t0:b2,t1:b3,bg:'#3B3A7A',glow:'#6E6CC4',grid:true,
 world:t=>{let s=g(tr(V(900,640),1200,1.3),riceBowl(t,1))+popAt(t,at('berjam-jam'),clockFace(t,1.2,8),V(1080,1250),860,1);
  if(t>at('sporanya'))s+=bacteriaSwarm(t,7,V(940,640),1100,200,at('sporanya'));
  s+=popAt(t,at('menghasilkan'),poisonDrop(1.4),V(1080,1250),1380,1);return s;},
 labels:[{at:b2+0.1,txt:'DIBIARKAN DI SUHU RUANG',bg:'#F2A541',fill:OL,until:at('sporanya')},{at:at('sporanya'),txt:'BAKTERI TUMBUH + RACUN',bg:'#E5383B'}]});
sFact({t0:b3,t1:b4,bg:'#2A1F2B',glow:'#8E3B4F',
 world:t=>{let s=popAt(t,b3+0.2,poisonDrop(2.4),960,1050,1)+popAt(t,at('tahan panas',b3),flame(t,1.5),960,1430,1);
  if(t>at('nggak hilang'))s+=xAt(t,at('dipanasin ulang'),960,1250,1.6);return s;},
 labels:[{at:b3+0.1,txt:'RACUNNYA TAHAN PANAS',bg:'#E5383B',until:at('dipanasin ulang')},{at:at('dipanasin ulang'),txt:'DIPANASIN ULANG = TETAP ADA',bg:'#E5383B',size:V(52,56)}]});
sPlot({t0:b4,t1:b5,bg:'#3A1616',glow:'#E5383B',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';let s=g(tr(V(900,640),1100,1.4),riceBowl(t,1))+popAt(t,at('kelamaan'),clockFace(t,1.1,10),V(1090,1250),860,1);
  if(t>at('Gejalanya'))s+=popAt(t,at('mual'),sweatFace(t,1.3),V(1060,1250),1370,1)+popAt(t,at('diare'),toilet(0.75),V(830,640),1480,1);return s;},
 labels:[{at:at('bukan'),txt:'MASALAHNYA: KELAMAAN DI LUAR',bg:'#F2A541',fill:OL,size:V(46,52),until:at('Gejalanya')},{at:at('Gejalanya'),txt:'MUAL, MUNTAH, DIARE',bg:'#E5383B'}]});
sCheck({t0:b5,t1:b6,title:'Biar aman:',items:[['Kulkas < 1 jam',at('kulkas')],['Panaskan 1x saja',at('cukup sekali')],['Sampai panas merata',at('benar-benar')]],hold:t=>g('scale(.35)',riceBowl(t,1,{cold:true})),label:'JADI GINI',src:'Sumber: NHS, Rice and food poisoning'});
sCTAsub({t0:b6,t1:E,ln:'TIM NASI SISA',ls:'NASI SISA',rn:'TIM MASAK BARU',rs:'MASAK BARU',lp:t=>riceBowl(t,0.6,{cold:true}),rp:t=>riceBowl(t,0.6,{steam:true}),aAt:at('nasi sisa',b6),bAt:at('masak',b6),vsAt:at('atau',b6),commentAt:at('Tulis'),subAt:at('subscribe'),lc:'#5DB7EA',rc:'#F2A541'});
}
const THUMB={t:1.5,lines:['NASI DIPANASIN','BERKALI-KALI','JADI RACUN?']};
