#!/bin/bash
# 百度链接提交脚本 - 使用curl直接调用百度API
# 使用方法: bash scripts/submit-to-baidu-curl.sh

BAIDU_API_URL="http://data.zz.baidu.com/urls?site=https://www.fenyai.com&token=xLtRcnmEJ8L7lGcR"

# URL列表（按优先级排序，仅提交前10个高优先级页面）
# 每日配额：10条
# 注意：必须与API配置的站点域名一致 (www.fenyai.com)
# 2026-08-09 更新：避免与 07-29/07-30/08-01/08-03/08-04/08-05/08-06/08-07 已推批次重复。
#   07-29 已推: ai-agent-access/anti-block-mass-send//message-channel/compare/faq/scrm/live-code/growth/ai-call
#   07-30 已推: 5个queue词页+solutions(finance/retail/healthcare/education/crack)
#   08-01 已推: solutions总览+行业页+mass-send/juhe-chat/ai-agent
#   08-03 已推: products系列+open-platform/pricing/whitepaper/session-archive
#   08-04 已推: open-platform子页+resources/articles/demo/trial/weimo/sop/robot/cloud-phone
#   08-05 已推: 加好友簇5词页+5行业案例页
#   08-06 已推: session-archive专项6词页+wecom-session-qc+scrm-message-integration+scrm-private-deploy+about/contact
#   08-07 已推: mass-send-api/no-churn/live-code-guide/channel-code-guide/friend-fission-howto/fission-tool/aggregate-chat/customer-profile-tags/scrm-howto-choose/scrm-price-compare
# 今日改推：SOP/社群/标签精度/AI客服/竞品对比 等剩余高需求长尾词页（均未推过）
URLS=(
  # P0 - SOP/社群/标签 高需求词页（从未推过）
  "https://www.fenyai.com/topic/wecom-sop-automation.html"
  "https://www.fenyai.com/topic/wecom-auto-group-guide.html"
  "https://www.fenyai.com/topic/wecom-community-tool.html"
  "https://www.fenyai.com/topic/wecom-tag-precision.html"
  "https://www.fenyai.com/topic/wecom-customer-tags-manage.html"
  "https://www.fenyai.com/topic/community-sop-template.html"
  # P1 - AI客服/竞品对比 高需求词页（从未推过）
  "https://www.fenyai.com/topic/ai-customer-service-bot-wecom.html"
  "https://www.fenyai.com/topic/wecom-ai-auto-reply.html"
  "https://www.fenyai.com/topic/scrm-system-which-good.html"
  "https://www.fenyai.com/topic/wecom-private-domain-flow.html"
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
