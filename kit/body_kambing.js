// ===== Makan Sate Kambing? Masa Sih Langsung Darah Tinggi? ===== NEWFX B21FX
mkTrend({key:'DARAH TINGGI?',keyWord:'darah',hook:t=>meat(1.2),bg:'#3A2A16',glow:'#F2A541',card:['SATE KAMBING','BIKIN','DARAH TINGGI?'],
 sec:[{k:'fact',at:'Faktanya',it:[['kambing',t=>meat(1.2),'C'],['sapi',t=>emo('VS SAPI',1,'#5B6C8F','#fff'),'T']],lb:[['Faktanya','NGGAK LANGSUNG NAIKKAN TENSI','g'],['tanpa lemak','KAMBING TANPA LEMAK LEBIH RENDAH LEMAK','g']],src:'Sumber: USDA FoodData Central'},
  {k:'fact',at:'Yang bikin',it:[['garam',t=>saltShaker(0.8),'L'],['kecap',t=>sachet(0.5,'KECAP','#3A2A16'),'R'],['gajih',t=>oilDrop(1.2),'B']],lb:[['Yang bikin','PELAKUNYA: BUMBU!','r']]},
  {k:'plot',at:'Plot',it:[['kekenyangan',t=>stomach(t,1.2,0),'C'],['minum',t=>glassW(t,0.8,0.2),'R']],lb:[['kekenyangan','KEKENYANGAN & KURANG MINUM','y'],['hipertensi','HIPERTENSI? TETAP JAGA','r']]},
  {k:'check',at:'Biar aman',title:'Biar aman:',items:[['Pilih tanpa lemak','tanpa'],['Kurangi kecap','kecap'],['Imbangi sayur','sayur']],label:'JADI GINI'}],
 cta:{at:'Kamu tim',l:'TIM KAMBING',ls:'KAMBING',r:'TIM AYAM',rs:'AYAM',lp:t=>meat(0.6),rp:t=>chicken(t,0.5),aw:'kambing',bw:'ayam'}});
const THUMB={t:1.5,lines:['SATE KAMBING','BIKIN','DARAH TINGGI?']};
