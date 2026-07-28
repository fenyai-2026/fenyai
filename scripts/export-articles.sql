-- 用途：导出已发布文章为 JSON，供离线 SSG 构建使用
-- 操作：在 Supabase 后台 → SQL Editor 执行本脚本，
--       把返回的【那一行 JSON 值】完整复制，保存为：
--       scripts/articles.local.json
-- 注意：只复制 JSON 数组本身（以 [ 开头、] 结尾），不要带表头/列名。
--       若后台把结果包成了 {"json_agg":[...]}，只复制中括号部分即可。
-- 字段需与 scripts/ssg.js 中 select 的字段一致。

select json_agg(t) as articles
from (
  select
    id,
    title,
    content,
    summary,
    cover_image,
    source_type,
    source_url,
    published_at,
    created_at,
    view_count,
    category,
    tags,
    seo_title,
    seo_description
  from articles
  where status = 'published'
  order by published_at desc
) t;
