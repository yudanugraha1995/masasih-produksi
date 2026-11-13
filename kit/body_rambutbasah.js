// ===== Tidur dengan Rambut Basah? 😴 Masa Sih Bikin Pusing? (Short 11:00 WIB, ±55 detik) =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Faktanya')-0.15, b4=at('Plot')-0.2, b6=at('Kamu tim')-0.15;
sHook({t0:0,t1:bc,key:'BIKIN PUSING?',keyAt:at('pusing'),keySize:88,prop:t=>pillow(1),ps:1.2,py:1150,bg:'#1B1F3A',glow:'#6E6CC4',particle:(t,i)=>`<circle r='9' fill='#7FD1FF'/>`,surpriseAt:at('pusing'),extra:t=>popAt(t,at('basah'),shower(t,0.6),V(1250,1350),720,1)});
sCard({t0:bc,t1:b1,lines:["TIDUR RAMBUT", "BASAH", "BIKIN PUSING?"],yukAt:bc+0.6,hold:t=>''});
sFact({t0:b1,t1:b4,bg:'#3B3A7A',glow:'#6E6CC4',grid:true,world:t=>seq(t,[{a:b1+0.2,f:t=>pillow(1.1),x:960,y:1150},{a:at('belum'),f:t=>`<text text-anchor='middle' font-family='Inter' font-weight='800' font-size='150' fill='#F2A541'>?</text>`,x:V(700,600),y:800},{a:at('sakit'),f:t=>xmark(1),x:V(1250,1350),y:800}]),labels:[{at:at('belum'),txt:'BELUM ADA BUKTI ILMIAH',bg:'#5B6C8F',until:at('sakit')+2},{at:at('sakit')+2,txt:'NGGAK BIKIN PUSING',bg:'#3BB273'}],src:'Ilustrasi disederhanakan'});
sPlot({t0:b4,t1:b6,bg:'#14301F',glow:'#3BB273',world:t=>seq(t,[{a:b4+1.6,f:t=>pillow(1.2,t>at('jamur')),x:960,y:1100},{a:at('jamur'),f:t=>bacterium(0.8,'#7BA05B',0,'evil',t),x:V(1250,1350),y:800},{a:at('gatal'),f:t=>label('GATAL + KETOMBE',{size:46,bg:'#E5383B'}),x:960,y:V(1450,1400)}]),labels:[{at:at('bantal'),txt:'BANTAL LEMBAP TIAP MALAM',bg:'#E5383B',until:at('jamur')},{at:at('jamur'),txt:'JAMUR BISA TUMBUH!',bg:'#7BA05B'}]});
sCTA({t0:b6,t1:E,ln:'TIM KERINGIN',ls:'KERINGIN',rn:'TIM LANGSUNG TIDUR',rs:'LANGSUNG',lp:t=>sun(t,0.35),rp:t=>pillow(0.35),aAt:at('keringin'),bAt:at('langsung'),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#F2A541',rc:'#5B6C8F'});
}
const THUMB={t:2.0,lines:["TIDUR RAMBUT", "BASAH", "BIKIN PUSING?"]};
