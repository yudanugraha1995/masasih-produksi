// NEWFX B21FX
mkTrend({key:'GIGI RENGGANG?',keyWord:'renggang',hook:t=>tooth(t,1.2,{}),bg:'#10263A',glow:'#5DB7EA',card:['TUSUK GIGI','BIKIN GIGI','RENGGANG?'],
 sec:[{k:'fact',at:'Faktanya',it:[['kasar',t=>emo('DIPAKAI KASAR',1,'#E5383B','#fff'),'T'],['Gusi',t=>bloodDrop(1),'L'],['celah',t=>tooth(t,1,{sad:true}),'R']],lb:[['Gusi','GUSI LUKA & TURUN','r']]},
  {k:'fact',at:'Serpihan',it:[['tertinggal',t=>tooth(t,1.2,{hole:true}),'C']],lb:[['Serpihan','SERPIHAN BISA NYANGKUT','y']]},
  {k:'plot',at:'Plot',it:[['benang',t=>emo('BENANG GIGI',1.2,'#3BB273','#fff'),'C']],lb:[['benang','DOKTER GIGI: PAKAI BENANG GIGI!','g']],src:'Sumber: American Dental Association'},
  {k:'check',at:'Biar aman',title:'Biar aman:',items:[['Benang gigi','benang'],['Jangan tekan gusi','ditekan'],['Sikat 2x sehari','sikat']],label:'JADI GINI'}],
 cta:{at:'Kamu tim',l:'TUSUK GIGI',ls:'TUSUK',r:'BENANG GIGI',rs:'BENANG',lp:t=>tooth(t,0.5,{}),rp:t=>toothbrush(0.5),aw:'tusuk',bw:'benang'}});
const THUMB={t:1.5,lines:['TUSUK GIGI','BIKIN GIGI','RENGGANG?']};
