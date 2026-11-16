// NEWFX
{mkFunny({thumb:['BERSIN BIKIN','JANTUNG','BERHENTI?'],key:'JANTUNG BERHENTI?',keyWord:'jantungmu',hookProp:t=>sneezeFace(t,1),particle:(t,i)=>`<circle r="12" fill="#BFE9FF"/>`,
 bounds:[0,'Tenang','Waktu','Plot'],endWord:'Kamu tim',
 sec:[{bg:'#CFF1FF',items:[['Tenang',t=>heart(1.3,Math.sin(t*8)),V(960,960),1150,1],['berhenti!',t=>checkAt(t,at('berhenti!'),0,0,1),V(1150,1250),850,1]],labels:[['Tenang','JANTUNG NGGAK BERHENTI!','#3BB273']]},
 {bg:'#FFE1EC',items:[['tekanan',t=>heart(1.1,Math.sin(t*14)),V(960,960),1150,1],['irama',t=>label('IRAMA BERUBAH DIKIT',{size:56,bg:'#5DB7EA'}),960,V(820,800),1]],labels:[['tekanan','TEKANAN DADA BERUBAH','#E5383B']]},
 {plot:true,items:[['nahan',t=>sneezeFace(t,0.9),V(960,960),950,1],['robek',t=>label('TENGGOROKAN ROBEK! 😱',{size:58,bg:'#E5383B'}),960,1250,1]],labels:[['nahan','JANGAN NAHAN BERSIN!','#E5383B']]}],
 q:['TIM BERSIN KERAS','ATAU DITAHAN?'],endProp:t=>sneezeFace(t,0.7)});}
