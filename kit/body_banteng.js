// ===== Masa Sih Banteng Ngamuk Lihat Warna Merah? =====
{const E=DUR+0.2;
const bc=at('Masa sih')-0.1, b1=at('Faktanya')-0.15, b4=at('Plot')-0.2, b6=at('Kamu tim')-0.15;
sHook({t0:0,t1:bc,key:'WARNA MERAH?',keyAt:at('merah'),keySize:90,prop:t=>bull(t,1,{angry:true}),ps:1.15,py:1050,bg:'#3A1616',glow:'#E5383B',particle:(t,i)=>`<circle r="8" fill="#E5383B"/>`,surpriseAt:at('ngamuk'),
 extra:t=>popAt(t,at('merah'),cape(t,1),V(1250,1350),900,0.9)});
sCard({t0:bc,t1:b1,lines:['MASA SIH','BANTENG NGAMUK','LIHAT MERAH?'],yukAt:bc+0.6,hold:t=>g('scale(.3)',cape(t,1))});
const tBw=at('buta'),tBi=at('biasa');
sFact({t0:b1,t1:b4,bg:'#2A2A2A',glow:'#6E6E6E',
 world:t=>{let s=popAt(t,b1+0.1,eyeView(1.6),960,V(800,760),1);
  if(t>tBw)s+=g(tr(V(700,640),1250,0.9),cape(t,1,'#E5383B',0.3))+g(tr(V(1150,1220),1250,0.9),cape(t,1,'#8A8A7A',0.3))+popAt(t,tBi,`<path d="M-50,0L50,0" stroke="#fff" stroke-width="18" stroke-linecap="round"/><path d="M-50,-30L50,-30M-50,30L50,30" stroke="#fff" stroke-width="10" opacity=".0"/>`,960,1330,1)+popAt(t,tBi,`<text text-anchor="middle" font-family="Inter" font-weight="800" font-size="110" fill="#fff">=</text>`,960,1370,1);
  return s;},
 labels:[{at:tBw,txt:'BANTENG BUTA WARNA MERAH',bg:'#5B6C8F',size:V(46,52),until:tBi},{at:tBi,txt:'MERAH = BIASA AJA',bg:'#E5383B'}],src:'Ilustrasi disederhanakan'});
sPlot({t0:b4,t1:b6,bg:'#14301F',glow:'#3BB273',
 world:t=>{const p0=b4+1.6;if(t<p0)return '';const tw=at('Warna apa');
  const col=t>tw?['#2C8FC4','#F2A541','#3BB273'][Math.floor((t-tw)*1.5)%3]:'#E5383B';
  return popAt(t,p0,bull(t,0.8,{angry:true,run:true}),V(700,600),1200,1)+g(tr(V(1250,1330),950,0.9),cape(t,1,col,2.2));},
 labels:[{at:at('gerakan'),txt:'YANG DIKEJAR: GERAKANNYA',bg:'#3BB273',size:V(46,52),until:at('Warna apa')},{at:at('Warna apa'),txt:'WARNA APA PUN!',bg:'#F2A541',fill:OL}]});
sCTA({t0:b6,t1:E,ln:'TIM BERANI',ls:'TIM BERANI',rn:'TIM KABUR',rs:'TIM KABUR',lp:t=>cape(t,0.6),rp:t=>bull(t,0.4,{}),aAt:at('berani'),bAt:at('kabur'),vsAt:at('atau',b6),commentAt:at('Tulis'),lc:'#E5383B',rc:'#3BB273'});
}
const THUMB={t:2.0,lines:['MASA SIH','BANTENG NGAMUK','LIHAT MERAH?']};
