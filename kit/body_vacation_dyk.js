// ===== Paid Vacation Days by Law: America Gives ZERO?! (Did You Know) =====
const CFG={hook:['PAID VACATION','DAYS OFF BY LAW'],
 items:[
 ['br','BRAZIL','Brazil','30 DAYS','paid leave a year','','Source: Brazil CLT labour law, Art. 130','ok'],
 ['uk','UK','The UK','28 DAYS','incl. bank holidays','','Source: GOV.UK Holiday entitlement','ok'],
 ['fr','FRANCE','France','25 DAYS','5 weeks a year','','Source: French Labour Code (Code du travail)','ok'],
 ['au','AUSTRALIA','Australia','20 DAYS','4 weeks a year','','Source: Fair Work Ombudsman (NES)','ok'],
 ['nz','NEW ZEALAND','New Zealand','4 WEEKS','a year','','Source: NZ Employment, Holidays Act 2003','ok'],
 ['de','GERMANY','Germany','20 DAYS','on a 5-day week','','Source: German Federal Leave Act (BUrlG)','ok'],
 ['ca','CANADA','Canada','10 DAYS','federal minimum','','Source: Canada Labour Code','ok'],
 ['jp','JAPAN','Japan','10 DAYS','after 6 months','','Source: Japan Labour Standards Act, Art. 39','ok'],
 ],
 twist:{code:'us',name:'USA',trigger:'America',numW:'zero',num:'0 DAYS',unit:'no federal law!',mk:'no',src:'Source: U.S. Department of Labor (FLSA)'},
 thumb:['PAID VACATION','BY LAW...','USA = ZERO?!']};

