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
