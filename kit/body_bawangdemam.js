// ===== Demam Ditempel Bawang Merah? Masa Sih Turun? ===== NEWFX B21FX
mkTrend({key:'BAWANG MERAH?',keyWord:'bawang',hook:t=>garlic(1.2),bg:'#3A1630',glow:'#B47EDB',card:['DEMAM','DITEMPEL','BAWANG MERAH?'],
 sec:[{k:'fact',at:'Faktanya',it:[['penelitian',t=>emo('BELUM TERBUKTI',1,'#5B6C8F','#fff'),'T'],['dingin',t=>thermo(t,1,0.6),'C']],lb:[['penelitian','BELUM ADA BUKTI ILMIAH','r'],['menguap','DINGIN SEBENTAR (AIR MENGUAP)','y']]},
  {k:'fact',at:'Pada kulit',it:[['iritasi',t=>faceSkin(t,0.8,{rash:true}),'C']],lb:[['Pada kulit','BISA IRITASI KULIT','r']]},
  {k:'plot',at:'Plot',it:[['melawan',t=>shield(1),'L'],['infeksi',t=>virus(t,0.8),'R'],['nyaman',t=>emo('BIKIN NYAMAN',1,'#3BB273','#fff'),'B']],lb:[['melawan','DEMAM = TUBUH MELAWAN INFEKSI','g']]},
  {k:'check',at:'Biar aman',title:'Biar aman:',items:[['Banyak minum','minum'],['Baju tipis','tipis'],['Kompres air hangat','kompres'],['>3 hari? Ke dokter','dokter']],label:'JADI GINI',src:'Sumber: IDAI, Demam pada anak'}],
 cta:{at:'Di rumahmu',l:'PAKAI BAWANG',ls:'BAWANG',r:'KOMPRES',rs:'KOMPRES',lp:t=>garlic(0.6),rp:t=>towel(0.5),aw:'rumahmu',bw:'bawang merah'}});
const THUMB={t:1.5,lines:['DEMAM DITEMPEL','BAWANG MERAH','TURUN?']};
