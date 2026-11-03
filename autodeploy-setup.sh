#!/usr/bin/env bash
# 赛博福冈 · 自动更新（只需在服务器上运行一次）
# 用法：sudo bash autodeploy-setup.sh https://github.com/kyokuka/cyber-fukuoka.git
# 之后服务器每 5 分钟检查一次 GitHub，有新提交就自动更新 drama.poptora.com
set -e
REPO="${1:?请在后面写上仓库地址，例如 https://github.com/kyokuka/cyber-fukuoka.git}"
SRC=/opt/cyber-fukuoka

command -v git >/dev/null || (apt-get update && apt-get install -y git)
command -v rsync >/dev/null || (apt-get update && apt-get install -y rsync)

if [ ! -d "$SRC/.git" ]; then
  git clone --depth 1 "$REPO" "$SRC"
fi

cat > /usr/local/bin/cyber-fukuoka-sync <<'EOF'
#!/usr/bin/env bash
set -e
cd /opt/cyber-fukuoka
git fetch -q --depth 1 origin main
if [ "$(git rev-parse HEAD)" != "$(git rev-parse origin/main)" ] || [ "$1" = "--force" ]; then
  git reset -q --hard origin/main
  rsync -a --delete site/ /var/www/cyber-fukuoka/
  echo "$(date '+%F %T') 已更新到 $(git rev-parse --short HEAD)" >> /var/log/cyber-fukuoka-sync.log
fi
EOF
chmod +x /usr/local/bin/cyber-fukuoka-sync
echo "*/5 * * * * root /usr/local/bin/cyber-fukuoka-sync >/dev/null 2>&1" > /etc/cron.d/cyber-fukuoka

/usr/local/bin/cyber-fukuoka-sync --force
echo "自动更新已开启：每 5 分钟检查一次 GitHub。更新记录在 /var/log/cyber-fukuoka-sync.log"
