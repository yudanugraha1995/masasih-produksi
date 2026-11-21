// ===== Flu Minum Antibiotik? Masa Sih Cepat Sembuh? ===== NEWFX B21FX
mkTrend({key:'ANTIBIOTIK?',keyWord:'antibiotik',hook:t=>pillBottle(1.2,'ANTIBIOTIK'),bg:'#10263A',glow:'#5DB7EA',card:['FLU MINUM','ANTIBIOTIK','CEPAT SEMBUH?'],
 sec:[{k:'fact',at:'Faktanya',it:[['virus',t=>virus(t,1.2),'L'],['bakteri',t=>bacterium(1,'#7BC96F',0,'evil',t),'R'],['nggak mempan',t=>xAt(t,-1,0,0,1.5),'L']],lb:[['virus','FLU = VIRUS','r'],['bakteri','ANTIBIOTIK = BAKTERI','b'],['nggak mempan','NGGAK MEMPAN BUAT FLU','r']]},
  {k:'fact',at:'Minum antibiotik',it:[['kebal',t=>shield(1),'C'],['resistensi',t=>emo('RESISTENSI',1,'#E5383B','#fff'),'B']],lb:[['Minum antibiotik','BAKTERI JADI KEBAL','r']],src:'Sumber: WHO, Antimicrobial resistance'},
  {k:'plot',at:'Plot',it:[['seminggu',t=>calendar(t,0.9),'C'],['istirahat',t=>g('',bed(0,0,0.45,lyingHead('happy',true))),'B']],lb:[['seminggu','SEMBUH SENDIRI ±1 MINGGU','g']]},
  {k:'check',at:'Biar cepat',title:'Biar pulih:',items:[['Tidur cukup','tidur'],['Air hangat','hangat'],['Makan bergizi','bergizi'],['Pakai masker','masker']],label:'JADI GINI'}],
 cta:{at:'Kamu pernah',l:'PERNAH',ls:'PERNAH',r:'NGGAK PERNAH',rs:'NGGAK',lp:t=>pillBottle(0.5,'AB'),rp:t=>checkAt(t,0,0,0,1.3),aw:'pernah',bw:'flu'}});
const THUMB={t:1.5,lines:['FLU MINUM','ANTIBIOTIK','CEPAT SEMBUH?']};
