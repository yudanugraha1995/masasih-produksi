// NEWFX B21FX
mkTrend({key:'PASTI SEHAT?',keyWord:'sehat',hook:t=>cupCoffee(t,1,{col:'#F2C14E'}),bg:'#3A2A16',glow:'#F2A541',card:['JAMU TIAP HARI','PASTI','SEHAT?'],
 sec:[{k:'fact',at:'Faktanya',it:[['kunyit',t=>emo('KUNYIT',0.9,'#F2A541'),'L'],['jahe',t=>emo('JAHE',0.9,'#C9A86A'),'R'],['manfaat',t=>checkAt(t,-1,0,0,1.3),'B']],lb:[['manfaat','PUNYA MANFAAT','g']]},
  {k:'fact',at:'Tapi alami',it:[['aman',t=>emo('ALAMI ≠ PASTI AMAN',0.9,'#E5383B','#fff'),'C'],['obat dokter',t=>pillBottle(0.8,'OBAT'),'B']],lb:[['Tapi alami','DOSIS & CAMPUR OBAT: HATI-HATI','y']]},
  {k:'plot',at:'Plot',it:[['ilegal',t=>emo('JAMU ILEGAL',1.1,'#E5383B','#fff'),'T'],['ginjal',t=>kidney(0.8),'BL'],['hati',t=>emo('HATI',0.9,'#8E3B4F','#fff'),'BR']],lb:[['ilegal','BPOM: JAMU CAMPUR BAHAN KIMIA OBAT','r']],src:'Sumber: BPOM RI, public warning obat tradisional'},
  {k:'check',at:'Biar aman',title:'Biar aman:',items:[['Terdaftar BPOM','terdaftar'],['Jangan berlebihan','berlebihan'],['Bilang ke dokter','dokter']],label:'JADI GINI'}],
 cta:{at:'Kamu tim',l:'TIM JAMU',ls:'JAMU',r:'NGGAK',rs:'NGGAK',lp:t=>cupCoffee(t,0.45,{col:'#F2C14E'}),rp:t=>xAt(t,0,0,0,1),aw:'jamu',bw:'hari'}});
const THUMB={t:1.5,lines:['JAMU TIAP HARI','PASTI','SEHAT?']};
