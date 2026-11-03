import html, os
SITE = os.path.join(os.path.dirname(__file__), "site")
SERIES = "赛博福冈 · 阴天之恋"
EPS = [
 dict(n=1, place="中洲篇", title="阴天之恋", sub="Cloudy Heart", cast="特别出演：AI 老师", extra=[],
      syn="2077 年的福冈永远阴天。A 在那珂川边遇到神秘少女 B，她说：我就是天气。", learn="天气 · cool vs cold · Let's",
      notes=[("It's cloudy... again.", "cloud + y = cloudy 阴天。同理 sunny 晴天、rainy 雨天、windy 刮风。"),
             ("cool / cold", "cool 是凉快（19 度左右），cold 是冷（10 度以下）。"),
             ("I am...", "I am + 名词 = 我是……。I am the weather. 我就是天气。"),
             ("I don't feel cold.", "feel + 形容词 = 感觉……。I feel happy. 我感觉开心。"),
             ("Let's eat ramen?", "Let's + 动词 = 一起……吧。句尾升调就变成害羞的邀请。")]),
 dict(n=2, place="屋台篇", title="前任是拉面", sub="My Ex, The Ramen Bot", cast="特别出演：AI 老师 · 豚骨老板", extra=["stall.js"],
      syn="两人去屋台吃拉面，机器人老板豚骨一抬头：B，是你吗？", learn="点单 · 问价 · 替玉",
      notes=[("Two ramen, please.", "数量 + 东西 + please，万能点单句。"),
             ("Hard, please.", "福冈豚骨拉面可以选面的硬度，hard 是硬面。"),
             ("He is my ex.", "ex = 前任。短剧必备。"),
             ("How much is it?", "多少钱？问价第一句。"),
             ("Kaedama, please.", "替玉 = 加一份面，福冈拉面特色。在拉面店直接这么说就行。")]),
 dict(n=3, place="结账篇", title="一万日元的拉面", sub="Cash Only", cast="特别出演：AI 老师 · 豚骨老板", extra=["stall.js"],
      syn="A 只有五百日元。B 护目镜变红：要下雨了。", learn="付款 · be going to · 道谢",
      notes=[("Can I pay by card?", "可以刷卡吗？pay by card 刷卡，pay in cash 付现金。"),
             ("Cash only.", "只收现金。福冈的屋台大多只收现金。"),
             ("I only have five hundred yen.", "only 放在动词前 = 只有。"),
             ("It's going to rain.", "看到乌云这种迹象，用 be going to 表示马上要发生。"),
             ("Thank you. / You're welcome.", "谢谢 / 不客气。"),
             ("Come again.", "欢迎再来。")]),
 dict(n=4, place="外套篇", title="又是一万日元", sub="It's Too Small", cast="特别出演：AI 老师 · 打工中的豚骨", extra=[],
      syn="周末降温，两人去天神地下街买外套。店员居然是豚骨。", learn="试穿 · 尺码 · 夸人 · 打折",
      notes=[("Can I try this on?", "能试穿吗？this 夹在 try 和 on 中间。"),
             ("It's too small / too big.", "too + 形容词 = 太……了。"),
             ("Do you have a bigger one?", "有大一点的吗？smaller one 是小一点的。"),
             ("How about this one?", "这件怎么样？推荐、提建议都能用。"),
             ("It looks good on you.", "你穿很好看。夸人穿搭最自然的说法。"),
             ("I'll take it.", "我买了。比 I want to buy it 地道。"),
             ("50% off", "打五折。日本商店里的 OFF 都是打折。")]),
 dict(n=5, place="博多站篇", title="晴天特工", sub="Agent Sunny", cast="新角色：晴天特工 · 站务员豚骨", extra=[],
      syn="博多站，一个太阳脑袋的黑衣特工盯上了 B 的天气能力。快跑！", learn="问路 · 坐车 · 催促",
      notes=[("I need her power.", "need + 名词 = 需要……。"),
             ("I like cloudy days.", "like + 名词 = 喜欢……。"),
             ("Run! / Hurry up!", "快跑！/ 快点！紧急情况两个词就够。"),
             ("Excuse me.", "打扰一下。问路、搭话的第一句。"),
             ("Which train goes to the airport?", "哪趟车去机场？Which train goes to + 地点？"),
             ("Only two stops.", "只有两站。博多站到福冈机场的地铁真的只要两站。")]),
 dict(n=6, place="机场篇", title="全部航班取消", sub="All Flights Canceled", cast="晴天特工 · 地勤豚骨", extra=[],
      syn="福冈机场，晴天特工把气温拉到 40 度，B 召唤暴风雨。航班全部取消。", learn="买票 · 选座 · 航班状态",
      notes=[("Two tickets to Tokyo, please.", "数量 + tickets to + 地点 + please。"),
             ("Window seat or aisle seat?", "靠窗还是过道？aisle 的 s 不发音。"),
             ("It's so hot.", "so + 形容词 = 好……。"),
             ("All flights are canceled.", "canceled 取消，delayed 延误。机场广播高频词。"),
             ("I just wanted to see the sunset.", "just wanted to = 只是想……。")]),
 dict(n=7, place="百道海滨篇", title="云开见日落", sub="One Beautiful Evening", cast="全员出演 · 第一季最终回", extra=[],
      syn="最终回。百道海滨，B 为晴天特工拨开云层。A 终于说出了那句话。", learn="感叹 · 道歉 · 表白",
      notes=[("I never saw the sunset.", "never = 从来没有。"),
             ("It's beautiful.", "好美。看到美景时最自然的一句。"),
             ("I'm sorry.", "对不起。简单真诚。"),
             ("I have something to say.", "我有话想说。正经话之前的铺垫。"),
             ("I like you. / I like you too.", "我喜欢你 / 我也喜欢你。too 放句尾 = 也。"),
             ("See you next season!", "下一季见！")]),
]

