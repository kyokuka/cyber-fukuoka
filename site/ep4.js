(function(){
var D=Drama,R=D.R,A=D.A,blink=D.blink;
var JC=["#E24B4A","#534AB7","#1D9E75","#EF9F27","#D4537E","#378ADD","#888780"];
function counter(sale){R(100,186,48,4,"#5F5E5A");R(102,190,44,24,"#2C2C2A");R(132,176,12,10,"#444441");R(134,178,8,4,sale?"#E24B4A":"#5DCAA5");}
function scene(t,S){var f=S.f;
  R(0,0,150,64,"#1a120c");
  for(var x=0;x<150;x+=30){R(x,0,2,64,"#3d2a1a");for(var k=0;k<14;k++){var ay=60-Math.round(Math.sqrt(k*(28-k))*1.4);R(x+2+k,ay,1,1,"#633806");R(x+28-k,ay,1,1,"#633806");}}
  for(var x2=0;x2<150;x2+=6)R(x2,60,3,1,"#633806");R(0,62,150,2,"#3d2a1a");
  R(0,64,150,136,"#2a1f18");for(var y=70;y<200;y+=12)R(0,y,150,1,"#231a14");
  [15,45,75,105,135].forEach(function(lx){R(lx,0,1,30,"#444441");A(.22);R(lx-9,26,19,16,"#FAC775");A(1);R(lx-3,30,7,5,"#BA7517");R(lx-2,35,5,2,"#FAC775");});
  R(14,80,94,106,"#1b2433");R(12,78,98,2,"#5F5E5A");R(12,186,98,2,"#5F5E5A");R(12,78,2,110,"#5F5E5A");R(108,78,2,110,"#5F5E5A");
  R(18,96,50,1,"#B4B2A9");JC.forEach(function(c,j){R(20+j*7,97,6,16,c);R(22+j*7,95,2,2,"#B4B2A9");R(20+j*7,97,6,1,"#FFFFFF");});
  R(18,130,50,1,"#B4B2A9");JC.slice().reverse().forEach(function(c,j){R(20+j*7,131,6,14,c);R(22+j*7,129,2,2,"#B4B2A9");});
  R(84,104,6,6,"#D3D1C7");R(81,110,12,18,"#ED93B1");R(81,110,12,1,"#F4C0D1");R(86,128,2,30,"#888780");R(80,158,14,2,"#888780");
  A(.12);for(var g=0;g<4;g++)R(20+g*24,84+g*6,14,1,"#FFFFFF");A(1);
  var on=!((t/90)%40<1.2);A(on?1:.3);
  if(f.sale)D.txt("50%OFF",23,66,"#E24B4A",2);else D.txt("SALE",34,66,"#ED93B1",2);A(1);
  R(0,200,150,40,"#2C1d12");for(var fy=200;fy<240;fy+=8)for(var fx=0;fx<150;fx+=8)if(((fx+fy)/8)%2===0)R(fx,fy,8,8,"#3d2a1a");
  A(.15);[15,45,75,105,135].forEach(function(lx){R(lx-3,206,7,14,"#FAC775");});A(1);
  counter(f.sale);
  D.chO(124,186,{apron:"#185FA5",tag:true});
  counter(f.sale);
  D.chA(36,232);D.chB(64,232);D.chT(120,72);}
D.start({scene:scene,names:{O:"▶ 打工中的豚骨"},
  cam:{wide:[1,75,120],O:[3,124,166],Ox:[4.6,124,160],A:[3.2,36,208],Ax:[5,36,200],B:[3.2,64,208],Bx:[5,64,200],two:[2.4,50,205],T:[4,120,66]},
  onLine:function(i,S){var f=S.f;f.scarf=true;f.jacket=i<11?0:i<15?1:i<17?2:3;f.hold=i===16;f.shiver=i>=1&&f.jacket<3;
    S.snowT=(i===22||i===23)?1:0;f.sale=i>=23;},
  onEnd:function(S){S.f.scarf=true;S.f.jacket=3;S.f.sale=true;S.f.blush=true;},
  endText:"未完待续……下集：B 的天气能力，被谁盯上了？",
  lines:[
["N","Saturday. Fourteen degrees. Windy.","周六。14度。刮风。","wide",""],
["A","Brr... It's cold today.","呜……今天好冷。","A",""],
["T","cool → cold!","上周 19度叫 cool，今天 14度还刮风，正式升级成 cold","T","pop","It's cold today."],
["B","Let's buy a jacket.","我们去买件外套吧。","B",""],
["N","Tenjin Underground Mall.","天神地下街。","wide",""],
["O","Welcome... Oh. It's you two.","欢迎光……哦。是你们俩。","Ox","flash"],
["A","Tonkotsu?! Why are you here?","豚骨？！你怎么在这？","Ax","shock"],
["O","Part-time job. Thanks to you.","打工。托你们的福。","O","sad"],
["A","Can I try this on?","我能试穿这件吗？","A",""],
["T","try on = 试穿!","Can I try this on? 进店试衣服必备，this 夹在 try 和 on 中间","T","pop","Can I try this on?"],
["O","Sure. Size S.","当然。S 码。","O",""],
["A","It's too small!","太小了！","Ax","shock"],
["T","too + 形容词 = 太……了","too small 太小，too big 太大，too expensive 太贵（这个下面会用到）","T","pop","It's too small."],
["A","Do you have a bigger one?","有大一点的吗？","A",""],
["O","Size XXXL.","XXXL 码。","O",""],
["A","It's too big!","太大了！","Ax","shock"],
["B","How about this one?","这件怎么样？","B",""],
["B","It looks good on you.","你穿很好看。","two","blush"],
["T","It looks good on you = 你穿很好看","夸人穿搭的万能句。对朋友说，对店员说，对镜子里的自己也可以说","T","pop","It looks good on you."],
["A","I'll take it! How much?","我买了！多少钱？","A",""],
["O","Ten thousand yen.","一万日元。","Ox","flash"],
["A","AGAIN?!","又来？！","Ax","shock"],
["B","...It's going to snow.","……要下雪了。","Bx","glitch"],
["O","Fifty percent off! Fifty percent off!","五折！五折！","O","flash"],
["T","50% off = 打五折","在日本商店看到 OFF 就是打折。还有，地下街为什么会下雪，老师不负责解释","T","pop","Fifty percent off!"]]});
})();
