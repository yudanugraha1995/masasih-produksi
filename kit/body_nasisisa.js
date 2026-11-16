// NEWFX ===== Katanya Makan Nggak Habis Ayamnya Mati? =====
{const E=DUR+0.2;
const b1=at('Masa sih'),b2=at('Mitos'),b3=at('Faktanya'),b4=at('Plot')-0.1,b5=at('Kamu tim')-0.1;
THUMB={t:1.2,lines:['MAKAN NGGAK HABIS','AYAMNYA','MATI?']};
sHook({t0:0,t1:b1,key:'AYAMNYA MATI?',keyAt:at('ayammu'),keySize:96,prop:t=>chicken(t,1,{x:t>at('mati')}),ps:1.4,py:1150,bg:'#FFE9A8',glow:'#FFFFFF',particle:(t,i)=>seed(1.4,i*30),surpriseAt:at('ayammu'),
 extra:t=>popAt(t,0.3,plateRice(0.9),V(1200,1450),1500,1)});
sFact({t0:b1,t1:b2,bg:'#CFF1FF',glow:'#FFFFFF',
 world:t=>popAt(t,b1+0.1,chicken(t,1.3),V(960,960),1150,1)+checkAt(t,at('aman'),V(1180,1420),780,1.2),
 labels:[{at:b1+0.05,txt:'MASA SIH?',bg:'#5B6C8F',until:at('Tenang')},{at:at('Tenang'),txt:'AYAMNYA AMAN KOK!',bg:'#3BB273'}]});
sFact({t0:b2,t1:b3,bg:'#E3F7D9',glow:'#FFFFFF',
 world:t=>popAt(t,b2+0.1,plateRice(1.3),V(960,960),1150,1)+popAt(t,at('menghabiskan'),label('HABISIN YA!',{size:72,bg:'#F2A541',fill:OL}),960,V(780,760),1,-4),
 labels:[{at:b2+0.05,txt:'BIAR ANAK HABISIN MAKANAN',bg:'#5B6C8F',size:V(52,58)}]});
sFact({t0:b3,t1:b4,bg:'#FFE1C7',glow:'#FFFFFF',
 world:t=>popAt(t,b3+0.2,trashBin(1.2),V(740,560),1250,1)+popAt(t,at('puluhan'),label('PULUHAN JUTA TON / TAHUN',{size:56,bg:'#E5383B'}),V(1000,1250),V(760,880),1,-4),
 labels:[{at:b3+0.05,txt:'SISA MAKANAN = MASALAH BESAR',bg:'#E5383B',size:V(50,56)}],src:'Sumber: Bappenas (2021), kajian food loss & waste Indonesia'});
sPlot({t0:b4,t1:b5,bg:'#FFF1B8',glow:'#FFFFFF',
 world:t=>{const p0=b4+1.4;if(t<p0)return '';return popAt(t,at('dompet'),wallet(t,1.4,t>at('tua')),960,1150,1)+popAt(t,at('tua'),label('DOMPET "MATI" 😵',{size:66,bg:'#E5383B'}),960,V(800,780),1,-4);},
 labels:[]});
sEnd({t0:b5,t1:E,qLines:['TIM SELALU HABIS','ATAU SERING SISA?'],commentAt:at('Jawab'),subAt:at('subscribe'),prop:t=>plateRice(1),bg:'#FFE7A3'});
}
