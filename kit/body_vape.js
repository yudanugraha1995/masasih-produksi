// ===== Vape Lebih Aman dari Rokok? Masa Sih? ===== NEWFX B21FX
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1,b1=at('Faktanya')-0.15,b2=at('Waktu dipanaskan')-0.15,b3=at('Tahun')-0.15,b4=at('Plot')-0.15,b5=at('Jadi vape')-0.15,b6=at('Kamu tim')-0.15;
sHook({t0:0,t1:bc,key:'LEBIH AMAN?',keyAt:at('aman'),keySize:100,prop:t=>vapePen(t,1),ps:1.5,py:1150,bg:'#1E1A33',glow:'#7A5BD6',
 particle:(t,i)=>`<circle r="26" fill="#fff" opacity=".5"/>`,surpriseAt:at('aman'),extra:t=>popAt(t,at('rokok'),cigarette(1,-15),V(1120,1300),1420,1)});
sCard({t0:bc,t1:b1,lines:['VAPE LEBIH AMAN','DARI ROKOK?'],yukAt:at('sih',bc),hold:t=>g('scale(.4)',vapePen(t,1))});
sFact({t0:b1,t1:b2,bg:'#14301F',glow:'#3BB273',
 world:t=>popAt(t,b1+0.2,vapePen(t,1.3),V(830,640),1150,1)+popAt(t,at('nikotin'),label('NIKOTIN',{size:80,bg:'#E5383B'}),V(1080,1250),950,1)+popAt(t,at('kecanduan'),brain(t,0.9,'sad'),V(1090,1250),1300,1),
 labels:[{at:b1+0.1,txt:'TETAP ADA NIKOTIN',bg:'#E5383B',until:at('kecanduan')},{at:at('kecanduan'),txt:'BIKIN KECANDUAN',bg:'#E5383B'}],src:'Sumber: WHO, Electronic cigarettes'});
sFact({t0:b2,t1:b3,bg:'#3B3A7A',glow:'#6E6CC4',grid:true,
 world:t=>{const n=t>at('logam')?8:0;let s=popAt(t,at('paru-paru')-0.6,lungs(t,1.3,{dots:t>at('paru-paru')?8:0}),960,1200,1);if(t<at('paru-paru'))for(let i=0;i<n;i++)s+=popAt(t,at('logam')+i*0.1,metalDot(1.3),820+rnd(i)*300,850+rnd(i+5)*250,1);return s+popAt(t,b2+0.2,vapePen(t,0.6),V(1100,1250),750,1,-20);},
 labels:[{at:b2+0.1,txt:'UAPNYA BAWA LOGAM HALUS',bg:'#F2A541',fill:OL,until:at('zat kimia')},{at:at('zat kimia'),txt:'+ ZAT KIMIA KE PARU-PARU',bg:'#E5383B'}],src:'Ilustrasi disederhanakan'});
sFact({t0:b3,t1:b4,bg:'#2A1F2B',glow:'#8E3B4F',
 world:t=>bigNum(t,at('lebih dari'),'2.800+','orang dirawat (AS, 2019)',960,1000,{size:190})+popAt(t,at('cedera'),lungs(t,0.8,{dots:5,col:'#D97A70'}),960,1370,1)+popAt(t,at('meninggal'),label('PULUHAN MENINGGAL',{size:56,bg:'#E5383B'}),960,1620,1),
 labels:[{at:b3+0.1,txt:'KASUS EVALI DI AMERIKA',bg:'#5B6C8F'}],src:'Sumber: CDC, EVALI 2019-2020'});
sPlot({t0:b4,t1:b5,bg:'#3A1616',glow:'#E5383B',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';return popAt(t,at('pindah'),vapePen(t,1),V(830,640),1150,1)+popAt(t,at('dua-duanya'),cigarette(1.2,-20),V(1090,1250),1150,1)+popAt(t,at('rokok',b4),label('DOBEL!',{size:90,bg:'#E5383B'}),960,1450,1);},
 labels:[{at:at('pindah'),txt:'NIATNYA PINDAH KE VAPE...',bg:'#F2A541',fill:OL,until:at('dua-duanya')},{at:at('dua-duanya'),txt:'MALAH PAKAI DUA-DUANYA!',bg:'#E5383B'}]});
sCheck({t0:b5,t1:b6,title:'Jadi:',items:[['Vape bukan sehat',at('bukan pilihan')],['Paling aman: berhenti',at('berhenti')],['Minta bantuan dokter',at('total')+0.3]],hold:t=>g('scale(.3)',vapePen(t,1)),label:'KESIMPULAN'});
sCTAsub({t0:b6,t1:E,ln:'SETUJU DILARANG',ls:'SETUJU',rn:'NGGAK SETUJU',rs:'NGGAK',lp:t=>checkAt(t,b6,0,0,1.4),rp:t=>vapePen(t,0.5),aAt:at('setuju'),bAt:at('nggak',b6),vsAt:at('atau',b6),commentAt:at('Tulis'),subAt:at('subscribe'),lc:'#3BB273',rc:'#7A5BD6'});
}
const THUMB={t:1.5,lines:['VAPE LEBIH AMAN','DARI ROKOK?','MASA SIH?']};
