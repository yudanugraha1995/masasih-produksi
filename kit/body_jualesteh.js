// NEWFX CHAINFX
mkChain({key:'JUALAN ES TEH!',hook:'🧋',bg:'#D9F1FF',thumb:['JUALAN ES TEH','DI DEPAN RUMAH','ENDINGNYA KAGET!'],
 sky:'#D9F1FF',ground:'#BFC6CC',groundY:1260,
 scene:t=>`<rect x="660" y="1130" width="600" height="40" rx="10" fill="#C98C5A" stroke="#161828" stroke-width="6"/><rect x="690" y="1170" width="30" height="120" fill="#8C6A52"/><rect x="1200" y="1170" width="30" height="120" fill="#8C6A52"/>`,
 base:{e:'🧋',x:960,y:1060,s:0.8,l:'KAMU PUNYA USAHA!'},
 steps:[{anim:'swarm',pe:'🦗',x:960,y:950,s:0.8,pl:'NGGAK ADA YANG BELI!',fe:t=>`<rect x="-330" y="-70" width="660" height="140" rx="20" fill="#E5383B" stroke="#161828" stroke-width="7"/><text x="0" y="22" text-anchor="middle" font-family="B2" font-weight="800" font-size="62" fill="#fff">ES TEH JUMBO 5RB</text>`,fx:960,fy:800,fs:1,fl:'SPANDUK ES TEH JUMBO'},
  {anim:'wobble',pe:'🫠',x:1180,y:1050,s:0.6,pl:'ES BATU CEPAT CAIR!',fe:'🧊',fx:740,fy:1060,fs:0.7,fl:'KOTAK PENDINGIN + TEDUH'},
  {anim:'rain',pe:'🍬',cloud:false,pl:'KEMANISAN!',fe:t=>`<rect x="-200" y="-90" width="400" height="180" rx="16" fill="#fff" stroke="#161828" stroke-width="6"/><text x="0" y="-30" text-anchor="middle" font-family="B2" font-weight="800" font-size="40" fill="#161828">MANIS</text><text x="0" y="15" text-anchor="middle" font-family="B2" font-weight="800" font-size="40" fill="#161828">SEDANG</text><text x="0" y="60" text-anchor="middle" font-family="B2" font-weight="800" font-size="40" fill="#3BB273">TANPA GULA</text>`,fx:1270,fy:1000,fs:0.9,fl:'MANIS / SEDANG / TANPA GULA'},
  {anim:'rain',pe:'💧',pl:'HUJAN, PEMBELI HILANG!',fe:'🫚',fx:1150,fy:1080,fs:0.6,fl:'MENU WEDANG JAHE'},
  {anim:'swarm',pe:'✨',x:960,y:950,pl:'MINTA YANG KEKINIAN!',fe:t=>g(tr(-120,0,1),emj('🥤',200))+g(tr(120,0,1),emj('🧋',200)),fx:820,fy:1080,fs:0.6,fl:'BOBA + TEH SUSU'},
  {anim:'walkin',pe:'🧑',x:700,y:1300,n:5,s:0.9,pl:'ANTREAN MENGULAR!',fe:'🏪',fx:1330,fy:960,fs:1.1,fl:'KARYAWAN + CABANG'}],
 final:{e:'💼',x:960,y:720,s:1.2,l:'KAMU BOS FRANCHISE ES TEH!'},q:['MENU APA YANG','MAU KAMU TAMBAH?']});
