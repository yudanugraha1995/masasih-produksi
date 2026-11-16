// NEWFX ===== Katanya Nyapu Malam Bikin Rezeki Kebuang? =====
{const E=DUR+0.2;
const b1=at('Masa sih'),b2=at('Dulu'),b3=at('Plot')-0.1,b4=at('Kamu tim')-0.1;
THUMB={t:1.2,lines:['NYAPU MALAM','REZEKI IKUT','KEBUANG?']};
sHook({t0:0,t1:b1,key:'REZEKI KEBUANG?',keyAt:at('rezekimu'),keySize:92,prop:t=>broom(1,-12+Math.sin(t*6)*14),ps:1.4,py:1150,bg:'#FFE9A8',glow:'#FFFFFF',particle:(t,i)=>coin(0.45),surpriseAt:at('rezekimu')});
sFact({t0:b1,t1:b2,bg:'#CFF1FF',glow:'#FFFFFF',
 world:t=>{let s='';for(let i=0;i<4;i++)s+=popAt(t,at('Tenang')+i*0.15,coin(0.8),V(700,600)+i*V(170,230),900+(i%2)*120,1);return s+xAt(t,at('disapu'),V(960,960),1250,1.4);},
 labels:[{at:b1+0.05,txt:'MASA SIH?',bg:'#5B6C8F',until:at('Tenang')},{at:at('Tenang'),txt:'REZEKI NGGAK BISA DISAPU!',bg:'#3BB273',size:V(54,60)}]});
sFact({t0:b2,t1:b3,bg:'#FFE1C7',glow:'#FFFFFF',
 world:t=>{let s=popAt(t,b2+0.1,oilLamp(t,1.2),V(740,520),1100,1);
  s+=popAt(t,at('cincin'),ring(1.4),V(1000,1250),1150,1)+popAt(t,at('koin'),coin(1),V(1210,1500),1250,1);
  if(t>at('kesapu'))s+=g(tr(V(1170,1350)+Math.sin(t*6)*60,1050,1.1,-20+Math.sin(t*6)*12),broom(1,0));return s;},
 labels:[{at:b2+0.05,txt:'DULU PAKAI LAMPU MINYAK',bg:'#F2A541',fill:OL,until:at('cincin')},{at:at('cincin'),txt:'CINCIN & KOIN IKUT KESAPU!',bg:'#E5383B',size:V(52,58)}],src:'Penjelasan: larangan muncul karena dulu rumah gelap di malam hari'});
sPlot({t0:b3,t1:b4,bg:'#FFF1B8',glow:'#FFFFFF',
 world:t=>{const p0=b3+1.4;if(t<p0)return '';let s='';for(let i=0;i<3;i++)s+=popAt(t,at('perhiasan')+i*0.2,ring(1.1),V(720,620)+i*V(240,340),1050+(i%2)*90,1,i*15);return s+popAt(t,at('rezeki"')||at('rezeki'),label('"REZEKI" = PERHIASAN',{size:58,bg:'#B47EDB'}),960,V(780,760),1,-4);},
 labels:[]});
sEnd({t0:b4,t1:E,qLines:['TIM NYAPU PAGI','ATAU MALAM?'],commentAt:at('Jawab'),subAt:at('subscribe'),prop:t=>broom(0.9,-15+Math.sin(t*5)*10),bg:'#D9F5C8'});
}
