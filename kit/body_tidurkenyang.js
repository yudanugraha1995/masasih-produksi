// ===== Habis Makan Langsung Tidur? Masa Sih Bikin Asam Lambung Naik? ===== NEWFX B21FX
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1,b1=at('Waktu kamu')-0.15,b2=at('Rasanya')-0.15,b3=at('Penelitian')-0.15,b4=at('Plot')-0.15,b5=at('Biar aman')-0.15,b6=at('Kamu sering')-0.15;
sHook({t0:0,t1:bc,key:'LANGSUNG REBAHAN?',keyAt:at('langsung'),keySize:88,prop:t=>plateDinner(1),ps:1.5,py:1100,bg:'#1A1A3A',glow:'#6E6CC4',
 particle:(t,i)=>`<text font-family="B2" font-weight="800" font-size="60" fill="#fff">z</text>`,surpriseAt:at('ketiduran'),extra:t=>popAt(t,at('ketiduran'),moonIcon(0.8),V(1150,1350),760,1)});
sCard({t0:bc,t1:b1,lines:['HABIS MAKAN','LANGSUNG TIDUR','BAHAYA?'],yukAt:at('Ternyata'),hold:t=>g('scale(.35)',plateDinner(1))});
sFact({t0:b1,t1:b2,bg:'#14301F',glow:'#3BB273',
 world:t=>{const ac=ss((t-at('mendorong'))/1.5);return popAt(t,b1+0.2,stomach(t,1.6,ac),960,1150,1)+(t>at('kerongkongan')?popAt(t,at('kerongkongan'),acidDrop(1),V(1080,1250),800,1):'');},
 labels:[{at:b1+0.1,txt:'BERBARING + PERUT PENUH',bg:'#F2A541',fill:OL,until:at('mendorong')},{at:at('mendorong'),txt:'ASAM NAIK KE KERONGKONGAN',bg:'#E5383B',size:V(50,56)}],src:'Ilustrasi disederhanakan'});
sFact({t0:b2,t1:b3,bg:'#3A1616',glow:'#E5383B',
 world:t=>popAt(t,at('dada'),flame(t,1.2),V(860,960),1150,1)+popAt(t,at('mulut'),sweatFace(t,1.1),V(1080,1250),1000,1)+popAt(t,at('GERD'),label('GERD',{size:110,bg:'#E5383B'}),V(830,640),1450,1),
 labels:[{at:at('dada'),txt:'DADA PANAS, MULUT ASAM',bg:'#E5383B'}]});
sFact({t0:b3,t1:b4,bg:'#3B3A7A',glow:'#6E6CC4',grid:true,
 world:t=>popAt(t,at('tidur kurang'),clockFace(t,1.1,4),V(830,640),900,1)+popAt(t,at('tiga jam'),label('< 3 JAM',{size:70,bg:'#F2A541',fill:OL}),V(1080,1250),1000,1)+bigNum(t,at('tujuh'),'7x','risiko GERD',960,1400,{size:200}),
 labels:[{at:b3+0.1,txt:'PENELITIAN DI JEPANG',bg:'#5B6C8F'}],src:'Sumber: Fujiwara dkk., Am J Gastroenterol (2005)'});
sPlot({t0:b4,t1:b5,bg:'#2B3A16',glow:'#7BC96F',cardDur:1.0,
 world:t=>{const p0=b4+1.0;if(t<p0)return '';return g(tr(960,1350,0.8),bed(0,0,1,lyingHead('happy',false)))+popAt(t,at('kiri'),label('MIRING KIRI',{size:70,bg:'#3BB273'}),960,900,1)+popAt(t,at('Posisi'),stomach(t,0.7,0),V(1100,1250),1050,1,90);},
 labels:[{at:at('miring'),txt:'MIRING KE KIRI LEBIH AMAN',bg:'#3BB273',size:V(50,56)}]});
sCheck({t0:b5,t1:b6,title:'Biar aman:',items:[['Jeda 2-3 jam',at('jeda')],['Baru tidur',at('sebelum tidur')],['Makan malam secukupnya',at('jangan makan')]],hold:t=>g('scale(.35)',clockFace(t,1,2)),label:'JADI GINI'});
sCTAsub({t0:b6,t1:E,ln:'SERING KETIDURAN',ls:'SERING',rn:'NGGAK PERNAH',rs:'NGGAK',lp:t=>moonIcon(0.7),rp:t=>plateDinner(0.45),aAt:at('sering',b6),bAt:at('habis makan',b6),vsAt:at('makan',b6),commentAt:at('Tulis'),subAt:at('subscribe'),lc:'#6E6CC4',rc:'#F2A541'});
}
const THUMB={t:1.5,lines:['HABIS MAKAN','LANGSUNG TIDUR','BAHAYA?']};
