// ===== Minum Teh Habis Makan? Masa Sih Bikin Kurang Darah? ===== NEWFX B21FX
mkTrend({key:'KURANG DARAH?',keyWord:'kurang',hook:t=>cupCoffee(t,1,{col:'#F3F7FA'}),bg:'#3A2A16',glow:'#F2A541',card:['TEH HABIS MAKAN','BIKIN','KURANG DARAH?'],
 sec:[{k:'fact',at:'Faktanya',it:[['tanin',t=>teaLeaf(1),'L'],['zat besi',t=>emo('Fe',1.3,'#8E3B4F','#fff'),'R'],['sayur',t=>broccoli(0.9),'BL'],['kacang',t=>seed(1.2),'BR']],lb:[['tanin','TANIN IKAT ZAT BESI','r']],src:'Sumber: Hurrell dkk., Br J Nutr (1999)'},
  {k:'fact',at:'Akibatnya',it:[['zat besi',t=>bloodDrop(1.3),'C'],['anemia',t=>emo('ANEMIA',1,'#E5383B','#fff'),'T']],lb:[['Akibatnya','SERAPAN ZAT BESI TURUN','r'],['remaja','REMAJA PUTRI & IBU HAMIL','y']]},
  {k:'plot',at:'Plot',it:[['vitamin',t=>emo('VITAMIN C',1,'#F2A541'),'T'],['jeruk',t=>tomato(1.2),'C']],lb:[['vitamin','VITAMIN C BANTU SERAP BESI','g']]},
  {k:'check',at:'Biar aman',title:'Biar aman:',items:[['Jeda 1-2 jam','jeda'],['Baru minum teh','teh'],['Makan kaya zat besi','banyakin']],label:'JADI GINI'}],
 cta:{at:'Kamu tim',l:'TIM TEH',ls:'TEH',r:'TIM AIR PUTIH',rs:'AIR PUTIH',lp:t=>cupCoffee(t,0.5),rp:t=>glassW(t,0.6,0.7),aw:'teh',bw:'air'}});
const THUMB={t:1.5,lines:['TEH HABIS MAKAN','BIKIN','KURANG DARAH?']};
