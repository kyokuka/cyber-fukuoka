# 赛博福冈 · 阴天之恋

能学英语的像素短剧。线上地址：https://drama.poptora.com

## 结构

- `site/` 网站本体（直接被 nginx 托管）
  - `engine.js` 播放引擎：角色、镜头、字幕、朗读、天气特效
  - `epN.js` 每集的场景和台词
  - `stall.js` 屋台场景（第 2、3 集共用）
- `build.py` 生成每集的 HTML 页面和目录页（新增剧集在 `EPS` 里加一项）
- `deploy.sh` 首次部署到 nginx
- `autodeploy-setup.sh` 服务器自动更新（每 5 分钟拉一次 GitHub）

## 发布新剧集

1. 写 `site/epN.js`，在 `build.py` 的 `EPS` 里加这一集
2. `python3 build.py`
3. 提交并推送到 `main`，服务器 5 分钟内自动更新
