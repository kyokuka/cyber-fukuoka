(function(){
var D=Drama,R=D.R,A=D.A,blink=D.blink;
var CITY=D.mkCity(41,[[104,12,50],[116,14,66],[130,18,44]],120,.4);
function scene(t,S){var f=S.f;
  R(0,0,150,214,"#2a2e3a");
  R(100,30,46,90,"#5F5E5A");R(102,32,42,86,"#0d1020");D.drawCity(t,CITY,"#141830",.6);
  R(8,36,76,56,"#888780");R(10,38,72,52,"#F1EFE8");
  R(16,42,16,30,"#2C2C2A");R(17,43,14,28,"#F1EFE8");R(19,46,10,6,"#85B7EB");R(19,54,10,1,"#888780");R(19,57,8,1,"#888780");R(19,60,10,4,"#ED93B1");
  R(36,56,10,1,"#E24B4A");R(44,55,2,3,"#E24B4A");
  R(50,44,26,16,"#2C2C2A");R(51,45,24,14,"#F1EFE8");R(55,49,6,4,"#B4B2A9");R(59,47,8,6,"#B4B2A9");
  D.txt("MVP",52,66,"#185FA5",2);
  for(var m=0;m<2;m++){var mx=86+m*26;R(mx,160,22,18,"#444441");R(mx+1,161,20,16,"#000000");D.codeLines(t,mx+1,163,19,5,f.fast,m?"#85B7EB":"#97C459");R(mx+9,178,4,8,"#444441");}
  R(0,186,150,4,"#854F0B");R(2,190,146,24,"#633806");
  R(6,170,8,16,"#A32D2D");R(4,160,12,10,"#3B6D11");R(8,156,4,4,"#639922");
  R(0,214,150,26,"#444441");for(var fx=0;fx<150;fx+=14)R(fx,214,1,26,"#3a3a44");
  if(f.tonk)D.chO(128,222,{legs:true});
  D.chA(30,232);D.chB(54,232);D.chT(70,140);
  if(f.typo)D.bubble(54,184,"TYPO","#E24B4A");if(f.lgtm)D.bubble(128,178,"LGTM","#97C459");}
D.start({scene:scene,names:{O:"▶ 工程师豚骨"},
  cam:{wide:[1,75,120],board:[2.4,46,64],A:[3.2,30,208],Ax:[5,30,200],B:[3.2,54,208],Bx:[4,54,198],O:[3,128,196],Ox:[4.2,128,188],T:[4,70,136],mon:[2.6,110,170]},
  onLine:function(i,S){var f=S.f;f.coatB=true;f.jacket=3;f.tonk=i>=6;f.typo=i===3;f.lgtm=i>=13;f.fast=i===12;if(i>=13)f.loveO=true;},
  onEnd:function(S){S.f.coatB=true;S.f.jacket=3;S.f.tonk=true;S.f.lgtm=true;S.f.loveO=true;},
  endText:"未完待续……下集：发布日！用户会来吗？",
  lines:[
["N","Our office. Night.","我们的办公室。夜晚。","board",""],
["A","B, can you review my code?","B，你能帮我审查一下代码吗？","A",""],
["T","review = 审查","写完代码请别人看一眼，叫 code review。Can you review my code?","T","pop","Can you review my code?"],
["B","There's a typo. You wrote cloudy with two D's.","有个拼写错误。你把 cloudy 写成了两个 d。","Bx",""],
["T","typo = 拼写错误","typo 就是打错字。有时候一个 typo 就能让整个程序崩掉","T","pop","There's a typo."],
["A","Oops. Fixed.","哎呀。改好了。","Ax","shock"],
["O","Excuse me. I want to review too.","打扰了。我也要审查。","Ox","flash"],
["A","Tonkotsu?! Why?","豚骨？！为什么？","Ax","shock"],
["O","Before ramen, I was an engineer. Twenty years.","做拉面之前，我是工程师。干了二十年。","O",""],
["T","Before..., I was... = 以前我是……","讲经历常用。豚骨的人设又多了一层","T","pop","Before ramen, I was an engineer."],
["O","This function is too long. Can you make it shorter?","这个函数太长了。能写短一点吗？","O",""],
["T","Can you make it shorter?","让 AI 精简代码或文字都用这句。make it simpler 更简单，make it faster 更快","T","pop","Can you make it shorter?"],
["A","...Done.","……好了。","mon",""],
["O","Looks good to me.","我看没问题。","Ox",""],
["T","Looks good to me = LGTM","代码审查通过时最常说的话，缩写 LGTM。看到这四个字母就可以合并代码了","T","pop","Looks good to me."]]});
})();
