// NEWFX B21FX
mkTrend({key:'LAGI LAPAR?',keyWord:'lapar',hook:t=>stomach(t,1.2,0),bg:'#3A2A16',glow:'#F2A541',card:['PERUT BUNYI','TANDA','LAPAR?'],
 sec:[{k:'fact',at:'Faktanya',it:[['usus',t=>gut(t,0.9),'C'],['borborygmi',t=>emo('BORBORYGMI',1,'#B47EDB','#fff'),'T']],lb:[['usus','OTOT USUS MEREMAS','b']]},
  {k:'fact',at:'Bunyi ini',it:[['kosong',t=>soundWaves(t,1.1),'C']],lb:[['Bunyi ini','PERUT KOSONG = LEBIH KENCANG','y']]},
  {k:'plot',at:'Plot',it:[['kenyang',t=>plateDinner(0.8),'L'],['bersoda',t=>sodaCan(t,0.7),'R']],lb:[['kenyang','HABIS KENYANG JUGA BUNYI!','r']]},
  {k:'check',at:'Biar nggak',title:'Biar nggak malu:',items:[['Jangan telat makan','telat'],['Kunyah pelan','kunyah'],['Kurangi soda','soda']],label:'JADI GINI'}],
 cta:{at:'Perutmu',l:'PERNAH',ls:'PERNAH',r:'NGGAK PERNAH',rs:'NGGAK',lp:t=>soundWaves(t,0.6),rp:t=>checkAt(t,0,0,0,1.3),aw:'Perutmu',bw:'sepi',vw:'pernah'}});
const THUMB={t:1.5,lines:['PERUT BUNYI','TANDA','LAPAR?']};
