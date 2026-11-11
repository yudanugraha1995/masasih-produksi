// ===== Masa Sih Gula Bikin Anak Hiperaktif? =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Para peneliti')-0.15, b2=at('Ada juga')-0.15, b4=at('Plot')-0.2, b5=at('Tapi gula tetap')-0.15, b6=at('Kamu tim')-0.15;
sHook({t0:0,t1:bc,key:'HIPERAKTIF?',keyAt:at('lari'),prop:t=>candy(1.4,'#E8505B'),ps:1.6,bg:'#3A1F3A',glow:'#F7A1C4',particle:(t,i)=>candy(0.3,['#E8505B','#F4C542','#5DB7EA'][i%3]),surpriseAt:at('lari'),
 extra:t=>{let s='';for(let i=0;i<2;i++){const x=lerp(V(500,400),V(1500,1600),((t*0.4+i*0.5)%1));s+=person(x,1500,1.0,['#F2A541','#3BB273'][i]);}return s;}});
sCard({t0:bc,t1:b1,lines:['MASA SIH','GULA BIKIN ANAK','HIPERAKTIF?'],yukAt:at('Yuk'),hold:t=>g('scale(.3)',candy(1))});
const t16=at('enam belas'),tTb=at('terbukti');
sFact({t0:b1,t1:b2,bg:'#16343F',glow:'#2E7E8F',
 world:t=>{let s='';if(t<t16)s+=popAt(t,b1+0.1,`<rect x="-200" y="-260" width="400" height="520" rx="20" fill="#fff" stroke="${OL}" stroke-width="8"/><text y="-150" text-anchor="middle" font-family="Inter" font-weight="800" font-size="90" fill="#E5383B">JAMA</text><text y="-70" text-anchor="middle" font-family="Inter" font-weight="800" font-size="60" fill="${OL}">1995</text>`+[0,1,2,3].map(i=>`<rect x="-150" y="${i*50}" width="${300-i*40}" height="20" rx="10" fill="#C9D3E0"/>`).join(''),960,980,1.2);
  else{s+=bigNum(t,t16,'16','penelitian digabung',960,800,{size:220});if(t>tTb)s+=xAt(t,tTb+0.2,960,1200,1.0)+popAt(t,tTb,candy(1),960,1200,1);}
  return s;},
 labels:[{at:at('JAMA'),txt:'ANALISIS BESAR, JAMA 1995',bg:'#5B6C8F',size:V(48,52),until:tTb},{at:tTb,txt:'TIDAK TERBUKTI',bg:'#3BB273'}],src:'Sumber: Wolraich dkk., JAMA (1995)'});
const tMn=at('menilai');
sFact({t0:b2,t1:b4,bg:'#2A1F2B',glow:'#8E3B4F',
 world:t=>{let s=popAt(t,b2+0.1,glassW(t,1,0.7),V(700,600),1100,0.9)+popAt(t,at('tanpa'),label('TANPA GULA',{size:46,bg:'#3BB273'}),V(700,600),1380,1);
  s+=popAt(t,at('sebagian'),person(0,0,1.6,'#9C7BE0')+person(90,40,1.0,'#F2A541'),V(1200,1280),1250,1);
  if(t>at('diberitahu'))s+=popAt(t,at('diberitahu'),`<rect x="-200" y="-60" width="400" height="110" rx="30" fill="#fff" stroke="${OL}" stroke-width="6"/><text y="15" text-anchor="middle" font-family="B2" font-weight="800" font-size="46" fill="#E5383B">"ADA GULANYA"</text>`,V(1200,1280),820,1);
  if(t>tMn)s+=xAt(t,at('padahal'),V(700,600),1100,0.9);
  return s;},
 labels:[{at:at('unik'),txt:'PENELITIAN UNIK',bg:'#5B6C8F',until:tMn},{at:tMn,txt:'IBU MENILAI: HIPERAKTIF',bg:'#E5383B',size:V(46,52),until:at('padahal')},{at:at('padahal'),txt:'PADAHAL TANPA GULA',bg:'#3BB273'}],src:'Sumber: Hoover & Milich, J Abnorm Child Psychol (1994)'});
sPlot({t0:b4,t1:b5,bg:'#3A1F3A',glow:'#F7A1C4',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';let s=popAt(t,p0,eyeBall(t,1,false),960,900,1.2);
  if(t>at('pesta'))for(let i=0;i<5;i++)s+=popAt(t,at('pesta')+i*0.1,`<path d="M0,-70L50,70L-50,70Z" fill="${['#E8505B','#F4C542','#5DB7EA','#3BB273','#9C7BE0'][i]}" stroke="${OL}" stroke-width="6"/>`,V(560,480)+i*V(200,240),1350,0.9);
  return s;},
 labels:[{at:at('cara orang'),txt:'YANG BERUBAH: CARA KITA MELIHAT',bg:'#9C7BE0',size:V(40,48),until:at('pesta')},{at:at('pesta'),txt:'PESTA = MEMANG RAMAI',bg:'#F2A541'}]});
sCheck({t0:b5,t1:b6,title:'Tetap ingat:',items:[['Batasi gula',at('dibatasi')],['Camilan buah',at('buah')],['Minum air putih',at('biasakan')]],hold:t=>g('scale(.3)',candy(1)),label:'GULA TETAP DIBATASI'});
sCTA({t0:b6,t1:E,ln:'TIM PERMEN',ls:'TIM PERMEN',rn:'TIM COKELAT',rs:'TIM COKELAT',lp:t=>candy(1.3,'#E8505B'),rp:t=>chocoBar(1.0),aAt:at('permen',b6),bAt:at('cokelat'),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#E8505B',rc:'#6A3D24'});
}
const THUMB={t:2.0,lines:['MASA SIH','GULA BIKIN ANAK','HIPERAKTIF?']};
