(function(){
var D=Drama,R=D.R,A=D.A,blink=D.blink;
function boat(t,k){var x=((k*53+t*.006*(k%2?1:-1))%190+190)%190-20,y=148+k*14;x=Math.round(x);
  R(x,y,11,5,"#F1EFE8");R(x+1,y+5,9,1,"#D3D1C7");R(x+8,y-7,2,7,"#F1EFE8");R(x+8,y-9,4,2,"#F1EFE8");R(x+12,y-8,2,1,"#EF9F27");R(x+9,y-8,1,1,"#2C2C2A");}
function scene(t,S){var f=S.f;
  R(0,0,150,60,"#B5D4F4");R(0,60,150,50,"#85B7EB");D.clouds(t,5,8,40,"#F1EFE8","#E6F1FB");
  if(S.rain>.1){A(.5*S.rain);R(0,0,150,110,"#444441");A(1);}
  for(var k=0;k<12;k++){var tx=k*13-4,th=10+(k*7)%8;R(tx,110-th,14,th,k%2?"#3B6D11":"#27500A");R(tx+6,108,2,4,"#412402");}
  R(0,110,150,90,"#378ADD");for(var y=112;y<200;y+=3)for(var j=0;j<4;j++){var rx=((j*41+y*11+t*.01*(y%2?1:-1))%170+170)%170-10;R(Math.round(rx),y,7,1,"#85B7EB");}
  R(18,118,44,3,"#A32D2D");for(var p=0;p<5;p++)R(20+p*10,121,2,8,"#791F1F");A(.3);R(18,130,44,2,"#A32D2D");A(1);
  boat(t,0);boat(t,1);boat(t,2);
  R(0,200,150,40,"#BA7517");for(var sx=0;sx<150;sx+=6)R(sx+(sx%12?2:0),206+(sx%18),1,1,"#854F0B");
  D.chA(40,232);D.chB(64,232);D.chS(110,232);D.chT(76,146);
  if(f.res)D.bubble(110,184,f.res,f.res==="PASSED"?"#97C459":"#E24B4A");}
D.start({scene:scene,
  cam:{wide:[1,75,120],lake:[1.8,75,150],A:[3.2,40,208],Ax:[5,40,200],B:[3.2,64,208],Bx:[5,64,196],S:[3.2,110,206],Sx:[4,110,198],T:[4,76,142]},
  onLine:function(i,S){var f=S.f;f.coatB=true;f.jacket=3;f.smileS=i<11||i>=14;
    S.rainT=(i>=7&&i<=12)?1:0;S.snowT=(i>=10&&i<=12)?1:0;f.res=(i===5||i===6)?"PASSED":((i===12||i===13)?"FAILED":"");if(i>=14)f.smileA=true;},
  onEnd:function(S){S.f.coatB=true;S.f.jacket=3;S.f.smileS=true;S.f.smileA=true;S.f.blush=true;},
  endText:"未完待续……下集：代码审查，豚骨也要发言？",
  lines:[
["N","Ohori Park. Test day.","大濠公园。测试日。","wide",""],
["S","I'm the tester today.","今天我来当测试员。","S",""],
["T","test = 测试","写完代码一定要 test。没测过的代码就像没尝过的拉面","T","pop","Let's test it."],
["A","Test one: it's cloudy. What does the app say?","测试一：阴天。App 显示什么？","A",""],
["B","Cozy day. Stay home.","舒适的一天。宅家吧。","B",""],
["S","Test passed!","测试通过！","Sx","flash"],
["T","passed 通过 / failed 失败","Test passed 测试通过，Test failed 测试失败","T","pop","Test passed!"],
["S","Test two: what if it rains?","测试二：如果下雨呢？","S",""],
["T","What if...? = 如果……会怎样","测试的灵魂问题。考虑各种意外，What if...?","T","pop","What if it rains?"],
["B","Rainy day. Eat ramen.","雨天。吃拉面。","B",""],
["S","What if it rains and snows?","如果又下雨又下雪呢？","Sx",""],
["B","Error. Too sad.","错误。太伤心了。","Bx","glitch"],
["S","Test failed! An edge case!","测试失败！一个边界情况！","Sx","flash"],
["T","edge case = 边界情况","平时很少出现、一出就出错的情况。好的测试员专门找 edge case","T","pop","It's an edge case."],
["A","Let's fix it. Rain and snow means... hot chocolate.","我们修一下。雨加雪就是……热可可。","A",""]]});
})();
