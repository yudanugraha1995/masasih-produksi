// NEWFX B21FX
mkTrend({key:'LEHER KAKU?',keyWord:'leher',hook:t=>pillow(1.2),bg:'#1A1A3A',glow:'#6E6CC4',card:['BANTAL TINGGI','BIKIN','LEHER KAKU?'],
 sec:[{k:'fact',at:'Ternyata',it:[['menekuk',t=>g('',bed(0,0,0.5,lyingHead('worried',false))),'C'],['menekuk',t=>emo('LEHER NEKUK',0.9,'#E5383B','#fff'),'T']],lb:[['Ternyata','BISA!','r']]},
  {k:'fact',at:'Otot leher',it:[['tegang',t=>backTorso(t,0.8,0),'C']],lb:[['Otot leher','OTOT TEGANG, PAGI KAKU','r']]},
  {k:'plot',at:'Plot',it:[['miring',t=>emo('MIRING: LEBIH TINGGI',0.8,'#5B6C8F','#fff'),'T'],['telentang',t=>emo('TELENTANG: RENDAH',0.8,'#3BB273','#fff'),'B']],lb:[['posisi','TERGANTUNG POSISI TIDUR!','g']]},
  {k:'check',at:'Biar leher',title:'Biar nyaman:',items:[['Kepala sejajar punggung','sejajar'],['Ganti bantal kempes','kempes']],label:'JADI GINI'}],
 cta:{at:'Kamu tim',l:'BANTAL TINGGI',ls:'TINGGI',r:'BANTAL TIPIS',rs:'TIPIS',lp:t=>pillow(0.6),rp:t=>pillow(0.4),aw:'tinggi',bw:'tipis'}});
const THUMB={t:1.5,lines:['BANTAL TINGGI','BIKIN','LEHER KAKU?']};
