// ===== Fogging Bikin Aman dari DBD? Masa Sih? ===== NEWFX B21FX
mkTrend({key:'FOGGING?',keyWord:'fogging',hook:t=>g('',stinkCloud(t,1.2)+mosquito(t,0.6)),bg:'#10263A',glow:'#5DB7EA',card:['FOGGING','BIKIN AMAN','DARI DBD?'],
 sec:[{k:'fact',at:'Faktanya',it:[['dewasa',t=>mosquito(t,1.2),'C'],['Jentik',t=>emo('JENTIK SELAMAT',0.9,'#F2A541'),'B']],lb:[['dewasa','CUMA NYAMUK DEWASA','r'],['Jentik','JENTIK DI AIR NGGAK MATI','r']]},
  {k:'fact',at:'Fogging juga',it:[['kasus',t=>emo('ADA KASUS',1,'#E5383B','#fff'),'T'],['rutin',t=>calendar(t,0.8),'B']],lb:[['Fogging juga','BUKAN PENCEGAHAN RUTIN','y']],src:'Sumber: Kemenkes RI, PSN 3M Plus'},
  {k:'plot',at:'Plot',it:[['pemberantasan',t=>emo('PSN',1.4,'#3BB273','#fff'),'L'],['jentik di',t=>emo('JUMANTIK',1,'#5B6C8F','#fff'),'R']],lb:[['murah','SENJATA MURAH: PSN!','g']]},
  {k:'check',at:'Biar aman',title:'Biar aman:',items:[['Kuras bak seminggu sekali','kuras'],['Tutup tempat air','tutup'],['Cek pot & dispenser','pot']],label:'CEGAH DBD'}],
 cta:{at:'Di tempatmu',l:'SERING FOGGING',ls:'SERING',r:'JARANG',rs:'JARANG',lp:t=>stinkCloud(t,0.5),rp:t=>mosquito(t,0.5),aw:'tempatmu',bw:'fogging'}});
const THUMB={t:1.5,lines:['FOGGING','BIKIN AMAN','DARI DBD?']};
