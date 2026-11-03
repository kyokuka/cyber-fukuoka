(function(){
var D=Drama,R=D.R,A=D.A;
var NC=["#5DCAA5","#ED93B1","#85B7EB","#FAC775","#AFA9EC"];
D.mkCity=function(seed,arr,base,d){function rnd(){seed=seed*16807%2147483647;return seed/2147483647;}
  return arr.map(function(b){var x=b[0],w=b[1],h=b[2],win=[];for(var y=base-h+3;y<base-3;y+=4)for(var xx=x+2;xx<x+w-2;xx+=3)if(rnd()<d)win.push([xx,y,NC[Math.floor(rnd()*5)],rnd()]);return{x:x,w:w,h:h,win:win,base:base};});};
D.drawCity=function(t,c,col,a){c.forEach(function(b){R(b.x,b.base-b.h,b.w,b.h,col);b.win.forEach(function(q){A(((t/1000+q[3]*60)%13)<.5?.15:a);R(q[0],q[1],1,1,q[2]);});A(1);});};
D.bubble=function(x,y,s,c){var w=s.length*4+5,l=x-Math.floor(w/2);R(l,y,w,9,"#000000");R(l,y,w,1,c);R(l,y+8,w,1,c);R(x-1,y+9,2,2,"#000000");D.txt(s,l+3,y+2,c);};
D.clouds=function(t,n,y0,h,c1,c2,alpha){if(alpha===undefined)alpha=1;A(alpha);for(var k=0;k<n;k++){var xx=(((k*37+t*.004*(k%2?1:-1))%190)+190)%190-20,yy=y0+(k*13)%h;
  for(var r=-2;r<=2;r++){var w=24-Math.abs(r)*6+(k%3)*5;R(Math.round(xx-w/2),yy+r*2,w,2,k%2?c1:c2);}}A(1);};
D.miniYatai=function(t){R(108,150,42,4,"#712B13");for(var n=0;n<4;n++)R(110+n*10,154,8,8,"#A32D2D");
  A(.35);R(110,154,40,20,"#FAC775");A(1);D.chO(130,176,{ladle:true});
  R(108,174,42,3,"#854F0B");R(110,177,38,20,"#412402");R(106,154,3,5,"#E24B4A");
  for(var k=0;k<4;k++){var p=((t/45+k*9)%20);A(.5*(1-p/20));R(120+k*4,148-p,2,2,"#D3D1C7");}A(1);};
})();
