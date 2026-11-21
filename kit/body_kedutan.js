// ===== Mata Kedutan? Masa Sih Pertanda? ===== NEWFX B21FX
mkTrend({key:'PERTANDA?',keyWord:'kanan',hook:t=>eyeBall(t,1.3),bg:'#3A1630',glow:'#B47EDB',card:['MATA KEDUTAN','TANDA','REZEKI?'],
 sec:[{k:'fact',at:'Faktanya',it:[['otot',t=>eyeBall(t,1.3),'C'],['miokimia',t=>emo('MIOKIMIA',1,'#B47EDB','#fff'),'T']],lb:[['otot','OTOT KELOPAK BERKONTRAKSI','b'],['nggak berbahaya','BIASANYA NGGAK BAHAYA','g']]},
  {k:'fact',at:'Pemicunya',it:[['tidur',t=>yawnFace(t,0.8),'L'],['stres',t=>brain(t,0.8,'sad'),'R'],['kafein',t=>cupCoffee(t,0.6),'BL'],['layar',t=>phone(t,0.5),'BR']],lb:[['Pemicunya','PEMICU KEDUTAN','r']]},
  {k:'plot',at:'Plot',it:[['rezeki',t=>coin(1.2),'L'],['rezeki',t=>xAt(t,-1,0,0,1.3),'L'],['istirahat',t=>g('',bed(0,0,0.45,lyingHead('happy',true))),'R']],lb:[['rezeki','BUKAN SOAL REZEKI','r'],['istirahat','TANDA BUTUH ISTIRAHAT','g']]},
  {k:'check',at:'Biar cepat',title:'Biar hilang:',items:[['Tidur cukup','tidur'],['Kurangi kopi','kopi'],['Istirahatkan mata','istirahatkan'],['Berminggu? Ke dokter','dokter']],label:'JADI GINI'}],
 cta:{at:'Mata kamu',l:'LAGI KEDUTAN',ls:'KEDUTAN',r:'NGGAK',rs:'NGGAK',lp:t=>eyeBall(t,0.6),rp:t=>checkAt(t,0,0,0,1.3),aw:'kamu',bw:'nggak'}});
const THUMB={t:1.5,lines:['MATA KEDUTAN','TANDA','REZEKI?']};
