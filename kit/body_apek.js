// NEWFX B21FX
mkTrend({key:'BAU APEK?',keyWord:'apek',hook:t=>g('',shirt(1,'#5DB7EA')+stinkCloud(t,0.6)),bg:'#10263A',glow:'#5DB7EA',card:['BAJU APEK','BIKIN','GATAL?'],
 sec:[{k:'fact',at:'Ternyata',it:[['lembap',t=>shirt(1,'#5DB7EA'),'C'],['jamur',t=>mushroom(0.8),'L'],['bakteri',t=>bacterium(0.9,'#7BC96F',0,'evil',t),'R']],lb:[['lembap','BAJU LEMBAP = SARANG KUMAN','r'],['apek itu','BAU DARI KUMAN & JAMUR','y']]},
  {k:'fact',at:'Kalau dipakai',it:[['gatal',t=>skinBump(t,0.8,1),'C']],lb:[['Kalau dipakai','GATAL, MERAH, JAMUR KULIT','r']]},
  {k:'plot',at:'Plot',it:[['menyetrika',t=>flame(t,1),'C']],lb:[['menyetrika','SETRIKA BANTU BUNUH KUMAN!','g']]},
  {k:'check',at:'Biar aman',title:'Biar aman:',items:[['Jemur ada angin','aliran'],['Jangan tumpuk basah','menumpuk'],['Setrika dulu','setrika']],label:'MUSIM HUJAN'}],
 cta:{at:'Kamu pernah',l:'PERNAH',ls:'PERNAH',r:'NGGAK PERNAH',rs:'NGGAK',lp:t=>shirt(0.5,'#5DB7EA'),rp:t=>sun(t,0.4),aw:'pernah',bw:'kering'}});
const THUMB={t:1.5,lines:['BAJU APEK','BIKIN','GATAL?']};
