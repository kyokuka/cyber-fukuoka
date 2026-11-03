(function(){
var D=Drama;
D.start({scene:function(t,S){D.stall(t,S,S.f.served);},
  cam:D.stallCam,names:{O:"▶ 豚骨老板"},
  onLine:function(i,S){S.f.served=i>=5;},
  onEnd:function(S){S.f.served=true;},
  endText:"未完待续……下集：一万日元的拉面，A 付得起吗？",
  lines:[
["N","Nakasu. A ramen stall by the river.","中洲，河边的拉面屋台。","wide",""],
["O","Welcome! What can I get you?","欢迎光临！要点什么？","O",""],
["A","Two ramen, please.","两碗拉面，谢谢。","A",""],
["T","Number + thing + please!","叮！数量 + 东西 + please = 万能点单句，走遍全世界","T","pop","Two ramen, please."],
["O","Hard noodles or soft noodles?","面要硬的还是软的？","O",""],
["A","Hard, please.","硬的，谢谢。","A",""],
["O","...Wait. B? Is that you?","……等等，B？是你吗？","Ox","flash"],
["B","...Hello, Tonkotsu.","……好久不见，豚骨。","Bx","glitch"],
["A","You two know each other?!","你们俩认识？！","Ax","shock"],
["B","He is my ex.","他是我前任。","B",""],
["T","ex = 前任!","短剧必备单词 ex，背它！考试不考，但追剧天天用","T","pop","Ex. My ex."],
["O","She left me... for the cloud.","她离开了我……投奔了云端。","O","sad"],
["T","cloud = 云 / 云端!","cloud 既是天上的云，也是云服务器。这个双关梗，老师给满分","T","pop","Cloud."],
["A","Um... how much is it?","呃……多少钱？","A",""],
["T","How much is it? = 多少钱?","问价必备句。买东西、吃拉面、砍价，全靠它","T","pop","How much is it?"],
["O","For her? Free.","她吃？免费。","O","love"],
["O","For you... ten thousand yen.","你吃……一万日元。","Ox","flash"],
["A","WHAT?!","什么？！","Ax","shock"],
["B","Kaedama, please. Two.","替玉，两份。","Bx","blush"],
["T","Kaedama = 加面!","替玉 = 加一份面。在福冈说出这个词，老板会对你刮目相看（除了这个老板）","T","pop","Kaedama, please!"]]});
})();
