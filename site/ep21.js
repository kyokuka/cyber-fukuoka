(function(){
var D=Drama,R=D.R,A=D.A,blink=D.blink;
var TC=["#ED93B1","#5DCAA5","#FAC775","#85B7EB","#AFA9EC"];
function scene(t,S){var f=S.f;
  R(0,0,150,130,"#10132a");R(0,0,150,40,"#0d1020");for(var s=0;s<12;s++)if(((t/500+s*5)%7)>1)R((s*41)%150,(s*17)%60,1,1,"#F1EFE8");
  if(f.fw)D.fireworks(t,6,14);
  R(22,18,9,112,"#1a2e4d");R(24,10,5,8,"#1a2e4d");R(26,2,1,8,"#85B7EB");if(blink(700))R(25,0,3,2,"#E24B4A");
  for(var ty=22;ty<128;ty+=4)R(23,ty,7,1,TC[(Math.floor(ty/4)+Math.floor(t/300))%5]);
  [[0,10,16],[34,12,24],[48,8,14],[58,14,20]].forEach(function(q){R(q[0],130-q[2],q[1],q[2],"#141830");});
  R(0,130,150,40,"#0c2a4d");for(var y=132;y<170;y+=3)for(var j=0;j<4;j++){var wx=((j*41+y*7+t*.01*(y%2?1:-1))%170+170)%170-10;A(.5);R(Math.round(wx),y,7,1,f.fw?TC[(j+y)%5]:"#185FA5");}A(1);
  R(0,170,150,70,"#3d2a1a");for(var sx=0;sx<150;sx+=7)for(var sy=176;sy<240;sy+=9)R(sx+(sy%2)*3,sy,1,1,"#633806");A(.6);R(0,170,150,1,"#B5D4F4");A(1);
  if(f.yatai)D.miniYatai(t);
  D.chA(40,232);D.chB(62,232);D.chS(86,232);D.chT(70,128);
  if(f.price)D.bubble(62,184,f.price,"#FAC775");
  if(f.hearts)D.hearts(51,196);}
D.start({scene:scene,names:{O:"▶ 第一个客户豚骨"},
  cam:{wide:[1,75,120],sky:[1.5,75,70],A:[3.2,40,208],Ax:[5,40,200],B:[3.2,62,208],Bx:[4,62,198],S:[3.2,86,206],Sx:[5,86,196],O:[3,130,164],Ox:[4.6,130,158],T:[4,70,124],two:[2.6,51,205]},
  onLine:function(i,S){var f=S.f;f.coatB=true;f.jacket=3;f.smileS=i>=8;if(i<=2)f.sadS=true;
    f.price=i===5?"300 YEN":"";if(i===5)f.goldB=true;f.yatai=i>=8;if(i>=9&&i<=11)f.loveO=true;f.fw=i>=13;f.hearts=i>=14&&i<=15;if(i>=14){f.blush=true;f.smileA=true;}},
  onEnd:function(S){var f=S.f;f.coatB=true;f.jacket=3;f.smileS=true;f.yatai=true;f.fw=true;f.hearts=true;f.blush=true;f.smileA=true;f.loveO=true;},
  endTitle:"THE END · SEASON 3",endText:"第三季完结。谢谢你的支持，第四季见！",
  lines:[
["N","Momochi Beach. One month after launch.","百道海滨。上线一个月后。","wide",""],
["S","Ten thousand users. But no money.","一万个用户。但是没有收入。","Sx",""],
["T","users ≠ money","创业最真实的一句：有用户不等于有收入","T","pop","Ten thousand users. But no money."],
["A","How much should we charge?","我们该收多少钱？","A",""],
["T","charge = 收费","How much should we charge? 定价时必问。charge 这里是收费，不是充电","T","pop","How much should we charge?"],
["B","A free trial. Then three hundred yen a month.","先免费试用。然后每月三百日元。","Bx","flash"],
["T","free trial / a month","free trial 免费试用，a month 每月，subscription 订阅。现在的 App 和 AI 大多这样收费","T","pop","A free trial. Then three hundred yen a month."],
["S","But who will pay first?","但谁会第一个付钱呢？","S",""],
["O","Me.","我。","Ox","flash"],
["O","Here. Ten thousand yen.","给。一万日元。","O",""],
["A","Tonkotsu... it's only three hundred yen!","豚骨……只要三百日元啊！","Ax","shock"],
["O","Keep the change. For my team.","不用找了。给我的团队。","O",""],
["T","Keep the change = 不用找了","付钱多给时说的话。第一季那一万日元，终于回到了 A 手里","T","pop","Keep the change."],
["N","Fireworks over Fukuoka.","福冈上空的烟花。","sky",""],
["B","Thank you for your support.","谢谢你的支持。","Bx",""],
["A","Our first customer.","我们的第一个客户。","two",""],
["T","See you in season four!","这一季你学会了：idea、MVP、API、frontend、backend、test、review、launch、hotfix、free trial。第四季见！","T","pop","Thank you for your support. See you in season four!"]]});
})();
