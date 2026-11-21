// ===== Keringetan Banyak? Masa Sih Lemak Kebakar? ===== NEWFX B21FX
mkTrend({key:'LEMAK TERBAKAR?',keyWord:'lemak',hook:t=>sweatFace(t,1.3),bg:'#3A1616',glow:'#F2A541',card:['BANYAK KERINGAT','= LEMAK','TERBAKAR?'],
 sec:[{k:'fact',at:'Faktanya',it:[['mendinginkan',t=>thermo(t,1,0.5),'L'],['air',t=>glassW(t,0.8,0.7),'R'],['bukan lemak',t=>xAt(t,-1,0,0,1.4),'B']],lb:[['mendinginkan','KERINGAT = PENDINGIN TUBUH','b'],['air dan garam','ISINYA AIR & GARAM','b']]},
  {k:'fact',at:'Berat badan',it:[['turun',t=>scaleWeight(t,1,'-'),'C'],['minum',t=>glassW(t,0.7,0.8),'BR']],lb:[['Berat badan','YANG TURUN CUMA AIR','y']]},
  {k:'plot',at:'Plot',it:[['jaket',t=>shirt(1,'#7A5BD6'),'C'],['dehidrasi',t=>thermo(t,0.9,1),'R']],lb:[['jaket','JAKET PLASTIK = BAHAYA','r'],['energi','LEMAK = ENERGI TERPAKAI','g']]},
  {k:'check',at:'Biar efektif',title:'Biar efektif:',items:[['Olahraga rutin','rutin'],['Minum cukup','minum'],['Baju serap keringat','baju']],label:'JADI GINI'}],
 cta:{at:'Kamu tim',l:'GAMPANG KERINGETAN',ls:'KERINGETAN',r:'TIM KERING',rs:'KERING',lp:t=>sweatFace(t,0.6),rp:t=>sun(t,0.4),aw:'gampang',bw:'kering'}});
const THUMB={t:1.5,lines:['BANYAK KERINGAT','= LEMAK','TERBAKAR?']};
