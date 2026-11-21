// NEWFX B21FX
mkTrend({key:'PANJANG UMUR?',keyWord:'panjang',hook:t=>faceSkin(t,1,{}),bg:'#3A2A16',glow:'#F7D21E',card:['TERTAWA','BIKIN','PANJANG UMUR?'],
 sec:[{k:'fact',at:'Faktanya',it:[['endorfin',t=>brain(t,1,'happy'),'C'],['sakit',t=>emo('NYERI BERKURANG',0.9,'#3BB273','#fff'),'B']],lb:[['endorfin','ENDORFIN = PERASAAN ENAK','g']]},
  {k:'fact',at:'Hormon stres',it:[['turun',t=>heart(1.1,0),'C']],lb:[['Hormon stres','HORMON STRES TURUN','g']]},
  {k:'plot',at:'Plot',it:[['menular',t=>person(0,0,2,'#E8505B'),'L'],['dipaksa',t=>person(0,0,2,'#3E7CC9'),'R'],['laughter',t=>emo('LAUGHTER YOGA',0.9,'#B47EDB','#fff'),'T']],lb:[['menular','TAWA ITU MENULAR!','g'],['panjang umur','UMUR PANJANG? BUKTI TERBATAS','y']]},
  {k:'check',at:'Biar sehat',title:'Biar sehat:',items:[['Nonton yang lucu','lucu'],['Kumpul teman','teman'],['Tertawa tiap hari','tiap hari']],label:'JADI GINI'}],
 cta:{at:'Hari ini',l:'UDAH KETAWA',ls:'UDAH',r:'BELUM',rs:'BELUM',lp:t=>faceSkin(t,0.35,{}),rp:t=>faceSkin(t,0.35,{sad:true}),aw:'udah',bw:'belum',vw:'ketawa'}});
const THUMB={t:1.5,lines:['TERTAWA','BIKIN','PANJANG UMUR?']};
