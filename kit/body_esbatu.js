// ===== Es Batu Jajanan? Masa Sih Bikin Sakit Perut? ===== NEWFX B21FX
mkTrend({key:'ES PINGGIR JALAN?',keyWord:'pinggir',hook:t=>iceTea(t,1.2),bg:'#3A2A16',glow:'#F2A541',card:['ES BATU JAJANAN','BIKIN','SAKIT PERUT?'],
 sec:[{k:'fact',at:'Faktanya',it:[['dinginnya',t=>snowflake(),'L',2],['air mentah',t=>emo('AIR MENTAH',1,'#E5383B','#fff'),'R'],['E',t=>bacterium(1.2,'#7BC96F',0,'evil',t),'C']],lb:[['dinginnya','BUKAN KARENA DINGIN','y'],['air mentah','ES DARI AIR MENTAH','r'],['E','BAKTERI E. COLI','r']]},
  {k:'fact',at:'Bakteri ini',it:[['diare',t=>toilet(0.7),'L'],['sakit perut',t=>stomach(t,0.9,0.5),'R']],lb:[['Bakteri ini','DIARE & SAKIT PERUT','r']]},
  {k:'plot',at:'Plot',it:[['ikan',t=>goldfish(t,1),'C'],['minuman',t=>iceTea(t,0.7),'BR']],lb:[['es balok','ES BALOK BUAT IKAN!','r']]},
  {k:'check',at:'Biar aman',title:'Biar aman:',items:[['Es kristal pabrik','kristal'],['Atau air matang','matang'],['Cek kebersihan','kebersihan']],label:'JADI GINI'}],
 cta:{at:'Kamu tim',l:'ES PINGGIR JALAN',ls:'JAJAN',r:'BAWA SENDIRI',rs:'BAWA',lp:t=>iceTea(t,0.45),rp:t=>glassW(t,0.5,0.7),aw:'pinggir',bw:'bawa'}});
const THUMB={t:1.5,lines:['ES BATU JAJANAN','BIKIN','SAKIT PERUT?']};
