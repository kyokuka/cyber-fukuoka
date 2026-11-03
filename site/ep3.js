(function(){
var D=Drama;
D.start({scene:function(t,S){D.stall(t,S,true);},
  cam:D.stallCam,names:{O:"▶ 豚骨老板"},
  onLine:function(i,S){S.rainT=(i>=8&&i<=11)?1:0;if(i===4){S.f.coin=true;S.f.shock=true;}if(i===8)S.f.red=true;},
  endText:"未完待续……下集：周末降温，机器人也要买外套？",
  lines:[
["N","Ten thousand yen. For one bowl of ramen.","一万日元。就一碗拉面。","O",""],
["A","Can I pay by card?","可以刷卡吗？","A",""],
["O","Cash only.","只收现金。","Ox","flash"],
["T","Cash only = 只收现金!","屋台现实中真的大多只收现金，去福冈记得带零钱","T","pop","Cash only."],
["A","I only have five hundred yen...","我只有五百日元……","Ax",""],
["T","I only have... = 我只有……","only 放在 have 前面，表示「只有」。穷的时候很常用（老师感同身受）","T","pop","I only have five hundred yen."],
["B","Tonkotsu. Look at the sky.","豚骨。看看天。","Bx","glitch"],
["O","...It's cloudy. So what?","……阴天啊。怎么了？","O",""],
["B","It's going to rain.","要下雨了。","sky","flash"],
["T","be going to = 马上要……","看到有迹象（比如乌云）快要发生的事，用 be going to。老师已经撑伞了","T","pop","It's going to rain."],
["O","No! Rain closes my stall!","不要！一下雨我就得收摊！","Ox","sad"],
["B","Then... it's free?","那么……免费吗？","B",""],
["O","OK, OK! It's free! Stop the rain!","好好好！免费！快让雨停！","O","flash"],
["A","Thank you, B!","谢谢你，B！","A",""],
["B","You're welcome.","不客气。","Bx","blush"],
["T","Thank you → You're welcome","别人说谢谢，标准回答就是 You're welcome","T","pop","Thank you. You're welcome."],
["O","...Come again.","……欢迎再来。","O","sad"],
["T","Come again = 欢迎再来","老板嘴上说欢迎再来，心里在下雨","T","pop","Come again!"]]});
})();
