// ===== FORMAT "MASALAH BERANTAI" v2 FULL ANIMASI (user 22 Nov) =====
// Satu panggung yang terus berkembang: masalah dianimasikan (hujan jatuh, nyamuk terbang, orang jalan masuk...),
// solusi meluncur ke tempatnya lalu tetap di panggung, sampai jadi gambar akhir lengkap. YUMA cuma di pembuka.
// Aktif kalau body memuat CHAINFX. Anchor otomatis dari WORDS: "selamat" (menang), "Tapi gimana kalau" (masalah), kata setelah "?" (solusi).
function _wi(pred,from=0){for(let k=from;k<WORDS.length;k++)if(pred(_n(WORDS[k].w),k))return k;return -1;}
function emj(e,size=360){return `<text x="0" y="0" font-size="${size}" text-anchor="middle" dominant-baseline="central" font-family="Noto Color Emoji">${e}</text>`;}
const CH={};
const _bk=x=>{x=clamp(x);const c1=1.4,c3=c1+1;return 1+c3*Math.pow(x-1,3)+c1*Math.pow(x-1,2);}; // easeOutBack (posisi, bukan skala)
function _el(e,t,x,y,s){return g(tr(x,y,s),typeof e==='function'?e(t):emj(e,200));}
// animasi masalah, a = alpha
function probAnim(st,t,t0,a){const T=t-t0,x=st.x??960,y=st.y??1000,s=st.s??1,e=st.pe;let o='';
 switch(st.anim||'wobble'){
  case 'rain':for(let i=0;i<16;i++){const sp=650+rnd(i)*350,yy=((T*sp+rnd(i+3)*900)%900)+420,xx=500+rnd(i+7)*920;o+=g(tr(xx,yy,0.45*s),emj(e,200));}
   if(st.cloud!==false)o+=g(tr(960+Math.sin(T*1.5)*40,560,1.3),emj('☁️',260))+g(tr(700+Math.sin(T*1.2+1)*30,600,1),emj('☁️',220))+g(tr(1230,590,1),emj('☁️',220));break;
  case 'swarm':for(let i=0;i<6;i++){const ph=i*1.05,r=170+60*Math.sin(T*2+i);o+=g(tr(x+Math.cos(T*3.2+ph)*r*1.3,y+Math.sin(T*4.1+ph)*r*0.6,0.55*s,Math.sin(T*9+i)*15),emj(e,200));}break;
  case 'fall':for(let i=0;i<9;i++){const yy=((T*260+rnd(i+1)*800)%850)+430,xx=520+rnd(i+11)*880+Math.sin(T*2+i)*70;o+=g(tr(xx,yy,0.5*s,Math.sin(T*3+i)*40),emj(e,200));}break;
  case 'grow':{const n=Math.min(9,1+Math.floor(T*4));for(let i=0;i<n;i++){const ang=i*2.4,r=60+i*28;o+=g(tr(x+Math.cos(ang)*r*1.4+Math.sin(T*6+i)*8,y+Math.sin(ang)*r*0.7,0.42*s,Math.sin(T*8+i)*12),emj(e,200));}break;}
  case 'walkin':{const n=st.n||4;for(let i=0;i<n;i++){const tx=x+i*150,k=eout((T-i*0.25)/1.1),xx=lerp(1650+i*150,tx,k),bob=Math.abs(Math.sin(T*10+i))*18*(k<1?1:0.3);o+=g(tr(xx,y-bob,0.75*s),emj(e,200));}break;}
  case 'dash':{const ph=(T*0.9)%2,dir=ph<1?1:-1,xx=ph<1?lerp(520,1400,ss(ph)):lerp(1400,520,ss(ph-1));o+=g(`translate(${fmt(xx)} ${fmt(y-Math.abs(Math.sin(T*14))*30)}) scale(${(-dir*0.9*s).toFixed(3)} ${(0.9*s).toFixed(3)})`,emj(e,200));
   o+=`<rect width="1920" height="1920" fill="#0B1030" opacity="${fmt(0.35*Math.min(1,T*3))}"/>`;break;}
  default:o+=g(tr(x+Math.sin(T*30)*10,y,s,Math.sin(T*18)*9),emj(e,260))+g(tr(x+150*s,y-170*s,0.8,Math.sin(T*10)*10),emj('❗',160));}
 return `<g opacity="${fmt(a)}">${o}</g>`;}
