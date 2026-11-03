import html, os, hashlib
OUT = os.path.join(os.path.dirname(__file__), "site", "toy")
SERIES = "胖虎潮玩小剧场 · 东京日常"
e = html.escape
def V(path):
    try: return hashlib.md5(open(path,"rb").read()).hexdigest()[:8]
    except Exception: return "0"
EPS = [
 dict(n=1, js="h1.js", title="东京第一晚", ja="東京の最初の夜", en="First Night in Tokyo", syn="抽抽第一次来东京，带着会说日语的仓库机器人小仓。机场扭蛋第一抽就是隐藏款，手机却丢了；晚上的便利店里，又遇见了打工人豚骨。", learn="到着 · 温めますか · おにぎり · 当たり",
      notes=[("到达 / 出发","到着（とうちゃく）/ 出発（しゅっぱつ）","arrival / departure"),("扭蛋","ガチャ","gacha / capsule toy"),("要加热吗？","温めますか？","Do you want it warmed up?"),("饭团","おにぎり","rice ball"),("中了 / 没中","当たり / ハズレ","a win / a miss"),("我故意的","わざとです","I meant to do that")]),
]
HEAD = '<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="theme-color" content="#07090f"><title>{title}</title><link rel="stylesheet" href="../font.css"><link rel="stylesheet" href="../style.css?v={vcss}"><style>:root{{--pink:#FAC775}} .card .ti{{color:#FAC775}} .notes b{{color:#FAC775}} .notes small{{display:block;color:#AFA9EC;font-size:13px}}</style></head><body>'
for ep in EPS:
    n = ep["n"]
    prev_a = f'<a href="ep{n-1}.html">← 第 {n-1} 集</a>' if n > 1 else '<a class="off">-</a>'
    next_a = f'<a id="nextEp" href="ep{n+1}.html">第 {n+1} 集 →</a>' if n < len(EPS) else '<a id="nextEp" href="index.html">回到目录</a>'
    notes = "".join(f"<li><b>{e(z)}</b><span>{e(j)}</span><small>{e(en)}</small></li>" for z, j, en in ep["notes"])
    page = HEAD.format(vcss=V(os.path.join(OUT,'..','style.css')),title=f"第{n}集 {ep['title']} · {SERIES}") + f'''
<header class="top"><a href="index.html">← 目录</a><span class="t">EP.{n:02d} {e(ep["ja"])}</span></header>
<main>
<div class="stage"><canvas id="cv" width="300" height="480"></canvas>
<div class="bar"><span>{SERIES}</span><span>EP.{n:02d}</span></div>
<div id="intro"></div><div id="cap" class="cap"><div id="who"></div><div id="en">按 ▶ 播放开演</div><div id="zh"></div></div>
<div id="card" class="card"><span class="no">[ 第 {n} 集 ]</span><span class="ti">{e(ep["title"])}</span><span class="sub">{e(ep["ja"])} · {e(ep["en"])}</span><span class="cast">抽抽 · 小仓 · 打工人豚骨 · 胖虎店长</span><span class="go">点下方播放 ▶</span></div>
</div>
<div class="langs"><button data-lang="zh">中文</button><button data-lang="ja">日本語</button><button data-lang="en">EN</button><button data-lang="all">中日英</button></div>
<div class="ctl"><button id="play">▶ 播放</button><button id="prev" aria-label="上一句">◀</button><button id="rep">↻ 再念</button><button id="next" aria-label="下一句">▶▶</button></div>
<div class="rate"><label for="rate">语速</label><input type="range" id="rate" min="0.5" max="1.2" step="0.1" value="0.8"><span id="rateOut">0.8x</span><span id="prog"></span></div>
<div class="langs"><button data-vmode="blip">像素音</button><button data-vmode="tts">真人朗读</button></div>
<div class="voice"><label for="voice">英语声音</label><select id="voice"><option value="">自动（每个角色不同）</option></select></div>
<div id="mute">这个浏览器不支持朗读，字幕会自动播放。</div>
<div class="tip">默认中文、像素音配音，AI 老师教词时用真人朗读。想听整句朗读学语言，切到「真人朗读」。没声音请检查静音键（iPhone 静音时像素音也会被静音）。</div>
<h2>本集词汇 · 中 / 日 / 英</h2><ul class="notes">{notes}</ul>
<nav class="epnav">{prev_a}{next_a}</nav>
</main><script src="../engine.js?v={V(os.path.join(OUT,"..","engine.js"))}"></script><script src="../s2.js?v={V(os.path.join(OUT,"..","s2.js"))}"></script><script src="toy.js?v={V(os.path.join(OUT,"toy.js"))}"></script><script src="{ep["js"]}?v={V(os.path.join(OUT,ep["js"]))}"></script></body></html>'''
    open(os.path.join(OUT, f"ep{n}.html"), "w", encoding="utf-8").write(page)
cards = "".join(f'<a class="ep" href="ep{p["n"]}.html"><span class="n">{p["n"]:02d}</span><span class="m"><b>{e(p["title"])} · {e(p["ja"])}</b><small>{e(p["syn"])}</small><i>学：{e(p["learn"])}</i></span></a>' for p in EPS)
index = HEAD.format(vcss=V(os.path.join(OUT,'..','style.css')),title=SERIES) + f'''
<header class="top"><span class="t">PANGHU TOYS THEATER</span><span style="color:#FAC775">PILOT</span></header>
<main>
<div class="hero"><div class="k">中文 × 日本語 × ENGLISH</div><h1 style="color:#FAC775">东京日常</h1><p>パンフーのおもちゃ劇場 · Panghu's Toy Theater<br>潮玩爱好者抽抽第一次来东京，身边是胖虎潮玩店派来的翻译机器人小仓。吃便利店、逛玩具店、顺手抽一抽，每到一处都会遇见在打工的豚骨。顺便学潮玩圈的中日英三语。</p></div>
<div class="eps">{cards}</div>
<div class="foot">出演：抽抽 · 小仓 · 打工人豚骨 · 胖虎店长（视频出镜）· AI 老师<br>每集可切换「中日英 / 中文 / 日本語 / EN」。</div>
</main></body></html>'''
open(os.path.join(OUT, "index.html"), "w", encoding="utf-8").write(index)
print("built toy", len(EPS))
