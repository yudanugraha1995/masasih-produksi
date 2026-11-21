// NEWFX B21FX
mkTrend({key:'LURUHIN LEMAK?',keyWord:'luruhin',hook:t=>glassW(t,1.2,0.8),bg:'#3A2A16',glow:'#F7D21E',card:['AIR LEMON','LURUHIN','LEMAK PERUT?'],
 sec:[{k:'fact',at:'Faktanya',it:[['membakar',t=>xAt(t,-1,0,0,1.4),'R'],['vitamin',t=>emo('VITAMIN C',1,'#F2A541'),'T'],['segar',t=>glassW(t,1,0.8),'C']],lb:[['Faktanya','NGGAK MEMBAKAR LEMAK','r']]},
  {k:'fact',at:'Berat badan',it:[['kalori',t=>scaleWeight(t,1,'-'),'C']],lb:[['Berat badan','KUNCINYA: TOTAL KALORI','g']]},
  {k:'plot',at:'Plot',it:[['email',t=>tooth(t,1.3,{sad:true}),'C'],['Asamnya',t=>acidDrop(1),'R']],lb:[['email','EMAIL GIGI BISA TERKIKIS!','r']]},
  {k:'check',at:'Biar aman',title:'Biar aman:',items:[['Pakai sedotan','sedotan'],['Kumur air putih','kumur'],['Atur pola makan','pola']],label:'JADI GINI'}],
 cta:{at:'Kamu tim',l:'TIM LEMON',ls:'LEMON',r:'AIR PUTIH',rs:'AIR',lp:t=>glassW(t,0.5,0.8),rp:t=>glassW(t,0.5,0.6),aw:'lemon',bw:'pagi',vw:'tiap'}});
const THUMB={t:1.5,lines:['AIR LEMON','LURUHIN','LEMAK PERUT?']};
