// ===== Masa Sih Tembok Besar China Kelihatan dari Luar Angkasa? =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Faktanya')-0.15, b4=at('Plot')-0.2, b6=at('Kamu pengen')-0.15;
sHook({t0:0,t1:bc,key:'DARI LUAR ANGKASA?',keyAt:at('luar'),keySize:76,prop:t=>earth(t,1),ps:1.4,py:1050,bg:'#0E1430',glow:'#2E5E8F',particle:(t,i)=>`<circle r="5" fill="#fff"/>`,surpriseAt:at('kelihatan'),
 extra:t=>popAt(t,at('luar'),rocketShip(t,0.8),V(1250,1350),700,1,20)});
sCard({t0:bc,t1:b1,lines:['TEMBOK CHINA','KELIHATAN DARI','LUAR ANGKASA?'],yukAt:bc+0.6,hold:t=>g('scale(.3)',earth(t,1))});
const tP=at('panjang'),tL=at('lebarnya'),tW=at('warnanya');
sFact({t0:b1,t1:b4,bg:'#16343F',glow:'#2E7E8F',
 world:t=>{let s=g(tr(960,1100,V(1.1,1.4)),greatWall(1));
  if(t>tL)s+=bigNum(t,tL,'±6 m','lebar tembok',960,V(650,620),{size:150});
  if(t>tW)s+=`<rect width="1920" height="1920" fill="#C9B48A" opacity="${fmt(0.35*fadeIn(t,tW,0.6))}"/>`;return s;},
 labels:[{at:tP,txt:'PANJANG, TAPI...',bg:'#5B6C8F',until:tL},{at:tL,txt:'LEBARNYA CUMA ±6 METER',bg:'#F2A541',fill:OL,size:V(46,52),until:tW},{at:tW,txt:'WARNANYA MIRIP TANAH',bg:'#8A5A3B'}],src:'Ilustrasi disederhanakan'});
sPlot({t0:b4,t1:b6,bg:'#0E1430',glow:'#2E5E8F',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';let s=popAt(t,p0,earth(t,1.3),960,1150,1)+popAt(t,p0+0.2,rocketShip(t,0.7),V(1250,1350),700,1,20);
  if(t>at('nggak',b4))s+=popAt(t,at('nggak',b4),eyeView(0.7),V(700,600),700,1)+xAt(t,at('telanjang'),V(700,600),700,1);return s;},
 labels:[{at:at('astronot'),txt:'KATA ASTRONOT CHINA:',bg:'#5B6C8F',until:at('nggak',b4)},{at:at('nggak',b4),txt:'NGGAK KELIHATAN!',bg:'#E5383B'}],src:'Sumber: NASA; Yang Liwei (2003)'});
sCTA({t0:b6,t1:E,ln:'KE LUAR ANGKASA',ls:'ANGKASA',rn:'KE TEMBOK CHINA',rs:'TEMBOK',lp:t=>rocketShip(t,0.6),rp:t=>greatWall(0.25),aAt:at('angkasa',b6),bAt:at('Tembok',b6),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#2E5E8F',rc:'#C9B48A'});
}
const THUMB={t:2.0,lines:['TEMBOK CHINA','KELIHATAN DARI','LUAR ANGKASA?']};