S2 = [
 dict(n=8, place="机舱篇", title="飞机上的 Bug", sub="Error 404", cast="第二季开播 · 晴天特工回归", extra=["s2.js"],
      syn="飞往东京的航班上，B 突然报错 404。晴天特工：是 bug。", learn="bug · 报错 · 重启",
      notes=[("Are you following us?", "follow = 跟踪；社交媒体上是「关注」。"),
             ("What's wrong?", "怎么了？朋友或程序不对劲时第一句。"),
             ("It's a bug.", "bug = 程序错误。修 bug 叫 debug。"),
             ("Can you fix it?", "你能修好吗？"),
             ("Restarting... please wait.", "重启中，请稍候。"),
             ("Have you tried turning it off and on again?", "你试过关机再开机吗？IT 万能句。")]),
 dict(n=9, place="涩谷篇", title="大屏幕上的日志", sub="Memory Full", cast="晴天特工 · AI 老师", extra=["s2.js"],
      syn="涩谷十字路口的大屏幕上跳出 B 的报警：内存 99%。日志里全是 A 的名字。", learn="log · memory · 看不懂报错",
      notes=[("So many people!", "so many + 复数名词 = 好多……"),
             ("What does this mean?", "这是什么意思？看不懂报错时直接问。"),
             ("Her memory is full.", "memory 在人是记忆，在电脑是内存。"),
             ("Let me check the log.", "让我看看日志。log = 程序运行记录。"),
             ("It's private!", "这是隐私！")]),
 dict(n=10, place="秋叶原篇", title="第四份兼职", sub="Let Me Debug Her", cast="修理工豚骨 · 晴天特工", extra=["s2.js"],
      syn="秋叶原最好的修理店，修理工是……豚骨。B 的版本太旧，需要更新。", learn="debug · version · update",
      notes=[("Of course.", "当然；无语的语气说就是「果然」。"),
             ("Can you help me debug this?", "能帮我调试一下吗？AI 编程常用。"),
             ("Which version is she?", "哪个版本？version = 版本。"),
             ("You need an update.", "你需要更新。A new version is available = 有新版本。"),
             ("How long does it take?", "要多久？")]),
 dict(n=11, place="便利店篇", title="凌晨两点的 Prompt", sub="Prompt Accepted", cast="夜班豚骨 · AI 老师", extra=["s2.js"],
      syn="等待更新的深夜，A 在便利店教 B 什么是 prompt。B 写下了她的第一条指令。", learn="prompt · step by step · 便利店",
      notes=[("Are you hungry?", "你饿吗？"),
             ("Do you want it warmed up?", "要加热吗？便利店买便当必听句。"),
             ("What is a prompt?", "prompt = 给 AI 的指令 / 提示词。"),
             ("Can you explain it simply?", "能简单解释一下吗？"),
             ("Step by step.", "一步一步来。让 AI 讲清楚的咒语。")]),
 dict(n=12, place="东京塔篇", title="这不是 Bug", sub="It's a Feature", cast="晴天特工 · AI 老师", extra=["s2.js"],
      syn="B 升级到 2.0，系统在东京塔正式上线。结果十一月的东京下雪了。", learn="deploy · It's live · roll back",
      notes=[("Hello, world!", "你好，世界！程序员的第一行代码。"),
             ("Let's deploy!", "部署上线吧！deploy = 把程序放到服务器上。"),
             ("It's live!", "上线了！"),
             ("Something went wrong.", "出错了。网页报错高频句。"),
             ("Don't panic. Let's roll back.", "别慌，回滚到旧版本。"),
             ("It's not a bug. It's a feature.", "这不是 bug，是功能。程序员名梗。")]),
 dict(n=13, place="机房篇", title="服务器宕机", sub="Server Down", cast="晴天特工 · 豚骨", extra=["s2.js"],
      syn="全东京同时晴天下雨下雪，服务器宕机。B 握住 A 的手，重启服务器。", learn="server down · backup · It works",
      notes=[("The server is down.", "服务器挂了。"),
             ("Too many requests.", "请求太多了。网站 429 报错。"),
             ("Do we have a backup?", "我们有备份吗？"),
             ("It works!", "成功了 / 能用了。"),
             ("Good job!", "干得好！")]),
 dict(n=14, place="东京屋顶篇", title="Let's Commit", sub="Commit Message", cast="全员出演 · 第二季最终回", extra=["s2.js"],
      syn="最终回。黎明的东京屋顶，富士山在远处。B 要做出选择。", learn="decide · commit · merge",
      notes=[("Let me think about it.", "让我想想。"),
             ("Whatever you choose, I'm with you.", "不管你选什么，我都陪着你。"),
             ("Are you sure?", "你确定吗？"),
             ("Let's commit.", "commit = 提交代码 / 认真承诺。第二季最佳双关。"),
             ("Commit message", "提交说明：每次 commit 写一句改了什么。"),
             ("Let's merge.", "merge = 合并。"),
             ("See you in season three!", "第三季见！")]),
]
for x in EPS: x["season"]=1
for x in S2: x["season"]=2
EPS += S2

