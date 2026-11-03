(function(){
var D=Drama,R=D.R,A=D.A,blink=D.blink;
var JET=["#ED93B1","#5DCAA5","#FAC775","#85B7EB","#AFA9EC"];
function scene(t,S){var f=S.f;
  R(0,0,150,170,"#0d1020");D.clouds(t,4,6,24,"#1d2140","#171a32");
  for(var y=30;y<172;y++){var lw=Math.round(48+Math.sin(y/22)*8),rw=Math.round(102-Math.sin(y/20+1)*8);
    R(0,y,lw,1,Math.floor(y/8)%2?"#D85A30":"#993C1D");R(rw,y,150-rw,1,Math.floor(y/8)%2?"#534AB7":"#3C3489");
    if(y%8===3){for(var wx=4;wx<lw-3;wx+=7)R(wx,y,3,2,"#FAC775");for(var wx2=rw+4;wx2<147;wx2+=7)R(wx2,y,3,2,"#AFA9EC");}}
  R(52,96,46,3,"#888780");R(52,99,46,1,"#5F5E5A");
  R(0,170,150,36,"#0C447C");for(var ry=172;ry<206;ry+=3)for(var k=0;k<3;k++){var rx=((k*47+ry*9+t*.012*(ry%2?1:-1))%170+170)%170-10;R(Math.round(rx),ry,6,1,"#185FA5");}
  var hi=f.fountain?1:.35;
  for(var j=0;j<5;j++){var x=52+j*11,h=Math.round((20+12*Math.sin(t/300+j))*hi),c=f.fountain?JET[(j+Math.floor(t/400))%5]:"#B5D4F4";
    for(var q=0;q<h;q+=2){A(.85-q/(h*1.6));R(x+((q/2)%2),190-q,2,2,c);}A(1);
    A(.5);R(x-2,188,6,2,"#E6F1FB");A(1);}
  R(0,206,150,34,"#5F5E5A");for(var fx=0;fx<150;fx+=10)R(fx,206,1,34,"#444441");R(0,206,150,1,"#888780");
  D.chA(30,232);D.chB(54,232);D.chS(112,232);D.chT(80,146);
  if(f.label)D.bubble(f.label[1],178,f.label[0],"#FAC775");}
D.start({scene:scene,
  cam:{wide:[1,75,120],fountain:[1.8,75,160],A:[3.2,30,208],Ax:[5,30,200],B:[3.2,54,208],Bx:[5,54,196],S:[3.2,112,206],Sx:[5,112,196],T:[4,80,142],two:[2.6,42,205]},
  onLine:function(i,S){var f=S.f;f.coatB=true;f.jacket=3;f.smileS=true;f.fountain=i>=10;
    f.label=(i>=2&&i<=3)?["FRONTEND",42]:((i>=5&&i<=6)?["BACKEND",42]:((i>=8&&i<=9)?["DATABASE",42]:null));},
  onEnd:function(S){S.f.coatB=true;S.f.jacket=3;S.f.smileS=true;S.f.fountain=true;S.f.blush=true;},
  endText:"未完待续……下集：大濠公园，测试开始！",
  lines:[
["N","Canal City Hakata.","博多运河城。","wide",""],
["S","Beautiful. Is this the frontend?","好漂亮。这就是前端吗？","S",""],
["A","Yes! The frontend is what users see.","对！前端就是用户看到的部分。","two",""],
["T","frontend = 前端","按钮、页面、颜色，用户能看到、能点的都是前端","T","pop","The frontend is what users see."],
["B","And the backend?","那后端呢？","B",""],
["A","The backend is like a warehouse. Users don't see it.","后端就像仓库。用户看不到。","two",""],
["T","backend = 后端","算价格、存订单、管库存都在后端。网店的页面是前端，仓库系统是后端","T","pop","The backend is like a warehouse."],
["B","Where is the data stored?","数据存在哪里？","B",""],
["A","In a database.","存在数据库里。","two",""],
["T","database = 数据库","Where is the data stored? 做系统时一定会问的问题","T","pop","Where is the data stored?"],
["N","The fountain show begins.","喷泉表演开始了。","fountain","flash"],
["B","I want our frontend to look like this.","我想让我们的前端也像这样。","Bx","blush"],
["T","look like = 看起来像","I want it to look like this. 给 AI 发截图说「我要做成这样」，最常用","T","pop","I want it to look like this."]]});
})();
