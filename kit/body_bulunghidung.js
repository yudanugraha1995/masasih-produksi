// ===== Cabut Bulu Hidung? Masa Sih Bahaya? ===== NEWFX B21FX
mkTrend({key:'DICABUT?',keyWord:'dicabut',hook:t=>nose(t,1.2),bg:'#3A1616',glow:'#E5383B',card:['CABUT','BULU HIDUNG','BAHAYA?'],
 sec:[{k:'fact',at:'Faktanya',it:[['penyaring',t=>nose(t,1.1),'C'],['debu',t=>emo('DEBU',0.8,'#9AA7B2'),'L'],['kuman',t=>bacterium(0.8,'#7BC96F',0,'evil',t),'R']],lb:[['penyaring','PENYARING ALAMI','g']]},
  {k:'fact',at:'Kalau dicabut',it:[['luka',t=>bloodDrop(1),'L'],['bakteri',t=>bacterium(1,'#C77DDB',0,'evil',t),'R'],['bisul',t=>emo('BISUL!',1.1,'#E5383B','#fff'),'B']],lb:[['Kalau dicabut','AKAR LUKA, BAKTERI MASUK','r']]},
  {k:'plot',at:'Plot',it:[['segitiga',t=>emo('SEGITIGA BAHAYA',1,'#E5383B','#fff'),'T'],['otak',t=>brain(t,1,'sad'),'C']],lb:[['segitiga','HIDUNG-BIBIR: SEGITIGA BAHAYA','r'],['jarang','JARANG, TAPI BISA SERIUS','y']]},
  {k:'check',at:'Biar aman',title:'Biar aman:',items:[['Pakai gunting khusus','gunting'],['Ujung tumpul','tumpul'],['Jangan dicabut','jangan']],label:'JADI GINI'}],
 cta:{at:'Kamu tim',l:'TIM CABUT',ls:'CABUT',r:'TIM GUNTING',rs:'GUNTING',lp:t=>nose(t,0.5),rp:t=>scissors(t,0.6),aw:'cabut',bw:'gunting'}});
const THUMB={t:1.5,lines:['CABUT','BULU HIDUNG','BAHAYA?']};
