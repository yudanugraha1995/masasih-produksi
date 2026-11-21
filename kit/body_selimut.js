// NEWFX B21FX
mkTrend({key:'SELIMUT TEBAL?',keyWord:'diselimuti',hook:t=>thermo(t,1.2,0.9),bg:'#3A1616',glow:'#E5383B',card:['DEMAM','DISELIMUTI','TEBAL?'],
 sec:[{k:'fact',at:'Faktanya',it:[['naik',t=>thermo(t,1.2,1),'C'],['susah keluar',t=>flame(t,0.9),'R']],lb:[['naik','SUHU MAKIN NAIK!','r'],['susah keluar','PANAS SUSAH KELUAR','r']]},
  {k:'fact',at:'Pada anak',it:[['anak',t=>emo('ANAK: BAHAYA',1.1,'#E5383B','#fff'),'C']],lb:[['Pada anak','HATI-HATI PADA ANAK','r']],src:'Sumber: IDAI, Demam pada anak'},
  {k:'plot',at:'Plot',it:[['keringat',t=>sweatFace(t,1.1),'C']],lb:[['keringat','KERINGAT = PENDINGIN TUBUH','g'],['menggigil','MENGGIGIL? SELIMUT TIPIS SEBENTAR','y']]},
  {k:'check',at:'Biar cepat',title:'Biar pulih:',items:[['Baju tipis','tipis'],['Banyak minum','minum'],['Istirahat','istirahat'],['Obat sesuai dosis','dosis']],label:'JADI GINI'}],
 cta:{at:'Kamu dulu',l:'SERING',ls:'SERING',r:'NGGAK',rs:'NGGAK',lp:t=>thermo(t,0.6,0.9),rp:t=>shirt(0.5,'#5DB7EA'),aw:'dulu',bw:'demam'}});
const THUMB={t:1.5,lines:['DEMAM','DISELIMUTI','TEBAL?']};
