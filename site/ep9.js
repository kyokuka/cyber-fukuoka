(function(){
var D=Drama,R=D.R,A=D.A,blink=D.blink;
var CITY=D.mkCity(7,[[0,30,150],[28,26,170],[54,30,140],[84,22,175],[106,44,160]],190,.25);
var ADS=["#D4537E","#378ADD","#1D9E75","#EF9F27"];
function scene(t,S){var f=S.f;
  R(0,0,150,120,"#0d1020");D.clouds(t,5,6,30,"#1d2140","#171a32");
  D.drawCity(t,CITY,"#141830",.5);
  [[24,60,"#ED93B1"],[56,70,"#5DCAA5"],[104,40,"#AFA9EC"]].forEach(function(n,i){var on=((t/90+i*13)%45)>1.2;A(on?1:.3);R(n[0],n[1],4,26,n[2]);A(1);});
  var ad=ADS[Math.floor(t/1500)%4];
  R(6,50,44,30,"#2C2C2A");R(7,51,42,28,"#000000");R(9,53,38,24,ad);R(14+((t/40)%24|0),58,8,8,"#FFFFFF");
  R(84,34,62,44,"#2C2C2A");R(86,36,58,40,"#000000");
  if(f.log){var b=blink(300);D.txt("WARNING",89,40,b?"#E24B4A":"#A32D2D");D.txt("MEMORY",89,51,"#FAC775");D.txt("99%",115,51,"#FAC775");
    R(89,62,52,6,"#444441");R(89,62,51,6,"#E24B4A");if(f.name){D.txt("A A A A",89,70,"#ED93B1");}}
  else{for(var k=0;k<5;k++)R(90+k*11,40+((t/60+k*7)%28|0),8,8,ADS[k%4]);}
  R(0,186,150,54,"#1a1a22");
  for(var zx=2;zx<150;zx+=14){A(.75);R(zx,192,8,48,"#D3D1C7");}A(1);
  for(var p=0;p<9;p++){var dir=p%2?1:-1,px=((p*31+t*.015*dir)%180+180)%180-15;R(Math.round(px),180,4,10,"#2C2C3a");R(Math.round(px)+1,177,2,3,"#2C2C3a");}
  R(2,148,6,14,"#2C2C2A");R(4,151,2,4,blink(700)?"#97C459":"#3B6D11");
  D.chS(112,232);D.chA(40,232);D.chB(64,232);D.chT(75,146);
  if(f.hearts)D.hearts(52,196);}
D.start({scene:scene,
  cam:{wide:[1,75,120],screen:[2.4,115,58],A:[3.2,40,208],Ax:[5,40,200],B:[3.2,64,208],Bx:[5,64,200],S:[3.2,112,206],Sx:[5,112,196],T:[4,75,142]},
  onLine:function(i,S){var f=S.f;f.coatB=true;f.jacket=3;f.smileS=i<4;f.log=i>=3;f.name=i>=13;f.hearts=i===13;if(i===13)f.blushA=true;if(i===12)f.blush=true;},
  onEnd:function(S){S.f.coatB=true;S.f.jacket=3;S.f.log=true;S.f.name=true;S.f.blush=true;S.f.blushA=true;},
  endText:"未完待续……下集：秋叶原修理店，老板又是……？",
  lines:[
["N","Shibuya Crossing. Tokyo.","涩谷十字路口。东京。","wide",""],
["A","Wow. So many people!","哇，好多人！","A",""],
["T","so many + 复数 = 好多……","so many people 好多人，so many bugs 好多 bug（程序员的日常）","T","pop","So many people!"],
["S","Look! The big screen!","看！大屏幕！","screen","flash"],
["N","WARNING. MEMORY 99%.","警告。内存 99%。","screen","glitch"],
["A","What does this mean?","这是什么意思？","Ax","shock"],
["T","What does this mean? = 这是什么意思","看不懂报错就问这句。把报错贴给 AI，再加一句 What does this mean?","T","pop","What does this mean?"],
["S","Her memory is full.","她的内存满了。","Sx",""],
["B","I remember... too many clouds.","我记住了……太多的云。","Bx",""],
["T","memory = 记忆 / 内存","在人身上是记忆，在电脑上是内存。B 把每一朵云都存下来了","T","pop","Her memory is full."],
["A","Let me check the log.","让我看看日志。","A",""],
["T","log = 日志","程序运行的记录叫 log。Let me check the log 是程序员最常说的话之一","T","pop","Let me check the log."],
["B","Don't read my log! It's private!","不许看我的日志！那是隐私！","Bx","glitch"],
["A","...My name is in it. Many times.","……里面有我的名字。好多次。","screen",""],
["T","private = 隐私的","It's private 这是隐私。还有，日志里全是 A 的名字，这个 bug 老师不修","T","pop","It's private!"]]});
})();
