// NEWFX
{mkFunny({thumb:['BAWANG PUTIH','BIKIN NYAMUK','KABUR?'],key:'NYAMUK KABUR?',keyWord:'nyamuk',hookProp:t=>garlic(1),particle:(t,i)=>mosquito(t,0.5),
 bounds:[0,'Penelitian','Bau','Plot'],endWord:'Kamu tim',
 sec:[{bg:'#CFF1FF',items:[['Penelitian',t=>garlic(0.9),V(760,700),1150,1],['tetap',t=>mosquito(t,1.2),V(1150,1250),1000,1]],labels:[['Penelitian','DITES DI KANADA','#5B6C8F','tetap'],['tetap','NYAMUK TETAP GIGIT!','#E5383B']],src:'Studi Univ. Guelph, Kanada (2005): bawang putih tidak mengusir nyamuk'},
 {bg:'#E3F7D9',items:[['Bau',t=>stinkCloud(t,1.5),V(960,960),1150,1],['nggak',t=>xmark(1),V(1150,1250),900,1.2]],labels:[['Bau','BAU BAWANG NGGAK CUKUP','#F2A541']]},
 {plot:true,items:[['kabur',t=>person(0,0,1.6,'#E8505B')+person(170,20,1.4,'#5DB7EA'),V(820,760),1300,1],['bau',t=>stinkCloud(t,1.2),V(1150,1250),1000,1]],labels:[['kabur','YANG KABUR TEMANMU! 🤢','#E5383B']]}],
 q:['TIM BAWANG MENTAH','ATAU TIM LOSION?'],endProp:t=>garlic(0.8)});}
