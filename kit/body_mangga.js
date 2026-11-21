// NEWFX B21FX
mkTrend({key:'KERACUNAN?',keyWord:'keracunan',hook:t=>milk(t,1.2),bg:'#3A2A16',glow:'#F2A541',card:['MANGGA + SUSU','BIKIN','KERACUNAN?'],
 sec:[{k:'fact',at:'Faktanya',it:[['bukti',t=>emo('NGGAK ADA BUKTI',1,'#5B6C8F','#fff'),'T'],['keracunan',t=>xAt(t,-1,0,0,1.4),'C']],lb:[['Faktanya','MITOS!','g']]},
  {k:'fact',at:'Malah di',it:[['lassi',t=>glassW(t,1,0.8),'C'],['jus',t=>milk(t,0.8),'R']],lb:[['lassi','MANGO LASSI DI INDIA','g'],['jus','JUS MANGGA SUSU','g']]},
  {k:'plot',at:'Plot',it:[['kebanyakan',t=>stomach(t,1,0.3),'L'],['laktosa',t=>emo('LAKTOSA',1,'#F2A541'),'R']],lb:[['laktosa','INTOLERANSI LAKTOSA','r']]},
  {k:'check',at:'Biar nyaman',title:'Biar nyaman:',items:[['Secukupnya','secukupnya'],['Susu rendah laktosa','rendah'],['Buah bersih','bersih']],label:'JADI GINI'}],
 cta:{at:'Kamu pernah',l:'PERNAH DILARANG',ls:'PERNAH',r:'NGGAK PERNAH',rs:'NGGAK',lp:t=>milk(t,0.5),rp:t=>checkAt(t,0,0,0,1.3),aw:'pernah',bw:'susu'}});
const THUMB={t:1.5,lines:['MANGGA + SUSU','BIKIN','KERACUNAN?']};
