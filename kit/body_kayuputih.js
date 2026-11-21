// NEWFX B21FX
mkTrend({key:'DI HIDUNG BAYI?',keyWord:'hidungnya',hook:t=>pillBottle(1.2,'KAYU PUTIH'),bg:'#14301F',glow:'#3BB273',card:['MINYAK KAYU PUTIH','DI HIDUNG','BAYI?'],
 sec:[{k:'fact',at:'Faktanya',it:[['kulit badan',t=>checkAt(t,-1,0,0,1.4),'C']],lb:[['Faktanya','KULIT BADAN: OK, TIPIS AJA','g']]},
  {k:'fact',at:'Tapi jangan',it:[['hidung',t=>nose(t,1),'C'],['hidung',t=>xAt(t,-1,0,0,1.3),'R'],['teriritasi',t=>lungs(t,0.7,{}),'B']],lb:[['Tapi jangan','JANGAN DEKAT HIDUNG/WAJAH','r']]},
  {k:'plot',at:'Plot',it:[['eucalyptus',t=>teaLeaf(1.2),'L'],['dua tahun',t=>emo('< 2 TAHUN',1,'#E5383B','#fff'),'R']],lb:[['eucalyptus','MIRIP EUCALYPTUS','b'],['sesak','BISA PICU SESAK','r']]},
  {k:'check',at:'Biar aman',title:'Biar aman:',items:[['Oles tipis punggung','punggung'],['Jauh dari hidung','jauh'],['Jangan ke mulut','mulut'],['Sesak? Ke dokter','dokter']],label:'JADI GINI'}],
 cta:{at:'Kamu tim',l:'KAYU PUTIH',ls:'KAYU PUTIH',r:'MINYAK TELON',rs:'TELON',lp:t=>pillBottle(0.5,'KP'),rp:t=>pillBottle(0.5,'TELON'),aw:'kayu',bw:'telon'}});
const THUMB={t:1.5,lines:['MINYAK KAYU PUTIH','DI HIDUNG','BAYI?']};
