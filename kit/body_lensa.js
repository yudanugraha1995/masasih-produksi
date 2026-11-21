// NEWFX B21FX
mkTrend({key:'TIDUR PAKAI SOFTLENS?',keyWord:'softlens',keySize:76,hook:t=>eyeBall(t,1.3),bg:'#10263A',glow:'#5DB7EA',card:['TIDUR PAKAI','SOFTLENS','BAHAYA?'],
 sec:[{k:'fact',at:'Faktanya',it:[['oksigen',t=>o2(1),'R'],['Kornea',t=>eyeBall(t,1.2,true),'C']],lb:[['oksigen','MATA KURANG OKSIGEN','r']]},
  {k:'fact',at:'Risiko infeksi',it:[['infeksi',t=>bacterium(1,'#7BC96F',0,'evil',t),'C'],['satu kali',t=>emo('1 MALAM AJA BISA',0.9,'#E5383B','#fff'),'B']],lb:[['Risiko infeksi','RISIKO INFEKSI NAIK BERLIPAT','r']],src:'Sumber: CDC, Contact lens health'},
  {k:'plot',at:'Plot',it:[['amoeba',t=>bacterium(1.1,'#C77DDB',0,'evil',t),'C'],['air keran',t=>shower(t,0.8),'R']],lb:[['Acanthamoeba','ACANTHAMOEBA DARI AIR KERAN!','r']]},
  {k:'check',at:'Biar aman',title:'Biar aman:',items:[['Lepas sebelum tidur','lepas'],['Cuci tangan','cuci'],['Jangan pakai air keran','keran']],label:'JADI GINI'}],
 cta:{at:'Kamu pernah',l:'PERNAH',ls:'PERNAH',r:'NGGAK PERNAH',rs:'NGGAK',lp:t=>eyeBall(t,0.5,true),rp:t=>checkAt(t,0,0,0,1.3),aw:'pernah',bw:'softlens'}});
const THUMB={t:1.5,lines:['TIDUR PAKAI','SOFTLENS','BAHAYA?']};
