const WORDS=[{"w": "Woyyy!", "s": 0.15, "e": 0.72}, {"w": "Pernah", "s": 0.8, "e": 1.12}, {"w": "dibilang,", "s": 1.16, "e": 1.84}, {"w": "jangan", "s": 1.88, "e": 2.08}, {"w": "kebanyakan", "s": 2.133, "e": 2.56}, {"w": "micin,", "s": 2.66, "e": 3.28}, {"w": "nanti", "s": 3.34, "e": 3.52}, {"w": "bego?", "s": 3.62, "e": 4.08}, {"w": "Generasi", "s": 4.213, "e": 5.12}, {"w": "micin,", "s": 5.2, "e": 5.68}, {"w": "katanya.", "s": 5.7, "e": 6.44}, {"w": "Masa", "s": 6.868, "e": 7.121}, {"w": "sih?", "s": 7.201, "e": 7.441}, {"w": "Yuk", "s": 8.211, "e": 8.241}, {"w": "kita", "s": 8.289, "e": 8.481}, {"w": "cek!", "s": 8.521, "e": 8.801}, {"w": "Micin", "s": 9.041, "e": 9.841}, {"w": "itu", "s": 9.921, "e": 10.161}, {"w": "nama", "s": 10.209, "e": 10.401}, {"w": "lainnya", "s": 10.465, "e": 10.801}, {"w": "MSG,", "s": 11.001, "e": 11.681}, {"w": "monosodium", "s": 11.781, "e": 12.561}, {"w": "glutamat.", "s": 12.625, "e": 13.281}, {"w": "Glutamatnya", "s": 13.521, "e": 14.561}, {"w": "sama", "s": 14.625, "e": 14.881}, {"w": "dengan", "s": 14.915, "e": 15.121}, {"w": "yang", "s": 15.153, "e": 15.281}, {"w": "ada", "s": 15.341, "e": 15.521}, {"w": "alami", "s": 15.574, "e": 15.921}, {"w": "di", "s": 15.948, "e": 16.001}, {"w": "tomat,", "s": 16.054, "e": 16.561}, {"w": "keju,", "s": 16.641, "e": 17.121}, {"w": "dan", "s": 17.161, "e": 17.281}, {"w": "jamur.", "s": 17.361, "e": 17.841}, {"w": "Tubuh", "s": 18.041, "e": 18.721}, {"w": "kita", "s": 18.801, "e": 19.121}, {"w": "bahkan", "s": 19.181, "e": 19.521}, {"w": "bikin", "s": 19.581, "e": 19.841}, {"w": "glutamat", "s": 19.889, "e": 20.321}, {"w": "sendiri.", "s": 20.353, "e": 20.881}, {"w": "Badan", "s": 21.061, "e": 21.761}, {"w": "pengawas", "s": 21.793, "e": 22.161}, {"w": "makanan", "s": 22.201, "e": 22.561}, {"w": "Amerika,", "s": 22.631, "e": 23.281}, {"w": "FDA,", "s": 23.401, "e": 24.121}, {"w": "menggolongkan", "s": 24.161, "e": 24.721}, {"w": "MSG", "s": 24.841, "e": 25.281}, {"w": "sebagai", "s": 25.321, "e": 25.601}, {"w": "bahan", "s": 25.681, "e": 26.001}, {"w": "yang", "s": 26.033, "e": 26.161}, {"w": "umumnya", "s": 26.214, "e": 26.561}, {"w": "aman.", "s": 26.614, "e": 27.041}, {"w": "Penelitian", "s": 27.201, "e": 28.081}, {"w": "buta,", "s": 28.141, "e": 28.721}, {"w": "di", "s": 28.748, "e": 28.801}, {"w": "mana", "s": 28.865, "e": 29.121}, {"w": "orang", "s": 29.161, "e": 29.361}, {"w": "nggak", "s": 29.388, "e": 29.521}, {"w": "tahu", "s": 29.561, "e": 29.761}, {"w": "dia", "s": 29.821, "e": 30.001}, {"w": "makan", "s": 30.041, "e": 30.321}, {"w": "MSG", "s": 30.401, "e": 30.801}, {"w": "atau", "s": 30.849, "e": 31.041}, {"w": "bukan,", "s": 31.094, "e": 31.761}, {"w": "juga", "s": 31.809, "e": 32.001}, {"w": "nggak", "s": 32.028, "e": 32.161}, {"w": "menemukan", "s": 32.201, "e": 32.641}, {"w": "gejala", "s": 32.694, "e": 33.121}, {"w": "yang", "s": 33.153, "e": 33.281}, {"w": "konsisten.", "s": 33.361, "e": 34.081}, {"w": "Terus,", "s": 34.301, "e": 35.201}, {"w": "bikin", "s": 35.281, "e": 35.601}, {"w": "bodoh?", "s": 35.681, "e": 36.081}, {"w": "Glutamat", "s": 36.321, "e": 37.281}, {"w": "dari", "s": 37.313, "e": 37.441}, {"w": "makanan", "s": 37.481, "e": 37.921}, {"w": "hampir", "s": 37.961, "e": 38.321}, {"w": "semuanya", "s": 38.381, "e": 38.801}, {"w": "dipakai", "s": 38.861, "e": 39.281}, {"w": "di", "s": 39.334, "e": 39.441}, {"w": "usus,", "s": 39.521, "e": 40.081}, {"w": "dan", "s": 40.181, "e": 40.481}, {"w": "otak", "s": 40.561, "e": 40.801}, {"w": "dijaga", "s": 40.861, "e": 41.201}, {"w": "sawar", "s": 41.261, "e": 41.601}, {"w": "darah", "s": 41.641, "e": 41.841}, {"w": "otak.", "s": 41.894, "e": 42.241}, {"w": "Belum", "s": 42.401, "e": 43.041}, {"w": "ada", "s": 43.101, "e": 43.281}, {"w": "bukti", "s": 43.308, "e": 43.521}, {"w": "micin", "s": 43.601, "e": 43.921}, {"w": "dalam", "s": 43.961, "e": 44.161}, {"w": "jumlah", "s": 44.218, "e": 44.561}, {"w": "wajar", "s": 44.641, "e": 44.881}, {"w": "bikin", "s": 44.941, "e": 45.201}, {"w": "otak", "s": 45.281, "e": 45.521}, {"w": "lemot.", "s": 45.574, "e": 46.001}, {"w": "Tapi", "s": 46.661, "e": 46.721}, {"w": "tetap", "s": 46.781, "e": 47.041}, {"w": "ada", "s": 47.101, "e": 47.281}, {"w": "catatannya.", "s": 47.341, "e": 48.001}, {"w": "Micin", "s": 48.181, "e": 48.801}, {"w": "mengandung", "s": 48.833, "e": 49.201}, {"w": "natrium,", "s": 49.241, "e": 50.001}, {"w": "walaupun", "s": 50.041, "e": 50.481}, {"w": "cuma", "s": 50.541, "e": 50.801}, {"w": "sekitar", "s": 50.828, "e": 51.201}, {"w": "sepertiga", "s": 51.241, "e": 51.761}, {"w": "garam", "s": 51.841, "e": 52.081}, {"w": "dapur.", "s": 52.141, "e": 52.561}, {"w": "Ada", "s": 52.741, "e": 53.281}, {"w": "juga", "s": 53.345, "e": 53.601}, {"w": "orang", "s": 53.654, "e": 53.921}, {"w": "yang", "s": 53.953, "e": 54.081}, {"w": "sensitif", "s": 54.138, "e": 54.641}, {"w": "kalau", "s": 54.701, "e": 54.921}, {"w": "makan", "s": 54.941, "e": 55.281}, {"w": "dalam", "s": 55.321, "e": 55.521}, {"w": "jumlah", "s": 55.578, "e": 55.921}, {"w": "besar.", "s": 55.988, "e": 56.401}, {"w": "Plot", "s": 57.095, "e": 57.121}, {"w": "twist-nya...", "s": 57.161, "e": 57.921}, {"w": "micin", "s": 57.981, "e": 58.241}, {"w": "justru", "s": 58.281, "e": 58.641}, {"w": "bisa", "s": 58.689, "e": 58.881}, {"w": "bantu", "s": 58.921, "e": 59.201}, {"w": "ngurangin", "s": 59.228, "e": 59.601}, {"w": "garam!", "s": 59.681, "e": 60.401}, {"w": "Masakan", "s": 60.481, "e": 61.041}, {"w": "tetap", "s": 61.081, "e": 61.281}, {"w": "gurih", "s": 61.361, "e": 61.721}, {"w": "dengan", "s": 61.738, "e": 61.841}, {"w": "natrium", "s": 61.881, "e": 62.321}, {"w": "lebih", "s": 62.374, "e": 62.641}, {"w": "sedikit.", "s": 62.681, "e": 63.201}, {"w": "Yang", "s": 63.297, "e": 63.681}, {"w": "bikin", "s": 63.741, "e": 64.001}, {"w": "masalah", "s": 64.061, "e": 64.401}, {"w": "itu", "s": 64.481, "e": 64.721}, {"w": "jajanan", "s": 64.761, "e": 65.201}, {"w": "super", "s": 65.241, "e": 65.441}, {"w": "asin", "s": 65.548, "e": 65.841}, {"w": "dan", "s": 65.881, "e": 66.001}, {"w": "gorengan", "s": 66.065, "e": 66.481}, {"w": "berlebihan,", "s": 66.521, "e": 67.281}, {"w": "bukan", "s": 67.334, "e": 67.601}, {"w": "micinnya.", "s": 67.661, "e": 68.521}, {"w": "Jadi", "s": 68.951, "e": 69.201}, {"w": "micin", "s": 69.261, "e": 69.521}, {"w": "boleh,", "s": 69.574, "e": 70.001}, {"w": "asal", "s": 70.108, "e": 70.481}, {"w": "secukupnya,", "s": 70.521, "e": 71.361}, {"w": "dan", "s": 71.401, "e": 71.521}, {"w": "imbangi", "s": 71.601, "e": 72.001}, {"w": "dengan", "s": 72.035, "e": 72.241}, {"w": "sayur", "s": 72.321, "e": 72.641}, {"w": "dan", "s": 72.701, "e": 72.881}, {"w": "buah.", "s": 72.961, "e": 73.281}, {"w": "Kamu", "s": 74.211, "e": 74.321}, {"w": "tim", "s": 74.381, "e": 74.561}, {"w": "pakai", "s": 74.601, "e": 74.801}, {"w": "micin", "s": 74.881, "e": 75.281}, {"w": "atau", "s": 75.329, "e": 75.521}, {"w": "tim", "s": 75.581, "e": 75.761}, {"w": "tanpa", "s": 75.821, "e": 76.081}, {"w": "micin,", "s": 76.141, "e": 76.561}, {"w": "kak?", "s": 76.581, "e": 77.121}, {"w": "Tulis", "s": 77.161, "e": 77.441}, {"w": "di", "s": 77.468, "e": 77.521}, {"w": "komentar", "s": 77.581, "e": 78.081}, {"w": "ya!", "s": 78.134, "e": 78.401}];const DUR=78.446;
const isV=ASP==='v';
// ---------- objek khusus ----------
function riceMound(o={}){
  let gr='';
  for(let i=0;i<26;i++){const x=-130+rnd(i)*260;const top=-40-Math.sqrt(Math.max(0,1-(x/150)**2))*120;const y=lerp(top+18,-46,rnd(i+50)*0.85);
    gr+=`<ellipse cx="${fmt(x)}" cy="${fmt(y)}" rx="13" ry="6" fill="${o.cold?'#E4F2FB':'#FFFDF6'}" stroke="#D9D2C2" stroke-width="2" transform="rotate(${fmt(rnd(i+9)*180)} ${fmt(x)} ${fmt(y)})"/>`;}
  return `<path d="M-152,-40C-152,-150 -80,-168 0,-168C80,-168 152,-150 152,-40Z" fill="${o.cold?'#EAF5FC':'#FFFBF0'}" stroke="${OL}" stroke-width="5"/>${gr}`;}
