#!/bin/bash
# 百度链接提交脚本 - 使用curl直接调用百度API
# 使用方法: bash scripts/submit-to-baidu-curl.sh

BAIDU_API_URL="http://data.zz.baidu.com/urls?site=https://www.fenyai.com&token=xLtRcnmEJ8L7lGcR"

# URL列表（按优先级排序，仅提交前10个高优先级页面）
# 每日配额：10条
# 注意：必须与API配置的站点域名一致 (www.fenyai.com)
# 2026-07-30 更新：避免与 07-29 已推批次重复（昨日已推 ai-agent-access/anti-block-mass-send/
# / /message-channel/compare/faq/scrm/live-code/growth/ai-call）。今日改推：
#   - baidu-topic-queue.txt 中 5 个尚未推送的词页静态页（已做 SEO/GEO 优化）
#   - 昨日未覆盖的 5 个 solutions 行业落地页
URLS=(
  # P0 - queue 中待推词页静态页（.html，已含 FAQPage/GEO 答案块/EEAT）
  "https://www.fenyai.com/topic/wecom-session-qc.html"
  "https://www.fenyai.com/topic/wecom-session-qc-system.html"
  "https://www.fenyai.com/topic/wecom-sop-build.html"
  "https://www.fenyai.com/topic/wecom-tag-precision.html"
  "https://www.fenyai.com/topic/wecom-thirdparty-app-dev.html"
  # P1 - 昨日未覆盖的 solutions 行业落地页（title 已统一「有机云」前缀）
  "https://www.fenyai.com/solutions/finance"
  "https://www.fenyai.com/solutions/retail"
  "https://www.fenyai.com/solutions/healthcare"
  "https://www.fenyai.com/solutions/education"
  "https://www.fenyai.com/solutions/crack"
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
