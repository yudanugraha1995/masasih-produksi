// NEWFX B21FX
mkTrend({key:'KURANG DARAH?',keyWord:'kurang',hook:t=>footWarm(t,1.2),bg:'#3A1630',glow:'#B47EDB',card:['KESEMUTAN','TANDA','KURANG DARAH?'],
 sec:[{k:'fact',at:'Faktanya',it:[['saraf',t=>emo('SARAF TERTEKAN',1,'#B47EDB','#fff'),'T'],['jarum',t=>footWarm(t,1),'C']],lb:[['saraf','BUKAN KURANG DARAH','g']],src:'Sumber: NHS, Pins and needles'},
  {k:'fact',at:'Begitu posisi',it:[['hilang',t=>checkAt(t,-1,0,0,1.5),'C']],lb:[['Begitu posisi','GANTI POSISI = HILANG SENDIRI','g']]},
  {k:'plot',at:'Plot',it:[['diabetes',t=>sugarSpoon(1),'L'],['B12',t=>emo('VITAMIN B12',0.9,'#F2A541'),'R'],['saraf',t=>brain(t,0.8,'sad'),'B']],lb:[['tanpa sebab','SERING TANPA SEBAB? WASPADA','r']]},
  {k:'check',at:'Biar aman',title:'Biar aman:',items:[['Ganti posisi duduk','posisi'],['Gerakkan kaki','gerakkan'],['Sering? Ke dokter','dokter']],label:'JADI GINI'}],
 cta:{at:'Kamu sering',l:'SERING',ls:'SERING',r:'JARANG',rs:'JARANG',lp:t=>footWarm(t,0.5),rp:t=>checkAt(t,0,0,0,1.3),aw:'sering',bw:'duduk'}});
const THUMB={t:1.5,lines:['KESEMUTAN','TANDA','KURANG DARAH?']};
