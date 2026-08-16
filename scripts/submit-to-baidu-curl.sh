#!/bin/bash
# 百度链接提交脚本 - 使用curl直接调用百度API
# 使用方法: bash scripts/submit-to-baidu-curl.sh

BAIDU_API_URL="http://data.zz.baidu.com/urls?site=https://www.fenyai.com&token=xLtRcnmEJ8L7lGcR"

# URL列表（按优先级排序，仅提交前10个高优先级页面）
# 每日配额：10条
# 注意：必须与API配置的站点域名一致 (www.fenyai.com)
# 2026-08-16 更新：避开前九批已推 100 条（07-29~08-11）。
#   07-29已推: ai-agent-access/anti-block-mass-send//message-channel/compare/faq/scrm/live-code/growth/ai-call
#   07-30已推: 5个queue词页+solutions(finance/retail/healthcare/education/crack)
#   08-01已推: solutions总览+行业页+mass-send/juhe-chat/ai-agent
#   08-03已推: products系列+open-platform/pricing/whitepaper/session-archive
#   08-04已推: open-platform子页+resources/articles/demo/trial/weimo/sop/robot/cloud-phone
#   08-05已推: 加好友簇5词页+5行业案例页
#   08-06已推: session-archive专项6词页+wecom-session-qc+scrm-message-integration+scrm-private-deploy+about/contact
#   08-07已推: mass-send-api/no-churn/live-code-guide/channel-code-guide/friend-fission-howto/fission-tool/aggregate-chat/customer-profile-tags/scrm-howto-choose/scrm-price-compare
#   08-09已推: sop-automation/auto-group-guide/community-tool/tag-precision/customer-tags-manage/community-sop-template/private-domain-flow/ai-customer-service-bot/ai-auto-reply/scrm-system-which-good
#   08-11已推: message-api-dev/api-send-message/thirdparty-app-dev/weiban-scrm/tanma-scrm/weisheng-scrm/private-domain-conversion-tool/automation-marketing-tool/private-domain-automation + 测试1条message-push-api
# 今日改推：SEO/GEO升级后新发布的权威长文 + 仅剩未推的5个词页（均从未推过，不凑满10条以免重复）
URLS=(
  # P0 - 今日新发布权威长文（GEO核心页，最高优先）
  "https://www.fenyai.com/article/scrm-selection-guide-2026"
  # P1 - 仅剩未推过的5个词页
  "https://www.fenyai.com/topic/wecom-session-qc-system.html"
  "https://www.fenyai.com/topic/wecom-newcustomer-acquisition.html"
  "https://www.fenyai.com/topic/wecom-sop-build.html"
  "https://www.fenyai.com/topic/wecom-mass-send-rate-limit.html"
  "https://www.fenyai.com/topic/wecom-customer-service-system.html"
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
