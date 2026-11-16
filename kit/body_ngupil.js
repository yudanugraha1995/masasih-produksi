// NEWFX
{mkFunny({thumb:['SERING NGUPIL','LUBANG HIDUNG','JADI GEDE?'],key:'HIDUNG GEDE?',keyWord:'lubang',hookProp:t=>nose(t,1.3,0),particle:(t,i)=>fingerUp(0.4),
 bounds:[0,'Tenang','Tapi','Plot'],endWord:'Kamu ngaku',
 sec:[{bg:'#CFF1FF',items:[['Tenang',t=>nose(t,1.2,0),V(960,960),1150,1],['melar!',t=>xmark(1),V(1150,1250),850,1.1]],labels:[['Tenang','LUBANGNYA NGGAK MELAR!','#3BB273']]},
 {bg:'#FFE1C7',items:[['kuku',t=>fingerUp(1),V(800,740),1150,1,-15],['mimisan',t=>bloodDrop?bloodDrop(1):'',V(1150,1250),1150,1],['infeksi',t=>bacterium(1,'#C77DDB',0,'evil',t),V(1150,1250),850,1]],labels:[['kuku','BISA MIMISAN & INFEKSI','#E5383B']]},
 {plot:true,items:[['tikus',t=>mouse(t,1),V(780,700),1200,1],['otak!',t=>brain(t,1,'sad'),V(1150,1250),1100,1],['tisu',t=>tissue(1),V(960,960),1450,1]],labels:[['tikus','STUDI 2022 (DI TIKUS)','#B47EDB','tisu'],['tisu','MENDING PAKAI TISU','#3BB273']],src:'Griffith University (2022), Scientific Reports: penelitian pada tikus'}],
 q:['NGAKU DEH,','SEHARI BERAPA KALI?'],endProp:t=>tissue(0.8)});}
