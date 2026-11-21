// NEWFX B21FX
mkTrend({key:'TAMBAH PARAH?',keyWord:'parah',hook:t=>iceCream(t,1.2),bg:'#10263A',glow:'#5DB7EA',card:['PILEK','MAKAN ES KRIM','TAMBAH PARAH?'],
 sec:[{k:'fact',at:'Faktanya',it:[['virus',t=>virus(t,1.1),'L'],['dingin',t=>xAt(t,-1,0,0,1.3),'R']],lb:[['virus','PILEK = VIRUS','b'],['bertambah','ES KRIM NGGAK TAMBAH VIRUS','g']]},
  {k:'fact',at:'Buat sebagian',it:[['tenggorokan',t=>iceCream(t,1),'C']],lb:[['Buat sebagian','DINGIN BISA MENENANGKAN','g']]},
  {k:'plot',at:'Plot',it:[['susu',t=>milk(t,0.9),'L'],['lendir',t=>xAt(t,-1,0,0,1.3),'R']],lb:[['susu','SUSU BIKIN DAHAK? BELUM TERBUKTI','g'],['batuk','MAKIN BATUK? KURANGI','y']],src:'Sumber: Wüthrich dkk., J Am Coll Nutr (2005)'},
  {k:'check',at:'Biar cepat',title:'Biar sembuh:',items:[['Istirahat','istirahat'],['Banyak minum','minum'],['Makan bergizi','bergizi']],label:'JADI GINI'}],
 cta:{at:'Kamu dulu',l:'PERNAH DILARANG',ls:'DILARANG',r:'BOLEH',rs:'BOLEH',lp:t=>iceCream(t,0.5),rp:t=>checkAt(t,0,0,0,1.3),aw:'dulu',bw:'pilek'}});
const THUMB={t:1.5,lines:['PILEK','MAKAN ES KRIM','TAMBAH PARAH?']};
