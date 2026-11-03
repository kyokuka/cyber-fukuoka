(function(){
var D=Drama,R=D.R,A=D.A,blink=D.blink;
function l(w,zh,ja,en,cam,fx,sv){return [w,{zh:zh,ja:ja,en:en},cam,fx||"",sv];}
var BC=["#BA7517","#854F0B","#A0651A"];
function scene(t,S){var f=S.f;
  R(0,0,150,214,"#2a2e3a");for(var y=0;y<214;y+=20)R(0,y,150,1,"#232733");
  R(60,0,30,4,"#F1EFE8");A(.12);R(40,4,70,60,"#FAC775");A(1);
  [[4,40],[106,40]].forEach(function(r){var x=r[0];R(x,r[1],40,2,"#888780");R(x,r[1]+44,40,2,"#888780");R(x,r[1]+88,40,2,"#888780");R(x,r[1],2,150,"#5F5E5A");R(x+38,r[1],2,150,"#5F5E5A");
    for(var s=0;s<3;s++)for(var b=0;b<3;b++){var bx=x+3+b*12,by=r[1]+s*44-16+(b%2)*4;R(bx,by,11,16-(b%2)*4,BC[(b+s)%3]);R(bx+5,by,1,16-(b%2)*4,"#D3D1C7");}});
  R(0,214,150,26,"#5F5E5A");for(var fx=0;fx<150;fx+=15)R(fx,214,1,26,"#444441");
  var bx=56,by=176;
  R(bx,by,40,38,"#BA7517");R(bx,by,40,2,"#854F0B");R(bx+18,by,4,38,"#D3D1C7");R(bx+4,by+16,14,8,"#F1EFE8");D.txt("TOKYO",bx+4,by+18,"#A32D2D");
  if(f.open){R(bx-8,by-6,10,6,"#A0651A");R(bx+38,by-6,10,6,"#A0651A");D.sparkle(bx+20,by,12);
    for(var k=0;k<4;k++){var p=((t/60+k*9)%26);R(bx+6+k*8,by-4-p,6,7,["#ED93B1","#85B7EB","#FAC775","#AFA9EC"][k]);}}
  if(!f.found){R(26,206,26,8,"#BA7517");R(26,206,26,1,"#854F0B");R(38,206,2,8,"#D3D1C7");D.chP(40,206);}else{R(16,200,20,14,"#BA7517");R(16,200,20,1,"#854F0B");R(25,200,2,14,"#D3D1C7");D.chP(44,232);}
  if(f.pre){R(52,196,8,8,"#ED93B1");R(52,196,8,2,"#F1EFE8");}
  D.chK(118,232);if(f.cc)D.chC(100,232);D.chT(75,124);}
D.start({scene:scene,names:D.toyMeta.names,colors:D.toyMeta.colors,pitch:D.toyMeta.pitch,
  cam:{wide:[1,75,120],P:[3,40,190],Px:[4.4,40,182],Pd:[3,44,200],Pdx:[4.4,44,192],C:[3.2,100,208],Cx:[5,100,200],K:[3.6,118,212],Kx:[5,118,208],T:[4,75,120],box:[2.4,76,190]},
  onLine:function(i,S){var f=S.f;f.cc=i>=9;f.found=i>=10;f.open=i>=12;f.pre=i>=13&&i<=16;
    if(i===8)f.errK=true;if(i===12||i===13)f.happyP=true;if(i===16)f.cryP=true;if(i===12)f.happyK=true;if(i>=9)f.luck=true;},
  onEnd:function(S){var f=S.f;f.cc=true;f.found=true;f.open=true;f.luck=true;f.happyK=true;},
  endText:"下集：一番赏日，胖虎抽了十次……",
  lines:[
l("N","广州，胖虎潮玩的仓库。","広州。パンフーのおもちゃ倉庫。","Guangzhou. Panghu's toy warehouse.","wide"),
l("K","嘀嘀！日本的货到了！","ピピッ！日本から荷物が届きました！","Beep! A package from Japan!","K","flash"),
l("P","终于到货了！这次一定有隐藏款！","ついに入荷だ！今度こそシークレットだ！","It's finally here! This time, a secret one!","Px"),
l("T","到货 ＝ 入荷（にゅうか）＝ new arrival","入荷（にゅうか）＝到货＝new arrival","New arrival = 到货 = 入荷","T","pop",{zh:"到货。日语叫入荷。",ja:"入荷、にゅうか。",en:"New arrival."}),
l("P","小仓，开箱！","クラ、開けて！","Kura, open it!","P"),
l("K","开箱……那个箱子在哪？","開封……あの箱、どこ？","Unboxing... where is that box?","K"),
l("T","开箱 ＝ 開封（かいふう）＝ unboxing","開封（かいふう）＝开箱＝unboxing","Unboxing = 开箱 = 開封","T","pop",{zh:"开箱。日语叫开封。",ja:"開封、かいふう。",en:"Unboxing."}),
l("P","就在你面前啊！","目の前にあるよ！","It's right in front of you!","Px","shake"),
l("K","找不到。错误。错误。","見つかりません。エラー。エラー。","Not found. Error. Error.","Kx","glitch"),
l("C","店长，你坐在箱子上。","店長、箱の上に座ってますよ。","Manager, you're sitting on the box.","C",""),
l("P","……啊。","……あっ。","...Oh.","Pdx","shock"),
l("T","店长 ＝ 店長（てんちょう）＝ store manager","店長（てんちょう）＝店长＝store manager","Store manager = 店长 = 店長","T","pop",{zh:"店长。日语叫店长，てんちょう。",ja:"店長、てんちょう。",en:"Store manager."}),
l("K","开箱！限定款！","開封！限定品です！","Opening! Limited edition!","box","boom"),
l("P","限定！我先拆一个！","限定！一個開けてみよう！","Limited! Let me open one!","Pd",""),
l("T","限定 ＝ 限定（げんてい）＝ limited edition","限定（げんてい）＝限定＝limited edition","Limited edition = 限定 = 限定","T","pop",{zh:"限定。日语读げんてい。",ja:"限定、げんてい。",en:"Limited edition."}),
l("C","店长，那是客人预订的。","店長、それはお客さんの予約品です。","Manager, that's a customer's pre-order.","Cx",""),
l("P","……我就看看。","……見るだけ。","...I'm just looking.","Pdx",""),
l("T","预订 ＝ 予約（よやく）＝ pre-order","予約（よやく）＝预订＝pre-order","Pre-order = 预订 = 予約","T","pop",{zh:"预订。日语叫予约，よやく。",ja:"予約、よやく。",en:"Pre-order."})]});
})();
