// NEWFX B21FX
mkTrend({key:'JERUK NIPIS?',keyWord:'jeruk',hook:t=>tomato(1.2),bg:'#14301F',glow:'#3BB273',card:['KETOMBE','DIKASIH','JERUK NIPIS?'],
 sec:[{k:'fact',at:'Faktanya',it:[['Malassezia',t=>mushroom(1),'L'],['berminyak',t=>oilDrop(1),'R'],['bukti',t=>emo('BELUM TERBUKTI',1,'#5B6C8F','#fff'),'B']],lb:[['Malassezia','PEMICU: JAMUR MALASSEZIA','b']]},
  {k:'fact',at:'Asamnya',it:[['perih',t=>acidDrop(1.2),'C']],lb:[['Asamnya','PERIH & IRITASI','r']]},
  {k:'plot',at:'Plot',it:[['matahari',t=>sun(t,0.8),'L'],['ruam',t=>flame(t,0.9),'R']],lb:[['matahari','JERUK + MATAHARI = RUAM!','r'],['fitofotodermatitis','FITOFOTODERMATITIS','r']]},
  {k:'check',at:'Biar aman',title:'Biar aman:',items:[['Sampo anti ketombe','sampo'],['Zinc / ketoconazole','zinc'],['Keramas rutin','rutin']],label:'JADI GINI',src:'Sumber: American Academy of Dermatology'}],
 cta:{at:'Kamu pernah',l:'PERNAH',ls:'PERNAH',r:'BELUM',rs:'BELUM',lp:t=>tomato(0.5),rp:t=>lotion(0.5),aw:'pernah',bw:'ketombe'}});
const THUMB={t:1.5,lines:['KETOMBE','DIKASIH','JERUK NIPIS?']};
