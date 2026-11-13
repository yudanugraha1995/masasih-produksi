// ===== Main HP Sambil Dicas Tiap Malam? 🔌 Masa Sih Bisa Meledak? (Short 11:00 WIB, ±55 detik) =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Faktanya')-0.15, b4=at('Plot')-0.2, b6=at('Kamu tim')-0.15;
sHook({t0:0,t1:bc,key:'BISA MELEDAK?',keyAt:at('meledak'),keySize:88,prop:t=>phone(t,1,{plug:true}),ps:1.1,py:1000,bg:'#3A1616',glow:'#E5383B',particle:(t,i)=>`<circle r='8' fill='#F2A541'/>`,surpriseAt:at('meledak'),extra:t=>popAt(t,at('meledak'),flame(t,0.8),V(1250,1350),800,1)});
sCard({t0:bc,t1:b1,lines:["MAIN HP", "SAMBIL DICAS", "BISA MELEDAK?"],yukAt:bc+0.6,hold:t=>''});
sFact({t0:b1,t1:b4,bg:'#3B3A7A',glow:'#6E6CC4',grid:true,world:t=>seq(t,[{a:b1+0.2,f:t=>phone(t,1,{plug:true}),x:V(760,640),y:1050},{a:at('pengaman'),f:t=>shield(0.8),x:V(1250,1350),y:850},{a:at('asli'),f:t=>checkAt(t,at('asli'),0,0,1),x:V(1250,1350),y:1300}]),labels:[{at:at('pengaman'),txt:'ADA PENGAMAN BATERAI',bg:'#5B6C8F',until:at('asli')},{at:at('asli'),txt:'CHARGER ASLI = AMAN',bg:'#3BB273'}],src:'Ilustrasi disederhanakan'});
sPlot({t0:b4,t1:b6,bg:'#3A1616',glow:'#E5383B',world:t=>seq(t,[{a:at('palsu'),f:t=>label('CHARGER PALSU',{size:48,bg:'#E5383B'}),x:960,y:V(760,720)},{a:at('kasur'),f:t=>pillow(1),x:960,y:1250},{a:at('kasur')+0.3,f:t=>phone(t,0.6,{hot:true}),x:960,y:1150},{a:at('panasnya'),f:t=>flame(t,0.7),x:V(1250,1350),y:1000}]),labels:[{at:at('palsu'),txt:'CHARGER PALSU',bg:'#E5383B',until:at('kasur')},{at:at('kasur'),txt:'NGECAS KETUTUP BANTAL = PANAS',bg:'#E5383B',size:V(40,50)}]});
sCTA({t0:b6,t1:E,ln:'TIM SAMBIL MAIN',ls:'SAMBIL MAIN',rn:'TIM DI MEJA',rs:'DI MEJA',lp:t=>phone(t,0.35,{plug:true}),rp:t=>battery(t,0.5,1),aAt:at('ngecas',b6),bAt:at('meja'),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#E5383B',rc:'#3BB273'});
}
const THUMB={t:2.0,lines:["MAIN HP", "SAMBIL DICAS", "BISA MELEDAK?"]};