S3 = [
 dict(n=15, place="天神咖啡店篇", title="我有个想法", sub="Let's Build an App", cast="第三季开播 · 咖啡师豚骨", extra=["s2.js","s3.js"],
      syn="回到福冈，B 想做一个会告诉你心情的天气 App。两周后上线。", learn="idea · MVP · deadline",
      notes=[("I have an idea.", "我有个想法。"),("What makes it different?", "你的有什么不一样？"),("Let's build an app!", "开发软件用 build。"),
             ("Let's start with an MVP.", "MVP = 最小可行产品。"),("What's the deadline?", "截止日期是什么时候？")]),
 dict(n=16, place="屋台篇", title="API 是服务员", sub="Request and Response", cast="豚骨老板", extra=["stall.js","s2.js","s3.js"],
      syn="豚骨用一碗拉面解释什么是 API：你点单，我上菜。收费标准：一万日元一次。", learn="API · request · response",
      notes=[("An API is like a waiter.", "API 就像服务员，替程序之间传话。"),("Request / Response", "请求 / 响应。"),
             ("Can you give me an example?", "能举个例子吗？"),("How much does it cost?", "要多少钱？per request = 按次。")]),
 dict(n=17, place="运河城篇", title="前端和后端", sub="Frontend and Backend", cast="晴天特工 · AI 老师", extra=["s2.js","s3.js"],
      syn="博多运河城的彩色外墙和喷泉，成了最好的前端教材。后端呢？像仓库。", learn="frontend · backend · database",
      notes=[("The frontend is what users see.", "前端 = 用户看到的部分。"),("The backend is like a warehouse.", "后端 = 看不到的仓库和处理。"),
             ("Where is the data stored?", "数据存在哪？"),("In a database.", "存在数据库里。"),("I want it to look like this.", "我想要它看起来像这样。")]),
 dict(n=18, place="大濠公园篇", title="测试日", sub="Edge Case", cast="测试员晴天特工", extra=["s2.js","s3.js"],
      syn="晴天特工当测试员：阴天通过，下雨通过，雨加雪……测试失败。", learn="test · passed · edge case",
      notes=[("Let's test it.", "测试一下。"),("Test passed / Test failed", "测试通过 / 失败。"),("What if it rains?", "如果下雨呢？What if 是测试的灵魂。"),
             ("It's an edge case.", "边界情况：少见但一出就错。")]),
 dict(n=19, place="办公室篇", title="Looks Good to Me", sub="Code Review", cast="工程师豚骨", extra=["s2.js","s3.js"],
      syn="深夜办公室，B 帮 A 审查代码，豚骨突然出现：做拉面之前，我是工程师。", learn="review · typo · LGTM",
      notes=[("Can you review my code?", "能帮我审查代码吗？"),("There's a typo.", "有个拼写错误。"),("Before ramen, I was an engineer.", "做拉面之前我是工程师。"),
             ("Can you make it shorter?", "能写短一点吗？"),("Looks good to me.", "我看没问题，缩写 LGTM。")]),
 dict(n=20, place="发布日篇", title="用户来了", sub="Launch Day", cast="晴天特工 · AI 老师", extra=["s2.js","s3.js"],
      syn="App 正式发布，用户从 10 涨到 1000。还来了第一条 bug 报告。", learn="launch · bug report · hotfix",
      notes=[("Let's launch!", "发布！launch = 正式推出给用户。"),("We got a bug report.", "收到一个问题反馈。"),("What does it say?", "上面说什么？"),
             ("We need a hotfix.", "需要紧急修复。"),("Thank you for your feedback.", "谢谢你的反馈。")]),
 dict(n=21, place="百道海滨篇", title="第一个客户", sub="Keep the Change", cast="全员出演 · 第三季最终回", extra=["s2.js","s3.js"],
      syn="最终回。一万个用户却没有收入。第一个付钱的人是……豚骨，给了一万日元。", learn="charge · free trial · support",
      notes=[("How much should we charge?", "我们该收多少钱？"),("A free trial. Then 300 yen a month.", "先免费试用，然后每月 300 日元。"),
             ("Keep the change.", "不用找了。"),("Thank you for your support.", "谢谢你的支持。"),("See you in season four!", "第四季见！")]),
]
for x in S3: x["season"]=3
EPS += S3
e = html.escape
HEAD = '<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="theme-color" content="#07090f"><title>{title}</title><link rel="stylesheet" href="font.css"><link rel="stylesheet" href="style.css"></head><body>'
for ep in EPS:
    n = ep["n"]
    prev_a = f'<a href="ep{n-1}.html">← 第 {n-1} 集</a>' if n > 1 else '<a class="off">-</a>'
    next_a = f'<a id="nextEp" href="ep{n+1}.html">第 {n+1} 集 →</a>' if n < len(EPS) else '<a id="nextEp" href="index.html">回到目录</a>'
    notes = "".join(f"<li><b>{e(a)}</b><span>{e(b)}</span></li>" for a, b in ep["notes"])
    scripts = "".join(f'<script src="{s}"></script>' for s in ["engine.js"] + ep["extra"] + [f"ep{n}.js"])
    page = HEAD.format(title=f"EP.{n:02d} {ep['title']} · {SERIES}") + f'''
<header class="top"><a href="index.html">← 目录</a><span class="t">EP.{n:02d} {e(ep["place"])}</span></header>
<main>
<div class="stage"><canvas id="cv" width="150" height="240"></canvas>
<div class="bar"><span>{SERIES}</span><span>EP.{n:02d} {e(ep["place"])}</span></div>
<div id="cap" class="cap"><div id="who"></div><div id="en">按 ▶ 播放开演</div><div id="zh"></div></div>
<div id="card" class="card"><span class="no">[ 第 {n} 集 · {e(ep["place"])} ]</span><span class="ti">{e(ep["title"])}</span><span class="sub">{e(ep["sub"])}</span><span class="cast">{e(ep["cast"])}</span><span class="go">点下方播放 ▶</span></div>
</div>
<div class="ctl"><button id="play">▶ 播放</button><button id="prev" aria-label="上一句">◀</button><button id="rep">↻ 再念</button><button id="next" aria-label="下一句">▶▶</button></div>
<div class="rate"><label for="rate">语速</label><input type="range" id="rate" min="0.5" max="1.2" step="0.1" value="0.8"><span id="rateOut">0.8x</span><span id="prog"></span></div>
<div class="voice"><label for="voice">声音</label><select id="voice"><option value="">自动（每个角色不同）</option></select></div>
<div id="mute">这个浏览器不支持朗读，字幕会自动播放。</div>
<div class="tip">没声音？iPhone 请拨开侧面静音键，调大媒体音量。不同设备自带的语音不同，所以电脑和手机听起来会不一样，可以在「声音」里手动选一个。</div>
<h2>本集知识点</h2><ul class="notes">{notes}</ul>
<nav class="epnav">{prev_a}{next_a}</nav>
</main>{scripts}</body></html>'''
    open(os.path.join(SITE, f"ep{n}.html"), "w", encoding="utf-8").write(page)
