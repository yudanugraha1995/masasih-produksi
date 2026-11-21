// NEWFX B21FX
mkTrend({key:'MASUK ANGIN?',keyWord:'masuk',hook:t=>backTorso(t,0.9,1),bg:'#3A2A16',glow:'#F2A541',card:['SERING SENDAWA','TANDA','MASUK ANGIN?'],
 sec:[{k:'fact',at:'Faktanya',it:[['udara',t=>gasBubble(t,1.2),'C'],['cepat',t=>clockFace(t,0.7,10),'L'],['soda',t=>sodaCan(t,0.6),'R']],lb:[['udara','KELUARIN UDARA DARI LAMBUNG','b']]},
  {k:'fact',at:'Jadi sendawa',it:[['normal',t=>checkAt(t,-1,0,0,1.5),'C']],lb:[['Jadi sendawa','SENDAWA ITU NORMAL','g']]},
  {k:'plot',at:'Plot',it:[['medis',t=>emo('MASUK ANGIN?',1,'#B47EDB','#fff'),'T'],['kembung',t=>gasBubble(t,0.9),'L'],['flu',t=>sneezeFace(t,0.8),'R']],lb:[['medis','NGGAK ADA DI ISTILAH MEDIS!','r']]},
  {k:'fact',at:'Tapi kalau',it:[['ulu hati',t=>stomach(t,1,0.8),'C']],lb:[['Tapi kalau','+ PERIH ULU HATI? ASAM LAMBUNG','r']]},
  {k:'check',at:'Biar jarang',title:'Biar jarang:',items:[['Makan pelan','pelan'],['Kurangi soda','soda'],['Jangan ngobrol ngunyah','bicara']],label:'JADI GINI'}],
 cta:{at:'Kamu sering',l:'SERING',ls:'SERING',r:'JARANG',rs:'JARANG',lp:t=>gasBubble(t,0.6),rp:t=>checkAt(t,0,0,0,1.3),aw:'sering',bw:'makan'}});
const THUMB={t:1.5,lines:['SERING SENDAWA','TANDA','MASUK ANGIN?']};
