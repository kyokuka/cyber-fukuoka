(function(){
var D=Drama,R=D.R,A=D.A,blink=D.blink;
function l(w,zh,ja,en,cam,fx,sv){return [w,{zh:zh,ja:ja,en:en},cam,fx||"",sv];}
function towels(x,n){for(var k=0;k<n;k++){R(x,212-k*3,18,3,k%2?"#B5D4F4":"#F1EFE8");R(x,212-k*3,18,.5,"#D3D1C7");}}
function scene(t,S){var f=S.f;
  D.toyShop(t,{kuji:true});
  R(58,170,36,4,"#BA7517");box(64,154,24,16,"#E24B4A","#791F1F");R(70,158,12,3,"#501313");R(64,154,24,2,"#F09595");
  if(f.oTowel)towels(98,3);if(f.pTowel)towels(6,f.pTowel);
  if(f.prizeA){R(108,190,14,12,"#FAC775");R(108,190,14,2,"#FFFFFF");R(114,190,2,12,"#E24B4A");D.sparkle(115,190,8);}
  D.miss(f.miss);
  D.chP(30,232);D.scalper(70,false);D.chC(108,232);D.chK(132,232);D.chT(75,118);}
function box(x,y,w,h,c,o){R(x-.5,y-.5,w+1,h+1,o);R(x,y,w,h,c);}
D.start({scene:scene,names:D.toyMeta.names,colors:D.toyMeta.colors,pitch:D.toyMeta.pitch,
  cam:{wide:[1,75,120],P:[3,30,196],Px:[4.4,30,188],O:[3,70,196],Ox:[4.4,70,190],C:[3.2,108,208],Cx:[5,108,200],K:[3.6,132,212],Kx:[5,132,206],T:[4,75,114],board:[2.2,76,72],miss:[3,25,62]},
  onLine:function(i,S){var f=S.f;f.miss=i<10?46:49;f.oTowel=i>=8;f.pTowel=i>=10?6:0;f.prizeA=i>=12;f.luck=true;
    if(i===8)f.sad=true;if(i===9)f.happyP=true;if(i===10)f.cryP=true;if(i>=13&&i<=14)f.shakeO=true;if(i===12)f.cap=true;},
  onEnd:function(S){var f=S.f;f.miss=49;f.oTowel=true;f.pTowel=6;f.prizeA=true;f.luck=true;f.cryP=true;f.sad=true;},
  endText:"下集：盲盒一整盒，黄牛的隐藏款？",
  lines:[
l("N","一番赏日。胖虎今天的目标：A 赏。","一番くじの日。パンフーの目標：A賞。","Ichiban Kuji day. Panghu's goal: the A Prize.","board"),
l("N","胖虎，连续未中：第 46 抽。","パンフー、連続ハズレ：46回。","Panghu's losing streak: 46 draws.","miss",""),
l("O","我要包场。全部八十张。","全部買い占める。八十枚。","I'll buy them all. All eighty tickets.","Ox","flash"),
l("T","买光 ＝ 買い占め（かいしめ）＝ buy them all","買い占め（かいしめ）＝买光＝buy them all","Buy them all = 买光 = 買い占め","T","pop",{zh:"买光，日语叫買い占め。黄牛的必杀技。",ja:"買い占め、かいしめ。",en:"Buy them all."}),
l("P","不行！一人限三张！","ダメ！お一人様三枚まで！","No! Three tickets per person!","Px","shake"),
l("T","限购 ＝ お一人様〇点まで ＝ limit per person","お一人様三枚まで＝每人限三张","Limit three per person = 每人限三张","T","pop",{zh:"日本店里常见：お一人様三点まで，每人限购三个。",ja:"お一人様、三枚まで。",en:"Limit three per person."}),
l("O","……那我抽三张。","……じゃあ三枚。","...Fine. Three tickets.","O",""),
l("K","结果：E 赏，E 赏，E 赏。","結果：E賞、E賞、E賞。","Result: E, E, E.","K",""),
l("O","……三条毛巾。","……タオル三枚。","...Three towels.","Ox",""),
l("P","哈哈！我也抽三张！","ハハ！俺も三枚！","Ha! Three for me too!","P",""),
l("K","毛巾，毛巾，毛巾。连续未中：第 49 抽。","タオル、タオル、タオル。連続ハズレ49回。","Towel, towel, towel. Losing streak: 49.","miss","boom"),
l("C","我抽一张。","一枚ください。","One ticket, please.","C",""),
l("K","……A 赏。","……A賞です。","...A Prize.","Cx","boom"),
l("O","我出一万日元！卖给我！","一万円出す！売ってくれ！","Ten thousand yen! Sell it to me!","Ox","shake"),
l("C","不卖。我是真粉丝。","売りません。本当のファンなので。","Not for sale. I'm a real fan.","Cx",""),
l("T","不卖 ＝ 売りません ＝ Not for sale","売りません（うりません）＝不卖","Not for sale = 不卖 = 売りません","T","pop",{zh:"A赏日语读エーしょう。对黄牛就说：売りません，不卖。",ja:"売りません。",en:"Not for sale."})]});
})();
