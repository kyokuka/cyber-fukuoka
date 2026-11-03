(function(){
var D=Drama,R=D.R,A=D.A,blink=D.blink;
var CITY=D.mkCity(51,[[0,22,70],[20,18,90],[36,24,60],[110,22,84],[130,20,66]],190,.3);
function scene(t,S){var f=S.f;
  R(0,0,150,190,"#0d1020");D.clouds(t,4,6,20,"#1d2140","#171a32");
  if(f.fw)D.fireworks(t,5,16);
  D.drawCity(t,CITY,"#141830",.6);
  R(42,58,66,52,"#2C2C2A");R(44,60,62,48,"#000000");
  D.txt("USERS",63,64,"#AFA9EC");var u=String(f.users||0);D.txt(u,75-u.length*4,74,f.users>=1000?"#FAC775":"#5DCAA5",2);
  if(f.report){R(48,96,54,9,"#501313");D.txt("BUG REPORT",55,98,blink(300)?"#E24B4A":"#F09595");}
  R(74,110,2,80,"#444441");
  R(0,190,150,50,"#1a1a24");R(0,190,150,1,"#5F5E5A");
  R(20,198,40,3,"#888780");R(24,201,2,12,"#5F5E5A");R(54,201,2,12,"#5F5E5A");D.laptop(32,190);
  D.chA(36,232);D.chB(60,232);D.chS(112,232);D.chT(22,140);}
D.start({scene:scene,
  cam:{wide:[1,75,120],screen:[2.2,75,82],A:[3.2,36,208],Ax:[5,36,200],B:[3.2,60,208],Bx:[5,60,196],S:[3.2,112,206],Sx:[5,112,196],T:[4,22,136]},
  onLine:function(i,S){var f=S.f;f.coatB=true;f.jacket=3;f.smileS=i!==8&&i!==9;
    f.users=i<3?0:(i===3?10:(i<12?100:1000));f.report=i>=6&&i<=11;f.fw=i===1||i>=12;},
  onEnd:function(S){var f=S.f;f.coatB=true;f.jacket=3;f.smileS=true;f.users=1000;f.fw=true;f.blush=true;f.smileA=true;},
  endText:"最终回：下集，第一个付费用户是……？",
  lines:[
["N","Launch day.","发布日。","wide",""],
["A","Ready? Let's launch!","准备好了吗？发布！","A","boom"],
["T","launch = 发布","产品正式推出给用户叫 launch。deploy 是技术上线，launch 是正式发布","T","pop","Let's launch!"],
["N","Users: ten.","用户：10 个。","screen",""],
["N","Users: one hundred!","用户：100 个！","screen","flash"],
["B","We have users! Real users!","我们有用户了！真正的用户！","Bx","blush"],
["S","And... a bug report.","还有……一个 bug 报告。","S",""],
["T","bug report = 问题反馈","用户告诉你哪里出错了。别生气，这是免费的测试","T","pop","We got a bug report."],
["A","What does it say?","上面说什么？","A",""],
["S","The app says cozy day in Tokyo. But it's sunny.","App 说东京是舒适阴天。但其实是晴天。","Sx",""],
["A","Hotfix! Now!","紧急修复！马上！","Ax","shake"],
["T","hotfix = 紧急修复","线上出问题，马上打补丁，叫 hotfix","T","pop","We need a hotfix."],
["N","Ten minutes later. Users: one thousand!","十分钟后。用户：1000 个！","screen","boom"],
["S","Good job, team!","干得好，团队！","S",""],
["T","Thank you for your feedback","回复用户最礼貌的一句：谢谢你的反馈。feedback = 反馈","T","pop","Thank you for your feedback."]]});
})();
