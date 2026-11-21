// ===== Ngorok Tanda Tidur Nyenyak? Masa Sih? ===== NEWFX B21FX
mkTrend({key:'NYENYAK?',keyWord:'nyenyak',hook:t=>g('',bed(0,0,0.7,lyingHead('happy',true))+zzz(120,-260,t)),ps:1.2,bg:'#1A1A3A',glow:'#6E6CC4',card:['NGOROK','TANDA TIDUR','NYENYAK?'],
 sec:[{k:'fact',at:'Faktanya',it:[['saluran',t=>lungs(t,0.9,{}),'C'],['bergetar',t=>soundWaves(t,1),'R']],lb:[['saluran','SALURAN NAPAS MENYEMPIT','b'],['sesekali','SESEKALI: BIASANYA AMAN','g']]},
  {k:'fact',at:'Tapi kalau',it:[['napas berhenti',t=>emo('NAPAS BERHENTI',0.9,'#E5383B','#fff'),'T'],['apnea',t=>emo('SLEEP APNEA',1.1,'#B47EDB','#fff'),'B']],lb:[['Tapi kalau','HATI-HATI!','r']]},
  {k:'plot',at:'Plot',it:[['terbangun',t=>brain(t,1,'sad'),'C'],['ngantuk',t=>yawnFace(t,1),'BR']],lb:[['justru','JUSTRU NGGAK NYENYAK!','r'],['oksigen','OTAK KURANG OKSIGEN','r']]},
  {k:'check',at:'Biar lebih',title:'Biar lega:',items:[['Tidur miring','miring'],['Jaga berat badan','berat'],['Hindari rokok','rokok'],['Periksa ke dokter','dokter']],label:'JADI GINI'}],
 cta:{at:'Kamu atau',l:'AKU TUKANG NGOROK',ls:'AKU',r:'PASANGANKU',rs:'DIA',lp:t=>zzz(0,0,t),rp:t=>soundWaves(t,0.7),aw:'Kamu',bw:'pasanganmu'}});
const THUMB={t:1.5,lines:['NGOROK','TANDA TIDUR','NYENYAK?']};
