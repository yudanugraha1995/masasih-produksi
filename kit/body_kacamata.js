// ===== Pakai Kacamata Tiap Hari? Masa Sih Bikin Minus Makin Parah? ===== NEWFX B21FX
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1,b1=at('Faktanya')-0.15,b2=at('Minus bertambah')-0.15,b3=at('Justru')-0.15,b4=at('Plot')-0.15,b5=at('Pas main')-0.15,b6=at('Kamu minus')-0.15;
sHook({t0:0,t1:bc,key:'TIAP HARI?',keyAt:at('tiap'),keySize:100,prop:t=>glasses(1),ps:1.5,py:1080,bg:'#10263A',glow:'#5DB7EA',
 particle:(t,i)=>`<circle r="16" fill="#BFE6F7" opacity=".8"/>`,surpriseAt:at('minusnya'),extra:t=>popAt(t,at('minusnya'),label('MINUS MAKIN PARAH?',{size:52,bg:'#E5383B'}),960,1420,1)});
sCard({t0:bc,t1:b1,lines:['PAKAI KACAMATA','BIKIN MINUS','MAKIN PARAH?'],yukAt:at('sih',bc),hold:t=>g('scale(.45)',glasses(1))});
sFact({t0:b1,t1:b2,bg:'#14301F',glow:'#3BB273',
 world:t=>{let s=popAt(t,b1+0.2,eyeRay(t,1.15,0),960,1150,1)+popAt(t,at('membelokkan'),glasses(0.55),V(800,640),1150,1,90);
  if(t>at('nggak mengubah'))s+=checkAt(t,at('bentuk'),V(1120,1250),880,1.3);return s;},
 labels:[{at:b1+0.1,txt:'CAHAYA PAS DI RETINA',bg:'#3BB273',until:at('nggak mengubah')},{at:at('nggak mengubah'),txt:'BENTUK MATA NGGAK BERUBAH',bg:'#3BB273',size:V(52,56)}]});
sFact({t0:b2,t1:b3,bg:'#3B3A7A',glow:'#6E6CC4',grid:true,
 world:t=>{const lk=ss((t-at('memanjang'))/1.2);let s=popAt(t,b2+0.2,eyeRay(t,1.1,lk),960,1050,1)+popAt(t,at('anak'),label('ANAK & REMAJA',{size:64,bg:'#E8505B'}),960,1430,1);return s;},
 labels:[{at:b2+0.1,txt:'MINUS NAIK KARENA MATA TUMBUH',bg:'#F2A541',fill:OL,size:V(46,52)}],src:'Ilustrasi disederhanakan'});
sFact({t0:b3,t1:b4,bg:'#2A1F2B',glow:'#8E3B4F',
 world:t=>{let s=popAt(t,b3+0.2,glasses(1.3,t>at('kurang')),960,1050,1);if(t>at('bikin minus'))s+=popAt(t,at('bikin minus'),label('MINUS ANAK NAIK!',{size:60,bg:'#E5383B'}),960,1400,1);return s;},
 labels:[{at:b3+0.1,txt:'JUSTRU KEBALIKANNYA!',bg:'#E5383B',until:at('ukurannya')},{at:at('ukurannya'),txt:'UKURAN KACAMATA KURANG',bg:'#E5383B'}],src:'Sumber: Chung dkk., Vision Research (2002)'});
sPlot({t0:b4,t1:b5,bg:'#2B3A16',glow:'#7BC96F',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';return popAt(t,at('main di'),tree(1.3),V(830,600),1250,1)+popAt(t,at('main di')+0.2,person(0,0,2.6,'#E8505B'),V(1080,1250),1430,1)+popAt(t,at('Cahaya'),sun(t,0.9),V(1050,1250),760,1)+(t>at('mencegah')?checkAt(t,at('mencegah'),V(820,640),820,1.3):'');},
 labels:[{at:at('main di'),txt:'MAIN DI LUAR RUMAH',bg:'#3BB273',until:at('Cahaya')},{at:at('Cahaya'),txt:'CAHAYA MATAHARI BANTU CEGAH MINUS',bg:'#F2A541',fill:OL,size:V(40,50)}],src:'Sumber: American Academy of Ophthalmology'});
sCheck({t0:b5,t1:b6,title:'Pas main HP:',items:[['Tiap 20 menit',at('tiap dua')],['Lihat jauh 20 detik',at('selama')],['Kacamata ukuran pas',at('detik')+0.3]],hold:t=>g('scale(.3)',phone(t,1)),label:'ATURAN 20-20'});
sCTAsub({t0:b6,t1:E,ln:'MINUS DIKIT',ls:'MINUS < 2',rn:'MINUS BANYAK',rs:'MINUS > 2',lp:t=>glasses(0.45),rp:t=>glasses(0.6),aAt:at('minus',b6),bAt:at('berapa'),vsAt:at('berapa')+0.2,commentAt:at('Tulis'),subAt:at('subscribe'),lc:'#5DB7EA',rc:'#B47EDB'});
}
const THUMB={t:1.5,lines:['PAKAI KACAMATA','BIKIN MINUS','MAKIN PARAH?']};
