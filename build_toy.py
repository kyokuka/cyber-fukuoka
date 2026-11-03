import html, os
OUT = os.path.join(os.path.dirname(__file__), "site", "toy")
SERIES = "胖虎潮玩小剧场"
e = html.escape
EPS = [
 dict(n=1, title="到货日", ja="入荷日", en="Arrival Day", syn="日本的货到了，小仓却找不到箱子。箱子在哪？在店长屁股底下。", learn="入荷 · 開封 · 店長 · 限定 · 予約",
      notes=[("到货","入荷（にゅうか）","new arrival"),("开箱","開封（かいふう）","unboxing"),("店长","店長（てんちょう）","store manager"),("限定","限定（げんてい）","limited edition"),("预订","予約（よやく）","pre-order"),("我就看看","見るだけ","I'm just looking")]),
 dict(n=2, title="一番赏日", ja="一番くじの日", en="Ichiban Kuji Day", syn="抽抽第一抽就中 A 赏。胖虎十连，抽到十条毛巾。", learn="一番くじ · A賞 · もう一回 · ラストワン賞",
      notes=[("一番赏","一番くじ（いちばんくじ）","Ichiban Kuji"),("A 赏","A賞（エーしょう）","A Prize"),("我抽一张","一回お願いします","One ticket, please"),("再来一次","もう一回（もういっかい）","One more time!"),("最后赏","ラストワン賞","Last One Prize")]),
 dict(n=3, title="隐藏款在哪", ja="シークレットはどこ？", en="Where's the Secret?", syn="一整盒十二个盲盒全是普通款，还重复了三个。隐藏款在……垃圾桶里。", learn="ブラインドボックス · シークレット · ダブり · 交換",
      notes=[("盲盒","ブラインドボックス","blind box"),("隐藏款","シークレット","secret"),("重复","ダブり","duplicate"),("交换","交換（こうかん）","trade"),("不可能","ありえない","Impossible!"),("下次见","またね","See you!")]),
]
HEAD = '<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="theme-color" content="#07090f"><title>{title}</title><link rel="stylesheet" href="../font.css"><link rel="stylesheet" href="../style.css"><style>:root{{--pink:#FAC775}} .card .ti{{color:#FAC775}} .notes b{{color:#FAC775}} .notes small{{display:block;color:#AFA9EC;font-size:13px}}</style></head><body>'
for ep in EPS:
    n = ep["n"]
    prev_a = f'<a href="ep{n-1}.html">← 第 {n-1} 集</a>' if n > 1 else '<a class="off">-</a>'
    next_a = f'<a id="nextEp" href="ep{n+1}.html">第 {n+1} 集 →</a>' if n < len(EPS) else '<a id="nextEp" href="index.html">回到目录</a>'
    notes = "".join(f"<li><b>{e(z)}</b><span>{e(j)}</span><small>{e(en)}</small></li>" for z, j, en in ep["notes"])
    page = HEAD.format(title=f"第{n}集 {ep['title']} · {SERIES}") + f'''
<header class="top"><a href="index.html">← 目录</a><span class="t">EP.{n:02d} {e(ep["ja"])}</span></header>
<main>
<div class="stage"><canvas id="cv" width="150" height="240"></canvas>
<div class="bar"><span>{SERIES}</span><span>EP.{n:02d}</span></div>
<div id="cap" class="cap"><div id="who"></div><div id="en">按 ▶ 播放开演</div><div id="zh"></div></div>
<div id="card" class="card"><span class="no">[ 第 {n} 集 ]</span><span class="ti">{e(ep["title"])}</span><span class="sub">{e(ep["ja"])} · {e(ep["en"])}</span><span class="cast">胖虎店长 · 小仓 · 抽抽 · AI 老师</span><span class="go">点下方播放 ▶</span></div>
</div>
<div class="langs"><button data-lang="all">中日英</button><button data-lang="zh">中文</button><button data-lang="ja">日本語</button><button data-lang="en">EN</button></div>
<div class="ctl"><button id="play">▶ 播放</button><button id="prev" aria-label="上一句">◀</button><button id="rep">↻ 再念</button><button id="next" aria-label="下一句">▶▶</button></div>
<div class="rate"><label for="rate">语速</label><input type="range" id="rate" min="0.5" max="1.2" step="0.1" value="0.8"><span id="rateOut">0.8x</span><span id="prog"></span></div>
<div class="voice"><label for="voice">英语声音</label><select id="voice"><option value="">自动（每个角色不同）</option></select></div>
<div id="mute">这个浏览器不支持朗读，字幕会自动播放。</div>
<div class="tip">「中日英」模式：大字日语、小字中英，朗读日语。选单一语言就只显示和朗读那一种。没声音请检查静音键。</div>
<h2>本集词汇 · 中 / 日 / 英</h2><ul class="notes">{notes}</ul>
<nav class="epnav">{prev_a}{next_a}</nav>
</main><script src="../engine.js"></script><script src="toy.js"></script><script src="t{n}.js"></script></body></html>'''
    open(os.path.join(OUT, f"ep{n}.html"), "w", encoding="utf-8").write(page)
cards = "".join(f'<a class="ep" href="ep{p["n"]}.html"><span class="n">{p["n"]:02d}</span><span class="m"><b>{e(p["title"])} · {e(p["ja"])}</b><small>{e(p["syn"])}</small><i>学：{e(p["learn"])}</i></span></a>' for p in EPS)
index = HEAD.format(title=SERIES) + f'''
<header class="top"><span class="t">PANGHU TOYS THEATER</span><span style="color:#FAC775">SEASON 1</span></header>
<main>
<div class="hero"><div class="k">中文 × 日本語 × ENGLISH</div><h1 style="color:#FAC775">胖虎潮玩小剧场</h1><p>パンフーのおもちゃ劇場 · Panghu's Toy Theater<br>店长胖虎抽赏永远不中，仓库机器人小仓永远找不到箱子，常客抽抽永远第一抽就中。顺便学潮玩圈的中日英三语。</p></div>
<div class="eps">{cards}</div>
<div class="foot">出演：胖虎店长 · 小仓 · 抽抽 · AI 老师<br>每集可切换「中日英 / 中文 / 日本語 / EN」。</div>
</main></body></html>'''
open(os.path.join(OUT, "index.html"), "w", encoding="utf-8").write(index)
print("built toy", len(EPS))
