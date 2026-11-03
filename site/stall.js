(function(){
var D=Drama,R=D.R,A=D.A,blink=D.blink;
var seed=5;function rnd(){seed=seed*16807%2147483647;return seed/2147483647;}
var NC=["#5DCAA5","#ED93B1","#85B7EB","#FAC775","#AFA9EC"];
var FAR=[[0,20,50],[18,16,66],[32,22,44],[52,18,60],[68,24,72],[90,16,52],[104,20,64],[122,28,56]].map(function(b){var x=b[0],w=b[1],h=b[2],win=[];for(var y=100-h+3;y<97;y+=4)for(var xx=x+2;xx<x+w-2;xx+=3)if(rnd()<.3)win.push([xx,y,NC[Math.floor(rnd()*5)],rnd()]);return{x:x,w:w,h:h,win:win};});
D.stall=function(t,S,served){
  R(0,0,150,100,"#0d1020");R(0,0,150,30,"#10132a");
  var cs=1+S.rain*.8;
  for(var k=0;k<6;k++){var d=k%2?1:-1;var xx=(((k*41+t*.004*d*(1+S.rain*4))%190)+190)%190-20,yy=12+(k*15)%44;for(var r=-3;r<=3;r++){var w=(24-Math.abs(r)*6+(k%3)*6)*cs;R(Math.round(xx-w/2),yy+r*2,Math.round(w),2,S.rain>.5?(k%2?"#2C2C3a":"#24243a"):(k%2?"#1d2140":"#171a32"));}}
  FAR.forEach(function(b){R(b.x,100-b.h,b.w,b.h,"#141830");b.win.forEach(function(q){A(((t/1000+q[3]*60)%13)<.5?.15:.55);R(q[0],q[1],1,1,q[2]);});A(1);});
  R(36,30,3,70,"#1a2e4d");R(37,22,1,8,"#85B7EB");if(blink(700))R(36,20,3,2,"#E24B4A");
  R(0,100,150,14,"#08121f");for(var y=101;y<114;y+=2)for(var k2=0;k2<3;k2++){var x2=((k2*53+y*11+t*.012*(y%4?1:-1))%170+170)%170-10;R(Math.round(x2),y,6,1,"#10223a");}
  R(0,114,150,126,"#121219");
  A(.15);R(0,112,150,110,"#F09595");A(1);
  R(12,122,126,64,"#2a1a10");A(.3);R(12,122,126,64,"#FAC775");A(1);
  for(var i=0;i<5;i++){R(18+i*8,142,6,18,"#F1EFE8");for(var m=0;m<4;m++)R(19+i*8,145+m*4,4,1,"#5F5E5A");}
  R(96,136,36,2,"#633806");[["#5DCAA5",98],["#E24B4A",104],["#FAC775",110],["#85B7EB",116],["#ED93B1",122]].forEach(function(b){R(b[1],129,3,7,b[0]);R(b[1]+1,127,1,2,b[0]);});
  R(100,170,22,12,"#B4B2A9");R(99,169,24,2,"#D3D1C7");
  for(var s=0;s<6;s++){var p=((t/40+s*7)%30);A(.55*(1-p/30));R(104+s*3+Math.round(Math.sin(t/250+s)*2),167-p,2,2,"#D3D1C7");}A(1);
  D.chO(75,186,{ladle:true});
  R(6,114,138,7,"#712B13");R(6,114,138,1,"#993C1D");R(10,121,130,2,"#4A1B0C");
  var sway=S.rain>.5?Math.round(Math.sin(t/120)):0;
  for(var n=0;n<11;n++){var nx=(14+n*11.5|0)+sway;R(nx,123,10,14,"#A32D2D");R(nx,123,10,1,"#E24B4A");}
  R(10,123,2,95,"#412402");R(138,123,2,95,"#412402");
  [[3,124],[142,124]].forEach(function(l){var x=l[0],yy=l[1];A(.25);R(x-4,yy-3,13,15,"#F09595");A(1);R(x,yy,5,8,"#E24B4A");R(x,yy+2,5,1,"#A32D2D");R(x,yy+5,5,1,"#A32D2D");R(x+2,yy-2,1,2,"#2C2C2A");});
  R(34,185,82,4,"#854F0B");R(34,185,82,1,"#BA7517");R(36,189,78,26,"#412402");for(var bx=44;bx<114;bx+=10)R(bx,189,1,26,"#2a1a08");
  if(served){[[58,181],[86,181]].forEach(function(b){var x=b[0],yy=b[1];R(x,yy,12,4,"#F1EFE8");R(x+1,yy-1,10,1,"#FAC775");R(x+3,yy-1,2,1,"#F0997B");R(x+7,yy-1,2,1,"#97C459");R(x+4,yy+4,4,1,"#D3D1C7");R(x+11,yy-6,1,6,"#BA7517");R(x+12,yy-6,1,6,"#BA7517");
    for(var q=0;q<3;q++){var pp=((t/50+q*6)%16);A(.5*(1-pp/16));R(x+3+q*3,yy-3-pp,1,2,"#D3D1C7");}A(1);});}
  [40,100].forEach(function(x){R(x,216,10,2,"#5F5E5A");R(x+4,218,2,8,"#444441");});
  if(S.rain>.3){for(var rr=0;rr<10;rr++){var rx=(rr*37+Math.floor(t/200)*11)%150,ry=101+(rr*7)%12;A(.6*S.rain);R(rx,ry,3,1,"#85B7EB");}A(1);}
  D.chA(20,238);D.chB(130,238);D.chT(75,104);};
D.stallCam={wide:[1,75,120],O:[3,75,166],Ox:[4.6,75,160],A:[3.2,20,214],Ax:[5,20,206],B:[3.2,130,214],Bx:[5,130,206],T:[4,75,98],sky:[1.6,75,70]};
})();
