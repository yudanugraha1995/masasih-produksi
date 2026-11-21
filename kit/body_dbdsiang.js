// ===== Nyamuk DBD Gigitnya Siang? Masa Sih? ===== NEWFX B21FX
mkTrend({key:'MALAM DOANG?',keyWord:'malam',hook:t=>mosquito(t,1.4),bg:'#10263A',glow:'#5DB7EA',card:['NYAMUK DBD','CUMA GIGIT','MALAM?'],
 sec:[{k:'fact',at:'Faktanya',it:[['Aedes',t=>mosquito(t,1.3),'C'],['pagi',t=>sun(t,0.7),'L'],['sore',t=>emo('15.00-17.00',0.9,'#F2A541'),'R']],lb:[['Aedes','AEDES AEGYPTI','b'],['pagi','AKTIF PAGI & SORE!','r']],src:'Sumber: Kemenkes RI'},
  {k:'fact',at:'Kemenkes',it:[['sembilan',t=>bigNum(t,-1,'98.946','kasus DBD s.d. Okt 2026',0,0,{size:150}),'C',1/1.4]],lb:[['Kemenkes','KASUS DBD 2026','r']],src:'Sumber: Kemenkes RI via NU Online'},
  {k:'plot',at:'Plot',it:[['bak',t=>bodyWater(t,0,0,0.7),'L'],['pot',t=>puddle(t,1),'R'],['got',t=>xAt(t,-1,0,0,1.4),'B']],lb:[['air bersih','TELUR DI AIR BERSIH!','r']]},
  {k:'check',at:'Biar aman',title:'3M Plus:',items:[['Menguras','menguras'],['Menutup','menutup'],['Daur ulang','mendaur'],['Losion anti nyamuk','losion']],label:'CEGAH DBD'}],
 cta:{at:'Kamu udah',l:'UDAH NGURAS',ls:'UDAH',r:'BELUM',rs:'BELUM',lp:t=>checkAt(t,0,0,0,1.3),rp:t=>mosquito(t,0.6),aw:'udah',bw:'minggu'}});
const THUMB={t:1.5,lines:['NYAMUK DBD','GIGITNYA SIANG?','MASA SIH?']};
