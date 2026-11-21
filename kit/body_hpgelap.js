// ===== Main HP Gelap-gelapan? Masa Sih Bikin Mata Rusak? ===== NEWFX B21FX
mkTrend({key:'MATA RUSAK?',keyWord:'rusak',hook:t=>phone(t,1),bg:'#1A1A3A',glow:'#6E6CC4',card:['MAIN HP','GELAP-GELAPAN','MATA RUSAK?'],
 sec:[{k:'fact',at:'Faktanya',it:[['bukti',t=>emo('BELUM TERBUKTI',1,'#5B6C8F','#fff'),'T'],['lelah',t=>eyeBall(t,1.3,true),'C']],lb:[['bukti','RUSAK PERMANEN? BELUM ADA BUKTI','g'],['lelah','TAPI CEPAT LELAH & KERING','y']]},
  {k:'fact',at:'Kontras',it:[['layar',t=>phone(t,0.8),'L'],['gelap',t=>moonIcon(0.8),'R']],lb:[['Kontras','KONTRAS BIKIN MATA KERJA KERAS','r']],src:'Sumber: American Academy of Ophthalmology'},
  {k:'plot',at:'Plot',it:[['tidurmu',t=>g('',bed(0,0,0.45,lyingHead('worried',false))),'C'],['melatonin',t=>emo('MELATONIN',1,'#B47EDB','#fff'),'T']],lb:[['tidurmu','DAMPAK TERBESAR: TIDUR!','r']]},
  {k:'check',at:'Biar aman',title:'Biar aman:',items:[['Nyalakan lampu kecil','lampu'],['Turunkan kecerahan','kecerahan'],['Stop HP 30 mnt','berhenti']],label:'JADI GINI'}],
 cta:{at:'Kamu biasa',l:'SERING',ls:'SERING',r:'NGGAK PERNAH',rs:'NGGAK',lp:t=>phone(t,0.4),rp:t=>moonIcon(0.6),aw:'biasa',bw:'gelap'}});
const THUMB={t:1.5,lines:['MAIN HP','GELAP-GELAPAN','MATA RUSAK?']};
