// ===== Mimisan Harus Dongak? Masa Sih Bener? ===== NEWFX B21FX
mkTrend({key:'DONGAK?',keyWord:'dongak',hook:t=>nose(t,1),bg:'#3A1616',glow:'#E5383B',card:['MIMISAN','HARUS DONGAK?'],
 sec:[{k:'fact',at:'Faktanya',it:[['dongak',t=>nose(t,1),'C'],['tenggorokan',t=>bloodDrop(1),'BR'],['mual',t=>sweatFace(t,1),'BL']],lb:[['dongak','DONGAK = DARAH KE TENGGOROKAN','r'],['ketelan','BISA KETELAN, MUAL','r']]},
  {k:'check',at:'Cara yang benar justru',title:'Cara benar:',items:[['Duduk tegak','duduk'],['Condong ke depan','condong'],['Pencet hidung 10-15 mnt','pencet']],label:'CARA YANG BENAR'},
  {k:'plot',at:'Plot',it:[['pembuluh',t=>nose(t,1.2),'C'],['dipencet',t=>checkAt(t,0,0,0,1.6),'R']],lb:[['pembuluh','DARI PEMBULUH DI DEPAN HIDUNG','g']]},
  {k:'fact',at:'Tapi kalau',it:[['dua puluh',t=>clockFace(t,1,6),'L'],['benturan',t=>emo('BENTURAN',1,'#E5383B','#fff'),'R'],['dokter',t=>emo('KE DOKTER!',1.1,'#3BB273','#fff'),'B']],lb:[['Tapi kalau','> 20 MENIT? KE DOKTER','r']]}],
 cta:{at:'Kamu tim',l:'TIM DONGAK',ls:'DONGAK',r:'TIM NUNDUK',rs:'NUNDUK',lp:t=>nose(t,0.6),rp:t=>checkAt(t,0,0,0,1.3),aw:'dongak',bw:'nunduk'}});
const THUMB={t:1.5,lines:['MIMISAN','HARUS DONGAK?','MASA SIH?']};
