(function(){
var D=Drama,G=D.gz;
Drama.start({scene:G.scene,W:300,H:480,
  gb:["D","P","N"],
  voices:{D:["Daniel","Google UK English Male","Microsoft George","Microsoft Thomas","Arthur"],
          P:["Arthur","Oliver","Jamie","Google UK English Male","Microsoft Ryan","Daniel"],
          N:["Serena","Kate","Stephanie","Martha","Google UK English Female","Microsoft Sonia","Microsoft Libby","Microsoft Hazel"],
          H:["Fred","Ralph","Bruce","Microsoft Mark","Alex","Google US English"]},
  names:{D:"▶ 毛毛雨先生",P:"▶ 胖虎 · 现场解说",H:"▶ 虾饺伯",N:"// NARRATOR"},
  colors:{D:"#BDBBB3",P:"#E8913A",H:"#E3C58E"},
  pitch:{D:.6,P:.85,N:1.05,H:.45},
  cam:{wide:[1,150,240],sky:[1.8,190,140],A:[3,130,405],Ax:[4.6,130,392],B:[3,178,405],two:[2,152,395],
       D:[3,130,360],Dx:[4.6,130,345],H:[3,248,405],Hx:[4.4,262,400],P:[3.6,48,225]},
  onLine:function(i,S){var f=S.f,dz=G.dz;
    if(i<1){dz.tx=340;dz.ty=300;}else if(i<3){dz.tx=200;dz.ty=320;}else{dz.tx=130;dz.ty=350;}
    f.hype=true;
    if(i>=3)f.dripA=true;
    if(i===4)f.smileA=true;
    if(i>=9&&i<19)f.fanB=true;
    if(i===15||i===16)f.phoneH=true;
    if(i===17||i===18)f.prizeH=true;
    if(i>=19)f.umbD=true;
    if(i===20)f.shockH=true;
    if(i===5||i===12||i===19||i===23)f.browD=true;
    S.rainT=i>=19?1:0;},
  onEnd:function(S){S.f.dripA=true;S.f.umbD=true;S.f.browD=true;S.rainT=1;},
  endText:"未完待续……下集：英国云第一次遇上回南天，墙壁在流汗。",
  lines:[
["N","Guangzhou, 2077. November. Twenty-eight degrees.","2077 年，广州。十一月。28 度。","wide",""],
["N","Then, a cloud arrived. From London.","然后，来了一朵云。从伦敦来的。","sky",""],
["D","Good evening. Terribly sorry.","晚上好。实在抱歉。","D",""],
["D","I appear to be raining on you.","我好像……下在你身上了。","two",""],
["A","It's OK! It's so hot. Thank you!","没事！太热了，谢谢你！","A",""],
["D","Thank you? Nobody has ever thanked me.","谢我？从来没人谢过我。","Dx",""],
["P","Ladies and gentlemen, a British cloud has been thanked. He has no idea what to do!","各位观众，一朵英国云……被人道谢了！他完全不知所措！","P","pop"],
["B","Who are you?","你是谁？","B",""],
["D","I'm the weather of London. I'm on holiday.","我是伦敦的天气。来度假的。","D",""],
["B","I'm the weather of Guangzhou.","我是广州的天气。","B",""],
["D","Ah. Hot and wet?","啊。又热又湿？","Dx",""],
["B","Very.","非常。","B",""],
["D","Marvellous. Just like the inside of a teapot.","妙极了。跟茶壶里面一模一样。","Dx",""],
["P","Marvellous! In British English, that can mean terrible. Watch the face, not the word!","marvellous（妙极了）在英式英语里可能是「糟透了」。各位，看脸，别看词！","P","pop"],
["H","Yum cha! One pot of tea, two dim sum.","饮茶啦！一盅两件。","H",""],
["H","And one draw a day. Only one.","再抽一发。一天，只抽一发。","Hx",""],
["P","One draw, and he stops. That's discipline, folks!","抽一发，就收手。各位，这叫自律！","P","pop"],
["H","F prize. Again.","F 赏。又是。","Hx",""],
["H","An umbrella. For you.","一把伞。送你。","H",""],
["D","An umbrella. For a cloud. Lovely.","一把伞。送给一朵云。真好。","Dx",""],
["A","Why is it raining?!","怎么下起雨来了？！","Ax","shock flash"],
["P","He said lovely, and now it's raining! That is not lovely. That is British!","他嘴上说 lovely，天上就下雨！那不是开心，那是英国式客气！","P","pop"],
["A","Are you OK?","你还好吗？","A",""],
["D","I'm fine.","我很好。","Dx","boom"],
["P","I'm fine means: please stop asking. That's all from Guangzhou. Bring an umbrella!","I'm fine = 别问了。广州前线报道完毕，记得带伞！","P","pop"]]});
})();
