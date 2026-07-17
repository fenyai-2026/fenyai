/**
 * 站点路由 SEO 内容单一数据源（纯数据，无执行副作用）。
 * 由 ssg.js（SSG 预渲染）与 gen-legacy-redirects.js（历史死链跳转页）共享 require，
 * 避免 gen 脚本直接 require ssg.js 触发整构建。
 * 内容与 App.tsx 路由保持一致。
 */
module.exports = [
  // 首页
  {
    path: '/',
    title: '有机云 - 企业微信SCRM私域运营工具｜活码/AI智能体/会话存档',
    h1: '有机云SCRM｜企业微信私域运营工具',
    description: '有机云（www.fenyai.com）是企业微信官方合作伙伴，专注企业微信SCRM私域运营，提供活码拓客、裂变引流、AI外呼、超级群发、AI智能体、会话聚合、消息通道API、客户标签与数据报表等全链路工具，已服务10万+企业，助力私域运营效率提升10倍。',
    content: `
      <h2>为什么选择有机云？</h2>
      <p>有机云（官网 www.fenyai.com）是企业微信官方合作伙伴，旗下有机云SCRM 已服务超过10万家企业，帮助企业实现私域流量的高效运营和转化。</p>
      <h3>核心功能</h3>
      <ul>
        <li><strong>企微活码</strong>：渠道活码、员工活码、群活码，全渠道引流获客</li>
        <li><strong>超级群发</strong>：突破企微群发限制，精准触达每一位客户</li>
        <li><strong>AI智能体</strong>：基于大语言模型的智能客服，7×24小时自动回复</li>
        <li><strong>会话聚合</strong>：多账号会话统一管理，提升客服效率</li>
        <li><strong>裂变拓客</strong>：任务宝、海报裂变、红包裂变，低成本爆发式增长</li>
        <li><strong>数据分析</strong>：客户画像、转化漏斗、运营效果一目了然</li>
      </ul>
      <h3>适用行业</h3>
      <p>泛金融、社群电商、连锁零售、在线教育、智慧分销等多个行业解决方案。</p>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'Organization'
  },
  // 产品页
  { 
    path: '/products', 
    title: '有机云产品功能-企微魔方|引流宝|进群宝|SCRM工具', 
    description: '有机云产品功能介绍：企微魔方、引流宝、进群宝、AI外呼、超级群发、AI智能体、会话聚合转接、客户标签管理、数据报表等私域运营工具。',
    content: `
      <h2>有机云产品矩阵</h2>
      <p>覆盖私域运营全链路，从引流获客到客户管理，从营销触达到数据分析，一站式解决企业私域运营需求。</p>
      <h3>核心产品</h3>
      <ul>
        <li><strong>企微魔方</strong>：SCRM客户管理系统，客户标签、智能跟进、数据分析</li>
        <li><strong>引流宝</strong>：企微活码裂变引流，渠道活码、裂变活码、智能分流</li>
        <li><strong>进群宝</strong>：智能群管理，自动建群、口令入群、群满自动换群</li>
        <li><strong>任务宝</strong>：裂变任务营销，任务裂变、红包裂变、拼团裂变</li>
        <li><strong>数据中台</strong>：私域数据分析，多平台数据打通、客户画像分析</li>
      </ul>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'SoftwareApplication'
  },
  { 
    path: '/products/qimo', 
    title: '有机云企微魔方_企业微信私域运营核心工具', 
    description: '企微魔方是有机云核心SCRM产品，提供客户管理、标签分组、智能跟进、数据分析等功能。',
    content: `
      <h2>企微魔方 - 企业微信SCRM客户管理系统</h2>
      <p>企微魔方是有机云的核心SCRM产品，帮助企业实现客户的全生命周期管理。</p>
      <h3>核心功能</h3>
      <ul>
        <li><strong>客户管理</strong>：客户信息统一管理，支持批量导入导出</li>
        <li><strong>标签分组</strong>：多维度客户标签，精准客户分层</li>
        <li><strong>智能跟进</strong>：SOP自动化跟进，提醒不漏单</li>
        <li><strong>数据分析</strong>：客户转化漏斗、员工业绩统计、运营效果分析</li>
        <li><strong>会话存档</strong>：聊天记录合规存档，敏感词监控预警</li>
      </ul>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'SoftwareApplication'
  },
  { 
    path: '/products/yinliu', 
    title: '有机云引流宝_多渠道引流拓客神器', 
    description: '引流宝提供渠道活码、裂变活码、智能分流等功能，助力企业高效引流获客。',
    content: `
      <h2>引流宝 - 企微活码裂变引流工具</h2>
      <p>引流宝帮助企业实现全渠道引流获客，快速沉淀私域流量。</p>
      <h3>核心功能</h3>
      <ul>
        <li><strong>渠道活码</strong>：追踪不同渠道引流效果，优化投放策略</li>
        <li><strong>员工活码</strong>：智能分配客户给不同员工，均衡负载</li>
        <li><strong>群活码</strong>：群满自动换群，永不过期</li>
        <li><strong>裂变活码</strong>：邀请好友助力，实现病毒式传播</li>
        <li><strong>智能分流</strong>：按地域、时间等规则智能分配客户</li>
      </ul>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'SoftwareApplication'
  },
  { 
    path: '/products/jinqun', 
    title: '有机云进群宝_智能群管理工具', 
    description: '进群宝提供自动建群、口令入群、群满自动建新群等智能群管理功能。',
    content: `
      <h2>进群宝 - 智能群管理工具</h2>
      <p>进群宝帮助企业高效管理社群，实现社群自动化运营。</p>
      <h3>核心功能</h3>
      <ul>
        <li><strong>自动建群</strong>：一键创建多个社群，快速搭建私域阵地</li>
        <li><strong>口令入群</strong>：用户输入口令自动入群，降低入群门槛</li>
        <li><strong>群满换群</strong>：群满自动创建新群，永不流失客户</li>
        <li><strong>群公告</strong>：定时发送群公告，重要信息不遗漏</li>
        <li><strong>群数据统计</strong>：群活跃度、成员增长趋势一目了然</li>
      </ul>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'SoftwareApplication'
  },
  { 
    path: '/products/task', 
    title: '有机云任务宝_裂变任务营销工具', 
    description: '任务宝支持任务裂变、红包裂变、拼团裂变等多种玩法，实现低成本爆发式增长。',
    content: `
      <h2>任务宝 - 裂变任务营销工具</h2>
      <p>任务宝提供多种裂变玩法，帮助企业实现低成本爆发式增长。</p>
      <h3>核心功能</h3>
      <ul>
        <li><strong>任务裂变</strong>：邀请好友完成任务获得奖励，病毒式传播</li>
        <li><strong>红包裂变</strong>：分享得红包，激励用户主动传播</li>
        <li><strong>拼团裂变</strong>：多人拼团享优惠，带动销量增长</li>
        <li><strong>海报裂变</strong>：生成专属海报，朋友圈快速传播</li>
        <li><strong>数据追踪</strong>：实时查看裂变效果，优化活动策略</li>
      </ul>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'SoftwareApplication'
  },
  { 
    path: '/products/data', 
    title: '有机云私域数据中台_统一数据管理分析平台', 
    description: '数据中台提供多平台数据打通、客户画像分析、转化漏斗追踪等数据分析功能。',
    content: `
      <h2>数据中台 - 私域数据分析平台</h2>
      <p>数据中台帮助企业打通多平台数据，实现精细化运营决策。</p>
      <h3>核心功能</h3>
      <ul>
        <li><strong>多平台数据打通</strong>：整合企微、公众号、小程序等多渠道数据</li>
        <li><strong>客户画像分析</strong>：360度客户画像，精准了解客户需求</li>
        <li><strong>转化漏斗追踪</strong>：从引流到转化的全链路数据分析</li>
        <li><strong>员工业绩统计</strong>：客服响应时长、转化率、客户满意度</li>
        <li><strong>自定义报表</strong>：按需生成数据报表，支持导出分享</li>
      </ul>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'SoftwareApplication'
  },
  // 解决方案
  { 
    path: '/solutions', 
    title: '有机云解决方案_行业私域运营方案', 
    description: '泛金融业、社群电商、连锁零售、智慧分销等行业解决方案，助力企业快速搭建私域运营体系。',
    content: `
      <h2>行业解决方案</h2>
      <p>有机云针对不同行业特点，提供专业的私域运营解决方案。</p>
      <h3>覆盖行业</h3>
      <ul>
        <li><strong>泛金融业</strong>：银行、保险、证券，满足合规要求，客户分层运营</li>
        <li><strong>社群电商</strong>：团购、直播带货，裂变拉新、订单同步</li>
        <li><strong>连锁零售</strong>：多门店管理、会员通、导购赋能</li>
        <li><strong>在线教培</strong>：课程引流、社群运营、学员管理</li>
        <li><strong>智慧分销</strong>：分销体系搭建、渠道管理、业绩追踪</li>
      </ul>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage'
  },
  { 
    path: '/solutions/finance', 
    title: '有机云金融私域运营_保险企业微信解决方案_企微活码·合规管理·AI服务', 
    description: '专为泛金融行业打造的私域运营解决方案，满足合规要求，提供客户分层运营、智能外呼、数据安全加密等功能。',
    content: `
      <h2>泛金融行业私域运营解决方案</h2>
      <p>专为银行、保险、证券等金融机构打造的私域运营方案，满足严格的合规要求。</p>
      <h3>核心能力</h3>
      <ul>
        <li><strong>合规存档</strong>：会话记录合规存档，满足监管要求</li>
        <li><strong>客户分层</strong>：高净值客户精准识别，差异化服务</li>
        <li><strong>智能外呼</strong>：AI外呼机器人，意向客户自动跟进</li>
        <li><strong>数据安全</strong>：敏感信息加密存储，权限严格管控</li>
        <li><strong>风控预警</strong>：异常行为实时监控，风险及时预警</li>
      </ul>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage'
  },
  { 
    path: '/solutions/retail', 
    title: '有机云连锁门店私域运营_零售行业企业微信解决方案_门店活码·会员运营', 
    description: '连锁零售行业私域运营解决方案，提供多门店管理、会员通、导购赋能、库存同步等功能。',
    content: `
      <h2>连锁零售行业私域运营解决方案</h2>
      <p>帮助连锁零售企业实现线上线下融合，提升门店运营效率。</p>
      <h3>核心能力</h3>
      <ul>
        <li><strong>多门店管理</strong>：总部统一管控，门店独立运营</li>
        <li><strong>会员通</strong>：线上线下会员权益互通，提升复购率</li>
        <li><strong>导购赋能</strong>：导购专属活码，业绩自动统计</li>
        <li><strong>库存同步</strong>：线上线下库存实时同步，避免超卖</li>
        <li><strong>到店引流</strong>：线上领券线下核销，带动门店客流</li>
      </ul>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage'
  },
  { 
    path: '/solutions/ecommerce', 
    title: '有机云社群电商私域运营方案', 
    description: '社群电商私域运营解决方案，提供裂变拉新、智能群发、订单同步、社群自动化等功能。',
    content: `
      <h2>社群电商私域运营解决方案</h2>
      <p>帮助社群电商企业实现私域流量的高效变现。</p>
      <h3>核心能力</h3>
      <ul>
        <li><strong>裂变拉新</strong>：拼团、砍价、分销，低成本获取新客户</li>
        <li><strong>智能群发</strong>：精准推送商品信息，提升转化率</li>
        <li><strong>订单同步</strong>：电商平台订单自动同步，统一管理</li>
        <li><strong>社群自动化</strong>：自动欢迎、自动回复、自动踢广告</li>
        <li><strong>直播引流</strong>：直播间引导加企微，沉淀私域流量</li>
      </ul>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage'
  },
  { 
    path: '/solutions/education', 
    title: '有机云在线教培私域运营_教育行业企微SCRM解决方案_课程引流·学员管理', 
    description: '在线教育行业私域运营解决方案，提供课程引流、社群运营、学员管理、数据分析等功能。',
    content: `
      <h2>在线教培行业私域运营解决方案</h2>
      <p>帮助教育培训机构实现招生转化和学员服务的全流程数字化。</p>
      <h3>核心能力</h3>
      <ul>
        <li><strong>课程引流</strong>：试听课、公开课引流，精准获取意向学员</li>
        <li><strong>社群运营</strong>：学习群、打卡群，提升学员活跃度</li>
        <li><strong>学员管理</strong>：学员档案、学习进度、续费提醒</li>
        <li><strong>数据分析</strong>：招生转化漏斗、课程满意度分析</li>
        <li><strong>家校沟通</strong>：家长群运营，提升续费率</li>
      </ul>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage'
  },
  { 
    path: '/solutions/active-outreach', 
    title: '有机云主动拓客_私域运营AI智能外呼解决方案_线索管理·客户画像', 
    description: '主动触达解决方案，提供超级群发、AI外呼、智能触达等功能，提升客户转化率。',
    content: `
      <h2>主动触达解决方案</h2>
      <p>帮助企业主动触达客户，提升营销转化效率。</p>
      <h3>核心能力</h3>
      <ul>
        <li><strong>超级群发</strong>：突破企微群发限制，精准触达目标客户</li>
        <li><strong>AI外呼</strong>：智能外呼机器人，意向客户自动筛选</li>
        <li><strong>定时发送</strong>：预设发送时间，最佳时机触达客户</li>
        <li><strong>A/B测试</strong>：多版本文案测试，优化转化效果</li>
        <li><strong>效果追踪</strong>：打开率、点击率、转化率实时监控</li>
      </ul>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage'
  },
  { 
    path: '/solutions/sop', 
    title: '有机云营销SOP_私域运营自动化运营流程_标准化客户管理', 
    description: 'SOP运营解决方案，提供自动化客户跟进、智能提醒、运营标准化等功能。',
    content: `
      <h2>SOP运营解决方案</h2>
      <p>帮助企业建立标准化的客户运营流程，提升运营效率。</p>
      <h3>核心能力</h3>
      <ul>
        <li><strong>自动化跟进</strong>：新客户自动欢迎、定期回访自动触发</li>
        <li><strong>智能提醒</strong>：待办事项提醒、客户生日祝福、续费提醒</li>
        <li><strong>运营标准化</strong>：统一话术模板、标准服务流程</li>
        <li><strong>执行监控</strong>：SOP执行情况实时监控，确保落地</li>
        <li><strong>效果分析</strong>：SOP转化效果分析，持续优化流程</li>
      </ul>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage'
  },
  { 
    path: '/solutions/crack', 
    title: '有机云裂变任务私域运营_企微裂变解决方案_任务·红包·拼团·分销', 
    description: '有机云裂变任务私域运营方案，提供任务裂变、红包裂变、拼团裂变、分销裂变四大玩法，助力企业低成本爆发式获客。',
    content: `
      <h2>裂变任务私域运营解决方案</h2>
      <p>有机云提供任务裂变、红包裂变、拼团裂变、分销裂变等多样化玩法，让每个用户都成为传播节点，实现低成本爆发式增长。</p>
      <h3>核心玩法</h3>
      <ul>
        <li><strong>任务裂变</strong>：设置分享任务，用户完成任务即可获得奖励，多级裂变传播</li>
        <li><strong>红包裂变</strong>：分享红包给好友，双方均可获得奖励，刺激主动分享</li>
        <li><strong>拼团裂变</strong>：邀请好友拼团享受优惠，利用社交关系快速获客</li>
        <li><strong>分销裂变</strong>：用户成为分销员分享商品赚佣金，构建裂变分销网络</li>
        <li><strong>数据追踪</strong>：全链路数据追踪，ROI清晰可见，效果可评估</li>
      </ul>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage'
  },
  { 
    path: '/solutions/archive', 
    title: '有机云会话存档_企业微信会话存档解决方案_合规·质检·安全', 
    description: '会话存档解决方案，提供聊天记录备份、合规存档、敏感词监控等功能。',
    content: `
      <h2>会话存档解决方案</h2>
      <p>帮助企业合规存档企微聊天记录，满足监管要求。</p>
      <h3>核心能力</h3>
      <ul>
        <li><strong>聊天记录备份</strong>：文字、图片、语音、文件全类型存档</li>
        <li><strong>合规存档</strong>：符合金融、医疗等行业监管要求</li>
        <li><strong>敏感词监控</strong>：实时监测敏感词，违规即时预警</li>
        <li><strong>审计追溯</strong>：完整的操作日志，支持审计追溯</li>
        <li><strong>数据导出</strong>：支持多种格式导出，便于分析归档</li>
      </ul>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage'
  },
  { 
    path: '/solutions/healthcare', 
    title: '有机云医疗健康私域运营_医疗机构企微SCRM解决方案_活码获客·合规管理', 
    description: '医疗健康行业私域运营解决方案，提供企微活码获客、合规患者管理、精细化健康运营、AI智能健康咨询等功能。',
    content: `
      <h2>医疗健康私域运营解决方案</h2>
      <p>帮助医疗机构、连锁诊所、互联网医院实现患者私域的高效运营与合规管理。</p>
      <h3>核心能力</h3>
      <ul>
        <li><strong>企微活码获客</strong>：线上线下全渠道引流，自动分配健康顾问</li>
        <li><strong>合规患者管理</strong>：会话存档、敏感词监控，满足医疗隐私合规</li>
        <li><strong>精细化健康运营</strong>：患者标签、随访SOP、复诊提醒，提升复诊率</li>
        <li><strong>AI智能健康咨询</strong>：7×24小时自动应答，高意向患者自动转人工</li>
      </ul>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage'
  },
  { 
    path: '/solutions/distribution', 
    title: '有机云智慧分销私域运营方案', 
    description: '智慧分销解决方案，提供分销体系搭建、渠道管理、业绩追踪等功能。',
    content: `
      <h2>智慧分销解决方案</h2>
      <p>帮助企业搭建完善的分销体系，拓展销售渠道。</p>
      <h3>核心能力</h3>
      <ul>
        <li><strong>分销体系搭建</strong>：多级分销、团队分红、等级晋升</li>
        <li><strong>渠道管理</strong>：分销商招募、审核、培训、考核</li>
        <li><strong>业绩追踪</strong>：实时查看分销商业绩、佣金结算</li>
        <li><strong>素材库</strong>：统一提供推广素材，降低分销门槛</li>
        <li><strong>数据分析</strong>：渠道效果分析，优化分销策略</li>
      </ul>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage'
  },
  { 
    path: '/solutions/ai-agent-integration', 
    title: '有机云AI Agent集成_智能客服自动化解决方案', 
    description: 'AI Agent集成解决方案，提供智能客服、自动化回复、知识库训练等功能。',
    content: `
      <h2>AI Agent集成解决方案</h2>
      <p>将AI智能体集成到企业现有系统，实现客服自动化。</p>
      <h3>核心能力</h3>
      <ul>
        <li><strong>智能客服</strong>：7×24小时自动回复，替代80%人工客服</li>
        <li><strong>知识库训练</strong>：上传企业资料，AI自动学习业务知识</li>
        <li><strong>多轮对话</strong>：理解上下文，精准回答复杂问题</li>
        <li><strong>意图识别</strong>：自动识别客户意图，转接人工或自助解决</li>
        <li><strong>系统集成</strong>：与CRM、工单系统对接，数据互通</li>
      </ul>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage'
  },
  // SEO独立落地页
  { 
    path: '/scrm', 
    title: '有机云SCRM系统_企业微信私域流量运营工具', 
    description: '企业微信SCRM系统，专注私域流量运营，提供活码拓客、客户管理、营销自动化、数据分析等全链路工具。',
    content: `
      <h2>企业微信SCRM系统</h2>
      <p>有机云SCRM系统是专为私域流量运营打造的一站式解决方案。</p>
      <h3>核心价值</h3>
      <ul>
        <li><strong>引流获客</strong>：企微活码、裂变活动，快速沉淀私域流量</li>
        <li><strong>客户管理</strong>：标签分组、客户画像，精准了解客户需求</li>
        <li><strong>营销触达</strong>：超级群发、SOP自动化，提升转化效率</li>
        <li><strong>数据分析</strong>：全链路数据追踪，优化运营策略</li>
      </ul>
      <p>已服务10万+企业，助力私域运营效率提升10倍。</p>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'SoftwareApplication'
  },
  { 
    path: '/live-code', 
    title: '企业微信活码怎么生成_有机云活码引流工具_渠道活码·员工活码·群活码', 
    description: '有机云活码系统，支持渠道活码、裂变活码、智能分流，助力企业高效引流获客。',
    content: `
      <h2>企微活码系统</h2>
      <p>有机云活码系统是企业微信引流获客的核心工具。</p>
      <h3>活码类型</h3>
      <ul>
        <li><strong>渠道活码</strong>：追踪不同渠道引流效果，优化投放ROI</li>
        <li><strong>员工活码</strong>：智能分配客户，均衡员工负载</li>
        <li><strong>群活码</strong>：群满自动换群，永不过期</li>
        <li><strong>裂变活码</strong>：邀请好友助力，病毒式传播</li>
      </ul>
      <p>支持智能分流、数据统计、A/B测试等高级功能。</p>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'SoftwareApplication'
  },
  { 
    path: '/mass-send', 
    title: '企业微信群发工具_有机云超级群发不限次', 
    description: '有机云企业微信群发工具——超级群发不限次，支持标签精准群发、定时群发、多账号统一管理，突破企微群发限制。',
    content: `
      <h2>企业微信群发工具</h2>
      <p>有机云超级群发突破企业微信单日群发次数上限，按客户标签分批次精准触达。</p>
      <h3>核心能力</h3>
      <ul>
        <li><strong>标签群发</strong>：按客户标签、人群包智能分层，千人千面精准营销</li>
        <li><strong>定时群发</strong>：按活跃时段设定发送时间，黄金时段精准触达</li>
        <li><strong>多账号统一群发</strong>：一个后台管理多个企微号，批量触达全量客户</li>
        <li><strong>数据回流</strong>：实时统计送达、打开、点击，自动生成转化漏斗</li>
      </ul>
      <p>内置频控与去重机制，遵循企微合规，降低投诉封号风险。</p>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'SoftwareApplication'
  },
  { 
    path: '/juhe-chat', 
    title: '企业微信聚合聊天_多账号统一管理', 
    description: '有机云企业微信聚合聊天——多账号统一收件箱，客服在一个后台接待多个企微号客户，支持快捷回复、会话转接、服务质检。',
    content: `
      <h2>企业微信聚合聊天</h2>
      <p>有机云聚合聊天将多个企业微信账号的客户会话聚合到统一工作台。</p>
      <h3>核心能力</h3>
      <ul>
        <li><strong>多账号聚合</strong>：多个企微号集中到一个工作台，无需反复切换</li>
        <li><strong>统一收件箱</strong>：客户消息实时汇总，按优先级智能排序</li>
        <li><strong>快捷回复</strong>：内置话术库，一键发送专业答复</li>
        <li><strong>会话转接</strong>：复杂问题一键转接专家，附带上全文上下文</li>
        <li><strong>服务质检</strong>：自动抽检会话，监控敏感词与违规用语</li>
      </ul>
      <p>一个后台统管全公司企微客户会话，协同服务效率倍增。</p>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'SoftwareApplication'
  },
  { 
    path: '/session-archive', 
    title: '企业微信会话存档怎么开通', 
    description: '企业微信会话存档怎么开通？有机云提供合规会话存档方案，支持全类型存档、敏感词监控、离职继承与 API 对接，满足金融监管要求。',
    content: `
      <h2>企业微信会话存档怎么开通</h2>
      <p>有机云提供合规的企业微信会话存档方案，三步即可上线。</p>
      <h3>开通三步</h3>
      <ul>
        <li><strong>开启权限</strong>：企微后台开启会话内容存档并购买席位</li>
        <li><strong>授权有机云</strong>：配置为可信服务商并授权存档范围</li>
        <li><strong>配置上线</strong>：设置存档策略与敏感词，1 个工作日内上线</li>
      </ul>
      <p>支持文字、图片、语音、文件全类型合规留存与敏感词监控。</p>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage'
  },
  { 
    path: '/growth', 
    title: '有机云裂变拓客_企业微信裂变工具_任务宝·海报裂变·红包裂变·群裂变', 
    description: '私域增长解决方案，提供裂变任务、红包裂变、任务宝等多样化玩法，实现低成本爆发式增长。',
    content: `
      <h2>私域增长解决方案</h2>
      <p>帮助企业实现私域流量的低成本爆发式增长。</p>
      <h3>增长玩法</h3>
      <ul>
        <li><strong>任务裂变</strong>：邀请好友完成任务获得奖励</li>
        <li><strong>红包裂变</strong>：分享得红包，激励主动传播</li>
        <li><strong>拼团裂变</strong>：多人拼团享优惠，带动销量</li>
        <li><strong>海报裂变</strong>：生成专属海报，朋友圈快速传播</li>
        <li><strong>抽奖裂变</strong>：邀请好友增加抽奖次数</li>
      </ul>
      <p>平均获客成本降低60%，裂变系数可达1:5以上。</p>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage'
  },
  { 
    path: '/ai-call', 
    title: '有机云AI外呼_智能电话营销机器人', 
    description: 'AI外呼系统，基于大语言模型的智能电话营销机器人，支持意向识别、自动跟进、数据分析。',
    content: `
      <h2>AI外呼系统</h2>
      <p>基于大语言模型的智能电话营销机器人，提升外呼效率。</p>
      <h3>核心功能</h3>
      <ul>
        <li><strong>智能外呼</strong>：自动拨打客户电话，意向客户自动筛选</li>
        <li><strong>意向识别</strong>：AI判断客户意向等级，优先跟进高意向</li>
        <li><strong>自动跟进</strong>：意向客户自动添加企微，无缝衔接</li>
        <li><strong>数据分析</strong>：通话录音、转化率、接通率实时统计</li>
        <li><strong>话术优化</strong>：AI分析通话数据，持续优化话术</li>
      </ul>
      <p>日均外呼量可达人工的10倍，意向客户转化率提升30%。</p>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'SoftwareApplication'
  },
  { 
    path: '/ai-agent', 
    title: '有机云AI智能体_企业级智能客服全场景解决方案', 
    description: '有机云AI智能体——基于大语言模型的企业级智能客服系统。支持知识库训练、多轮对话、工作流自动化，7x24小时在线。',
    content: `
      <h2>AI智能体</h2>
      <p>基于大语言模型的企业级智能客服系统，7×24小时在线服务。</p>
      <h3>核心能力</h3>
      <ul>
        <li><strong>知识库训练</strong>：上传企业资料，AI自动学习业务知识</li>
        <li><strong>多轮对话</strong>：理解上下文，精准回答复杂问题</li>
        <li><strong>意图识别</strong>：自动识别客户意图，智能路由</li>
        <li><strong>情感分析</strong>：识别客户情绪，适时转接人工</li>
        <li><strong>工作流自动化</strong>：自动处理常见业务，释放人力</li>
      </ul>
      <p>可替代80%的人工客服工作，大幅降低客服成本。</p>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'SoftwareApplication'
  },
  // 开放平台与资源
  { 
    path: '/open-platform', 
    title: '有机云开放平台_企微SCRM API_微信机器人API_消息通道API', 
    description: '有机云开放平台，提供丰富的API接口，支持与企业现有系统对接，实现数据互通。',
    content: `
      <h2>有机云开放平台</h2>
      <p>提供丰富的API接口，支持与企业现有系统无缝对接。</p>
      <h3>API能力</h3>
      <ul>
        <li><strong>客户管理API</strong>：客户增删改查、标签管理、人群包</li>
        <li><strong>消息发送API</strong>：企微消息推送、群发消息、模板消息</li>
        <li><strong>活码管理API</strong>：创建活码、统计数据、智能分流</li>
        <li><strong>会话存档API</strong>：获取聊天记录、敏感词检测</li>
        <li><strong>数据分析API</strong>：获取运营数据、生成报表</li>
      </ul>
      <p>支持RESTful接口，提供完善的文档和SDK。</p>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage'
  },
  { 
    path: '/message-channel', 
    title: '有机云消息通道API_企微消息发送底层_3行代码接入AI Agent', 
    description: '有机云消息通道API——企业微信消息发送底层基础设施。3行代码为AI Agent接入企微消息能力，万级并发，99.9%送达率，支持Dify/Coze/百度千帆/阿里百炼集成。',
    content: `
      <h2>消息通道API</h2>
      <p>企业微信消息发送底层基础设施，3行代码接入AI Agent。</p>
      <h3>核心特性</h3>
      <ul>
        <li><strong>极简接入</strong>：3行代码即可为AI Agent接入企微消息能力</li>
        <li><strong>万级并发</strong>：支持万级并发发送，满足大规模业务需求</li>
        <li><strong>高送达率</strong>：99.9%消息送达率，稳定可靠</li>
        <li><strong>多平台集成</strong>：支持Dify、Coze、百度千帆、阿里百炼等AI平台</li>
        <li><strong>消息类型</strong>：文本、图片、链接、小程序、文件等全类型支持</li>
      </ul>
      <p>适用于AI客服、营销自动化、通知提醒等场景。</p>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage'
  },
  { 
    path: '/open-platform/docs', 
    title: '有机云开放平台API文档_企微SCRM_微信机器人', 
    description: '有机云开放平台API接口文档，包含企微SCRM API、微信机器人API、消息通道API等。',
    content: `
      <h2>API文档</h2>
      <p>有机云开放平台提供完善的API接口文档，帮助开发者快速接入。</p>
      <h3>文档内容</h3>
      <ul>
        <li><strong>快速开始</strong>：接入指南、认证方式、基础示例</li>
        <li><strong>客户管理API</strong>：客户CRUD、标签、人群包接口</li>
        <li><strong>消息发送API</strong>：企微消息、群发、模板消息接口</li>
        <li><strong>活码管理API</strong>：活码创建、统计、分流接口</li>
        <li><strong>错误码说明</strong>：常见错误码及解决方案</li>
      </ul>
      <p>提供Python、Java、Node.js等多语言SDK。</p>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage'
  },
  { 
    path: '/open-platform/message-api', 
    title: '有机云消息通道API_企微消息推送接口', 
    description: '消息通道API文档，提供企微消息推送、模板消息、群发消息等接口。',
    content: `
      <h2>消息通道API文档</h2>
      <p>企微消息推送接口文档，支持多种消息类型。</p>
      <h3>接口能力</h3>
      <ul>
        <li><strong>单聊消息</strong>：向指定客户发送消息</li>
        <li><strong>群发消息</strong>：向标签客户批量发送消息</li>
        <li><strong>群聊消息</strong>：向指定群聊发送消息</li>
        <li><strong>朋友圈消息</strong>：发布朋友圈动态</li>
        <li><strong>模板消息</strong>：使用模板发送结构化消息</li>
      </ul>
      <p>支持文本、图片、链接、小程序卡片、文件等消息类型。</p>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage'
  },
  { 
    path: '/resources', 
    title: '有机云资源中心_私域运营资料下载', 
    description: '私域运营资源中心，提供行业报告、运营指南、案例分享等资料下载。',
    content: `
      <h2>资源中心</h2>
      <p>私域运营知识宝库，助你快速掌握私域运营方法论。</p>
      <h3>资源类型</h3>
      <ul>
        <li><strong>行业报告</strong>：私域运营趋势、行业白皮书</li>
        <li><strong>运营指南</strong>：SOP模板、话术库、活动策划方案</li>
        <li><strong>案例分享</strong>：成功客户案例、实操复盘</li>
        <li><strong>视频教程</strong>：产品操作教程、运营技巧讲解</li>
        <li><strong>工具模板</strong>：表格模板、流程图、检查清单</li>
      </ul>
      <p>所有资源免费下载，持续更新中。</p>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage'
  },
  // 其他页面
  { 
    path: '/pricing', 
    title: '有机云价格方案_SCRM私域运营工具定价', 
    description: '有机云提供灵活的定价方案，支持免费试用，按坐席计费，满足不同规模企业需求。',
    content: `
      <h2>价格方案</h2>
      <p>灵活的定价方案，满足不同规模企业的需求。</p>
      <h3>方案对比</h3>
      <ul>
        <li><strong>免费版</strong>：基础功能体验，适合个人或小团队</li>
        <li><strong>专业版</strong>：全功能解锁，适合成长型企业</li>
        <li><strong>企业版</strong>：定制化服务，适合大型企业</li>
        <li><strong>旗舰版</strong>：专属顾问+定制开发，适合集团客户</li>
      </ul>
      <p>所有方案均支持免费试用14天，无需绑定信用卡。</p>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage'
  },
  { 
    path: '/contact', 
    title: '有机云_联系我们_客服咨询', 
    description: '联系有机云客服团队，获取产品咨询、技术支持、商务合作等服务。',
    content: `
      <h2>联系我们</h2>
      <p>有机云客服团队随时为您提供专业服务。</p>
      <h3>联系方式</h3>
      <ul>
        <li><strong>产品咨询</strong>：了解企业微信SCRM解决方案</li>
        <li><strong>技术支持</strong>：产品使用问题、故障排查</li>
        <li><strong>商务合作</strong>：代理加盟、OEM合作、API对接</li>
        <li><strong>售后服务</strong>：续费、升级、投诉建议</li>
      </ul>
      <p>工作时间：周一至周五 9:00-18:00，紧急问题7×24小时响应。</p>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage'
  },
  { 
    path: '/articles', 
    title: '有机云私域运营干货_企微SCRM技巧|客户案例|行业资讯', 
    description: '有机云私域运营干货分享，包含企微SCRM操作技巧、客户成功案例、行业解决方案、产品更新动态等。',
    content: `
      <h2>私域运营干货</h2>
      <p>分享私域运营实战经验，助你少走弯路。</p>
      <h3>内容分类</h3>
      <ul>
        <li><strong>SCRM技巧</strong>：企微操作技巧、功能深度解析</li>
        <li><strong>客户案例</strong>：成功客户故事、实操复盘</li>
        <li><strong>行业资讯</strong>：私域趋势、政策解读、竞品分析</li>
        <li><strong>产品动态</strong>：新功能上线、版本更新说明</li>
        <li><strong>运营方法论</strong>：SOP设计、活动策划、数据分析</li>
      </ul>
      <p>每周更新，关注获取最新干货。</p>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage'
  },
  { 
    path: '/demo-showcase', 
    title: '有机云产品演示_SCRM功能演示', 
    description: '有机云SCRM产品功能演示，体验活码裂变、超级群发、AI智能体、会话聚合等核心功能。',
    content: `
      <h2>产品演示</h2>
      <p>在线体验有机云SCRM核心功能，无需注册即可试用。</p>
      <h3>演示内容</h3>
      <ul>
        <li><strong>活码裂变</strong>：创建活码、查看统计数据</li>
        <li><strong>超级群发</strong>：编辑群发内容、预览效果</li>
        <li><strong>AI智能体</strong>：与AI客服对话、查看知识库</li>
        <li><strong>会话聚合</strong>：多账号会话管理、快捷回复</li>
        <li><strong>数据分析</strong>：查看运营报表、数据看板</li>
      </ul>
      <p>演示环境数据每日重置，请放心体验。</p>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage'
  },
  { 
    path: '/whitepaper', 
    title: '有机云私域运营白皮书_免费下载_行业报告_案例集', 
    description: '下载私域运营白皮书，获取行业报告、运营指南、最佳实践等资料。',
    content: `
      <h2>白皮书下载</h2>
      <p>免费下载私域运营行业报告，掌握前沿方法论。</p>
      <h3>热门白皮书</h3>
      <ul>
        <li><strong>《2026私域运营趋势报告》</strong>：行业趋势、技术变革、未来展望</li>
        <li><strong>《企业微信SCRM选型指南》</strong>：功能对比、避坑指南、选型建议</li>
        <li><strong>《私域运营SOP手册》</strong>：标准流程、话术模板、执行 checklist</li>
        <li><strong>《AI智能体应用白皮书》</strong>：应用场景、落地案例、实施路径</li>
        <li><strong>《行业解决方案合集》</strong>：金融、零售、教育等行业案例</li>
      </ul>
      <p>填写信息即可免费下载，持续更新中。</p>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage'
  },
  { 
    path: '/compare', 
    title: '有机云SCRM对比_企业微信SCRM哪家好｜微伴/探马/微盛', 
    description: '有机云SCRM与微伴助手、探马、微盛等主流企业微信SCRM横向对比：活码引流、超级群发、AI智能体、会话存档、价格与适用场景，帮你选对私域运营工具。',
    content: `
      <h2>有机云SCRM vs 微伴 / 探马 / 微盛 横向对比</h2>
      <p>企业微信SCRM 哪家好？有机云SCRM 从「活码引流 — 超级群发 — AI智能体 — 会话存档」全链路覆盖，已服务 10 万+ 企业，下面从核心维度客观对比主流产品。</p>
      <h3>核心功能对比表</h3>
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;">
        <thead>
          <tr><th>对比维度</th><th>有机云SCRM</th><th>微伴助手</th><th>探马 SCRM</th><th>微盛·企微管家</th></tr>
        </thead>
        <tbody>
          <tr><td>企微活码 / 裂变引流</td><td>✅ 渠道/员工/群/裂变活码齐全</td><td>✅ 支持</td><td>✅ 支持</td><td>✅ 支持</td></tr>
          <tr><td>超级群发 / 营销触达</td><td>✅ 突破限制精准触达</td><td>✅ 支持</td><td>✅ 支持</td><td>⚠️ 基础</td></tr>
          <tr><td>AI 智能体客服</td><td>✅ 知识库+多轮对话</td><td>⚠️ 部分</td><td>⚠️ 部分</td><td>❌ 较弱</td></tr>
          <tr><td>会话存档 / 合规</td><td>✅ 全类型存档+敏感词</td><td>✅ 支持</td><td>✅ 支持</td><td>✅ 支持</td></tr>
          <tr><td>消息通道 API</td><td>✅ 3行代码接入 AI Agent</td><td>⚠️ 受限</td><td>⚠️ 受限</td><td>❌ 无</td></tr>
          <tr><td>适用场景</td><td>中大型企业 / 开发者集成</td><td>中小型企业</td><td>中大型企业</td><td>小微企业</td></tr>
        </tbody>
      </table>
      <h3>怎么选？</h3>
      <ul>
        <li><strong>看重 AI 智能体与开放集成</strong>：选有机云SCRM，消息通道 API 可 3 行代码接入 Dify/Coze/千帆/百炼。</li>
        <li><strong>预算有限的小微团队</strong>：可先看微盛等轻量方案，后期迁移到有机云。</li>
        <li><strong>需要会话合规存档</strong>：有机云、微伴、探马均支持，按行业合规要求选择。</li>
      </ul>
      <p>更多选型建议，欢迎 <a href="https://www.fenyai.com/trial">免费试用有机云SCRM</a> 或 <a href="https://www.fenyai.com/contact">联系顾问</a> 1 对 1 对比。</p>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage'
  },
  { 
    path: '/faq', 
    title: '有机云常见问题FAQ_企业微信SCRM使用帮助与解答', 
    description: '有机云FAQ使用帮助中心：企业微信SCRM怎么用、活码怎么生成、会话存档怎么开通、AI智能体怎么用，涵盖产品功能、价格服务与各行业方案常见问题解答。',
    content: `
      <h2>常见问题</h2>
      <p>快速找到你需要的答案，如有其他问题请联系客服。</p>
      <h3>热门问题</h3>
      <ul>
        <li><strong>企业微信活码怎么生成？</strong>：登录有机云SCRM后台 → 进入「企微活码」→ 选择渠道活码/员工活码/群活码 → 设置分流规则 → 保存即可生成二维码，支持智能分流与数据统计。</li>
        <li><strong>会话存档怎么开通？</strong>：需企业微信管理员在企微后台开通「会话内容存档」权限并购买席位，再在有机云SCRM绑定，即可对文字、图片、语音、文件全类型合规存档与敏感词监控。</li>
        <li><strong>AI智能体怎么用？</strong>：在有机云SCRM「AI智能体」中上传企业资料训练知识库，配置多轮对话与意图识别，即可 7×24 小时自动回复客户，复杂问题自动转人工。</li>
        <li><strong>如何开始使用有机云？</strong>：注册账号 → 绑定企微 → 配置功能 → 开始运营，提供 1 对 1 指导。</li>
        <li><strong>支持哪些企业微信版本？</strong>：支持企业微信最新版本及前两个主版本。</li>
        <li><strong>数据安全如何保障？</strong>：数据加密存储、权限管控、合规审计。</li>
        <li><strong>是否支持私有化部署？</strong>：企业版及以上支持私有化部署。</li>
      </ul>
      <p>更多问题请 <a href="https://www.fenyai.com/contact">联系客服</a> 或查看帮助中心。</p>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'FAQPage'
  },
  // 关键词落地页：企微魔方 / 企微SOP / 企微机器人 / 云手机
  {
    path: '/weimo',
    title: '企微魔方_一站式私域营销云_有机云SCRM',
    description: '有机云企微魔方，一站式企业微信私域营销云：活码拓客、超级群发、客户SOP、聚合聊天、会话存档、AI智能体全模块打通，一个后台管完私域全链路。',
    content: `
      <h2>有机云企微魔方是什么</h2>
      <p>企微魔方是有机云旗下的一站式企业微信私域营销云，把活码拓客、超级群发、客户SOP、聚合聊天、会话存档、AI智能体等模块统一装进一个后台，企业无需在多个系统间反复切换，即可跑通"获客—运营—转化"全链路。</p>
      <h3>核心模块清单</h3>
      <ul>
        <li><strong>活码拓客</strong>：渠道活码、员工活码、群活码，全渠道引流获客与智能分流</li>
        <li><strong>超级群发</strong>：突破企微群发限制，按标签分批次精准触达</li>
        <li><strong>客户SOP</strong>：把运营流程沉淀为标准动作，自动定时执行</li>
        <li><strong>聚合聊天</strong>：多账号会话统一收件箱，一个工作台接待全量客户</li>
        <li><strong>会话存档</strong>：文字/图片/语音/文件全类型合规留存与敏感词监控</li>
        <li><strong>AI智能体</strong>：基于大模型的智能客服，7×24小时自动回复</li>
      </ul>
      <h3>与其他 SCRM 的差异</h3>
      <p>多数 SCRM 只解决单点能力，有机云企微魔方强调"模块打通"：活码引流进来的客户自动打标签，标签触发 SOP 自动培育，培育过程中 AI 智能体实时应答，关键节点由聚合聊天人工接管，全程数据回流到统一看板，形成闭环而非孤岛。</p>
      <h3>适用行业</h3>
      <ul>
        <li><strong>泛金融</strong>：需会话合规存档与敏感词监控的行业</li>
        <li><strong>社群电商</strong>：靠活码裂变与超级群发做爆发式增长</li>
        <li><strong>连锁零售</strong>：多门店统一私域运营与会员管理</li>
        <li><strong>在线教培</strong>：课程引流、学员运营、续费提醒自动化</li>
      </ul>
      <h3>开通流程</h3>
      <ul>
        <li><strong>注册绑定</strong>：注册有机云账号并绑定企业微信</li>
        <li><strong>开通模块</strong>：按业务需要开通企微魔方对应模块</li>
        <li><strong>配置上线</strong>：设置活码、标签与 SOP，1 个工作日内可用</li>
      </ul>
      <p>已服务 10 万+ 企业，<a href="https://www.fenyai.com/trial">免费试用有机云企微魔方</a>。</p>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'SoftwareApplication'
  },
  {
    path: '/sop',
    title: '企微SOP_营销自动化SOP_有机云SCRM',
    description: '有机云企微SOP：把客户从引流、培育到转化的全流程沉淀为标准动作，自动定时执行，告别人工重复运营，让私域运营可复制、可度量。',
    content: `
      <h2>企微SOP 是什么</h2>
      <p>企微SOP（Standard Operating Procedure，标准作业流程）是把客户运营动作标准化的能力：当客户进入私域，系统按预设时间轴自动发送欢迎语、推送内容、触发回访，把"谁来跟进、说什么、什么时候说"固化下来，避免依赖个人经验。</p>
      <h3>典型 SOP 场景</h3>
      <ul>
        <li><strong>新客欢迎</strong>：添加好友自动发送品牌介绍与福利，第一时间建立信任</li>
        <li><strong>社群培育</strong>：按入群天数自动推送干货与活动，持续激活沉默用户</li>
        <li><strong>复购唤醒</strong>：到期/沉睡客户自动触发优惠券与专属话术</li>
        <li><strong>流失召回</strong>：长期未互动客户自动进入召回流程</li>
      </ul>
      <h3>企微SOP 与群发的区别</h3>
      <p>群发是"一次性把消息发给一批人"，SOP 是"按客户所处阶段在正确时间发正确内容"。SOP 基于客户标签与行为触发，千人千面；群发更适合统一通知。两者在有机云中可组合使用。</p>
      <h3>配置步骤</h3>
      <ul>
        <li><strong>定义阶段</strong>：梳理客户从引流到转化的关键节点</li>
        <li><strong>编写话术</strong>：为每个节点准备标准话术与素材</li>
        <li><strong>设置触发</strong>：按标签/时间/行为配置自动执行规则</li>
        <li><strong>上线监控</strong>：查看 SOP 执行率与转化，持续迭代</li>
      </ul>
      <h3>行业模板</h3>
      <p>有机云提供金融、零售、电商、教培等行业的 SOP 模板，开箱即用，<a href="https://www.fenyai.com/solutions/sop">查看营销SOP解决方案</a>。</p>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage'
  },
  {
    path: '/robot',
    title: '企微机器人_关键词自动回复_有机云SCRM',
    description: '有机云企微机器人——关键词自动回复、智能问答、7×24小时值守，把重复咨询交给机器人，人工只处理高价值会话，客服效率倍增。',
    content: `
      <h2>有机云企微机器人是什么</h2>
      <p>有机云企微机器人是基于规则与 AI 的企业微信自动应答能力，可识别客户消息中的关键词或意图，自动回复标准答案，并在复杂场景一键转人工，让客服团队从重复劳动中解放出来。</p>
      <h3>核心能力</h3>
      <ul>
        <li><strong>关键词自动回复</strong>：命中关键词即触发对应话术，秒级响应</li>
        <li><strong>意图识别</strong>：结合 AI 智能体理解语义，不只是死板匹配</li>
        <li><strong>7×24小时值守</strong>：夜间与节假日也能接待，不漏掉任何商机</li>
        <li><strong>智能转人工</strong>：高意向或复杂问题自动转接人工并带上全文上下文</li>
        <li><strong>数据看板</strong>：统计命中率、转人工率、常见问题 TOP，反哺知识库</li>
      </ul>
      <h3>适用场景</h3>
      <ul>
        <li><strong>售前咨询</strong>：自动回答价格、功能、开通方式等高频问题</li>
        <li><strong>售后指引</strong>：自动推送操作教程与使用指南</li>
        <li><strong>活动期间</strong>：大促/直播期间承接海量重复咨询</li>
      </ul>
      <p>与 <a href="https://www.fenyai.com/ai-agent">有机云AI智能体</a> 搭配，可进一步升级为多轮对话客服。</p>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage'
  },
  {
    path: '/cloud-phone',
    title: '云手机_群控_企业微信_有机云SCRM',
    description: '有机云云手机——企业微信多账号安全群控，设备隔离防封号，批量运营不掉线，合规管理海量企微号，适配私域规模化运营。',
    content: `
      <h2>有机云云手机是什么</h2>
      <p>有机云云手机是面向企业微信规模化运营的云端设备方案，把多个企微账号运行在隔离的云端手机环境中，实现安全群控与批量管理，既满足多账号运营需求，又通过设备隔离降低关联封号风险。</p>
      <h3>核心能力</h3>
      <ul>
        <li><strong>多账号群控</strong>：一个控制台批量操作多个企微号，统一发圈、群发、养号</li>
        <li><strong>设备隔离</strong>：每个账号独立云端环境，降低设备关联导致的封号</li>
        <li><strong>不掉线</strong>：7×24小时云端在线，告别本地手机断电/断网风险</li>
        <li><strong>合规管理</strong>：操作日志可追溯，配合会话存档满足审计要求</li>
        <li><strong>弹性扩容</strong>：业务增长时按需开通更多云手机实例</li>
      </ul>
      <h3>适用场景</h3>
      <ul>
        <li><strong>私域规模化</strong>：需要同时运营大量企微号的中大型团队</li>
        <li><strong>矩阵运营</strong>：多品牌/多门店账号统一群控</li>
        <li><strong>养号矩阵</strong>：新号培育与日常活跃维护</li>
      </ul>
      <p>云手机与 <a href="https://www.fenyai.com/juhe-chat">有机云聚合聊天</a> 配合，可实现"云端群控 + 统一接待"的完整闭环。</p>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage'
  },
  {
    path: '/trial',
    title: '有机云免费试用_企微私域运营工具',
    description: '免费试用有机云SCRM私域运营工具，体验活码拓客、超级群发、AI智能体等核心功能。',
    content: `
      <h2>免费试用</h2>
      <p>14天全功能免费体验，无需绑定信用卡。</p>
      <h3>试用权益</h3>
      <ul>
        <li><strong>全功能开放</strong>：所有功能均可体验，无限制</li>
        <li><strong>专属顾问</strong>：1对1指导，快速上手</li>
        <li><strong>培训支持</strong>：产品培训、运营指导</li>
        <li><strong>数据保留</strong>：试用数据可无缝迁移到正式版</li>
        <li><strong>无隐藏费用</strong>：试用结束不自动扣费</li>
      </ul>
      <p>已有10万+企业选择有机云，立即开始你的私域运营之旅。</p>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage'
  },
  {
    path: '/about',
    title: '有机云_关于我们_企业微信SCRM私域流量运营工具',
    description: '有机云是企业微信官方服务商，为企业提供基于企业微信的SCRM私域流量运营解决方案，已服务10万+企业。核心产品围绕获客—运营—转化全链路。',
    content: `
      <h2>关于有机云</h2>
      <p>有机云是企业微信官方服务商，为企业提供基于企业微信的 SCRM 私域流量运营解决方案。</p>
      <h3>公司介绍</h3>
      <p>有机云是企业微信官方服务商，为企业提供基于企业微信的 SCRM 私域流量运营解决方案。核心产品围绕"获客—运营—转化"全链路：通过活码拓客与裂变引流高效获客，借助超级群发与 AI 外呼批量触达，依托会话聚合、客户标签统一管理客户资产，并用数据报表持续复盘私域运营效果。</p>
      <p>有机云已服务 <strong>10 万+ 企业</strong>，覆盖金融、电商、零售、教育等多个行业，助力企业实现私域流量的自动化增长和高效转化。</p>
      <h3>核心产品</h3>
      <ul>
        <li><strong>活码拓客 & 裂变引流</strong>：渠道活码、员工活码、群活码，任务宝、红包裂变</li>
        <li><strong>超级群发 & AI 外呼</strong>：突破企微群发限制，AI机器人自动筛选意向客户</li>
        <li><strong>会话聚合 & 客户标签</strong>：多账号会话统一管理，多维度客户标签体系</li>
        <li><strong>数据报表</strong>：客户增长、转化漏斗、员工业绩等全方位数据分析</li>
        <li><strong>AI 智能体</strong>：基于大语言模型的智能客服系统，7×24小时自动响应</li>
        <li><strong>消息通道 API</strong>：为企业微信消息发送提供底层基础设施，支持万级并发</li>
      </ul>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'AboutPage'
  },
];
