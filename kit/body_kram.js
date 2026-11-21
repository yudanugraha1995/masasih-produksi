// ===== Kaki Kram Pas Tidur? Masa Sih Kurang Kalsium? ===== NEWFX B21FX
mkTrend({key:'KURANG KALSIUM?',keyWord:'kalsium',hook:t=>g('',bed(0,0,0.7,lyingHead('worried',false))),ps:1.2,bg:'#1A1A3A',glow:'#6E6CC4',card:['KRAM PAS TIDUR','TANDA KURANG','KALSIUM?'],
 sec:[{k:'fact',at:'Faktanya',it:[['nggak jelas',t=>emo('???',1.4,'#fff'),'T'],['kelelahan',t=>runner(t,0.6),'BL'],['duduk',t=>chair(0.7),'BR']],lb:[['nggak jelas','PENYEBAB SERING NGGAK JELAS','y'],['Pemicunya','PEMICU KRAM','r']],src:'Sumber: NHS, Leg cramps'},
  {k:'fact',at:'Kekurangan',it:[['mineral',t=>milk(t,0.8),'C']],lb:[['Kekurangan','KURANG MINERAL: NGGAK SELALU','y']]},
  {k:'plot',at:'Plot',it:[['meregangkan',t=>emo('REGANGKAN!',1.2,'#3BB273','#fff'),'T'],['ujung jari',t=>footWarm(t,1),'C']],lb:[['meregangkan','OBATNYA: REGANGKAN OTOT','g']]},
  {k:'check',at:'Biar jarang',title:'Biar jarang:',items:[['Regangkan betis','regangkan'],['Minum cukup','minum'],['Rutin bergerak','bergerak'],['Sering? Ke dokter','dokter']],label:'JADI GINI'}],
 cta:{at:'Kamu sering',l:'SERING KRAM',ls:'SERING',r:'JARANG',rs:'JARANG',lp:t=>emo('AW!',1,'#E5383B','#fff'),rp:t=>checkAt(t,0,0,0,1.3),aw:'sering',bw:'tidur'}});
const THUMB={t:1.5,lines:['KRAM PAS TIDUR','TANDA KURANG','KALSIUM?']};
