const WORDS=[{"w": "Woyyy!", "s": 0.15, "e": 0.72}, {"w": "Senin", "s": 0.78, "e": 1.04}, {"w": "sampai", "s": 1.088, "e": 1.36}, {"w": "Jumat", "s": 1.4, "e": 1.68}, {"w": "begadang,", "s": 1.74, "e": 2.64}, {"w": "terus", "s": 2.68, "e": 2.88}, {"w": "Sabtu", "s": 2.92, "e": 3.16}, {"w": "Minggu", "s": 3.184, "e": 3.36}, {"w": "tidur", "s": 3.4, "e": 3.6}, {"w": "sampai", "s": 3.648, "e": 4.0}, {"w": "siang.", "s": 4.053, "e": 4.68}, {"w": "Katanya", "s": 4.75, "e": 5.12}, {"w": "utang", "s": 5.173, "e": 5.36}, {"w": "tidur", "s": 5.42, "e": 5.76}, {"w": "langsung", "s": 5.787, "e": 6.0}, {"w": "lunas!", "s": 6.08, "e": 6.64}, {"w": "Masa", "s": 7.208, "e": 7.28}, {"w": "sih?", "s": 7.333, "e": 7.999}, {"w": "Yuk", "s": 8.13, "e": 8.16}, {"w": "kita", "s": 8.208, "e": 8.4}, {"w": "cek!", "s": 8.48, "e": 8.8}, {"w": "Orang", "s": 9.067, "e": 9.68}, {"w": "dewasa", "s": 9.72, "e": 10.16}, {"w": "butuh", "s": 10.22, "e": 10.48}, {"w": "tidur", "s": 10.54, "e": 10.88}, {"w": "tujuh", "s": 10.933, "e": 11.24}, {"w": "sampai", "s": 11.264, "e": 11.44}, {"w": "sembilan", "s": 11.48, "e": 11.76}, {"w": "jam", "s": 11.84, "e": 12.08}, {"w": "semalam.", "s": 12.14, "e": 12.72}, {"w": "Kalau", "s": 12.84, "e": 13.28}, {"w": "kurang", "s": 13.32, "e": 13.52}, {"w": "terus,", "s": 13.58, "e": 14.16}, {"w": "terjadilah", "s": 14.2, "e": 14.72}, {"w": "utang", "s": 14.773, "e": 14.96}, {"w": "tidur.", "s": 15.04, "e": 15.76}, {"w": "Susah", "s": 15.86, "e": 16.24}, {"w": "fokus,", "s": 16.28, "e": 17.04}, {"w": "gampang", "s": 17.08, "e": 17.36}, {"w": "lapar,", "s": 17.44, "e": 18.0}, {"w": "dan", "s": 18.04, "e": 18.16}, {"w": "mood", "s": 18.208, "e": 18.4}, {"w": "naik", "s": 18.453, "e": 18.64}, {"w": "turun.", "s": 18.7, "e": 19.36}, {"w": "Ada", "s": 19.5, "e": 19.92}, {"w": "penelitian", "s": 19.98, "e": 20.56}, {"w": "di", "s": 20.587, "e": 20.64}, {"w": "jurnal", "s": 20.72, "e": 21.04}, {"w": "Current", "s": 21.08, "e": 21.36}, {"w": "Biology", "s": 21.43, "e": 21.92}, {"w": "tahun", "s": 21.987, "e": 22.32}, {"w": "2019.", "s": 22.36, "e": 23.6}, {"w": "Peserta", "s": 23.7, "e": 24.24}, {"w": "kurang", "s": 24.3, "e": 24.56}, {"w": "tidur", "s": 24.6, "e": 24.88}, {"w": "di", "s": 24.907, "e": 24.96}, {"w": "hari", "s": 25.008, "e": 25.2}, {"w": "kerja,", "s": 25.26, "e": 25.92}, {"w": "lalu", "s": 25.96, "e": 26.24}, {"w": "boleh", "s": 26.293, "e": 26.48}, {"w": "tidur", "s": 26.54, "e": 26.8}, {"w": "sepuasnya", "s": 26.853, "e": 27.44}, {"w": "di", "s": 27.467, "e": 27.52}, {"w": "akhir", "s": 27.573, "e": 27.84}, {"w": "pekan.", "s": 27.893, "e": 28.48}, {"w": "Hasilnya?", "s": 28.6, "e": 29.72}, {"w": "Berat", "s": 29.79, "e": 30.08}, {"w": "badan", "s": 30.12, "e": 30.32}, {"w": "tetap", "s": 30.36, "e": 30.64}, {"w": "naik,", "s": 30.693, "e": 31.28}, {"w": "dan", "s": 31.32, "e": 31.44}, {"w": "sensitivitas", "s": 31.497, "e": 32.16}, {"w": "insulin", "s": 32.21, "e": 32.56}, {"w": "mereka", "s": 32.606, "e": 32.88}, {"w": "tetap", "s": 32.94, "e": 33.2}, {"w": "turun,", "s": 33.26, "e": 33.92}, {"w": "mirip", "s": 33.98, "e": 34.32}, {"w": "kelompok", "s": 34.34, "e": 34.72}, {"w": "yang", "s": 34.752, "e": 34.88}, {"w": "terus", "s": 34.92, "e": 35.12}, {"w": "kurang", "s": 35.16, "e": 35.36}, {"w": "tidur.", "s": 35.44, "e": 36.16}, {"w": "Plot", "s": 36.614, "e": 36.64}, {"w": "twist-nya...", "s": 36.693, "e": 37.68}, {"w": "tidur", "s": 37.72, "e": 37.92}, {"w": "balas", "s": 37.96, "e": 38.24}, {"w": "dendam", "s": 38.272, "e": 38.56}, {"w": "malah", "s": 38.6, "e": 38.8}, {"w": "bikin", "s": 38.86, "e": 39.12}, {"w": "jam", "s": 39.18, "e": 39.36}, {"w": "biologis", "s": 39.387, "e": 39.84}, {"w": "kacau!", "s": 39.92, "e": 40.8}, {"w": "Bangun", "s": 40.88, "e": 41.36}, {"w": "jam", "s": 41.4, "e": 41.52}, {"w": "satu", "s": 41.568, "e": 41.76}, {"w": "siang", "s": 41.84, "e": 42.08}, {"w": "di", "s": 42.133, "e": 42.24}, {"w": "hari", "s": 42.272, "e": 42.4}, {"w": "Minggu,", "s": 42.448, "e": 43.12}, {"w": "terus", "s": 43.16, "e": 43.36}, {"w": "Senin", "s": 43.4, "e": 43.6}, {"w": "pagi", "s": 43.68, "e": 44.08}, {"w": "badan", "s": 44.12, "e": 44.4}, {"w": "kayak", "s": 44.44, "e": 44.64}, {"w": "kena", "s": 44.68, "e": 44.88}, {"w": "jet", "s": 44.96, "e": 45.2}, {"w": "lag.", "s": 45.24, "e": 45.84}, {"w": "Tidur", "s": 45.88, "e": 46.16}, {"w": "siang", "s": 46.213, "e": 46.4}, {"w": "boleh,", "s": 46.453, "e": 47.12}, {"w": "tapi", "s": 47.184, "e": 47.44}, {"w": "cukup", "s": 47.5, "e": 47.76}, {"w": "sepuluh", "s": 47.82, "e": 48.16}, {"w": "sampai", "s": 48.208, "e": 48.48}, {"w": "dua", "s": 48.52, "e": 48.64}, {"w": "puluh", "s": 48.68, "e": 48.92}, {"w": "menit", "s": 48.95, "e": 49.2}, {"w": "supaya", "s": 49.3, "e": 49.76}, {"w": "nggak", "s": 49.787, "e": 49.92}, {"w": "bangun", "s": 49.952, "e": 50.16}, {"w": "pusing.", "s": 50.2, "e": 50.88}, {"w": "Jadi", "s": 51.36, "e": 51.52}, {"w": "yang", "s": 51.552, "e": 51.68}, {"w": "paling", "s": 51.72, "e": 52.0}, {"w": "ampuh,", "s": 52.08, "e": 52.72}, {"w": "tidur", "s": 52.76, "e": 53.04}, {"w": "dan", "s": 53.08, "e": 53.2}, {"w": "bangun", "s": 53.248, "e": 53.6}, {"w": "di", "s": 53.627, "e": 53.68}, {"w": "jam", "s": 53.74, "e": 53.92}, {"w": "yang", "s": 53.952, "e": 54.08}, {"w": "sama", "s": 54.144, "e": 54.4}, {"w": "setiap", "s": 54.44, "e": 54.72}, {"w": "hari,", "s": 54.8, "e": 55.36}, {"w": "termasuk", "s": 55.392, "e": 55.84}, {"w": "akhir", "s": 55.893, "e": 56.08}, {"w": "pekan.", "s": 56.133, "e": 56.56}, {"w": "Kamu", "s": 57.315, "e": 57.48}, {"w": "tim", "s": 57.51, "e": 57.6}, {"w": "tidur", "s": 57.66, "e": 57.92}, {"w": "balas", "s": 57.96, "e": 58.16}, {"w": "dendam", "s": 58.208, "e": 58.56}, {"w": "atau", "s": 58.608, "e": 58.8}, {"w": "tim", "s": 58.86, "e": 59.04}, {"w": "tidur", "s": 59.08, "e": 59.28}, {"w": "teratur,", "s": 59.34, "e": 59.88}, {"w": "kak?", "s": 59.91, "e": 60.32}, {"w": "Tulis", "s": 60.36, "e": 60.56}, {"w": "di", "s": 60.613, "e": 60.72}, {"w": "komentar", "s": 60.76, "e": 61.12}, {"w": "ya!", "s": 61.2, "e": 61.68}];const DUR=61.727;
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

