(function(){
var D=Drama,R=D.R,A=D.A,blink=D.blink;
function windowView(t,x,dark){R(x,58,26,40,"#5F5E5A");R(x+2,60,22,36,dark?"#185FA5":"#85B7EB");
  for(var k=0;k<4;k++){var cx=((k*29+x*3+t*.03)%60)-10+x,cy=66+k*8,w=12+(k%2)*6;
    var l=Math.max(x+2,cx-w/2),r=Math.min(x+24,cx+w/2);if(r>l){R(Math.round(l),cy,Math.round(r-l),3,"#F1EFE8");}}
  R(x,58,2,2,"#E8E6DE");R(x+24,58,2,2,"#E8E6DE");R(x,96,2,2,"#E8E6DE");R(x+24,96,2,2,"#E8E6DE");}
function scene(t,S){var f=S.f;
  R(0,0,150,240,"#E8E6DE");
  R(0,0,150,18,"#B4B2A9");R(0,18,150,22,"#F1EFE8");for(var bx=0;bx<150;bx+=30){R(bx,18,1,22,"#B4B2A9");R(bx+14,36,3,1,"#888780");}R(0,39,150,1,"#888780");
  R(64,44,22,8,"#2C2C2A");if(!f.belt||blink(400)){R(68,46,3,4,"#FAC775");R(73,46,3,4,"#FAC775");R(70,48,4,1,"#FAC775");}
  windowView(t,12,f.err);windowView(t,62,f.err);windowView(t,112,f.err);
  for(var s=0;s<6;s++){var x=4+s*25;R(x,140,20,58,"#185FA5");R(x,140,20,2,"#378ADD");R(x+3,142,14,8,"#F1EFE8");R(x+20,176,3,4,"#444441");}
  R(0,198,150,42,"#5F5E5A");for(var cx2=2;cx2<150;cx2+=6)for(var cy2=204;cy2<240;cy2+=6)R(cx2,cy2,1,1,"#444441");
  D.chS(112,232);D.chA(40,232);D.chB(64,232);D.chT(88,128);
  if(f.err)D.bubble(64,186,"ERROR 404","#E24B4A");
  if(f.restart)D.bubble(64,186,"RESTART","#FAC775");}
D.start({scene:scene,
  cam:{wide:[1,75,120],win:[2.6,75,78],A:[3.2,40,208],Ax:[5,40,200],B:[3.2,64,208],Bx:[3.6,64,198],S:[3.2,112,206],Sx:[5,112,196],T:[4,88,124]},
  onLine:function(i,S){var f=S.f;f.coatB=true;f.jacket=3;f.smileS=true;f.err=i>=6&&i<=12;f.restart=i>=13;f.belt=i>=6;
    if(i>=6&&i<=12)S.shakeU=D.time()+200;},
  onEnd:function(S){S.f.coatB=true;S.f.jacket=3;S.f.smileS=true;S.f.restart=true;},
  endText:"未完待续……下集：涩谷大屏幕上出现了 B 的日志？",
  lines:[
["N","Flight to Tokyo. Window seat.","飞往东京的航班。靠窗座位。","win",""],
["B","Clouds... so many clouds. I'm happy.","云……好多云。我好开心。","Bx","blush"],
["S","Hello again, friends!","又见面了，朋友们！","S","flash"],
["A","Agent Sunny?! Are you following us?","晴天特工？！你在跟踪我们吗？","Ax","shock"],
["S","No. I have a new job. Tokyo Weather Office.","没有。我有新工作了，东京气象局。","S",""],
["T","follow = 跟踪 / 关注","Are you following us? 你在跟踪我们吗？社交媒体上 Follow me 就是「关注我」","T","pop","Are you following us?"],
["B","Error... error... four zero four.","错误……错误……404。","Bx","glitch"],
["A","B! What's wrong?","B！你怎么了？","Ax","shock"],
["T","What's wrong? = 怎么了","朋友不对劲、程序不对劲，第一句都是 What's wrong?","T","pop","What's wrong?"],
["S","It's a bug. Her weather system is broken.","是 bug。她的天气系统坏了。","Sx",""],
["T","bug = 程序错误","bug 本意是虫子。程序出错叫 bug，修 bug 叫 debug。AI 编程天天见","T","pop","It's a bug."],
["A","Can you fix it?","你能修好吗？","A",""],
["S","I can't. But I know someone in Akihabara.","我修不了。但我在秋叶原认识一个人。","S",""],
["B","Restarting... please wait.","重启中……请稍候。","Bx","glitch"],
["T","Have you tried turning it off and on again?","电脑卡住的万能问题：你试过关机再开机吗？IT 部门最爱说的一句","T","pop","Have you tried turning it off and on again?"]]});
})();
