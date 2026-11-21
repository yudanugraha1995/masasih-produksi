// NEWFX B21FX
mkTrend({key:'WAJIB?',keyWord:'wajib',hook:t=>glassW(t,1.3,0.8),bg:'#10263A',glow:'#5DB7EA',card:['BANGUN TIDUR','LANGSUNG MINUM','WAJIB?'],
 sec:[{k:'fact',at:'Faktanya',it:[['napas',t=>lungs(t,0.8,{}),'L'],['keringat',t=>sweatFace(t,0.8),'R'],['segar',t=>glassW(t,1,0.8),'B']],lb:[['cairan','TUBUH HILANG CAIRAN SAAT TIDUR','b'],['bagus','MINUM PAGI: BAGUS','g']]},
  {k:'fact',at:'Tapi ini',it:[['ajaib',t=>emo('BUKAN OBAT AJAIB',1,'#E5383B','#fff'),'C']],lb:[['Tapi ini','NGGAK BUANG RACUN / BIKIN KURUS','r']]},
  {k:'plot',at:'Plot',it:[['seharian',t=>glassW(t,0.7,0.8),'L'],['aktivitas',t=>sun(t,0.6),'R']],lb:[['total','YANG PENTING TOTAL SEHARIAN','g']]},
  {k:'check',at:'Biar terhidrasi',title:'Biar terhidrasi:',items:[['Minum saat haus','haus'],['Cek warna urine','urine'],['Bawa botol minum','botol']],label:'JADI GINI'}],
 cta:{at:'Kamu tim',l:'LANGSUNG MINUM',ls:'MINUM',r:'LANGSUNG MAIN HP',rs:'MAIN HP',lp:t=>glassW(t,0.5,0.8),rp:t=>phone(t,0.4),aw:'minum',bw:'HP'}});
const THUMB={t:1.5,lines:['BANGUN TIDUR','LANGSUNG MINUM','WAJIB?']};
