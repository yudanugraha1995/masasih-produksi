// NEWFX B21FX
mkTrend({key:'BIKIN RADANG?',keyWord:'radang',hook:t=>chipsBag(1,'KERUPUK'),bg:'#3A2A16',glow:'#F2A541',card:['KERUPUK','BIKIN RADANG','TENGGOROKAN?'],
 sec:[{k:'fact',at:'Faktanya',it:[['langsung',t=>xAt(t,-1,0,0,1.3),'R'],['virus',t=>virus(t,0.9),'L'],['bakteri',t=>bacterium(0.9,'#7BC96F',0,'evil',t),'B']],lb:[['Faktanya','NGGAK LANGSUNG BIKIN RADANG','g'],['virus','PENYEBAB: VIRUS/BAKTERI','b']]},
  {k:'fact',at:'Tapi kerupuk',it:[['menggores',t=>chipsBag(0.9,'KERAS'),'C'],['jelantah',t=>oilDrop(1.1),'R']],lb:[['menggores','BISA MENGGORES TENGGOROKAN','y']]},
  {k:'plot',at:'Plot',it:[['minyak bekas',t=>oilDrop(1.5),'C']],lb:[['minyak bekas','MINYAK JELANTAH PELAKUNYA!','r']]},
  {k:'check',at:'Biar aman',title:'Biar aman:',items:[['Secukupnya','secukupnya'],['Minum air putih','minum'],['Radang? Stop dulu','radang']],label:'JADI GINI'}],
 cta:{at:'Kamu tim',l:'TIM KERUPUK',ls:'KERUPUK',r:'NGGAK',rs:'NGGAK',lp:t=>chipsBag(0.5,'KERUPUK'),rp:t=>xAt(t,0,0,0,1),aw:'kerupuk',bw:'hari'}});
const THUMB={t:1.5,lines:['KERUPUK','BIKIN RADANG','TENGGOROKAN?']};
