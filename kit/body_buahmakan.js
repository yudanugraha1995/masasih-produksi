// ===== Makan Buah Habis Makan? Masa Sih Busuk di Perut? ===== NEWFX B21FX
mkTrend({key:'BUSUK DI PERUT?',keyWord:'busuk',hook:t=>melonSlice(1.2),bg:'#3A2A16',glow:'#F2A541',card:['BUAH HABIS MAKAN','BUSUK','DI PERUT?'],
 sec:[{k:'fact',at:'Faktanya',it:[['lambung',t=>stomach(t,1.2,0.8),'C'],['busuk',t=>xAt(t,-1,0,0,1.4),'R']],lb:[['lambung','LAMBUNG SANGAT ASAM','b'],['busuk','BUAH NGGAK BUSUK DI PERUT','g']]},
  {k:'fact',at:'Mitos ini',it:[['food',t=>emo('FOOD COMBINING',0.9,'#B47EDB','#fff'),'T'],['kembung',t=>gasBubble(t,1.2),'B']],lb:[['Mitos ini','NGGAK ADA BUKTI ILMIAH','r'],['kembung','KEBANYAKAN? BISA KEMBUNG','y']]},
  {k:'plot',at:'Plot',it:[['zat besi',t=>emo('Fe',1.3,'#8E3B4F','#fff'),'L'],['vitamin',t=>tomato(1),'R']],lb:[['zat besi','BANTU SERAP ZAT BESI!','g']]},
  {k:'check',at:'Biar nyaman',title:'Biar nyaman:',items:[['Secukupnya','secukupnya'],['Kunyah pelan','kunyah'],['Buah utuh, bukan jus','utuh']],label:'JADI GINI'}],
 cta:{at:'Kamu tim',l:'SEBELUM MAKAN',ls:'SEBELUM',r:'SESUDAH MAKAN',rs:'SESUDAH',lp:t=>melonSlice(0.5),rp:t=>plateDinner(0.4),aw:'sebelum',bw:'sesudah'}});
const THUMB={t:1.5,lines:['BUAH HABIS MAKAN','BUSUK','DI PERUT?']};
