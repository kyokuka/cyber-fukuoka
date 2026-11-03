(function(){
var D=Drama,R=D.R,A=D.A,blink=D.blink;
function scene(t,S){var f=S.f;
  R(0,0,150,40,"#2C2C2A");for(var lx=6;lx<150;lx+=18){R(lx,10,10,1,"#F1EFE8");R(lx,24,10,1,"#D3D1C7");}
  R(0,40,150,110,f.storm?"#08101f":"#0c1a33");
  if(S.sun>.05){A(.5*S.sun);R(0,40,150,110,"#EF9F27");A(1);}
  R(0,128,150,22,"#1a1a24");
  for(var k=0;k<15;k++){var rx=((k*11-Math.floor(t/120))%165+165)%165-5;R(rx,138,2,1,k%3?"#FAC775":"#5DCAA5");}
  var px=((t*.01)%230)-40;
  R(Math.round(px),112,32,5,"#B4B2A9");R(Math.round(px)+28,104,4,9,"#B4B2A9");R(Math.round(px)+10,116,14,2,"#888780");R(Math.round(px)-2,113,3,3,"#B4B2A9");
  for(var w=0;w<6;w++)R(Math.round(px)+4+w*4,113,2,1,"#2C2C2A");
  R(Math.round(px)+30,103,1,1,blink(400)?"#E24B4A":"#2C2C2A");R(Math.round(px)+14,118,1,1,blink(500)?"#97C459":"#2C2C2A");
  for(var mx=0;mx<150;mx+=25)R(mx,40,2,110,"#444441");R(0,40,150,2,"#444441");R(0,148,150,2,"#444441");
  R(4,46,94,40,"#5F5E5A");R(5,47,92,38,"#000000");
  var c=f.cancel;
  D.txt("TOKYO",9,51,"#EF9F27");D.txt("1830",33,51,"#EF9F27");if(c)D.txt("CANCEL",53,51,blink(300)?"#E24B4A":"#A32D2D");else D.txt("ON TIME",53,51,"#97C459");
  D.txt("OSAKA",9,61,"#EF9F27");D.txt("1845",33,61,"#EF9F27");if(c)D.txt("CANCEL",53,61,"#E24B4A");else D.txt("ON TIME",53,61,"#97C459");
  D.txt("SEOUL",9,71,"#EF9F27");D.txt("1900",33,71,"#EF9F27");if(c)D.txt("CANCEL",53,71,"#E24B4A");else D.txt("ON TIME",53,71,"#97C459");
  R(150-46,150,40,10,"#185FA5");D.txt("GATE 5",150-43,153,"#FFFFFF");
  R(0,150,150,50,"#3a3a44");for(var gy=160;gy<200;gy+=10)R(0,gy,150,1,"#44444e");
  D.chO(124,186,{hat:"#1D9E75",apron:"#1D9E75",tag:true});
  R(96,186,54,4,"#D3D1C7");R(98,190,50,24,"#5F5E5A");R(100,192,46,1,"#888780");
  R(0,200,150,40,"#2c2c36");A(.12);R(20,206,30,12,"#F1EFE8");R(90,206,30,12,"#F1EFE8");A(1);
  D.chS(80,232);D.chA(30,232);D.chB(52,232);D.chT(75,140);
  if(f.sweat){var sp=(t/40)%10;R(25,207+sp,1,2,"#85B7EB");R(36,205+((sp+5)%10),1,2,"#85B7EB");}}
D.start({scene:scene,names:{O:"▶ 地勤豚骨"},
  cam:{wide:[1,75,120],A:[3.2,30,208],Ax:[5,30,200],B:[3.2,52,208],Bx:[5,52,200],S:[3.2,80,206],Sx:[5,80,196],O:[3,124,166],Ox:[4.6,124,160],T:[4,75,134],board:[2,52,68]},
  onLine:function(i,S){var f=S.f;f.coatB=true;f.jacket=3;f.caseS=true;
    S.sunT=(i>=8&&i<=10)?1:0;S.rainT=(i>=11&&i<=16)?1:0;f.storm=i>=11&&i<=16;f.cancel=i>=13;
    f.shadesT=i>=8&&i<=10;f.sweat=i===9||i===10;if(i===15||i===17)f.sadS=true;},
  onEnd:function(S){S.f.coatB=true;S.f.jacket=3;S.f.cancel=true;S.f.sadS=true;},
  endText:"未完待续……最终回：百道海滨的日落",
  lines:[
["N","Fukuoka Airport. 6:00 PM.","福冈机场。傍晚 6 点。","wide",""],
["A","Two tickets to Tokyo, please.","两张去东京的票，谢谢。","A",""],
["O","Tonkotsu here. Part-time job number three.","是我豚骨。第三份兼职。","Ox","flash"],
["T","Two tickets to..., please","数量 + tickets to + 地点 + please，买票万能句。还有，豚骨到底打几份工？","T","pop","Two tickets to Tokyo, please."],
["O","Window seat or aisle seat?","靠窗还是靠过道？","O",""],
["B","Window seat, please. I like clouds.","靠窗，谢谢。我喜欢看云。","B","blush"],
["T","window seat / aisle seat","靠窗座位 / 过道座位。aisle 的 s 不发音，读起来像「爱偶」","T","pop","Window seat. Aisle seat."],
["S","Not so fast!","没那么快！","Sx","boom"],
["S","If she leaves, I make it hot. Forty degrees!","她要是敢走，我就让这里热到 40 度！","S","flash"],
["A","It's so hot...","好热……","A",""],
["T","so + 形容词 = 好……","so hot 好热，so cold 好冷，so cool 好酷。老师已经戴上墨镜","T","pop","It's so hot."],
["B","Then... I make a storm.","那么……我就召唤一场暴风雨。","Bx","glitch"],
["N","Thunder. Heavy rain.","雷声。暴雨。","wide","boom"],
["O","All flights are canceled!","所有航班取消！","board","flash"],
["T","canceled = 取消 / delayed = 延误","机场广播最常听到的两个词。听到 canceled 就别排队了，去吃拉面吧","T","pop","Canceled. Delayed."],
["S","No! My flight to Tokyo!","不！我去东京的航班！","Sx","shake"],
["A","You have a flight too?","你也要坐飞机？","A",""],
["S","...I just wanted to see the sunset.","……我只是想看一次日落。","Sx",""],
["B","...The sunset?","……日落？","Bx",""],
["T","just wanted to = 只是想……","反派也有柔软的一面。老师已经准备好纸巾了","T","pop","I just wanted to see the sunset."]]});
})();
