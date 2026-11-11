const WORDS=[{"w": "Woyyy!", "s": 0.12, "e": 0.64}, {"w": "Makan", "s": 0.68, "e": 0.96}, {"w": "telur", "s": 1.0, "e": 1.2}, {"w": "dua", "s": 1.26, "e": 1.44}, {"w": "biji", "s": 1.52, "e": 1.84}, {"w": "langsung", "s": 1.867, "e": 2.08}, {"w": "dimarahin,", "s": 2.14, "e": 2.96}, {"w": "awas", "s": 3.04, "e": 3.36}, {"w": "bisulan!", "s": 3.4, "e": 4.0}, {"w": "Masa", "s": 4.71, "e": 4.96}, {"w": "sih?", "s": 5.04, "e": 5.28}, {"w": "Yuk", "s": 5.806, "e": 5.926}, {"w": "kita", "s": 5.974, "e": 6.166}, {"w": "cek!", "s": 6.206, "e": 6.566}, {"w": "Bisul", "s": 6.786, "e": 7.606}, {"w": "itu", "s": 7.686, "e": 7.926}, {"w": "infeksi", "s": 7.966, "e": 8.406}, {"w": "di", "s": 8.459, "e": 8.566}, {"w": "akar", "s": 8.619, "e": 8.806}, {"w": "rambut", "s": 8.846, "e": 9.126}, {"w": "atau", "s": 9.19, "e": 9.446}, {"w": "kelenjar", "s": 9.486, "e": 9.846}, {"w": "minyak", "s": 9.886, "e": 10.086}, {"w": "kulit.", "s": 10.126, "e": 10.726}, {"w": "Pelaku", "s": 10.766, "e": 11.126}, {"w": "utamanya", "s": 11.179, "e": 11.686}, {"w": "bakteri", "s": 11.746, "e": 12.166}, {"w": "Staphylococcus", "s": 12.219, "e": 12.966}, {"w": "aureus.", "s": 13.03, "e": 13.606}, {"w": "Bakteri", "s": 13.766, "e": 14.486}, {"w": "ini", "s": 14.546, "e": 14.726}, {"w": "masuk", "s": 14.786, "e": 15.046}, {"w": "lewat", "s": 15.099, "e": 15.286}, {"w": "luka", "s": 15.326, "e": 15.526}, {"w": "kecil,", "s": 15.606, "e": 16.166}, {"w": "bekas", "s": 16.226, "e": 16.486}, {"w": "garukan,", "s": 16.526, "e": 17.286}, {"w": "atau", "s": 17.35, "e": 17.606}, {"w": "kulit", "s": 17.646, "e": 17.926}, {"w": "yang", "s": 17.942, "e": 18.006}, {"w": "lembap", "s": 18.059, "e": 18.406}, {"w": "dan", "s": 18.446, "e": 18.566}, {"w": "kotor.", "s": 18.646, "e": 19.286}, {"w": "Telur", "s": 19.386, "e": 19.766}, {"w": "nggak", "s": 19.819, "e": 20.086}, {"w": "membawa", "s": 20.102, "e": 20.326}, {"w": "bakteri", "s": 20.386, "e": 20.806}, {"w": "itu", "s": 20.866, "e": 21.046}, {"w": "ke", "s": 21.099, "e": 21.206}, {"w": "kulit", "s": 21.246, "e": 21.526}, {"w": "kamu.", "s": 21.59, "e": 22.166}, {"w": "Dokter", "s": 22.266, "e": 22.726}, {"w": "sepakat,", "s": 22.766, "e": 23.366}, {"w": "belum", "s": 23.406, "e": 23.606}, {"w": "ada", "s": 23.666, "e": 23.846}, {"w": "bukti", "s": 23.873, "e": 24.166}, {"w": "ilmiah", "s": 24.193, "e": 24.566}, {"w": "telur", "s": 24.626, "e": 24.966}, {"w": "bikin", "s": 25.006, "e": 25.206}, {"w": "bisulan", "s": 25.266, "e": 25.686}, {"w": "pada", "s": 25.75, "e": 26.006}, {"w": "orang", "s": 26.046, "e": 26.246}, {"w": "sehat.", "s": 26.299, "e": 26.806}, {"w": "Terus", "s": 26.906, "e": 27.286}, {"w": "kenapa", "s": 27.326, "e": 27.686}, {"w": "mitos", "s": 27.726, "e": 28.006}, {"w": "ini", "s": 28.046, "e": 28.166}, {"w": "awet?", "s": 28.246, "e": 28.646}, {"w": "Orang", "s": 28.859, "e": 29.366}, {"w": "yang", "s": 29.398, "e": 29.526}, {"w": "alergi", "s": 29.553, "e": 29.846}, {"w": "telur", "s": 29.906, "e": 30.246}, {"w": "bisa", "s": 30.294, "e": 30.486}, {"w": "muncul", "s": 30.526, "e": 30.886}, {"w": "benjolan", "s": 30.926, "e": 31.286}, {"w": "gatal", "s": 31.326, "e": 31.686}, {"w": "yang", "s": 31.718, "e": 31.846}, {"w": "mirip", "s": 31.906, "e": 32.166}, {"w": "bisul.", "s": 32.226, "e": 32.806}, {"w": "Kalau", "s": 32.886, "e": 33.206}, {"w": "digaruk,", "s": 33.266, "e": 33.926}, {"w": "kulitnya", "s": 33.966, "e": 34.326}, {"w": "luka,", "s": 34.366, "e": 34.886}, {"w": "lalu", "s": 34.926, "e": 35.206}, {"w": "bakteri", "s": 35.266, "e": 35.606}, {"w": "gampang", "s": 35.686, "e": 36.006}, {"w": "masuk.", "s": 36.066, "e": 36.646}, {"w": "Plot", "s": 37.01, "e": 37.138}, {"w": "twist-nya...", "s": 37.191, "e": 37.938}, {"w": "telur", "s": 37.978, "e": 38.178}, {"w": "malah", "s": 38.238, "e": 38.458}, {"w": "sumber", "s": 38.478, "e": 38.738}, {"w": "protein", "s": 38.798, "e": 39.218}, {"w": "yang", "s": 39.266, "e": 39.458}, {"w": "bantu", "s": 39.498, "e": 39.778}, {"w": "luka", "s": 39.818, "e": 40.018}, {"w": "cepat", "s": 40.098, "e": 40.418}, {"w": "sembuh!", "s": 40.458, "e": 40.818}, {"w": "Satu", "s": 40.998, "e": 41.618}, {"w": "butir", "s": 41.678, "e": 41.938}, {"w": "telur", "s": 41.998, "e": 42.258}, {"w": "punya", "s": 42.318, "e": 42.578}, {"w": "sekitar", "s": 42.631, "e": 42.978}, {"w": "enam", "s": 43.026, "e": 43.218}, {"w": "gram", "s": 43.282, "e": 43.538}, {"w": "protein.", "s": 43.608, "e": 44.418}, {"w": "Yang", "s": 44.482, "e": 44.738}, {"w": "perlu", "s": 44.798, "e": 45.058}, {"w": "dijaga", "s": 45.118, "e": 45.458}, {"w": "itu", "s": 45.538, "e": 45.778}, {"w": "kebersihan", "s": 45.805, "e": 46.258}, {"w": "kulit.", "s": 46.318, "e": 46.978}, {"w": "Ganti", "s": 47.058, "e": 47.378}, {"w": "baju", "s": 47.418, "e": 47.618}, {"w": "yang", "s": 47.65, "e": 47.778}, {"w": "basah", "s": 47.838, "e": 48.058}, {"w": "keringat,", "s": 48.078, "e": 48.818}, {"w": "jangan", "s": 48.858, "e": 49.058}, {"w": "pencet", "s": 49.106, "e": 49.458}, {"w": "bisul,", "s": 49.518, "e": 50.098}, {"w": "dan", "s": 50.138, "e": 50.258}, {"w": "kalau", "s": 50.318, "e": 50.578}, {"w": "punya", "s": 50.618, "e": 50.818}, {"w": "diabetes,", "s": 50.889, "e": 51.618}, {"w": "rajin", "s": 51.698, "e": 52.018}, {"w": "cek", "s": 52.098, "e": 52.258}, {"w": "gula", "s": 52.298, "e": 52.498}, {"w": "darah,", "s": 52.558, "e": 53.058}, {"w": "karena", "s": 53.104, "e": 53.378}, {"w": "lebih", "s": 53.431, "e": 53.698}, {"w": "gampang", "s": 53.738, "e": 54.018}, {"w": "kena", "s": 54.098, "e": 54.338}, {"w": "infeksi", "s": 54.398, "e": 54.818}, {"w": "kulit.", "s": 54.878, "e": 55.378}, {"w": "Kamu", "s": 55.908, "e": 56.018}, {"w": "tim", "s": 56.058, "e": 56.178}, {"w": "telur", "s": 56.238, "e": 56.498}, {"w": "tiap", "s": 56.551, "e": 56.738}, {"w": "hari", "s": 56.802, "e": 57.058}, {"w": "atau", "s": 57.122, "e": 57.378}, {"w": "tim", "s": 57.418, "e": 57.538}, {"w": "takut", "s": 57.598, "e": 57.858}, {"w": "bisulan,", "s": 57.898, "e": 58.418}, {"w": "kak?", "s": 58.438, "e": 58.898}, {"w": "Tulis", "s": 58.938, "e": 59.138}, {"w": "di", "s": 59.191, "e": 59.298}, {"w": "komentar", "s": 59.338, "e": 59.778}, {"w": "ya!", "s": 59.858, "e": 60.098}];const DUR=60.108;
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

