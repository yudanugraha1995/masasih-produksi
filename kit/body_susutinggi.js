// ===== Minum Susu Tiap Hari? Masa Sih Bikin Tinggi? ===== NEWFX B21FX
mkTrend({key:'JADI TINGGI?',keyWord:'tinggi',hook:t=>milk(t,1.2),bg:'#10263A',glow:'#5DB7EA',card:['MINUM SUSU','TIAP HARI','BIKIN TINGGI?'],
 sec:[{k:'fact',at:'Faktanya',it:[['genetik',t=>dna(t,1),'L'],['enam puluh',t=>bigNum(t,-1,'60-80%','dari genetik',0,0,{size:120}),'R']],lb:[['genetik','PALING BANYAK DARI GENETIK','b'],['Sisanya','SISANYA: GIZI, TIDUR, OLAHRAGA','g']]},
  {k:'fact',at:'Susu memang',it:[['protein',t=>milk(t,1),'C'],['kalsium',t=>bone(1),'R']],lb:[['Susu memang','SUSU MEMBANTU','g']]},
  {k:'plot',at:'Plot',it:[['telur',t=>egg(0.7),'L'],['ikan',t=>goldfish(t,0.7),'R'],['tidur cukup',t=>g('',bed(0,0,0.45,lyingHead('happy',true))),'B']],lb:[['bukan','SUSU BUKAN SATU-SATUNYA','r'],['hormon','HORMON TUMBUH SAAT TIDUR','g']]},
  {k:'check',at:'Biar tumbuh',title:'Biar optimal:',items:[['Gizi seimbang','bergizi'],['Tidur cukup','tidur cukup'],['Rajin olahraga','olahraga']],label:'JADI GINI'}],
 cta:{at:'Kamu tim',l:'SUSU TIAP HARI',ls:'SUKA',r:'NGGAK SUKA',rs:'NGGAK',lp:t=>milk(t,0.5),rp:t=>xAt(t,0,0,0,1),aw:'susu',bw:'nggak'}});
const THUMB={t:1.5,lines:['MINUM SUSU','TIAP HARI','BIKIN TINGGI?']};
