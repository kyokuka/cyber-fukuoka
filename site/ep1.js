(function(){
var D=Drama,R=D.R,A=D.A,blink=D.blink;
var seed=11;function rnd(){seed=seed*16807%2147483647;return seed/2147483647;}
var NC=["#5DCAA5","#ED93B1","#85B7EB","#FAC775","#AFA9EC"];
function mk(a,base,d){return a.map(function(b){var x=b[0],w=b[1],h=b[2],win=[];for(var y=base-h+3;y<base-3;y+=4)for(var xx=x+2;xx<x+w-2;xx+=3)if(rnd()<d)win.push([xx,y,NC[Math.floor(rnd()*5)],rnd()]);return{x:x,w:w,h:h,win:win};});}
var FAR=mk([[0,22,70],[20,18,92],[36,24,64],[58,20,84],[80,26,100],[104,14,74],[128,22,88]],132,.3);
var NEAR=mk([[0,30,46],[30,22,58],[52,30,40],[82,24,54],[108,16,36],[124,26,48]],142,.35);
var SIGNS=[[6,98,5,22,"#ED93B1"],[38,92,16,6,"#FAC775"],[86,96,20,7,"#AFA9EC"],[132,102,5,18,"#5DCAA5"],[58,108,12,5,"#F09595"]];
function yatai(t,x){A(.18);R(x-7,158,54,30,"#F09595");A(1);
  R(x,160,40,4,"#712B13");R(x+2,164,36,1,"#4A1B0C");
  A(.4);R(x+3,165,34,10,"#FAC775");A(1);
  for(var i=0;i<6;i++)R(x+3+i*6,165,5,7,"#A32D2D");
  R(x+2,175,36,11,"#412402");R(x,180,40,2,"#854F0B");R(x+3,186,2,6,"#2C2C2A");R(x+35,186,2,6,"#2C2C2A");
  for(var j=0;j<4;j++)R(x+6+j*9,188,4,1,"#5F5E5A");
  R(x-2,165,3,5,"#E24B4A");R(x+39,165,3,5,"#E24B4A");
  for(var k=0;k<5;k++){var p=((t/45+k*9)%22);A(.5*(1-p/22));R(x+14+k*3+Math.round(Math.sin(t/300+k)*2),159-p,2,2,"#D3D1C7");}A(1);}
function scene(t,S){
  R(0,0,150,135,"#0d1020");R(0,0,150,34,"#10132a");
  for(var k=0;k<7;k++){var dir=k%2?1:-1;var xx=(((k*37+t*.004*dir)%190)+190)%190-20,yy=10+(k*17)%60;for(var r=-3;r<=3;r++){var w=24-Math.abs(r)*6+(k%3)*6;R(Math.round(xx-w/2),yy+r*2,w,2,k%2?"#1d2140":"#171a32");}}
  FAR.forEach(function(b){R(b.x,132-b.h,b.w,b.h,"#141830");b.win.forEach(function(q){A(((t/1000+q[3]*60)%13)<.5?.15:.55);R(q[0],q[1],1,1,q[2]);});A(1);});
  R(117,42,4,90,"#1a2e4d");R(115,62,8,3,"#22406b");R(118,30,2,12,"#85B7EB");
  for(var y=46;y<130;y+=5)R(118,y,2,1,(Math.floor(t/300+y/5)%4)?"#185FA5":"#85B7EB");
  if(blink(700))R(118,28,2,2,"#E24B4A");
  NEAR.forEach(function(b){R(b.x,142-b.h,b.w,b.h,"#1b1d33");b.win.forEach(function(q){A(.75);R(q[0],q[1],2,1,q[2]);});A(1);});
  SIGNS.forEach(function(s,i){var off=((t/90+i*13)%45)<1.2;A(off?.25:1);R(s[0],s[1],s[2],s[3],s[4]);A(off?0:.2);R(s[0]-2,s[1]-2,s[2]+4,s[3]+4,s[4]);A(1);});
  R(0,142,150,30,"#08121f");
  for(var yy2=143;yy2<172;yy2+=2)for(var k2=0;k2<4;k2++){var x2=((k2*41+yy2*13+t*.012*(yy2%4?1:-1))%170+170)%170-10;R(Math.round(x2),yy2,6,1,"#10223a");}
  SIGNS.forEach(function(s,i){for(var y3=144;y3<171;y3+=2){if(((y3+t/110)%5)>1.6){A(Math.max(0,.45-(y3-144)/80));R(s[0]+Math.round(Math.sin(t/280+y3*.7+i)*1.5),y3,s[2],1,s[4]);}}});A(1);
  R(0,172,150,1,"#3a3a4a");for(var px=2;px<150;px+=8)R(px,169,1,4,"#3a3a4a");R(0,169,150,1,"#2c2c3a");
  R(0,173,150,67,"#121219");for(var fy=180;fy<240;fy+=8)R(0,fy,150,1,"#18181f");
  yatai(t,2);yatai(t,108);
  D.chA(58,224);D.chB(92,224);
  if(S.f.teach)D.chT(75,186);}
Drama.start({scene:scene,
  cam:{wide:[1,75,120],sky:[1.9,100,60],A:[3.2,58,206],Ax:[5,58,198],B:[3.2,92,206],Bx:[5,92,198],two:[2.2,75,200],yatai:[1.8,110,190],T:[4,75,180]},
  onLine:function(i,S){S.f.teach=i>=3;},
  onEnd:function(S){S.f.teach=true;S.f.blush=true;},
  endText:"未完待续……下集：屋台老板是她前任？！",
  lines:[
["N","Fukuoka, 2077.","2077年，福冈。","wide",""],
["N","The sky is always cloudy.","天空，永远是阴天。","sky",""],
["B","It's cloudy... again.","又是阴天……","B",""],
["T","Cloud + y = cloudy! Sunny, rainy, windy.","叮！云 + y = 阴天。同理：晴天、雨天、刮风天，一个公式背四个！","T","pop","Cloudy. Sunny. Rainy. Windy."],
["A","Are you cold?","你冷吗？","A","flash"],
["B","No. It's cool. Nineteen degrees.","不冷，是凉快。19度。","B",""],
["T","Cool = 凉快, cold = 冷!","19度叫 cool，9度才叫 cold。别把凉快说成冻死！","T","","Cool. Cold."],
["A","How do you know?","你怎么知道的？","A",""],
["B","Because... I am the weather.","因为……我就是天气。","Bx","glitch"],
["A","What?!","什么？！","Ax","shock flash"],
["T","Plot twist! I am... = 我是……","剧情反转！I am + 名词 = 我是……。老师我也震惊了","T","pop","Plot twist!"],
["B","This weekend, it gets colder.","这周末，会更冷。","B",""],
["A","Then... take my jacket.","那……穿上我的外套。","two",""],
["B","I'm a robot. I don't feel cold.","我是机器人，感觉不到冷。","B",""],
["A","Then... let's eat ramen?","那……一起去吃拉面？","yatai",""],
["B","...OK.","……好。","Bx","blush"],
["T","Let's + verb = 一起……吧! Class dismissed!","Let's + 动词 = 一起……吧。下课！老师也去吃拉面了","T","pop","Let's eat ramen! Class dismissed!"]]});
})();
