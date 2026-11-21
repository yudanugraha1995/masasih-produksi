// ===== Anak Minum Kopi? Masa Sih Bikin Pendek? ===== NEWFX B21FX
mkTrend({key:'NGGAK BISA TINGGI?',keyWord:'tinggi',hook:t=>cupCoffee(t,1),bg:'#3A2A16',glow:'#F2A541',card:['ANAK MINUM KOPI','BIKIN','PENDEK?'],
 sec:[{k:'fact',at:'Faktanya',it:[['bukti',t=>emo('BELUM TERBUKTI',1,'#5B6C8F','#fff'),'T'],['kalsium',t=>bone(1),'C']],lb:[['Faktanya','HAMBAT TINGGI? BELUM ADA BUKTI','g'],['kecil','EFEK KE KALSIUM SANGAT KECIL','g']]},
  {k:'fact',at:'Tapi kafein',it:[['deg-degan',t=>heart(1,Math.sin(9)),'L'],['susah tidur',t=>yawnFace(t,0.8),'R']],lb:[['Tapi kafein','TETAP NGGAK COCOK BUAT ANAK','r']],src:'Sumber: American Academy of Pediatrics'},
  {k:'plot',at:'Plot',it:[['kurang tidurnya',t=>g('',bed(0,0,0.45,lyingHead('worried',false))),'C'],['Hormon',t=>emo('HORMON TUMBUH',0.9,'#3BB273','#fff'),'T']],lb:[['kurang tidurnya','MASALAHNYA KURANG TIDUR!','r']]},
  {k:'check',at:'Biar aman',title:'Biar aman:',items:[['Batasi kafein anak','batasi'],['Termasuk teh & soda','soda'],['Tidur cukup','tidurnya']],label:'JADI GINI'}],
 cta:{at:'Waktu kecil',l:'PERNAH DILARANG',ls:'PERNAH',r:'BOLEH-BOLEH AJA',rs:'BOLEH',lp:t=>cupCoffee(t,0.4),rp:t=>checkAt(t,0,0,0,1.3),aw:'kecil',bw:'dilarang',vw:'pernah'}});
const THUMB={t:1.5,lines:['ANAK MINUM KOPI','BIKIN','PENDEK?']};
