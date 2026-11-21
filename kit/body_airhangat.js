// ===== Minum Air Hangat Tiap Pagi? Masa Sih Bikin Kurus? ===== NEWFX B21FX
mkTrend({key:'BIKIN KURUS?',keyWord:'kurus',hook:t=>cupCoffee(t,1,{col:'#F3F7FA',milk:true}),bg:'#3A2A16',glow:'#F2A541',card:['AIR HANGAT','TIAP PAGI','BIKIN KURUS?'],
 sec:[{k:'fact',at:'Faktanya',it:[['lemak',t=>xAt(t,-1,0,0,1.4),'R'],['nol',t=>bigNum(t,-1,'0','kalori',0,0,{size:170}),'C',1/1.4]],lb:[['Faktanya','NGGAK MEMBAKAR LEMAK','r']]},
  {k:'fact',at:'Tapi minum',it:[['kenyang',t=>stomach(t,1,0),'L'],['dua gelas',t=>glassW(t,0.8,0.8),'R']],lb:[['kenyang','MINUM DULU = CEPAT KENYANG','g'],['Penelitian','2 GELAS SEBELUM MAKAN','g']],src:'Sumber: Dennis dkk., Obesity (2010)'},
  {k:'plot',at:'Plot',it:[['manis',t=>sodaCan(t,0.8),'L'],['air putih',t=>glassW(t,0.9,0.8),'R']],lb:[['manis','GANTI MINUMAN MANIS!','g']]},
  {k:'check',at:'Biar efektif',title:'Biar efektif:',items:[['Minum sebelum makan','sebelum'],['Kurangi minuman manis','bergula'],['Atur porsi','porsi']],label:'JADI GINI'}],
 cta:{at:'Kamu tim',l:'AIR HANGAT',ls:'HANGAT',r:'AIR DINGIN',rs:'DINGIN',lp:t=>cupCoffee(t,0.45),rp:t=>glassW(t,0.5,0.7),aw:'hangat',bw:'dingin'}});
const THUMB={t:1.5,lines:['AIR HANGAT','TIAP PAGI','BIKIN KURUS?']};
