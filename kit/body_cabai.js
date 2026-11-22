// NEWFX CHAINFX
mkChain({key:'TANAM CABAI!',hook:'🌶️',bg:'#FFE0C2',thumb:['TANAM CABAI','DI POT SENDIRI','UJUNGNYA BEGINI!'],
 sky:'#CFF1FF',ground:'#C98C5A',groundY:1250,
 scene:t=>{let s='';
  if(t>=CH.f[0]){const big=t>=CH.f[2];s+=g(tr(960,big?960:1080,big?1.9:1.1),emj(big?'🌿':'🌱',200));}
  if(t>=CH.f[3]){const n=t>=CH.p[5]?7:3;for(let i=0;i<n;i++)s+=g(tr(860+(i%4)*70,880+Math.floor(i/4)*90+Math.sin(t*2+i)*4,0.42,20),emj('🌶️',200));}
  if(t>=CH.f[4])for(let i=0;i<8;i++)s+=`<path d="M${720+i*68},720L${720+i*68},1180M700,${740+i*58}L1220,${740+i*58}" stroke="#fff" stroke-width="3" opacity=".6"/>`;
  s+=`<path d="M800,1150L1120,1150L1080,1330L840,1330Z" fill="#C0622B" stroke="#161828" stroke-width="7" stroke-linejoin="round"/><rect x="780" y="1130" width="360" height="40" rx="12" fill="#D9773D" stroke="#161828" stroke-width="6"/>`;
  return s;},
 base:{e:'🫘',x:960,y:1120,s:0.5,l:'KAMU PUNYA KEBUN CABAI!'},
 steps:[{anim:'wobble',pe:'❓',x:960,y:950,s:0.6,pl:'BIJI NGGAK TUMBUH!',fe:'♨️',fx:600,fy:1200,fs:0.8,fl:'RENDAM AIR HANGAT'},
  {anim:'grow',pe:'🐛',x:960,y:1020,pl:'DAUN KERITING & KUNING!',fe:'🧴',fx:1330,fy:1080,fs:0.9,idle:'bob',fl:'SEMPROT AIR SABUN ENCER'},
  {anim:'fall',pe:'🥀',pl:'BUNGANYA RONTOK!',fe:'☀️',fx:1300,fy:700,fs:1.1,idle:'spin',fl:'MATAHARI 6 JAM/HARI'},
  {anim:'wobble',pe:'🤢',x:1250,y:900,s:0.6,pl:'BUAH BUSUK!',fe:'🚱',fx:600,fy:980,fs:0.7,fl:'JANGAN KEBANYAKAN DISIRAM'},
  {anim:'swarm',pe:'🐦',x:960,y:900,pl:'DIPATUK BURUNG!',fe:null,fl:'PASANG JARING'},
  {anim:'rain',pe:'🌶️',cloud:false,pl:'PANEN KEBANYAKAN!',fe:t=>[0,1,2].map(i=>g(tr(i*200-200,0,1),emj('🫙',200))).join(''),fx:960,fy:1360,fs:0.7,fl:'JADI SAMBAL BOTOLAN'}],
 final:{e:'👑',x:960,y:700,s:1.2,l:'KAMU JURAGAN SAMBAL!'},q:['TIM TANAM SENDIRI','ATAU BELI DI PASAR?']});
