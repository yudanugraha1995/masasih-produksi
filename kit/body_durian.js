// NEWFX
{mkFunny({thumb:['MAKAN DURIAN','BIKIN BADAN','PANAS?'],key:'BADAN PANAS?',keyWord:'badanmu',hookProp:t=>durianFruit(t,1),particle:(t,i)=>stinkCloud(t,0.4),
 bounds:[0,'Faktanya','Plot','Penelitian'],endWord:'Kamu tim',
 sec:[{bg:'#CFF1FF',items:[['Faktanya',t=>durianFruit(t,0.9),V(800,740),1150,1],['gerah',t=>thermo(t,1.1,0.85),V(1150,1250),1150,1]],labels:[['Faktanya','TINGGI KALORI & GULA','#F2A541','gerah'],['gerah','BADAN TERASA GERAH','#E5383B']]},
 {plot:true,items:[['alkohol',t=>durianFruit(t,0.9),V(790,740),1150,1],['alkohol',t=>wineGlass(1.4),V(1160,1250),1150,1]],labels:[['alkohol','JANGAN CAMPUR ALKOHOL!','#E5383B']]},
 {bg:'#FFE1C7',items:[['belerang',t=>label('SENYAWA BELERANG',{size:58,bg:'#B47EDB'}),960,V(820,800),1],['enzim',t=>xmark(1),V(960,960),1200,1.4]],labels:[['enzim','ENZIM PEMECAH ALKOHOL TERHAMBAT','#E5383B']],src:'Maninang dkk., J Agric Food Chem (2009), Univ. Tsukuba'}],
 q:['TIM DURIAN ATAU','TIM MUAL BAUNYA?'],endProp:t=>durianFruit(t,0.7)});}
