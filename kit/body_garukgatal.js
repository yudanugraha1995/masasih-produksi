// ===== Digigit Nyamuk Terus Digaruk? Masa Sih Makin Gatal? ===== NEWFX B21FX
mkTrend({key:'MAKIN GATAL?',keyWord:'gatal',hook:t=>mosquito(t,1.3),bg:'#3A1616',glow:'#E5383B',card:['MAKIN DIGARUK','MAKIN','GATAL?'],
 sec:[{k:'fact',at:'Ternyata',it:[['digaruk',t=>hand(t,1),'L'],['serotonin',t=>brain(t,1,'happy'),'R']],lb:[['Ternyata','BENAR!','r'],['serotonin','OTAK LEPAS SEROTONIN','b']],src:'Sumber: Zhao dkk., Neuron (2014)'},
  {k:'fact',at:'Masalahnya',it:[['gatal makin',t=>skinBump(t,0.8,1),'C'],['lingkaran',t=>emo('GATAL-GARUK-GATAL',0.8,'#E5383B','#fff'),'B']],lb:[['Masalahnya','SEROTONIN BIKIN MAKIN GATAL','r']]},
  {k:'plot',at:'Plot',it:[['kuku',t=>fingerNail(1.2,0),'L'],['infeksi',t=>bacterium(1,'#7BC96F',0,'evil',t),'R']],lb:[['kuku','KUKU KOTOR = INFEKSI','r']]},
  {k:'check',at:'Biar cepat',title:'Biar reda:',items:[['Kompres dingin','kompres'],['Losion anti gatal','losion'],['Potong kuku','potong'],['Bernanah? Ke dokter','dokter']],label:'JADI GINI'}],
 cta:{at:'Kamu tim',l:'TIM GARUK',ls:'GARUK',r:'TIM TAHAN',rs:'TAHAN',lp:t=>hand(t,0.5),rp:t=>shield(0.5),aw:'garuk',bw:'tahan'}});
const THUMB={t:1.5,lines:['MAKIN DIGARUK','MAKIN','GATAL?']};
