// NEWFX ===== Gimana Kalau Siul Malam-Malam? =====
{const E=DUR+0.2;
const b1=at('Masa sih'),b2=at('Larangan'),b3=at('dulu di'),b4=at('Plot')-0.1,b5=at('Kamu berani')-0.1;
THUMB={t:1.2,lines:['SIUL MALAM','BISA MANGGIL','HANTU?']};
sHook({t0:0,t1:b1,key:'MANGGIL HANTU?',keyAt:at('makhluk'),keySize:92,prop:t=>ghost(t,1),ps:1.5,py:1100,bg:'#E6DBFF',glow:'#FFFFFF',particle:(t,i)=>moonIcon(0.35),surpriseAt:at('Katanya'),
 extra:t=>g(tr(V(380,420),1350,1.3),notes(t,1))});
sFact({t0:b1,t1:b2,bg:'#CFF1FF',glow:'#FFFFFF',
 world:t=>popAt(t,b1+0.1,ghost(t,1.2),V(960,960),1100,1)+xAt(t,at('belum'),V(1180,1380),850,1.3),
 labels:[{at:b1+0.05,txt:'MASA SIH?',bg:'#5B6C8F',until:at('belum')},{at:at('belum'),txt:'BELUM ADA BUKTINYA!',bg:'#3BB273'}]});
sFact({t0:b2,t1:b3,bg:'#E3F7D9',glow:'#FFFFFF',
 world:t=>{let s=bed(V(960,960),1350,V(1.1,1.2),'');if(t>at('tidur'))s+=zzz(V(1050,1100),1000,t);return s+g(tr(V(1170,1350),1000,1.2),notes(t,1));},
 labels:[{at:b2+0.05,txt:'BIAR NGGAK GANGGU ORANG TIDUR',bg:'#5B6C8F',size:V(48,56)}]});
sFact({t0:b3,t1:b4,bg:'#D4F2D2',glow:'#FFFFFF',
 world:t=>popAt(t,b3+0.1,tree(1.3),V(740,520),1350,1)+popAt(t,at('binatang'),catFace(1.3),V(1180,1380),1100,1),
 labels:[{at:b3+0.05,txt:'DI DEKAT HUTAN',bg:'#3BB273',until:at('binatang')},{at:at('binatang'),txt:'BISA MANCING BINATANG LIAR!',bg:'#E5383B',size:V(50,56)}],src:'Penjelasan: larangan berasal dari kebiasaan masyarakat dulu'});
sPlot({t0:b4,t1:b5,bg:'#FFF1B8',glow:'#FFFFFF',
 world:t=>{const p0=b4+1.4;if(t<p0)return '';return popAt(t,at('tetangga'),mom({x:0,y:0,s:1.3,aR:-40+Math.sin(t*12)*10,aL:62,talk:Math.sin(t*22)>0,blink:false}),V(960,960),1550,1)+popAt(t,at('marah'),label('BERISIK WOY! 😤',{size:70,bg:'#E5383B'}),960,V(760,740),1,-5);},
 labels:[]});
sEnd({t0:b5,t1:E,qLines:['KAMU BERANI','SIUL MALAM NGGAK?'],commentAt:at('Jawab'),subAt:at('subscribe'),prop:t=>ghost(t,0.9),bg:'#E6DBFF'});
}
