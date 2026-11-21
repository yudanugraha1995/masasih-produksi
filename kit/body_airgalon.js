// NEWFX B21FX
mkTrend({key:'DIMASAK LAGI?',keyWord:'dimasak',hook:t=>bodyWater(t,0,0,0.8),bg:'#10263A',glow:'#5DB7EA',card:['AIR GALON','HARUS','DIMASAK?'],
 sec:[{k:'fact',at:'Faktanya',it:[['bermerek',t=>emo('IZIN BPOM',1,'#3BB273','#fff'),'T'],['aman',t=>checkAt(t,-1,0,0,1.5),'C']],lb:[['bermerek','GALON BERMEREK: AMAN','g']]},
  {k:'fact',at:'Tapi untuk',it:[['depot',t=>emo('DEPOT ISI ULANG',0.9,'#F2A541'),'T'],['bakteri',t=>bacterium(1.1,'#7BC96F',0,'evil',t),'C']],lb:[['depot','TERGANTUNG KEBERSIHAN','y'],['bakteri','PERNAH DITEMUKAN BAKTERI','r']]},
  {k:'plot',at:'Plot',it:[['galonnya',t=>bodyWater(t,0,0,0.6),'L'],['dispenser',t=>bacterium(0.8,'#C77DDB',0,'evil',t),'R']],lb:[['galonnya','KUMAN DARI GALON & DISPENSER!','r']]},
  {k:'check',at:'Biar aman',title:'Biar aman:',items:[['Depot bersih','depot'],['Cuci dispenser','dispenser'],['Ragu? Masak dulu','ragu']],label:'JADI GINI'}],
 cta:{at:'Kamu tim',l:'GALON BERMEREK',ls:'BERMEREK',r:'ISI ULANG',rs:'ISI ULANG',lp:t=>bodyWater(t,0,0,0.5),rp:t=>glassW(t,0.5,0.7),aw:'bermerek',bw:'isi'}});
const THUMB={t:1.5,lines:['AIR GALON','HARUS','DIMASAK?']};
