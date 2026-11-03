(function(){
var D=Drama,R=D.R,A=D.A,blink=D.blink,DK="#2C2C2A";
function l(w,zh,ja,en,cam,fx,sv){return [w,{zh:zh,ja:ja,en:en},cam,fx||"",sv];}
function box(x,y,w,h,c,o){R(x-.5,y-.5,w+1,h+1,o);R(x,y,w,h,c);}
var GC=["#E24B4A","#378ADD","#FAC775","#97C459","#ED93B1","#AFA9EC"];
function airport(t,S){var f=S.f;
  R(0,0,150,240,"#E6E4DC");
  R(0,0,150,16,"#F1EFE8");for(var lp=0;lp<6;lp++){R(4+lp*25,6,18,3,"#FFFFFF");A(.12);R(lp*25,9,26,8,"#FFFFFF");A(1);}R(0,16,150,1,"#B4B2A9");
  R(0,18,150,82,"#185FA5");R(0,18,150,30,"#378ADD");R(0,48,150,20,"#85B7EB");
  D.clouds(t,4,22,22,"#E6F1FB","#FFFFFF");
  var px=((t*.008)%220)-40;R(px,58,30,4,"#F1EFE8");R(px+26,51,4,8,"#F1EFE8");R(px+10,61,12,2,"#D3D1C7");R(px-2,59,3,2,"#F1EFE8");for(var w=0;w<6;w++)R(px+4+w*3.5,59,1.5,1,"#444441");R(px+27,52,2,3,"#E24B4A");
  R(0,84,150,16,"#5F5E5A");for(var r=0;r<12;r++){R(r*13,92,6,.5,"#FAC775");}
  for(var mx=0;mx<150;mx+=30)R(mx,18,1.5,82,"#888780");R(0,99,150,1.5,"#888780");
  box(40,104,70,14,"#2C2C2A","#000000");D.txt("ARRIVAL",61,107,"#FAC775");R(44,107,8,6,"#FAC775");R(46,108,4,4,"#2C2C2A");
  R(0,118,150,96,"#D3D1C7");for(var y=118;y<214;y+=8)R(0,y,150,.5,"#C4C2BA");
  for(var p=0;p<5;p++){var wx=((p*37+t*.01*(p%2?1:-1))%170+170)%170-10,c=["#3C3489","#712B13","#085041","#444441","#993556"][p];R(wx,150,4,14,c);box(wx+.5,145,3,4,"#F5D6BC","#D4A57D");R(wx,164,1.5,5,DK);R(wx+2.5,164,1.5,5,DK);if(p%2)box(wx+5,156,4,7,"#888780","#444441");}
  for(var g=0;g<6;g++){var gx=2+g*8;box(gx,150,7,9,"#E6F1FB",GC[g]);for(var cp=0;cp<3;cp++)R(gx+1+cp*2,153+(cp%2)*2,1.5,1.5,GC[(g+cp+1)%6]);box(gx,159,7,14,GC[g],"#444441");R(gx+2,163,3,3,"#F1EFE8");R(gx+2,168,3,2,"#2C2C2A");}
  box(1,145,49,4,"#FAC775","#BA7517");D.txt("GACHA",15,145.5,"#993556");
  if(f.secret){box(48,198,7,7,"#000000","#FAC775");D.txt("S",50,199.5,"#FAC775");D.sparkle(51,198,10);}
  R(0,214,150,26,"#B4B2A9");for(var fx=0;fx<150;fx+=12)R(fx,214,.5,26,"#888780");A(.25);R(0,214,150,3,"#FFFFFF");A(1);
  if(f.tonk){R(110,214,26,2,"#888780");R(110,200,1.5,14,"#888780");R(112,215,3,3,DK);R(131,215,3,3,DK);D.tonk(126,186,{hat:"#185FA5",coat:"#185FA5",coatD:"#0C447C"});R(110,198,26,1.5,"#B4B2A9");R(116,186,2,12,"#B4B2A9");}
  D.chC(f.cLeft?14:40,232);D.chK(64,232);box(74,212,10,18,"#378ADD","#0C447C");R(78,209,2,3,"#444441");R(74,219,10,1,"#0C447C");
  D.chT(92,128);}
var FD=["#FAC775","#F1EFE8","#ED93B1","#97C459","#E24B4A","#85B7EB"];
function tigerCall(t){var x=96,y=150;box(x-14,y-26,28,42,"#2C2C2A","#000000");R(x-12,y-23,24,34,"#FAEEDA");
  for(var sx=0;sx<24;sx+=4)R(x-12+sx,y-23,2,34,"#F4C0D1");
  box(x-8,y-14,16,13,"#EF9F27","#854F0B");box(x-8,y-17,4,4,"#EF9F27","#854F0B");box(x+4,y-17,4,4,"#EF9F27","#854F0B");
  R(x-2,y-14,4,.5,DK);R(x-1,y-13,2,1.5,DK);box(x-4,y-7,8,5,"#FAEEDA","#D3D1C7");R(x-1,y-7,2,1.2,"#D4537E");
  R(x-6,y-10,1,1,DK);R(x-5,y-11,1,1,DK);R(x-4,y-10,1,1,DK);R(x+3,y-10,1,1,DK);R(x+4,y-11,1,1,DK);R(x+5,y-10,1,1,DK);
  R(x-7,y-6,2,1,"#F09595");R(x+5,y-6,2,1,"#F09595");
  var tk=D.S.talk==="P"&&blink(160);R(x-1.5,y-3.5,3,tk?1.5:.5,DK);
  box(x-8,y-1,16,8,"#3B6D11","#27500A");R(x-2,y+1,4,3,"#F1EFE8");
  R(x-12,y+9,24,2,"#E24B4A");D.txt("CALL",x-7,y+12,"#97C459");R(x-2,y+17,4,1,"#5F5E5A");}
function konbini(t,S){var f=S.f;
  R(0,0,150,240,"#F1EFE8");R(0,0,150,12,"#FFFFFF");for(var lx=6;lx<150;lx+=36){R(lx,4,24,3,"#E6F1FB");}R(0,12,150,1,"#D3D1C7");
  R(0,13,150,4,"#1D9E75");R(0,17,150,3,"#EF9F27");R(0,20,150,2,"#378ADD");
  box(4,26,58,60,"#2C2C3a","#5F5E5A");R(6,28,54,56,"#0d1020");for(var b=0;b<5;b++){R(8+b*11,44-(b%3)*6,9,40+(b%3)*6,"#141830");for(var wy=0;wy<6;wy++)if((b+wy)%3)R(10+b*11,48+wy*6-(b%3)*6,2,2,"#FAC775");}
  R(6,74,54,10,"#1a1a24");var cx=((t*.03)%70)-10;R(6+Math.max(0,cx),77,6,3,"#E24B4A");R(6+Math.max(0,cx)+5,78,1,1,"#FAC775");
  A(.15);R(10,30,3,52,"#FFFFFF");A(1);
  for(var sh=0;sh<4;sh++){var sy=96+sh*24;R(2,sy,62,2,"#B4B2A9");for(var it=0;it<8;it++){var ix=4+it*7.5,c=FD[(it+sh*3)%6];
    if(sh===0){R(ix,sy-6,6,6,"#F1EFE8");R(ix,sy-3,6,3,"#2C2C2A");R(ix+2,sy-6,2,1,c);}
    else if(sh===1){box(ix,sy-9,6,9,c,"#888780");R(ix,sy-9,6,2,"#FFFFFF");}
    else{box(ix+1,sy-11,4,11,c,"#444441");R(ix+2,sy-13,2,2,"#B4B2A9");}}}
  box(70,26,78,58,"#B4B2A9","#888780");for(var d=0;d<3;d++){var dx=72+d*25.5;R(dx,28,24,54,"#B5D4F4");for(var s=0;s<4;s++){R(dx,40+s*13,24,.5,"#888780");for(var bt=0;bt<5;bt++)box(dx+1.5+bt*4.5,31+s*13,3,8,FD[(bt+s+d)%6],"#444441");}A(.3);R(dx+2,28,1.5,54,"#FFFFFF");A(1);}
  if(f.tonk)D.tonk(120,186,{hat:"#1D9E75",coat:"#1D9E75",coatD:"#0F6E56"});
  box(66,176,84,38,"#E6E4DC","#888780");R(66,176,84,2,"#FFFFFF");
  box(70,160,24,16,"#FAEEDA","#BA7517");A(.35);R(71,161,22,14,"#FFFFFF");A(1);for(var ch=0;ch<5;ch++){R(72+ch*4,168,3.5,3,"#BA7517");R(72.5+ch*4,167.5,2.5,1,"#EF9F27");}D.txt("HOT",76,162,"#E24B4A");
  box(96,166,14,10,"#888780","#444441");R(97,165,12,2,"#B4B2A9");for(var o=0;o<3;o++){var q=((t/45+o*6)%14);A(.5*(1-q/14));R(99+o*4,163-q,1,2,"#D3D1C7");}A(1);
  box(136,162,12,14,"#E24B4A","#791F1F");D.txt("KUJI",136.5,164,"#FFFFFF");R(139,170,6,2,"#501313");
  box(114,166,16,10,"#444441","#2C2C2A");R(116,168,12,4,"#5DCAA5");
  if(f.food){box(70,196,22,10,"#F1EFE8","#B4B2A9");R(72,194,4,4,"#BA7517");R(77,193,5,4,"#F1EFE8");R(77,196,5,2,"#2C2C2A");R(83,193,5,4,"#FAC775");R(83,193,5,1,"#854F0B");}
  if(f.prizeA){box(140,196,9,9,"#FAC775","#BA7517");D.sparkle(144,196,8);}
  R(0,214,150,26,"#E6E4DC");for(var fx=0;fx<150;fx+=10)R(fx,214,.5,26,"#D3D1C7");
  D.chC(40,232);D.chK(64,232);
  if(f.call)tigerCall(t);
  D.chT(110,120);}
D.start({scene:function(t,S){if(S.f.loc==="k")konbini(t,S);else airport(t,S);},
  names:Object.assign({},D.toyMeta.names,{O:"▶ 打工人豚骨",P:"▶ 胖虎店长（视频）"}),colors:D.toyMeta.colors,pitch:D.toyMeta.pitch,defaultLang:"zh",blip:D.toyBlip,
  cam:{wide:[1,75,120],C:[3.2,40,208],Cx:[5,40,200],Cl:[3.2,24,208],K:[3.6,64,212],Kx:[5,64,206],O:[3,124,192],Ox:[3.8,124,164],
    Ok:[3,120,170],Okx:[3.8,120,158],T:[4,92,124],Tk:[4,110,116],gacha:[2.6,30,175],food:[3.4,82,190],sky:[1.6,75,70],call:[3.2,96,140]},
  onLine:function(i,S){var f=S.f;f.loc=i>=15?"k":"a";f.tonk=(i>=10&&i<=14)||i>=18;f.cLeft=i===5;f.secret=i>=8&&i<=14;f.food=i>=17;f.call=i>=22&&i<=27;f.prizeA=i>=29;f.luck=true;
    if(i===13)f.errK=true;if(i===9||i===30)f.happyK=true;if(i===32)f.winkK=true;if(i===12)f.sad=true;if(i===8||i===29)f.cap=true;},
  onEnd:function(S){var f=S.f;f.loc="k";f.tonk=true;f.food=true;f.prizeA=true;f.luck=true;f.winkK=true;},
  intro:{0:{t:"地点",n:"东京 · 羽田机场 到达大厅",d:"离东京市区最近的机场，坐电车半小时就能进城。到达大厅里还能找到扭蛋机。"},
    1:{t:"人物",n:"抽抽",d:"潮玩爱好者，第一次来东京。抽赏第一抽必中的「欧皇」，认路水平却是另一回事。"},
    2:{t:"人物",n:"小仓",d:"广州胖虎潮玩店的仓库机器人，会说日语，这次被派来当旅伴兼翻译。打包第一，找东西……据说倒数第一。"},
    6:{t:"人物",n:"AI 老师",d:"飘在空中的语言老师，专门插播日语。"},
    10:{t:"人物",n:"豚骨",d:"神秘打工人，身兼十二份工。开价永远是一万日元。"},
    15:{t:"地点",n:"酒店楼下的便利店 · 晚上 11 点",d:"日本的便利店 24 小时营业：炸鸡、饭团、布丁、关东煮都有，收银台旁边常常还能抽一番赏。"},
    23:{t:"人物",n:"胖虎",d:"广州胖虎潮玩的店长，抽抽常去的那家店的老板。平时不多话，偶尔说一句很有道理的话。"}},
  endText:"下集：中野百老汇，咖喱和古董玩具",
  lines:[
l("N","东京 · 羽田机场，到达大厅。","東京・羽田空港、到着ロビー。","Tokyo. Haneda Airport, arrivals.","sky"),
l("C","东京，我来了！","東京、来たー！","Tokyo, here I come!","Cx","flash"),
l("K","嘀。我是小仓。胖虎店长派来的旅伴，兼翻译。","ピッ。クラです。パンフー店長から派遣された、旅の相棒兼通訳です。","Beep. I'm Kura. Your travel buddy and translator, sent by Manager Panghu.","K"),
l("C","跟我走，我认路！","ついて来て、道は任せて！","Follow me, I know the way!","C"),
l("K","抽抽，那边是出发大厅。","チョウチョウさん、そっちは出発ロビーです。","Chouchou, that's the departures hall.","K"),
l("C","……我故意的。","……わざとです。","...I meant to do that.","Cl"),
l("T","到达 ＝ 到着（とうちゃく）／ 出发 ＝ 出発（しゅっぱつ）","到着（とうちゃく）＝到达","Arrival = 到着. Departure = 出発.","T","pop",{zh:"到达，日语叫到着。出发叫出発。在机场看指示牌就靠这两个词。",ja:"到着、とうちゃく。出発、しゅっぱつ。",en:"Arrival. Departure."}),
l("C","机场有扭蛋机！扭一个！","空港にガチャがある！一回！","Gacha at the airport! One spin!","gacha","boom"),
l("N","抽抽扭到了：隐藏款。","チョウチョウが当てたのは：シークレット。","Chouchou got: the secret one.","gacha","flash"),
l("K","嘀。第一抽，隐藏款。欧皇认证完成。","ピッ。一回目でシークレット。強運、認定です。","Beep. First spin, secret. Lucky-star status confirmed.","K"),
l("O","行李推车，一万日元。","カート、一万円。","Luggage cart. Ten thousand yen.","Ox","flash"),
l("C","机场推车不是免费的吗？","空港のカートって、無料でしょ？","Aren't airport carts free?","C"),
l("O","……被你发现了。","……バレたか。","...You got me.","Ox"),
l("K","抽抽，你的手机……不见了。","チョウチョウさん、スマホが……見当たりません。","Chouchou, your phone... is missing.","Kx","glitch"),
l("C","什么？！我的地图全在里面！","なに！？地図、全部入ってるのに！","What?! All my maps are on it!","Cx","shake"),
l("N","晚上十一点。酒店楼下的便利店。","夜十一時。ホテルの下のコンビニ。","11 PM. The convenience store below the hotel.","wide","flash"),
l("C","手机先不管了。来日本第一顿，必须是便利店！","スマホは後！日本の最初の一食は、コンビニ！","Forget the phone. First meal in Japan has to be the convenience store!","C"),
l("N","炸鸡、饭团、布丁、关东煮。抽抽全拿了。","唐揚げ、おにぎり、プリン、おでん。全部買った。","Fried chicken, rice balls, pudding, oden. She took it all.","food"),
l("O","欢迎光临。要加热吗？","いらっしゃいませ。温めますか？","Welcome. Do you want it warmed up?","Okx","flash"),
l("C","豚骨？！你刚才不是在机场吗？","トンコツ！？さっき空港にいたよね？","Tonkotsu?! Weren't you just at the airport?","Cx","shock"),
l("O","第二份工。今天还有四份。","二つ目の仕事。今日はあと四つ。","Second job. Four more today.","Ok"),
l("T","要加热吗 ＝ 温めますか ／ 饭团 ＝ おにぎり","温めますか？（あたためますか）","Do you want it warmed up? = 温めますか？","Tk","pop",{zh:"便利店店员必问：温めますか，要加热吗。饭团叫おにぎり。",ja:"温めますか？おにぎり。",en:"Do you want it warmed up? Rice ball."}),
l("K","嘀。店长来电。","ピッ。店長から着信です。","Beep. Incoming call from the manager.","K"),
l("P","呵呵呵。东京好玩吗？","ほっほっほ。東京は楽しいかね？","Ho ho ho. Enjoying Tokyo?","call"),
l("C","店长！我第一抽就扭到隐藏款了！","店長！一回目でシークレット当たりました！","Manager! I got the secret on my first spin!","C"),
l("P","呵呵。顺便帮店里留意一下。听说东京有个全世界只有一个的隐藏款。","ほっほ。ついでに店のために見ておいてくれ。東京に世界に一つだけのシークレットがあるそうだ。","Ho ho. Keep an eye out for the shop. They say Tokyo has a one-of-a-kind secret.","call"),
l("C","嗯嗯……明天再说。这个布丁好好吃。","うんうん……明日考えます。このプリン、おいしい。","Uh huh... tomorrow. This pudding is so good.","Cx"),
l("P","……呵呵。","……ほっほ。","...Ho ho.","call"),
l("C","收银台旁边有一番赏！抽一张！","レジ横に一番くじ！一回！","Ichiban Kuji by the register! One ticket!","C","boom"),
l("O","……A 赏。","……A賞です。","...A Prize.","Okx","flash"),
l("K","嘀。抽抽，手机找到了。在你的布丁袋子里。","ピッ。チョウチョウさん、スマホありました。プリンの袋の中です。","Beep. Chouchou, found your phone. In your pudding bag.","K"),
l("C","小仓！你真是我的福星！","クラ！あなたは幸運の星！","Kura! You're my lucky star!","C"),
l("N","（小仓的屏幕上，闪过一个谁也没注意到的表情。）","（クラの画面に、誰も気づかない表情が一瞬浮かんだ。）","(For a second, Kura's screen showed a face no one noticed.)","Kx"),
l("T","中了 ＝ 当たり（あたり）／ 没中 ＝ ハズレ","当たり（あたり）＝中了","A win = 当たり. A miss = ハズレ.","Tk","pop",{zh:"中了，日语叫当たり。没中叫ハズレ。今天的抽抽，两次都是当たり。",ja:"当たり、あたり。ハズレ。",en:"A win. A miss."})]});
})();
