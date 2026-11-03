(function(){
var D=Drama,R=D.R,A=D.A,blink=D.blink;
var dawn=0,dawnT=0;
var NIGHT=["#0d1020","#10132a","#141832","#191d3a","#1d2140","#222645"];
var DAWN=["#26215C","#3C3489","#7F77DD","#ED93B1","#F0997B","#FAC775"];
var CITY=D.mkCity(21,[[0,20,26],[18,16,36],[32,22,22],[52,18,30],[68,24,40],[90,16,28],[104,22,34],[124,26,24]],170,.3);
function scene(t,S){var f=S.f;dawn+=(dawnT-dawn)*.015;
  for(var b=0;b<6;b++)R(0,b*25,150,25,NIGHT[b]);
  if(dawn>.01){A(dawn);for(var g=0;g<6;g++)R(0,g*25,150,25,DAWN[g]);A(1);}
  if(dawn>.05){var sy=Math.round(150-dawn*24);A(dawn);R(98,sy,18,14,"#FAC775");R(101,sy-3,12,3,"#FAC775");A(1);}
  for(var y=108;y<150;y++){var hw=Math.floor((y-108)*1.5);R(46-hw,y,hw*2+1,1,dawn>.5?"#534AB7":"#26215C");if(y<116)R(46-Math.floor(hw*.7),y,Math.floor(hw*1.4)+1,1,"#F1EFE8");}
  R(126,94,2,56,"#D85A30");for(var ty=100;ty<150;ty+=6){var w=Math.floor((ty-94)*.12);R(126-w,ty,2*w+2,1,"#D85A30");}R(126,90,1,4,"#F1EFE8");
  D.drawCity(t,CITY,"#141830",Math.max(.1,.6-dawn*.5));
  R(0,170,150,70,"#1a1a24");R(0,170,150,1,"#5F5E5A");for(var px=0;px<150;px+=10)R(px,166,1,5,"#5F5E5A");R(0,166,150,1,"#5F5E5A");
  if(dawn>.01){A(dawn*.35);R(0,171,150,69,"#F0997B");A(1);}
  if(f.yatai)D.miniYatai(t);
  D.chS(84,232);D.chA(36,232);D.chB(58,232);D.chT(70,128);
  if(f.hearts)D.hearts(47,196);}
D.start({scene:scene,names:{O:"▶ 东京分店豚骨"},
  cam:{wide:[1,75,120],sky:[1.4,70,100],A:[3.2,36,208],Ax:[5,36,200],B:[3.2,58,208],Bx:[5,58,196],S:[3.2,84,206],Sx:[5,84,196],O:[3,130,164],Ox:[4.6,130,158],T:[4,70,124],two:[2.6,47,205]},
  onLine:function(i,S){var f=S.f;f.coatB=true;f.jacket=3;f.smileS=true;dawnT=i>=6?1:0;
    f.blushA=i>=4&&i<=11;if(i===8)f.goldB=true;f.hearts=i>=10&&i<=11;f.yatai=i>=14;},
  onEnd:function(S){var f=S.f;f.coatB=true;f.jacket=3;f.smileS=true;f.yatai=true;f.hearts=true;f.blush=true;f.smileA=true;f.loveO=true;},
  endTitle:"THE END · SEASON 2",endText:"第二季完结。第三季见！",
  lines:[
["N","Dawn. A rooftop in Tokyo.","黎明。东京的屋顶。","wide",""],
["S","B, the Weather Office wants you. Stay in Tokyo.","B，气象局需要你。留在东京吧。","S",""],
["B","...I need to decide.","……我得做个决定。","Bx",""],
["T","Let me think about it = 让我想想","decide = 决定。犹豫的时候不用马上回答，说 Let me think about it","T","pop","Let me think about it."],
["A","B. Whatever you choose, I'm with you.","B。不管你选什么，我都陪着你。","A",""],
["T","Whatever you choose = 不管你选什么","whatever = 无论什么。重要时刻很适合说，现实里也很好用","T","pop","Whatever you choose, I'm with you."],
["B","Then... I choose Fukuoka. Cloudy days, with you.","那……我选福冈。和你一起的阴天。","sky","blush"],
["S","Are you sure?","你确定吗？","Sx",""],
["B","Yes. Let's commit.","确定。我们 commit 吧。","Bx","flash"],
["T","commit = 提交 / 承诺","程序员把代码正式保存叫 commit；感情里 commit 是「认真承诺」。第二季最佳双关","T","pop","Let's commit."],
["A","Commit message: I like cloudy days.","提交说明：我喜欢阴天。","two",""],
["T","commit message = 提交说明","每次 commit 都要写一句说明改了什么。A 这句写得非常合格","T","pop","Commit message: I like cloudy days."],
["S","Then I'll merge your weather into my system.","那我把你的天气合并进我的系统。","S",""],
["S","Sunny in Tokyo. Cloudy in Fukuoka.","东京晴天，福冈阴天。","Sx",""],
["O","Ramen stall, Tokyo branch! Opening today!","拉面屋台东京分店！今天开张！","O","flash"],
["A","...How much?","……多少钱？","Ax","shock"],
["O","For my team? Free. Forever.","给我的团队？免费。永远。","O","love"],
["T","merge = 合并","把两份代码合到一起叫 merge。天气 merge 了，拉面也免费了，第二季圆满","T","pop","Let's merge."],
["N","Let's go home.","回家吧。","wide",""],
["T","See you in season three!","这一季你学会了：bug、debug、log、update、prompt、deploy、roll back、backup、commit、merge。第三季见！","T","pop","See you in season three!"]]});
})();
