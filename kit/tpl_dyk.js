// ===== Template generik Did You Know (9 negara). body_<id>.js = CFG + isi file ini (lewat mkdyk.py) =====
/*SFX_EXTRA [[0.33,"pop",0.4],[0.55,"pop",0.4],[0.77,"pop",0.4],[0.99,"pop",0.4],[1.21,"pop",0.4],[1.43,"pop",0.45]]*/
/* urutan tipe scene untuk sfx.py: sHook({ sFact({ sFact({ sFact({ sFact({ sFact({ sPlot({ sCTA({ */
{const E=DUR+0.2, C=CFG.items, TW=CFG.twist, GP=CFG.gpad||0, GD=0.9+GP, MAPBG=CFG.bgPhoto?false:true;
const MAPV=(t,t0,c,from,a,b)=>spinGlobe(t,from,c,t0,GD,960,980,true)+`<rect width="1920" height="1920" fill="${a}" opacity="${fmt(0.5*ss((t-t0-GD+0.2)/0.4))}"/><rect width="1920" height="1920" fill="url(#vig)" opacity="${fmt(0.6*ss((t-t0-GD+0.2)/0.4))}"/>`;
const GRID=[...C.map(c=>[c[0],c[1]]),[CFG.hideTwist?'q':TW.code,CFG.hideTwist?'???':TW.name]];
const bP=at(CFG.plotW||'Plot')-0.15, bC=(CFG.ctaW?at(CFG.ctaW,bP+0.5):at('Comment',bP+0.5))-0.15, bSub=Math.max(bC+0.7,at('Subscribe',bC)-0.1), tTW=at(TW.trigger,bP);
const starts=[];C.forEach((c,i)=>starts.push(at(c[2],i?starts[i-1]+0.3+GP:0.5)-0.15-GP));
// background cerah bergradasi (owner 14 Nov); plot twist tetap gelap sebagai selingan
const PAL=[['#5AC8FA','#1E88E5'],['#4DD0A9','#00897B'],['#FF9E7A','#E64A6B'],['#FFD54F','#FB8C00'],['#B39DDB','#7E57C2']];
const BGG=(t,a,b,k)=>`<defs><linearGradient id="bg${k}" x1="0" y1="0" x2="0.3" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="1920" height="1920" fill="url(#bg${k})"/><circle cx="960" cy="${fmt(760+Math.sin(t*.6)*40)}" r="560" fill="#fff" opacity=".22" filter="url(#glowf)"/>`;
const FACE=(t,t0,c,rx,x=840,y=1210)=>{const k=popS(t,t0,.5);if(k<=0)return '';const sh=Math.sin((t-t0)*18)*Math.max(0,1-(t-t0)*2)*6;
 const f=(typeof FACES!=='undefined'&&FACES[c])?`<clipPath id="fc${c}"><circle r="112"/></clipPath><circle r="122" fill="#fff" stroke="${OL}" stroke-width="8"/><image href="${FACES[c]}" x="-112" y="-112" width="224" height="224" clip-path="url(#fc${c})" preserveAspectRatio="xMidYMid slice"/>`:'';
 return g(tr(x+sh,y,k*1.35,-6),f+(rx?`<text x="${f?78:0}" y="${f?-70:30}" text-anchor="middle" font-family="Noto Color Emoji" font-size="${f?110:170}">${rx}</text>`:''));};
const PH=c=>((typeof PHOTO!=='undefined'&&PHOTO[c])?' · Photo: '+PHOTO[c]:'')+((!MAPBG&&typeof LMCR!=='undefined'&&LMCR[c])?' · Bg: '+LMCR[c]:'');
const SRC=(txt,k=1)=>{if(k<=0)return '';const P=txt.split(' · ');const L=[''];P.forEach(p=>{const c=L[L.length-1];if(c&&(c+' · '+p).length>66)L.push(p);else L[L.length-1]=c?c+' · '+p:p;});
 return L.map((l,j)=>`<text x="40" y="${H-60-(L.length-1-j)*30}" font-family="Inter" font-weight="500" font-size="23" fill="#fff" stroke="#000" stroke-opacity=".35" stroke-width="3" paint-order="stroke" opacity="${fmt(.9*k)}">${l}</text>`).join('');};
const NUMC={ok:'#0B5D1E',no:'#B00020'};
// cover klik-bait (owner 15 Nov): ikon topik besar + tanda tanya + judul. CFG.coverIcon = 'ai' (ikon AI gambar sendiri) atau emoji; CFG.coverTag = label besar di ikon (mis. 'CHATGPT')
const CICON=(k)=>(k&&k!=='ai')?`<text y="120" text-anchor="middle" font-family="Noto Color Emoji" font-size="300">${k}</text>`:'';
// teks topik besar (pengganti logo merek; owner 15 Nov: tanpa logo, tulisan dibesarkan)
const CTAG=()=>{const s=CFG.coverTag||'';if(!s)return '';const fs=Math.min(210,1700/(s.length*0.62+0.5));return `<text y="${fmt(fs*0.35)}" text-anchor="middle" font-family="B2" font-weight="800" font-size="${fmt(fs)}" fill="#FFE27A" stroke="${OL}" stroke-width="${fmt(fs*0.16)}" paint-order="stroke" stroke-linejoin="round">${s}</text>`;};
const HASI=()=>CFG.coverIcon&&CFG.coverIcon!=='ai';
const CFLAGS=(x0,y,dx)=>GRID.map(([c],i)=>g(tr(x0+i*dx,y,.25,(i%2?4:-4)),flag(0,c,1),'filter="url(#dsh)"')).join('');
const CQ=(x,y,s,r,big)=>g(tr(x,y,s,r),big?`<text text-anchor="middle" font-family="B2" font-weight="800" font-size="330" fill="#FF3B3B" stroke="#fff" stroke-width="16" paint-order="stroke">?</text>`:`<text text-anchor="middle" font-family="B2" font-weight="800" font-size="230" fill="#FFE27A" stroke="${OL}" stroke-width="14" paint-order="stroke">?</text>`);
// layar cover (layar 1080x1920): ikon 510, tag 730, bendera 880, judul cy 1170 (sama dgn frame THUMB t<0)
// judul cover 0,1-0,5 dtk: seperti thumbTitle tapi font maks 118 supaya tidak bentrok subtitle
const CTITLE=L=>{const fs=Math.min(118,1000/(Math.max(...L.map(l=>l.length))*0.6)),n=L.length,cy=1170;let o='';
 L.forEach((l,k)=>{o+=`<text x="540" y="${fmt(cy+(k-(n-1)/2)*fs*1.07+fs*0.35)}" text-anchor="middle" font-family="B2" font-weight="800" font-size="${fmt(fs)}" fill="#fff" stroke="#1C1730" stroke-width="${fmt(fs*0.17)}" paint-order="stroke" stroke-linejoin="round">${l}</text>`;});return o;};
const COVER=t=>{const fo=1-ss((t-0.35)/0.15),p=1+0.04*Math.sin(t*20);if(fo<=0)return '';
 return `<g opacity="${fmt(fo)}"><defs><linearGradient id="cvg" x1="0" y1="0" x2="0.3" y2="1"><stop offset="0" stop-color="#5AC8FA"/><stop offset="1" stop-color="#7B61FF"/></linearGradient></defs><rect width="1080" height="1920" fill="url(#cvg)"/>`
  +globeArea(TW.code,540,1000,820,.5,t*4,true,95)+rays(540,510,7,1400,14,.22,t*20)+(HASI()?g(tr(540,420,.9*p,-5),CICON(CFG.coverIcon))+g(tr(540,620,.75,-3),CTAG()):g(tr(540,520,p,-4),CTAG()))
  +CQ(900,400,1.0*p,14,1)+CQ(170,430,.75,-16,0)+CFLAGS(165,HASI()?745:680,150)+CTITLE(CFG.cover||CFG.thumb)+'</g>';};
// 1) HOOK: grid 9 bendera
S.push({t0:0,t1:starts[0],
 world:t=>{if(t<0)return BGG(0,'#5AC8FA','#7B61FF','h')+globeArea(TW.code,960,1050,820,.5,0,true,95)+rays(960,560,7,1400,14,.22,0)+(HASI()?g(tr(960,470,.9,-5),CICON(CFG.coverIcon))+g(tr(960,670,.75,-3),CTAG()):g(tr(960,570,1,-4),CTAG()))+CQ(1320,450,1.0,14,1)+CQ(590,480,.75,-16,0)+CFLAGS(585,HASI()?795:730,150);
  let s=BGG(t,'#5AC8FA','#7B61FF','h')+rays(960,150,7,1400,9,.25,Math.sin(t*.5)*3);
  GRID.forEach(([c,n],i)=>{const x=660+(i%3)*300,y=840+Math.floor(i/3)*250,t0=0.15+i*0.22;
   s+=popAt(t,t0,flag(t,c,.5),x,y,1,(i%2?3:-3))+popAt(t,t0+0.08,`<text text-anchor="middle" font-family="B2" font-weight="800" font-size="${n.length>9?26:34}" fill="#fff" stroke="${OL}" stroke-width="8" paint-order="stroke">${n}</text>`,x,y+100,1);});
  return s;},
 cam:t=>camV(t,0,starts[0],[960,1010,1.0],[960,990,1.06]),
 hud:t=>(t<0.5?COVER(t):'')+g(tr(540,440,popS(t,0.5,.5),-4),`<text text-anchor="middle" font-family="B2" font-weight="800" font-size="${CFG.hook[0].length>12?84:104}" fill="#FFE27A" stroke="${OL}" stroke-width="13" paint-order="stroke">${CFG.hook[0]}</text>`)
  +hudLabel(t,0.6,CFG.hook[1],{y:560,size:CFG.hook[1].length>24?42:50,bg:'#3BB273'})+(CFG.hook[2]?hudLabel(t,at(CFG.hook[3]||'but',0.5),CFG.hook[2],{y:1330,size:44,bg:'#E5383B'}):'')});
// 2) 8 negara
C.forEach(([c,n,w,num,unit,nw,src,mk,rx],i)=>{const t0=starts[i],t1=i<C.length-1?starts[i+1]:bP;let tn=nw?at(nw,t0):t0+0.6;if(!(tn>=t0&&tn<t1))tn=t0+0.5;if(tn<t0+GD-0.05)tn=Math.min(t0+GD-0.05,t1-0.6);const GF=i?C[i-1][0]:null;
 const L=i%2, z=i%3;
 const P=PAL[i%PAL.length];
 sFact({t0,t1,bg:P[1],glow:P[0],
  c0:z===0?[960,980,1.12]:z===1?[900,960,1.04]:[1020,1000,1.04],c1:z===0?[960,960,1.0]:z===1?[1020,960,1.08]:[900,960,1.1],
  world:t=>{let s=BGG(t,P[0],P[1],'f'+i)+(MAPBG?MAPV(t,t0,c,GF,P[1]):`<g opacity="${fmt(ss((t-t0-GD+0.2)/0.25))}">${landmark(t,c)}</g>`)+popAt(t,t0+GD-0.05,flag(t,c,.85),960,660,1,(L?3:-3));
   if(mk==='ok')s+=g(tr(960,1300,popS(t,tn+0.1,.4)*1.3),check(1));if(mk==='no')s+=xAt(t,tn+0.1,960,1300,1.3);return s+(MAPBG?'':spinGlobe(t,GF,c,t0,GD));},
  labels:[{at:t0+0.05,txt:n,bg:'#5B6C8F'}],
  hud:t=>bigNum(t,tn,num,unit,540,990,{size:num.length>8?96:num.length>6?120:150,ucol:NUMC[mk]||'#14213D'})+`<text x="1040" y="330" text-anchor="end" font-family="B2" font-weight="800" font-size="44" fill="#fff" stroke="${OL}" stroke-width="8" paint-order="stroke" opacity="${fmt(fadeIn(t,t0,.2))}">${i+1}/6</text>`+FACE(t,tn+0.35,c,rx)+SRC(src+PH(c),fadeIn(t,t0+0.2,.4))});});
// 3) PLOT TWIST
const tc=Math.max(bP+1.0,tTW-0.1-GP);let tn2=at(TW.numW||TW.trigger,tTW);if(!(tn2>=tTW&&tn2<bC))tn2=tTW+0.4;const tF=Math.max(tTW,tc+GD-0.05);if(tn2<tF)tn2=Math.min(tF,bC-0.6);
S.push({t0:bP,t1:bC,
 world:t=>{let s=bgGlow('#2B1B14','#A3542A',.45)+rays(960,100,7,1500,8,.35);
  if(t<tc)return s+g(tr(960,1000,1.3),globe(t,1))+`<rect width="1920" height="1920" fill="#06121C" opacity=".5"/>`;
  s+=(MAPBG?MAPV(t,tc,TW.code,C[C.length-1][0],'#2B1B14'):`<g opacity="${fmt(ss((t-tc-GD+0.2)/0.25))}">${landmark(t,TW.code)}</g>`)+popAt(t,tF,flag(t,TW.code,1.0),960,700,1,-2);
  if(TW.mk==='no')s+=xAt(t,tn2+0.2,960,700,1.4);if(TW.mk==='ok')s+=g(tr(960,700,popS(t,tn2+0.2,.4)*1.4),check(1));return s+(MAPBG?'':spinGlobe(t,C[C.length-1][0],TW.code,tc,GD));},
 cam:t=>t<tc?camV(t,bP,tc,[960,980,1.0],[960,960,1.1]):camV(t,tc,bC,[960,1000,1.06],[960,960,1.0]),
 hud:t=>{let s='';if(t<tc+0.2){s+=letterbox(t,bP);const k=popS(t,bP+0.05,.4)*(1-ss((t-tc+0.1)/.3));if(k>0)s+=g(tr(540,430,k,-3),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="150" fill="url(#gold)" filter="url(#tsh)">PLOT TWIST!</text>`);return s;}
  return hudLabel(t,tTW,TW.name,{bg:'#012169'})+bigNum(t,tn2,TW.num,TW.unit,540,1060,{size:TW.num.length>8?96:TW.num.length>6?120:150,ucol:'#FFE27A'})+`<text x="1040" y="330" text-anchor="end" font-family="B2" font-weight="800" font-size="44" fill="#FFE27A" stroke="${OL}" stroke-width="8" paint-order="stroke">6/6</text>`+FACE(t,tn2+0.4,TW.code,TW.rx)+SRC(TW.src+PH(TW.code),fadeIn(t,tTW,.4));}});
// 4) CTA
S.push({t0:bC,t1:E,
 world:t=>{let s=BGG(t,'#FFB74D','#FF5C8A','c')+rays(960,150,7,1400,9,.25,t*4);
  s+=g(tr(960,700,.6),globe(t,1));
  const kc=popS(t,bC+0.25,.45);if(kc>0)s+=g(tr(960,1480,kc*.9,3),bubble(560,170,'bl')+`<text x="0" y="20" text-anchor="middle" font-family="B2" font-weight="800" font-size="${(CFG.bubble||"Comment your country!").length>16?48:58}" fill="${OL}">${CFG.bubble||'Comment your country!'}</text>`,'filter="url(#dsh)"');
  const ks=popS(t,bSub,.45);if(ks>0)s+=g(tr(960,1060,1.45*ks*(1+0.04*Math.sin(t*6)),-2),`<rect x="-330" y="-85" width="660" height="170" rx="85" fill="#FF0033" stroke="${OL}" stroke-width="10"/><polygon points="-235,-38 -235,38 -170,0" fill="#fff"/><text x="40" y="24" text-anchor="middle" font-family="B2" font-weight="800" font-size="72" fill="#fff">SUBSCRIBE</text>`,'filter="url(#dsh)"');return s;},
 cam:t=>camV(t,bC,E,[960,1000,1.0],[960,980,1.08]),hud:t=>hudLabel(t,bC+0.05,CFG.ctaTitle||'WHAT ABOUT YOUR COUNTRY?',{size:50,bg:'#5B6C8F'})});
}
const THUMB={t:-1,cy:1170,lines:CFG.thumb}; // t<0 = frame thumbnail khusus (ikon + ? + bendera) di scene hook
