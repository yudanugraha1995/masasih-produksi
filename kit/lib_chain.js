// ===== FORMAT "MASALAH BERANTAI" (user 22 Nov): Woyyy + bridging, Selamat! punya X, Tapi gimana kalau...? -> solusi, ... -> Selamat! jadi Y =====
// Aktif kalau body memuat CHAINFX. Maskot YUMA cuma di pembuka. Visual: emoji besar + label + strip progres.
// Anchor otomatis dari WORDS: tiap "Tapi gimana kalau" = masalah, kata setelah "?" berikutnya = solusi, "Selamat" = tahap menang.
function _wi(pred,from=0){for(let k=from;k<WORDS.length;k++)if(pred(_n(WORDS[k].w),k))return k;return -1;}
function emj(e,size=360){return `<text x="0" y="0" font-size="${size}" text-anchor="middle" dominant-baseline="central" font-family="Noto Color Emoji">${e}</text>`;}
function chainBg(c1,c2){return `<rect width="1920" height="1920" fill="${c1}"/><circle cx="960" cy="860" r="620" fill="${c2}" opacity=".75" filter="url(#glowf)"/>`;}
function strip(t,list){if(!list.length)return '';const n=list.length,sz=n>6?78:92,gap=sz*1.18,x0=W/2-(n-1)*gap/2,y=V(1260,960);
 return `<rect x="${fmt(x0-gap*0.7)}" y="${fmt(y-sz*0.75)}" width="${fmt((n-1)*gap+gap*1.4)}" height="${fmt(sz*1.5)}" rx="${fmt(sz*0.5)}" fill="#fff" opacity=".85" stroke="${OL}" stroke-width="5"/>`+list.map((e,i)=>g(tr(x0+i*gap,y,1),emj(e,sz))).join('');}
