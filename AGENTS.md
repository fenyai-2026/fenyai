# AGENTS.md

## Dependencies
- framer-motion - 动画库
- react-helmet-async - SEO meta 标签管理
- lucide-react - 图标库

## Architecture
- 前端: React + Vite + Tailwind CSS + shadcn/ui
- 路由: HashRouter (SSG 兼容)，已启用 v7_startTransition / v7_relativeSplatPath future flags
- 后端: Meoo Cloud (Supabase) - PostgreSQL + RLS
- 通知: pg_net 触发器 → Edge Function (notify-wechat) → 企业微信 Webhook（pg_net 直接发企微会中文乱码，改用 Edge Function 中转）

## Patterns / Constraints
- SSG 项目禁用代码分割 (webpack splitChunks: false)
- 所有 lazy() 改为同步 import
- 上传文件引用必须用 CDN URL，禁止本地路径
- RLS 策略名用英文 snake_case，格式 <scope>_<action>_<table>
- $$ 在 SQL 中必须转义为 \$\$
- articles 表 anon 写入走不通，改用 Auth token 方案；已清理所有 anon 测试/条件 RLS 策略

## What Didn't Work
- ❌ webpack code splitting + SSG → chunk 加载失败返回 index.html → 改为禁用 splitChunks
- ❌ SSG 脚本生成的静态 HTML 未继承源文件 meta 标签（如百度验证）→ 需在 scripts/ssg.js 的 generateHTML 模板中硬编码关键 meta

## SEO / Verification
- 百度站点验证：需在 `index.html`、`scripts/ssg.js` 和 `src/components/SEOHelmet.tsx` 三处同步更新 `<meta name="baidu-site-verification" content="..." />`，当前验证码为 `codeva-DHMjhEQXnT`
- 360站点验证：需在 `index.html`、`scripts/ssg.js` 和 `src/components/SEOHelmet.tsx` 三处同步更新 `<meta name="360-site-verification" content="..." />`，当前验证码为 `368c63a6fb9755135cc510b8367d28c5`
- 必应（Bing）站点验证：需在 `index.html`、`scripts/ssg.js` 和 `src/components/SEOHelmet.tsx` 三处同步更新 `<meta name="msvalidate.01" content="..." />`，当前验证码为 `78DF27E53F72550D089DB668B4449793`
- ⚠️ 重要：由于使用 `react-helmet-async` 动态管理 head，必须在 `SEOHelmet.tsx` 中也添加验证标签，否则客户端渲染后标签会丢失
- 百度链接提交：
  - **每日配额限制：10条**，仅提交最高优先级页面
  - Edge Function `baidu-submit` 已部署（沙箱内无法直接调用外部API）
  - 推荐使用 `bash scripts/submit-to-baidu-curl.sh` 在本地执行提交
  - API地址：`http://data.zz.baidu.com/urls?site=https://www.fenyai.com&token=xLtRcnmEJ8L7lGcR`
  - ⚠️ URL域名必须与API配置的站点域名一致（www.fenyai.com），否则返回 `not_same_site`
  - **自动收录**：已在 `index.html` 中添加百度自动收录JS代码（push.js），用户访问页面时自动推送URL给百度
- SSG 脚本 (`scripts/ssg.js`) 为每个页面生成丰富静态内容 + JSON-LD + og:image，非简单模板
- 后台页面（Admin/AdminLogin/ArticleEditor/Categories/Leads/ContentAutomation/Settings）已添加 noindex
- 内链组件：`RelatedArticles`（文章相关推荐）、`ProductCrossLinks`（产品交叉链接）
- **Nginx配置**：`nginx-history.conf` 中已添加 `/sitemap.xml` 和 `/robots.txt` 的直接返回规则，设置 `default_type` 确保返回正确的 Content-Type（application/xml / text/plain），避免被 SPA 路由拦截返回 HTML

## Assets / CDN
- 上传文件引用必须用 `.assets_mapping` 中的 CDN URL，禁止使用本地路径（如 `/assets/xxx.jpg`），否则发布后图片裂开
- 二维码等静态资源示例：`https://conversation.cdn.meoo.host/conversations/.../云洋-微信二维码.png?auth_key=...`