function riceBowl(t,s=1,o={}){
  let steam='';
  if(o.steam){for(let i=0;i<3;i++){const ph=(t*0.55+i/3)%1;steam+=`<path d="M${-60+i*60},${-180-ph*150}q-22,-32 0,-64q22,-32 0,-64" stroke="#fff" stroke-width="13" fill="none" stroke-linecap="round" opacity="${fmt(0.75*Math.sin(ph*Math.PI))}"/>`;}}
  let frost='';
  if(o.cold){for(let i=0;i<5;i++){const a=t*0.6+i*1.3;frost+=g(tr(-140+i*70,-210-12*Math.sin(a),0.5+0.15*(i%2),a*30),snowflake());}}
  return g(`scale(${s})`,`${riceMound(o)}
   <path d="M-180,-44L180,-44Q172,88 0,104Q-172,88 -180,-44Z" fill="${o.col||'#F3F7FA'}" stroke="${OL}" stroke-width="6" stroke-linejoin="round"/>
   <path d="M-172,-6Q0,14 172,-6" stroke="${o.band||'#2C8FC4'}" stroke-width="14" fill="none"/>
   <path d="M-150,-26Q-140,40 -90,70" stroke="#fff" stroke-width="10" fill="none" stroke-linecap="round" opacity=".7"/>
   <rect x="-70" y="96" width="140" height="26" rx="10" fill="${o.col||'#E3EBF1'}" stroke="${OL}" stroke-width="5"/>${steam}${frost}`);}
function snowflake(){let p='';for(let i=0;i<3;i++)p+=`<path d="M0,-30L0,30" stroke="#BFE9FF" stroke-width="7" stroke-linecap="round" transform="rotate(${i*60})"/>`;return p+`<circle r="7" fill="#fff"/>`;}
function riceBox(s=1,cold=true){return g(`scale(${s})`,`<rect x="-150" y="-110" width="300" height="130" rx="22" fill="#DDF1FB" fill-opacity=".9" stroke="${OL}" stroke-width="5"/>
  <path d="M-130,-60Q-60,-100 0,-80Q60,-104 130,-62L130,0L-130,0Z" fill="${cold?'#EEF7FC':'#FFFBF0'}"/>
  <rect x="-164" y="-138" width="328" height="40" rx="16" fill="#2C8FC4" stroke="${OL}" stroke-width="5"/><rect x="-40" y="-150" width="80" height="20" rx="8" fill="#1F6E9C" stroke="${OL}" stroke-width="4"/>`);}
function fridge(t,open=0,glow=1){
  const d=open; // 0 closed .. 1 open
  let s=`<rect x="-240" y="-820" width="480" height="820" rx="40" fill="#E9EFF3" stroke="${OL}" stroke-width="7"/>`;
  s+=`<rect x="-210" y="-790" width="420" height="760" rx="26" fill="#BFE6F7"/>`;
  s+=`<circle cx="0" cy="-460" r="${260}" fill="#fff" opacity="${0.55*glow*d}" filter="url(#glowf)"/>`;
  s+=`<path d="M-210,-560L210,-560M-210,-330L210,-330" stroke="#fff" stroke-width="10" opacity=".9"/>`;
  s+=g('translate(0 -340)',riceBox(0.95));
  s+=`<rect x="-150" y="-700" width="90" height="130" rx="18" fill="#F6C76A" stroke="${OL}" stroke-width="4"/><rect x="40" y="-680" width="110" height="110" rx="20" fill="#9CD08A" stroke="${OL}" stroke-width="4"/>`;
  s+=`<rect x="-180" y="-250" width="360" height="200" rx="20" fill="#DDF1FB" stroke="${OL}" stroke-width="4" opacity=".8"/>`;
  // door
  const w=lerp(480,60,eout(d));
  s+=`<rect x="${fmt(240-w)}" y="-820" width="${fmt(w)}" height="820" rx="40" fill="#F7FAFC" stroke="${OL}" stroke-width="7"/>`;
  if(d<0.5) s+=`<rect x="${fmt(240-w+40)}" y="-640" width="22" height="200" rx="11" fill="#9AA9B8"/><path d="M${fmt(240-w)},-300L240,-300" stroke="${OL}" stroke-width="6" opacity=".4"/>`;
  for(let i=0;i<5;i++){const a=t*0.7+i*1.7;const fx=-170+rnd(i)*340, fy=-760+((t*40+rnd(i+5)*700)%700);s+=g(tr(fx,fy,0.45*d,a*40),snowflake(),`opacity="${0.8*d}"`);}
  return s;}
function sugarStack(x,y,n,sz=30){let c='';for(let j=0;j<n;j++){c+=sugarCube(x-sz*0.7,y-j*sz*1.5,sz)+sugarCube(x+sz*0.7,y-j*sz*1.5+sz*0.35,sz);}return `<g filter="url(#dsh)">${c}</g>`;}
function person(x,y,s=1,col='#5B6C8F'){return g(tr(x,y,s),`<circle cx="0" cy="-118" r="34" fill="${col}"/><path d="M-50,0L-50,-50Q-50,-80 -20,-80L20,-80Q50,-80 50,-50L50,0Z" fill="${col}"/>`);}
function bacterium(s=1,col='#C77DDB',r=0,mood='evil',t=0){
  let fl='';for(let i=0;i<4;i++){fl+=`<path d="M${-60+i*40},40q-10,${fmt(26+6*Math.sin(t*8+i))} 6,${50}" stroke="${OL}" stroke-width="5" fill="none" stroke-linecap="round"/>`;}
  const eyes=mood==='evil'?`<path d="M-44,-22L-14,-10M44,-22L14,-10" stroke="#2E2430" stroke-width="7" stroke-linecap="round"/><circle cx="-26" cy="0" r="9" fill="#2E2430"/><circle cx="26" cy="0" r="9" fill="#2E2430"/><path d="M-20,26Q0,14 20,26" stroke="#2E2430" stroke-width="6" fill="none" stroke-linecap="round"/>`
   :`<path d="M-36,-2Q-26,-14 -16,-2M16,-2Q26,-14 36,-2" stroke="#2E2430" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M-16,18Q0,32 16,18" stroke="#2E2430" stroke-width="6" fill="none" stroke-linecap="round"/><ellipse cx="-50" cy="14" rx="11" ry="7" fill="#F59A92" opacity=".7"/><ellipse cx="50" cy="14" rx="11" ry="7" fill="#F59A92" opacity=".7"/>`;
  return g(`rotate(${fmt(r)}) scale(${s})`,`${fl}<rect x="-90" y="-46" width="180" height="92" rx="46" fill="${col}" stroke="${OL}" stroke-width="5"/><ellipse cx="-50" cy="-26" rx="18" ry="8" fill="#fff" opacity=".35"/>${eyes}`);}
