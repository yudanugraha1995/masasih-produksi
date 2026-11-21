// ===== Suka Gigit Kuku? Masa Sih Bahaya? ===== NEWFX B21FX
mkTrend({key:'GIGIT KUKU?',keyWord:'kuku',hook:t=>fingerNail(1.2,0),bg:'#3A1630',glow:'#B47EDB',card:['SUKA','GIGIT KUKU','BAHAYA?'],
 sec:[{k:'fact',at:'Faktanya',it:[['kuman',t=>bacteriaSwarm(t,5,0,0,120,-1),'C',1/1.4],['diare',t=>toilet(0.6),'BR']],lb:[['kuman','KUMAN DI BAWAH KUKU','r'],['diare','MASUK MULUT: DIARE','r']]},
  {k:'fact',at:'Kulit di',it:[['infeksi',t=>fingerNail(1.2,3),'C'],['paronikia',t=>emo('PARONIKIA',1,'#E5383B','#fff'),'B']],lb:[['Kulit di','BENGKAK & BERNANAH','r']]},
  {k:'plot',at:'Plot',it:[['gigi',t=>tooth(t,1.3,{sad:true}),'C']],lb:[['gigi','GIGI BISA RETAK & BERGESER','r']]},
  {k:'check',at:'Biar berhenti',title:'Biar berhenti:',items:[['Potong kuku pendek','potong'],['Sibukkan tangan','sibukkan'],['Kenali pemicunya','kenali']],label:'JADI GINI'}],
 cta:{at:'Kamu tim',l:'MASIH GIGIT',ls:'MASIH',r:'UDAH BERHENTI',rs:'STOP',lp:t=>fingerNail(0.5,0),rp:t=>checkAt(t,0,0,0,1.3),aw:'gigit',bw:'berhenti'}});
const THUMB={t:1.5,lines:['SUKA','GIGIT KUKU','BAHAYA?']};
