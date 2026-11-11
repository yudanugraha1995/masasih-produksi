// ===== Masa Sih Kerokan Bikin Angin Keluar? =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Masuk angin itu')-0.15, b2=at('Terus merah')-0.15, b3=at('Tapi kenapa')-0.15, b4=at('Plot')-0.2, b5=at('Jadi kalau')-0.15, b6=at('Kamu tim')-0.15;
const tK=at('kerokan');
sHook({t0:0,t1:bc,key:'ANGIN KELUAR?',keyAt:at('anginnya'),keySize:84,prop:t=>backTorso(t,1,ss((t-tK)/1.6)),ps:1.3,py:1150,bg:'#3A1F16',glow:'#E8505B',particle:(t,i)=>`<path d="M-20,0q20,-14 40,0" stroke="#fff" stroke-width="8" fill="none" stroke-linecap="round"/>`,surpriseAt:at('anginnya'),
 extra:t=>t>tK?g(tr(V(1000,1060)+Math.sin(t*6)*60,900+((t*200)%300),1),coin(1)):''});
sCard({t0:bc,t1:b1,lines:['MASA SIH','KEROKAN BIKIN','ANGIN KELUAR?'],yukAt:at('Yuk'),hold:t=>g('scale(.4)',coin(1))});
const tKg=at('kumpulan');
sFact({t0:b1,t1:b2,bg:'#16343F',glow:'#2E7E8F',
 world:t=>{let s=yuma({x:960,y:1450,s:1.2,expr:t<tKg?'think':'worried',aL:70,aR:70,blink:blinkAt(t,2)});
  [['PEGAL',at('pegal')],['KEMBUNG',at('kembung')],['MERIANG',at('meriang',b1)],['AWAL FLU',at('flu')]].forEach(([x,tt],i)=>{s+=popAt(t,tt,label(x,{size:50,bg:['#E8505B','#F2A541','#5B6C8F','#9C7BE0'][i]}),V(700,640)+(i%2)*V(520,640),V(720,700)+Math.floor(i/2)*150,1,i%2?3:-3);});
  return s;},
 labels:[{at:at('istilah'),txt:'BUKAN ISTILAH MEDIS',bg:'#5B6C8F',until:tKg},{at:tKg,txt:'KUMPULAN GEJALA',bg:'#E5383B'}],src:'Ilustrasi disederhanakan'});
const tPc=at('pecah');
sFact({t0:b2,t1:b3,bg:'#2A1F2B',glow:'#8E3B4F',
 world:t=>{let s=g(tr(960,1100,1.3),backTorso(t,1,ss((t-b2)/2)));s+=g(tr(V(1040,1100)+Math.sin(t*5)*80,lerp(900,1250,(t*0.4)%1),1),coin(1));
  if(t>tPc)for(let i=0;i<8;i++)s+=popAt(t,tPc+i*0.06,`<circle r="14" fill="#C0392B"/>`,V(800,780)+rnd(i)*V(320,360),900+rnd(i+5)*380,1);
  return s;},
 labels:[{at:at('bukan angin'),txt:'BUKAN ANGIN KELUAR',bg:'#E5383B',until:at('Gesekan')},{at:at('Gesekan'),txt:'PEMBULUH DARAH KECIL PECAH',bg:'#5B6C8F',size:V(44,50),until:at('istilahnya')},{at:at('istilahnya'),txt:'PETEKIE',bg:'#C0392B'}],src:'Ilustrasi disederhanakan'});
const tEn=at('endorfin');
sFact({t0:b3,t1:b4,bg:'#14301F',glow:'#3BB273',
 world:t=>{let s=popAt(t,b3+0.1,brain(t,1,'happy'),960,900,1.3);
  if(t>tEn)for(let i=0;i<6;i++){const ph=((t-tEn)*0.5+i/6)%1;s+=g(tr(960+Math.cos(i)*260*ph,900-ph*320,0.8),`<circle r="30" fill="#FFE27A" stroke="${OL}" stroke-width="5"/><text y="12" text-anchor="middle" font-family="B2" font-weight="800" font-size="30" fill="${OL}">E</text>`,`opacity="${fmt(1-ph)}"`);}
  if(t>at('nyeri'))s+=yuma({x:V(960,1400),y:V(1600,1500),s:1.0,expr:'happy',aL:70,aR:-60,blink:blinkAt(t,3)});
  return s;},
 labels:[{at:at('Universitas'),txt:'PENELITIAN UNS',bg:'#5B6C8F',until:tEn},{at:tEn,txt:'ENDORFIN NAIK',bg:'#3BB273',until:at('nyeri')},{at:at('nyeri'),txt:'NYERI BERKURANG, RILEKS',bg:'#3BB273',size:V(48,52)}],
 src:'Sumber: penelitian Universitas Sebelas Maret (kerokan & endorfin)'});
sPlot({t0:b4,t1:b5,bg:'#3A1F16',glow:'#E8505B',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';let s=popAt(t,p0,backTorso(t,1,1),V(760,700),1150,0.9);
  if(t>at('hormon',b4))s+=popAt(t,at('hormon',b4),brain(t,1,'happy'),V(1220,1300),900,0.8);
  if(t>at('Penyakitnya'))s+=popAt(t,at('Penyakitnya'),label('BELUM TENTU SEMBUH',{size:48,bg:'#5B6C8F'}),960,1500,1);
  return s;},
 labels:[{at:at('bukan karena'),txt:'BUKAN ANGIN',bg:'#E5383B',until:at('hormon',b4)},{at:at('hormon',b4),txt:'HORMON PEREDA NYERI',bg:'#3BB273',size:V(50,52)}]});
sCheck({t0:b5,t1:b6,title:'Kalau kerokan:',items:[['Jangan terlalu keras',at('keras')],['Pakai minyak',at('minyak')],['Istirahat cukup',at('istirahat')],['Demam? Ke dokter',at('demam')]],hold:t=>g('scale(.4)',coin(1)),label:'JADI GINI'});
sCTA({t0:b6,t1:E,ln:'TIM KEROKAN',ls:'TIM KEROKAN',rn:'TIM PIJAT',rs:'TIM PIJAT',lp:t=>coin(1.6),rp:t=>hand(t,0.6,{}),aAt:at('kerokan',b6),bAt:at('pijat'),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#E8505B',rc:'#3BB273'});
}
const THUMB={t:2.0,lines:['MASA SIH','KEROKAN BIKIN','ANGIN KELUAR?']};
