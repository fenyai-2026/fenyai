#!/bin/bash
# 百度链接提交脚本 - 使用curl直接调用百度API
# 使用方法: bash scripts/submit-to-baidu-curl.sh

BAIDU_API_URL="http://data.zz.baidu.com/urls?site=https://www.fenyai.com&token=xLtRcnmEJ8L7lGcR"

# URL列表（按优先级排序，仅提交前10个高优先级页面）
# 每日配额：10条
# 注意：必须与API配置的站点域名一致 (www.fenyai.com)
# 2026-08-16-b 批次（用今日剩余4条配额）：全站已基本100%覆盖(106条)，本批补唯一未推核心页 + 重推3个最高权重页加速SEO升级重抓
#   前序已推: 07-29~08-11 共100条 + 08-16首批6条(长文+5词页)
#   本批: /articles(唯一未推核心页) + /(首页)/solutions/products(重推触发重抓本次升级)
URLS=(
  # P0 - 唯一未推的核心列表页（文章收录入口）
  "https://www.fenyai.com/articles"
  # P1 - 最高权重页重推，加速本次SEO/GEO大升级(品牌schema/真实lastmod/长文内链)被百度重抓生效
  "https://www.fenyai.com/"
  "https://www.fenyai.com/solutions"
  "https://www.fenyai.com/products"
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
