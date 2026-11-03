(function(){
var D=Drama,R=D.R,A=D.A,blink=D.blink;
var CITY=D.mkCity(31,[[6,16,60],[20,14,76],[34,20,52],[54,14,70],[68,22,58]],140,.35);
function scene(t,S){var f=S.f;
  R(0,0,150,214,"#3d2a1a");for(var y=0;y<214;y+=16)R(0,y,150,1,"#352416");
  R(6,30,84,110,"#5F5E5A");R(8,32,80,106,"#0d1020");D.clouds(t,3,38,20,"#1d2140","#171a32");
  D.drawCity(t,CITY,"#141830",.6);
  for(var c=0;c<3;c++){var cx=((c*47+t*.03)%110)-10;R(8+Math.max(0,Math.round(cx)),130,4,2,c%2?"#E24B4A":"#FAC775");}
  R(8,84,80,1,"#5F5E5A");R(47,32,2,106,"#5F5E5A");
  [24,64,118].forEach(function(lx){R(lx,0,1,18,"#2C2C2A");R(lx-4,18,9,4,"#BA7517");A(.2);R(lx-10,16,21,16,"#FAC775");A(1);});
  R(100,30,44,40,"#2C2C2A");R(102,32,40,36,"#27500A");for(var l=0;l<5;l++)R(105,36+l*6,10+(l*7)%22,1,"#F1EFE8");
  D.chO(112,186,{hat:"#633806",apron:"#633806",tag:true});
  R(124,168,16,18,"#B4B2A9");R(126,172,12,4,"#2C2C2A");if(f.coffee){for(var s=0;s<3;s++){var p=((t/50+s*6)%14);A(.5*(1-p/14));R(128+s*3,165-p,1,2,"#D3D1C7");}A(1);}
  R(96,186,54,4,"#854F0B");R(98,190,52,24,"#633806");
  R(0,214,150,26,"#854F0B");for(var fx=0;fx<150;fx+=12)R(fx,214,1,26,"#633806");
  R(26,198,44,3,"#854F0B");R(30,201,2,12,"#633806");R(64,201,2,12,"#633806");D.laptop(36,190);
  D.chA(24,232);D.chB(48,232);D.chS(78,232);D.chT(60,118);
  if(f.idea)D.bubble(48,184,"IDEA","#FAC775");}
D.start({scene:scene,names:{O:"▶ 咖啡师豚骨"},
  cam:{wide:[1,75,120],A:[3.2,24,208],Ax:[5,24,200],B:[3.2,48,208],Bx:[4,48,198],S:[3.2,78,206],Sx:[5,78,196],O:[3,112,166],Ox:[4.6,112,160],T:[4,60,114]},
  onLine:function(i,S){var f=S.f;f.coatB=true;f.jacket=3;f.smileS=true;f.idea=i===1;if(i===1)f.goldB=true;f.coffee=i>=14;},
  onEnd:function(S){S.f.coatB=true;S.f.jacket=3;S.f.smileS=true;S.f.coffee=true;},
  endText:"未完待续……下集：豚骨的屋台，什么是 API？",
  lines:[
["N","One month later. A cafe in Tenjin.","一个月后。天神的一家咖啡店。","wide",""],
["B","I have an idea. A weather app.","我有个想法。做一个天气 App。","Bx","flash"],
["T","I have an idea = 我有个想法","提案的开场白，后面直接说你的想法","T","pop","I have an idea."],
["A","A weather app? There are so many.","天气 App？已经有很多了。","A",""],
["B","Mine is different. It tells you how you feel.","我的不一样。它会告诉你今天的心情。","Bx","blush"],
["S","Cloudy means cozy. Rainy means ramen.","阴天就是舒适，雨天就是拉面。","S",""],
["T","What makes it different?","做产品第一个问题：你的有什么不一样？different = 不同的","T","pop","What makes it different?"],
["A","OK. Let's build an app!","好。我们来做个 App！","A","flash"],
["T","build = 开发","开发软件英语常说 build，不说 make。Let's build it! 动手做吧","T","pop","Let's build an app!"],
["S","What's the plan?","计划是什么？","S",""],
["A","First, an MVP. Small and simple.","先做一个 MVP。小而简单。","A",""],
["T","MVP = 最小可行产品","Minimum Viable Product：先做一个最小能用的版本给用户试，再慢慢加功能","T","pop","Let's start with an MVP."],
["B","What's the deadline?","截止日期是什么时候？","B",""],
["A","Two weeks.","两周。","A",""],
["O","Two coffees. Part-time job number six.","两杯咖啡。第六份兼职。","Ox","flash"],
["T","deadline = 截止日期","项目必问：What's the deadline? 豚骨的 deadline 是永远在打工","T","pop","What's the deadline?"]]});
})();
