(function(){
var D=Drama,R=D.R,A=D.A,blink=D.blink;
var CITY=D.mkCity(13,[[0,24,40],[22,18,56],[38,26,34],[62,20,50],[118,32,46]],190,.3);
var RAIN=["#E24B4A","#FAC775","#5DCAA5","#378ADD","#D4537E"];
function tower(t,cx,live){
  if(live){A(.12);R(cx-34,20,68,170,"#FAC775");A(1);}
  R(cx,4,1,16,"#F1EFE8");if(blink(600))R(cx-1,2,3,2,"#E24B4A");
  for(var y=20;y<190;y++){var w=Math.floor(1+(y-20)*.17),band=Math.floor((y-20)/18)%2?"#F1EFE8":"#D85A30";
    R(cx-w-1,y,2,1,band);R(cx+w,y,2,1,band);
    if(y%9===0){R(cx-w,y,2*w,1,"#993C1D");}
    if(y%9===4&&w>3){R(cx-w+((y/9|0)%2?1:w-1),y,1,1,"#712B13");}}
  R(cx-8,64,17,6,"#F1EFE8");R(cx-15,118,31,8,"#F1EFE8");
  for(var k=0;k<4;k++)R(cx-6+k*4,66,2,2,live?RAIN[(k+Math.floor(t/200))%5]:"#FAC775");
  for(var j=0;j<7;j++)R(cx-13+j*4,121,2,2,live?RAIN[(j+Math.floor(t/200))%5]:"#FAC775");}
function scene(t,S){var f=S.f;
  R(0,0,150,190,"#0d1020");for(var s=0;s<14;s++){if(((t/400+s*7)%9)>1)R((s*37)%150,(s*23)%90,1,1,"#F1EFE8");}
  D.clouds(t,4,10,30,"#1d2140","#171a32",.8);
  tower(t,95,f.live);
  D.drawCity(t,CITY,"#141830",.6);
  R(0,190,150,50,"#1a1a24");R(0,190,150,1,"#5F5E5A");for(var px=0;px<150;px+=10)R(px,186,1,5,"#5F5E5A");R(0,186,150,1,"#5F5E5A");
  if(S.snow>.3){A(.7*S.snow);R(0,236,150,4,"#F1EFE8");A(1);}
  D.chS(120,232);D.chA(30,232);D.chB(54,232);D.chT(60,140);
  if(f.ver2)D.bubble(54,184,"V2.0","#5DCAA5");
  if(f.hearts)D.hearts(42,196);}
D.start({scene:scene,
  cam:{wide:[1,75,120],tower:[2,95,90],sky:[1.4,90,90],A:[3.2,30,208],Ax:[5,30,200],B:[3.2,54,208],Bx:[5,54,196],S:[3.2,120,206],Sx:[5,120,196],T:[4,60,136]},
  onLine:function(i,S){var f=S.f;f.coatB=true;f.jacket=3;f.smileS=i<10;f.live=i>=5;f.ver2=i===1;S.snowT=i>=8?1:0;
    if(i===1)f.goldB=true;if(i>=14){f.blush=true;f.hearts=true;}if(i===15)f.blushA=true;},
  onEnd:function(S){S.f.coatB=true;S.f.jacket=3;S.f.live=true;S.f.hearts=true;S.f.blush=true;S.f.blushA=true;S.f.smileS=true;},
  endText:"未完待续……下集：服务器宕机，全东京的天气乱了！",
  lines:[
["N","Tokyo Tower. Update complete.","东京塔。更新完成。","tower",""],
["B","Version two point zero. Hello, world!","2.0 版本。你好，世界！","Bx","flash"],
["T","Hello, world! = 你好，世界","几乎每个程序员写的第一行代码都是打印 Hello, world!，B 这是重生了","T","pop","Hello, world!"],
["S","The Weather Office wants your new system. Let's deploy!","气象局想用你的新系统。我们来部署吧！","S",""],
["T","deploy = 部署 / 上线","把做好的程序放到服务器上给大家用，就叫 deploy。你的 drama.poptora.com 就是这么上线的","T","pop","Let's deploy!"],
["A","Three, two, one... deploy!","三、二、一……部署！","tower","boom"],
["N","It's live!","上线了！","tower","flash"],
["T","It's live! = 上线了","网站或新功能正式能用了，就说 It's live!","T","pop","It's live!"],
["N","...It's snowing. In November.","……下雪了。在十一月。","sky",""],
["S","Something went wrong!","出问题了！","Sx","shake"],
["T","Something went wrong = 出错了","网页报错最常见的一句话。看到它别慌","T","pop","Something went wrong."],
["A","Don't panic. Let's roll back.","别慌。我们回滚。","A",""],
["T","roll back = 回滚","新版本出问题就退回旧版本，叫 roll back。Don't panic 是程序员的护身符","T","pop","Don't panic. Let's roll back."],
["B","No. It's not a bug.","不。这不是 bug。","Bx",""],
["B","I wanted to see snow. With you.","我想和你一起看雪。","Bx",""],
["A","...Then it's a feature.","……那这就是个功能了。","Ax",""],
["T","It's not a bug, it's a feature","程序员名梗：这不是 bug，是功能（feature）。专门用来给自己的错误找台阶下","T","pop","It's not a bug. It's a feature."]]});
})();
