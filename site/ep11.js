(function(){
var D=Drama,R=D.R,A=D.A,blink=D.blink;
var PC=["#E24B4A","#FAC775","#378ADD","#1D9E75","#D4537E","#EF9F27","#7F77DD","#F1EFE8"];
function scene(t,S){var f=S.f;
  R(0,0,150,30,"#F1EFE8");for(var lx=6;lx<150;lx+=36)R(lx,10,24,4,"#FFFFFF");R(0,29,150,1,"#D3D1C7");
  R(0,30,150,184,"#E6F1FB");R(0,30,150,4,"#1D9E75");R(0,34,150,2,"#EF9F27");
  R(80,40,18,9,"#2C2C2A");D.txt("2:00",81,42,"#97C459");
  for(var r=0;r<4;r++){var y=74+r*28;R(4,y,64,2,"#888780");for(var p=0;p<9;p++){var c=PC[(p*3+r*5)%8];R(6+p*7,y-10,5,10,c);R(6+p*7,y-10,5,1,"#FFFFFF");}}
  R(104,40,46,150,"#888780");for(var d=0;d<2;d++){var dx=106+d*22;R(dx,44,20,142,"#B5D4F4");
    for(var s=0;s<6;s++){R(dx,62+s*22,20,1,"#888780");for(var b=0;b<4;b++)R(dx+2+b*5,52+s*22,3,9,PC[(b+s+d)%8]);}A(.25);R(dx+2,44,2,142,"#FFFFFF");A(1);}
  D.chO(80,186,{hat:"#1D9E75",apron:"#1D9E75",tag:true});
  R(56,186,48,4,"#B4B2A9");R(58,190,44,24,"#5F5E5A");
  R(60,178,14,8,"#B4B2A9");R(60,178,14,1,"#D3D1C7");for(var k=0;k<3;k++){var pp=((t/50+k*6)%14);A(.5*(1-pp/14));R(63+k*4,175-pp,1,2,"#888780");}A(1);
  R(88,176,12,10,"#444441");R(90,178,8,3,"#5DCAA5");
  if(f.bento){R(70,183,10,3,"#F1EFE8");R(71,182,8,1,"#E24B4A");if(f.warm){for(var w=0;w<3;w++){var q=((t/40+w*5)%12);A(.6*(1-q/12));R(72+w*3,180-q,1,2,"#888780");}A(1);}}
  R(0,214,150,26,"#D3D1C7");for(var fx=0;fx<150;fx+=10)R(fx,214,1,26,"#B4B2A9");
  D.chA(24,232);D.chB(44,232);D.chT(126,128);
  if(f.pct)D.bubble(44,180,"UPDATE "+f.pct+"%","#5DCAA5");
  if(f.hearts)D.hearts(34,196);}
D.start({scene:scene,names:{O:"▶ 夜班豚骨"},
  cam:{wide:[1,75,120],A:[3.2,24,208],Ax:[5,24,200],B:[3.2,44,208],Bx:[3.4,44,196],O:[3,80,166],Ox:[4.6,80,160],T:[4,126,124],two:[2.6,34,205],clock:[3,89,60]},
  onLine:function(i,S){var f=S.f;f.coatB=true;f.jacket=3;f.pct=Math.min(99,37+i*4);f.bento=i>=6;f.warm=i>=8&&i<=10;f.hearts=i>=15;if(i>=15){f.blush=true;f.blushA=true;}},
  onEnd:function(S){S.f.coatB=true;S.f.jacket=3;S.f.pct=99;S.f.bento=true;S.f.hearts=true;S.f.blush=true;S.f.blushA=true;},
  endText:"未完待续……下集：东京塔，更新完成，部署开始！",
  lines:[
["N","2:00 AM. A convenience store.","凌晨两点。便利店。","clock",""],
["B","Update... thirty-seven percent.","更新中……37%。","Bx",""],
["A","Are you hungry?","你饿吗？","A",""],
["B","Robots don't eat. ...But I want to try.","机器人不吃东西。……但我想试试。","B","blush"],
["O","Night shift. Part-time job number five.","夜班。第五份兼职。","Ox","flash"],
["T","night shift = 夜班","豚骨的兼职已经多到可以写进简历了","T","pop","Night shift."],
["O","Do you want it warmed up?","要加热吗？","O",""],
["T","Do you want it warmed up?","日本便利店买便当必听句（日语「温めますか」）。回答 Yes, please 就好","T","pop","Do you want it warmed up? Yes, please."],
["A","Yes, please.","好的，谢谢。","A",""],
["B","A, can you teach me? What is a prompt?","A，你能教我吗？什么是 prompt？","B",""],
["A","A prompt is... what you say to an AI.","prompt 就是……你对 AI 说的话。","A",""],
["T","prompt = 提示词 / 指令","给 AI 的指令叫 prompt。写好 prompt 的秘诀：说清楚你要什么","T","pop","A prompt is what you say to an AI."],
["B","Can you explain it simply?","能简单解释一下吗？","B",""],
["A","Step by step: what you want, why, and an example.","一步一步来：你要什么、为什么、再给个例子。","A",""],
["T","step by step = 一步一步","让 AI 讲清楚复杂问题的咒语：Explain it step by step","T","pop","Can you explain it step by step?"],
["B","OK. My prompt: stay with me tonight.","好。我的 prompt：今晚陪着我。","Bx",""],
["A","...Prompt accepted.","……指令已接收。","Ax",""]]});
})();
