// NEWFX CHAINFX
mkChain({key:'PUNGUT KUCING!',hook:'🐱',bg:'#FFE1EC',thumb:['PUNGUT KUCING','KELAPARAN','MASALAHNYA BARU MULAI!'],
 bgFn:t=>`<rect width="1920" height="1920" fill="#FFE1EC"/><rect y="1250" width="1920" height="700" fill="#E9C9A3"/><rect y="1240" width="1920" height="20" fill="#C9A27A"/><rect x="1110" y="560" width="300" height="300" rx="20" fill="#BDE8FF" stroke="#161828" stroke-width="8"/><path d="M1260,560L1260,860M1110,710L1410,710" stroke="#161828" stroke-width="6"/>`,
 scene:t=>{let s='';if(t>=CH.p[3])s+=g(tr(640,1130,1.5),emj('🛋️',200));return s;},
 base:{e:'🐱',x:960,y:1170,s:1.1,l:'KAMU PUNYA PELIHARAAN!'},
 steps:[{anim:'wobble',pe:'🥛',x:720,y:1180,s:0.7,pl:'DIKASIH SUSU SAPI?',fe:'🥣',fx:740,fy:1260,fs:0.6,fl:'MAKANAN KUCING + AIR PUTIH'},
  {anim:'grow',pe:'🪲',x:960,y:1140,s:0.8,pl:'BADANNYA PENUH KUTU!',fe:'🩺',fx:1330,fy:1050,fs:0.8,idle:'bob',fl:'SAMPO KUCING + DOKTER HEWAN'},
  {anim:'wobble',pe:'💦',x:1250,y:1260,s:0.6,pl:'PIPIS SEMBARANGAN!',fe:'📦',fx:1300,fy:1240,fs:0.8,fl:'KOTAK PASIR'},
  {anim:'wobble',pe:'💢',x:640,y:1000,s:0.7,pl:'SOFA DICAKAR!',fe:'🪵',fx:470,fy:1170,fs:0.9,fl:'TIANG GARUKAN'},
  {anim:'dash',pe:'🐈',y:1180,pl:'LARI-LARI TENGAH MALAM!',fe:'🌅',fx:1260,fy:710,fs:1,fl:'AKTIF SUBUH & SENJA'},
  {anim:'walkin',pe:'🐈‍⬛',x:1000,y:1200,n:4,s:0.9,pl:'TEMANNYA IKUT DATANG!',fe:t=>[0,1,2,3,4].map(i=>g(tr(i*170-340,Math.sin(t*4+i)*8,1),emj(['🐈','🐈‍⬛','🐱','🐈','🐈‍⬛'][i],200))).join(''),fx:960,fy:1340,fs:0.6,fl:'TUJUH KUCING!'}],
 final:{e:'☕',x:960,y:760,s:1.3,l:'KAMU PUNYA CAT CAFE!'},q:['KAMU TIM KUCING','ATAU TIM ANJING?']});
