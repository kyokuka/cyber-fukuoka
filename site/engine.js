(function(){
"use strict";
var $=function(id){return document.getElementById(id);};
var cv=$("cv"),ctx=cv.getContext("2d");
var t=0;
var S={cam:[1,75,120],tgt:[1,75,120],talk:"",glitchU:0,flashU:0,popU:0,oShockU:0,shakeU:0,
  rain:0,rainT:0,snow:0,snowT:0,sun:0,sunT:0,f:{}};
function R(x,y,w,h,c){ctx.fillStyle=c;ctx.fillRect(x,y,w,h);}
function A(a){ctx.globalAlpha=a;}
function blink(p){return Math.floor(t/p)%2===1;}

var FONT={A:"010101111101101",B:"110101110101110",C:"011100100100011",D:"110101101101110",E:"111100110100111",
F:"111100110100100",G:"011100101101011",H:"101101111101101",I:"111010010010111",K:"101101110101101",
L:"100100100100111",M:"101111111101101",N:"110101101101101",O:"111101101101111",P:"110101110100100",
R:"110101110101101",S:"011100010001110",T:"111010010010010",U:"101101101101111",W:"101101111111101",
Y:"101101010010010","0":"111101101101111","1":"010110010010111","2":"110001010100111","3":"110001010001110",
"4":"101101111001001","5":"111100110001110","6":"011100111101111","7":"111001010010010","8":"111101111101111",
"9":"111101111001110","%":"101001010100101",":":"000010000010000","-":"000000111000000",">":"100010001010100"};
function txt(s,x,y,c,sc){sc=sc||1;var chars=s.split("");for(var n=0;n<chars.length;n++){var g=FONT[chars[n]];if(!g)continue;
  for(var p=0;p<15;p++){if(g.charAt(p)==="1")R(x+(n*4+p%3)*sc,y+Math.floor(p/3)*sc,sc,sc,c);}}}

function shadow(x,y){A(.4);R(x-6,y,12,2,"#000000");A(1);}

function chA(x,y){var f=S.f;if(f.shiver&&blink(70))x+=1;var b=S.talk==="A"&&blink(150)?1:0;y-=b;
  if(f.runA)y-=blink(110)?2:0;
  shadow(x,y+b);
  if(f.runA&&blink(110)){R(x-4,y-8,2,8,"#1a1a24");R(x+2,y-7,2,7,"#1a1a24");}else{R(x-3,y-8,2,8,"#1a1a24");R(x+1,y-8,2,8,"#1a1a24");}
  R(x-5,y-19,10,11,"#04342C");R(x-5,y-19,10,1,"#1D9E75");R(x,y-18,1,9,"#5DCAA5");R(x-6,y-18,1,8,"#085041");R(x+5,y-18,1,8,"#085041");
  if(f.jacket===1){R(x-5,y-19,10,4,"#E24B4A");R(x-6,y-18,1,2,"#E24B4A");R(x+5,y-18,1,2,"#E24B4A");}
  if(f.jacket===2){R(x-10,y-20,20,20,"#E24B4A");R(x-12,y-18,2,17,"#A32D2D");R(x+10,y-18,2,17,"#A32D2D");R(x-1,y-20,1,20,"#A32D2D");}
  if(f.jacket===3){R(x-6,y-19,12,12,"#534AB7");for(var k=0;k<4;k++)R(x-6,y-17+k*3,12,1,"#7F77DD");R(x-7,y-18,1,9,"#3C3489");R(x+6,y-18,1,9,"#3C3489");R(x-3,y-20,6,2,"#AFA9EC");}
  if(f.coin){R(x+6,y-15,4,3,"#633806");R(x+7,y-18,3,3,"#FAC775");R(x+8,y-17,1,1,"#BA7517");}
  if(f.ticket){R(x+6,y-17,5,3,"#F1EFE8");R(x+7,y-16,3,1,"#378ADD");}
  R(x-4,y-28,8,9,"#E8B896");R(x-4,y-30,8,3,"#1a1a24");R(x-5,y-29,1,4,"#1a1a24");R(x-5,y-25,10,2,"#5DCAA5");
  if(f.blushA){R(x-3,y-22,2,1,"#F09595");R(x+2,y-22,2,1,"#F09595");}
  if(f.shiver&&Math.floor(t/600)%2){A(.6);R(x+5,y-23,2,1,"#E6F1FB");R(x+7,y-24,2,1,"#E6F1FB");A(1);}
  if(f.shock){R(x-1,y-22,2,2,"#2C2C2A");R(x+6,y-31,1,3,"#85B7EB");}
  else if(f.smileA){R(x-2,y-22,1,1,"#2C2C2A");R(x-1,y-21,3,1,"#2C2C2A");R(x+2,y-22,1,1,"#2C2C2A");}
  else R(x-1,y-21,3,1,"#2C2C2A");}

function chB(x,y){var f=S.f;var b=S.talk==="B"&&blink(150)?1:0;y-=b;
  if(f.runB)y-=blink(110)?0:2;
  shadow(x,y+b);
  R(x-2,y-8,1,8,"#1a1a24");R(x+1,y-8,1,8,"#1a1a24");
  R(x-4,y-11,8,3,"#72243E");R(x-4,y-19,8,8,"#4B1528");R(x-4,y-19,8,1,"#D4537E");
  if(f.coatB){R(x-5,y-19,10,10,"#534AB7");for(var k=0;k<3;k++)R(x-5,y-17+k*3,10,1,"#7F77DD");}
  if(blink(500))R(x-1,y-16,2,2,f.red?"#E24B4A":"#ED93B1");
  if(f.red){R(x+4,y-22,1,6,"#4B1528");R(x+4,y-34,1,12,"#85B7EB");if(blink(120))R(x+3,y-36,3,2,"#E6F1FB");}
  if(f.hold){R(x-12,y-22,7,11,"#534AB7");for(var j=0;j<3;j++)R(x-12,y-20+j*3,7,1,"#7F77DD");R(x-9,y-24,1,2,"#B4B2A9");R(x-5,y-17,1,3,"#4B1528");}
  R(x-4,y-28,8,9,"#F2C9A8");R(x-5,y-30,10,3,"#D4537E");R(x-5,y-28,2,8,"#D4537E");R(x+3,y-28,2,8,"#D4537E");
  R(x-4,y-25,8,2,f.red?"#E24B4A":(f.goldB?"#FAC775":"#ED93B1"));
  if(f.blush){R(x-3,y-22,2,1,"#F09595");R(x+1,y-22,2,1,"#F09595");R(x-1,y-21,2,1,"#993556");R(x-2,y-22,1,1,"#993556");R(x+1,y-22,1,1,"#993556");}
  else R(x-1,y-21,2,1,"#993556");}

function chT(x,y){var f=S.f;y+=Math.round(Math.sin(t/260)*1.5);var tk=S.talk==="T"&&blink(140);
  R(x-1,y-1,3,1+(Math.floor(t/90)%2),"#FAC775");
  R(x,y-15,1,3,"#993C1D");R(x-1,y-17,3,2,blink(400)?"#FAC775":"#F0997B");
  R(x-4,y-12,9,11,"#D85A30");R(x-6,y-10,13,7,"#D85A30");R(x-4,y-12,9,1,"#F0997B");
  if(f.scarf){R(x-6,y-6,13,2,"#E24B4A");R(x+5,y-5,2,4,"#E24B4A");}
  if(f.shadesT){R(x-4,y-10,9,4,"#FAECE7");R(x-5,y-9,11,2,"#2C2C2A");}
  else{R(x-4,y-10,9,5,"#FAECE7");R(x-4,y-9,4,2,"#2C2C2A");R(x+1,y-9,4,2,"#2C2C2A");R(x,y-9,1,1,"#2C2C2A");R(x-3,y-9,1,1,"#FFFFFF");R(x+2,y-9,1,1,"#FFFFFF");}
  R(x-1,y-6,3,tk?2:1,"#993C1D");R(x-7,y-8,1,3,"#993C1D");R(x+7,y-10,1,4,"#993C1D");R(x+8,y-14,1,6,"#F1EFE8");
  if(S.rain>.5||S.snow>.5){R(x-8,y-22,17,2,"#378ADD");R(x-6,y-23,13,1,"#378ADD");R(x,y-20,1,8,"#2C2C2A");}
  if(t<S.popU){var r=Math.round((S.popU-t)/40);[[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,-1],[1,-1],[-1,1]].forEach(function(d){R(x+d[0]*(12-r),y-6+d[1]*(12-r),2,2,"#FAC775");});}}

function chO(x,y,o){o=o||{};var f=S.f;var tk=S.talk==="O"&&blink(160);
  var sh=(t<S.oShockU||S.rain>.5||S.snow>.5||f.shakeO)?Math.round(Math.sin(t/30)):0;x+=sh;
  if(o.legs){shadow(x,y+10);R(x-6,y-3,5,13,"#444441");R(x+1,y-3,5,13,"#444441");}
  R(x-9,y-17,18,14,"#5F5E5A");R(x-6,y-15,12,12,o.apron||"#F1EFE8");
  if(o.tag)R(x-4,y-13,4,2,"#FAC775");
  if(o.tie){R(x-1,y-15,2,8,o.tie);}
  R(x-11,y-15,2,9,"#5F5E5A");R(x+9,y-15,2,8,"#5F5E5A");
  if(o.ladle){R(x+11,y-22,1,9,"#B4B2A9");R(x+10,y-24,3,2,"#B4B2A9");}
  R(x-7,y-30,14,13,"#888780");R(x-7,y-30,14,1,"#B4B2A9");
  if(o.hat){R(x-7,y-33,14,4,o.hat);R(x-9,y-30,18,1,o.hat);R(x-1,y-32,2,2,"#FAC775");}
  else{R(x-8,y-29,16,3,"#F1EFE8");R(x-1,y-29,2,2,"#E24B4A");R(x+8,y-29,3,1,"#F1EFE8");R(x+9,y-28,3,1,"#F1EFE8");}
  var eye=f.loveO?"#ED93B1":(S.rain>.5?"#EF9F27":(S.snow>.5?"#85B7EB":"#97C459"));
  R(x-5,y-25,10,2,eye);
  if((f.sad||S.rain>.5)&&blink(200)){R(x-4,y-23,1,2,"#85B7EB");R(x+3,y-22,1,2,"#85B7EB");}
  R(x-4,y-22,8,2,"#2C2C2A");R(x-5,y-21,1,1,"#2C2C2A");R(x+4,y-21,1,1,"#2C2C2A");
  R(x-1,y-19,2,tk?2:1,"#444441");}

function chS(x,y){var f=S.f;var tk=S.talk==="S"&&blink(150);var b=f.runS&&blink(110)?2:0;y-=b;
  if(f.sadS)x+=0;
  shadow(x,y+b);
  R(x-4,y-10,3,10,"#1a1a24");R(x+1,y-10,3,10,"#1a1a24");R(x-5,y,4,1,"#000000");R(x+1,y,4,1,"#000000");
  R(x-6,y-22,12,13,"#1a1a24");R(x-2,y-22,4,5,"#F1EFE8");R(x-1,y-21,2,8,"#E24B4A");R(x-8,y-21,2,10,"#1a1a24");R(x+6,y-21,2,10,"#1a1a24");
  if(f.caseS){R(x+7,y-12,6,5,"#5F5E5A");R(x+9,y-13,2,1,"#888780");}
  var rc=f.sadS?"#BA7517":"#FAC775";
  if(!f.sadS&&blink(300)){R(x-1,y-37,2,2,rc);R(x-9,y-30,2,2,rc);R(x+7,y-30,2,2,rc);R(x-7,y-35,2,2,rc);R(x+5,y-35,2,2,rc);}
  else if(!f.sadS){R(x-1,y-36,2,1,rc);R(x-8,y-30,1,2,rc);R(x+7,y-30,1,2,rc);}
  R(x-5,y-33,10,10,f.sadS?"#BA7517":"#EF9F27");R(x-4,y-34,8,1,f.sadS?"#BA7517":"#EF9F27");R(x-4,y-23,8,1,f.sadS?"#BA7517":"#EF9F27");
  R(x-5,y-30,10,3,"#000000");R(x-4,y-30,1,1,"#444441");R(x+1,y-30,1,1,"#444441");
  if(f.sadS&&blink(200))R(x-3,y-27,1,2,"#85B7EB");
  if(f.smileS){R(x-2,y-26,1,1,"#633806");R(x-1,y-25,3,1,"#633806");R(x+2,y-26,1,1,"#633806");}
  else R(x-2,y-25,4,tk?2:1,"#633806");}

function hearts(x,y){for(var k=0;k<5;k++){var p=((t/30+k*14)%60);A(Math.max(0,1-p/60));var hx=x+Math.round(Math.sin(t/300+k*2)*8)+k*2-4,hy=y-p;
  R(hx,hy,1,1,"#ED93B1");R(hx+2,hy,1,1,"#ED93B1");R(hx,hy+1,3,1,"#ED93B1");R(hx+1,hy+2,1,1,"#ED93B1");}A(1);}

function weather(){
  if(S.rain>.05){A(.6*S.rain);for(var k=0;k<80;k++){var xx=((k*37+t*.04)%170)-10,yy=((k*53+t*.28)%250)-10;R(Math.round(xx),Math.round(yy),1,4,"#85B7EB");}
    A(.15*S.rain);R(0,0,150,240,"#0C447C");A(1);
    if(S.rain>.5&&(t%2600)<90){A(.45);R(0,0,150,240,"#E6F1FB");A(1);}}
  if(S.snow>.05){A(.85*S.snow);for(var j=0;j<70;j++){var sx=((j*37+Math.sin(t/600+j)*8+t*.008)%160)-5,sy=((j*53+t*.06)%250)-5;R(Math.round(sx),Math.round(sy),2,2,"#FFFFFF");}
    A(.12*S.snow);R(0,0,150,240,"#B5D4F4");A(1);}
  if(S.sun>.05){A(.22*S.sun);R(0,0,150,240,"#FAC775");A(1);
    for(var h=0;h<12;h++){var hy=(h*23+Math.floor(t/60))%240;A(.18*S.sun);R(0,hy,150,1,"#FFFFFF");}A(1);}}

var EP=null,L=[],i=-1,playing=false,tm=null,rate=0.8,speechOK=("speechSynthesis" in window);
var NAMES={N:"// NARRATOR",T:"★ AI 老师插播",A:"▶ A",B:"▶ B",O:"▶ 豚骨",S:"▶ 晴天特工"};
var COLORS={A:"#5DCAA5",B:"#ED93B1",T:"#F0997B",N:"#AFA9EC",O:"#97C459",S:"#FAC775"};
var PITCH={A:.7,B:1.4,T:1.05,O:.3,N:.5,S:.9};

function draw(){
  for(var k=0;k<3;k++)S.cam[k]+=(S.tgt[k]-S.cam[k])*.07;
  S.rain+=(S.rainT-S.rain)*.04;S.snow+=(S.snowT-S.snow)*.05;S.sun+=(S.sunT-S.sun)*.04;
  var s=S.cam[0],cx=S.cam[1],cy=S.cam[2];
  cx=Math.min(Math.max(cx,75/s),150-75/s);cy=Math.min(Math.max(cy,120/s),240-120/s);
  var shx=t<S.shakeU?Math.round((Math.random()-.5)*4):0;
  ctx.setTransform(1,0,0,1,0,0);ctx.imageSmoothingEnabled=false;A(1);R(0,0,150,240,"#0b0d18");
  ctx.setTransform(s,0,0,s,75-s*cx+shx,120-s*cy);
  EP.scene(t,S);
  weather();
  if(EP.over)EP.over(t,S);
  ctx.setTransform(1,0,0,1,0,0);
  if(t<S.glitchU){for(var g=0;g<7;g++){var y=Math.random()*240|0,h=2+Math.random()*12|0;ctx.drawImage(cv,0,y,150,h,(Math.random()-.5)*16|0,y,150,h);}A(.18);R(0,0,150,240,"#E24B4A");A(1);}
  if(t<S.flashU){A(Math.min(1,(S.flashU-t)/220));R(0,0,150,240,"#FFFFFF");A(1);}}
function loop(now){t=now;try{draw();}catch(e){console.error(e);}requestAnimationFrame(loop);}

function speak(e,w,done){var fin=false;var fb;var go=function(){if(!fin){fin=true;clearTimeout(fb);done();}};
  fb=setTimeout(go,(e.split(" ").length*450)/rate+1200);
  if(!speechOK)return;
  try{var u=new SpeechSynthesisUtterance(e);u.lang="en-US";
    var vs=speechSynthesis.getVoices().filter(function(v){return v.lang&&v.lang.indexOf("en")===0;});if(vs.length)u.voice=vs[0];
    u.rate=(w==="N"||w==="O"||w==="S")?rate*.85:rate;u.pitch=PITCH[w]||1;u.onend=go;u.onerror=go;
    if(speechSynthesis.speaking)speechSynthesis.cancel();speechSynthesis.speak(u);}catch(x){}}

function show(n,auto){i=n;$("card").style.opacity="0";$("card").style.pointerEvents="none";
  var ln=L[i],w=ln[0],e=ln[1],c=ln[2],k=ln[3],fx=(ln[4]||"").split(" "),say=ln[5];
  S.tgt=EP.cam[k].slice();
  S.f={};
  if(EP.onLine)EP.onLine(i,S);
  fx.forEach(function(x){
    if(x==="flash"){S.flashU=t+250;S.oShockU=t+500;}
    if(x==="glitch"){S.glitchU=t+900;S.f.red=true;}
    if(x==="shock")S.f.shock=true;
    if(x==="blush")S.f.blush=true;
    if(x==="pop")S.popU=t+480;
    if(x==="sad")S.f.sad=true;
    if(x==="love")S.f.loveO=true;
    if(x==="boom"){S.flashU=t+350;S.shakeU=t+600;}
    if(x==="shake")S.shakeU=t+500;
    if(x==="red")S.f.red=true;
  });
  $("en").textContent=e;$("zh").textContent=c;
  $("who").textContent=(EP.names&&EP.names[w])||NAMES[w];$("who").style.color=COLORS[w];
  $("en").style.color=w==="N"?"#AFA9EC":(w==="T"?"#F5C4B3":"#FFFFFF");
  S.talk=w;$("prog").textContent=(i+1)+"/"+L.length;
  var slow=fx.indexOf("glitch")>=0||fx.indexOf("boom")>=0;
  speak(say||e,w,function(){S.talk="";if(auto&&playing){tm=setTimeout(function(){if(i<L.length-1)show(i+1,true);else end();},slow?1300:(w==="T"?1300:750));}});}
function end(){stop();S.tgt=EP.cam.wide.slice();if(EP.onEnd)EP.onEnd(S);
  setTimeout(function(){$("who").textContent="";$("en").textContent=EP.endTitle||"TO BE CONTINUED";$("en").style.color="#ED93B1";$("zh").textContent=EP.endText||"";var nx=$("nextEp");if(nx)nx.classList.add("glow");},700);}
function setBtn(){$("play").textContent=playing?"❚❚ 暂停":"▶ 播放";}
function stop(){playing=false;clearTimeout(tm);setBtn();}

window.Drama={R:R,A:A,txt:txt,blink:blink,chA:chA,chB:chB,chT:chT,chO:chO,chS:chS,hearts:hearts,S:S,
  time:function(){return t;},
  start:function(ep){EP=ep;L=ep.lines;$("prog").textContent="0/"+L.length;
    $("play").onclick=function(){if(playing){stop();try{speechSynthesis.cancel();}catch(x){}return;}
      if(speechOK){try{speechSynthesis.getVoices();}catch(x){}}
      playing=true;setBtn();show(i>=L.length-1||i<0?0:i+1,true);};
    $("next").onclick=function(){stop();show(Math.min(i+1,L.length-1),false);};
    $("prev").onclick=function(){stop();show(Math.max(i-1,0),false);};
    $("rep").onclick=function(){stop();show(i<0?0:i,false);};
    $("rate").oninput=function(e){rate=+e.target.value;$("rateOut").textContent=rate.toFixed(1)+"x";};
    if(!speechOK){var n=$("mute");if(n)n.style.display="block";}
    requestAnimationFrame(loop);}};
})();
