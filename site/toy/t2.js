(function(){
var D=Drama,R=D.R,A=D.A,blink=D.blink;
function l(w,zh,ja,en,cam,fx,sv){return [w,{zh:zh,ja:ja,en:en},cam,fx||"",sv];}
function scene(t,S){var f=S.f;
  D.toyShop(t,{kuji:true});
  if(f.towels>0){for(var k=0;k<f.towels;k++){R(18,212-k*3,20,3,k%2?"#B5D4F4":"#F1EFE8");}}
  if(f.prizeA){R(108,194,12,10,"#FAC775");R(108,194,12,2,"#FFFFFF");D.sparkle(114,194,6);}
  if(f.last){R(84,190,16,14,"#D4537E");R(84,190,16,2,"#F4C0D1");R(91,188,2,16,"#FAC775");D.sparkle(92,190,12);}
  D.chP(40,232);D.chC(96,232);D.chK(124,232);D.chT(75,120);}
D.start({scene:scene,names:D.toyMeta.names,colors:D.toyMeta.colors,pitch:D.toyMeta.pitch,
  cam:{wide:[1,75,120],P:[3,40,200],Px:[4.4,40,192],C:[3.2,96,208],Cx:[5,96,200],K:[3.6,124,212],Kx:[5,124,208],T:[4,75,118],board:[2.2,79,66],two:[2.4,68,205]},
  onLine:function(i,S){var f=S.f;f.luck=true;f.prizeA=i>=4;f.towels=i>=8?10:0;f.last=i>=15;
    if(i===4||i===15)f.cap=true;if(i===9||i===16)f.cryP=true;if(i===7||i===11)f.happyP=true;if(i===15)f.happyK=true;},
  onEnd:function(S){var f=S.f;f.luck=true;f.prizeA=true;f.towels=10;f.last=true;f.cryP=true;},
  endText:"下集：盲盒十二连，隐藏款到底在哪？",
  lines:[
l("N","胖虎潮玩，一番赏日。","パンフーのおもちゃ屋。一番くじの日。","Panghu Toys. Ichiban Kuji day.","board"),
l("T","一番赏 ＝ 一番くじ（いちばんくじ）＝ Ichiban Kuji","一番くじ（いちばんくじ）＝一番赏","Ichiban Kuji = 一番赏 = 一番くじ","T","pop",{zh:"一番赏。日语叫一番くじ。",ja:"一番くじ、いちばんくじ。",en:"Ichiban Kuji."}),
l("C","我抽一张。","一回お願いします。","One ticket, please.","C"),
l("K","嘀。请抽。","ピッ。どうぞ。","Beep. Go ahead.","K"),
l("C","……A 赏。","……A賞です。","...A Prize.","Cx","flash"),
l("P","第一抽就 A 赏？！","一回目でA賞！？","A Prize on the first try?!","Px","shock"),
l("T","A 赏 ＝ A賞（エーしょう）＝ A Prize","A賞（エーしょう）＝A赏＝A Prize","A Prize = A赏 = A賞","T","pop",{zh:"A赏。第一抽就中的人，中文叫欧皇。",ja:"A賞、エーしょう。",en:"A Prize."}),
l("P","我也抽！十连！","俺も！十回！","My turn! Ten tickets!","P","boom"),
l("K","结果：E 赏，E 赏……十张全是 E 赏。","結果：E賞、E賞……全部E賞です。","Result: E, E... all ten are E Prize.","K",""),
l("P","十条毛巾……","タオル十枚……","Ten towels...","Px",""),
l("T","再来一次 ＝ もう一回 ＝ One more time!","もう一回（もういっかい）＝再来一次","One more time! = 再来一次 = もう一回","T","pop",{zh:"再来一次。说这句的人，通常已经输了。",ja:"もう一回！",en:"One more time!"}),
l("P","再来一次！","もう一回！","One more time!","Px","shake"),
l("K","只剩最后一张了。","残り一枚です。","Only one ticket left.","Kx",""),
l("T","最后赏 ＝ ラストワン賞 ＝ Last One Prize","ラストワン賞＝最后赏＝Last One Prize","Last One Prize = 最后赏 = ラストワン賞","T","pop",{zh:"最后赏。抽到最后一张的人，额外送大奖。",ja:"ラストワン賞。",en:"Last One Prize."}),
l("C","那我抽最后一张。","じゃあ、最後の一枚を。","Then I'll take the last one.","C",""),
l("K","最后赏，归抽抽。","ラストワン賞、チョウチョウさんです。","The Last One Prize goes to Chouchou.","Cx","boom"),
l("P","…………","…………","......","Px","",{zh:"呜。",ja:"うう。",en:"Ugh."})]});
})();