function clockFace(t,s=1,speed=6){const a=t*speed*60, b=t*speed*5;return g(`scale(${s})`,`<circle r="110" fill="#fff" stroke="#5B4C40" stroke-width="14"/>${Array.from({length:12},(_,i)=>`<path d="M0,-92L0,-80" stroke="#5B4C40" stroke-width="6" transform="rotate(${i*30})"/>`).join('')}<path d="M0,0L0,-78" stroke="#2E2430" stroke-width="9" stroke-linecap="round" transform="rotate(${fmt(a)})"/><path d="M0,0L0,-52" stroke="#2E2430" stroke-width="13" stroke-linecap="round" transform="rotate(${fmt(b)})"/><circle r="10" fill="#E5383B"/>`);}
function flame(t,s=1){const f=1+0.08*Math.sin(t*18);return g(`scale(${s} ${fmt(s*f)})`,`<path d="M0,0C-90,0 -100,-90 -50,-150C-40,-110 -20,-110 -20,-110C-40,-180 0,-240 20,-260C20,-200 90,-170 80,-80C78,-30 50,0 0,0Z" fill="#F2A541" stroke="${OL}" stroke-width="5"/><path d="M0,-10C-40,-10 -50,-60 -20,-100C-10,-70 10,-80 10,-80C10,-120 30,-140 40,-150C40,-110 60,-80 50,-50C46,-26 30,-10 0,-10Z" fill="#FFE27A"/>`);}
function poisonDrop(s=1){return g(`scale(${s})`,`<path d="M0,-110C40,-50 70,-10 70,30C70,74 38,100 0,100C-38,100 -70,74 -70,30C-70,-10 -40,-50 0,-110Z" fill="#8BC34A" stroke="${OL}" stroke-width="6"/><circle cx="-22" cy="20" r="10" fill="#2E2430"/><circle cx="22" cy="20" r="10" fill="#2E2430"/><path d="M-26,-6L-10,4M26,-6L10,4" stroke="#2E2430" stroke-width="6" stroke-linecap="round"/><path d="M-18,58Q0,44 18,58" stroke="#2E2430" stroke-width="6" fill="none" stroke-linecap="round"/><ellipse cx="-36" cy="-20" rx="12" ry="20" fill="#fff" opacity=".35"/>`);}
function plateRice(s=1){return g(`scale(${s})`,`<ellipse cx="0" cy="0" rx="230" ry="62" fill="#fff" stroke="${OL}" stroke-width="6"/><ellipse cx="0" cy="-4" rx="170" ry="40" fill="#EEF2F4"/>${g('translate(0 6) scale(1 .7)',riceMound())}`);}
function enzyme(t,s=1,col='#F4C542'){const m=Math.abs(Math.sin(t*9))*34;return g(`scale(${s})`,`<path d="M0,0L${fmt(70*Math.cos(m*Math.PI/180))},${fmt(-70*Math.sin(m*Math.PI/180))}A70,70 0 1 0 ${fmt(70*Math.cos(m*Math.PI/180))},${fmt(70*Math.sin(m*Math.PI/180))}Z" fill="${col}" stroke="${OL}" stroke-width="5"/><circle cx="-6" cy="-36" r="8" fill="${OL}"/>`);}
// rantai pati: k=0 longgar (mudah dicerna), k=1 rapat (pati resisten)
function starchChain(t,k,x0,y0,n=14,col='#F6E7A8'){
  let s='',pts=[];
  for(let i=0;i<n;i++){const loose=[x0+i*56,y0+Math.sin(i*0.9+t*2)*70];const r=Math.floor(i/7), c=i%7;const tight=[x0+90+c*52,y0-40+r*58+(c%2)*10];
    pts.push([lerp(loose[0],tight[0],eio(k)),lerp(loose[1],tight[1],eio(k))]);}
  for(let i=0;i<n-1;i++)s+=`<path d="M${fmt(pts[i][0])},${fmt(pts[i][1])}L${fmt(pts[i+1][0])},${fmt(pts[i+1][1])}" stroke="${OL}" stroke-width="8"/>`;
  pts.forEach(p=>{s+=`<polygon points="${[0,1,2,3,4,5].map(j=>`${fmt(p[0]+24*Math.cos(j*Math.PI/3))},${fmt(p[1]+24*Math.sin(j*Math.PI/3))}`).join(' ')}" fill="${col}" stroke="${OL}" stroke-width="4"/>`;});
  return s;}
function srcText(txt,k=1){return k>0?`<text x="40" y="${H-(isV?60:34)}" font-family="Inter" font-weight="500" font-size="${isV?24:22}" fill="#fff" opacity="${fmt(.85*k)}">${txt}</text>`:'';}
function card(t,lines,y0v,y0h,t0){const k=fadeIn(t,t0,.5);const ky=lerp(30,0,eout((t-t0)/.6));const fs=isV?124:112;let s='';
  lines.forEach((l,i)=>{s+=`<text x="${W/2}" y="${fmt((isV?y0v:y0h)+i*fs*1.02+ky)}" text-anchor="middle" font-family="B2" font-weight="800" font-size="${fs}" fill="url(#gold)" opacity="${fmt(k)}" filter="url(#tsh)">${l}</text>`;});return s;}
function letterbox(t,t0){const lb=ss((t-t0)/0.4)*(isV?150:110);return `<rect width="${W}" height="${fmt(lb)}" fill="#000"/><rect y="${fmt(H-lb)}" width="${W}" height="${fmt(lb)}" fill="#000"/>`;}
function hudLabel(t,t0,txt,o={}){const k=popS(t,t0,.45);if(k<=0)return '';return g(tr(o.x??W/2,o.y??(isV?420:110),k,o.r??-3),label(txt,{size:o.size??(isV?72:62),bg:o.bg||'#E8505B',fill:o.fill||'#fff'}));}
function table(){return `<rect y="1250" width="1920" height="670" fill="#8C6A52"/><rect y="1240" width="1920" height="26" fill="#6E5140"/>`;}


function bed(x,y,s=1,inner=''){ // inner: head svg placed at pillow
  return g(tr(x,y,s),`<rect x="-520" y="-80" width="1040" height="200" rx="30" fill="#8C6A52" stroke="${OL}" stroke-width="6"/>
  <rect x="-560" y="-340" width="70" height="460" rx="24" fill="#7A5A44" stroke="${OL}" stroke-width="6"/>
  <rect x="-490" y="-130" width="980" height="90" rx="40" fill="#F4F1EA" stroke="${OL}" stroke-width="5"/>
  <rect x="-470" y="-215" width="260" height="110" rx="50" fill="#fff" stroke="${OL}" stroke-width="5"/>
  ${inner}
  <path d="M-260,-170Q120,-230 500,-150L500,-30Q120,-60 -260,-40Z" fill="#6FA8DC" stroke="${OL}" stroke-width="6" stroke-linejoin="round"/>
  <path d="M-220,-120Q120,-170 470,-110" stroke="#5B93C9" stroke-width="10" fill="none" stroke-linecap="round"/>`);}
function lyingHead(expr,blink){return g('translate(-340 -175) rotate(-78) scale(.72) translate(0 470)',yHead(expr,blink));}
function zzz(x,y,t){let s='';for(let i=0;i<3;i++){const ph=(t*0.5+i/3)%1;s+=`<text x="${x+ph*80+i*10}" y="${y-ph*160}" font-family="B2" font-weight="800" font-size="${50+i*14}" fill="#fff" opacity="${fmt(Math.sin(ph*Math.PI))}" stroke="${OL}" stroke-width="5" paint-order="stroke">Z</text>`;}return s;}
function heart(s=1,beat=0){const k=1+0.08*beat;return g(`scale(${s*k})`,`<path d="M0,60C-120,-20 -110,-120 -50,-120C-20,-120 0,-95 0,-75C0,-95 20,-120 50,-120C110,-120 120,-20 0,60Z" transform="scale(1.6)" fill="#E5383B" stroke="${OL}" stroke-width="5"/><ellipse cx="-70" cy="-120" rx="22" ry="14" fill="#fff" opacity=".4"/>`);}
function molecule(s=1,col='#9C7BE0'){return g(`scale(${s})`,`<path d="M-40,0L0,-30L40,0L0,30Z" stroke="${OL}" stroke-width="6" fill="none"/><circle cx="-40" cy="0" r="18" fill="${col}" stroke="${OL}" stroke-width="4"/><circle cx="0" cy="-30" r="18" fill="${col}" stroke="${OL}" stroke-width="4"/><circle cx="40" cy="0" r="18" fill="${col}" stroke="${OL}" stroke-width="4"/><circle cx="0" cy="30" r="18" fill="#C9B6F2" stroke="${OL}" stroke-width="4"/>`);}

// ===== MASA SIH Style A: template scene + props umum =====
// Dipakai lewat build.py: scenes_<id>.js = WORDS + lib_base + lib_templates + body_<id>.js
const _n=s=>s.toLowerCase().replace(/[^a-z0-9\-]/g,'');
// waktu mulai frasa q (boleh beberapa kata) yang muncul setelah detik 'after'
function at(q,after=0,end=false){const qs=q.split(' ').map(_n);
  for(let i=0;i<WORDS.length;i++){if(WORDS[i].s<after-0.01)continue;let ok=true;
    for(let j=0;j<qs.length;j++){const w=WORDS[i+j];if(!w||!_n(w.w).startsWith(qs[j])){ok=false;break;}}
    if(ok)return end?WORDS[i+qs.length-1].e:WORDS[i].s;}
  console.log('MISS '+q);return after;}
const V=(a,b)=>isV?a:b;
function bgGlow(col,glow,op=.5,cx=960,cy=900){return `<rect width="1920" height="1920" fill="${col}"/><circle cx="${cx}" cy="${cy}" r="640" fill="${glow}" opacity="${op}" filter="url(#glowf)"/>`;}
function grid(){return `<g opacity=".12">${Array.from({length:20},(_,i)=>`<path d="M${i*100},0L${i*100},1920M0,${i*100}L1920,${i*100}" stroke="#fff" stroke-width="2"/>`).join('')}</g>`;}
function popAt(t,t0,svg,x,y,s=1,r=0,extra='filter="url(#dsh)"'){const k=popS(t,t0,.45);return k>0?g(tr(x,y,s*k,r),svg,extra):'';}
function xAt(t,t0,x,y,s=1.2){const k=popS(t,t0,.35);return k>0?g(tr(x,y,s*k,8),xmark(1)):'';}
function checkAt(t,t0,x,y,s=1){const k=popS(t,t0,.35);return k>0?g(tr(x,y,s*k),check(1)):'';}
function bigNum(t,t0,num,unit,x,y,o={}){const k=popS(t,t0,.55);if(k<=0)return '';return g(tr(x,y,k),`<text x="0" y="0" text-anchor="middle" font-family="Inter" font-weight="800" font-size="${o.size||190}" fill="#fff" filter="url(#tsh)">${num}</text><text x="0" y="${(o.size||190)*0.38}" text-anchor="middle" font-family="B2" font-weight="800" font-size="${o.usize||56}" fill="${o.ucol||'#FFE27A'}">${unit}</text>`);}
function bubbleAt(t,t0,txt,x,y,w=640,s=1,r=-3){const k=popS(t,t0,.45);return k>0?g(tr(x,y,k*s,r),bubble(w,200,'bl')+`<text x="0" y="22" text-anchor="middle" font-family="B2" font-weight="800" font-size="62" fill="${OL}">${txt}</text>`,'filter="url(#dsh)"'):'';}
function hudLabels(t,list){return list.map(o=>((o.until==null||t<o.until)?hudLabel(t,o.at,o.txt,o):'')).join('');}

