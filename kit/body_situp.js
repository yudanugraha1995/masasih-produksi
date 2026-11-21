// ===== Sit Up Tiap Hari? Masa Sih Bikin Perut Rata? ===== NEWFX B21FX
mkTrend({key:'PERUT RATA?',keyWord:'perut',hook:t=>scaleWeight(t,1,'-'),bg:'#3A2A16',glow:'#F2A541',card:['SIT UP','BIKIN','PERUT RATA?'],
 sec:[{k:'fact',at:'Faktanya',it:[['satu bagian',t=>stomach(t,1.2,0),'C'],['spot',t=>xAt(t,-1,0,0,1.5),'R']],lb:[['satu bagian','LEMAK NGGAK BISA DIBAKAR SEBAGIAN','r'],['spot','SPOT REDUCTION = MITOS','r']],src:'Sumber: Vispute dkk., J Strength Cond Res (2011)'},
  {k:'fact',at:'Sit up memang',it:[['menguatkan',t=>emo('OTOT KUAT',1,'#3BB273','#fff'),'T'],['ketutup',t=>emo('KETUTUP LEMAK',1,'#F2A541'),'B']],lb:[['Sit up memang','OTOT KUAT, TAPI...','y']]},
  {k:'plot',at:'Plot',it:[['dapur',t=>plateDinner(0.9),'C'],['defisit',t=>emo('DEFISIT KALORI',0.9,'#E5383B','#fff'),'T'],['jalan',t=>runner(t,0.7),'BL'],['beban',t=>emo('ANGKAT BEBAN',0.8,'#5B6C8F','#fff'),'BR']],lb:[['dapur','KUNCINYA DI DAPUR!','g']]},
  {k:'check',at:'Biar hasilnya',title:'Biar maksimal:',items:[['Atur pola makan','pola'],['Tidur cukup','tidur'],['Tetap latih otot','latih']],label:'JADI GINI'}],
 cta:{at:'Kamu tim',l:'TIM SIT UP',ls:'SIT UP',r:'TIM JALAN KAKI',rs:'JALAN',lp:t=>stomach(t,0.5,0),rp:t=>runner(t,0.4),aw:'sit',bw:'jalan'}});
const THUMB={t:1.5,lines:['SIT UP TIAP HARI','BIKIN','PERUT RATA?']};
