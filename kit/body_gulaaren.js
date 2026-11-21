// NEWFX B21FX
mkTrend({key:'LEBIH SEHAT?',keyWord:'sehat',hook:t=>sugarSpoon(1.3),bg:'#3A2A16',glow:'#F2A541',card:['GULA AREN','LEBIH SEHAT','DARI GULA PASIR?'],
 sec:[{k:'fact',at:'Faktanya',it:[['mineral',t=>emo('KALIUM, ZAT BESI',0.9,'#5B6C8F','#fff'),'T'],['kecil',t=>emo('SEDIKIT BANGET',1,'#F2A541'),'B']],lb:[['mineral','ADA MINERAL, TAPI KECIL','y']]},
  {k:'fact',at:'Kalorinya',it:[['empat',t=>bigNum(t,-1,'4 kkal','per gram',0,0,{size:150}),'C',1/1.4]],lb:[['Kalorinya','KALORI HAMPIR SAMA','r']]},
  {k:'plot',at:'Plot',it:[['tetap gula',t=>sugarSpoon(1.2),'C'],['gula darah',t=>bloodDrop(0.9),'L'],['berat',t=>scaleWeight(t,0.7,'+'),'R']],lb:[['tetap gula','GULA AREN TETAP GULA!','r'],['Batas','BATAS ±4 SDM SEHARI','b']],src:'Sumber: Permenkes No. 30/2013'},
  {k:'check',at:'Biar aman',title:'Biar aman:',items:[['Kurangi takaran','kurangi'],['Minuman tanpa gula','tanpa']],label:'JADI GINI'}],
 cta:{at:'Kamu tim',l:'GULA AREN',ls:'AREN',r:'GULA PASIR',rs:'PASIR',lp:t=>sugarSpoon(0.6),rp:t=>sugarCube(0,0,90),aw:'aren',bw:'pasir'}});
const THUMB={t:1.5,lines:['GULA AREN','LEBIH SEHAT','DARI GULA PASIR?']};