// ===== Masa Sih Begadang Bisa Dibayar Tidur Seharian? =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Orang dewasa')-0.15, b2=at('Ada penelitian')-0.15, b3=at('Plot')-0.2, b4=at('Tidur siang')-0.15, b5=at('Jadi yang')-0.15, b6=at('Kamu tim')-0.15;
sHook({t0:0,t1:bc,key:'UTANG TIDUR?',keyAt:at('utang'),keySize:88,prop:t=>calendar(t,1,['S','S','R','K','J','S','M'],t>at('Sabtu')?[5,6]:[0,1,2,3,4]),ps:1.5,py:1050,bg:'#141A3A',glow:'#5B6C8F',particle:(t,i)=>`<text x="0" y="0" font-family="B2" font-weight="800" font-size="60" fill="#fff" opacity=".8">Z</text>`,surpriseAt:at('lunas')});
sCard({t0:bc,t1:b1,lines:['MASA SIH','UTANG TIDUR','BISA DIBAYAR?'],yukAt:at('Yuk')});
const tKu=at('Kalau kurang'),tSu=at('Susah');
sFact({t0:b1,t1:b2,bg:'#141A3A',glow:'#5B6C8F',
 world:t=>{let s='';if(t<tKu)s+=bigNum(t,at('tujuh'),'7-9 JAM','tidur per malam',960,900,{size:190});
  else{s+=popAt(t,tKu,battery(t,1,lerp(0.9,0.15,ss((t-tKu)/2.2))),960,820,1.4);
   const it=[['susah fokus',at('fokus')],['gampang lapar',at('lapar')],['mood naik turun',at('mood')]];it.forEach(([x,tt],i)=>{s+=popAt(t,tt,label(x,{size:46,bg:'#E8505B'}),V(960,560+i*400),V(1060+i*110,1120),1,i%2?3:-3);});}
  return s;},
 labels:[{at:at('Orang'),txt:'ORANG DEWASA',bg:'#5B6C8F',until:tKu},{at:at('utang',tKu),txt:'UTANG TIDUR',bg:'#E5383B'}],
 src:'Sumber: AASM / CDC (7-9 jam untuk dewasa)'});
