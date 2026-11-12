// ===== Masa Sih Kucing Jatuh Pasti Mendarat Pakai Kaki? =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Faktanya')-0.15, b4=at('Plot')-0.2, b6=at('Kamu tim')-0.15;
sHook({t0:0,t1:bc,key:'PAKAI KAKI?',keyAt:at('kaki'),keySize:96,prop:t=>catBody(t,1,0),ps:1.3,py:1050,bg:'#3A2A16',glow:'#F2A541',particle:(t,i)=>`<circle r="9" fill="#F2A541"/>`,surpriseAt:at('mendarat')});
sCard({t0:bc,t1:b1,lines:['MASA SIH','KUCING JATUH','PASTI PAKAI KAKI?'],yukAt:bc+0.6,hold:t=>g('scale(.4)',catFace(1))});
const tR=at('refleks'),tL=at('lentur');
sFact({t0:b1,t1:b4,bg:'#3B3A7A',glow:'#6E6CC4',grid:true,
 world:t=>{const p=clamp((t-tR)/1.8);const y=V(700,650)+p*500;const rot=180*(1-ss(p));
  let s=g(tr(960,y,1.1),catBody(t,1,rot));for(let i=0;i<3;i++)s+=popAt(t,tR+0.3+i*0.2,`<path d="M-30,0Q0,-30 30,0" stroke="#fff" stroke-width="8" fill="none" stroke-linecap="round" opacity=".6"/>`,V(760,700)+i*V(200,260),V(620,560),1.2);
  if(t>tL)s+=checkAt(t,tL,V(1300,1400),V(1300,1250),1);return s;},
 labels:[{at:tR,txt:'REFLEKS MUTER DI UDARA',bg:'#5B6C8F',until:tL},{at:tL,txt:'TULANG PUNGGUNG LENTUR',bg:'#3BB273'}],src:'Ilustrasi disederhanakan'});
sPlot({t0:b4,t1:b6,bg:'#3A1616',glow:'#E5383B',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';const tr2=at('rendah');const p=clamp((t-tr2)/0.5);
  let s=`<rect x="0" y="${V(1350,1350)}" width="1920" height="40" fill="#8C6A52"/>`+popAt(t,p0,`<rect x="-120" y="-20" width="240" height="40" rx="10" fill="#8C6A52" stroke="${OL}" stroke-width="5"/>`,V(960,960),1050,1);
  s+=g(tr(960,V(960,960)+p*290,0.8),catBody(t,1,180-30*p));
  if(t>at('cedera'))s+=popAt(t,at('cedera'),`<path d="M-50,-50L50,50M50,-50L-50,50" stroke="#E5383B" stroke-width="16" stroke-linecap="round"/>`,V(1250,1350),1150,1.1);return s;},
 labels:[{at:at('rendah'),txt:'JATUH TERLALU RENDAH',bg:'#E5383B',until:at('cedera')},{at:at('cedera'),txt:'BISA TETAP CEDERA!',bg:'#E5383B'}]});
sCTA({t0:b6,t1:E,ln:'TIM KUCING OREN',ls:'TIM OREN',rn:'TIM KUCING HITAM',rs:'TIM HITAM',lp:t=>catFace(0.6),rp:t=>g('',`<g filter="url(#dsh)">${catFace(0.6).replace(/#F2A541/g,'#2E2430')}</g>`),aAt:at('oren'),bAt:at('hitam'),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#F2A541',rc:'#2E2430'});
}
const THUMB={t:2.0,lines:['MASA SIH','KUCING JATUH','PASTI PAKAI KAKI?']};
