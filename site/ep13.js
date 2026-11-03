(function(){
var D=Drama,R=D.R,A=D.A,blink=D.blink;
function scene(t,S){var f=S.f;
  R(0,0,150,240,"#0b0f18");
  R(0,12,150,4,"#444441");for(var cx=6;cx<150;cx+=18){R(cx,16,1,20,["#378ADD","#FAC775","#E24B4A"][(cx/18|0)%3]);}
  for(var k=0;k<6;k++){var x=4+k*25;R(x,40,20,160,"#1a1d28");R(x,40,20,2,"#2C2C3a");
    for(var u=0;u<18;u++){var y=46+u*8;R(x+2,y,16,6,"#22263a");
      var on=((t/(f.down?120:260)+u*3+k*7)%5)>1;
      var c=f.down?(on?"#E24B4A":"#501313"):(on?((u+k)%3?"#97C459":"#378ADD"):"#173404");
      R(x+4,y+2,1,1,c);R(x+7,y+2,1,1,(u%2&&!f.down)?"#97C459":c);R(x+12,y+2,4,1,"#2C2C3a");}}
  R(36,20,78,18,"#2C2C2A");R(38,22,74,14,"#000000");
  if(f.down)D.txt("SERVER DOWN",53,26,blink(300)?"#E24B4A":"#A32D2D");else if(f.ok)D.txt("ALL OK",63,26,"#97C459");else D.txt("LOAD 99%",59,26,"#FAC775");
  if(f.down){R(72,4,6,4,blink(250)?"#E24B4A":"#791F1F");if(blink(500)){A(.1);R(0,0,150,240,"#E24B4A");A(1);}}
  R(0,200,150,40,"#2a2e3a");for(var fx=0;fx<150;fx+=10)for(var fy=204;fy<240;fy+=10)R(fx+4,fy,2,2,"#1a1d28");
  if(f.ramen){D.chO(134,222,{legs:true});R(142,203,8,3,"#F1EFE8");R(143,202,6,1,"#FAC775");
    for(var s=0;s<3;s++){var p=((t/50+s*6)%14);A(.5*(1-p/14));R(143+s*2,199-p,1,2,"#D3D1C7");}A(1);}
  D.chS(110,232);D.chA(40,232);D.chB(62,232);D.chT(86,146);
  if(f.hand)R(45,216,13,1,"#E8B896");
  if(f.boot)D.bubble(62,186,"RESTART","#FAC775");}
D.start({scene:scene,
  cam:{wide:[1,75,120],screen:[2.6,75,32],A:[3.2,40,208],Ax:[5,40,200],B:[3.2,62,208],Bx:[5,62,196],S:[3.2,110,206],Sx:[5,110,196],O:[3,134,196],Ox:[4.6,134,190],T:[4,86,140],two:[2.6,51,205]},
  onLine:function(i,S){var f=S.f;f.coatB=true;f.jacket=3;f.down=i>=2&&i<=11;f.ok=i>=12;f.ramen=i>=14;f.hand=i>=10&&i<=12;f.boot=i===10||i===11;
    f.smileS=i>=12;S.sunT=i===1?.6:0;S.rainT=i===1?.6:0;S.snowT=i===1?.6:0;},
  onEnd:function(S){var f=S.f;f.coatB=true;f.jacket=3;f.ok=true;f.ramen=true;f.smileS=true;f.loveO=true;f.blush=true;},
  endText:"未完待续……最终回：commit。",
  lines:[
["N","Tokyo Weather Office. Server room.","东京气象局。服务器机房。","wide",""],
["S","Sun, rain, and snow. At the same time!","晴天、下雨、下雪。同时出现！","Sx","shake"],
["N","SERVER DOWN.","服务器宕机。","screen","glitch"],
["T","The server is down = 服务器挂了","down 在这里是「宕机、挂了」。网站打不开时就说 The server is down","T","pop","The server is down."],
["A","Why?","为什么？","Ax","shock"],
["B","Too many requests. Everyone in Tokyo wants snow.","请求太多了。全东京的人都想要雪。","B",""],
["T","request = 请求","Too many requests 请求太多。网站报错 429 就是这个意思","T","pop","Too many requests."],
["A","Do we have a backup?","我们有备份吗？","A",""],
["S","Yes. On the old server.","有。在旧服务器上。","S",""],
["T","backup = 备份","重要的东西一定要 backup。老师的人生信条：没有备份，就等于没有","T","pop","Do we have a backup?"],
["B","I'll restart the server. Hold my hand.","我来重启服务器。握住我的手。","two","glitch"],
["N","Restarting...","重启中……","wide","boom"],
["N","...It works!","……成功了！","screen","flash"],
["T","It works! = 能用了","程序终于跑通时最爽的一句。反过来 It doesn't work 就是「不好使」","T","pop","It works!"],
["O","Good job, team. Ramen for everyone.","干得好，团队。拉面人人有份。","O","flash"],
["A","...How much?","……多少钱？","Ax","shock"],
["O","Free.","免费。","Ox","love"],
["A","FREE?!","免费？！","Ax","shock boom"],
["T","Good job! = 干得好","夸团队就说 Good job!。还有，豚骨第一次免费，建议截图留念","T","pop","Good job!"]]});
})();
