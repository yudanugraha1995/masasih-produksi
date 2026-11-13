// ===== Masa Sih Kantong Mata Pasti Gara-Gara Begadang? 👀 (Short 11:00 WIB, ±55 detik) =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Faktanya')-0.15, b4=at('Plot')-0.2, b6=at('Kamu punya')-0.15;
sHook({t0:0,t1:bc,key:'GARA-GARA BEGADANG?',keyAt:at('begadang'),keySize:72,prop:t=>eyeBag(t,1,1),ps:1.3,py:1050,bg:'#1B1F3A',glow:'#6E6CC4',particle:(t,i)=>`<circle r='6' fill='#fff'/>`,surpriseAt:at('begadang'),extra:t=>popAt(t,at('begadang'),moonIcon(0.6),V(1250,1350),720,1)});
sCard({t0:bc,t1:b1,lines:["KANTONG MATA", "PASTI KARENA", "BEGADANG?"],yukAt:bc+0.6,hold:t=>''});
sFact({t0:b1,t1:b4,bg:'#3B3A7A',glow:'#6E6CC4',grid:true,world:t=>seq(t,[{a:b1+0.2,f:t=>eyeBag(t,1,1),x:960,y:1050},{a:at('keturunan'),f:t=>label('KETURUNAN',{size:48,bg:'#5B6C8F'}),x:V(700,600),y:V(1400,1380)},{a:at('umur'),f:t=>label('UMUR',{size:48,bg:'#5B6C8F'}),x:V(1250,1350),y:V(1400,1380)},{a:at('Kurang'),f:t=>moonIcon(0.6),x:V(1250,1350),y:760},{a:at('sementara'),f:t=>clockFace(t,0.6,6),x:V(700,600),y:760}]),labels:[{at:at('keturunan'),txt:'PALING SERING: KETURUNAN + UMUR',bg:'#5B6C8F',size:V(40,50),until:at('Kurang')},{at:at('Kurang'),txt:'BEGADANG = BENGKAK SEMENTARA',bg:'#F2A541',fill:OL,size:V(40,50)}],src:'Sumber: Cleveland Clinic'});
sPlot({t0:b4,t1:b6,bg:'#3A1616',glow:'#E5383B',world:t=>seq(t,[{a:at('keasinan'),f:t=>saltShaker(1.1),x:V(700,600),y:1050},{a:at('malam',b4),f:t=>moonIcon(0.6),x:V(700,600),y:700},{a:at('bengkak',b4),f:t=>eyeBag(t,0.8,1.3),x:V(1250,1350),y:1050}]),labels:[{at:at('keasinan'),txt:'KEASINAN MALAM HARI',bg:'#E5383B',until:at('bengkak',b4)},{at:at('bengkak',b4),txt:'MATA BENGKAK PAS BANGUN!',bg:'#E5383B',size:V(44,52)}]});
sCTA({t0:b6,t1:E,ln:'DARI LAHIR',ls:'DARI LAHIR',rn:'DARI BEGADANG',rs:'BEGADANG',lp:t=>eyeBag(t,0.3,1),rp:t=>moonIcon(0.5),aAt:at('lahir'),bAt:at('begadang',b6),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#5B6C8F',rc:'#2E2430'});
}
const THUMB={t:2.0,lines:["KANTONG MATA", "PASTI KARENA", "BEGADANG?"]};