function fixAnim(st,t,tf){const T=t-tf;if(T<0||!st.fe)return '';const x=st.fx??960,y=st.fy??1000,s=st.fs??1;
 const k=_bk(T/0.55),yy=st.from==='side'?y:lerp(y-650,y,k),xx=st.from==='side'?lerp(1700,x,k):x;
 let rot=0,dy=0;if(st.idle==='spin')rot=T*120;if(st.idle==='bob')dy=Math.sin(T*3)*10;
 const fe=st.fe;return g(`translate(${fmt(xx)} ${fmt(yy+dy)}) rotate(${fmt(rot)}) scale(${s.toFixed(3)})`,typeof fe==='function'?fe(T):emj(fe,200));}
function chStage(o,t){let s=o.bgFn?o.bgFn(t):`<rect width="1920" height="1920" fill="${o.sky||'#BDE8FF'}"/><circle cx="1350" cy="560" r="300" fill="#fff" opacity=".35"/><rect y="${o.groundY||1180}" width="1920" height="800" fill="${o.ground||'#8BD17C'}"/>`;
 if(o.scene)s+=o.scene(t);
 // base
 if(t>=CH.s0-0.05){const T=t-CH.s0,k=_bk(T/0.55);s+=g(tr(o.base.x??960,lerp((o.base.y??1100)-650,o.base.y??1100,k),o.base.s??1),typeof o.base.e==='function'?o.base.e(t):emj(o.base.e,200));}
 o.steps.forEach((st,k)=>{const p=CH.p[k],f=CH.f[k];
  if(t>=f)s+=fixAnim(st,t,f);
  if(t>=p&&t<f+0.6)s+=probAnim(st,t,p,t<f?Math.min(1,(t-p)*5):1-(t-f)/0.6);});
 if(t>=CH.sl&&CH.sl>CH.s0+1){const T=t-CH.sl,k=_bk(T/0.6);s+=rays(960,900,12,1500,9,.3*Math.min(1,T*2),t*8)+confetti(t,18)+g(tr(o.final.x??960,lerp((o.final.y??780)+700,o.final.y??780,k),o.final.s??1.6),emj(o.final.e,200));}
 // tint masalah/solusi
 const kp=CH.p.findIndex((p,k)=>t>=p&&t<CH.f[k]);if(kp>=0)s+=`<rect width="1920" height="1920" fill="#E5383B" opacity=".08"/>`;
 CH.f.forEach(f=>{if(t>=f&&t<f+0.35)s+=`<rect width="1920" height="1920" fill="#3BB273" opacity="${fmt(0.22*(1-(t-f)/0.35))}"/>`;});
 return s;}