// ===== Masa Sih Makan Telur Bikin Bisulan? =====
{const E=DUR+0.2;
const m1=at('langsung')-0.1, bc=at('Masa sih')-0.1, b1=at('Bisul itu')-0.15, b2=at('Telur nggak')-0.15, b3=at('Terus kenapa')-0.15, b4=at('Plot')-0.2, b5=at('Yang perlu')-0.15, b6=at('Kamu tim')-0.15;
const staph=(t,s=1)=>{let c='';for(let i=0;i<7;i++){const a=i*0.9;c+=`<circle cx="${fmt(Math.cos(a)*40*(i?1:0))}" cy="${fmt(Math.sin(a)*40*(i?1:0))}" r="30" fill="#F4C542" stroke="${OL}" stroke-width="4"/>`;}return g(`scale(${s}) rotate(${fmt(t*20)})`,c+`<path d="M-16,-6L-4,0M16,-6L4,0" stroke="#2E2430" stroke-width="5" stroke-linecap="round"/><path d="M-10,18Q0,10 10,18" stroke="#2E2430" stroke-width="4" fill="none"/>`);};
sHook({t0:0,t1:m1,key:'TELUR?',keyAt:at('telur'),prop:t=>egg(1),ps:2.6,bg:'#3A2A16',glow:'#F4C542',particle:(t,i)=>g('scale(.25)',egg(1,false))});
sMyth({t0:m1,t1:bc,bubbleAt:at('awas'),bubble:'Awas <tspan fill="#E5383B">BISULAN!</tspan>',bw:600,worryAt:at('bisulan'),holdR:t=>g('scale(.3)',egg(1,false))});
sCard({t0:bc,t1:b1,lines:['MASA SIH','TELUR BIKIN','BISULAN?'],yukAt:at('Yuk'),hold:t=>g('scale(.3)',egg(1,false))});
const tSt=at('Staphylococcus'),tL=at('luka'),tG=at('garukan');
sFact({t0:b1,t1:b2,bg:'#2A1F2B',glow:'#8E3B4F',
 world:t=>{let s=g(tr(960,1180,1.25),skinBump(t,1,ss((t-b1)/1.2)));
  if(t>tSt){for(let i=0;i<4;i++){const a=t*0.8+i*1.6;s+=g(tr(960+Math.cos(a)*280,820+Math.sin(a)*90,0.9*popS(t,tSt+i*0.12,.4)),staph(t+i,1));}}
  if(t>tL)s+=`<path d="M720,1060L770,1040L820,1066" stroke="#C0392B" stroke-width="8" fill="none" opacity="${fmt(fadeIn(t,tL))}"/>`;
  if(t>tG)for(let i=0;i<3;i++)s+=`<path d="M${1120+i*26},1000L${1160+i*26},1080" stroke="#E5383B" stroke-width="7" stroke-linecap="round" opacity="${fmt(fadeIn(t,tG+i*0.1))}"/>`;
  return s;},
 labels:[{at:at('infeksi'),txt:'BISUL = INFEKSI',bg:'#E5383B',until:tSt},{at:tSt,txt:'Staphylococcus aureus',bg:'#F4C542',fill:OL,size:V(56,52),until:tL},{at:tL,txt:'masuk lewat luka',bg:'#5B6C8F'}],
 src:'Ilustrasi disederhanakan',c0:[960,1050,1.1],c1:[960,980,1.0]});
const tD=at('Dokter');
sFact({t0:b2,t1:b3,bg:'#16343F',glow:'#2E7E8F',
 world:t=>{let s=popAt(t,b2+0.1,egg(1),960,1050,2.0);
  s+=g(tr(V(1260,1340),760+20*Math.sin(t*3),0.9),staph(t,1))+xAt(t,at('bakteri',b2)+0.2,V(1260,1340),760,0.8);
  if(t>tD)s+=checkAt(t,tD+0.3,V(700,600),780,1.1);
  return s;},
 labels:[{at:at('membawa'),txt:'TELUR TIDAK BAWA BAKTERI',bg:'#3BB273',size:V(52,52),until:tD},{at:tD,txt:'BELUM ADA BUKTI ILMIAH',bg:'#3BB273',size:V(54,52)}],
 src:'Sumber: penjelasan dokter (detikHealth, Antara)'});
const tA=at('alergi'),tDg=at('digaruk');
sFact({t0:b3,t1:b4,bg:'#2A1F2B',glow:'#8E3B4F',
 world:t=>{let s=g(tr(960,1180,1.25),`<rect x="-360" y="-60" width="720" height="320" rx="60" fill="#F3C9A8" stroke="${OL}" stroke-width="6"/>`);
  for(let i=0;i<7;i++){const k=popS(t,tA+0.6+i*0.1,.35);if(k>0)s+=`<circle cx="${fmt(700+rnd(i)*520)}" cy="${fmt(1150+rnd(i+9)*160)}" r="${fmt(26*k)}" fill="#F08B84" stroke="#C0392B" stroke-width="3"/>`;}
  s+=popAt(t,tA,egg(1),V(760,560),760,0.8);
  if(t>tDg){const x=900+80*Math.sin(t*14);s+=`<path d="M${fmt(x)},1080l40,120M${fmt(x+40)},1070l40,120" stroke="#E5383B" stroke-width="9" stroke-linecap="round"/>`;}
  if(t>at('bakteri',b3))s+=g(tr(V(1240,1340),820,0.8*popS(t,at('bakteri',b3),.4)),staph(t,1));
  return s;},
 labels:[{at:at('mitos'),txt:'KENAPA AWET?',bg:'#5B6C8F',until:tA},{at:tA,txt:'ALERGI TELUR',bg:'#E5383B',until:tDg},{at:tDg,txt:'digaruk = luka',bg:'#E5383B'}]});
sPlot({t0:b4,t1:b5,bg:'#14301F',glow:'#3BB273',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';return popAt(t,p0,egg(1),V(800,760),1080,1.6)+popAt(t,at('enam'),proteinBadge(1,'6 g'),V(1220,1260),900,1.2)+popAt(t,at('sembuh'),`<rect x="-120" y="-40" width="240" height="80" rx="40" fill="#F4E1C1" stroke="${OL}" stroke-width="5"/><rect x="-40" y="-40" width="80" height="80" fill="#EBCB9B"/>`,V(800,760),760,0.9);},
 labels:[{at:b4+1.7,txt:'TELUR = PROTEIN',bg:'#3BB273'}],src:'Sumber: USDA FoodData Central (1 butir besar)'});
sCheck({t0:b5,t1:b6,title:'Cegah bisul:',items:[['Kulit bersih',at('kebersihan')],['Ganti baju basah',at('Ganti')],['Jangan pencet',at('pencet')],['Cek gula darah',at('cek gula')]],hold:t=>g('scale(.3)',egg(1,false)),label:'YANG PERLU DIJAGA'});
sCTA({t0:b6,t1:E,ln:'TIM TELUR TIAP HARI',ls:'TIM TELUR',rn:'TIM TAKUT BISULAN',rs:'TIM TAKUT',lp:t=>egg(1),rp:t=>g('scale(.5)',skinBump(t,1,1)),aAt:at('telur',b6),bAt:at('takut',b6),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#F2A541',rc:'#8E3B4F'});
}
const THUMB={t:1.3,lines:['MASA SIH','TELUR BIKIN','BISULAN?']};

