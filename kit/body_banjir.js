// ===== Main Air Banjir? Masa Sih Bisa Kena Kencing Tikus? ===== NEWFX B21FX
mkTrend({key:'MAIN BANJIR?',keyWord:'banjir',hook:t=>rainCloud(t,1.2),bg:'#10263A',glow:'#5DB7EA',card:['MAIN AIR BANJIR','BISA KENA','KENCING TIKUS?'],cardAt:'Masa sih',
 sec:[{k:'fact',at:'Ternyata',it:[['tikus',t=>mouse(t,1.2),'C'],['Leptospira',t=>bacterium(1,'#F2A541',0,'evil',t),'R'],['luka',t=>hand(t,1),'BL']],lb:[['tikus','KENCING TIKUS','r'],['Leptospira','BAKTERI LEPTOSPIRA','r'],['luka','MASUK LEWAT LUKA, MATA, MULUT','y']],src:'Sumber: Kemenkes RI, leptospirosis'},
  {k:'fact',at:'Gejalanya',it:[['demam',t=>thermo(t,1,0.9),'L'],['betis',t=>emo('NYERI BETIS',0.9,'#E5383B','#fff'),'R'],['mata merah',t=>eyeBall(t,1,true),'B']],lb:[['Gejalanya','GEJALA LEPTOSPIROSIS','r']]},
  {k:'plot',at:'Plot',it:[['flu',t=>sneezeFace(t,1),'L'],['ginjal',t=>kidney(0.9),'R']],lb:[['flu','SERING DIKIRA FLU!','r'],['ginjal','BISA RUSAK GINJAL & HATI','r']]},
  {k:'check',at:'Biar aman',title:'Biar aman:',items:[['Pakai sepatu bot','sepatu'],['Tutup luka','tutup'],['Cuci kaki pakai sabun','cuci'],['Demam? Ke dokter','dokter']],label:'JADI GINI'}],
 cta:{at:'Rumahmu',l:'PERNAH BANJIR',ls:'PERNAH',r:'AMAN',rs:'AMAN',lp:t=>rainCloud(t,0.5),rp:t=>sun(t,0.5),aw:'Rumahmu',bw:'kebanjiran',vw:'pernah'}});
const THUMB={t:1.5,lines:['MAIN AIR BANJIR','KENA KENCING','TIKUS?']};
