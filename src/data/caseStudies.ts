// 行业客户案例数据（shinegood TOP50 截胡簇，2026-08-05 新增）
// path 与 scripts/ssg-routes.js 中 case-study/* 对应，App.tsx 路由注册 /case-study/:slug
export interface CaseStudy {
  slug: string;
  industry: string;
  title: string;
  description: string;
  keywords: string;
  h1: string;
  subtitle: string;
  // 行业痛点
  painPoints: { title: string; desc: string; solution: string }[];
  // 有机云方案
  solutions: { icon: string; title: string; desc: string; highlights: string[] }[];
  // 客户案例
  cases: { company: string; industry: string; result: string; image: string }[];
  // FAQ
  faq: { q: string; a: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'home-decoration',
    industry: '家装家居',
    title: '家装行业私域客户案例_企微SCRM怎么用_有机云',
    description: '家装行业企业微信私域运营客户案例：门店活码引流、设计师企微承接、装修SOP培育，有机云助力家装企业沉淀线索、提升转单率。免费试用→',
    keywords: '家装私域,家装企微,装修公司SCRM,家装客户案例,门店活码',
    h1: '家装家居行业私域运营客户案例',
    subtitle: '从「门店散客」到「可培育私域资产」，有机云帮家装企业把每一次到店咨询变成长期转化机会',
    painPoints: [
      { title: '到店咨询难沉淀', desc: '客户到店看方案、加微信后易流失，销售离职带走客户', solution: '企微活码+渠道码，到店即加企微并自动打「到店」标签' },
      { title: '设计师跟进无标准', desc: '每个设计师话术不一，高意向客户被低效跟进漏掉', solution: '装修SOP自动触发跟进动作，关键节点不漏单' },
      { title: '长决策周期易断联', desc: '家装决策周期长，3-6个月后客户已忘记品牌', solution: '按装修节点自动推送案例与优惠，持续激活' },
      { title: '老客户无裂变', desc: '装修完的客户是最好口碑源，却没被激活转介绍', solution: '完工回访+转介绍激励，老客带新客' },
    ],
    solutions: [
      { icon: 'Store', title: '门店活码获客', desc: '为每个门店、每场活动生成专属活码，客户扫码自动添加门店顾问并打标签，到店流量100%沉淀私域。', highlights: ['门店专属码', '自动打标', '业绩归属'] },
      { icon: 'Users', title: '设计师企微承接', desc: '设计师用企微统一接待，会话存档合规留存，客户资产留在企业而非个人微信，离职可继承。', highlights: ['会话存档', '离职继承', '客户资产'] },
      { icon: 'TrendingUp', title: '装修SOP培育', desc: '按「量房→出图→报价→开工→完工」节点自动推送内容与优惠，长周期不冷场。', highlights: ['节点触发', '自动培育', '转单提升'] },
      { icon: 'Gift', title: '老客转介绍', desc: '完工后自动发起转介绍任务，老客户推荐新客得权益，口碑裂变低成本获客。', highlights: ['转介绍', '任务裂变', '口碑获客'] },
    ],
    cases: [
      { company: '某整装品牌（华东）', industry: '全屋整装', result: '门店活码+设计师企微承接，3个月沉淀私域线索2.3万条，到店转化率提升40%，设计师人均效单量提升35%，老客转介绍贡献新客占比达22%。', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80' },
      { company: '某定制家居连锁', industry: '定制家具', result: '装修SOP+会话存档，把平均决策周期从98天压缩到67天，关键节点触达率从51%提升到93%，季度转单额环比增长58%。', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80' },
    ],
    faq: [
      { q: '家装公司用企业微信SCRM能解决什么？', a: '核心解决「到店线索沉淀、设计师标准化跟进、长周期客户不冷场、老客转介绍」四类问题，把分散在个人微信的客户资产收归企业，并通过SOP自动化培育提升转单率。' },
      { q: '装修周期长，怎么保持客户活跃？', a: '用装修SOP按量房、出图、报价、开工、完工等节点自动推送对应内容与优惠，让客户在每个决策时刻都收到相关信息，避免断联。' },
      { q: '设计师离职客户会流失吗？', a: '不会。会话存档与客户关系都在企业微信内，离职员工客户可由企业统一分配继承，客户资产不随人走。' },
    ],
  },
  {
    slug: 'retail',
    industry: '连锁零售',
    title: '零售行业私域客户案例_企微SCRM门店运营_有机云',
    description: '连锁零售企业微信私域运营客户案例：门店活码、会员SOP、导购赋能，有机云助力零售企业提升复购率与门店坪效。免费试用→',
    keywords: '零售私域,连锁门店SCRM,会员运营,零售客户案例,导购企微',
    h1: '连锁零售行业私域运营客户案例',
    subtitle: '线上线下一体化，有机云帮零售企业把「一次性到店」变成「持续复购的会员关系」',
    painPoints: [
      { title: '门店流量难沉淀', desc: '线下客流大但难沉淀私域，客户流失严重', solution: '门店专属活码，线下流量100%沉淀企微' },
      { title: '多门店管理难', desc: '门店多、数据散，总部难统一运营', solution: '多门店SCRM，总部统管、数据实时同步' },
      { title: '会员运营粗放', desc: '会员数据分散，缺乏精细运营，复购低', solution: '客户标签+人群包+SOP，会员精细运营' },
      { title: '线上线下割裂', desc: '商城与门店数据不通，体验不一致', solution: '会员通、积分通、权益通，全渠道融合' },
    ],
    solutions: [
      { icon: 'Store', title: '门店活码获客', desc: '为每个门店生成专属活码，放置于海报、展架、收银台，顾客扫码自动添加门店导购。', highlights: ['门店专属码', '自动分配', '数据统计'] },
      { icon: 'Users', title: '多门店管理', desc: '总部统一管理所有门店，实时查看各店运营数据，支持分级权限与数据隔离。', highlights: ['总部管理', '分级权限', '实时同步'] },
      { icon: 'TrendingUp', title: '会员精细化运营', desc: '基于标签与消费行为做会员分层，SOP自动触发营销，提升复购与LTV。', highlights: ['客户标签', '消费分析', '复购提升'] },
      { icon: 'ShoppingCart', title: '全渠道融合', desc: '打通线上线下数据，会员通、积分通、权益通，体验无缝衔接。', highlights: ['会员通', '积分通', '权益通'] },
    ],
    cases: [
      { company: '某连锁便利店（华南）', industry: '连锁便利店', result: '门店活码+会员SOP，6个月沉淀私域会员86万，会员复购率从24%提升到53%，到店核销券使用率提升2.1倍。', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80' },
      { company: '某服饰连锁', industry: '服饰零售', result: '多门店统管+导购赋能，私域会员消费占比提升至61%，门店坪效提升47%，导购人均业绩提升33%。', image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&q=80' },
    ],
    faq: [
      { q: '连锁零售怎么做私域会员运营？', a: '用门店活码把到店客流沉淀为企微好友，按消费行为打标签做会员分层，再通过SOP自动推送权益与内容，提升复购率与LTV。' },
      { q: '多门店数据怎么统一？', a: '用支持多门店管理的SCRM，总部统一配置SOP与标签体系，各门店独立运营但数据实时汇总到总部看板。' },
      { q: '线上线下会员能打通吗？', a: '可以。通过会员通、积分通、权益通实现线上线下权益一致，客户在线上下单可到店自提、到店消费可线上积分。' },
    ],
  },
  {
    slug: 'dental',
    industry: '口腔医疗',
    title: '口腔行业私域客户案例_企微SCRM诊所运营_有机云',
    description: '口腔诊所企业微信私域运营客户案例：渠道活码获客、随访SOP、复诊提醒，有机云助力口腔机构提升初诊转化与复诊率。免费试用→',
    keywords: '口腔私域,牙科SCRM,诊所企微,口腔客户案例,复诊提醒',
    h1: '口腔医疗行业私域运营客户案例',
    subtitle: '从「一次种草」到「长期信赖」，有机云帮口腔机构把咨询线索变成稳定复诊与转介绍',
    painPoints: [
      { title: '广告线索难承接', desc: '投放来的咨询线索加微信后跟进混乱，高意向流失', solution: '渠道活码按来源打标，自动分配咨询师' },
      { title: '复诊遗忘率高', desc: '种植牙/正畸周期长，客户易忘记复诊', solution: '随访SOP自动触发复诊提醒与关怀' },
      { title: '合规要求严', desc: '医患沟通需留痕，避免纠纷', solution: '会话存档合规留存，敏感词监控' },
      { title: '老客转介弱', desc: '满意客户未激活转介绍', solution: '满意度回访+转介绍激励裂变' },
    ],
    solutions: [
      { icon: 'Activity', title: '渠道活码获客', desc: '为种牙、正畸、儿牙等不同项目生成专属活码，线索按项目打标并分配给对应咨询师。', highlights: ['项目专属码', '自动分配', '来源归因'] },
      { icon: 'CalendarClock', title: '随访SOP', desc: '按治疗节点自动推送复诊提醒、术后关怀与口腔护理知识，降低遗忘与脱落。', highlights: ['节点触发', '复诊提醒', '脱落降低'] },
      { icon: 'ShieldCheck', title: '会话合规存档', desc: '医患沟通合规留存，敏感词实时监控，满足医疗隐私与纠纷取证要求。', highlights: ['合规留存', '敏感词', '纠纷取证'] },
      { icon: 'Gift', title: '老客转介绍', desc: '满意客户自动进入转介绍流程，推荐亲友得洁牙/检查权益，口碑裂变获客。', highlights: ['转介绍', '任务裂变', '口碑获客'] },
    ],
    cases: [
      { company: '某口腔连锁（华中）', industry: '口腔连锁', result: '渠道活码+随访SOP，初诊到诊率从31%提升到58%，正畸客户复诊脱落率下降42%，老客转介绍新客占比达27%。', image: 'https://images.unsplash.com/photo-1606811849640-81c41f1a4197?w=600&q=80' },
      { company: '某齿科诊所', industry: '专科齿科', result: '会话存档+随访SOP，医患纠纷率趋近于零，客户满意度提升至96%，季度复诊额环比增长49%。', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80' },
    ],
    faq: [
      { q: '口腔诊所用企微SCRM合规吗？', a: '合规。会话存档基于企业微信官方能力，遵循告知同意原则，医患沟通留痕反而降低纠纷风险，并满足医疗隐私要求。' },
      { q: '怎么提升复诊率？', a: '用随访SOP按治疗节点自动触发复诊提醒与术后关怀，把「靠人工记」变成「系统自动推」，显著降低遗忘与脱落。' },
      { q: '广告投放的线索怎么承接不流失？', a: '用渠道活码按项目分配咨询师并自动打标，线索进来立即进入培育SOP，避免高意向客户被低效跟进漏掉。' },
    ],
  },
  {
    slug: 'education',
    industry: '在线教育',
    title: '教育行业私域客户案例_企微SCRM招生运营_有机云',
    description: '教育机构企业微信私域运营客户案例：试听课引流、社群运营、学员SOP，有机云助力教培机构提升招生转化与续费率。免费试用→',
    keywords: '教育私域,教培SCRM,招生企微,教育客户案例,学员运营',
    h1: '在线教育行业私域运营客户案例',
    subtitle: '从「试听线索」到「续费学员」，有机云帮教培机构把每一次触达变成可度量的增长',
    painPoints: [
      { title: '试听线索转化低', desc: '试听课来了但跟进无标准，转化靠运气', solution: '试听SOP自动培育，关键节点不漏' },
      { title: '社群活跃难', desc: '学习群建完即死，活跃度低', solution: '社群SOP自动欢迎、打卡、激活' },
      { title: '续费提醒滞后', desc: '到期前没提醒，学员自然流失', solution: '续费SOP提前触发提醒与权益' },
      { title: '家校沟通散', desc: '家长沟通分散在个人微信，难管理', solution: '企微统一接待+会话存档' },
    ],
    solutions: [
      { icon: 'GraduationCap', title: '试听引流SOP', desc: '试听课线索自动打标并进培育流程，按兴趣推送内容与优惠，提升试听到正价转化。', highlights: ['自动打标', '培育SOP', '转化提升'] },
      { icon: 'MessageSquare', title: '社群自动化', desc: '学习群自动欢迎、打卡提醒、干货推送，保持社群活跃与粘性。', highlights: ['自动欢迎', '打卡激活', '社群粘性'] },
      { icon: 'CalendarClock', title: '续费SOP', desc: '到期前自动触发续费提醒与专属权益，降低自然流失。', highlights: ['提前提醒', '续费权益', '流失降低'] },
      { icon: 'Users', title: '家校统一接待', desc: '家长咨询由企微统一接待，会话存档留痕，服务可度量可追溯。', highlights: ['统一接待', '会话存档', '服务可追溯'] },
    ],
    cases: [
      { company: '某素质教育机构', industry: '素质教育', result: '试听SOP+社群自动化，试听到正价转化率从19%提升到44%，学习群月活提升2.3倍，续费率提升至71%。', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80' },
      { company: '某职业教育平台', industry: '职业培训', result: '续费SOP+家校统一接待，学员自然流失率下降38%，家长满意度提升至94%，季度续费额环比增长53%。', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80' },
    ],
    faq: [
      { q: '教育机构怎么用企微做招生？', a: '用试听活码引流，线索自动打标并进培育SOP，按兴趣推送课程内容与优惠，把「广撒网」变成标准化转化流程。' },
      { q: '怎么提升续费率？', a: '用续费SOP在到期前自动触发提醒与专属权益，结合学习群活跃运营保持粘性，降低自然流失。' },
      { q: '家长沟通怎么管理？', a: '用企微统一接待家长咨询，会话存档留痕，服务过程可度量、可追溯到具体顾问。' },
    ],
  },
  {
    slug: 'fission',
    industry: '裂变增长',
    title: '私域裂变客户案例_企微任务宝红包裂变_有机云',
    description: '私域裂变增长客户案例：任务宝、红包裂变、群裂变怎么玩，有机云助力企业低成本爆发式获客，裂变系数可达1:5。免费试用→',
    keywords: '私域裂变,企微裂变,任务宝,红包裂变,裂变客户案例',
    h1: '私域裂变增长客户案例',
    subtitle: '让每个老客户都成为获客节点，有机云帮企业把「投放买量」变成「社交裂变」',
    painPoints: [
      { title: '获客成本高', desc: '纯投放买量成本高、且一次性', solution: '裂变把老客变获客节点，成本骤降' },
      { title: '裂变易封号', desc: '高频触达易触发企微风控', solution: '防封群发底层+频控打散节奏' },
      { title: '裂完即流失', desc: '新客进来没承接，很快沉默', solution: '扫码即打标+SOP自动培育' },
      { title: '效果难度量', desc: '裂变带来多少客户说不清', solution: '渠道活码来源归因+数据看板' },
    ],
    solutions: [
      { icon: 'Gift', title: '任务宝裂变', desc: '设置分享任务，老客邀请N人得权益，多级裂变传播，适合中高客单。', highlights: ['邀请任务', '多级裂变', '权益激励'] },
      { icon: 'Coins', title: '红包裂变', desc: '分享得红包，双方获益，刺激主动传播，适合低门槛内容。', highlights: ['双向红包', '主动分享', '高频传播'] },
      { icon: 'Users', title: '群裂变', desc: '进群领资料再扩散，适合资料包、课程类引流。', highlights: ['进群领资料', '自动扩散', '社群承接'] },
      { icon: 'ShieldCheck', title: '防封保障', desc: '基于防封群发底层做频控与通道隔离，把裂变风控压到最低。', highlights: ['频控', '通道隔离', '防封'] },
    ],
    cases: [
      { company: '某美妆品牌', industry: '美妆个护', result: '任务宝+红包裂变组合，单次活动裂变系数达1:5.3，获客成本降低62%，新客7日留存提升至48%。', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80' },
      { company: '某知识付费团队', industry: '知识付费', result: '群裂变+渠道活码归因，单场活动新增企微好友4.2万，来源ROI清晰，后续SOP培育转化率达11%。', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80' },
    ],
    faq: [
      { q: '企微裂变怎么玩不封号？', a: '核心是低频、分散、真实：用防封群发底层做频控与通道隔离，配合渠道活码分散承接，避免短时间高密度触达触发风控。' },
      { q: '裂变带来的人怎么承接不流失？', a: '新客扫码即按来源打标签，进入SOP自动培育（欢迎语+干货+权益），避免「裂完即沉默」。' },
      { q: '裂变效果怎么度量？', a: '用渠道活码做来源归因，结合数据看板追踪每个裂变活动的参与、新增与后续转化，ROI清晰可评估。' },
    ],
  },
];

export const caseStudyBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);
