// ===== Sikat Gigi Habis Makan? Masa Sih Malah Rusak? ===== NEWFX B21FX
mkTrend({key:'LANGSUNG SIKAT?',keyWord:'langsung',hook:t=>toothbrush(1.2,-20),bg:'#10263A',glow:'#5DB7EA',card:['SIKAT GIGI','HABIS MAKAN','MALAH RUSAK?'],
 sec:[{k:'fact',at:'Ternyata',it:[['asam',t=>acidDrop(1.2),'L'],['soda',t=>sodaCan(t,0.7),'R'],['email',t=>tooth(t,1.2,{}),'B']],lb:[['asam','HABIS MAKAN ASAM','r'],['melunak','EMAIL GIGI MELUNAK','r'],['terkikis','DISIKAT = TERKIKIS','r']]},
  {k:'fact',at:'Lama-lama',it:[['sensitif',t=>tooth(t,1.4,{sad:true}),'C']],lb:[['Lama-lama','GIGI SENSITIF & NGILU','r']]},
  {k:'plot',at:'Plot',it:[['tiga puluh',t=>clockFace(t,1.1,6),'C'],['kumur',t=>glassW(t,0.8,0.7),'BR']],lb:[['tiga puluh','TUNGGU 30-60 MENIT!','g'],['kumur','KUMUR AIR PUTIH DULU','b']],src:'Sumber: American Dental Association'},
  {k:'check',at:'Biar gigi',title:'Biar kuat:',items:[['Sikat 2x sehari','dua kali'],['Pasta berfluoride','berfluoride'],['Jangan terlalu keras','keras']],label:'JADI GINI'}],
 cta:{at:'Kamu biasanya',l:'SEBELUM MAKAN',ls:'SEBELUM',r:'SESUDAH MAKAN',rs:'SESUDAH',lp:t=>toothbrush(0.5),rp:t=>tooth(t,0.5,{}),aw:'sebelum',bw:'sesudah'}});
const THUMB={t:1.5,lines:['SIKAT GIGI','HABIS MAKAN','MALAH RUSAK?']};
