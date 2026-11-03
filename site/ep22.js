(function(){
var D=Drama,G=D.gz;
var EPD={scene:G.scene,W:300,H:480,
  over:function(t,S){if(S.f.ad)G.ad(t,S);},
  gb:["D","P","N"],
  voices:{D:["Daniel","Google UK English Male","Microsoft George","Microsoft Thomas","Arthur"],
          P:["Arthur","Oliver","Jamie","Google UK English Male","Microsoft Ryan","Daniel"],
          N:["Serena","Kate","Stephanie","Martha","Google UK English Female","Microsoft Sonia","Microsoft Libby","Microsoft Hazel"],
          H:["Fred","Ralph","Bruce","Microsoft Mark","Alex","Google US English"]},
  names:{D:"▶ 毛毛雨先生",P:"▶ 胖虎 · 现场解说",H:"▶ 虾饺伯",N:"// NARRATOR"},
  colors:{D:"#BDBBB3",P:"#E8913A",H:"#E3C58E"},
  pitch:{D:.6,P:.85,N:1.05,H:.45},
  cam:{wide:[1,150,240],sky:[1.8,190,140],A:[3,130,405],Ax:[4.6,130,392],B:[3,178,405],two:[2,152,395],
       D:[3,130,360],Dx:[4.6,130,345],H:[3,248,405],Hx:[4.4,262,400],P:[3.6,48,225],ad:[1,150,240]},
  onLine:function(i,S){var f=S.f,dz=G.dz;
    f.ad=i<2||i>26;if(i===1)f.spin=true;if(i===1||i>26)f.pop=true;i-=2;
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
  onEnd:function(S){S.f.ad=true;S.f.pop=true;},
  endText:"未完待续……下集：英国云第一次遇上回南天，墙壁在流汗。",
  lines:[
["P","Good evening. Tonight's weather is sponsored by Panghu Online Gacha.","晚上好。今晚的天气，由胖虎家扭蛋机赞助播出。","ad","pop"],
["P","Turn the handle. Open the capsule. Never a disappointment. Well... almost never.","转一转，开一颗。从不让人失望。嗯……几乎从不。","ad",""],
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
["P","I'm fine means: please stop asking. That's all from Guangzhou. Bring an umbrella!","I'm fine = 别问了。广州前线报道完毕，记得带伞！","P","pop"],
["P","Panghu Online Gacha. One draw a day is plenty. Just ask Uncle Har Gow.","胖虎家扭蛋机。一天一发，足够了。不信你问虾饺伯。","ad","pop"],
["P","Search Panghu Gacha on WeChat. Rain not included.","微信搜索「胖虎家扭蛋机」。雨，不在奖品里。\n理性抽赏 · 未满 18 岁请勿参与","ad",""]]};
var YUE=[["各位晚上好。今晚嘅天氣，由胖虎家扭蛋機贊助播出。", "Gok wai maan seung hou. Gum maan geh tin hei, yau Pong Fu Ga Nau Daan Gei jaan jo bo chut."], ["扭一扭，開一粒。從來唔會失望。嗯……差唔多從來。", "Nau yat nau, hoi yat lup. Chung loi mm wooi sut mong. Mmm... cha mm daw chung loi."], ["二零七七年，廣州。十一月。廿八度。", "Yi ling chat chat nin, Gwong Jau. Sap yat yuet. Ya baat dou."], ["跟住，嚟咗一朵雲。由倫敦嚟嘅。", "Gun jue, lai jaw yat daw wun. Yau Lun Dun lai geh."], ["晚上好。真係唔好意思。", "Maan seung hou. Jun hai mm hou yee see."], ["我好似……落咗喺你身上。", "Ngaw hou chee... lok jaw hai nei sun seung."], ["冇所謂！好熱呀，多謝你！", "Mo saw wai! Hou yit ah, daw jeh nei!"], ["多謝我？從來冇人多謝過我。", "Daw jeh ngaw? Chung loi mo yun daw jeh gwaw ngaw."], ["各位觀眾，一朵英國雲……俾人多謝咗！佢完全唔知點算！", "Gok wai goon jung, yat daw Ying Gwok wun... bei yun daw jeh jaw! Kui yoon choon mm jee dim soon!"], ["你係邊個？", "Nei hai bin gaw?"], ["我係倫敦嘅天氣。嚟度假嘅。", "Ngaw hai Lun Dun geh tin hei. Lai dou ga geh."], ["我係廣州嘅天氣。", "Ngaw hai Gwong Jau geh tin hei."], ["啊。又熱又濕？", "Ah. Yau yit yau sup?"], ["非常。", "Fei seung."], ["好極。同茶壺入面一模一樣。", "Hou gik. Tung cha woo yup min yat mo yat yeung."], ["英國人講 marvellous，可能即係「衰到爆」。各位，睇佢個樣，唔好聽佢把口！", "Ying Gwok yun gong marvellous, haw nung jik hai sui dou baau. Gok wai, tai kui gaw yeung, mm hou teng kui ba hau!"], ["飲茶啦！一盅兩件。", "Yum cha la! Yat jung leung gin."], ["再抽一發。一日，淨係抽一發。", "Joi chau yat faat. Yat yut, jing hai chau yat faat."], ["抽一發，就收手。各位，呢個叫自律！", "Chau yat faat, jau sau sau. Gok wai, nee gaw giu jee lut!"], ["F 賞。又係。", "F seung. Yau hai."], ["一把遮。送俾你。", "Yat ba jeh. Sung bei nei."], ["一把遮。送俾一朵雲。幾好吖。", "Yat ba jeh. Sung bei yat daw wun. Gei hou ah."], ["點解落雨呀？！", "Dim gaai lok yu ah?!"], ["佢講 lovely，天就落雨！唔係開心，係英國式客氣！", "Kui gong lovely, tin jau lok yu! Mm hai hoi sum, hai Ying Gwok sik haak hei!"], ["你冇嘢吖嘛？", "Nei mo yeh ah ma?"], ["我冇事。", "Ngaw mo see."], ["「我冇事」即係：唔好再問。廣州前線報道完畢，記得帶遮！", "Ngaw mo see, jik hai: mm hou joi mun. Gwong Jau chin sin bou dou yoon but, gei duk daai jeh!"], ["胖虎家扭蛋機。一日一發，夠晒數。唔信問蝦餃伯。", "Pong Fu Ga Nau Daan Gei. Yat yut yat faat, gau saai sou. Mm sun mun Ha Gau Baak."], ["微信搜「胖虎家扭蛋機」。落雨，唔包喺獎品入面。", "Mei Sun sau Pong Fu Ga Nau Daan Gei. Lok yu, mm baau hai jeung bun yup min."]];
EPD.dub=true;EPD.lines.forEach(function(l,k){l[6]=YUE[k][0];l[7]=YUE[k][1];});
Drama.start(EPD);
})();