const tHa=at('Hasilnya'),tIn=at('sensitivitas');
sFact({t0:b2,t1:b3,bg:'#16343F',glow:'#2E7E8F',
 world:t=>{let s='';if(t<tHa){s+=g(tr(960,900,1.3),calendar(t,1,['S','S','R','K','J','S','M'],t>at('akhir pekan')?[5,6]:[0,1,2,3,4]));
   if(t>at('akhir pekan'))s+=g(tr(960,1300,0.36),bed(0,0,1,lyingHead('sip',true)))+zzz(1100,1120,t);}
  else{s+=popAt(t,tHa,scaleWeight(t,1,'+ kg'),V(720,660),1150,1.0);if(t>tIn)s+=popAt(t,tIn,`<rect x="-120" y="-120" width="240" height="240" rx="30" fill="#fff" stroke="${OL}" stroke-width="7"/><path d="M-80,-60L0,20L80,90" stroke="#E5383B" stroke-width="16" fill="none" stroke-linecap="round"/><path d="M60,80L84,94L76,64" stroke="#E5383B" stroke-width="12" fill="none" stroke-linecap="round"/>`,V(1200,1260),1080,1.0);}
  return s;},
 labels:[{at:b2+0.1,txt:'CURRENT BIOLOGY 2019',bg:'#5B6C8F',until:at('akhir pekan')},{at:at('akhir pekan'),txt:'TIDUR SEPUASNYA WEEKEND',bg:'#3BB273',size:V(50,52),until:tHa},{at:tHa,txt:'BERAT TETAP NAIK',bg:'#E5383B',until:tIn},{at:tIn,txt:'INSULIN TETAP TURUN',bg:'#E5383B'}],
 src:'Sumber: Depner dkk., Current Biology (2019)'});
