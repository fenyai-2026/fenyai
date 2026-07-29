#!/bin/bash
# 百度链接提交脚本 - 使用curl直接调用百度API
# 使用方法: bash scripts/submit-to-baidu-curl.sh

BAIDU_API_URL="http://data.zz.baidu.com/urls?site=https://www.fenyai.com&token=xLtRcnmEJ8L7lGcR"

# URL列表（按优先级排序，仅提交前10个高优先级页面）
# 每日配额：10条
# 注意：必须与API配置的站点域名一致 (www.fenyai.com)
# 2026-07-29 更新：把刚完成 301 收口、最需百度重新抓取的两个新词页排到最前
# （wecom-ai-agent-access / wecom-anti-block-mass-send 刚接过旧高排 slug 的权重），
# 并优先提交刚补 CTR 钩子的 /message-channel；其余保留核心落地页
URLS=(
  # P0 - 本轮 301 收口目标页（旧高排 slug 权重已导给它们，最需重新抓取）
  "https://www.fenyai.com/topic/wecom-ai-agent-access"
  "https://www.fenyai.com/topic/wecom-anti-block-mass-send"
  # P1 - 核心落地页（title 已统一「有机云」前缀）
  "https://www.fenyai.com/"
  "https://www.fenyai.com/message-channel"
  "https://www.fenyai.com/compare"
  "https://www.fenyai.com/faq"
  "https://www.fenyai.com/scrm"
  "https://www.fenyai.com/live-code"
  "https://www.fenyai.com/growth"
  "https://www.fenyai.com/ai-call"
)

echo "=========================================="
echo "百度链接提交工具"
echo "=========================================="
echo ""
echo "准备提交 ${#URLS[@]} 条URL到百度..."
echo ""

# 将URL数组转换为换行分隔的字符串
URL_LIST=""
for url in "${URLS[@]}"; do
  URL_LIST="${URL_LIST}${url}\n"
done

# 发送POST请求到百度API
echo "正在提交..."
RESPONSE=$(curl -s -X POST "$BAIDU_API_URL" \
  -H "Content-Type: text/plain" \
  -d "$(echo -e "$URL_LIST")")

echo ""
echo "百度API返回结果:"
echo "$RESPONSE"
echo ""

# 解析结果
if echo "$RESPONSE" | grep -q '"success"'; then
  SUCCESS_COUNT=$(echo "$RESPONSE" | grep -o '"success":[0-9]*' | cut -d':' -f2)
  REMAIN=$(echo "$RESPONSE" | grep -o '"remain":[0-9]*' | cut -d':' -f2)
  echo "成功提交 $SUCCESS_COUNT 条URL"
  echo "今日剩余配额: $REMAIN"
else
  echo "提交失败"
  echo "错误信息: $RESPONSE"
fi

echo ""
echo "=========================================="
