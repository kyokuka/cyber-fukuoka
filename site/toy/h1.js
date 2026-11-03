(function(){
var D=Drama,R=D.R,A=D.A,blink=D.blink;
function l(w,zh,ja,en,cam,fx,sv){return [w,{zh:zh,ja:ja,en:en},cam,fx||"",sv];}
function box(x,y,w,h,c,o){R(x-.5,y-.5,w+1,h+1,o);R(x,y,w,h,c);}
var SEG=[[0,20,"#D4537E","#ED93B1"],[20,35,"#378ADD","#85B7EB"],[35,46,"#3B6D11","#97C459"],[46,55,"#7F77DD","#AFA9EC"]];
var GOODS=["#ED93B1","#FAC775","#85B7EB","#97C459","#AFA9EC","#F0997B"];
function wall(t,side){for(var c=0;c<55;c++){var x=side?150-1-c:c,top=60*c/55,bot=200-70*c/55,h=bot-top;
  var sg=SEG[0];for(var s=0;s<SEG.length;s++)if(c>=SEG[s][0]&&c<SEG[s][1])sg=SEG[s];
  var edge=(c===sg[0]);
  R(x,top,1,h*.16,edge?"#2C2C2A":sg[2]);
  if(((t/120+sg[0])%60)>1.5&&(c%3===0))R(x,top+h*.05,1,h*.06,"#FFFFFF");
  R(x,top+h*.16,1,h*.5,edge?"#444441":"#E6F1FB");
  if(!edge){for(var r=0;r<3;r++){var gy=top+h*(.2+r*.15);if((c+r*2)%4<2)R(x,gy,1,h*.08,GOODS[(c+r+sg[0])%6]);}R(x,top+h*(.32+0),1,.5,"#B4B2A9");R(x,top+h*.47,1,.5,"#B4B2A9");}
  R(x,top+h*.66,1,h*.34,edge?"#2C2C2A":(c%2?"#5F5E5A":"#6b6a65"));
  if(!edge&&c%2===0)R(x,top+h*.7,1,.5,"#444441");}}
function scene(t,S){var f=S.f;
  if(f.shop){D.toyShop(t,{});if(f.miss)D.miss(99);if(f.chicken){box(86,204,12,9,"#F1EFE8","#B4B2A9");for(var ck=0;ck<4;ck++)R(87+ck*2.5,201+(ck%2),3,3,"#BA7517");}
    D.chP(32,232);D.chC(56,232);D.chK(80,232);D.chT(75,110);return;}
  R(0,0,150,240,"#1a1a24");
  for(var y=0;y<60;y++){var hw=75-y*20/60*1;R(75-hw,y,hw*2,1,y%6<3?"#2a2a33":"#262630");}
  for(var k=0;k<5;k++){var yy=4+k*12,hw2=40-k*6;R(75-hw2,yy,hw2*2,1.5,"#F1EFE8");A(.15);R(75-hw2-4,yy+1.5,hw2*2+8,4,"#FFFFFF");A(1);}
  wall(t,0);wall(t,1);
  box(55,60,40,70,"#3d2a1a","#000000");R(57,63,36,10,"#E24B4A");D.txt("NAKANO",63,65,"#FFFFFF");R(57,76,36,28,"#E6F1FB");for(var g=0;g<8;g++)R(59+g*4,80+(g%3)*7,3,5,GOODS[g%6]);R(57,104,36,26,"#5F5E5A");
  for(var p=0;p<4;p++){var px=((p*23+t*.008*(p%2?1:-1))%36+36)%36+57;R(px,112,2.5,8,"#2C2C3a");R(px+.5,110,1.5,2,"#2C2C3a");}
  for(var y2=130;y2<240;y2++){var w2=40+(y2-130)/110*110;var sh=Math.floor((y2-130)/(4+(y2-130)/12))%2;R(75-w2/2,y2,w2,1,sh?"#B4B2A9":"#D3D1C7");}
  for(var ln=-4;ln<=4;ln++){for(var y3=130;y3<240;y3+=2){var x3=75+ln*(5+(y3-130)/110*15);R(x3,y3,.5,2,"#888780");}}
  A(.15);R(60,140,30,90,"#FFFFFF");A(1);
  R(100,140,50,36,"#3d2a1a");box(102,142,46,12,"#633806","#2C1a0a");D.txt("OLD SHOP",107,145,"#FAC775");
  if(f.tonk)D.tonk(137,186,{hat:"#633806",coat:"#854F0B",coatD:"#633806",glasses:true});
  box(98,176,52,38,"#854F0B","#2C1a0a");R(98,176,52,2,"#BA7517");
  A(.55);box(102,160,20,16,"#E6F1FB","#888780");A(1);
  if(!f.opened){box(108,165,8,8,"#000000","#FAC775");D.txt("?",110.5,166.5,"#FAC775");if(blink(400))D.sparkle(112,164,5);}
  else{box(108,167,8,6,"#000000","#FAC775");R(107,163,10,2,"#000000");box(106,156,10,7,"#F1EFE8","#B4B2A9");R(107.5,158,7,.5,"#444441");R(107.5,160,5,.5,"#444441");}
  if(f.miss)D.miss(99);
  D.chP(32,232);D.chC(56,232);D.chK(80,232);
  if(f.suit){box(88,214,10,16,"#378ADD","#0C447C");R(92,211,2,3,"#444441");R(88,220,10,1,"#0C447C");}
  D.chT(75,110);}
D.start({scene:scene,names:Object.assign({},D.toyMeta.names,{O:"▶ 打工人豚骨"}),colors:D.toyMeta.colors,pitch:D.toyMeta.pitch,defaultLang:"zh",blip:D.toyBlip,
  cam:{wide:[1,75,120],P:[3,32,196],Px:[4.4,32,188],C:[3.2,56,208],Cx:[5,56,200],K:[3.6,80,212],Kx:[5,80,206],O:[3,134,166],Ox:[4.4,134,158],T:[4,75,106],box:[4,112,166],far:[2.4,75,90],miss:[3,25,62]},
  onLine:function(i,S){var f=S.f;f.shop=i<=7;f.miss=i<=2;f.chicken=i>=3&&i<=4;f.tonk=i>=15;f.opened=i>=19;f.suit=i>=23;f.luck=i>=5;
    if(i===2||i===12||i===21)f.cryP=true;if(i===4||i===7)f.happyP=true;if(i===11)f.errK=true;if(i===23||i===25||i===3)f.happyK=true;},
  onEnd:function(S){var f=S.f;f.tonk=true;f.opened=true;f.suit=true;f.luck=true;f.happyK=true;f.cryP=true;},
  intro:{0:{t:"地点",n:"广州 · 胖虎潮玩",d:"一家卖日本潮玩的小店。店里的吉祥物，就是店长本人。"},
    2:{t:"人物",n:"胖虎",d:"胖虎潮玩店长。最爱潮玩，抽赏连续 99 抽未中，人称「非酋之王」。"},
    3:{t:"人物",n:"小仓",d:"仓库机器人，名字来自日语「倉（くら）」。打包速度第一，找东西倒数第一。"},
    5:{t:"人物",n:"抽抽",d:"店里的常客。第一抽必中，人称「欧皇」，胖虎的天敌。"},
    6:{t:"人物",n:"AI 老师",d:"飘在空中的语言老师，专门插播日语。"},
    8:{t:"地点",n:"东京 · 中野百老汇",d:"1966 年开业的老商场，几百家小店卖手办、漫画和古董玩具，日本收藏圈的圣地。"},
    15:{t:"人物",n:"豚骨",d:"神秘打工人，一共有十二份工。开价永远是一万日元。"}},
  endText:"下集：池袋扭蛋百货，小仓恋爱了？",
  lines:[
l("N","广州，胖虎潮玩。一家卖日本潮玩的小店。","広州。日本のおもちゃを売る小さな店、パンフー。","Guangzhou. Panghu Toys, a little shop for Japanese toys.","wide"),
l("N","胖虎，抽赏连续未中：第 99 抽。","パンフー、連続ハズレ：99回。","Panghu's losing streak: ninety-nine draws.","miss"),
l("P","家人们谁懂啊，第 99 抽，还是毛巾。我破防了。","みんな聞いて。99回目もタオル。もう無理。","Guys. Draw ninety-nine. Another towel. I'm done.","Px"),
l("K","嘀。店长，第 100 抽之前，要不要先吃个炸鸡压压惊？","ピッ。店長、100回目の前に唐揚げでも？","Beep. Manager, fried chicken before draw one hundred?","K"),
l("P","吃！吃饱了才有欧气！","食べる！満腹なら運も来る！","Yes! A full belly brings luck!","Px"),
l("C","店长，听说东京有个「幻之隐藏款」，全世界只有一个。","店長、東京に「幻のシークレット」があるって。世界に一つだけ。","Manager, Tokyo has a phantom secret. Only one in the world.","C"),
l("T","幻 ＝ まぼろし ＝ 传说中、几乎见不到的","幻（まぼろし）＝传说中的","Maboroshi = phantom, legendary","T","pop",{zh:"幻，日语读まぼろし。传说中、几乎见不到的东西。",ja:"幻、まぼろし。",en:"Maboroshi. Phantom."}),
l("P","非酋的命运，今天就要改写！小仓，订机票！","ハズレ人生、今日で終わりだ！クラ、航空券！","My unlucky life ends today! Kura, book the flights!","Px","boom"),
l("N","东京，中野百老汇。日本收藏圈的圣地。","東京・中野ブロードウェイ。コレクターの聖地。","Tokyo. Nakano Broadway. A holy land for collectors.","far","flash"),
l("K","嘀。到了。行李箱……也到了吗？","ピッ。到着。スーツケースは……？","Beep. Arrived. And the suitcase...?","K"),
l("P","你别吓我。钱全在里面。","やめて。お金、全部あの中だよ。","Don't scare me. All our money is in there.","Px","shock"),
l("K","……行李箱，丢了。","……スーツケース、なくしました。","...The suitcase is lost.","Kx","glitch"),
l("P","我是冤种本种。","俺、カモすぎる。","I am the biggest sucker alive.","Px","shake"),
l("T","冤种 ＝ カモ ＝ sucker","カモ＝冤种（容易被坑的人）","Sucker = 冤种 = カモ","T","pop",{zh:"冤种，日语叫カモ，本意是鸭子。",ja:"カモ。",en:"Sucker."}),
l("C","店长，那家老店好像有线索。","店長、あの古い店に手がかりがありそう。","Manager, that old shop might have a clue.","C"),
l("O","欢迎光临。本店老板，豚骨。","いらっしゃい。店主のトンコツだ。","Welcome. I'm the owner. Tonkotsu.","Ox","flash"),
l("O","副业。我一共有十二份工。","副業だ。仕事は全部で十二個ある。","It's a side job. I have twelve jobs.","O"),
l("O","幻之隐藏款的线索？在这个盒子里。一万日元。","幻のシークレットの手がかり？この箱の中だ。一万円。","A clue to the phantom secret? It's in this box. Ten thousand yen.","box"),
l("P","我身上就剩一万日元……买了！","残り一万円……買う！","I've only got ten thousand yen left... I'll take it!","Px","boom"),
l("N","打开盒子。","開封。","Opening the box.","box","flash"),
l("P","……一张纸条：「下一条线索在池袋。」","……メモが一枚。「次の手がかりは池袋」。","...One note. The next clue is in Ikebukuro.","Px","shock"),
l("P","一万日元，买了张纸？！","一万円で、紙一枚！？","Ten thousand yen... for a piece of paper?!","Px","shake"),
l("O","打工人，也要恰饭。","働く者も、メシは食う。","A working man's gotta eat.","Ox"),
l("K","嘀！找到了！行李箱！","ピッ！見つけました！スーツケース！","Beep! Found it! The suitcase!","K","flash"),
l("P","在哪？！","どこ！？","Where?!","Px"),
l("K","在池袋。失物招领处。","池袋の、忘れ物センターです。","At the lost and found. In Ikebukuro.","K"),
l("P","……所以我们本来就要去池袋。","……結局、池袋に行くのね。","...So we were going to Ikebukuro anyway.","P"),
l("T","失物招领 ＝ 忘れ物センター","忘れ物（わすれもの）＝失物","Lost and found = 失物招领 = 忘れ物センター","T","pop",{zh:"失物招领，日语叫忘れ物センター。在日本丢东西，大概率能找回来。",ja:"忘れ物センター。",en:"Lost and found."})]});
})();