const tBa=at('Bangun'),tJl=at('jet');
sPlot({t0:b3,t1:b4,bg:'#141A3A',glow:'#5B6C8F',
 world:t=>{const p0=b3+1.6;if(t<p0)return '';let s='';if(t<tBa)s+=popAt(t,p0,clockFace(t,1,10),960,950,1.6);
  else if(t<tJl)s+=popAt(t,tBa,clockFace(t,1,1),960,900,1.4)+popAt(t,at('Minggu',tBa),label('MINGGU 13.00',{size:56,bg:'#F4C542',fill:OL}),960,1180,1);
  else s+=g(tr(lerp(500,1500,(t-tJl)/3),900,1.2*popS(t,tJl,.4),-8),plane(1))+yuma({x:960,y:1550,s:1.1,expr:'worried',aL:70,aR:70,blink:blinkAt(t,2)});
  return s;},
 labels:[{at:b3+1.7,txt:'JAM BIOLOGIS KACAU',bg:'#E5383B',until:tJl},{at:tJl,txt:'SENIN = JET LAG',bg:'#E5383B'}]});
sFact({t0:b4,t1:b5,bg:'#CDEBF5',glow:'#fff',
 world:t=>popAt(t,b4+0.1,fanTimer(t,1,'20'),V(760,700),950,1.3)+g(tr(V(1150,1250),1250,0.32),bed(0,0,1,lyingHead('sip',true)))+zzz(V(1230,1330),1060,t)+(t>at('pusing')?xAt(t,at('pusing'),V(760,700),950,0.8):''),
 labels:[{at:b4+0.1,txt:'TIDUR SIANG BOLEH',bg:'#3BB273',until:at('cukup')},{at:at('cukup'),txt:'cukup 10-20 menit',bg:'#5B6C8F',until:at('pusing')},{at:at('pusing'),txt:'kelamaan = pusing',bg:'#E5383B'}]});
sCheck({t0:b5,t1:b6,title:'Paling ampuh:',items:[['Jam tidur sama',at('tidur dan')],['Jam bangun sama',at('bangun',b5)],['Termasuk weekend',at('termasuk')]],label:'JADI GINI'});
sCTA({t0:b6,t1:E,ln:'TIM BALAS DENDAM',ls:'TIM BALAS',rn:'TIM TIDUR TERATUR',rs:'TIM TERATUR',lp:t=>g('scale(.32)',bed(0,0,1,lyingHead('sip',true))),rp:t=>clockFace(t,1.2,1),aAt:at('balas',b6),bAt:at('teratur'),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#8E3B4F',rc:'#2C8FC4'});
}
const THUMB={t:2.0,lines:['MASA SIH','BEGADANG BISA','DIBAYAR?']};

