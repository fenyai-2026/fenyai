#!/bin/bash
# 百度链接提交脚本 - 使用curl直接调用百度API
# 使用方法: bash scripts/submit-to-baidu-curl.sh

BAIDU_API_URL="http://data.zz.baidu.com/urls?site=https://www.fenyai.com&token=xLtRcnmEJ8L7lGcR"

# URL列表（按优先级排序，仅提交前10个高优先级页面）
# 每日配额：10条
# 注意：必须与API配置的站点域名一致 (www.fenyai.com)
# 2026-08-06 更新：避免与 07-29/07-30/08-01/08-03/08-04/08-05 已推批次重复。
#   07-29 已推: ai-agent-access/anti-block-mass-send//message-channel/compare/faq/scrm/live-code/growth/ai-call
#   07-30 已推: 5个queue词页(static)+solutions(finance/retail/healthcare/education/crack)
#   08-01 已推: solutions总览+行业页(ecommerce/active-outreach/sop/archive/distribution/ai-agent-integration)+mass-send/juhe-chat/ai-agent
#   08-03 已推: products系列(qimo/yinliu/jinqun/task/data)+open-platform/pricing/whitepaper/session-archive
#   08-04 已推: open-platform子页(docs/message-api)+resources/articles/demo/trial/weimo/sop/robot/cloud-phone
#   08-05 已推: 加好友簇5词页(wecom-add-friend*)+5行业案例页(case-study/*)
# 今日改推：会话存档排名专项词页（文档2 P0）+ 企业页 about/contact（均未推过）
URLS=(
  # P0 - 会话存档排名专项词页（文档2 P0 重点，从未推过）
  "https://www.fenyai.com/topic/session-archive-private-deploy.html"
  "https://www.fenyai.com/topic/session-archive-price.html"
  "https://www.fenyai.com/topic/wecom-session-archive-setup.html"
  "https://www.fenyai.com/topic/session-archive-api-dev.html"
  "https://www.fenyai.com/topic/session-archive-compliance.html"
  "https://www.fenyai.com/topic/wecom-session-qc.html"
  # P1 - 企业页（从未推过）
  "https://www.fenyai.com/about"
  "https://www.fenyai.com/contact"
  # P1 - 关联高价值词页（未推过，强化会话存档/质检簇）
  "https://www.fenyai.com/topic/scrm-message-integration.html"
  "https://www.fenyai.com/topic/scrm-private-deploy.html"
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
