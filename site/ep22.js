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

/* Mr Drizzle: London's weather, on holiday. A rain cloud in a bowler hat. */
var dz={x:185,y:150,tx:185,ty:150};
function chD(t,S){dz.x+=(dz.tx-dz.x)*.05;dz.y+=(dz.ty-dz.y)*.05;
  var x=Math.round(dz.x),y=Math.round(dz.y+Math.sin(t/420)*1.5),f=S.f,tk=S.talk==="D"&&blink(150);
  var heavy=S.rain>.5;
  /* his own little rain */
  A(.75);for(var k=0;k<(heavy?9:5);k++){var rx=x-9+((k*5)%19),ry=y+1+((t/9+k*11)%(196-y));R(rx,Math.round(ry),1,3,"#85B7EB");}A(1);
  var body=heavy?"#5F5E5A":"#B4B2A9",under=heavy?"#444441":"#888780",top=heavy?"#888780":"#D3D1C7";
  R(x-11,y-8,22,8,body);R(x-13,y-6,26,5,body);R(x-8,y-12,8,5,body);R(x+1,y-13,8,6,body);
  R(x-8,y-12,8,1,top);R(x+1,y-13,8,1,top);R(x-12,y-1,24,1,under);
  /* bowler hat */
  R(x-3,y-18,8,5,"#2C2C2A");R(x-5,y-14,12,2,"#2C2C2A");R(x-3,y-15,8,1,"#712B13");
  /* face: deadpan */
  R(x-5,y-8,2,2,"#2C2C2A");R(x+3,y-8,2,2,"#2C2C2A");
  R(x+2,y-9,4,1,"#FAC775");R(x+2,y-6,4,1,"#FAC775");R(x+2,y-8,1,2,"#FAC775");R(x+5,y-8,1,2,"#FAC775");R(x+5,y-5,1,4,"#FAC775");
  if(f.browD){R(x-6,y-10,4,1,"#2C2C2A");}
  R(x-4,y-5,8,1,"#5F5E5A");R(x-5,y-4,2,1,"#5F5E5A");R(x+3,y-4,2,1,"#5F5E5A");
  R(x-1,y-3,2,tk?2:1,"#2C2C2A");
  if(f.teaD){R(x-17,y-6,5,4,"#F1EFE8");R(x-12,y-5,1,2,"#F1EFE8");R(x-16,y-7,3,1,"#BA7517");
    for(var s=0;s<3;s++){var p=((t/50+s*6)%14);A(.6*(1-p/14));R(x-16+s*2,y-9-p,1,2,"#D3D1C7");}A(1);}
  if(f.dripA){A(.9);R(53,197,1,2,"#85B7EB");R(63,199,1,2,"#85B7EB");A(1);}}

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
  if(S.f.teach)D.chT(128,150);
  chD(t,S);}

Drama.start({scene:scene,
  gb:["D","T","N"],
  voices:{D:["Daniel","Arthur","Oliver","Google UK English Male","Microsoft Ryan","Microsoft George","Microsoft Thomas"],
          T:["Serena","Kate","Stephanie","Martha","Google UK English Female","Microsoft Sonia","Microsoft Libby","Microsoft Hazel"],
          N:["Arthur","Jamie","Google UK English Male","Microsoft George","Daniel"]},
  names:{D:"▶ 毛毛雨先生"},colors:{D:"#B4B2A9"},pitch:{D:.6,T:1.1,N:.55},
  cam:{wide:[1,75,120],sky:[1.9,100,60],A:[3.2,58,206],Ax:[5,58,198],B:[3.2,92,206],two:[2.2,75,200],
       D:[3.4,58,180],Dx:[5.2,58,176],yatai:[1.8,110,190],T:[4,128,140]},
  onLine:function(i,S){
    S.f.teach=i>=6;
    if(i<1){dz.tx=185;dz.ty=150;}else if(i<3){dz.tx=100;dz.ty=168;}else{dz.tx=58;dz.ty=180;}
    if(i>=3)S.f.dripA=true;
    if(i===20)S.f.teaD=true;
    if(i===13||i===16||i===22||i===26)S.f.browD=true;
    S.rainT=i>=22?1:0;},
  onEnd:function(S){S.f.teach=true;S.f.dripA=true;S.f.browD=true;S.rainT=1;},
  endText:"未完待续……下集：英国云要排队吃拉面，从今晚排到 2078 年。",
  lines:[
["N","Fukuoka, 2077. Still cloudy.","2077 年，福冈。依然阴天。","wide",""],
["N","Then, a cloud arrived. From London.","然后，来了一朵云。从伦敦来的。","sky",""],
["D","Good evening. Terribly sorry.","晚上好。实在抱歉。","D",""],
["D","I appear to be raining on you.","我好像……下在你身上了。","two",""],
["A","It's OK!","没事没事！","A",""],
["D","Is it? How very un-British of you.","是吗？你可真不像英国人。","Dx",""],
["T","Brits say sorry for everything. Even when you step on their foot.","英国人什么都先说 sorry。你踩了他的脚，他先跟你道歉。","T","pop"],
["B","Who are you?","你是谁？","B",""],
["D","I'm the weather of London. I'm on holiday.","我是伦敦的天气。来度假的。","D",""],
["A","Why?","为什么？","A",""],
["D","It's been raining in London for three hundred years. I needed a change.","伦敦已经下了三百年雨了。我需要换换心情。","Dx",""],
["T","It's been raining: it started long ago, and it hasn't stopped. Like British complaining.","It's been + -ing = 从以前一直持续到现在。就像英国人抱怨天气，从没停过。","T","pop"],
["B","Welcome. It's cloudy here.","欢迎。我们这里是阴天。","B",""],
["D","Cloudy. Marvellous. Just like home.","阴天。妙极了。跟家里一模一样。","Dx",""],
["T","Marvellous can mean terrible. Watch the face, not the word.","英国人说 marvellous（妙极了），意思可能是「糟透了」。看脸，别看词。","T","pop"],
["A","Do you like Fukuoka?","你喜欢福冈吗？","A",""],
["D","It's not bad.","还不坏。","Dx",""],
["B","...He loves it.","……他爱死了。","B","blush"],
["T","In Britain, not bad means brilliant. Quite good means... not good.","在英国，not bad = 太棒了；quite good = 其实一般。英式翻译器，已上线。","T","pop"],
["A","Let's eat ramen!","一起吃拉面吧！","yatai",""],
["D","I'd rather have a cup of tea, actually.","其实……我更想来杯茶。","D",""],
["B","They only have ramen.","这里只有拉面。","B",""],
["D","Ramen. Lovely.","拉面。真好。","Dx",""],
["A","Why is it raining?!","怎么下起雨来了？！","Ax","shock flash"],
["T","When a Brit says lovely and it starts to rain, it is not lovely.","英国人嘴上说 lovely，天上就开始下雨……那就一点也不 lovely。","T","pop"],
["A","Are you OK?","你还好吗？","A",""],
["D","I'm fine.","我很好。","Dx","boom"],
["T","I'm fine means: please stop asking. Class dismissed. Bring an umbrella.","I'm fine = 别问了。下课！记得带伞。","T","pop"]]});
})();
