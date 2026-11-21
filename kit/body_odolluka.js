// ===== Luka Bakar Dikasih Odol? Masa Sih Ampuh? ===== NEWFX B21FX
mkTrend({key:'DIOLES ODOL?',keyWord:'odol',hook:t=>flame(t,1.2),bg:'#3A1616',glow:'#E5383B',card:['LUKA BAKAR','DIKASIH ODOL','AMPUH?'],
 sec:[{k:'fact',at:'Faktanya',it:[['odol',t=>emo('ODOL',1.2,'#fff'),'T'],['panas',t=>flame(t,1),'C'],['iritasi',t=>bacterium(0.9,'#7BC96F',0,'evil',t),'BR']],lb:[['Faktanya','ODOL MALAH MEMPERPARAH','r'],['panas','PANAS TERTAHAN DI DALAM','r']]},
  {k:'fact',at:'Mentega',it:[['Mentega',t=>butterBar(0.9),'L'],['kecap',t=>sachet(0.5,'KECAP','#3A2A16'),'R'],['minyak',t=>oilDrop(1.2),'B']],lb:[['Mentega','MENTEGA, KECAP, MINYAK: JANGAN!','r']]},
  {k:'plot',at:'Plot',it:[['air mengalir',t=>shower(t,1.4),'C'],['dua puluh',t=>clockFace(t,0.9,6),'R']],lb:[['air mengalir','AIR MENGALIR 20 MENIT','g'],['bukan air es','BUKAN AIR ES!','r']],src:'Sumber: WHO, Burns fact sheet'},
  {k:'check',at:'Biar aman',title:'Pertolongan:',items:[['Lepas cincin','cincin'],['Tutup kain bersih','kain'],['Jangan pecahkan lepuh','lepuhnya'],['Luas? Ke dokter','dokter']],label:'JADI GINI'}],
 cta:{at:'Kamu pernah',l:'PERNAH',ls:'PERNAH',r:'BELUM',rs:'BELUM',lp:t=>emo('ODOL',0.8,'#fff'),rp:t=>shower(t,0.5),aw:'pernah',bw:'panas'}});
const THUMB={t:1.5,lines:['LUKA BAKAR','DIKASIH ODOL','AMPUH?']};
