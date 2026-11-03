(function(){
var D=Drama,R=D.R,A=D.A,blink=D.blink;
var sunset=0,sunsetT=0;
var CLOUDY=["#10132a","#141832","#191d3a","#1d2140","#222645","#262a48"];
var GOLD=["#26215C","#534AB7","#993556","#D4537E","#D85A30","#EF9F27"];
function scene(t,S){var f=S.f;sunset+=(sunsetT-sunset)*.02;
  for(var b=0;b<6;b++){R(0,b*20,150,20,CLOUDY[b]);}
  if(sunset>.01){A(sunset);for(var g=0;g<6;g++)R(0,g*20,150,20,GOLD[g]);A(1);}
  if(sunset>.05){A(sunset);R(94,100,24,20,"#FAC775");R(97,97,18,3,"#FAC775");R(99,95,14,2,"#FAC775");A(1);}
  for(var k=0;k<7;k++){var xx=(((k*37+t*.004*(k%2?1:-1)+sunset*k*60)%200)+200)%200-25,yy=10+(k*13)%70;A(Math.max(0,1-sunset*1.4));
    for(var r=-3;r<=3;r++){var w=28-Math.abs(r)*6+(k%3)*6;R(Math.round(xx-w/2),yy+r*2,w,2,k%2?"#2a2e52":"#232748");}}A(1);
  R(22,18,9,102,"#1a2e4d");R(24,10,5,8,"#1a2e4d");R(26,2,1,8,"#85B7EB");if(blink(700))R(25,0,3,2,"#E24B4A");
  for(var ty=22;ty<118;ty+=4){R(23,ty,7,1,sunset>.5?"#EF9F27":"#22406b");}
  [[0,10,14],[34,12,22],[48,8,12],[58,14,18]].forEach(function(q){R(q[0],120-q[2],q[1],q[2],"#141830");});
  R(0,120,150,50,"#0c2a4d");if(sunset>.01){A(sunset);R(0,120,150,50,"#712B13");A(1);}
  for(var y=122;y<170;y+=3)for(var j=0;j<4;j++){var wx=((j*41+y*7+t*.01*(y%2?1:-1))%170+170)%170-10;A(.5);R(Math.round(wx),y,7,1,sunset>.5?"#F0997B":"#185FA5");}A(1);
  if(sunset>.05){for(var ry=122;ry<168;ry+=2){if(((ry+t/120)%4)>1.3){A(sunset*(.8-(ry-122)/70));R(98+Math.round(Math.sin(t/300+ry)*2),ry,16-Math.floor((ry-122)/6),1,"#FAC775");}}A(1);}
  R(0,170,150,70,"#3d2a1a");if(sunset>.01){A(sunset*.7);R(0,170,150,70,"#854F0B");A(1);}
  for(var sx=0;sx<150;sx+=7)for(var sy=176;sy<240;sy+=9)R(sx+(sy%2)*3,sy,1,1,"#633806");
  A(.6);R(0,170,150,1,"#B5D4F4");A(1);
  if(f.yatai){R(108,150,42,4,"#712B13");for(var n=0;n<4;n++)R(110+n*10,154,8,8,"#A32D2D");
    A(.35);R(110,154,40,20,"#FAC775");A(1);
    D.chO(130,176,{ladle:true});
    R(108,174,42,3,"#854F0B");R(110,177,38,20,"#412402");R(106,154,3,5,"#E24B4A");}
  D.chS(96,232);D.chA(48,232);D.chB(72,232);D.chT(75,150);
  if(f.hearts){D.hearts(60,196);}}
D.start({scene:scene,names:{O:"▶ 海滩屋台豚骨"},
  cam:{wide:[1,75,120],A:[3.2,48,208],Ax:[5,48,200],B:[3.2,72,208],Bx:[5,72,200],S:[3.2,96,206],Sx:[5,96,196],O:[3,130,164],Ox:[4.6,130,158],T:[4,75,144],sky:[1.4,90,80],two:[2.6,60,205]},
  onLine:function(i,S){var f=S.f;f.coatB=true;f.jacket=3;
    sunsetT=i>=5?1:0;if(i===1||i===2)f.sadS=true;if(i>=6&&i<=9)f.smileS=true;if(i>=10)f.smileS=true;
    if(i===4)f.goldB=true;f.blushA=i>=10&&i<=13;f.hearts=i>=11&&i<=13;f.yatai=i>=14;if(i===12||i===13)f.smileA=true;},
  onEnd:function(S){S.f.coatB=true;S.f.jacket=3;S.f.yatai=true;S.f.smileS=true;S.f.blush=true;S.f.smileA=true;S.f.hearts=true;},
  endTitle:"THE END · SEASON 1",endText:"第一季完结。谢谢观看，记得复习！",
  lines:[
["N","Momochi Beach. The last day.","百道海滨。最后一天。","wide",""],
["S","Every day in Fukuoka... cloudy. I never saw the sunset.","在福冈的每一天……都是阴天。我从没看过日落。","Sx",""],
["T","I never saw... = 我从没见过……","never = 从来没有。老师也从没见过不爱吃拉面的福冈人","T","pop","I never saw the sunset."],
["B","I can't make every day sunny.","我没法让每天都是晴天。","B",""],
["B","But I can make one beautiful evening.","但我可以给你一个美丽的傍晚。","Bx",""],
["N","The clouds open.","云，散开了。","sky","flash"],
["S","...It's beautiful.","……好美。","Sx",""],
["T","It's beautiful = 好美","看到美景时最自然的一句。日落、大海、拉面，都可以用","T","pop","It's beautiful."],
["S","Thank you, Unit B. I'm sorry.","谢谢你，B 号机。对不起。","S",""],
["T","I'm sorry = 对不起","反派洗白二连：Thank you + I'm sorry。道歉就用 I'm sorry，简单真诚","T","pop","Thank you. I'm sorry."],
["A","B... I have something to say.","B……我有话想对你说。","A",""],
["A","I like you.","我喜欢你。","Ax",""],
["B","...I like you too. I think.","……我也喜欢你。大概吧。","Bx","blush"],
["T","too = 也","too 放句尾 = 也。后面的 I think（我觉得）是机器人的傲娇，老师给满分","T","pop","I like you too. I think."],
["O","Ramen! Fresh ramen! Beach special!","拉面！新鲜拉面！海滩特供！","O","flash"],
["A","...How much is it?","……多少钱？","Ax","shock"],
["O","Ten thousand yen.","一万日元。","Ox","flash"],
["N","Everyone: NO!","全体：不要！","wide","boom shock"],
["T","See you next season!","这一季你学会了：天气、点餐、付钱、买衣服、坐车、坐飞机、表白。下一季见！","T","pop","See you next season!"]]});
})();
