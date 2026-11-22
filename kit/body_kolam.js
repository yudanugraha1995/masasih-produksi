// NEWFX CHAINFX
const wcol=t=>{if(t<CH.f[0])return null;if(t>=CH.p[2]&&t<CH.f[2])return '#6DBB45';if(t>=CH.f[2]&&t<CH.f[2]+0.6){return '#5DB7EA';}return '#5DB7EA';};
mkChain({key:'GALI LUBANG!',hook:'🕳️',bg:'#FFE9A8',thumb:['GALI LUBANG','JADI KOLAM RENANG?','TAPI KALAU HUJAN?'],
 sky:'#BDE8FF',ground:'#8BD17C',groundY:1110,
 scene:t=>{let s='';
  if(t>=CH.f[4])for(let i=0;i<9;i++)s+=`<rect x="${470+i*120}" y="${fmt(lerp(980,1000,0))}" width="34" height="140" rx="8" fill="#F2E3C6" stroke="#161828" stroke-width="5"/>`;
  if(t>=CH.f[4])s+=`<rect x="450" y="1020" width="1020" height="22" fill="#F2E3C6" stroke="#161828" stroke-width="5"/>`;
  s+=`<ellipse cx="960" cy="1250" rx="400" ry="120" fill="#6B4423" stroke="#161828" stroke-width="7"/><ellipse cx="960" cy="1262" rx="360" ry="95" fill="#3A2414"/>`;
  const wc=wcol(t);if(wc){s+=`<ellipse cx="960" cy="1250" rx="400" ry="120" fill="#2F6FD6" stroke="#161828" stroke-width="7"/><ellipse cx="960" cy="1258" rx="365" ry="98" fill="${wc}"/>`;
   for(let i=0;i<4;i++)s+=`<path d="M${700+i*130},${fmt(1250+Math.sin(t*3+i)*8)}q30,-14 60,0" stroke="#fff" stroke-width="6" fill="none" opacity=".7"/>`;}
  if(t>=CH.f[3])for(let i=0;i<9;i++)s+=`<path d="M${620+i*85},1140L${620+i*85},1360M560,${1160+i*24}L1360,${1160+i*24}" stroke="#fff" stroke-width="3" opacity=".55"/>`;
  return s;},
 base:{e:'⛏️',x:1360,y:1060,s:0.9,l:'KAMU PUNYA KOLAM RENANG!'},
 steps:[{anim:'rain',pe:'💧',pl:'HUJAN? DINDING LONGSOR!',fe:null,fl:'LAPISI TERPAL'},
  {anim:'swarm',pe:'🦟',x:960,y:1050,pl:'JADI SARANG JENTIK!',fe:'⚙️',fx:1380,fy:1180,fs:0.8,idle:'spin',fl:'PASANG POMPA'},
  {anim:'grow',pe:'🦠',x:960,y:1250,pl:'AIRNYA JADI HIJAU!',fe:'🧪',fx:560,fy:1130,fs:0.8,idle:'bob',fl:'KAPORIT SECUKUPNYA'},
  {anim:'fall',pe:'🍂',pl:'DAUN BERJATUHAN!',fe:null,fl:'JARING PENUTUP'},
  {anim:'walkin',pe:'🧑',x:820,y:1020,n:4,pl:'TETANGGA IKUT NYEBUR!',fe:'🎟️',fx:1380,fy:880,fs:0.8,idle:'bob',fl:'PAGAR + TIKET'},
  {anim:'walkin',pe:'🚶',x:700,y:1000,n:5,pl:'ANTREAN KEPANJANGAN!',fe:t=>g(tr(0,0,1),emj('🛝',260))+g(tr(640,40,1),emj('🍢',170)),fx:600,fy:960,fs:1,fl:'PEROSOTAN + GORENGAN'}],
 final:{e:'🏊',x:960,y:1210,s:1.4,l:'KAMU PUNYA WATERPARK!'},q:['MASALAH APA LAGI','YANG BAKAL MUNCUL?']});
