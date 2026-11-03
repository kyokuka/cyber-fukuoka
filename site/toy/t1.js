(function(){
var D=Drama,R=D.R,A=D.A,blink=D.blink;
function l(w,zh,ja,en,cam,fx,sv){return [w,{zh:zh,ja:ja,en:en},cam,fx||"",sv];}
function scene(t,S){var f=S.f;
  D.toyShop(t,{});
  if(f.stock){for(var k=0;k<3;k++){R(56+k*13,186,11,12,["#ED93B1","#AFA9EC","#FAC775"][k]);R(56+k*13,186,11,1.5,"#FFFFFF");}D.sparkle(75,186,8);}
  if(f.onBox){R(24,204,24,10,"#BA7517");R(24,204,24,1,"#854F0B");R(35,204,2,10,"#E6F1FB");D.chP(36,206);}else D.chP(36,232);
  if(f.o)D.scalper(f.oLeft?86:84,f.bag);
  D.chK(118,232);if(f.c)D.chC(138,232);D.chT(75,128);}
D.start({scene:scene,names:D.toyMeta.names,colors:D.toyMeta.colors,pitch:D.toyMeta.pitch,
  cam:{wide:[1,75,120],P:[3,36,196],Px:[4.4,36,188],Pb:[3,36,180],Pbx:[4.2,36,170],O:[3,84,196],Ox:[4.4,84,190],K:[3.6,118,212],Kx:[5,118,206],C:[3.2,138,208],T:[4,75,124],door:[2.2,76,110]},
  onLine:function(i,S){var f=S.f;f.o=i>=2;f.bag=i>=2&&i<=10;f.stock=i<=6;f.onBox=i>=10;f.c=i>=13;if(i>=13)f.luck=true;
    if(i===1)f.happyP=true;if(i===11)f.errK=true;if(i===12)f.sad=true;},
  onEnd:function(S){var f=S.f;f.o=true;f.onBox=true;f.c=true;f.luck=true;f.shock=true;},
  endText:"下集：一番赏日，黄牛想包场？",
  lines:[
l("N","广州，胖虎潮玩。限定款到货日。","広州、パンフーのおもちゃ屋。限定品の入荷日。","Guangzhou, Panghu Toys. Limited edition day.","wide"),
l("P","限定款到了！今天一定卖给真正的粉丝！","限定品が来た！本当のファンに売るぞ！","The limited edition is here! Only for real fans!","Px"),
l("O","早上好。我排第一个。","おはよう。一番乗りだ。","Good morning. I'm first in line.","Ox","flash"),
l("P","豚骨？！你怎么在这？","トンコツ！？なんでここに？","Tonkotsu?! Why are you here?","Px","shock"),
l("O","全部，我要了。转卖价：一万日元。","全部買う。転売価格、一万円。","I'll take them all. Resale price: ten thousand yen.","Ox","boom"),
l("T","黄牛 ＝ 転売ヤー（てんばいやー）＝ scalper","転売ヤー（てんばいやー）＝黄牛＝scalper","Scalper = 黄牛 = 転売ヤー","T","pop",{zh:"黄牛，日语叫転売ヤー。日本潮玩圈最讨厌的人。",ja:"転売ヤー、てんばいやー。",en:"Scalper."}),
l("P","小仓！快把限定款藏起来！","クラ！限定品を隠して！","Kura! Hide the limited ones!","P","shake"),
l("K","嘀。藏好了。","ピッ。隠しました。","Beep. Hidden.","K",""),
l("O","我等。等到你们开门。","待つ。開店まで待つ。","I'll wait. Until you open.","O",""),
l("N","八个小时后。","八時間後。","Eight hours later.","wide",""),
l("P","小仓，可以拿出来了。","クラ、出していいよ。","Kura, bring them out.","Pb",""),
l("K","……我藏在哪了？","……どこに隠したっけ？","...Where did I hide them?","Kx","glitch"),
l("O","……我明天再来。","……明日また来る。","...I'll come back tomorrow.","Ox",""),
l("C","店长，限定款在你屁股底下。","店長、限定品はお尻の下ですよ。","Manager, the limited ones are under your butt.","C",""),
l("P","……啊。","……あっ。","...Oh.","Pbx","shock"),
l("T","一番乗り ＝ 第一个到 ／ 限定（げんてい）","一番乗り（いちばんのり）＝第一个到","First in line = 一番乗り","T","pop",{zh:"一番乗り就是第一个到。限定读げんてい。排队圈天天用。",ja:"一番乗り。限定、げんてい。",en:"First in line. Limited edition."})]});
})();
