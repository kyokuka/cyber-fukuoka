(function(){
var D=Drama,R=D.R,A=D.A,blink=D.blink;
function scene(t,S){var f=S.f;
  R(0,0,150,40,"#0d1020");
  for(var k=0;k<5;k++){var xx=(((k*43+t*.004*(k%2?1:-1))%190)+190)%190-20,yy=8+(k*9)%26;for(var r=-2;r<=2;r++){var w=22-Math.abs(r)*6+(k%3)*5;R(Math.round(xx-w/2),yy+r*2,w,2,k%2?"#1d2140":"#171a32");}}
  R(0,40,150,160,"#141a2a");
  for(var gx=0;gx<150;gx+=12)R(gx,52,1,148,"#2a3550");
  for(var gy=52;gy<200;gy+=14)R(0,gy,150,1,"#2a3550");
  A(.18);[[12,108],[36,122],[84,108],[108,136],[132,94],[60,150]].forEach(function(p){R(p[0]+1,p[1]+1,11,13,"#FAC775");});A(1);
  R(0,40,150,12,"#0b0d18");D.txt("HAKATA",51,43,"#F1EFE8",2);R(0,51,150,1,"#378ADD");
  R(124,56,13,13,"#F1EFE8");R(130,58,1,5,"#2C2C2A");R(130,62,4,1,"#2C2C2A");
  R(12,64,78,36,"#5F5E5A");R(13,65,76,34,"#000000");
  var bl=f.board&&blink(250);
  D.txt("AIRPORT",17,70,bl?"#FAC775":"#EF9F27");D.txt("3",80,70,bl?"#FAC775":"#EF9F27");
  D.txt("TENJIN",17,79,"#EF9F27");D.txt("1",80,79,"#EF9F27");
  D.txt("KOKURA",17,88,"#EF9F27");D.txt("5",80,88,"#EF9F27");
  R(110,92,20,12,"#185FA5");D.txt("3",114,96,"#FFFFFF");D.txt(">",121,96,"#FFFFFF");R(119,86,1,6,"#888780");
  for(var p=0;p<4;p++){var px=((p*47+t*.012*(p%2?1:-1))%190+190)%190-20;R(Math.round(px),170,4,12,"#22283a");R(Math.round(px)+1,167,2,3,"#22283a");}
  for(var g=0;g<6;g++){var x=8+g*24;R(x,184,6,16,"#888780");R(x,184,6,2,"#B4B2A9");R(x+2,187,2,2,(f.gateRed&&g>=4)?"#E24B4A":"#97C459");}
  R(0,200,150,40,"#2a2a33");for(var fy=200;fy<240;fy+=10)R(0,fy,150,1,"#33333d");for(var fx=0;fx<150;fx+=20)R(fx,200,1,40,"#33333d");
  A(.12);R(12,204,78,10,"#EF9F27");A(1);
  if(f.tonk)D.chO(104,222,{legs:true,hat:"#185FA5",apron:"#0C447C",tag:true});
  if(f.agent)D.chS(126,232);
  D.chA(40,232);D.chB(62,232);D.chT(75,150);}
D.start({scene:scene,names:{O:"▶ 站务员豚骨"},
  cam:{wide:[1,75,120],A:[3.2,40,208],Ax:[5,40,200],B:[3.2,62,208],Bx:[5,62,200],S:[3.2,126,206],Sx:[5,126,196],O:[3,104,196],Ox:[4.6,104,190],two:[2.4,51,205],T:[4,75,146],board:[2.4,50,84]},
  onLine:function(i,S){var f=S.f;f.scarf=true;f.coatB=true;f.jacket=3;f.agent=i>=2;f.tonk=i>=11;
    S.sunT=i===6?1:0;f.runA=i>=8&&i!==10&&i!==13;f.runB=f.runA;f.runS=i===15;f.board=i===13||i===14;f.gateRed=i>=16;
    if(i===17)f.sadS=true;if(i===10||i===12)f.ticket=true;},
  onEnd:function(S){S.f.scarf=true;S.f.coatB=true;S.f.jacket=3;S.f.agent=true;S.f.tonk=true;S.f.gateRed=true;S.f.sadS=true;},
  endText:"未完待续……下集：福冈机场，晴天特工的反击！",
  lines:[
["N","Monday. Hakata Station.","周一。博多站。","wide",""],
["B","It's cloudy. Good.","阴天。很好。","B",""],
["S","Stop right there, Unit B!","站住，B 号机！","S","flash"],
["A","Who are you?!","你是谁？！","Ax","shock"],
["S","I am Agent Sunny. I need her power.","我是晴天特工。我需要她的能力。","Sx",""],
["T","I need... = 我需要……","need + 名词，表达需要什么。I need coffee 我需要咖啡（老师每天早上都需要）","T","pop","I need her power."],
["S","With her, every day will be sunny!","有了她，每天都会是晴天！","S","boom"],
["B","No. I like cloudy days.","不要。我喜欢阴天。","Bx","glitch"],
["A","Run!","快跑！","A","shake"],
["T","Run! = 快跑!","一个词就能救命的英语，建议优先背","T","pop","Run!"],
["A","Excuse me! Which train goes to the airport?","打扰一下！哪趟车去机场？","A",""],
["O","Tonkotsu here. Part-time job number two.","是我豚骨。第二份兼职。","Ox","flash"],
["T","Excuse me + Which train goes to...?","问路坐车先说 Excuse me（打扰一下），再问 Which train goes to + 地点？","T","pop","Excuse me. Which train goes to the airport?"],
["O","Platform three. Only two stops.","3号站台。只要两站。","board",""],
["T","Only two stops = 只有两站","这是真的：从博多站坐地铁到福冈机场只要两站，全世界最方便的机场之一","T","pop","Only two stops."],
["S","Wait! Stop them!","等等！拦住他们！","S","shake"],
["O","Sorry. Ticket, please.","抱歉。请出示车票。","O",""],
["S","...I don't have a ticket.","……我没有票。","Sx",""],
["A","Hurry up, B!","快点，B！","two",""],
["T","Hurry up! = 快点!","赶车、赶飞机、催朋友，统统 Hurry up！","T","pop","Hurry up!"]]});
})();
