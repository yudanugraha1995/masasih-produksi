// ===== Krim Pemutih Instan? Masa Sih Aman? ===== NEWFX B21FX
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1,b1=at('BPOM')-0.15,b2=at('Merkuri memang')-0.15,b3=at('Tapi merkuri')-0.15,b4=at('Plot')-0.15,b5=at('Sebelum beli')-0.15,b6=at('Kamu pernah')-0.15;
sHook({t0:0,t1:bc,key:'PUTIH SEMINGGU?',keyAt:at('seminggu'),keySize:92,prop:t=>creamJar(t,1),ps:1.4,py:1150,bg:'#3A1630',glow:'#F28DB2',
 particle:(t,i)=>`<path d="M0,-20l6,14l14,6l-14,6l-6,14l-6,-14l-14,-6l14,-6Z" fill="#FFF6B0"/>`,surpriseAt:at('seminggu')});
sCard({t0:bc,t1:b1,lines:['KRIM PEMUTIH','INSTAN','AMAN?'],yukAt:at('aman'),hold:t=>g('scale(.35)',creamJar(t,1))});
sFact({t0:b1,t1:b2,bg:'#2A1F2B',glow:'#8E3B4F',
 world:t=>popAt(t,b1+0.2,creamJar(t,1.2,{txt:'ILEGAL',sub:'TANPA IZIN'}),V(860,960),1100,1)+popAt(t,at('merkuri'),hgDrop(1.6),V(1100,1250),1350,1),
 labels:[{at:b1+0.1,txt:'BPOM: KOSMETIK ILEGAL',bg:'#E5383B',until:at('merkuri')},{at:at('merkuri'),txt:'MENGANDUNG MERKURI (Hg)',bg:'#E5383B'}],src:'Sumber: BPOM RI, public warning kosmetik'});
sFact({t0:b2,t1:b3,bg:'#14301F',glow:'#3BB273',
 world:t=>{const k=ss((t-at('cerah'))/1);return popAt(t,b2+0.2,faceSkin(t,1.2,{tone:k>0.5?'#F6DCC6':'#D9A47A'}),960,1150,1)+popAt(t,at('menghambat'),hgDrop(0.9),V(1100,1250),850,1);},
 labels:[{at:b2+0.1,txt:'KULIT CEPAT KELIHATAN CERAH',bg:'#3BB273',size:V(48,54),until:at('menghambat')},{at:at('menghambat'),txt:'KARENA PIGMEN DIHAMBAT',bg:'#F2A541',fill:OL}]});
sFact({t0:b3,t1:b4,bg:'#3A1616',glow:'#E5383B',
 world:t=>{let s=popAt(t,b3+0.2,faceSkin(t,0.95,{tone:'#F6DCC6',spots:t>at('flek')?6:0,rash:t>at('ruam'),sad:t>at('Efeknya')}),960,1100,1);
  s+=popAt(t,at('ginjal'),kidney(0.7),V(820,640),1360,1)+popAt(t,at('saraf'),brain(t,0.6,'sad'),V(1100,1250),1360,1);return s;},
 labels:[{at:b3+0.1,txt:'TERSERAP & MENUMPUK',bg:'#E5383B',until:at('Efeknya')},{at:at('Efeknya'),txt:'RUAM, FLEK, GINJAL, SARAF',bg:'#E5383B'}]});
sPlot({t0:b4,t1:b5,bg:'#2B1B14',glow:'#A3542A',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';return popAt(t,p0,creamJar(t,1.2),960,1100,1)+xAt(t,at('tanda'),960,1100,2)+popAt(t,at('Kulit sehat'),label('BUTUH WAKTU, BUKAN 7 HARI',{size:50,bg:'#3BB273'}),960,1450,1);},
 labels:[{at:at('hasil'),txt:'PUTIH INSTAN = TANDA BAHAYA',bg:'#E5383B',size:V(46,52)}]});
sCheck({t0:b5,t1:b6,title:'Cek KLIK:',items:[['Kemasan',at('kemasan')],['Label',at('label')],['Izin edar',at('izin')],['Kedaluwarsa',at('kedaluwarsa')]],hold:t=>g('scale(.3)',creamJar(t,1,{sparkle:false,txt:'BPOM',sub:'NA18...'})),label:'SEBELUM BELI',src:'Cek izin edar: cekbpom.pom.go.id'});
sCTAsub({t0:b6,t1:E,ln:'PERNAH KETIPU',ls:'PERNAH',rn:'BELUM PERNAH',rs:'AMAN',lp:t=>creamJar(t,0.45,{sparkle:false}),rp:t=>shield(0.6),aAt:at('pernah',b6),bAt:at('abal'),vsAt:at('krim',b6),commentAt:at('Tulis'),subAt:at('subscribe'),lc:'#F28DB2',rc:'#3BB273'});
}
const THUMB={t:1.5,lines:['KRIM PEMUTIH','INSTAN','AMAN?']};
