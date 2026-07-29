#!/bin/bash
# IndexNow 链接提交脚本 — 支持 Bing/搜狗/Yandex 即时索引
# 使用方法: bash scripts/submit-indexnow.sh

INDEXNOW_KEY="fenyai2026indexnow"
INDEXNOW_HOST="www.fenyai.com"
KEY_LOCATION="https://www.fenyai.com/${INDEXNOW_KEY}.txt"
INDEXNOW_API="https://api.indexnow.org/indexnow"

# 优先提交刚更新/新建的高价值页面（共 10 条）
URLS=(
  "https://www.fenyai.com/"
  "https://www.fenyai.com/topic/wecom-ai-agent-access"
  "https://www.fenyai.com/topic/wecom-anti-block-mass-send"
  "https://www.fenyai.com/message-channel"
  "https://www.fenyai.com/scrm"
  "https://www.fenyai.com/live-code"
  "https://www.fenyai.com/growth"
  "https://www.fenyai.com/ai-call"
  "https://www.fenyai.com/compare"
  "https://www.fenyai.com/faq"
)

echo "=========================================="
echo "IndexNow 链接提交工具"
echo "=========================================="
echo "目标: ${#URLS[@]} 条 URL → Bing / 搜狗 / Yandex"
echo ""

# 构建 JSON payload
URL_JSON="["
for i in "${!URLS[@]}"; do
  if [ $i -gt 0 ]; then URL_JSON+=","; fi
  URL_JSON+="\"${URLS[$i]}\""
done
URL_JSON+="]"

PAYLOAD=$(cat <<EOF
{
  "host": "${INDEXNOW_HOST}",
  "key": "${INDEXNOW_KEY}",
  "keyLocation": "${KEY_LOCATION}",
  "urlList": ${URL_JSON}
}
EOF
)

echo "正在提交..."
RESPONSE=$(curl -s -X POST "${INDEXNOW_API}" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "${PAYLOAD}")

echo ""
echo "IndexNow API 返回:"
echo "$RESPONSE"

if echo "$RESPONSE" | grep -q '200\|OK\|success'; then
  echo ""
  echo "✅ 提交成功"
elif [ -z "$RESPONSE" ]; then
  echo ""
  echo "✅ 提交成功（IndexNow 返回空即成功）"
else
  echo ""
  echo "⚠️ 返回异常（非空非 OK），可能是网络问题或API变更"
fi

echo ""
echo "=========================================="
