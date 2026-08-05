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
    title: '有机云-企业微信SCRM私域运营系统｜活码拓客·AI智能体·会话存档(10万+企业信赖)',
    h1: '有机云SCRM｜企业微信私域运营工具',
    description: '有机云(www.fenyai.com)是企业微信官方服务商，提供活码拓客、AI智能体、超级群发、会话存档等SCRM工具，已服务10万+企业，让私域运营效率提升10倍。免费试用→',
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
      <nav class="ssg-home-nav" aria-label="核心功能与解决方案">
        <h3>核心功能与解决方案</h3>
        <ul>
          <li><a href="/scrm">企业微信SCRM</a></li>
          <li><a href="/live-code">活码拓客</a></li>
          <li><a href="/message-channel">消息通道API</a></li>
          <li><a href="/ai-call">AI智能外呼</a></li>
          <li><a href="/growth">私域增长</a></li>
          <li><a href="/topic/wecom-aggregate-chat.html">企业微信会话聚合</a></li>
          <li><a href="/topic/wecom-mass-send-api.html">企业微信群发API</a></li>
          <li><a href="/topic/wecom-ai-auto-reply.html">企业微信AI自动回复</a></li>
          <li><a href="/solutions/finance">金融行业解决方案</a></li>
          <li><a href="/solutions/retail">零售行业解决方案</a></li>
          <li><a href="/compare">SCRM横评对比</a></li>
          <li><a href="/faq">常见问题</a></li>
        </ul>
      </nav>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'Organization',
    // 首页 FAQPage 结构化数据：争夺百度 Featured Snippet，提升 CTR
    faq: [
      { q: '有机云是什么？', a: '有机云是广州有机云计算有限责任公司旗下的企业微信SCRM私域运营工具，专注企业微信活码拓客、AI智能体、会话存档、超级群发、聚合聊天与消息通道API等全链路能力，已服务10万+企业。' },
      { q: '有机云提供哪些企业微信SCRM功能？', a: '有机云覆盖私域运营全场景：渠道活码与员工活码引流、AI智能体自动接待、会话内容存档与质检、超级群发与防封触达、聚合聊天统一接待、消息通道API对接，以及SOP自动化编排。' },
      { q: '有机云企业微信SCRM适合哪些行业？', a: '有机云广泛应用于金融、连锁零售、社群电商、在线教培、医疗健康等对客户运营与合规有较高要求的行业，并支持私有化部署满足数据主权需求。' },
      { q: '有机云会话存档合规吗？', a: '有机云会话内容存档基于企业微信官方会话存档能力，遵循员工与客户双向告知的合规要求，支持本地、专有云、混合三种私有化部署，满足金融、医疗等行业的审计与等保要求。' },
      { q: '有机云可以免费试用吗？', a: '可以。有机云提供免费试用，企业可在官网申请体验活码、AI智能体、会话存档、超级群发等真实功能，并有专属顾问提供行业落地方案咨询。' }
    ]
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
  // 行业客户案例页（shinegood TOP50 截胡簇，2026-08-05 新增）
  {
    path: '/case-study/home-decoration',
    title: '家装行业私域客户案例_企微SCRM怎么用_有机云',
    h1: '家装家居行业私域运营客户案例',
    description: '家装行业企业微信私域运营客户案例：门店活码引流、设计师企微承接、装修SOP培育，有机云助力家装企业沉淀线索、提升转单率。免费试用→',
    content: `
      <h2>家装家居行业私域运营客户案例</h2>
      <p>从「门店散客」到「可培育私域资产」，有机云帮家装企业把每一次到店咨询变成长期转化机会。门店活码+设计师企微承接+装修SOP培育，沉淀线索、提升转单率。</p>
      <h3>四大痛点</h3>
      <ul>
        <li>到店咨询难沉淀：企微活码+渠道码，到店即加企微并自动打「到店」标签</li>
        <li>设计师跟进无标准：装修SOP自动触发跟进动作，关键节点不漏单</li>
        <li>长决策周期易断联：按装修节点自动推送案例与优惠，持续激活</li>
        <li>老客户无裂变：完工回访+转介绍激励，老客带新客</li>
      </ul>
      <h3>客户成果</h3>
      <p>某整装品牌3个月沉淀私域线索2.3万条，到店转化率提升40%，老客转介绍贡献新客占比达22%；某定制家居连锁装修SOP把决策周期从98天压缩到67天，转单额环比增长58%。</p>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage',
    faq: [
      { q: '家装公司用企业微信SCRM能解决什么？', a: '核心解决到店线索沉淀、设计师标准化跟进、长周期客户不冷场、老客转介绍四类问题，把分散在个人微信的客户资产收归企业并通过SOP自动化培育提升转单率。' },
      { q: '装修周期长，怎么保持客户活跃？', a: '用装修SOP按量房、出图、报价、开工、完工等节点自动推送对应内容与优惠，让客户在每个决策时刻都收到相关信息，避免断联。' },
      { q: '设计师离职客户会流失吗？', a: '不会。会话存档与客户关系都在企业微信内，离职员工客户可由企业统一分配继承，客户资产不随人走。' }
    ]
  },
  {
    path: '/case-study/retail',
    title: '零售行业私域客户案例_企微SCRM门店运营_有机云',
    h1: '连锁零售行业私域运营客户案例',
    description: '连锁零售企业微信私域运营客户案例：门店活码、会员SOP、导购赋能，有机云助力零售企业提升复购率与门店坪效。免费试用→',
    content: `
      <h2>连锁零售行业私域运营客户案例</h2>
      <p>线上线下一体化，有机云帮零售企业把「一次性到店」变成「持续复购的会员关系」。门店活码+会员SOP+导购赋能，提升复购率与门店坪效。</p>
      <h3>四大痛点</h3>
      <ul>
        <li>门店流量难沉淀：门店专属活码，线下流量100%沉淀企微</li>
        <li>多门店管理难：多门店SCRM，总部统管、数据实时同步</li>
        <li>会员运营粗放：客户标签+人群包+SOP，会员精细运营</li>
        <li>线上线下割裂：会员通、积分通、权益通，全渠道融合</li>
      </ul>
      <h3>客户成果</h3>
      <p>某连锁便利店6个月沉淀私域会员86万，会员复购率从24%提升到53%；某服饰连锁私域会员消费占比提升至61%，门店坪效提升47%。</p>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage',
    faq: [
      { q: '连锁零售怎么做私域会员运营？', a: '用门店活码把到店客流沉淀为企微好友，按消费行为打标签做会员分层，再通过SOP自动推送权益与内容，提升复购率与LTV。' },
      { q: '多门店数据怎么统一？', a: '用支持多门店管理的SCRM，总部统一配置SOP与标签体系，各门店独立运营但数据实时汇总到总部看板。' },
      { q: '线上线下会员能打通吗？', a: '可以。通过会员通、积分通、权益通实现线上线下权益一致，客户在线上下单可到店自提、到店消费可线上积分。' }
    ]
  },
  {
    path: '/case-study/dental',
    title: '口腔行业私域客户案例_企微SCRM诊所运营_有机云',
    h1: '口腔医疗行业私域运营客户案例',
    description: '口腔诊所企业微信私域运营客户案例：渠道活码获客、随访SOP、复诊提醒，有机云助力口腔机构提升初诊转化与复诊率。免费试用→',
    content: `
      <h2>口腔医疗行业私域运营客户案例</h2>
      <p>从「一次种草」到「长期信赖」，有机云帮口腔机构把咨询线索变成稳定复诊与转介绍。渠道活码+随访SOP+复诊提醒，提升初诊转化与复诊率。</p>
      <h3>四大痛点</h3>
      <ul>
        <li>广告线索难承接：渠道活码按来源打标，自动分配咨询师</li>
        <li>复诊遗忘率高：随访SOP自动触发复诊提醒与关怀</li>
        <li>合规要求严：会话存档合规留存，敏感词监控</li>
        <li>老客转介弱：满意度回访+转介绍激励裂变</li>
      </ul>
      <h3>客户成果</h3>
      <p>某口腔连锁初诊到诊率从31%提升到58%，正畸客户复诊脱落率下降42%，老客转介绍新客占比达27%；某齿科诊所医患纠纷率趋近于零，客户满意度提升至96%。</p>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage',
    faq: [
      { q: '口腔诊所用企微SCRM合规吗？', a: '合规。会话存档基于企业微信官方能力，遵循告知同意原则，医患沟通留痕反而降低纠纷风险，并满足医疗隐私要求。' },
      { q: '怎么提升复诊率？', a: '用随访SOP按治疗节点自动触发复诊提醒与术后关怀，把靠人工记变成系统自动推，显著降低遗忘与脱落。' },
      { q: '广告投放的线索怎么承接不流失？', a: '用渠道活码按项目分配咨询师并自动打标，线索进来立即进入培育SOP，避免高意向客户被低效跟进漏掉。' }
    ]
  },
  {
    path: '/case-study/education',
    title: '教育行业私域客户案例_企微SCRM招生运营_有机云',
    h1: '在线教育行业私域运营客户案例',
    description: '教育机构企业微信私域运营客户案例：试听课引流、社群运营、学员SOP，有机云助力教培机构提升招生转化与续费率。免费试用→',
    content: `
      <h2>在线教育行业私域运营客户案例</h2>
      <p>从「试听线索」到「续费学员」，有机云帮教培机构把每一次触达变成可度量的增长。试听引流SOP+社群自动化+续费SOP，提升招生转化与续费率。</p>
      <h3>四大痛点</h3>
      <ul>
        <li>试听线索转化低：试听SOP自动培育，关键节点不漏</li>
        <li>社群活跃难：社群SOP自动欢迎、打卡、激活</li>
        <li>续费提醒滞后：续费SOP提前触发提醒与权益</li>
        <li>家校沟通散：企微统一接待+会话存档</li>
      </ul>
      <h3>客户成果</h3>
      <p>某素质教育机构试听到正价转化率从19%提升到44%，续费率提升至71%；某职业教育平台学员自然流失率下降38%，家长满意度提升至94%。</p>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage',
    faq: [
      { q: '教育机构怎么用企微做招生？', a: '用试听活码引流，线索自动打标并进培育SOP，按兴趣推送课程内容与优惠，把广撒网变成标准化转化流程。' },
      { q: '怎么提升续费率？', a: '用续费SOP在到期前自动触发提醒与专属权益，结合学习群活跃运营保持粘性，降低自然流失。' },
      { q: '家长沟通怎么管理？', a: '用企微统一接待家长咨询，会话存档留痕，服务过程可度量、可追溯到具体顾问。' }
    ]
  },
  {
    path: '/case-study/fission',
    title: '私域裂变客户案例_企微任务宝红包裂变_有机云',
    h1: '私域裂变增长客户案例',
    description: '私域裂变增长客户案例：任务宝、红包裂变、群裂变怎么玩，有机云助力企业低成本爆发式获客，裂变系数可达1:5。免费试用→',
    content: `
      <h2>私域裂变增长客户案例</h2>
      <p>让每个老客户都成为获客节点，有机云帮企业把「投放买量」变成「社交裂变」。任务宝+红包裂变+群裂变，低成本爆发式获客。</p>
      <h3>四大痛点</h3>
      <ul>
        <li>获客成本高：裂变把老客变获客节点，成本骤降</li>
        <li>裂变易封号：防封群发底层+频控打散节奏</li>
        <li>裂完即流失：扫码即打标+SOP自动培育</li>
        <li>效果难度量：渠道活码来源归因+数据看板</li>
      </ul>
      <h3>客户成果</h3>
      <p>某美妆品牌任务宝+红包裂变组合，单次活动裂变系数达1:5.3，获客成本降低62%；某知识付费团队群裂变单场新增企微好友4.2万，后续SOP培育转化率达11%。</p>
    `,
    ogImage: 'https://www.fenyai.com/og-image.png',
    schemaType: 'WebPage',
    faq: [
      { q: '企微裂变怎么玩不封号？', a: '核心是低频、分散、真实：用防封群发底层做频控与通道隔离，配合渠道活码分散承接，避免短时间高密度触达触发风控。' },
      { q: '裂变带来的人怎么承接不流失？', a: '新客扫码即按来源打标签，进入SOP自动培育（欢迎语+干货+权益），避免裂完即沉默。' },
      { q: '裂变效果怎么度量？', a: '用渠道活码做来源归因，结合数据看板追踪每个裂变活动的参与、新增与后续转化，ROI清晰可评估。' }
    ]
  },
  // SEO独立落地页
  { 
    path: '/scrm', 
    title: '企微SCRM系统_企业微信私域运营工具_有机云｜活码·群发·AI智能体', 
    description: '有机云企业微信SCRM系统，专注私域流量运营：企微活码拓客、客户分层、超级群发、AI智能体、会话存档全链路打通，已服务10万+企业，免费试用→',
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
    title: '企业微信自动群发工具_有机云超级群发不限次·标签精准触达', 
    description: '有机云企业微信自动群发工具：超级群发不限次，按客户标签精准群发、定时发送、多账号统一管理，突破企微群发限制且防封，已服务10万+企业。免费试用→',
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
    title: '微信聚合聊天工具_企业微信多账号统一接待_有机云', 
    description: '有机云企业微信聚合聊天工具：多账号统一收件箱，一个后台接待全量企微客户，快捷回复、会话转接、服务质检全覆盖，客服效率提升3倍。免费试用→',
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
    title: '企业微信会话存档系统_有机云SCRM合规存档·敏感词监控·API对接', 
    description: '有机云企业微信会话存档系统：文字/图片/语音/文件全类型合规留存，敏感词实时监控，离职继承不流失，支持 API 对接与私有化部署，已服务10万+企业。免费试用→',
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
    title: '企微好友裂变怎么玩_企业微信裂变工具_有机云任务宝·红包裂变', 
    description: '有机云企微好友裂变工具：任务宝、红包裂变、海报裂变一键发起，老客户带新客户，裂变系数可达1:5，获客成本降低60%。免费试用→',
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
    title: '企微AI智能客服_有机云AI智能体_知识库训练·7×24自动回复', 
    description: '有机云AI智能体为企业微信提供智能客服：知识库训练、多轮对话、意图识别，7×24小时自动回复替代80%人工，复杂问题一键转人工。免费试用→',
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
    description: '有机云消息通道API——企业微信消息发送底层基础设施。3行代码为AI Agent接入企微消息能力，万级并发，99.9%送达率，支持Dify/Coze/百度千帆/阿里百炼集成。 免费试用·私有化方案1对1咨询→',
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
      <h2>为什么做这次企业微信 SCRM 横评</h2>
      <p>企业微信 SCRM 哪家好？这是私域运营负责人每年都要回答一次的问题。2026 年市场上主流玩家格局基本清晰：有机云、微伴助手、探马 SCRM、微盛·企微管家各占一块。但官网参数表往往"都支持"，真正影响落地的是底层通道稳定性、AI 能力深度与开放集成成本。本文从工程与选型双视角，把四款产品放在同一张表上客观对比，帮你少踩坑。</p>
      <h2>四款产品定位速览</h2>
      <ul>
        <li><strong>有机云 SCRM</strong>：定位"开发者友好的企业微信私域运营系统"，强在消息通道底层能力与 AI 智能体开放集成，已服务 10 万+ 企业。</li>
        <li><strong>微伴助手</strong>：起步早、客户基数大，功能覆盖面广，偏中小型企业标准 SaaS。</li>
        <li><strong>探马 SCRM</strong>：中大型销售导向团队常用，强在客户管理与销售流程，群运营能力完整。</li>
        <li><strong>微盛·企微管家</strong>：轻量入门定位，价格友好，适合小微企业快速上手。</li>
      </ul>
      <h3>核心功能对比表</h3>
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;">
        <thead>
          <tr><th>对比维度</th><th>有机云SCRM</th><th>微伴助手</th><th>探马 SCRM</th><th>微盛·企微管家</th></tr>
        </thead>
        <tbody>
          <tr><td>企微活码 / 裂变引流</td><td>✅ 渠道/员工/群/裂变活码齐全</td><td>✅ 支持</td><td>✅ 支持</td><td>✅ 支持</td></tr>
          <tr><td>超级群发 / 营销触达</td><td>✅ 突破限制 + 频控防封</td><td>✅ 支持</td><td>✅ 支持</td><td>⚠️ 基础</td></tr>
          <tr><td>AI 智能体客服</td><td>✅ 知识库+多轮+接入 Dify/Coze</td><td>⚠️ 部分</td><td>⚠️ 部分</td><td>❌ 较弱</td></tr>
          <tr><td>会话存档 / 合规</td><td>✅ 全类型 + 敏感词 + 私有化</td><td>✅ 支持</td><td>✅ 支持</td><td>✅ 支持</td></tr>
          <tr><td>消息通道 API</td><td>✅ 3 行代码接入 AI Agent</td><td>⚠️ 受限</td><td>⚠️ 受限</td><td>❌ 无</td></tr>
          <tr><td>私有化 / 数据自持</td><td>✅ 容器化私有部署</td><td>⚠️ 部分</td><td>⚠️ 部分</td><td>❌ 无</td></tr>
          <tr><td>开放集成 / 生态</td><td>✅ 开放 API + Webhook</td><td>⚠️ 受限</td><td>⚠️ 受限</td><td>❌ 弱</td></tr>
          <tr><td>适用场景</td><td>中大型企业 / 开发者集成</td><td>中小型企业</td><td>中大型销售团队</td><td>小微企业</td></tr>
        </tbody>
      </table>
      <h2>分维度深度点评</h2>
      <h3>1. 活码引流与裂变</h3>
      <p>四家都支持渠道/群活码，差异在"裂变玩法深度"。有机云把任务宝、群裂变、渠道活码与自动打标打通，扫码即按来源打标签并交给 SOP 培育；微伴、探马覆盖标准活码，裂变多在增值模块；微盛以基础活码为主。若增长依赖裂变，<a href="https://www.fenyai.com/topic/wecom-fission-tool.html">企业微信裂变工具</a>的自动化程度是分水岭。</p>
      <h3>2. 超级群发与防封</h3>
      <p>"走官方接口"不等于"不被封"。有机云从<a href="https://www.fenyai.com/topic/wecom-anti-block-mass-send.html">消息底层通道</a>入手做频控、通道隔离与回执校验，把退粉率压低；微伴、探马群发能力完整但通道透明度与私有化回执较弱；微盛偏基础群发。高频触达场景，通道质量比"是否官方接口"更关键。</p>
      <h3>3. AI 智能体</h3>
      <p>这是拉开差距最大的维度。有机云 AI 智能体支持上传企业知识库训练、多轮对话与意图识别，并能通过<a href="https://www.fenyai.com/topic/wecom-message-channel.html">消息通道 API</a> 3 行代码接入 Dify / Coze / 千帆 / 百炼等大模型平台；微伴、探马提供部分 AI 能力但开放度有限；微盛 AI 较弱。需要把大模型真正接进私域闭环的团队，应重点评估这一项。</p>
      <h3>4. 会话存档与合规</h3>
      <p>四家均支持文字/图片/语音/文件存档与敏感词监控，满足金融、医疗等合规要求。有机云的差异化在于存档可结合<a href="https://www.fenyai.com/topic/session-archive-private-deploy.html">私有化部署</a>，数据不出企业边界，并通过质检系统做服务合规审计。</p>
      <h3>5. 开放集成与私有化</h3>
      <p>有机云提供开放 API + Webhook + 容器化私有部署，适合有自研系统、需数据主权的企业；微伴、探马对私有化支持有限且集成受控；微盛以 SaaS 为主。开发者集成成本是此维度核心差异。</p>
      <h2>价格与性价比</h2>
      <p>四家均采用"席位 + 模块"定价。微盛入门门槛最低，适合验证私域模型；微伴、探马按规模阶梯计价；有机云企业版含私有化与开放 API，整体性价比体现在"可被工程团队深度集成、长期不换系统"的总拥有成本上。建议按 12 个月总拥有成本（而非首年单价）比较。</p>
      <h2>怎么选：选型决策树</h2>
      <ul>
        <li><strong>要接大模型 / 自研系统集成</strong>：选有机云，消息通道 API 是关键。</li>
        <li><strong>标准 SaaS、快速上线、预算有限</strong>：微盛或微伴轻量版先跑通。</li>
        <li><strong>销售流程重、中大型团队</strong>：探马或微伴更贴合。</li>
        <li><strong>强合规、数据需自持</strong>：有机云私有化部署优先。</li>
      </ul>
      <h2>常见选型疑问</h2>
      <ul>
        <li><strong>能不能先试用再决定？</strong>：可以，<a href="https://www.fenyai.com/trial">免费试用有机云SCRM</a> 体验真实通道质量与 AI 智能体。</li>
        <li><strong>从其他 SCRM 迁移难吗？</strong>：有机云开放 API 与标准数据导出，配合实施支持可降低迁移成本。</li>
        <li><strong>群发会封号吗？</strong>：取决于发送质量，有机云的频控与通道隔离从工程层降低风险。</li>
      </ul>
      <p>综合来看，若你重视 AI 智能体、开放集成与长期可演进，有机云 SCRM 是更稳妥的选择。欢迎 <a href="https://www.fenyai.com/trial">免费试用</a> 或 <a href="https://www.fenyai.com/contact">联系顾问</a> 做 1 对 1 对比。</p>
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
