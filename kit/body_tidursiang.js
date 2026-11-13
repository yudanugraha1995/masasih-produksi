// ===== Tidur Siang Tiap Hari? Masa Sih Bikin Malam Susah Tidur? (Short 11:00 WIB, ±55 detik) =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Faktanya')-0.15, b4=at('Plot')-0.2, b6=at('Kamu tim')-0.15;
sHook({t0:0,t1:bc,key:'MALAM MELEK?',keyAt:at('susah'),keySize:90,prop:t=>bed(0,0,0.9,''),ps:1,py:1150,bg:'#3A2A16',glow:'#F2A541',particle:(t,i)=>`<text font-size='50' fill='#fff' font-family='Inter' font-weight='800'>Z</text>`,surpriseAt:at('susah'),extra:t=>popAt(t,at('siang')+0.2,sun(t,0.6),V(1250,1350),700,1)+popAt(t,at('malamnya'),moonIcon(0.6),V(700,600),700,1)});
sCard({t0:bc,t1:b1,lines:["TIDUR SIANG", "TIAP HARI", "MALAM MELEK?"],yukAt:bc+0.6,hold:t=>''});
sFact({t0:b1,t1:b4,bg:'#3B3A7A',glow:'#6E6CC4',grid:true,world:t=>seq(t,[{a:b1+0.2,f:t=>clockFace(t,1,2),x:V(700,600),y:950},{a:at('sepuluh'),f:t=>bigNum(t,at('sepuluh'),'10-20','menit aja',0,0,{size:130}),x:V(1250,1350),y:850},{a:at('segar'),f:t=>brain(t,1,'happy'),x:960,y:1350,s:0.8}]),labels:[{at:at('sepuluh'),txt:'10-20 MENIT = SEGAR',bg:'#3BB273',until:at('fokus')+3},{at:at('fokus')+3,txt:'OTAK LEBIH FOKUS',bg:'#3BB273'}],src:'Sumber: Sleep Foundation'});
sPlot({t0:b4,t1:b6,bg:'#3A1616',glow:'#E5383B',world:t=>seq(t,[{a:b4+1.6,f:t=>clockFace(t,1,10),x:V(700,600),y:1000},{a:at('satu jam'),f:t=>bigNum(t,at('satu jam'),'> 1 jam','kelamaan',0,0,{size:120}),x:V(1250,1350),y:850},{a:at('sore'),f:t=>moonIcon(1),x:960,y:1350},{a:at('sore')+0.4,f:t=>xmark(1),x:960,y:1350}]),labels:[{at:at('satu jam'),txt:'LEBIH DARI 1 JAM = BAHAYA',bg:'#E5383B',size:V(44,52),until:at('sore')},{at:at('sore'),txt:'APALAGI KALAU UDAH SORE',bg:'#E5383B',size:V(44,52)}]});
sCTA({t0:b6,t1:E,ln:'TIM SEBENTAR',ls:'SEBENTAR',rn:'TIM BABLAS',rs:'BABLAS',lp:t=>clockFace(t,0.45,2),rp:t=>moonIcon(0.5),aAt:at('sebentar'),bAt:at('bablas'),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#F2A541',rc:'#2E2430'});
}
const THUMB={t:2.0,lines:["TIDUR SIANG", "TIAP HARI", "MALAM MELEK?"]};
