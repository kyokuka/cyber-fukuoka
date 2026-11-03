(function(){
var D=Drama,R=D.R,A=D.A;
var FC=["#ED93B1","#FAC775","#5DCAA5","#85B7EB","#F0997B"];
D.fireworks=function(t,n,top){top=top||20;for(var k=0;k<n;k++){var period=1800+k*370,tt=t+k*611,ph=tt%period,p=ph/period,cyc=Math.floor(tt/period);
  var cx=20+((k*53+cyc*37)%110),cy=top+((k*29+cyc*11)%40),col=FC[(k+cyc)%5];
  if(p<.25){R(cx,Math.round(cy+50*(1-p/.25)),1,2,"#FAC775");}
  else{var r=Math.round((p-.25)*36);A(Math.max(0,1-(p-.25)/.75));for(var a=0;a<12;a++){var an=a*Math.PI/6;R(Math.round(cx+Math.cos(an)*r),Math.round(cy+Math.sin(an)*r),1,1,col);}A(1);}}};
D.codeLines=function(t,x,y,w,n,fast,col){for(var l=0;l<n;l++){var len=3+((l*7+x+Math.floor(t/(fast?90:320)))%(w-4));R(x+1+(l%3===1?2:0),y+l*3,Math.min(len,w-3),1,col||"#97C459");}};
D.laptop=function(x,y){R(x,y,14,8,"#5F5E5A");R(x+1,y+1,12,6,"#185FA5");R(x+2,y+2,6,1,"#85B7EB");R(x+2,y+4,9,1,"#85B7EB");R(x-2,y+8,18,2,"#888780");};
})();