def card(p):
    return f'<a class="ep" href="ep{p["n"]}.html"><span class="n">{p["n"]:02d}</span><span class="m"><b>{e(p["title"])}</b><small>{e(p["syn"])}</small><i>学：{e(p["learn"])}</i></span></a>'
cards1 = "".join(card(p) for p in EPS if p["season"] == 1)
cards2 = "".join(card(p) for p in EPS if p["season"] == 2)
cards3 = "".join(card(p) for p in EPS if p["season"] == 3)
index = HEAD.format(title=SERIES) + f'''
<header class="top"><span class="t">CYBER FUKUOKA</span><span style="color:var(--pink)">SEASON 1-3</span></header>
<main>
<div class="hero"><div class="k">ENGLISH × SHORT DRAMA</div><h1>阴天之恋</h1><p>{SERIES}<br>一部能学英语的像素短剧。第一季学生活英语，第二季学 AI 编程英语，第三季学做产品的英语。</p></div>
<h2>第三季 · 福冈创业篇</h2><div class="eps">{cards3}</div><h2>第二季 · 东京 Bug 篇</h2><div class="eps">{cards2}</div><h2>第一季 · 福冈阴天篇</h2><div class="eps">{cards1}</div>
<div class="foot">怎么看：点进一集，按「播放」自动演；用 ◀ ▶▶ 一句一句跟读；「再念」重复当前句；语速可以拉慢。<br>没声音：iPhone 拨开静音键；建议用 Safari 或 Chrome 打开。<br>出演：A · B · 豚骨 · 晴天特工 · AI 老师</div>
</main></body></html>'''
open(os.path.join(SITE, "index.html"), "w", encoding="utf-8").write(index)
print("built", len(EPS), "episodes")
