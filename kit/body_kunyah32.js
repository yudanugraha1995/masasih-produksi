// NEWFX B21FX
mkTrend({key:'32 KALI?',keyWord:'tiga',hook:t=>plateRice(1.2),bg:'#3A2A16',glow:'#F2A541',card:['KUNYAH','32 KALI','WAJIB?'],
 sec:[{k:'fact',at:'Faktanya',it:[['angka',t=>xAt(t,-1,0,0,1.3),'R'],['bubur',t=>riceBowl(t,0.8),'L'],['daging',t=>meat(0.8),'BR']],lb:[['angka','NGGAK ADA ANGKA PASTI','g']]},
  {k:'fact',at:'Yang penting',it:[['halus',t=>emo('SAMPAI HALUS',1.1,'#3BB273','#fff'),'T'],['Air liur',t=>enzyme(t,1),'C']],lb:[['Yang penting','KUNYAH SAMPAI LEMBUT','g']]},
  {k:'plot',at:'Plot',it:[['dua puluh',t=>clockFace(t,1,4),'C'],['kenyang',t=>brain(t,0.8,'happy'),'R']],lb:[['pelan','MAKAN PELAN = MAKAN SEDIKIT','g'],['dua puluh','OTAK BUTUH ±20 MENIT','b']]},
  {k:'check',at:'Biar sehat',title:'Biar sehat:',items:[['Kunyah sampai lembut','kunyah'],['Taruh sendok','sendok'],['Jangan buru-buru','buru-buru']],label:'JADI GINI'}],
 cta:{at:'Kamu tim',l:'MAKAN CEPAT',ls:'CEPAT',r:'MAKAN PELAN',rs:'PELAN',lp:t=>clockFace(t,0.5,12),rp:t=>plateRice(0.5),aw:'cepat',bw:'pelan'}});
const THUMB={t:1.5,lines:['KUNYAH','32 KALI','WAJIB?']};
