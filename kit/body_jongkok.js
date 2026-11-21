// ===== BAB Jongkok Lebih Sehat? Masa Sih? ===== NEWFX B21FX
mkTrend({key:'JONGKOK?',keyWord:'jongkok',hook:t=>toilet(1),bg:'#14301F',glow:'#3BB273',card:['BAB JONGKOK','LEBIH SEHAT','DARI DUDUK?'],
 sec:[{k:'fact',at:'Ternyata',it:[['duduk',t=>chair(0.8),'L'],['menekuk',t=>gut(t,0.8),'R']],lb:[['duduk','DUDUK: SALURAN MENEKUK','r'],['jongkok','JONGKOK: SALURAN LURUS','g']]},
  {k:'fact',at:'Penelitian',it:[['lebih cepat',t=>clockFace(t,1,8),'C']],lb:[['Penelitian','LEBIH CEPAT, NGGAK NGEJAN','g']],src:'Sumber: Sakakibara dkk., Lower Urinary Tract Symptoms (2010)'},
  {k:'plot',at:'Plot',it:[['bangku',t=>chair(0.7),'L'],['toilet',t=>toilet(0.6),'R']],lb:[['bangku','PAKAI BANGKU KECIL DI KAKI!','g']]},
  {k:'check',at:'Biar lancar',title:'Biar lancar:',items:[['Banyak serat','serat'],['Cukup minum','minum'],['Jangan main HP lama','HP']],label:'JADI GINI'}],
 cta:{at:'Kamu tim',l:'TIM JONGKOK',ls:'JONGKOK',r:'TIM DUDUK',rs:'DUDUK',lp:t=>toilet(0.4),rp:t=>chair(0.5),aw:'jongkok',bw:'duduk'}});
const THUMB={t:1.5,lines:['BAB JONGKOK','LEBIH SEHAT','DARI DUDUK?']};