function mkChain(o){const E=DUR+0.2;
 const sel=[],prob=[],fix=[];
 for(let k=0;k<WORDS.length;k++){const w=_n(WORDS[k].w);
  if(w==='selamat')sel.push(WORDS[k].s);
  if(w==='tapi'&&WORDS[k+1]&&_n(WORDS[k+1].w)==='gimana'){prob.push(WORDS[k].s);const q=_wi((x,j)=>WORDS[j].w.includes('?'),k);fix.push(q>=0&&WORDS[q+1]?WORDS[q+1].s:WORDS[k].e+1.5);}}
 const qEnd=at(o.qWord||'Tulis',sel[sel.length-1])-0.1; // pertanyaan akhir mulai setelah Selamat terakhir
 const qStart=(()=>{const k=_wi((x,j)=>WORDS[j].s>sel[sel.length-1]&&/[!.]$/.test(WORDS[j-1]?.w||''),0);return k>=0?WORDS[k].s-0.1:qEnd;})();
 THUMB={t:1.0,lines:o.thumb};
 // 1. HOOK + bridging (satu-satunya scene dengan YUMA)
 sHook({t0:0,t1:sel[0]-0.1,key:o.key,keyAt:at(o.keyWord||o.key.split(' ')[0].toLowerCase()),keySize:o.keySize||84,prop:t=>emj(o.hook,300),ps:1.3,py:1080,bg:o.bg||'#FFE9A8',glow:'#FFFFFF',
  particle:(t,i)=>`<circle r="14" fill="#fff" opacity=".7"/>`,surpriseAt:at(o.keyWord||'Selamat')});
 const built=[o.base.e];
 // 2. Selamat pertama
 const p0=prob[0]??qStart;
 S.push({t0:sel[0]-0.1,t1:p0-0.1,world:t=>chainBg('#FFF3C4','#FFFFFF')+confetti(t,10)+g(tr(960,860,1),emj(o.base.e,420)),
  cam:t=>[960,960,1],hud:t=>hudLabel(t,sel[0],'SELAMAT!',{bg:'#F2A541',fill:OL,size:V(96,80)})+hudLabel(t,sel[0]+0.5,o.base.l,{bg:'#3BB273',y:V(560,230),size:V(62,54),r:2})});
 // 3. tiap masalah -> solusi
 o.steps.forEach((st,k)=>{const t0=prob[k]-0.1,t1=(k+1<prob.length?prob[k+1]:(sel[1]??qStart))-0.1,tf=fix[k]-0.05;const have=built.slice();built.push(st.fe);
  S.push({t0,t1,
   world:t=>t<tf?chainBg('#FFD9D3','#FFF4F2')+g(tr(960,860,1,Math.sin(t*9)*3),emj(st.pe,400))
               :chainBg('#D3F5DD','#F4FFF7')+g(tr(960,860,1),emj(st.fe,400)),
   cam:t=>[960,960,1],
   hud:t=>{let s=(t<tf?hudLabel(t,t0+0.1,'TAPI GIMANA KALAU…',{bg:'#E5383B',size:V(64,56)})+hudLabel(t,t0+0.35,st.pl,{bg:'#fff',fill:OL,y:V(560,230),size:V(60,52),r:2})
                   :hudLabel(t,tf,'✔ '+st.fl,{bg:'#3BB273',size:V(62,54)}));
    return s+strip(t,t<tf?have:have.concat([st.fe]));}});});
 // 4. Selamat terakhir (jadi Y)
 const sl=sel[sel.length-1];
 if(sel.length>1)S.push({t0:sl-0.1,t1:qStart,world:t=>chainBg('#FFE27A','#FFF8E1')+rays(960,860,12,1500,9,.35,t*8)+confetti(t,18)+g(tr(960,820,1),emj(o.final.e,440)),
  cam:t=>[960,960,1],hud:t=>hudLabel(t,sl,'SELAMAT!',{bg:'#F2A541',fill:OL,size:V(96,80)})+hudLabel(t,sl+0.5,o.final.l,{bg:'#E8505B',y:V(560,230),size:V(64,56),r:2})+strip(t,built)});
 // 5. ENDING tanpa YUMA: pertanyaan + TULIS DI KOMENTAR + SUBSCRIBE
 S.push({t0:qStart,t1:E,world:t=>chainBg('#FFE7A3','#FFF8E1')+rays(960,300,9,1500,10,.35,t*6)+confetti(t)+g(tr(960,V(1130,900),1),emj(o.final.e,240)),
  cam:t=>[960,960,1],
  hud:t=>{let s='';const kq=popS(t,qStart+0.1,.4);
   if(kq>0)o.q.forEach((l,i)=>{s+=g(tr(W/2,V(560+i*112,150+i*100),kq,-2),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="${V(88,80)}" fill="${i%2?'#F7D21E':'#fff'}" stroke="${OL}" stroke-width="13" paint-order="stroke">${l}</text>`);});
   const kc=popS(t,at('Tulis',qStart)-0.05,.4);if(kc>0)s+=g(tr(W/2,V(560+o.q.length*112+30,150+o.q.length*100+30),kc,2),`<rect x="-330" y="-62" width="660" height="104" rx="30" fill="#fff" stroke="${OL}" stroke-width="7"/><text x="0" y="16" text-anchor="middle" font-family="B2" font-weight="800" font-size="56" fill="${OL}">TULIS DI KOMENTAR 👇</text>`);
   const ks=popS(t,at('subscribe',qStart)-0.05,.4);if(ks>0){s+=g(tr(W/2,V(1660,950),ks,-3),`<rect x="-280" y="-70" width="560" height="140" rx="36" fill="#E5383B" stroke="#fff" stroke-width="8"/><polygon points="-210,-30 -210,30 -160,0" fill="#fff"/><text x="30" y="24" text-anchor="middle" font-family="B2" font-weight="800" font-size="72" fill="#fff">SUBSCRIBE</text>`);}
   return s;}});
}
