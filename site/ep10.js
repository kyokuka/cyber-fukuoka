(function(){
var D=Drama,R=D.R,A=D.A,blink=D.blink;
var SIGNC=["#E24B4A","#FAC775","#378ADD","#1D9E75","#D4537E","#EF9F27","#7F77DD"];
function scene(t,S){var f=S.f;
  R(0,0,150,72,"#10132a");
  for(var k=0;k<7;k++){var x=4+k*21,on=((t/100+k*11)%50)>1.5;R(x,4,14,62,"#141830");A(on?1:.35);R(x+2,8,10,54,SIGNC[k]);A(1);for(var y=12;y<60;y+=8)R(x+4,y,6,3,"#FFFFFF");}
  R(0,70,150,130,"#1f2430");R(0,70,150,2,"#5F5E5A");
  R(84,74,30,9,"#000000");D.txt("REPAIR",87,76,blink(600)?"#FAC775":"#EF9F27");
  [92,117,142].forEach(function(y,r){R(6,y,58,2,"#888780");for(var p=0;p<6;p++){var x=8+p*9;R(x,y-8,7,8,p%2?"#3B6D11":"#27500A");R(x+2,y-6,1,1,"#FAC775");R(x+4,y-4,1,1,"#FAC775");if((p+r)%3===0)R(x+1,y-10,2,2,"#E24B4A");}});
  for(var m=0;m<3;m++){var mx=78+m*24;R(mx,88,20,16,"#444441");R(mx+1,89,18,14,"#000000");
    for(var l=0;l<5;l++){var len=4+((l*7+m*5+Math.floor(t/(f.debug?80:300)))%12);R(mx+2,90+l*3,len,1,f.debug?"#FAC775":"#97C459");}}
  if(f.cable){for(var c=0;c<=24;c++){var cx=58+(102-58)*c/24,cy=208+(104-208)*c/24+Math.sin(c/3)*3;R(Math.round(cx),Math.round(cy),1,1,blink(200)?"#FAC775":"#EF9F27");}}
  D.chO(112,186,{hat:"#444441",apron:"#3B6D11",tag:true});
  R(70,186,80,4,"#5F5E5A");R(72,190,76,24,"#2C2C2A");R(80,182,10,4,"#378ADD");R(130,180,8,6,"#888780");
  R(0,214,150,26,"#2a2a33");for(var fx=0;fx<150;fx+=12)R(fx,214,1,26,"#33333d");
  D.chS(14,232);D.chA(34,232);D.chB(56,232);D.chT(62,150);
  if(f.ver)D.bubble(56,186,"V1.0","#FAC775");}
D.start({scene:scene,names:{O:"▶ 修理工豚骨"},
  cam:{wide:[1,75,120],A:[3.2,34,208],Ax:[5,34,200],B:[3.2,56,208],Bx:[5,56,196],S:[3.2,14,206],O:[3,112,166],Ox:[4.6,112,160],T:[4,62,146],mon:[2.4,102,96]},
  onLine:function(i,S){var f=S.f;f.coatB=true;f.jacket=3;f.smileS=true;f.cable=i>=6&&i<=11;f.debug=i>=6&&i<=11;f.ver=i===9;},
  onEnd:function(S){S.f.coatB=true;S.f.jacket=3;S.f.cable=true;},
  endText:"未完待续……下集：等待更新的深夜，便利店里的约会？",
  lines:[
["N","Akihabara. The electric town.","秋叶原。电器街。","wide",""],
["S","This is the best repair shop in Tokyo.","这是东京最好的修理店。","S",""],
["O","Welcome. Tonkotsu here. Part-time job number four.","欢迎。是我豚骨。第四份兼职。","Ox","flash"],
["A","...Of course.","……果然。","Ax","shock"],
["T","Of course = 当然 / 果然","平时是「当然」，用无语的语气说就变成「果然」。这部剧专门用来吐槽豚骨","T","pop","Of course."],
["A","Can you fix her?","你能修好她吗？","A",""],
["O","Let me debug her.","让我给她 debug 一下。","mon",""],
["T","debug = 调试 / 修 bug","de + bug = 去掉 bug。AI 编程常用：Can you help me debug this?","T","pop","Can you help me debug this?"],
["O","Which version is she?","她是哪个版本？","O",""],
["B","Version one point zero.","1.0 版本。","Bx",""],
["O","Too old! You need an update.","太旧了！你需要更新。","Ox","flash"],
["T","version 版本 / update 更新","手机弹窗 A new version is available = 有新版本可用。点 Update 就是更新","T","pop","You need an update."],
["A","How long does it take?","要多久？","A",""],
["O","One night. And... ten thousand yen.","一个晚上。还有……一万日元。","Ox","flash"],
["A","I KNEW IT!","我就知道！","Ax","shock shake"],
["T","How long does it take? = 要多久","问时间的万能句。AI 跑代码太慢时也可以吐槽：How long does it take?!","T","pop","How long does it take?"]]});
})();
