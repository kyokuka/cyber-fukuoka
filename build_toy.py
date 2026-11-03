import html, os
OUT = os.path.join(os.path.dirname(__file__), "site", "toy")
SERIES = "胖虎潮玩小剧场"
e = html.escape
EPS = [
 dict(n=1, title="到货日", ja="入荷日", en="Arrival Day", syn="限定款到货，门口第一个排队的是黄牛豚骨：「全部我要了，转卖价一万日元。」", learn="転売ヤー · 一番乗り · 限定",
      notes=[("黄牛","転売ヤー（てんばいやー）","scalper"),("第一个到","一番乗り（いちばんのり）","first in line"),("限定","限定（げんてい）","limited edition"),("藏起来","隠して（かくして）","hide it"),("明天再来","明日また来る","I'll come back tomorrow")]),
 dict(n=2, title="一番赏日", ja="一番くじの日", en="Ichiban Kuji Day", syn="黄牛想包场八十张，被一人限三张挡住。胖虎连续未中第 49 抽，抽抽一张 A 赏。", learn="買い占め · お一人様三枚まで · A賞 · 売りません",
      notes=[("买光","買い占め（かいしめ）","buy them all"),("每人限三张","お一人様三枚まで","limit three per person"),("A 赏","A賞（エーしょう）","A Prize"),("连续未中","連続ハズレ","losing streak"),("不卖","売りません","Not for sale")]),
 dict(n=3, title="黄牛入坑", ja="転売ヤー、沼に落ちる", en="The Scalper Falls In", syn="豚骨买下一整盒盲盒找隐藏款，全是普通款。隐藏款在垃圾桶里，他却舍不得卖了。", learn="シークレット · ダブり · 沼",
      notes=[("隐藏款","シークレット","secret"),("盲盒","ブラインドボックス","blind box"),("重复","ダブり","duplicate"),("不可能","ありえない","Impossible!"),("宝贝","宝物（たからもの）","treasure"),("入坑","沼（ぬま）にハマる","fall down the rabbit hole")]),
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
<div class="stage"><canvas id="cv" width="300" height="480"></canvas>
<div class="bar"><span>{SERIES}</span><span>EP.{n:02d}</span></div>
<div id="cap" class="cap"><div id="who"></div><div id="en">按 ▶ 播放开演</div><div id="zh"></div></div>
<div id="card" class="card"><span class="no">[ 第 {n} 集 ]</span><span class="ti">{e(ep["title"])}</span><span class="sub">{e(ep["ja"])} · {e(ep["en"])}</span><span class="cast">胖虎店长 · 小仓 · 抽抽 · 黄牛豚骨</span><span class="go">点下方播放 ▶</span></div>
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
<div class="hero"><div class="k">中文 × 日本語 × ENGLISH</div><h1 style="color:#FAC775">胖虎潮玩小剧场</h1><p>パンフーのおもちゃ劇場 · Panghu's Toy Theater<br>店长胖虎抽赏永远不中，仓库机器人小仓永远找不到箱子，常客抽抽永远第一抽就中，黄牛豚骨永远开价一万日元。顺便学潮玩圈的中日英三语。</p></div>
<div class="eps">{cards}</div>
<div class="foot">出演：胖虎店长 · 小仓 · 抽抽 · 黄牛豚骨 · AI 老师<br>每集可切换「中日英 / 中文 / 日本語 / EN」。</div>
</main></body></html>'''
open(os.path.join(OUT, "index.html"), "w", encoding="utf-8").write(index)
print("built toy", len(EPS))
