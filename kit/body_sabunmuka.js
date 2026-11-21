// NEWFX B21FX
mkTrend({key:'SABUN MANDI?',keyWord:'sabun',hook:t=>lotion(1.2),bg:'#3A1630',glow:'#F28DB2',card:['CUCI MUKA','PAKAI SABUN','MANDI?'],
 sec:[{k:'fact',at:'Faktanya',it:[['wajah',t=>faceSkin(t,1,{}),'C'],['basa',t=>emo('LEBIH BASA',1,'#5B6C8F','#fff'),'T']],lb:[['wajah','KULIT WAJAH LEBIH TIPIS','b'],['mengikis','LAPISAN PELINDUNG TERKIKIS','r']]},
  {k:'fact',at:'Akibatnya',it:[['ketarik',t=>faceSkin(t,1,{rash:true,sad:true}),'C']],lb:[['Akibatnya','KERING, MERAH, JERAWATAN','r']]},
  {k:'plot',at:'Plot',it:[['minyak',t=>oilDrop(1.4),'C']],lb:[['minyak','KERING = MINYAK MAKIN BANYAK!','r']]},
  {k:'check',at:'Biar aman',title:'Biar aman:',items:[['Sabun khusus wajah','khusus'],['Air biasa','bilas'],['Pakai pelembap','pelembap']],label:'JADI GINI'}],
 cta:{at:'Kamu tim',l:'SABUN MANDI',ls:'SABUN MANDI',r:'SABUN WAJAH',rs:'SABUN WAJAH',lp:t=>lotion(0.5),rp:t=>faceSkin(t,0.35,{}),aw:'sabun',bw:'muka'}});
const THUMB={t:1.5,lines:['CUCI MUKA','PAKAI SABUN','MANDI?']};
