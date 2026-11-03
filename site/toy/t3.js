(function(){
var D=Drama,R=D.R,A=D.A,blink=D.blink;
function l(w,zh,ja,en,cam,fx,sv){return [w,{zh:zh,ja:ja,en:en},cam,fx||"",sv];}
var BX=["#ED93B1","#85B7EB","#FAC775","#97C459","#AFA9EC","#F0997B"];
function scene(t,S){var f=S.f;
  D.toyShop(t,{table:true});
  for(var k=0;k<12;k++){var x=56+(k%6)*8.5,y=164+Math.floor(k/6)*7,open=k<f.opened;
    R(x-.5,y-.5,8,7,"#444441");R(x,y,7,6,open?"#D3D1C7":BX[k%6]);R(x,y,7,1,open?"#B4B2A9":"#FFFFFF");if(!open)R(x+3,y,1,6,"#F1EFE8");else R(x+1,y+2,5,.5,"#888780");}
  if(f.dupes){for(var d=0;d<5;d++){R(8+d*3,206-d*4,7,6,"#ED93B1");R(8+d*3,206-d*4,7,1,"#FFFFFF");}}
  R(20,192,14,22,"#5F5E5A");R(18,190,18,3,"#444441");R(23,196,.5,16,"#444441");R(27,196,.5,16,"#444441");R(31,196,.5,16,"#444441");
  if(f.trash){R(24,184,8,7,"#000000");R(24,184,8,2,"#FAC775");D.txt("S",26.5,186,"#FAC775");D.sparkle(28,184,14);}
  if(f.secret){R(f.secretX,196,10,9,"#000000");R(f.secretX,196,10,2,"#FAC775");D.txt("S",f.secretX+3.5,198.5,"#FAC775");D.sparkle(f.secretX+5,196,10);}
  D.chP(44,232);D.scalper(80,false);D.chC(112,232);D.chK(134,232);D.chT(75,118);}
D.start({scene:scene,names:D.toyMeta.names,colors:D.toyMeta.colors,pitch:D.toyMeta.pitch,
  cam:{wide:[1,75,120],P:[3,44,196],Px:[4.4,44,188],O:[3,80,196],Ox:[4.4,80,190],C:[3.2,112,208],Cx:[5,112,200],K:[3.6,134,212],Kx:[5,134,206],T:[4,75,114],table:[2.8,80,174],trash:[3,32,192]},
  onLine:function(i,S){var f=S.f;f.luck=true;f.opened=i<5?0:12;f.dupes=i>=6;f.trash=i===9;f.secret=i>=10;f.secretX=i>=12?93:28;
    if(i===6)f.shakeO=true;if(i>=12&&i<=14)f.loveO=true;if(i===10)f.happyP=true;if(i===14)f.happyP=true;if(i===9||i===10)f.happyK=true;},
  onEnd:function(S){var f=S.f;f.luck=true;f.opened=12;f.dupes=true;f.secret=true;f.secretX=93;f.loveO=true;f.happyP=true;f.happyK=true;},
  endTitle:"第一季 · 待续",endText:"下集：黄牛豚骨，入坑之后……",
  lines:[
l("N","新盲盒到货，一整盒十二个。","新作ブラインドボックス。一箱十二個。","New blind boxes. Twelve in a case.","table"),
l("O","隐藏款我要了。一整盒，我买。","シークレットは俺のものだ。一箱買う。","The secret is mine. I'll buy the whole case.","Ox","flash"),
l("P","一盒只有一个隐藏款……","一箱にシークレットは一個だけ……","There's only one secret per case...","P",""),
l("T","隐藏款 ＝ シークレット ／ 盲盒 ＝ ブラインドボックス","シークレット＝隐藏款＝secret","Secret = 隐藏款 = シークレット","T","pop",{zh:"隐藏款叫シークレット，盲盒叫ブラインドボックス。",ja:"シークレット。ブラインドボックス。",en:"Secret. Blind box."}),
l("K","豚骨开箱：一号到十二号……","トンコツ開封：一個目から十二個目……","Tonkotsu opens: one to twelve...","table",""),
l("K","全是普通款。还重复了五个。","全部ノーマル。ダブり五個。","All normal. Five duplicates.","table","boom"),
l("O","不可能！","ありえない！","Impossible!","Ox","shake"),
l("T","重复 ＝ ダブり ＝ duplicate","ダブり＝重复＝duplicate","Duplicate = 重复 = ダブり","T","pop",{zh:"重复款叫ダブり。豚骨的重复款已经能开店了。",ja:"ダブり。",en:"Duplicate."}),
l("P","等等，第一个盒子呢？你扔了？","待って、最初の箱は？捨てた？","Wait, the first box? Did you throw it away?","Px",""),
l("K","嘀。垃圾桶里……找到了。隐藏款。","ピッ。ゴミ箱の中に……ありました。シークレット。","Beep. In the trash... found it. The secret.","trash","boom"),
l("P","小仓！你第一次找到箱子了！","クラ！初めて箱を見つけたね！","Kura! You found a box for the first time!","P",""),
l("O","那是我的！","それは俺のだ！","That's mine!","Ox","shake"),
l("O","……可是，它好可爱。","……でも、かわいい。","...But it's so cute.","Ox",""),
l("O","我不卖了。这是我的宝贝。","売らない。これは俺の宝物だ。","I won't resell it. This is my treasure.","O",""),
l("C","黄牛……变成真粉丝了。","転売ヤーが……本当のファンになった。","The scalper... became a real fan.","Cx",""),
l("P","欢迎入坑！","沼へようこそ！","Welcome to the rabbit hole!","P","flash"),
l("T","入坑 ＝ 沼（ぬま）＝ rabbit hole","沼（ぬま）にハマる＝入坑","Rabbit hole = 入坑 = 沼","T","pop",{zh:"入坑，日语说沼にハマる，掉进沼泽。三集学了：転売ヤー、買い占め、限定、シークレット、ダブり、沼！",ja:"沼へようこそ！",en:"Welcome to the rabbit hole!"})]});
})();