// ---------- template scene ----------
// HOOK: objek besar + partikel + teks WOYYY + kata kunci
function sHook(o){S.push({t0:o.t0,t1:o.t1,
 world:t=>{let s=bgGlow(o.bg||'#0F2A3A',o.glow||'#2C8FC4',.55)+rays(960,200,7,1400,9,.45,Math.sin(t*.5)*3);
  if(o.particle)for(let i=0;i<12;i++){const sp=180+rnd(i)*200;const y=((t*sp+rnd(i+9)*1900)%2200)-200;const x=200+rnd(i+20)*1520;const sc=0.5+rnd(i+5)*0.8;s+=g(tr(x,y,sc,t*60*(rnd(i)-.5)+i*30),o.particle(t,i),sc>1.1?'filter="url(#dof2)"':'opacity=".85"');}
  const k=popS(t,o.t0+0.05,.6);s+=g(tr(960,o.py||1180,(o.ps||2.2)*k),o.prop(t),'filter="url(#dsh)"');
  const yk=eout((t-o.t0-0.2)/0.5);s+=yuma({x:lerp(380,V(570,470),yk),y:lerp(1950,1600,yk),s:1.12,expr:t<(o.surpriseAt||o.t0+2)?'happy':'surprised',aR:-50+Math.sin(t*8)*8,aL:70,blink:blinkAt(t,1)});
  if(o.extra)s+=o.extra(t);return s;},
 cam:t=>camV(t,o.t0,o.t1,[960,1060,1.0],[960,1000,1.12]),
 hud:t=>{const k=popS(t,o.t0+0.12,.5),k2=popS(t,o.keyAt??o.t0+1.2,.5);
  if(isV) return g(tr(540,420,k,-4),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="150" fill="#FFE27A" stroke="${OL}" stroke-width="14" paint-order="stroke">WOYYY!</text>`)+g(tr(540,590,k2),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="${o.keySize||96}" fill="#fff" stroke="${OL}" stroke-width="12" paint-order="stroke">${o.key}</text>`);
  return g(tr(1500,170,k,-6),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="130" fill="#FFE27A" stroke="${OL}" stroke-width="12" paint-order="stroke">WOYYY!</text>`)+g(tr(1500,290,k2),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="${(o.keySize||96)*0.85}" fill="#fff" stroke="${OL}" stroke-width="11" paint-order="stroke">${o.key}</text>`);}
});}
// MITOS: ibu menegur YUMA + balon ucapan
function sMyth(o){S.push({t0:o.t0,t1:o.t1,
 world:t=>{let s=room(o.wall||'#C9CFC4','#A7876D',true,t)+rays(1450,380,5,1200,7,.3,-25);
  const talk=t>o.t0+0.1&&t<o.t1-0.4;
  s+=mom({x:V(700,600),y:1500,s:V(1.1,1.3),aR:-28+Math.sin(t*10)*(talk?6:0),aL:62,talk:talk&&Math.sin(t*22)>0,blink:blinkAt(t,4)});
  s+=yuma({x:V(1250,1320),y:1500,s:V(1.08,1.25),flip:true,expr:t>(o.worryAt||o.t0+1.5)?'worried':'surprised',aR:o.holdR?110:70,aL:65,holdR:o.holdR?o.holdR(t):undefined,blink:blinkAt(t,2)});
  if(o.extra)s+=o.extra(t);
  s+=bubbleAt(t,o.bubbleAt,o.bubble,V(960,700),V(680,720),o.bw||700,V(.72,1));
  return s;},
 cam:t=>camV(t,o.t0,o.t1,[V(940,960),1000,1.0],[V(1000,980),980,1.08]),
 hud:t=>o.label?hudLabel(t,o.labelAt,o.label,{bg:'#5B6C8F',size:V(62,54),x:V(W/2,1360)}):''
});}
// KARTU BAB emas
function sCard(o){S.push({t0:o.t0,t1:o.t1,
 world:t=>{let s=room('#AEB7AE','#8F7560',false,t)+yuma({x:960,y:1520,s:1.5,expr:'think',aL:70,aR:120,holdR:o.hold?o.hold(t):undefined,blink:false});
  for(let i=0;i<3;i++){const k=popS(t,o.t0+0.3+i*0.2,.3);s+=`<circle cx="${1180+i*60}" cy="${660-i*70}" r="${fmt((14+i*8)*k)}" fill="#fff" opacity=".9"/>`;}
  return s+`<rect width="1920" height="1920" fill="#06121C" opacity=".55"/>`;},
 cam:t=>camV(t,o.t0,o.t1,[960,1000,1.12],[960,940,1.0]),
 hud:t=>{let s=letterbox(t,o.t0)+card(t,o.lines,700,300,o.t0+0.1);
  const k2=popS(t,o.yukAt,.4);if(k2>0)s+=g(tr(W/2,V(1240,760),k2,-3),`<rect x="-250" y="-60" width="500" height="110" rx="30" fill="#E8505B" stroke="#fff" stroke-width="6"/><text x="0" y="22" text-anchor="middle" font-family="B2" font-weight="800" font-size="66" fill="#fff">Yuk kita cek!</text>`);
  return s;}
});}
// FAKTA bebas: o.world(t) + label HUD + sumber
function sFact(o){S.push({t0:o.t0,t1:o.t1,
 world:t=>bgGlow(o.bg||'#16343F',o.glow||'#2E7E8F',.5)+(o.grid?grid():'')+o.world(t),
 cam:o.cam||(t=>camV(t,o.t0,o.t1,o.c0||[960,1000,1.1],o.c1||[960,960,1.0])),
 hud:t=>hudLabels(t,o.labels||[])+(o.src?srcText(o.src,fadeIn(t,o.srcAt??o.t0+0.2,.4)):'')+(o.hud?o.hud(t):'')
});}
// PLOT TWIST: kartu emas + letterbox di awal, lalu o.world
function sPlot(o){const tc=o.t0+(o.cardDur||1.6);S.push({t0:o.t0,t1:o.t1,
 world:t=>bgGlow(o.bg||'#2B1B14',o.glow||'#A3542A',.45)+rays(960,100,7,1500,8,.35)+o.world(t),
 cam:t=>t<tc?camV(t,o.t0,tc,[960,980,1.0],[960,960,1.1]):camV(t,tc,o.t1,o.c0||[960,1000,1.05],o.c1||[960,960,1.0]),
 hud:t=>{let s='';if(t<tc+0.2){s+=letterbox(t,o.t0);const k=popS(t,o.t0+0.1,.45)*(1-ss((t-tc+0.1)/.3));if(k>0)s+=g(tr(W/2,V(430,180),k,-3),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="${V(140,120)}" fill="url(#gold)" filter="url(#tsh)">PLOT TWIST!</text>`);}
  return s+hudLabels(t,(o.labels||[]))+(o.src?srcText(o.src,fadeIn(t,o.t0+0.3,.4)):'');}
});}
// CHECKLIST kesimpulan
function sCheck(o){S.push({t0:o.t0,t1:o.t1,
 world:t=>{let s=bgGlow('#CDEBF5','#fff',.6,960,800)+rays(960,0,7,1500,9,.5)+`<rect y="1360" width="1920" height="560" fill="#9FD3E6"/>`;
  s+=yuma({x:V(700,620),y:1440,s:V(1.05,1.3),expr:'happy',aR:-60+Math.sin(t*3)*6,aL:60,holdR:o.hold?o.hold(t):undefined,blink:blinkAt(t,11)});
  const kc=popS(t,o.t0+0.3,.5);
  if(kc>0){const n=o.items.length;const hh=200+n*130;let c=`<rect x="-310" y="${-hh/2}" width="620" height="${hh}" rx="40" fill="#fff" stroke="${OL}" stroke-width="8"/><text x="0" y="${-hh/2+95}" text-anchor="middle" font-family="B2" font-weight="800" font-size="62" fill="${OL}">${o.title||'Jadi gini:'}</text>`;
   o.items.forEach(([txt,tt],i)=>{const y=-hh/2+200+i*130;const k=popS(t,tt,.4);if(k>0)c+=g(tr(-220,y,k),check(0.6));c+=`<text x="-160" y="${y+20}" font-family="B2" font-weight="800" font-size="50" fill="${OL}" opacity="${fmt(fadeIn(t,tt))}">${txt}</text>`;});
   s+=g(tr(V(1150,1260),V(960,900),V(0.82,0.85)*kc,2),c,'filter="url(#dsh)"');}
  return s;},
 cam:t=>isV?camV(t,o.t0,o.t1,[860,1000,1.0],[1100,980,1.04]):camV(t,o.t0,o.t1,[960,1000,1.08],[1000,960,1.0]),
 hud:t=>(o.label?hudLabel(t,o.t0+0.2,o.label,{bg:'#3BB273'}):'')+(o.src?srcText(o.src,fadeIn(t,o.t0+0.5,.4)):'')
});}
// CTA split screen
function sCTA(o){S.push({t0:o.t0,t1:o.t1,
 world:t=>{const sl=eout((t-o.t0)/.5);
  let s=`<rect width="1920" height="1920" fill="#222"/><path d="M0,0L${fmt(lerp(-200,1040,sl))},0L${fmt(lerp(-400,880,sl))},1920L0,1920Z" fill="${o.lc||'#E07B39'}"/><path d="M1920,0L${fmt(lerp(2120,1040,sl))},0L${fmt(lerp(2320,880,sl))},1920L1920,1920Z" fill="${o.rc||'#2C8FC4'}"/>`;
  const L=V(720,620),R=V(1200,1320);
  s+=g(tr(L,1080,V(0.8,1.0)*popS(t,o.aAt,.5)),o.lp(t),'filter="url(#dsh)"')+g(tr(R,1080,V(0.8,1.0)*popS(t,o.bAt,.5)),o.rp(t),'filter="url(#dsh)"');
  s+=bigText(V(o.ls||o.ln,o.ln),L,640,V(62,76),{sw:10})+bigText(V(o.rs||o.rn,o.rn),R,640,V(62,76),{sw:10});
  const kv=popS(t,o.vsAt,.4);if(kv>0)s+=g(tr(960,870,kv,-6),`<circle r="96" fill="#FFE27A" stroke="${OL}" stroke-width="10"/><text x="0" y="30" text-anchor="middle" font-family="B2" font-weight="800" font-size="90" fill="${OL}">VS</text>`,'filter="url(#dsh)"');
  const yk=eout((t-o.t0-0.2)/.6);s+=yuma({x:960,y:lerp(1900,1480,yk),s:1.0,expr:'happy',aR:-60+Math.sin(t*9)*14,aL:70,blink:blinkAt(t,13)});
  const kc=popS(t,o.commentAt,.45);if(kc>0)s+=g(tr(V(1130,1290),1240,kc*V(.85,1),3),bubble(520,170,'bl')+`<text x="0" y="20" text-anchor="middle" font-family="B2" font-weight="800" font-size="58" fill="${OL}">Tulis di komentar!</text>`,'filter="url(#dsh)"');
  return s;},
 cam:t=>camV(t,o.t0,o.t1,[960,1000,1.0],[960,980,1.06]),hud:t=>''
});}

// ---------- props umum ----------
function cupCoffee(t,s=1,o={}){let steam='';for(let i=0;i<3;i++){const ph=(t*0.55+i/3)%1;steam+=`<path d="M${-40+i*40},${-150-ph*120}q-16,-26 0,-52q16,-26 0,-52" stroke="#fff" stroke-width="10" fill="none" stroke-linecap="round" opacity="${fmt(0.7*Math.sin(ph*Math.PI))}"/>`;}
  return g(`scale(${s})`,`<ellipse cx="0" cy="8" rx="170" ry="34" fill="#fff" stroke="${OL}" stroke-width="5"/><path d="M110,-110Q190,-110 190,-60Q190,-10 110,-14" stroke="${OL}" stroke-width="24" fill="none"/><path d="M110,-110Q190,-110 190,-60Q190,-10 110,-14" stroke="${o.col||'#F3F7FA'}" stroke-width="14" fill="none"/>
  <path d="M-120,-140L120,-140L104,-10Q100,6 84,6L-84,6Q-100,6 -104,-10Z" fill="${o.col||'#F3F7FA'}" stroke="${OL}" stroke-width="6" stroke-linejoin="round"/><ellipse cx="0" cy="-138" rx="116" ry="18" fill="${o.milk?'#C99A6B':'#4A2A18'}"/><path d="M-90,-110L-80,-30" stroke="#fff" stroke-width="10" stroke-linecap="round" opacity=".6"/>${steam}`);}
function toilet(s=1){return g(`scale(${s})`,`<rect x="-120" y="-420" width="240" height="160" rx="20" fill="#fff" stroke="${OL}" stroke-width="6"/><path d="M-170,-250L170,-250Q170,-120 60,-90L60,0L-60,0L-60,-90Q-170,-120 -170,-250Z" fill="#fff" stroke="${OL}" stroke-width="6" stroke-linejoin="round"/><ellipse cx="0" cy="-250" rx="170" ry="34" fill="#EAF2F8" stroke="${OL}" stroke-width="6"/><ellipse cx="0" cy="-248" rx="120" ry="20" fill="#BFE6F7"/>`);}
function egg(s=1,face=true){return g(`scale(${s})`,`<path d="M0,-130C70,-130 110,-30 110,30C110,100 60,130 0,130C-60,130 -110,100 -110,30C-110,-30 -70,-130 0,-130Z" fill="#FFF6E5" stroke="${OL}" stroke-width="6"/><ellipse cx="-40" cy="-60" rx="18" ry="34" fill="#fff" opacity=".8" transform="rotate(20 -40 -60)"/>${face?`<circle cx="-30" cy="20" r="10" fill="#2E2430"/><circle cx="30" cy="20" r="10" fill="#2E2430"/><path d="M-18,50Q0,64 18,50" stroke="#2E2430" stroke-width="6" fill="none" stroke-linecap="round"/><ellipse cx="-58" cy="44" rx="13" ry="8" fill="#F59A92" opacity=".6"/><ellipse cx="58" cy="44" rx="13" ry="8" fill="#F59A92" opacity=".6"/>`:''}`);}
function friedEgg(s=1){return g(`scale(${s})`,`<path d="M-160,0C-170,-80 -80,-120 -10,-100C60,-140 170,-90 150,0C180,70 80,120 0,100C-90,130 -180,80 -160,0Z" fill="#fff" stroke="${OL}" stroke-width="6"/><circle cx="0" cy="0" r="56" fill="#F4C542" stroke="${OL}" stroke-width="5"/><ellipse cx="-18" cy="-18" rx="16" ry="10" fill="#fff" opacity=".6"/>`);}
function skinBump(t,s=1,red=1){return g(`scale(${s})`,`<rect x="-360" y="0" width="720" height="260" fill="#F3C9A8"/><path d="M-360,0Q-120,0 -90,0Q-60,-150 0,-160Q60,-150 90,0Q120,0 360,0" fill="#F3C9A8" stroke="${OL}" stroke-width="6"/><circle cx="0" cy="-80" r="${60+4*Math.sin(t*5)}" fill="#E5383B" opacity="${.55*red}" filter="url(#dof2)"/><circle cx="0" cy="-118" r="22" fill="#FFF1C2" stroke="#E0A33A" stroke-width="4"/><path d="M-12,40L-12,220M30,60L30,240" stroke="#5B3A2A" stroke-width="7" opacity=".5"/><ellipse cx="0" cy="120" rx="90" ry="60" fill="#F59A92" opacity=".35"/>`);}
function noodleBlock(s=1){let w='';for(let i=0;i<9;i++)w+=`<path d="M-170,${-90+i*22}q22,-14 44,0t44,0t44,0t44,0t44,0t44,0t44,0t44,0" stroke="#D99A2B" stroke-width="9" fill="none"/>`;return g(`scale(${s})`,`<rect x="-190" y="-120" width="380" height="240" rx="40" fill="#F6C76A" stroke="${OL}" stroke-width="6"/>${w}<ellipse cx="-100" cy="-80" rx="40" ry="14" fill="#fff" opacity=".45"/>`);}
function noodleBowl(t,s=1,o={}){let steam='';for(let i=0;i<3;i++){const ph=(t*0.55+i/3)%1;steam+=`<path d="M${-60+i*60},${-150-ph*150}q-22,-32 0,-64q22,-32 0,-64" stroke="#fff" stroke-width="13" fill="none" stroke-linecap="round" opacity="${fmt(0.75*Math.sin(ph*Math.PI))}"/>`;}
  let nd='';for(let i=0;i<7;i++)nd+=`<path d="M${-150+i*8},${-60+i*6}q30,-24 60,0t60,0t60,0t60,0t60,0" stroke="#F2C14E" stroke-width="10" fill="none"/>`;
  return g(`scale(${s})`,`<ellipse cx="0" cy="-44" rx="178" ry="44" fill="${o.soup||'#E9A35A'}" stroke="${OL}" stroke-width="5"/>${nd}${o.egg?`<g transform="translate(70 -70) scale(.45)">${friedEgg(1)}</g>`:''}${o.veg?`<path d="M-120,-80q20,-40 50,-10q-30,10 -50,10Z" fill="#5E9C6B" stroke="${OL}" stroke-width="4"/><path d="M-60,-90q30,-30 50,0q-30,10 -50,0Z" fill="#7BC96F" stroke="${OL}" stroke-width="4"/>`:''}
   <path d="M-180,-44L180,-44Q172,88 0,104Q-172,88 -180,-44Z" fill="${o.col||'#E8505B'}" stroke="${OL}" stroke-width="6" stroke-linejoin="round"/><path d="M-172,-6Q0,14 172,-6" stroke="#fff" stroke-width="12" fill="none" opacity=".7"/><rect x="-70" y="96" width="140" height="26" rx="10" fill="${o.col||'#E8505B'}" stroke="${OL}" stroke-width="5"/>${steam}`);}
function candle(t,s=1){return g(`scale(${s})`,`<rect x="-50" y="-220" width="100" height="220" rx="14" fill="#FBEFD5" stroke="${OL}" stroke-width="6"/><path d="M-50,-200q20,30 0,60" stroke="#F0DDB4" stroke-width="10" fill="none"/><path d="M0,-220L0,-250" stroke="#2E2430" stroke-width="6"/>${g('translate(0 -246) scale(.35)',flame(t,1))}`);}
function oilDrop(s=1){return g(`scale(${s})`,`<path d="M0,-90C34,-40 60,-8 60,26C60,62 32,84 0,84C-32,84 -60,62 -60,26C-60,-8 -34,-40 0,-90Z" fill="#F4C542" stroke="${OL}" stroke-width="5"/><ellipse cx="-20" cy="10" rx="10" ry="18" fill="#fff" opacity=".5"/>`);}
function saltShaker(s=1,lab='GARAM'){return g(`scale(${s})`,`<path d="M-80,-220Q0,-270 80,-220L80,-200L-80,-200Z" fill="#B7C9CC" stroke="${OL}" stroke-width="5"/><rect x="-90" y="-200" width="180" height="260" rx="40" fill="#fff" stroke="${OL}" stroke-width="6"/>${[-40,0,40].map(x=>`<circle cx="${x}" cy="-235" r="6" fill="${OL}"/>`).join('')}<rect x="-70" y="-90" width="140" height="56" rx="12" fill="#E8505B"/><text x="0" y="-50" text-anchor="middle" font-family="B2" font-weight="800" font-size="34" fill="#fff">${lab}</text>`);}
function sachet(s=1,lab='MICIN',col='#E8505B'){return g(`scale(${s})`,`<path d="M-120,-160L120,-160L130,160L-130,160Z" fill="${col}" stroke="${OL}" stroke-width="6" stroke-linejoin="round"/><path d="M-120,-160L-110,-130L-100,-160L-90,-130L-80,-160L-70,-130L-60,-160L-50,-130L-40,-160L-30,-130L-20,-160L-10,-130L0,-160L10,-130L20,-160L30,-130L40,-160L50,-130L60,-160L70,-130L80,-160L90,-130L100,-160L110,-130L120,-160" fill="none" stroke="${OL}" stroke-width="4"/><circle cx="0" cy="0" r="80" fill="#fff" stroke="${OL}" stroke-width="5"/><text x="0" y="16" text-anchor="middle" font-family="B2" font-weight="800" font-size="48" fill="${col}">${lab}</text><ellipse cx="-70" cy="-80" rx="20" ry="40" fill="#fff" opacity=".3"/>`);}
function tomato(s=1){return g(`scale(${s})`,`<circle r="90" fill="#E5383B" stroke="${OL}" stroke-width="6"/><path d="M-40,-80L0,-60L40,-80L20,-95L0,-110L-20,-95Z" fill="#5E9C6B" stroke="${OL}" stroke-width="4"/><ellipse cx="-36" cy="-30" rx="20" ry="12" fill="#fff" opacity=".4"/>`);}
function cheese(s=1){return g(`scale(${s})`,`<path d="M-110,60L110,60L110,-40L-110,10Z" fill="#F4C542" stroke="${OL}" stroke-width="6" stroke-linejoin="round"/><path d="M-110,10L110,-40L60,-80Z" fill="#FFE27A" stroke="${OL}" stroke-width="6" stroke-linejoin="round"/><circle cx="-40" cy="30" r="14" fill="#D99A2B"/><circle cx="50" cy="10" r="10" fill="#D99A2B"/>`);}
function mushroom(s=1){return g(`scale(${s})`,`<path d="M-100,-10C-100,-110 100,-110 100,-10Z" fill="#C98C5A" stroke="${OL}" stroke-width="6"/><rect x="-34" y="-12" width="68" height="100" rx="24" fill="#F6E7D0" stroke="${OL}" stroke-width="6"/><circle cx="-40" cy="-60" r="12" fill="#F6E7D0"/><circle cx="30" cy="-74" r="9" fill="#F6E7D0"/>`);}
function brain(t,s=1,face='happy'){return g(`scale(${s})`,`<path d="M-150,10C-170,-80 -100,-140 -30,-130C0,-160 80,-150 110,-110C170,-100 180,-20 150,20C170,80 100,130 40,110C0,140 -80,130 -100,90C-160,90 -170,50 -150,10Z" fill="#F7A8B8" stroke="${OL}" stroke-width="6"/><path d="M-90,-80Q-60,-40 -100,0M0,-120Q-20,-60 20,-20M80,-90Q60,-40 100,0M-40,40Q0,70 40,40" stroke="#D9768E" stroke-width="8" fill="none" stroke-linecap="round"/>${face==='happy'?`<circle cx="-40" cy="-10" r="10" fill="#2E2430"/><circle cx="40" cy="-10" r="10" fill="#2E2430"/><path d="M-20,20Q0,36 20,20" stroke="#2E2430" stroke-width="6" fill="none" stroke-linecap="round"/>`:`<path d="M-50,-10L-30,-10M30,-10L50,-10" stroke="#2E2430" stroke-width="7" stroke-linecap="round"/><path d="M-20,30Q0,20 20,30" stroke="#2E2430" stroke-width="6" fill="none"/>`}`);}
function shield(s=1){return g(`scale(${s})`,`<path d="M0,-150L130,-100Q130,60 0,150Q-130,60 -130,-100Z" fill="#5DB7EA" stroke="${OL}" stroke-width="7" stroke-linejoin="round" opacity=".9"/><path d="M-50,0L-10,40L60,-40" stroke="#fff" stroke-width="18" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`);}
function chipsBag(s=1,lab='SNACK'){return g(`scale(${s})`,`<path d="M-130,-170Q0,-150 130,-170L150,170Q0,190 -150,170Z" fill="#F2A541" stroke="${OL}" stroke-width="6" stroke-linejoin="round"/><circle cx="0" cy="0" r="70" fill="#E5383B" stroke="${OL}" stroke-width="5"/><text x="0" y="14" text-anchor="middle" font-family="B2" font-weight="800" font-size="40" fill="#fff">${lab}</text>`);}
function tvSet(t,s=1,on=true){return g(`scale(${s})`,`<rect x="-300" y="-220" width="600" height="380" rx="30" fill="#2B2F45" stroke="${OL}" stroke-width="8"/><rect x="-270" y="-190" width="540" height="320" rx="16" fill="${on?'#5DB7EA':'#1B2347'}"/>${on?`<circle cx="${-120+40*Math.sin(t)}" cy="-40" r="50" fill="#FFE27A"/><path d="M-270,90Q-100,0 0,60Q120,120 270,40L270,130L-270,130Z" fill="#7BC96F"/>`:''}<rect x="-40" y="160" width="80" height="50" fill="#2B2F45"/><rect x="-140" y="205" width="280" height="24" rx="10" fill="#2B2F45"/>`);}
function eyeBall(t,s=1,tired=false){const lx=12*Math.sin(t*1.3);return g(`scale(${s})`,`<ellipse rx="170" ry="110" fill="#fff" stroke="${OL}" stroke-width="8"/>${tired?`<path d="M-120,-30Q-60,-10 -20,-40M20,30Q70,20 110,40" stroke="#E5383B" stroke-width="5" fill="none" opacity=".6"/>`:''}<circle cx="${fmt(lx)}" cy="0" r="70" fill="#7A5230"/><circle cx="${fmt(lx)}" cy="0" r="34" fill="#1E1A20"/><circle cx="${fmt(lx-18)}" cy="-20" r="14" fill="#fff"/>${tired?`<path d="M-175,-10Q0,-150 175,-10" fill="#F3C9A8" stroke="${OL}" stroke-width="7" opacity=".85"/>`:''}`);}
function sun(t,s=1){let r='';for(let i=0;i<12;i++)r+=`<path d="M0,-130L0,-180" stroke="#F4C542" stroke-width="16" stroke-linecap="round" transform="rotate(${i*30+t*20})"/>`;return g(`scale(${s})`,`${r}<circle r="110" fill="#FFE27A" stroke="#F2A541" stroke-width="8"/><circle cx="-36" cy="-10" r="10" fill="${OL}"/><circle cx="36" cy="-10" r="10" fill="${OL}"/><path d="M-26,26Q0,46 26,26" stroke="${OL}" stroke-width="7" fill="none" stroke-linecap="round"/>`);}
function tree(s=1){return g(`scale(${s})`,`<rect x="-26" y="-40" width="52" height="200" rx="12" fill="#8C6A52" stroke="${OL}" stroke-width="5"/><circle cx="0" cy="-120" r="130" fill="#5E9C6B" stroke="${OL}" stroke-width="6"/><circle cx="-60" cy="-160" r="40" fill="#7BC96F"/>`);}
function park(){return `<rect width="1920" height="1920" fill="#BFE6F7"/><rect y="1250" width="1920" height="670" fill="#7BC96F"/><path d="M0,1250Q480,1180 960,1250T1920,1250" fill="#9CD08A"/>`+g('translate(380 1250) scale(1.2)',tree(1))+g('translate(1560 1260) scale(1.0)',tree(1));}
function bodyWater(t,x,y,lvl,col='#5DB7EA',s=1){const id='bw'+Math.round(x);const sh=`M-60,-420 a60,60 0 1 1 120,0 a60,60 0 1 1 -120,0Z M-95,-330 Q0,-360 95,-330 L110,-70 Q112,-50 90,-50 L70,-50 L70,200 Q70,220 50,220 L15,220 L10,-30 L-10,-30 L-15,220 L-50,220 Q-70,220 -70,200 L-70,-50 L-90,-50 Q-112,-50 -110,-70Z`;const top=220-lvl*700;
  return g(tr(x,y,s),`<clipPath id="${id}"><path d="${sh}"/></clipPath><g clip-path="url(#${id})"><rect x="-130" y="-500" width="260" height="740" fill="#fff"/><rect x="-130" y="${fmt(top)}" width="260" height="800" fill="${col}"/><path d="M-130,${fmt(top)} q32,${fmt(-14*Math.sin(t*4))} 65,0 t65,0 t65,0 t65,0" fill="${col}"/></g><path d="${sh}" fill="none" stroke="${OL}" stroke-width="7" stroke-linejoin="round"/>`);}
function calendar(t,s=1,days=['S','S','R','K','J','S','M'],hi=[]){let c='';days.forEach((d,i)=>{const x=-270+i*90;const h=hi.includes(i);c+=`<rect x="${x-38}" y="-20" width="76" height="90" rx="12" fill="${h?'#FFE27A':'#fff'}" stroke="${OL}" stroke-width="4"/><text x="${x}" y="40" text-anchor="middle" font-family="B2" font-weight="800" font-size="40" fill="${OL}">${d}</text>`;});
  return g(`scale(${s})`,`<rect x="-330" y="-120" width="660" height="230" rx="26" fill="#fff" stroke="${OL}" stroke-width="7"/><rect x="-330" y="-120" width="660" height="80" rx="26" fill="#E8505B"/><rect x="-330" y="-60" width="660" height="20" fill="#E8505B"/>${c}`);}
function battery(t,s=1,lvl=1){const col=lvl>0.6?'#3BB273':lvl>0.3?'#F4C542':'#E5383B';return g(`scale(${s})`,`<rect x="-180" y="-80" width="340" height="160" rx="26" fill="#fff" stroke="${OL}" stroke-width="8"/><rect x="160" y="-34" width="30" height="68" rx="8" fill="${OL}"/><rect x="-162" y="-62" width="${fmt(304*clamp(lvl))}" height="124" rx="14" fill="${col}"/>`);}
function scaleWeight(t,s=1,num='+'){return g(`scale(${s})`,`<rect x="-200" y="-40" width="400" height="110" rx="34" fill="#E9EFF3" stroke="${OL}" stroke-width="7"/><rect x="-80" y="-20" width="160" height="60" rx="12" fill="#1B2347"/><text x="0" y="24" text-anchor="middle" font-family="Inter" font-weight="800" font-size="40" fill="#7BC96F">${num}</text>`);}
function plane(s=1){return g(`scale(${s})`,`<path d="M-160,0L140,-20Q190,-20 190,0Q190,20 140,20L-160,0Z" fill="#fff" stroke="${OL}" stroke-width="6"/><path d="M-10,-10L-90,-120L-50,-120L60,-14Z M-10,10L-90,120L-50,120L60,14Z M-140,-4L-180,-70L-150,-70L-110,-4Z" fill="#5DB7EA" stroke="${OL}" stroke-width="5"/>`);}
function tooth(t,s=1,o={}){return g(`scale(${s})`,`<path d="M-120,-140C-160,-140 -170,-60 -150,0C-130,60 -120,120 -100,190C-90,220 -60,220 -50,190L-20,90Q0,70 20,90L50,190C60,220 90,220 100,190C120,120 130,60 150,0C170,-60 160,-140 120,-140C80,-140 50,-110 0,-110C-50,-110 -80,-140 -120,-140Z" fill="${o.col||'#fff'}" stroke="${OL}" stroke-width="7" stroke-linejoin="round"/>${o.hole?`<path d="M30,-100C70,-90 80,-40 50,-20C20,0 0,-40 10,-80Z" fill="#5B3A2A" stroke="${OL}" stroke-width="5"/>`:''}<ellipse cx="-80" cy="-90" rx="20" ry="30" fill="#EAF6FF" opacity=".9"/>${o.face!==false?(o.sad?`<circle cx="-46" cy="0" r="11" fill="#2E2430"/><circle cx="46" cy="0" r="11" fill="#2E2430"/><path d="M-22,46Q0,30 22,46" stroke="#2E2430" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M90,-30q10,20 0,30" stroke="#5DB7EA" stroke-width="8" fill="none"/>`:`<circle cx="-46" cy="0" r="11" fill="#2E2430"/><circle cx="46" cy="0" r="11" fill="#2E2430"/><path d="M-22,30Q0,48 22,30" stroke="#2E2430" stroke-width="7" fill="none" stroke-linecap="round"/><ellipse cx="-80" cy="30" rx="14" ry="8" fill="#F59A92" opacity=".6"/><ellipse cx="80" cy="30" rx="14" ry="8" fill="#F59A92" opacity=".6"/>`):''}`);}
function worm(t,s=1){let b='';for(let i=0;i<6;i++){b+=`<circle cx="${-100+i*40}" cy="${fmt(Math.sin(t*6+i*0.9)*14)}" r="${28-i*1.5}" fill="#F3A6B5" stroke="${OL}" stroke-width="4"/>`;}return g(`scale(${s})`,b+`<circle cx="-110" cy="${fmt(Math.sin(t*6)*14-6)}" r="5" fill="#2E2430"/><circle cx="-94" cy="${fmt(Math.sin(t*6)*14-6)}" r="5" fill="#2E2430"/>`);}
function candy(s=1,col='#E8505B'){return g(`scale(${s})`,`<path d="M-60,0L-120,-40L-120,40Z M60,0L120,-40L120,40Z" fill="${col}" stroke="${OL}" stroke-width="5" stroke-linejoin="round"/><circle r="64" fill="${col}" stroke="${OL}" stroke-width="6"/><path d="M-40,-30Q0,0 -30,40M10,-50Q40,0 10,50" stroke="#fff" stroke-width="10" fill="none" opacity=".6"/>`);}
function acidDrop(s=1){return g(`scale(${s})`,`<path d="M0,-70C26,-30 46,-6 46,20C46,48 24,64 0,64C-24,64 -46,48 -46,20C-46,-6 -26,-30 0,-70Z" fill="#B6E36B" stroke="${OL}" stroke-width="5"/><path d="M-16,4L-4,12M16,4L4,12" stroke="#2E2430" stroke-width="5" stroke-linecap="round"/><path d="M-12,36Q0,28 12,36" stroke="#2E2430" stroke-width="5" fill="none"/>`);}
function toothbrush(s=1,r=0){return g(`rotate(${r}) scale(${s})`,`<rect x="-260" y="-22" width="380" height="44" rx="22" fill="#5DB7EA" stroke="${OL}" stroke-width="6"/><rect x="110" y="-34" width="130" height="40" rx="10" fill="#fff" stroke="${OL}" stroke-width="5"/>${[0,1,2,3,4,5].map(i=>`<rect x="${118+i*20}" y="-90" width="12" height="58" rx="5" fill="${i%2?'#fff':'#BFE6F7'}" stroke="${OL}" stroke-width="3"/>`).join('')}<path d="M110,-110q30,-40 70,-10q40,-30 60,10q-60,20 -130,0Z" fill="#fff" stroke="${OL}" stroke-width="4"/>`);}
function plateDinner(s=1){return g(`scale(${s})`,`<ellipse cx="0" cy="0" rx="260" ry="80" fill="#fff" stroke="${OL}" stroke-width="6"/><ellipse cx="0" cy="-4" rx="200" ry="56" fill="#EEF2F4"/>${g('translate(-70 4) scale(.7 .55)',riceMound())}<path d="M40,-30Q90,-70 150,-30Q110,10 40,-10Z" fill="#C0392B" stroke="${OL}" stroke-width="5"/><path d="M40,10q30,-30 60,0q30,-30 60,0" fill="#5E9C6B" stroke="${OL}" stroke-width="4"/>`);}
function martabak(s=1){return g(`scale(${s})`,`<rect x="-200" y="-90" width="400" height="180" rx="20" fill="#D99A2B" stroke="${OL}" stroke-width="6"/><path d="M-200,-10L200,-10M-60,-90L-60,90M60,-90L60,90" stroke="#B7791F" stroke-width="6"/><circle cx="-130" cy="-50" r="10" fill="#7A4A2A"/><circle cx="120" cy="40" r="10" fill="#7A4A2A"/><circle cx="10" cy="-40" r="8" fill="#7A4A2A"/>`);}
function gorengan(s=1){return g(`scale(${s})`,`<path d="M-110,0C-120,-60 -40,-80 0,-60C50,-90 120,-50 110,0C130,50 40,80 0,60C-50,80 -130,50 -110,0Z" fill="#E0A33A" stroke="${OL}" stroke-width="6"/><path d="M-60,-20q20,-10 30,10M20,-30q20,-10 30,10M-20,20q20,-10 30,10" stroke="#B7791F" stroke-width="6" fill="none"/>`);}
function stomach(t,s=1,acid=0){return g(`scale(${s})`,`<path d="M-40,-200C-40,-120 -120,-100 -140,0C-160,120 -40,180 60,150C170,120 180,0 120,-60C80,-100 30,-80 20,-140L20,-200Z" fill="#F3A6B5" stroke="#fff" stroke-width="7"/>${acid>0?`<path d="M-100,60Q0,${fmt(20+10*Math.sin(t*5))} 100,60L120,100Q0,160 -110,100Z" fill="#B6E36B" opacity=".85"/>`+Array.from({length:4},(_,i)=>`<circle cx="${-20+i*14}" cy="${fmt(-40-((t*120+i*60)%160)*acid)}" r="12" fill="#B6E36B" opacity="${fmt(acid)}"/>`).join(''):''}`);}
function moonNight(){let s=`<rect width="1920" height="1920" fill="#141A3A"/>`;for(let i=0;i<30;i++)s+=`<circle cx="${fmt(rnd(i)*1920)}" cy="${fmt(rnd(i+50)*1100)}" r="${fmt(2+rnd(i+9)*3)}" fill="#fff" opacity=".7"/>`;return s+`<circle cx="1460" cy="560" r="110" fill="#F6E7A8"/><circle cx="1510" cy="530" r="100" fill="#141A3A"/>`;}
function proteinBadge(s=1,txt='6 g'){return g(`scale(${s})`,`<circle r="110" fill="#3BB273" stroke="#fff" stroke-width="10"/><text x="0" y="0" text-anchor="middle" font-family="Inter" font-weight="800" font-size="70" fill="#fff">${txt}</text><text x="0" y="50" text-anchor="middle" font-family="B2" font-weight="800" font-size="36" fill="#fff">protein</text>`);}
function capsuleCam(t,s=1){return g(`scale(${s})`,`<rect x="-120" y="-55" width="240" height="110" rx="55" fill="#E9EFF3" stroke="${OL}" stroke-width="6"/><path d="M0,-55L0,55" stroke="${OL}" stroke-width="4"/><circle cx="-70" cy="0" r="30" fill="#1B2347"/><circle cx="-70" cy="0" r="12" fill="${Math.sin(t*8)>0?'#E5383B':'#5DB7EA'}"/>`);}
function fanTimer(t,s=1,txt='20'){return g(`scale(${s})`,`<circle r="120" fill="#fff" stroke="${OL}" stroke-width="8"/><path d="M0,0L0,-90A90,90 0 ${(t*0.5%1)>0.5?1:0} 1 ${fmt(90*Math.sin(t*0.5%1*2*Math.PI))},${fmt(-90*Math.cos(t*0.5%1*2*Math.PI))}Z" fill="#5DB7EA"/><text x="0" y="22" text-anchor="middle" font-family="Inter" font-weight="800" font-size="64" fill="${OL}">${txt}</text>`);}

// ===== Masa Sih Micin Bikin Bodoh? =====
{const E=DUR+0.2;
const m1=at('jangan')-0.1, bc=at('Masa sih')-0.1, b1=at('Micin itu')-0.15, b2=at('Badan')-0.15, b3=at('Terus')-0.15, b4=at('Tapi tetap')-0.15, b5=at('Plot')-0.25, b6=at('Jadi micin')-0.15, b7=at('Kamu tim')-0.15;
sHook({t0:0,t1:m1,key:'MICIN?',keyAt:0.5,prop:t=>sachet(1),ps:2.4,bg:'#3A1E1E',glow:'#E8505B',particle:(t,i)=>`<rect x="-14" y="-14" width="28" height="28" rx="6" fill="#fff" opacity=".9" transform="rotate(${i*20})"/>`});
sMyth({t0:m1,t1:bc,bubbleAt:at('nanti'),bubble:'Nanti <tspan fill="#E5383B">BEGO!</tspan>',bw:520,label:'GENERASI MICIN?',labelAt:at('Generasi'),worryAt:at('bego'),holdR:t=>g('scale(.3)',sachet(1))});
sCard({t0:bc,t1:b1,lines:['MASA SIH','MICIN BIKIN','BODOH?'],yukAt:at('Yuk'),hold:t=>g('scale(.3)',sachet(1))});
// MSG = glutamat alami
const tT=at('tomat'),tK=at('keju'),tJ=at('jamur'),tB=at('Tubuh');
sFact({t0:b1,t1:b2,bg:'#16343F',glow:'#2E7E8F',
 world:t=>{let s='';const mv=ss((t-tT+0.3)/0.6);
  s+=popAt(t,b1+0.1,sachet(1),960,lerp(980,760,mv),lerp(1.5,0.9,mv));
  s+=popAt(t,tT,tomato(1),V(660,560),1150,1.2)+popAt(t,tK,cheese(1),960,1180,1.2)+popAt(t,tJ,mushroom(1),V(1260,1360),1150,1.2);
  if(t>tB){s+=`<rect width="1920" height="1920" fill="#0B1E26" opacity="${fmt(.6*ss((t-tB)/.4))}"/>`+yuma({x:960,y:1450,s:1.2*popS(t,tB,.5),expr:'happy',aL:60,aR:-40,blink:blinkAt(t,3)});
   for(let i=0;i<6;i++){const a=t*1.2+i*1.05;s+=g(tr(960+Math.cos(a)*260,1000+Math.sin(a)*120,0.6*popS(t,tB+0.3+i*0.08,.4)),molecule(1,'#F4C542'));}}
  return s;},
 labels:[{at:at('MSG'),txt:'MSG = monosodium glutamat',bg:'#F4C542',fill:OL,size:V(52,50),until:tT},{at:tT,txt:'GLUTAMAT ALAMI',bg:'#3BB273',until:tB},{at:tB+0.3,txt:'tubuh bikin sendiri',bg:'#5B6C8F',size:V(56,50)}],
 c0:[960,960,1.12],c1:[960,980,1.0]});
// FDA aman + uji buta
const tP=at('Penelitian'),tKo=at('konsisten');
sFact({t0:b2,t1:b3,bg:'#1C2F45',glow:'#5DB7EA',
 world:t=>{let s='';
  if(t<tP){s+=popAt(t,b2+0.15,shield(1),960,980,2.2);}
  else{const xs=[V(720,640),V(1200,1280)];for(let i=0;i<2;i++){s+=popAt(t,tP+i*0.2,`<rect x="-150" y="-60" width="300" height="160" rx="20" fill="#fff" stroke="${OL}" stroke-width="6"/><path d="M-170,-60Q0,-200 170,-60Z" fill="#9AA9B8" stroke="${OL}" stroke-width="6"/><text x="0" y="70" text-anchor="middle" font-family="B2" font-weight="800" font-size="90" fill="${OL}">?</text>`,xs[i],1040,1.3);}
   s+=yuma({x:960,y:1600,s:1.0,expr:t<tKo?'think':'happy',aL:70,aR:70,blink:blinkAt(t,5)});}
  return s;},
 labels:[{at:at('FDA'),txt:'FDA',bg:'#2C8FC4',until:tP},{at:at('aman'),txt:'UMUMNYA AMAN',bg:'#3BB273',y:V(540,220),until:tP},{at:tP+0.2,txt:'UJI BUTA',bg:'#5B6C8F',until:tKo},{at:tKo,txt:'gejala tidak konsisten',bg:'#3BB273',size:V(56,50)}],
 src:'Sumber: FDA (GRAS); Geha dkk., J Nutr (2000)',srcAt:b2+0.3,c0:[960,980,1.0],c1:[960,960,1.1]});
// diagram: usus & sawar otak
const tO=at('otak dijaga'),tBl=at('Belum');
sFact({t0:b3,t1:b4,bg:'#3B3A7A',glow:'#6E6CC4',grid:true,
 world:t=>{let s='';
  s+=`<path d="M760,520C760,380 900,330 990,360C1090,390 1120,480 1100,560L1080,640Q1070,700 1020,700L1000,700L1000,780Q1180,800 1240,900L1300,1500L640,1500L700,900Q740,810 880,780L880,700Q780,680 760,520Z" fill="#6E6CC4" stroke="#fff" stroke-width="6" opacity=".9"/>`;
  s+=g(tr(940,520,0.62),brain(t,1,'happy'));
  s+=`<path d="M820,1180C820,1100 1100,1100 1100,1180C1100,1260 840,1240 860,1320C880,1400 1080,1380 1080,1320" stroke="#F3A6B5" stroke-width="54" fill="none" stroke-linecap="round"/>`;
  for(let i=0;i<8;i++){const p=((t-b3)*0.5+i/8)%1;const y=lerp(820,1250,p);s+=`<circle cx="${fmt(960+Math.sin(p*9+i)*60)}" cy="${fmt(y)}" r="16" fill="#F4C542" stroke="${OL}" stroke-width="3" opacity="${fmt(1-ss((p-0.8)/0.2))}"/>`;}
  const ks=popS(t,tO,.45);if(ks>0)s+=g(tr(940,520,1.05*ks),`<path d="M-200,40A200,200 0 0 1 200,40" stroke="#5DB7EA" stroke-width="22" fill="none" stroke-linecap="round" opacity=".9"/>`);
  if(t>tO+0.3)s+=g(tr(1200,690,0.6),xmark(1),`opacity="${fmt(ss((t-tO-0.3)/.3))}"`);
  return s;},
 labels:[{at:at('usus'),txt:'dipakai di USUS',bg:'#E8505B',until:tO},{at:tO,txt:'SAWAR DARAH OTAK',bg:'#2C8FC4',until:tBl},{at:tBl,txt:'BELUM ADA BUKTI',bg:'#3BB273'}],
 src:'Ilustrasi disederhanakan',srcAt:b3+0.2,c0:[960,880,1.15],c1:[960,960,1.0]});
// natrium sepertiga garam
const tS=at('sepertiga'),tSe=at('sensitif');
sFact({t0:b4,t1:b5,bg:'#2A1F2B',glow:'#8E3B4F',
 world:t=>{let s='';const xs=[V(720,660),V(1200,1260)];const base=1100;
  s+=popAt(t,b4+0.2,saltShaker(1),xs[0],base+150,0.5)+popAt(t,b4+0.4,sachet(1),xs[1],base+110,0.45);
  const gh=clamp((t-tS+0.4)/0.8);const v=[39,12],c=['#E5383B','#F4C542'];
  for(let i=0;i<2;i++){const h=v[i]*V(13,11)*eout(gh);if(gh>0){s+=`<rect x="${xs[i]-90}" y="${fmt(base-h)}" width="180" height="${fmt(h)}" rx="14" fill="${c[i]}" stroke="${OL}" stroke-width="6"/>`+bigText(v[i]+' g',xs[i],fmt(base-h-30),64,{font:'Inter',sw:10,op:fadeIn(t,tS,.3)});}}
  if(t>tSe)s+=popAt(t,tSe,`<path d="M0,-220L210,150Q220,170 196,170L-196,170Q-220,170 -210,150Z" fill="#F4C542" stroke="${OL}" stroke-width="12" stroke-linejoin="round"/><rect x="-18" y="-110" width="36" height="160" rx="18" fill="${OL}"/><circle cx="0" cy="105" r="22" fill="${OL}"/>`,960,700,0.55);
  return s;},
 labels:[{at:at('natrium'),txt:'NATRIUM per 100 g',bg:'#5B6C8F',until:tSe},{at:tSe,txt:'ADA YANG SENSITIF',bg:'#E5383B'}],
 src:'Sumber: Harvard Health; USDA',srcAt:at('natrium')});
// plot twist
const tJa=at('jajanan'),tBu=at('bukan micinnya');
sPlot({t0:b5,t1:b6,
 world:t=>{let s='';const p0=b5+1.6;if(t<p0)return s;
  if(t<tJa){s+=popAt(t,p0,sachet(1),V(760,700),1100,1.0)+popAt(t,p0+0.2,saltShaker(1),V(1180,1240),1180,0.8);s+=popAt(t,at('gurih'),label('GURIH, natrium lebih sedikit',{size:44,bg:'#3BB273'}),960,700,1);}
  else{s+=popAt(t,tJa,chipsBag(1,'ASIN!'),V(720,640),1080,1.1)+popAt(t,at('gorengan'),gorengan(1),V(1200,1280),1120,1.3);s+=xAt(t,tJa+0.5,V(720,640),1080,1.0)+xAt(t,at('gorengan')+0.4,V(1200,1280),1120,1.0);
   if(t>tBu)s+=popAt(t,tBu,sachet(1),960,780,0.6)+checkAt(t,tBu+0.3,1060,700,0.6);}
  return s;},
 labels:[{at:b5+1.7,txt:'MICIN BANTU KURANGI GARAM',bg:'#3BB273',size:V(50,50),until:tJa},{at:tJa,txt:'JAJANAN SUPER ASIN',bg:'#E5383B',until:tBu},{at:tBu,txt:'bukan micinnya',bg:'#5B6C8F'}]});
sCheck({t0:b6,t1:b7,title:'Micin boleh:',items:[['Secukupnya',at('secukupnya')],['+ sayur',at('sayur')],['+ buah',at('buah')]],hold:t=>g('scale(.3)',sachet(1)),label:'JADI GINI'});
sCTA({t0:b7,t1:E,ln:'TIM PAKAI MICIN',ls:'TIM MICIN',rn:'TIM TANPA MICIN',rs:'TIM TANPA',lp:t=>sachet(1),rp:t=>g('translate(0 20)',tomato(1.1))+g('translate(-90 110) scale(.7)',mushroom(1)),aAt:at('pakai',b7),bAt:at('tanpa',b7),vsAt:at('atau',b7),commentAt:at('Tulis'),lc:'#E8505B',rc:'#3BB273'});
}
const THUMB={t:1.4,lines:['MASA SIH','MICIN BIKIN','BODOH?']};

