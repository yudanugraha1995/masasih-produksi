// ===== Nangis Bikin Sehat? Masa Sih? ===== NEWFX B21FX
mkTrend({key:'TANDA LEMAH?',keyWord:'lemah',hook:t=>faceSkin(t,1,{sad:true}),bg:'#10263A',glow:'#5DB7EA',card:['NANGIS','BIKIN','SEHAT?'],
 sec:[{k:'fact',at:'Faktanya',it:[['menenangkan',t=>heart(1.1,0),'C'],['rileks',t=>brain(t,0.8,'happy'),'R']],lb:[['menenangkan','BANTU MENENANGKAN DIRI','g']],src:'Sumber: Gračanin dkk., Frontiers in Psychology (2014)'},
  {k:'fact',at:'Air mata',it:[['debu',t=>eyeBall(t,1.2),'C'],['antibakteri',t=>shield(0.8),'R']],lb:[['Air mata','AIR MATA LINDUNGI MATA','b']]},
  {k:'plot',at:'Plot',it:[['menemani',t=>person(0,0,2,'#E8505B'),'L'],['menghibur',t=>person(0,0,2,'#3E7CC9'),'R']],lb:[['menemani','LEBIH LEGA KALAU DITEMANI','g']],src:'Sumber: Bylsma dkk., J Res Personality (2008)'},
  {k:'fact',at:'Tapi kalau',it:[['bantuan',t=>emo('BUTUH BANTUAN',1,'#B47EDB','#fff'),'C']],lb:[['Tapi kalau','SERING TANPA SEBAB? CARI BANTUAN','y']]},
  {k:'check',at:'Biar lega',title:'Biar lega:',items:[['Cerita ke orang dipercaya','cerita'],['Tidur cukup','tidur'],['Ke psikolog','psikolog']],label:'JADI GINI'}],
 cta:{at:'Kapan terakhir',l:'BARU-BARU INI',ls:'BARU',r:'UDAH LAMA',rs:'LAMA',lp:t=>faceSkin(t,0.4,{sad:true}),rp:t=>faceSkin(t,0.4,{}),aw:'terakhir',bw:'nangis',vw:'kamu'}});
const THUMB={t:1.5,lines:['NANGIS','BIKIN','SEHAT?']};
