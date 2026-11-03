#!/usr/bin/env bash
# 赛博福冈 · 阴天之恋 —— 一键部署到 nginx
# 用法：sudo bash deploy.sh drama.poptora.com
set -e
DOMAIN="${1:?请在后面写上域名，例如：sudo bash deploy.sh drama.poptora.com}"
DIR=/var/www/cyber-fukuoka
HERE="$(cd "$(dirname "$0")" && pwd)"

mkdir -p "$DIR"
if command -v rsync >/dev/null; then rsync -a --delete "$HERE"/site/ "$DIR"/; else cp -r "$HERE"/site/* "$DIR"/; fi
chmod -R a+rX "$DIR"

if ! command -v nginx >/dev/null; then
  apt-get update && apt-get install -y nginx
fi

if [ -f /etc/nginx/conf.d/cyber-fukuoka.conf ]; then
  echo "nginx 配置已存在，只更新网站文件"; systemctl reload nginx; echo "已更新：https://$DOMAIN/"; exit 0
fi

cat > /etc/nginx/conf.d/cyber-fukuoka.conf <<EOF
server {
    listen 80;
    server_name $DOMAIN;
    root $DIR;
    index index.html;
    charset utf-8;
    location / { try_files \$uri \$uri/ =404; }
    location /font/ { expires 30d; add_header Cache-Control "public"; }
}
EOF

nginx -t
systemctl reload nginx
echo "已部署：http://$DOMAIN/"

if command -v certbot >/dev/null; then
  certbot --nginx -d "$DOMAIN" --non-interactive --agree-tos --register-unsafely-without-email --redirect \
    && echo "HTTPS 已开启：https://$DOMAIN/" \
    || echo "HTTPS 没开成功（多半是域名解析还没生效），先用 http 访问，解析生效后再跑一次本脚本即可。"
else
  echo "如需 HTTPS：sudo apt install -y certbot python3-certbot-nginx 后再跑一次本脚本。"
fi
