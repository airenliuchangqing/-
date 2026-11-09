/*
 * AI 应用改进项目作品集数据
 * 新增项目时复制一条记录，保持 id 唯一。页面会自动生成项目卡、流程图和对比轮播。
 * 素材使用 assets/ 下的原始图片、视频或 HTML 页面截图；无改进前截图时，明确标注为空白管理示意。
 */
window.AI_PORTFOLIO_PROJECTS = [
  {
    id: "sales-data-workflow",
    number: "01",
    shortTitle: "授权销售数据",
    theme: { accent: "#3568D4", soft: "#EDF3FF", deep: "#1D3E7A", route: "M4 27 C11 8 19 41 28 22 S41 9 47 22", point: [28, 22] },
    title: "某汽车用品品牌 · 销售数据管理",
    category: "销售运营",
    status: "已交付 · 有量化结果",
    summary: "将多个来源的销售数据接入一条可校验、可追溯、可复核的统计工作流。",
    challenge: "改进前，工作人员需整理 50 家店铺的数据；单次任务约需 8 小时，人工填写、归类和核对较多。",
    approach: "以自动化方式采集业务源数据，经文件名与商品名双通道解析，再按统一品类规则归类。数据使用复合唯一键进行幂等写入，避免重复累加；数据校验后生成详细的数据分析可交互看板，并智能汇报给企业微信中联系人。",
    flow: ["多源自动采集", "解析与品类归类", "复合键幂等落库", "14 项质量校验", "可交互数据分析看板", "智能汇报"],
    standardPractice: [
      { clause: "第6章 · 策划", text: "以单次覆盖 50 家店铺为范围，定义工时、差错和成本目标。" },
      { clause: "第7章 · 支持", text: "明确源数据、字段口径、品类规则、操作权限与过程记录。" },
      { clause: "第8章 · 运行", text: "按自动采集、分阶段处理、异常阻断和人工确认组织工作流。" },
      { clause: "第9章 · 绩效评价", text: "以工时、资金投入成本评价流程效果。" }
    ],
    engineering: [
      { title: "输入控制", text: "自动采集数据、源数据AI接入，保留批次和日期边界；异常文件不进入下游。" },
      { title: "解析归类", text: "以文件名和商品名作为互补线索，通过外置规则，将数据按品类筛分。" },
      { title: "稳定存储", text: "筛分后数据按日期、品类、店铺集中储存；周度/月度/年度窗口均可分别处理。" },
      { title: "质量闸门", text: "结果输出前，数据经AI独立核算；校验失败即中止，不污染后续数据。" },
      { title: "人机协同", text: "生成数据分析看板和报告后，人员可随时检查；AI将消息推送。" }
    ],
    deliverables: ["自动采集与解析流程", "可追溯的结构化明细", "可交互式数据分析看板", "定时汇总及审核分发链路"],
    guardrails: ["不修改数据源", "异常时停止下游处理", "设置质量复验", "定时推送数据分析看板"],
    results: [
      { value: "8h → 3h", label: "单次统计用时", note: "单次覆盖 50 家店铺" },
      { value: "5h", label: "单次节省工时", note: "按用户提供的任务口径" },
      { value: "约 62%", label: "投入工时下降", note: "以单次任务为口径" },
      { value: "> ¥200", label: "单次成本下降", note: "以单次任务为口径" }
    ],
    compare: {
      note: "改进前为原始周报和日汇总图 · 改进后为原 HTML 看板截图",
      before: { title: "逐份收集与人工合并", text: "多来源表格分散，逐项复制、归类、复核。", visual: "spreadsheet", caption: "改进前 · 原始图片", media: { type: "images", items: [ { src: "assets/sales-before-weekly.png", alt: "车仆授权业务数据周报原始图片", label: "原始周报图片" }, { src: "assets/sales-before-daily.jpg", alt: "车仆授权业务日汇总原始图片", label: "原始日汇总图片" } ] } },
      after: { title: "统一归集与复核后交付", text: "数据经过规则处理、校验，再进入看板与报告。", visual: "dashboard", caption: "改进后 · 原 HTML 页面画面", media: { type: "image", src: "assets/sales-after-dashboard.png", alt: "改进后销售数据看板原 HTML 页面截图", sourceLabel: "打开原始 HTML 看板", sourceHref: "assets/sales-dashboard-original.html" } }
    }
  },
  {
    id: "dsr-monitoring",
    number: "02",
    shortTitle: "DSR 体验分监控",
    theme: { accent: "#087F8C", soft: "#E6F6F5", deep: "#14515A", route: "M4 36 H14 V14 H25 V28 H36 V10 H47", point: [36, 10] },
    title: "某汽车用品品牌 · 网店质量监控",
    category: "质量管理",
    status: "监控看板",
    summary: "对电商网店的周期性质量巡查从人工分散核对变成AI自动识别异常、状态跟进与结果复核的管理链路。",
    challenge: "人工巡查需要反复对照网店清单、平台评分和上一周期结果；异常店铺、重点对象与已改正的对象容易混在一起。",
    approach: "AI读取网店监控数据，进行平台、店铺和周期数据分析；将当期监控点与历史进行对比，自动输出监控分析看板，区分持续异常、新增异常和已恢复状态跟进情况。",
    flow: ["自动识别监控对象清单",  "周期差异比对", "异常分层提醒", "人工跟进与复核"],
    standardPractice: [
      { clause: "第4章 · 组织环境", text: "界定网店、平台与统计周期等业务监控范围。" },
      { clause: "第6章 · 策划", text: "明确质量指标阈值、异常变化规则和人工处置边界。" },
      { clause: "第8章 · 运行", text: "连接评分采集、历史对比、分层提醒、跟进和复核。" },
      { clause: "第9章 · 绩效评价", text: "通过异常数、趋势变化和恢复状态观察运行效果。" },
      { clause: "第10章 · 改进", text: "将复核结果反馈到对象清单与监控规则维护中。" }
    ],
    engineering: [
      { title: "对象基线", text: "维护网店名称与平台映射，明确每个周期的应采集范围。" },
      { title: "周期快照", text: "保留当前与历史评分快照，支持追溯变化来源。" },
      { title: "状态识别", text: "以规则区分持续异常、新下降、新纳入和已恢复等情形。" },
      { title: "质量核验", text: "检查遗漏、空字段与状态规则冲突，提示人工复核。" },
      { title: "处置闭环", text: "将异常分层后转为督导事项，复核结果并更新监控状态。" }
    ],
    deliverables: ["周期监控看板", "异常对象清单", "历史变化对照", "数据核验与处置提示"],
    guardrails: ["本页不展示店铺或企业名称"],
    results: [],
    compare: {
      note: "前：板块表格示意 · 后：DSR 原 HTML 页面截图",
      before: { title: "没有统一的周期监控视图", text: "所有监控对象、评分变化和跟进状态储存在表格中。", visual: "blank", caption: "改进前 · 数据台账", media: { type: "image", src: "assets/dsr-001.png" } },
      after: { title: "异常识别到复核闭环", text: "集中查看变化、异常分类和待跟进状态。", visual: "monitor", caption: "改进后 · 原 HTML 页面画面", media: { type: "image", src: "assets/dsr-after-dashboard.png", alt: "改进后 DSR 监控看板原 HTML 页面截图", sourceLabel: "打开原始 HTML 看板", sourceHref: "assets/dsr-dashboard-original.html" } }
    }
  },
  {
    id: "product-compliance-review",
    number: "03",
    shortTitle: "产品合规审查",
    theme: { accent: "#7649C8", soft: "#F2EDFF", deep: "#452D78", route: "M7 10 H39 Q45 10 45 16 V34 Q45 40 39 40 H11 Q5 40 5 34 V16 Q5 10 11 10 Z", point: [39, 16] },
    title: "某汽车用品品牌 · 产品合规审查",
    category: "质量管理",
    status: "审查与整改跟踪",
    summary: "由AI连接到核验结果追踪问题整改、复核和闭环进度。",
    challenge: "合规问题往往分布在不同产品与材料中；如果只记录检查结论，后续责任、整改证据和复核进展难以连续追踪。",
    approach: "将每个审查对象组织单独的任务个体，有AI接入单个检查项记录证据与判定，动态追溯追踪进展，直至闭环",
    flow: ["单个审查任务", "材料与标识核验", "结果分类判定", "问题与措施登记", "整改证据复核", "关闭并归档"],
    standardPractice: [
      { clause: "第4章 · 组织环境", text: "确定产品范围、核查对象和相关业务需求。" },
      { clause: "第6章 · 策划", text: "按问题类型和风险程度安排整改优先级与复核要求。" },
      { clause: "第8章 · 运行", text: "以检查项、证据、整改措施和复核结果组成执行链路。" },
      { clause: "第9章 · 绩效评价", text: "汇总审查数量、问题分类、任务进度与闭环情况。" },
      { clause: "第10章 · 改进", text: "以整改证据和复检结论确认关闭，并更新后续核查安排。" }
    ],
    engineering: [
      { title: "审查范围", text: "明确产品范围、检查依据和证据要求。" },
      { title: "结构化记录", text: "将检查项、结论、问题类型和证据放入同一任务记录。" },
      { title: "整改跟踪", text: "记录措施、责任跟进状态和计划复核信息。" },
      { title: "复核关闭", text: "核对整改证据和复检结论后，再更新任务闭环状态。" },
      { title: "管理视图", text: "从任务清单汇总进度、问题分布和下一轮核查计划。" }
    ],
    deliverables: ["审查进度总览", "问题分类与明细记录", "整改状态追踪", "复核计划与闭环台账"],
    guardrails: ["页面不展示真实产品或供应商名称", "结论保留依据与复核记录", "整改完成需经复核确认"],
    results: [],
    compare: {
      note: "前：板块表格示意 · 后：产品合规原 HTML 页面截图",
      before: { title: "缺少连续的审查跟进视图", text: "检查结论与整改进度之间没有统一的任务入口。", visual: "blank", caption: "改进前 · 数据表格", media: { type: "image", src: "assets/hg-001.png" } },
      after: { title: "问题、整改与复核串成一条线", text: "逐项记录材料核验、整改跟进和复核结果。", visual: "compliance", caption: "改进后 · 原 HTML 页面画面", media: { type: "image", src: "assets/compliance-after-dashboard.png", alt: "改进后产品合规审查原 HTML 页面截图", sourceLabel: "打开原始 HTML 页面", sourceHref: "assets/product-compliance-original.html" } }
    }
  },
  {
    id: "brand-audit-workbench",
    number: "04",
    shortTitle: "审核协作工作台",
    theme: { accent: "#C25532", soft: "#FFF1E9", deep: "#73351E", route: "M5 26 C7 10 30 3 41 15 C53 29 36 44 22 37 C12 32 14 20 24 17", point: [24, 17] },
    title: "某汽车用品品牌 · 供方审核工作台",
    category: "质量管理",
    status: "工作台演示 · 流程示意",
    summary: "利用AI搭建电子化供方审核工作台，应用于现场审查任务，审核记录，审核报告，问题跟进、整改验证与归档。",
    challenge: "后端操作界面可以分配审厂任务，且可多人同时操作，根据过程审核项目打分，上传审核证据，整个审核任务可清晰追溯，适用于供方审核、内部审核等用途",
    approach: "AI审核把每次审核拆解为可跟进的任务与问题记录，围绕证据采集、责任分派、整改验证和复核结果建立阶段并跟进。",
    flow: ["审核计划", "审核记录", "不符合项分类", "审核报告", "整改验证", "资料归档"],
    standardPractice: [
      { clause: "第5章 · 领导作用", text: "在任务中区分执行、整改责任和复核角色。" },
      { clause: "第6章 · 策划", text: "通过审核计划明确范围、检查项、时间和风险关注点。" },
      { clause: "第8章 · 运行", text: "把现场证据、问题跟进、整改验证和归档连接起来。" },
      { clause: "第9章 · 绩效评价", text: "以进行中、待整改、已完成等状态追踪任务进展。" },
      { clause: "第10章 · 改进", text: "依据复核结果关闭问题，并为后续审查保留记录。" }
    ],
    engineering: [
      { title: "任务准备", text: "围绕审核计划组织范围、检查项与记录入口。" },
      { title: "现场留痕", text: "以问题项关联证据、说明和待处理状态。" },
      { title: "跟进协作", text: "将责任人、计划时间和整改措施放入跟进链路，支持多人协作使用。" },
      { title: "验证关闭", text: "复核整改证据后更新状态，形成可回看的闭环记录。" }
    ],
    deliverables: ["审核协作工作台示意", "问题与证据关联结构", "整改验证流程", "复核归档视图"],
    guardrails: ["当前图形为流程示意", "不展示现场照片及第三方身份信息"],
    results: [],
    compare: {
      note: "前：你提供的改善前图片 · 后：优先播放原始审厂工作台视频",
      before: { title: "尚无统一的审厂协作入口", text: "计划、现场问题和整改复核缺少连续的管理视图。", visual: "blank", caption: "改进前 · 原始图片", media: { type: "image", src: "assets/audit-before.png", alt: "审厂改善前原始图片" } },
      after: { title: "从现场记录到复核归档", text: "让每个问题都能关联证据、跟进措施和验证状态。", visual: "audit", caption: "改进后 · 原始视频优先", media: { type: "video", src: "assets/audit-workbench.mp4", poster: "assets/audit-after.png", fallback: "assets/audit-after.png", alt: "审厂工作台改进后原始图片备用画面", sourceLabel: "打开原始审厂工作台视频", sourceHref: "assets/audit-workbench.mp4" } }
    }
  }
];
