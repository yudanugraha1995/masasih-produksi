// NEWFX B21FX
mkTrend({key:'10.000 LANGKAH?',keyWord:'sepuluh',hook:t=>runner(t,1.1),bg:'#14301F',glow:'#3BB273',card:['10.000 LANGKAH','SEHARI','WAJIB?'],
 sec:[{k:'fact',at:'Faktanya',it:[['kampanye',t=>emo('IKLAN 1960-AN',1,'#F2A541'),'T'],['Jepang',t=>bigNum(t,-1,'10.000','langkah',0,0,{size:150}),'C',1/1.4]],lb:[['kampanye','AWALNYA DARI IKLAN JEPANG','y']]},
  {k:'fact',at:'Penelitian terbaru',it:[['tujuh ribu',t=>bigNum(t,-1,'±7.000','langkah sudah bermanfaat',0,0,{size:150}),'C',1/1.4]],lb:[['Penelitian terbaru','MANFAAT MULAI ±7.000','g']],src:'Sumber: Ding dkk., The Lancet Public Health (2025)'},
  {k:'plot',at:'Plot',it:[['dua ribu',t=>emo('+2.000 LANGKAH',1.1,'#3BB273','#fff'),'C']],lb:[['jarang gerak','TAMBAH 2.000 AJA UDAH ADA MANFAAT','g']]},
  {k:'check',at:'Biar konsisten',title:'Biar konsisten:',items:[['Naik tangga','tangga'],['Jalan ke warung','warung'],['Berdiri tiap jam','berdiri']],label:'JADI GINI'}],
 cta:{at:'Sehari kamu',l:'DI ATAS 7.000',ls:'> 7.000',r:'DI BAWAH 7.000',rs:'< 7.000',lp:t=>runner(t,0.4),rp:t=>chair(0.5),aw:'jalan',bw:'langkah',vw:'berapa'}});
const THUMB={t:1.5,lines:['10.000 LANGKAH','SEHARI','WAJIB?']};
