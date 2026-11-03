(function(){
var D=Drama,R=D.R,A=D.A,blink=D.blink;
function l(w,zh,ja,en,cam,fx,sv){return [w,{zh:zh,ja:ja,en:en},cam,fx||"",sv];}
var BX=["#ED93B1","#85B7EB","#FAC775","#97C459","#AFA9EC","#F0997B"];
function scene(t,S){var f=S.f;
  D.toyShop(t,{table:true});
  for(var k=0;k<12;k++){var x=57+(k%6)*8,y=162+Math.floor(k/6)*7,open=k<f.opened;
    R(x,y,7,6,open?"#D3D1C7":BX[k%6]);R(x,y,7,1,open?"#B4B2A9":"#FFFFFF");if(!open)R(x+3,y,1,6,"#F1EFE8");}
  if(f.dupes){[62,70,78].forEach(function(x){R(x,170,6,6,"#ED93B1");});D.txt("X3",86,170,"#A32D2D");}
  R(20,196,14,18,"#5F5E5A");R(18,194,18,3,"#444441");
  if(f.trash){R(24,190,7,6,"#FFFFFF");D.sparkle(27,190,14);}
  if(f.secret){R(118,198,10,8,"#000000");R(118,198,10,2,"#FAC775");D.txt("S",121,200,"#FAC775");D.sparkle(123,198,10);}
  D.chP(46,232);D.chC(96,232);D.chK(124,232);D.chT(75,120);}
D.start({scene:scene,names:D.toyMeta.names,colors:D.toyMeta.colors,pitch:D.toyMeta.pitch,
  cam:{wide:[1,75,120],P:[3,46,200],Px:[4.4,46,192],C:[3.2,96,208],Cx:[5,96,200],K:[3.6,124,212],Kx:[5,124,208],T:[4,75,118],table:[2.8,80,172],trash:[3,40,196]},
  onLine:function(i,S){var f=S.f;f.luck=true;f.opened=i<4?0:(i===4?1:(i<9?11:12));f.dupes=i>=6&&i<=8;f.trash=i===12;f.secret=i>=12;
    if(i===2||i===8)f.happyP=true;if(i===10)f.cryP=true;if(i===12||i===13)f.happyK=true;if(i>=13)f.happyP=true;if(i===16)f.blushP=true;if(i===15)f.cap=true;},
  onEnd:function(S){var f=S.f;f.luck=true;f.opened=12;f.secret=true;f.happyP=true;f.happyK=true;},
  endTitle:"第一季 · 待续",endText:"胖虎潮玩小剧场，后面几集还在拍！",
  lines:[
l("N","新到的盲盒，一整盒十二个。","新作のブラインドボックス。一箱十二個。","New blind boxes. Twelve in a case.","table"),
l("T","盲盒 ＝ ブラインドボックス ＝ blind box","ブラインドボックス＝盲盒＝blind box","Blind box = 盲盒 = ブラインドボックス","T","pop",{zh:"盲盒。看不到里面是哪个，才叫盲盒。",ja:"ブラインドボックス。",en:"Blind box."}),
l("P","一整盒里一定有一个隐藏款！","一箱に一個はシークレットがあるはず！","There's always one secret in a full case!","Px"),
l("T","隐藏款 ＝ シークレット ＝ secret","シークレット＝隐藏款＝secret","Secret = 隐藏款 = シークレット","T","pop",{zh:"隐藏款。日语叫シークレット。",ja:"シークレット。",en:"Secret."}),
l("K","开始拆。一号……普通款。","開封開始。一個目……ノーマル。","Opening. Number one... normal.","K"),
l("K","二号到十一号……全是普通款。","二個目から十一個目……全部ノーマル。","Two to eleven... all normal.","table",""),
l("P","还重复了三个！","しかも三つダブってる！","And three duplicates!","Px","shock"),
l("T","重复 ＝ ダブり ＝ duplicate","ダブり＝重复＝duplicate","Duplicate = 重复 = ダブり","T","pop",{zh:"重复。日语叫ダブり。",ja:"ダブり。",en:"Duplicate."}),
l("P","最后一个……拜托了！","最後の一個……お願い！","The last one... please!","P",""),
l("K","十二号……普通款。","十二個目……ノーマル。","Number twelve... normal.","Kx","boom"),
l("P","不可能！","ありえない！","Impossible!","Px","shake"),
l("C","店长，你第一个扔掉的盒子呢？","店長、最初に捨てた箱は？","Manager, what about the first box you threw away?","Cx",""),
l("K","嘀。垃圾桶里……找到了！隐藏款！","ピッ。ゴミ箱の中に……ありました！シークレット！","Beep. In the trash... found it! The secret!","trash","boom"),
l("P","小仓！你终于找到一个箱子了！","クラ！ついに箱を見つけたね！","Kura! You finally found a box!","P",""),
l("T","交换 ＝ 交換（こうかん）＝ trade","交換（こうかん）＝交换＝trade","Trade = 交换 = 交換","T","pop",{zh:"交换。重复的拿去换，是盲盒玩家的快乐。",ja:"交換、こうかん。",en:"Trade."}),
l("C","店长，三个重复款跟我换吗？","店長、ダブり三つと交換しませんか？","Manager, want to trade your three duplicates?","Cx",""),
l("P","不换！这是我的宝贝！","交換しない！これは俺の宝物だ！","No trade! This is my treasure!","Px",""),
l("T","下次见 ＝ またね ＝ See you!","入荷・開封・限定・予約・一番くじ・シークレット・ダブり・交換。またね！","See you next time!","T","pop",{zh:"前三集学了：到货、开箱、限定、预订、一番赏、隐藏款、重复、交换。下次见！",ja:"またね！",en:"See you next time!"})]});
})();
