// NEWFX B21FX
mkTrend({key:'WANGI?',keyWord:'wangi',hook:t=>g('',oilDrop(1.3)+stinkCloud(t,0.5)),bg:'#2A1F2B',glow:'#8E3B4F',card:['SUKA BAU','BENSIN','BAHAYA?'],
 sec:[{k:'fact',at:'Faktanya',it:[['benzena',t=>emo('BENZENA',1.1,'#E5383B','#fff'),'L'],['toluena',t=>emo('TOLUENA',1.1,'#F2A541'),'R'],['pusing',t=>sweatFace(t,0.9),'B']],lb:[['benzena','UAP BENSIN = ZAT KIMIA','r'],['pusing','PUSING & MUAL','y']]},
  {k:'fact',at:'Benzena termasuk',it:[['kanker',t=>emo('KARSINOGEN',1.2,'#E5383B','#fff'),'C']],lb:[['Benzena termasuk','JANGKA PANJANG: PENYEBAB KANKER','r']],src:'Sumber: WHO/IARC, Benzene'},
  {k:'plot',at:'Plot',it:[['otak',t=>brain(t,1,'happy'),'C'],['ketagihan',t=>emo('KETAGIHAN',1,'#E5383B','#fff'),'B']],lb:[['otak','OTAK MERESPONS SENANG','y'],['ketagihan','SENGAJA DIHIRUP = BAHAYA','r']]},
  {k:'check',at:'Biar aman',title:'Biar aman:',items:[['Jangan sengaja hirup','sengaja'],['Berdiri menjauh','menjauh'],['Sirkulasi udara','sirkulasi']],label:'JADI GINI'}],
 cta:{at:'Kamu termasuk',l:'SUKA BAU BENSIN',ls:'SUKA',r:'NGGAK SUKA',rs:'NGGAK',lp:t=>oilDrop(0.8),rp:t=>xAt(t,0,0,0,1),aw:'termasuk',bw:'bensin'}});
const THUMB={t:1.5,lines:['SUKA BAU','BENSIN','BAHAYA?']};