function mkChain(o){const E=DUR+0.2;const sel=[],prob=[],fix=[];
 for(let k=0;k<WORDS.length;k++){const w=_n(WORDS[k].w);
  if(w==='selamat')sel.push(WORDS[k].s);
  if(w==='tapi'&&WORDS[k+1]&&_n(WORDS[k+1].w)==='gimana'){prob.push(WORDS[k].s);const q=_wi((x,j)=>WORDS[j].w.includes('?'),k);fix.push(q>=0&&WORDS[q+1]?WORDS[q+1].s:WORDS[k].e+1.5);}}
 const sl=sel[sel.length-1];
 const qk=_wi((x,j)=>WORDS[j].s>sl&&/[!.]$/.test(WORDS[j-1]?.w||''),0);const qStart=qk>=0?WORDS[qk].s-0.1:at('Tulis',sl)-0.1;
 Object.assign(CH,{s0:sel[0],sl,p:prob,f:fix});
 THUMB={t:0.6,lines:o.thumb};
 const hookEnd=Math.max(sel[0]-0.05,1.6);
 sHook({t0:0,t1:hookEnd,key:o.key,keyAt:0.3,keySize:o.keySize||84,prop:t=>emj(o.hook,300),ps:1.3,py:1080,bg:o.bg||'#FFE9A8',glow:'#FFFFFF',
  particle:(t,i)=>`<circle r="14" fill="#fff" opacity=".7"/>`,surpriseAt:0.8});
 const B=[hookEnd].concat(prob.map(p=>p-0.1),[sl-0.1,qStart]);
 for(let i=0;i<B.length-1;i++){const t0=B[i],t1=B[i+1];if(t1<=t0+0.05)continue;const k=i-1,st=o.steps[k];const px=(i%2?-1:1)*25;
  S.push({t0,t1,world:t=>chStage(o,t),cam:t=>camV(t,t0,t1,[960-px,960,1],[960+px,950,1]),
   hud:t=>{if(i===0)return hudLabel(t,sel[0],'SELAMAT!',{bg:'#F2A541',fill:OL,size:V(96,80)})+hudLabel(t,sel[0]+0.4,o.base.l,{bg:'#3BB273',y:V(560,230),size:V(62,54),r:2});
    if(i===B.length-2)return hudLabel(t,sl,'SELAMAT!',{bg:'#F2A541',fill:OL,size:V(96,80)})+hudLabel(t,sl+0.4,o.final.l,{bg:'#E8505B',y:V(560,230),size:V(64,56),r:2});
    const tf=fix[k];return t<tf?hudLabel(t,t0+0.1,'TAPI GIMANA KALAU…',{bg:'#E5383B',size:V(64,56)})+hudLabel(t,t0+0.3,st.pl,{bg:'#fff',fill:OL,y:V(560,230),size:V(60,52),r:2})
      :hudLabel(t,tf,'✔ '+st.fl,{bg:'#3BB273',size:V(62,54)});}});}
 S.push({t0:qStart,t1:E,world:t=>chStage(o,t)+`<rect width="1920" height="1920" fill="#FFF8E1" opacity=".55"/>`+confetti(t),
  cam:t=>[960,960,1],
  hud:t=>{let s='';const kq=popS(t,qStart+0.1,.4);
   if(kq>0)o.q.forEach((l,i)=>{s+=g(tr(W/2,V(560+i*112,150+i*100),kq,-2),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="${V(88,80)}" fill="${i%2?'#F7D21E':'#fff'}" stroke="${OL}" stroke-width="13" paint-order="stroke">${l}</text>`);});
   const kc=popS(t,at('Tulis',qStart)-0.05,.4);if(kc>0)s+=g(tr(W/2,V(560+o.q.length*112+30,150+o.q.length*100+30),kc,2),`<rect x="-330" y="-62" width="660" height="104" rx="30" fill="#fff" stroke="${OL}" stroke-width="7"/><text x="0" y="16" text-anchor="middle" font-family="B2" font-weight="800" font-size="56" fill="${OL}">TULIS DI KOMENTAR 👇</text>`);
   const ks=popS(t,at('subscribe',qStart)-0.05,.4);if(ks>0)s+=g(tr(W/2,V(1660,950),ks,-3),`<rect x="-280" y="-70" width="560" height="140" rx="36" fill="#E5383B" stroke="#fff" stroke-width="8"/><polygon points="-210,-30 -210,30 -160,0" fill="#fff"/><text x="30" y="24" text-anchor="middle" font-family="B2" font-weight="800" font-size="72" fill="#fff">SUBSCRIBE</text>`);
   return s;}});
}
