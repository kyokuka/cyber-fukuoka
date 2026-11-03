/* Season 4 · Cyber Guangzhou. Hi-res world: 300 x 480 (twice the pixels of seasons 1-3). */
(function(){
var D=Drama,R=D.R,A=D.A,blink=D.blink,txt=D.txt;
var K="#2C2C2A";
function spr(x,y,rows,pal){for(var r=0;r<rows.length;r++){var row=rows[r],c=0;while(c<row.length){var ch=row.charAt(c),n=1;while(c+n<row.length&&row.charAt(c+n)===ch)n++;if(pal[ch])R(x+c,y+r,n,1,pal[ch]);c+=n;}}}
function shadow(x,y,w){A(.35);R(x-w,y,w*2,2,"#000000");A(1);}

/* ---------- A: the lead. Hot city, so a tee and shorts. ---------- */
var A_HEAD=["....kkkkkkk.....","..kkkkkkkkkkk...",".kkkkkkkkkkkkkk.",".kkkkkkkkkkkkkkk","kkkkskkkkkksskkk","kksssssssssssskk","kvvvvvvvvvvvvvvk","dvwwvvvvvvvwwvvd","dvvvvvvvvvvvvvvd",".ssssssssssssss.",".ssssssssssssss.","..ssssssssssss..","..ssssssssssss..","...ssssssssss...","....dssssssd....","......ssss......"];
var A_PAL={k:"#1a1a24",s:"#E8B896",d:"#C9956F",v:"#5DCAA5",w:"#E1F5EE"};
function chA(x,y){var S=D.S,f=S.f,tk=S.talk==="A"&&blink(150),b=tk?1:0;y-=b;var sk="#E8B896";
  shadow(x,y+b,11);
  R(x-8,y-4,7,4,"#F1EFE8");R(x+1,y-4,7,4,"#F1EFE8");R(x-8,y-1,7,1,"#888780");R(x+1,y-1,7,1,"#888780");
  R(x-7,y-16,5,12,sk);R(x+2,y-16,5,12,sk);R(x+5,y-16,2,12,"#C9956F");
  R(x-9,y-26,18,10,"#2C2C2A");R(x-1,y-26,1,8,"#444441");
  R(x-10,y-48,20,22,"#1D9E75");R(x+5,y-48,5,22,"#0F6E56");R(x-10,y-48,20,1,"#5DCAA5");R(x-3,y-48,6,2,sk);R(x-2,y-46,4,1,sk);
  R(x-5,y-41,5,5,"#FAC775");R(x-4,y-40,3,3,"#EF9F27");
  if(f.armsUp){R(x-13,y-60,3,14,sk);R(x+10,y-60,3,14,"#C9956F");R(x-13,y-48,3,4,"#1D9E75");R(x+10,y-48,3,4,"#0F6E56");}
  else{R(x-13,y-47,3,9,"#1D9E75");R(x+10,y-47,3,9,"#0F6E56");R(x-13,y-38,3,10,sk);R(x+10,y-38,3,10,"#C9956F");R(x-13,y-28,3,3,sk);R(x+10,y-28,3,3,"#C9956F");}
  var hx=x-8,hy=y-64;spr(hx,hy,A_HEAD,A_PAL);
  if(f.blushA){R(hx+2,hy+10,3,1,"#F09595");R(hx+11,hy+10,3,1,"#F09595");}
  if(f.shock){R(x-2,hy+11,4,3,K);R(x-1,hy+12,2,1,"#993C1D");R(x+9,hy-4,2,5,"#85B7EB");}
  else if(f.smileA){R(x-3,hy+11,1,1,K);R(x-2,hy+12,4,1,K);R(x+2,hy+11,1,1,K);}
  else R(x-2,hy+12,4,tk?2:1,K);
  if(f.dripA){var p=(D.time()/12)%22;A(.9);R(x-5,hy+Math.round(p),1,3,"#85B7EB");R(x+4,hy+Math.round((p+11)%22),1,3,"#85B7EB");A(1);A(.35);R(hx,hy,16,3,"#85B7EB");A(1);}}

/* ---------- B: the weather girl, now the weather of Guangzhou ---------- */
var B_HEAD=["....ppppppp.....","..ppppppppppp...",".pppppppppppppp.","ppppPpppppPppppp","ppsssssssssssspp","ppvvvvvvvvvvvvpp","ppvwwvvvvvwwvvpp","ppvvvvvvvvvvvvpp","ppsssssssssssspp","ppsssssssssssspp","pp.ssssssssss.pp","pp..ssssssss..pp","pp...ssssss...pp","p......ss......p"];
var B_PAL={p:"#D4537E",P:"#ED93B1",s:"#F2C9A8",v:"#ED93B1",w:"#FBEAF0"};
function chB(x,y){var S=D.S,f=S.f,tk=S.talk==="B"&&blink(150),b=tk?1:0;y-=b;var sk="#F2C9A8";
  shadow(x,y+b,10);
  R(x-6,y-5,5,5,"#D4537E");R(x+1,y-5,5,5,"#D4537E");R(x-5,y-20,3,15,"#1a1a24");R(x+2,y-20,3,15,"#1a1a24");
  R(x-10,y-30,20,10,"#72243E");R(x-10,y-21,20,1,"#D4537E");for(var k=0;k<5;k++)R(x-9+k*4,y-28,1,7,"#5a1a30");
  R(x-8,y-46,16,16,"#4B1528");R(x-8,y-50,16,4,"#D4537E");R(x-8,y-46,1,16,"#72243E");
  R(x-2,y-42,4,4,blink(500)?(f.red?"#E24B4A":"#ED93B1"):"#993556");
  R(x-11,y-49,3,16,"#4B1528");R(x+8,y-49,3,16,"#4B1528");R(x-11,y-33,3,3,sk);R(x+8,y-33,3,3,sk);
  var hx=x-8,hy=y-64;spr(hx,hy,B_HEAD,B_PAL);
  if(f.blush){R(hx+3,hy+9,3,1,"#F09595");R(hx+10,hy+9,3,1,"#F09595");R(x-2,hy+10,4,1,"#993556");R(x-3,hy+9,1,1,"#993556");R(x+2,hy+9,1,1,"#993556");}
  else R(x-1,hy+10,3,tk?2:1,"#993556");
  if(f.fanB){R(x+11,y-46,8,8,"#FAC775");R(x+12,y-45,6,6,"#EF9F27");R(x+14,y-38,2,6,"#854F0B");}}

/* ---------- Mr Drizzle: London's weather, on holiday ---------- */
var dz={x:340,y:300,tx:340,ty:300};
function chD(S){var t=D.time(),f=S.f;dz.x+=(dz.tx-dz.x)*.05;dz.y+=(dz.ty-dz.y)*.05;
  var x=Math.round(dz.x),y=Math.round(dz.y+Math.sin(t/420)*2),tk=S.talk==="D"&&blink(150),heavy=S.rain>.5;
  A(.8);for(var k=0;k<(heavy?16:9);k++){var rx=x-22+((k*7)%44),len=440-y,ry=y+2+((t/6+k*29)%len);R(rx,Math.round(ry),1,5,"#85B7EB");}A(1);
  var body=heavy?"#6b6a64":"#BDBBB3",hi=heavy?"#8f8e88":"#E2E0D8",lo=heavy?"#4a4a46":"#8f8d86";
  R(x-24,y-16,48,16,body);R(x-27,y-12,54,10,body);R(x-18,y-24,17,10,body);R(x,y-27,17,12,body);R(x-8,y-29,12,6,body);
  R(x-18,y-24,17,1,hi);R(x,y-27,17,1,hi);R(x-8,y-29,12,1,hi);R(x-24,y-16,6,1,hi);R(x+17,y-16,7,1,hi);R(x-26,y-12,2,4,hi);
  R(x-25,y-2,50,2,lo);R(x-27,y-4,2,2,lo);R(x+25,y-4,2,2,lo);
  R(x-4,y-42,14,2,K);R(x-6,y-40,18,9,K);R(x-4,y-39,2,6,"#444441");R(x-6,y-34,18,2,"#712B13");R(x-11,y-31,28,3,K);R(x-12,y-30,1,1,K);
  R(x-11,y-18,3,3,K);R(x+6,y-18,3,3,K);R(x-10,y-18,1,1,"#FFFFFF");R(x+7,y-18,1,1,"#FFFFFF");
  R(x+4,y-20,7,1,"#FAC775");R(x+4,y-14,7,1,"#FAC775");R(x+4,y-20,1,7,"#FAC775");R(x+10,y-20,1,7,"#FAC775");
  for(var c=0;c<6;c++)R(x+11+(c%2),y-13+c*2,1,1,"#FAC775");
  if(f.browD){R(x-13,y-22,6,1,K);R(x-14,y-21,1,1,K);}
  R(x-9,y-11,18,2,"#5F5E5A");R(x-11,y-10,3,2,"#5F5E5A");R(x+8,y-10,3,2,"#5F5E5A");R(x-12,y-11,1,1,"#5F5E5A");R(x+11,y-11,1,1,"#5F5E5A");
  R(x-2,y-8,4,tk?3:1,K);
  if(f.umbD){R(x-38,y-20,13,2,"#E24B4A");R(x-36,y-22,9,2,"#E24B4A");R(x-33,y-23,3,1,"#E24B4A");R(x-32,y-18,1,8,K);R(x-33,y-11,2,1,K);
    for(var u=0;u<3;u++)R(x-37+u*4,y-20,1,2,"#F09595");}}

/* ---------- Uncle Har Gow: dim sum cart, one pot of tea, two dumplings, one draw a day ---------- */
function chH(x,y){var S=D.S,f=S.f,tk=S.talk==="H"&&blink(160),sh=(f.shakeH||S.rain>.5)?Math.round(Math.sin(D.time()/40)):0;x+=sh;
  shadow(x,y,12);
  R(x-7,y-8,4,8,"#5F5E5A");R(x+3,y-8,4,8,"#5F5E5A");R(x-9,y-2,6,2,K);R(x+3,y-2,6,2,K);
  for(var i=0;i<3;i++){var yy=y-8-9*(i+1);R(x-11,yy,22,9,"#C8A26A");R(x-11,yy,22,1,"#E3C58E");R(x-11,yy+8,22,1,"#8A6A3A");for(var k=0;k<5;k++)R(x-9+k*4,yy+4,2,1,"#A8834C");}
  R(x-12,y-36,24,2,"#8A6A3A");
  R(x-14,y-33,3,13,"#B4B2A9");R(x+11,y-33,3,13,"#B4B2A9");
  R(x-19,y-24,6,5,"#F1EFE8");R(x-19,y-25,6,1,"#97C459");R(x-13,y-23,1,2,"#F1EFE8");
  if(!f.calmTea){for(var s=0;s<3;s++){var p=((D.time()/50+s*6)%14);A(.6*(1-p/14));R(x-18+s*2,y-27-p,1,2,"#D3D1C7");}A(1);}
  if(f.phoneH){R(x+12,y-32,8,13,K);R(x+13,y-31,6,10,blink(180)?"#FAC775":"#85B7EB");R(x+14,y-27,4,1,"#FFFFFF");}
  if(f.prizeH){R(x+12,y-46,11,2,"#E24B4A");R(x+14,y-48,7,2,"#E24B4A");R(x+16,y-49,3,1,"#E24B4A");R(x+17,y-44,1,10,K);R(x+16,y-35,2,1,K);
    R(x+20,y-50,5,5,"#FFFFFF");txt("F",x+21,y-49,"#BA7517",1);}
  var hy=y-36;
  R(x-12,hy-9,24,9,"#EDEBE3");R(x-10,hy-14,20,5,"#EDEBE3");R(x-7,hy-18,14,4,"#EDEBE3");
  for(var q=0;q<4;q++)R(x-6+q*3,hy-20,2,3,"#D3D1C7");
  A(.45);R(x-9,hy-11,18,4,"#F0997B");R(x-7,hy-13,5,2,"#F0997B");R(x+3,hy-13,4,2,"#F0997B");A(1);
  R(x-12,hy-1,24,1,"#D3D1C7");
  var ey=hy-10;
  if(f.shockH){R(x-7,ey-1,3,3,K);R(x+4,ey-1,3,3,K);}else{R(x-6,ey,2,2,K);R(x+4,ey,2,2,K);}
  [[-9],[2]].forEach(function(g){var gx=x+g[0];R(gx,ey-2,7,1,"#444441");R(gx,ey+3,7,1,"#444441");R(gx,ey-2,1,6,"#444441");R(gx+6,ey-2,1,6,"#444441");});
  R(x-2,ey,4,1,"#444441");R(x-9,ey-4,5,1,"#888780");R(x+4,ey-4,5,1,"#888780");
  var my=hy-4-(tk?1:0);R(x-6,my,12,2,"#B4B2A9");R(x-8,my+1,3,2,"#B4B2A9");R(x+5,my+1,3,2,"#B4B2A9");}

function cart(x,y){var t=D.time();
  R(x-20,y-28,40,3,"#B4B2A9");R(x-20,y-12,40,2,"#888780");R(x-18,y-25,2,22,"#888780");R(x+16,y-25,2,22,"#888780");
  R(x-20,y-25,40,13,"#A32D2D");txt("DIM SUM",x-14,y-21,"#FAC775",1);
  [[x-16,y-34],[x-4,y-34],[x+8,y-34],[x-10,y-40],[x+2,y-40]].forEach(function(b){R(b[0],b[1],10,6,"#C8A26A");R(b[0],b[1],10,1,"#E3C58E");R(b[0],b[1]+5,10,1,"#8A6A3A");});
  for(var s=0;s<5;s++){var p=((t/45+s*7)%26);A(.5*(1-p/26));R(x-12+s*6+Math.round(Math.sin(t/260+s)*2),y-42-p,2,2,"#D3D1C7");}A(1);
  R(x-17,y-2,6,6,K);R(x+11,y-2,6,6,K);R(x-15,y,2,2,"#888780");R(x+13,y,2,2,"#888780");}

/* ---------- Panghu: the live commentator, up in a Qilou balcony booth ---------- */
function chP(px,py){var S=D.S,f=S.f,tk=S.talk==="P"&&blink(130),OR="#E8913A",LT="#F6C08A",hp=f.hype&&S.talk==="P";
  var bob=hp?(blink(120)?-1:0):0;py+=bob;
  R(px-15,py-18,30,18,"#3FA7A0");[[-10,-14],[3,-12],[-4,-6],[9,-5],[-12,-4]].forEach(function(q){R(px+q[0],py+q[1],3,3,"#FFF6E8");R(px+q[0]+1,py+q[1]+1,1,1,"#F6D55C");});
  R(px-3,py-18,6,3,"#FFF6E8");
  if(hp){R(px-22,py-34,6,16,OR);R(px+16,py-34,6,16,OR);R(px-23,py-38,8,5,LT);R(px+15,py-38,8,5,LT);}
  R(px-13,py-44,7,7,OR);R(px+6,py-44,7,7,OR);R(px-11,py-42,3,3,"#B5663A");R(px+8,py-42,3,3,"#B5663A");
  R(px-11,py-40,22,4,OR);R(px-13,py-36,26,14,OR);R(px-11,py-22,22,3,OR);
  R(px-1,py-40,2,5,K);R(px-6,py-39,2,3,K);R(px+4,py-39,2,3,K);
  R(px-13,py-30,4,1,K);R(px-13,py-27,3,1,K);R(px+9,py-30,4,1,K);R(px+10,py-27,3,1,K);
  R(px-7,py-27,14,7,"#FFF6E8");R(px-2,py-27,4,2,K);
  if(hp){R(px-8,py-33,3,3,K);R(px+5,py-33,3,3,K);R(px-8,py-33,1,1,"#FFFFFF");R(px+5,py-33,1,1,"#FFFFFF");R(px-3,py-24,6,tk?4:2,"#8a3a3a");}
  else{R(px-8,py-32,4,1,K);R(px+4,py-32,4,1,K);R(px-1,py-23,2,tk?2:1,"#8a3a3a");}
  R(px-14,py-46,28,2,K);R(px-15,py-44,2,2,K);R(px+13,py-44,2,2,K);R(px-16,py-36,3,7,K);R(px+13,py-36,3,7,K);
  R(px-14,py-29,1,4,K);R(px-13,py-26,5,1,K);R(px-9,py-27,3,3,"#444441");
  R(px-32,py-4,64,8,"#712B13");R(px-32,py-4,64,1,"#993C1D");
  R(px+18,py-16,6,12,"#F1EFE8");R(px+19,py-12,4,7,"#E8C68A");R(px+18,py-18,6,2,"#C0302E");R(px+20,py-10,1,1,"#C0302E");R(px+21,py-7,1,1,"#C0302E");
  R(px-26,py-10,2,6,"#444441");R(px-27,py-13,4,4,"#5F5E5A");}

/* ---------- Guangzhou, 2077 ---------- */
var TOWERS=[[96,40,92],[112,26,120],[138,22,150],[160,30,170],[190,24,110],[262,30,86],[284,20,64]];
var NC=["#5DCAA5","#ED93B1","#85B7EB","#FAC775","#AFA9EC"];
var seed=7;function rnd(){seed=seed*16807%2147483647;return seed/2147483647;}
var WIN=TOWERS.map(function(b){var w=[];for(var y=272-b[2]+4;y<268;y+=5)for(var x=b[0]+2;x<b[0]+b[1]-2;x+=4)if(rnd()<.32)w.push([x,y,NC[Math.floor(rnd()*5)],rnd()]);return w;});
function cantonTower(t){var cx=232,top=64,bot=272;
  for(var y=top;y<bot;y+=2){var u=(y-top)/(bot-top),w=u>.42?5+16*Math.pow((u-.42)/.58,2):5+6*Math.pow((.42-u)/.42,2);w=Math.round(w);
    var col=NC[(Math.floor(y/10-t/220)%5+5)%5];
    R(cx-w,y,w*2,2,"#1d1a36");A(.95);R(cx-w,y,2,1,col);R(cx+w-2,y,2,1,col);A(.35);if((y/2)%3===0)R(cx-w,y,w*2,1,col);A(1);}
  R(cx-1,22,2,42,"#2a2848");for(var s=24;s<64;s+=4)R(cx-1,s,2,1,"#ED93B1");if(blink(700))R(cx-2,18,4,3,"#E24B4A");
  A(.18);R(cx-14,150,28,6,"#ED93B1");A(1);}
function scene(t,S){
  var sky=["#100c22","#150f28","#1a122c","#20152f","#271932","#2f1c35","#382036","#432536","#4d2a38"];
  for(var b=0;b<9;b++)R(0,b*30,300,30,sky[b]);
  for(var st=0;st<16;st++){A((st%3?.4:.8));R((st*67)%300,(st*41)%120,1,1,"#FFFFFF");}A(1);
  for(var cl=0;cl<5;cl++){var cx=((cl*83+t*.006)%380)-40,cy=40+cl*26;A(.22);R(Math.round(cx),cy,60,4,"#6a4a6a");R(Math.round(cx)+10,cy-3,36,3,"#6a4a6a");A(1);}
  TOWERS.forEach(function(b,i){R(b[0],272-b[2],b[1],b[2],i%2?"#1a1830":"#16152b");WIN[i].forEach(function(q){A(((t/1000+q[3]*60)%13)<.5?.15:.6);R(q[0],q[1],2,2,q[2]);});A(1);});
  R(150,92,2,10,"#85B7EB");if(blink(600))R(149,90,4,2,"#E24B4A");
  cantonTower(t);
  R(0,272,300,58,"#0b1230");
  for(var ry=274;ry<330;ry+=3){for(var k=0;k<5;k++){var rx=((k*61+ry*17+t*.015*(ry%2?1:-1))%340+340)%340-20;R(Math.round(rx),ry,8,1,"#152050");}}
  for(var r2=276;r2<328;r2+=3){if(((r2+t/120)%5)>1.5){A(Math.max(0,.6-(r2-276)/90));R(226+Math.round(Math.sin(t/300+r2*.6)*3),r2,12,1,NC[(Math.floor(r2/10-t/220)%5+5)%5]);}}A(1);
  var bx=Math.round((t*.012)%400)-60;R(bx,304,52,6,"#2C2C2A");R(bx+2,298,48,6,"#FAC775");for(var w=0;w<8;w++)R(bx+5+w*6,299,3,3,NC[w%5]);R(bx+12,292,26,6,"#ED93B1");R(bx+15,293,20,3,"#FBEAF0");
  A(.3);R(bx,310,52,6,"#FAC775");A(1);
  R(0,330,300,6,"#5a5f7a");R(0,329,300,1,"#8a8fa8");for(var px=4;px<300;px+=12)R(px,322,2,8,"#5a5f7a");R(0,322,300,1,"#6a6f88");
  R(0,336,300,144,"#1c1a22");for(var fy=344;fy<480;fy+=10)R(0,fy,300,1,"#24222c");for(var fx=0;fx<300;fx+=20)R(fx+((fx/20)%2)*10,336,1,144,"#201e28");
  if(S.rain>.2){A(.25*S.rain);for(var pd=0;pd<8;pd++)R((pd*47+40)%300,360+(pd*29)%110,24,2,"#85B7EB");A(1);}
  R(282,240,10,96,"#4a3426");R(286,240,2,96,"#5a4030");
  [[262,214,40,24],[250,226,30,18],[270,200,30,18],[284,220,20,22]].forEach(function(c,i){R(c[0],c[1],c[2],c[3],i%2?"#1f3a2a":"#2d5a3c");});
  for(var rt=0;rt<6;rt++)R(262+rt*5,240,1,40+(rt%3)*14,"#5a4030");
  R(0,118,96,322,"#D9C29A");R(0,116,96,6,"#B89A6E");R(0,122,96,2,"#C4AC82");R(90,122,6,318,"#C4AC82");
  [[10,134],[38,134],[66,134]].forEach(function(w){R(w[0],w[1],20,30,"#2f6b5a");R(w[0]+9,w[1],2,30,"#1f4a3e");for(var s=0;s<5;s++)R(w[0],w[1]+3+s*6,20,1,"#3d8a74");});
  R(8,186,80,74,"#8a6a4a");R(12,190,72,62,"#3a2a1e");A(.25);R(12,190,72,62,"#FAC775");A(1);
  R(26,172,44,11,K);R(30,175,4,4,blink(500)?"#E24B4A":"#5a1a1a");txt("ON AIR",37,175,"#FFFFFF",1);
  chP(48,252);
  R(6,258,84,4,"#B89A6E");for(var bl=0;bl<10;bl++)R(10+bl*8,262,2,12,"#B89A6E");R(6,274,84,3,"#B89A6E");
  R(0,280,96,70,"#D9C29A");
  for(var ar=0;ar<2;ar++){var ax=8+ar*44;R(ax,362,36,78,"#3a2414");R(ax+4,358,28,4,"#3a2414");R(ax+8,355,20,3,"#3a2414");
    A(.5);R(ax+2,366,32,70,"#FAC775");A(1);for(var g=0;g<6;g++)R(ax+4+(g%3)*10,400+Math.floor(g/3)*14,8,10,["#F4C0D1","#B5D4F4","#F6D55C","#C0DD97","#F0997B","#CECBF6"][g]);}
  R(0,350,96,6,"#B89A6E");R(0,356,8,84,"#C4AC82");R(44,356,8,84,"#C4AC82");R(88,356,8,84,"#C4AC82");
  R(72,288,12,48,"#A32D2D");R(73,289,10,46,"#C0302E");for(var sg=0;sg<4;sg++)R(75,293+sg*11,6,7,"#FAC775");
  cart(222,440);
  chH(262,440);
  chA(130,440);chB(178,440);
  chD(S);}


/* ---------- Commercial break: Panghu Online Gacha (胖虎家扭蛋机) ---------- */
var CAPS=[[118,150,"#ED93B1"],[140,140,"#85B7EB"],[164,148,"#FAC775"],[106,176,"#97C459"],[130,170,"#AFA9EC"],[156,172,"#F0997B"],[180,170,"#5DCAA5"],[116,202,"#FAC775"],[142,198,"#ED93B1"],[168,200,"#85B7EB"],[128,224,"#F0997B"],[156,226,"#AFA9EC"]];
function capsule(x,y,col){R(x,y,14,7,col);R(x,y+7,14,7,"#FFFFFF");R(x,y+6,14,1,"rgba(0,0,0,.18)");R(x+2,y+2,3,2,"rgba(255,255,255,.7)");}
function ad(t,S){var f=S.f;
  R(0,0,300,480,"#F6D55C");for(var y=108;y<452;y+=16)for(var x=((y/16)%2)*8;x<300;x+=16)R(x,y,3,3,"#FAC775");
  R(0,0,300,100,"#C0302E");R(0,100,300,4,"#A32D2D");txt("PANGHU",90,38,"#FFE14D",5);txt("GACHA",110,70,"#FFFFFF",4);
  R(236,112,46,26,K);txt("18",242,119,"#FFFFFF",2);R(266,123,10,2,"#FFFFFF");R(270,119,2,10,"#FFFFFF");
  var cx=150,cy=190,r=66;
  for(var dy=-r;dy<r;dy+=2){var w=Math.round(Math.sqrt(r*r-dy*dy));A(.55);R(cx-w,cy+dy,w*2,2,"#E6F1FB");A(1);R(cx-w,cy+dy,2,2,"#FFFFFF");R(cx+w-2,cy+dy,2,2,"#B5D4F4");}
  var shake=f.spin?Math.round(Math.sin(t/40)*2):0;
  CAPS.forEach(function(c,i){capsule(c[0]+(f.spin?Math.round(Math.sin(t/70+i)*2):0),c[1]+(f.spin?Math.round(Math.cos(t/60+i*2)*2):0),c[2]);});
  A(.6);R(cx-40,cy-50,6,22,"#FFFFFF");R(cx-46,cy-30,4,12,"#FFFFFF");A(1);
  R(84+shake,250,132,8,"#A32D2D");R(88+shake,258,124,124,"#E24B4A");R(190+shake,258,22,124,"#C0302E");R(88+shake,258,124,2,"#F09595");
  R(136,286,28,28,"#F1EFE8");R(140,290,20,20,"#D3D1C7");
  var a=f.spin?t/180:.6;for(var k=0;k<15;k++)R(Math.round(150+Math.cos(a)*k)-2,Math.round(300+Math.sin(a)*k)-2,4,4,"#5F5E5A");
  R(Math.round(150+Math.cos(a)*16)-4,Math.round(300+Math.sin(a)*16)-4,8,8,"#FAC775");
  R(178,276,6,18,K);R(179,277,4,16,"#444441");
  R(128,334,44,30,K);R(128,334,44,4,"#5F5E5A");
  R(76,382,148,14,"#712B13");R(76,382,148,2,"#993C1D");R(84,396,8,40,"#412402");R(208,396,8,40,"#412402");
  if(f.pop){var bo=Math.abs(Math.round(Math.sin(t/160)*6));var px=136,py=354-bo;
    R(px,py+6,28,10,"#FFFFFF");R(px,py+15,28,1,"#D3D1C7");R(px-6,py-10,28,10,"#ED93B1");R(px-6,py-1,28,1,"#993556");
    R(px+6,py-2,16,8,"#EDEBE3");R(px+8,py-4,12,2,"#EDEBE3");for(var q=0;q<3;q++)R(px+9+q*4,py-6,2,2,"#D3D1C7");A(.5);R(px+8,py+1,12,3,"#F0997B");A(1);R(px+10,py+1,2,2,K);R(px+16,py+1,2,2,K);
    for(var sp=0;sp<6;sp++){var ang=sp/6*Math.PI*2+t/400,d=22+Math.sin(t/120+sp)*4;R(Math.round(px+14+Math.cos(ang)*d),Math.round(py+4+Math.sin(ang)*d),3,3,"#FFFFFF");}}
  chP(246,452);
  R(0,452,300,28,K);txt("ONE DRAW A DAY",10,462,"#FAC775",2);}
D.gz={scene:scene,dz:dz,ad:ad};
})();
