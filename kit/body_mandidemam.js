// NEWFX B21FX
mkTrend({key:'NGGAK BOLEH MANDI?',keyWord:'mandi',hook:t=>shower(t,1.2),bg:'#10263A',glow:'#5DB7EA',card:['DEMAM','NGGAK BOLEH','MANDI?'],
 sec:[{k:'fact',at:'Faktanya',it:[['boleh',t=>checkAt(t,-1,0,0,1.5),'C']],lb:[['boleh','MANDI SAAT DEMAM: BOLEH!','g']],src:'Sumber: IDAI, Demam pada anak'},
  {k:'fact',at:'Yang perlu',it:[['hangat',t=>thermo(t,0.9,0.5),'L'],['dingin',t=>snowflake(),'R',2],['menggigil',t=>emo('MENGGIGIL',1,'#E5383B','#fff'),'B']],lb:[['hangat','PAKAI AIR HANGAT','g'],['menggigil','AIR DINGIN BIKIN MENGGIGIL','r']]},
  {k:'plot',at:'Plot',it:[['keluar',t=>shower(t,1.1),'C']],lb:[['keluar','AIR HANGAT BANTU PANAS KELUAR','g'],['lemas','LEMAS? SEKA PAKAI HANDUK','y']]},
  {k:'check',at:'Biar aman',title:'Biar aman:',items:[['Mandi sebentar','sebentar'],['Langsung keringkan','keringkan'],['Baju tipis','tipis']],label:'JADI GINI'}],
 cta:{at:'Kamu dulu',l:'PERNAH DILARANG',ls:'DILARANG',r:'BOLEH',rs:'BOLEH',lp:t=>shower(t,0.45),rp:t=>towel(0.5),aw:'dulu',bw:'demam'}});
const THUMB={t:1.5,lines:['DEMAM','NGGAK BOLEH','MANDI?']};
