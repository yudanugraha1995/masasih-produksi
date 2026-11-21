// ===== Telinga Berdenging? Masa Sih Ada yang Ngomongin? ===== NEWFX B21FX
mkTrend({key:'DIOMONGIN?',keyWord:'ngomongin',hook:t=>soundWaves(t,1.2),bg:'#10263A',glow:'#5DB7EA',card:['TELINGA DENGING','ADA YANG','NGOMONGIN?'],
 sec:[{k:'fact',at:'Faktanya',it:[['tinnitus',t=>emo('TINNITUS',1.2,'#5B6C8F','#fff'),'T'],['konser',t=>notes(t,1),'L'],['earphone',t=>soundWaves(t,0.8),'R']],lb:[['keras','SUARA KERAS','r'],['stres','STRES & KURANG TIDUR','y']],src:'Sumber: NHS, Tinnitus'},
  {k:'fact',at:'Denging sebentar',it:[['berbahaya',t=>checkAt(t,-1,0,0,1.5),'C']],lb:[['Denging sebentar','SEBENTAR = UMUMNYA AMAN','g']]},
  {k:'plot',at:'Plot',it:[['ngomongin',t=>xAt(t,-1,0,0,1.4),'L'],['kecapekan',t=>yawnFace(t,0.9),'R']],lb:[['kecapekan','TELINGA KECAPEKAN!','r']]},
  {k:'check',at:'Biar aman',title:'Biar aman:',items:[['Kecilkan volume','kecilkan'],['Istirahatkan telinga','istirahatkan'],['Jangan korek dalam','korek'],['Lama? Ke THT','THT']],label:'JADI GINI'}],
 cta:{at:'Kamu pernah',l:'PERNAH',ls:'PERNAH',r:'NGGAK PERNAH',rs:'NGGAK',lp:t=>soundWaves(t,0.6),rp:t=>checkAt(t,0,0,0,1.3),aw:'pernah',bw:'tiba-tiba'}});
const THUMB={t:1.5,lines:['TELINGA DENGING','ADA YANG','NGOMONGIN?']};