// ===== Template generik Did You Know (9 negara). body_<id>.js = CFG + isi file ini (lewat mkdyk.py) =====
/*SFX_EXTRA [[0.33,"pop",0.4],[0.51,"pop",0.4],[0.69,"pop",0.4],[0.87,"pop",0.4],[1.05,"pop",0.4],[1.23,"pop",0.4],[1.41,"pop",0.4],[1.59,"pop",0.45]]*/
/* urutan tipe scene untuk sfx.py: sHook({ sFact({ sFact({ sFact({ sFact({ sFact({ sFact({ sFact({ sFact({ sPlot({ sCTA({ */
{const E=DUR+0.2, C=CFG.items, TW=CFG.twist;
const GRID=[...C.map(c=>[c[0],c[1]]),[CFG.hideTwist?'q':TW.code,CFG.hideTwist?'???':TW.name]];
const bP=at(CFG.plotW||'Plot')-0.15, bC=at(CFG.ctaW||'Comment')-0.15, tTW=at(TW.trigger,bP);
const starts=[];C.forEach((c,i)=>starts.push(at(c[2],i?starts[i-1]+0.3:0.5)-0.15));
const BG=['#1B2347','#14213D','#16343F','#14301F','#3A2416','#2A1838','#1B2347','#16343F'],GL=['#5DB7EA','#F2A541','#3BB273','#E8505B','#F2A541','#B07CE8','#5DB7EA','#3BB273'];
const NUMC={ok:'#7CE0A0',no:'#FF9B9B'};
// 1) HOOK: grid 9 bendera
S.push({t0:0,t1:starts[0],
 world:t=>{let s=bgGlow('#14213D','#F2A541',.5)+rays(960,150,7,1400,9,.4,Math.sin(t*.5)*3);
  GRID.forEach(([c,n],i)=>{const x=700+(i%3)*260,y=800+Math.floor(i/3)*200,t0=0.15+i*0.18;
   s+=popAt(t,t0,flag(t,c,.4),x,y,1,(i%2?3:-3))+popAt(t,t0+0.08,`<text text-anchor="middle" font-family="B2" font-weight="800" font-size="${n.length>9?26:34}" fill="#fff" stroke="${OL}" stroke-width="8" paint-order="stroke">${n}</text>`,x,y+82,1);});
  return s;},
 cam:t=>camV(t,0,starts[0],[960,1010,1.0],[960,990,1.06]),
 hud:t=>g(tr(540,440,popS(t,0.1,.5),-4),`<text text-anchor="middle" font-family="B2" font-weight="800" font-size="${CFG.hook[0].length>12?84:104}" fill="#FFE27A" stroke="${OL}" stroke-width="13" paint-order="stroke">${CFG.hook[0]}</text>`)
  +hudLabel(t,0.6,CFG.hook[1],{y:560,size:CFG.hook[1].length>24?42:50,bg:'#3BB273'})+(CFG.hook[2]?hudLabel(t,at(CFG.hook[3]||'but',0.5),CFG.hook[2],{y:1330,size:44,bg:'#E5383B'}):'')});
// 2) 8 negara
C.forEach(([c,n,w,num,unit,nw,src,mk],i)=>{const t0=starts[i],t1=i<C.length-1?starts[i+1]:bP;let tn=nw?at(nw,t0):t0+0.6;if(!(tn>=t0&&tn<t1))tn=t0+0.5;
 const L=i%2, z=i%3;
 sFact({t0,t1,bg:BG[i],glow:GL[i],
  c0:z===0?[960,980,1.12]:z===1?[900,960,1.04]:[1020,1000,1.04],c1:z===0?[960,960,1.0]:z===1?[1020,960,1.08]:[900,960,1.1],
  world:t=>{let s=popAt(t,t0+0.05,flag(t,c,.85),960,660,1,(L?3:-3));
   if(mk==='ok')s+=g(tr(960,1300,popS(t,tn+0.1,.4)*1.3),check(1));if(mk==='no')s+=xAt(t,tn+0.1,960,1300,1.3);return s;},
  labels:[{at:t0+0.05,txt:n,bg:'#5B6C8F'}],
  hud:t=>bigNum(t,tn,num,unit,540,990,{size:num.length>8?96:num.length>6?120:150,ucol:NUMC[mk]||'#FFE27A'})+`<text x="1040" y="330" text-anchor="end" font-family="B2" font-weight="800" font-size="44" fill="#fff" stroke="${OL}" stroke-width="8" paint-order="stroke" opacity="${fmt(fadeIn(t,t0,.2))}">${i+1}/9</text>`,
  src});});
// 3) PLOT TWIST
const tc=Math.max(bP+1.0,tTW-0.1);let tn2=at(TW.numW||TW.trigger,tTW);if(!(tn2>=tTW&&tn2<bC))tn2=tTW+0.4;
S.push({t0:bP,t1:bC,
 world:t=>{let s=bgGlow('#2B1B14','#A3542A',.45)+rays(960,100,7,1500,8,.35);
  if(t<tc)return s+g(tr(960,1000,1.3),globe(t,1))+`<rect width="1920" height="1920" fill="#06121C" opacity=".5"/>`;
  s+=popAt(t,tTW,flag(t,TW.code,1.0),960,700,1,-2);
  if(TW.mk==='no')s+=xAt(t,tn2+0.2,960,700,1.4);if(TW.mk==='ok')s+=g(tr(960,700,popS(t,tn2+0.2,.4)*1.4),check(1));return s;},
 cam:t=>t<tc?camV(t,bP,tc,[960,980,1.0],[960,960,1.1]):camV(t,tc,bC,[960,1000,1.06],[960,960,1.0]),
 hud:t=>{let s='';if(t<tc+0.2){s+=letterbox(t,bP);const k=popS(t,bP+0.05,.4)*(1-ss((t-tc+0.1)/.3));if(k>0)s+=g(tr(540,430,k,-3),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="150" fill="url(#gold)" filter="url(#tsh)">PLOT TWIST!</text>`);return s;}
  return hudLabel(t,tTW,TW.name,{bg:'#012169'})+bigNum(t,tn2,TW.num,TW.unit,540,1060,{size:TW.num.length>8?96:TW.num.length>6?120:150,ucol:NUMC[TW.mk]||'#FFE27A'})+`<text x="1040" y="330" text-anchor="end" font-family="B2" font-weight="800" font-size="44" fill="#FFE27A" stroke="${OL}" stroke-width="8" paint-order="stroke">9/9</text>`+srcText(TW.src,fadeIn(t,tTW,.4));}});
// 4) CTA
S.push({t0:bC,t1:E,
 world:t=>{let s=bgGlow('#14213D','#5DB7EA',.45)+rays(960,150,7,1400,9,.35,t*4);
  s+=g(tr(960,820,1.05),globe(t,1));
  const kc=popS(t,bC+0.25,.45);if(kc>0)s+=g(tr(960,1300,kc*.9,3),bubble(560,170,'bl')+`<text x="0" y="20" text-anchor="middle" font-family="B2" font-weight="800" font-size="58" fill="${OL}">${CFG.bubble||'Comment below!'}</text>`,'filter="url(#dsh)"');return s;},
 cam:t=>camV(t,bC,E,[960,1000,1.0],[960,980,1.08]),hud:t=>hudLabel(t,bC+0.05,CFG.ctaTitle||'WHAT ABOUT YOUR COUNTRY?',{size:50,bg:'#5B6C8F'})});
}
const THUMB={t:2.4,cy:1500,lines:CFG.thumb};
