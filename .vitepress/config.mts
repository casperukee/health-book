import { defineConfig } from 'vitepress'

const siteBase = process.env.VITEPRESS_BASE || '/health-book/'

const bookSidebar = [
  {
    text: '书前：前言与边界',
    items: [
      { text: '写在前面', link: '/content/zh-CN/book/00-start-here' }
    ]
  },
  {
    text: '第一章 身体在说什么：从信号到指标',
    items: [
      { text: '1. 危险信号：先分急缓，不要先搜病名', link: '/content/zh-CN/book/medical-boundaries' },
      { text: '2. 健康寿命：你的身体在替谁倒数', link: '/content/zh-CN/book/part-1-healthspan-risk-and-markers/healthspan-and-risk-curve' },
      { text: '3. 体检指标：不是判决书，而是风险语言', link: '/content/zh-CN/book/part-1-healthspan-risk-and-markers/checkup-markers' }
    ]
  },
  {
    text: '第二章 你最该盯住的几条线',
    items: [
      { text: '1. 代谢与四高：四套有用系统，为什么会失衡', link: '/content/zh-CN/book/part-2-body-risk-map/metabolic-health' },
      { text: '2. 心血管事件链：从血压到心梗的连锁反应', link: '/content/zh-CN/book/part-2-body-risk-map/cardiovascular-event-chain' },
      { text: '3. 共同上游：还没变成病时，先把风险往回拉', link: '/content/zh-CN/book/part-2-body-risk-map/common-upstream' },
      { text: '4. 睡眠与恢复：身体修复的隐形工程', link: '/content/zh-CN/book/part-2-body-risk-map/sleep-and-recovery' },
      { text: '5. 大脑与心理健康：先看安全、功能和支持', link: '/content/zh-CN/book/part-2-body-risk-map/brain-and-mental-health' },
      { text: '6. 癌症与重大疾病：分清阶段，别让恐惧替你决定', link: '/content/zh-CN/book/part-2-body-risk-map/cancer-and-major-illness' },
      { text: '7. 儿童与青少年：身体和心理一起长大', link: '/content/zh-CN/book/part-2-body-risk-map/children-and-adolescent-health' },
      { text: '8. 常见专科问题：提高看病质量，而不是自己当医生', link: '/content/zh-CN/book/part-2-body-risk-map/specialty-care-map' }
    ]
  },
  {
    text: '第三章 变成一家人的事：家庭健康守门人',
    items: [
      { text: '1. 家庭健康到底要管理什么：不是管人，是管事实和边界', link: '/content/zh-CN/book/part-3-family-health-os/what-to-manage' },
      { text: '2. 就医前如何准备信息：把事实带进诊室', link: '/content/zh-CN/book/part-3-family-health-os/doctor-visit-preparation' },
      { text: '3. 如何和父母谈健康：不把关心变成控制', link: '/content/zh-CN/book/part-3-family-health-os/talking-with-parents' },
      { text: '4. 老年健康和照护：守住还能生活的能力', link: '/content/zh-CN/book/part-3-family-health-os/elder-care-basics' }
    ]
  },
  {
    text: '第四章 别被忽悠：健康信息防御系统',
    items: [
      { text: '1. 保健品证据陷阱：试试也没坏处吗', link: '/content/zh-CN/book/part-4-health-information-defense/supplement-evidence-traps' },
      { text: '2. 健康设备、检测项目和抗衰营销：有数字，也不等于值得买', link: '/content/zh-CN/book/part-4-health-information-defense/devices-tests-and-longevity-marketing' },
      { text: '3. 健康新闻、新研究和短视频科普：越想立刻行动，越要慢下来', link: '/content/zh-CN/book/part-4-health-information-defense/reading-health-news' }
    ]
  },
  {
    text: '读完主书以后',
    items: [
      { text: '先别急着记住所有东西', link: '/content/zh-CN/book/after-reading' }
    ]
  }
]

const handbookSidebar = [
  {
    text: '手册与模板',
    items: [
      { text: '手册与模板目录', link: '/content/zh-CN/handbook/README' },
      { text: '操作清单目录', link: '/content/zh-CN/handbook/playbooks/README' },
      { text: '模板目录', link: '/content/zh-CN/handbook/templates/README' },
      { text: '危险信号速查', link: '/content/zh-CN/handbook/playbooks/red-flags' },
      { text: '症状与对应动作速查', link: '/content/zh-CN/handbook/playbooks/symptom-action-guide' },
      { text: '心理健康风险识别与支持', link: '/content/zh-CN/handbook/playbooks/mental-health-check-in' },
      { text: '就医科室与专科导航', link: '/content/zh-CN/handbook/playbooks/department-navigation-guide' },
      { text: '体检项目选择指南', link: '/content/zh-CN/handbook/playbooks/checkup-planning-guide' },
      { text: '常见异常指标速查', link: '/content/zh-CN/handbook/playbooks/common-checkup-markers' },
      { text: '就医前问题清单', link: '/content/zh-CN/handbook/playbooks/doctor-visit-checklist' },
      { text: '家庭健康档案与慢病记录', link: '/content/zh-CN/handbook/templates/family-health-record' },
      { text: '健康产品购买前检查清单', link: '/content/zh-CN/handbook/templates/health-product-checklist' }
    ]
  }
]

const feedbackSidebar = [
  {
    text: '反馈与维护',
    items: [
      { text: '反馈入口', link: '/content/zh-CN/feedback/README' },
      { text: '反馈与维护说明', link: '/content/zh-CN/feedback/gray-trial-guide' }
    ]
  }
]

const referencesSidebar = [
  {
    text: '参考资料',
    items: [
      { text: '参考资料机制', link: '/content/zh-CN/references/README' },
      { text: '证据政策', link: '/content/zh-CN/references/evidence-policy' },
      { text: '权威医学资料入口', link: '/content/zh-CN/references/official-medical-sources' },
      { text: '学习影响与致谢', link: '/content/zh-CN/references/learning-influences' },
      { text: '来源登记', link: '/content/zh-CN/references/source-registry' }
    ]
  }
]

const errataSidebar = [
  {
    text: '勘误与维护',
    items: [
      { text: '勘误、更新与反馈', link: '/content/zh-CN/errata/README' },
      { text: '勘误记录', link: '/content/zh-CN/errata/corrections' },
      { text: '医学事实复查记录', link: '/content/zh-CN/errata/review-log' },
      { text: '来源处理规则', link: '/content/zh-CN/errata/source-policy' }
    ]
  }
]

const updatesSidebar = [
  {
    text: '更新与规划',
    items: [
      { text: '更新与规划目录', link: '/content/zh-CN/updates/README' },
      { text: '路线板与想法停车场', link: '/content/zh-CN/updates/roadmap-and-ideas' },
      { text: '整书写作蓝图', link: '/content/zh-CN/updates/book-blueprint' },
      { text: '主题候选', link: '/content/zh-CN/updates/topic-backlog' },
      { text: '体检工具页验收', link: '/content/zh-CN/updates/checkup-tool-validation' },
      { text: '小行动候选库', link: '/content/zh-CN/updates/small-actions-candidate-bank' },
      { text: '英文版 adaptation 规划', link: '/content/zh-CN/updates/english-edition-plan' }
    ]
  },
  {
    text: '主题 brief',
    items: [
      { text: '家庭病历整理 Agent brief', link: '/content/zh-CN/updates/topic-briefs/family-medical-record-agent' },
      { text: '长期健康底座 brief', link: '/content/zh-CN/updates/topic-briefs/lifestyle-foundation' }
    ]
  },
  {
    text: '写作包',
    items: [
      { text: '写作包目录', link: '/content/zh-CN/updates/writing-packets/README' },
      { text: '写在前面写作包', link: '/content/zh-CN/updates/writing-packets/00-start-here' },
      { text: '医疗边界写作包', link: '/content/zh-CN/updates/writing-packets/medical-boundaries' },
      { text: '健康寿命与风险曲线写作包', link: '/content/zh-CN/updates/writing-packets/healthspan-and-risk-curve' },
      { text: '体检指标写作包', link: '/content/zh-CN/updates/writing-packets/checkup-markers' },
      { text: '代谢健康写作包', link: '/content/zh-CN/updates/writing-packets/metabolic-health' },
      { text: '心血管事件链写作包', link: '/content/zh-CN/updates/writing-packets/cardiovascular-event-chain' },
      { text: '睡眠与恢复写作包', link: '/content/zh-CN/updates/writing-packets/sleep-and-recovery' },
      { text: '大脑与心理健康写作包', link: '/content/zh-CN/updates/writing-packets/brain-and-mental-health' },
      { text: '癌症与重大疾病写作包', link: '/content/zh-CN/updates/writing-packets/cancer-and-major-illness' },
      { text: '专科问题写作包', link: '/content/zh-CN/updates/writing-packets/specialty-care-map' },
      { text: '家庭健康管理写作包', link: '/content/zh-CN/updates/writing-packets/what-to-manage' },
      { text: '就医前准备写作包', link: '/content/zh-CN/updates/writing-packets/doctor-visit-preparation' },
      { text: '和父母谈健康写作包', link: '/content/zh-CN/updates/writing-packets/talking-with-parents' },
      { text: '老年健康和照护写作包', link: '/content/zh-CN/updates/writing-packets/elder-care-basics' },
      { text: '保健品证据陷阱写作包', link: '/content/zh-CN/updates/writing-packets/supplement-evidence-traps' },
      { text: '健康设备与抗衰营销写作包', link: '/content/zh-CN/updates/writing-packets/devices-tests-and-longevity-marketing' },
      { text: '健康新闻写作包', link: '/content/zh-CN/updates/writing-packets/reading-health-news' },
      { text: '危险信号写作包', link: '/content/zh-CN/updates/writing-packets/red-flags' },
      { text: '症状动作指南写作包', link: '/content/zh-CN/updates/writing-packets/symptom-action-guide' },
      { text: '就医前问题清单写作包', link: '/content/zh-CN/updates/writing-packets/doctor-visit-checklist' },
      { text: '家庭健康卡写作包', link: '/content/zh-CN/updates/writing-packets/family-health-card' },
      { text: '家庭健康档案写作包', link: '/content/zh-CN/updates/writing-packets/family-health-record' },
      { text: '慢病指标记录写作包', link: '/content/zh-CN/updates/writing-packets/chronic-marker-log' },
      { text: '健康产品清单写作包', link: '/content/zh-CN/updates/writing-packets/health-product-checklist' }
    ]
  }
]

const chineseHomeSidebar = [
  {
    text: '中文版',
    items: [
      { text: '中文版首页', link: '/content/zh-CN/README' },
      { text: '主书目录', link: '/content/zh-CN/book/README' },
      { text: '手册与模板', link: '/content/zh-CN/handbook/README' },
      { text: '参考资料', link: '/content/zh-CN/references/README' },
      { text: '更新与规划', link: '/content/zh-CN/updates/README' },
      { text: '勘误与反馈', link: '/content/zh-CN/errata/README' },
      { text: '灰度反馈说明', link: '/content/zh-CN/feedback/gray-trial-guide' }
    ]
  }
]

const englishHomeSidebar = [
  {
    text: 'English Web Edition',
    items: [
      { text: 'Overview', link: '/content/en/README' },
      { text: 'Book Contents', link: '/content/en/book/README' },
      { text: 'Handbook', link: '/content/en/handbook/README' },
      { text: 'References', link: '/content/en/references/README' },
      { text: 'Updates', link: '/content/en/updates/README' },
      { text: 'Errata', link: '/content/en/errata/README' },
      { text: 'Trial Reading And Feedback', link: '/content/en/feedback/gray-trial-guide' }
    ]
  }
]

const englishBookSidebar = [
  {
    text: 'Front Matter: Start And Boundaries',
    items: [
      { text: 'Start Here', link: '/content/en/book/00-start-here' }
    ]
  },
  {
    text: 'Chapter 1. What The Body Is Saying: From Signals To Markers',
    items: [
      { text: '1. Warning Signs: Sort Urgency Before Searching Disease Names', link: '/content/en/book/medical-boundaries' },
      { text: '2. Healthspan: Who Is Your Body Counting Down For?', link: '/content/en/book/part-1-healthspan-risk-and-markers/healthspan-and-risk-curve' },
      { text: '3. Checkup Markers: Not A Verdict, But A Risk Language', link: '/content/en/book/part-1-healthspan-risk-and-markers/checkup-markers' }
    ]
  },
  {
    text: 'Chapter 2. The Main Risk Lines To Watch',
    items: [
      { text: '1. Metabolic Health: Why Four Useful Systems Lose Balance', link: '/content/en/book/part-2-body-risk-map/metabolic-health' },
      { text: '2. Cardiovascular Event Chain: Risk Is Often Sudden Only At The End', link: '/content/en/book/part-2-body-risk-map/cardiovascular-event-chain' },
      { text: '3. Common Upstream: Lower The Load Before It Becomes A Diagnosis', link: '/content/en/book/part-2-body-risk-map/common-upstream' },
      { text: "4. Sleep And Recovery: The Body's Repair System", link: '/content/en/book/part-2-body-risk-map/sleep-and-recovery' },
      { text: '5. Brain And Mental Health: Start With Safety, Function, And Support', link: '/content/en/book/part-2-body-risk-map/brain-and-mental-health' },
      { text: '6. Cancer And Major Illness: Separate The Stage Before Fear Decides', link: '/content/en/book/part-2-body-risk-map/cancer-and-major-illness' },
      { text: '7. Children And Adolescents: Body And Mind Grow Together', link: '/content/en/book/part-2-body-risk-map/children-and-adolescent-health' },
      { text: '8. Common Specialty Problems: Improve The Visit, Do Not Become The Doctor', link: '/content/en/book/part-2-body-risk-map/specialty-care-map' }
    ]
  },
  {
    text: 'Chapter 3. When Health Becomes A Family System',
    items: [
      { text: '1. What A Family Health System Actually Manages: Facts And Boundaries, Not People', link: '/content/en/book/part-3-family-health-os/what-to-manage' },
      { text: '2. Preparing For A Doctor Visit: Bring Facts Into The Room', link: '/content/en/book/part-3-family-health-os/doctor-visit-preparation' },
      { text: '3. Talking With Parents About Health: Do Not Turn Care Into Control', link: '/content/en/book/part-3-family-health-os/talking-with-parents' },
      { text: '4. Elder Care Basics: Protect The Ability To Keep Living', link: '/content/en/book/part-3-family-health-os/elder-care-basics' }
    ]
  },
  {
    text: 'Chapter 4. Health Information Defense',
    items: [
      { text: '1. Supplement Evidence Traps: "Trying It" Is Not Always Harmless', link: '/content/en/book/part-4-health-information-defense/supplement-evidence-traps' },
      { text: '2. Health Devices, Tests, And Longevity Marketing: Numbers Do Not Make It Worth Buying', link: '/content/en/book/part-4-health-information-defense/devices-tests-and-longevity-marketing' },
      { text: '3. Health News, New Studies, And Short Videos: Slow Down Before Acting', link: '/content/en/book/part-4-health-information-defense/reading-health-news' }
    ]
  },
  {
    text: 'After The Main Book',
    items: [
      { text: 'Keep A Few Actions', link: '/content/en/book/after-reading' }
    ]
  }
]

const englishHandbookSidebar = [
  {
    text: 'Handbook And Templates',
    items: [
      { text: 'Handbook Overview', link: '/content/en/handbook/README' },
      { text: 'Playbooks Overview', link: '/content/en/handbook/playbooks/README' },
      { text: 'Templates Overview', link: '/content/en/handbook/templates/README' },
      { text: 'Red Flags', link: '/content/en/handbook/playbooks/red-flags' },
      { text: 'Symptom Action Guide', link: '/content/en/handbook/playbooks/symptom-action-guide' },
      { text: 'Mental Health Check-In', link: '/content/en/handbook/playbooks/mental-health-check-in' },
      { text: 'Department Navigation', link: '/content/en/handbook/playbooks/department-navigation-guide' },
      { text: 'Before A Checkup', link: '/content/en/handbook/playbooks/checkup-planning-guide' },
      { text: 'Common Checkup Markers', link: '/content/en/handbook/playbooks/common-checkup-markers' },
      { text: 'Doctor Visit Checklist', link: '/content/en/handbook/playbooks/doctor-visit-checklist' },
      { text: 'Family Health Record', link: '/content/en/handbook/templates/family-health-record' },
      { text: 'Health Product Checklist', link: '/content/en/handbook/templates/health-product-checklist' }
    ]
  }
]

const englishFeedbackSidebar = [
  {
    text: 'Feedback And Maintenance',
    items: [
      { text: 'Feedback Overview', link: '/content/en/feedback/README' },
      { text: 'Trial Reading And Feedback Guide', link: '/content/en/feedback/gray-trial-guide' }
    ]
  }
]

const englishReferencesSidebar = [
  {
    text: 'References',
    items: [
      { text: 'References Overview', link: '/content/en/references/README' },
      { text: 'Official Medical Sources', link: '/content/en/references/official-medical-sources' },
      { text: 'Evidence Policy', link: '/content/en/references/evidence-policy' },
      { text: 'Learning Influences And Acknowledgments', link: '/content/en/references/learning-influences' },
      { text: 'Source Registry', link: '/content/en/references/source-registry' }
    ]
  }
]

const englishUpdatesSidebar = [
  {
    text: 'Updates',
    items: [
      { text: 'Updates Overview', link: '/content/en/updates/README' },
      { text: 'Roadmap And Ideas Parking Lot', link: '/content/en/updates/roadmap-and-ideas' },
      { text: 'Book Blueprint', link: '/content/en/updates/book-blueprint' },
      { text: 'Topic Backlog', link: '/content/en/updates/topic-backlog' },
      { text: 'Checkup Tool Validation', link: '/content/en/updates/checkup-tool-validation' },
      { text: 'Small Actions Candidate Bank', link: '/content/en/updates/small-actions-candidate-bank' },
      { text: 'English Edition Adaptation Plan', link: '/content/en/updates/english-edition-plan' }
    ]
  },
  {
    text: 'Topic Briefs',
    items: [
      { text: 'Family Medical Record Agent Brief', link: '/content/en/updates/topic-briefs/family-medical-record-agent' },
      { text: 'Lifestyle Foundation Brief', link: '/content/en/updates/topic-briefs/lifestyle-foundation' }
    ]
  },
  {
    text: 'Writing Packets',
    items: [
      { text: 'Writing Packets Overview', link: '/content/en/updates/writing-packets/README' },
      { text: 'Start Here Writing Packet', link: '/content/en/updates/writing-packets/00-start-here' },
      { text: 'Medical Boundaries Writing Packet', link: '/content/en/updates/writing-packets/medical-boundaries' },
      { text: 'Healthspan And Risk Curve Writing Packet', link: '/content/en/updates/writing-packets/healthspan-and-risk-curve' },
      { text: 'Checkup Markers Writing Packet', link: '/content/en/updates/writing-packets/checkup-markers' },
      { text: 'Metabolic Health Writing Packet', link: '/content/en/updates/writing-packets/metabolic-health' },
      { text: 'Cardiovascular Event Chain Writing Packet', link: '/content/en/updates/writing-packets/cardiovascular-event-chain' },
      { text: 'Sleep And Recovery Writing Packet', link: '/content/en/updates/writing-packets/sleep-and-recovery' },
      { text: 'Brain And Mental Health Writing Packet', link: '/content/en/updates/writing-packets/brain-and-mental-health' },
      { text: 'Cancer And Major Illness Writing Packet', link: '/content/en/updates/writing-packets/cancer-and-major-illness' },
      { text: 'Specialty Care Map Writing Packet', link: '/content/en/updates/writing-packets/specialty-care-map' },
      { text: 'What To Manage Writing Packet', link: '/content/en/updates/writing-packets/what-to-manage' },
      { text: 'Doctor Visit Preparation Writing Packet', link: '/content/en/updates/writing-packets/doctor-visit-preparation' },
      { text: 'Talking With Parents Writing Packet', link: '/content/en/updates/writing-packets/talking-with-parents' },
      { text: 'Elder Care Basics Writing Packet', link: '/content/en/updates/writing-packets/elder-care-basics' },
      { text: 'Supplement Evidence Traps Writing Packet', link: '/content/en/updates/writing-packets/supplement-evidence-traps' },
      { text: 'Devices And Longevity Marketing Writing Packet', link: '/content/en/updates/writing-packets/devices-tests-and-longevity-marketing' },
      { text: 'Reading Health News Writing Packet', link: '/content/en/updates/writing-packets/reading-health-news' },
      { text: 'Red Flags Writing Packet', link: '/content/en/updates/writing-packets/red-flags' },
      { text: 'Symptom Action Guide Writing Packet', link: '/content/en/updates/writing-packets/symptom-action-guide' },
      { text: 'Doctor Visit Checklist Writing Packet', link: '/content/en/updates/writing-packets/doctor-visit-checklist' },
      { text: 'Family Health Card Writing Packet', link: '/content/en/updates/writing-packets/family-health-card' },
      { text: 'Family Health Record Writing Packet', link: '/content/en/updates/writing-packets/family-health-record' },
      { text: 'Chronic Marker Log Writing Packet', link: '/content/en/updates/writing-packets/chronic-marker-log' },
      { text: 'Health Product Checklist Writing Packet', link: '/content/en/updates/writing-packets/health-product-checklist' }
    ]
  }
]

const englishErrataSidebar = [
  {
    text: 'Errata',
    items: [
      { text: 'Errata Overview', link: '/content/en/errata/README' },
      { text: 'Corrections', link: '/content/en/errata/corrections' },
      { text: 'Medical Fact Review Log', link: '/content/en/errata/review-log' },
      { text: 'Source Handling Policy', link: '/content/en/errata/source-policy' }
    ]
  }
]

function remapSidebarLinks(sidebar: typeof bookSidebar, from: string, to: string) {
  return sidebar.map((group) => ({
    ...group,
    items: group.items.map((item) => ({
      ...item,
      link: item.link.replace(from, to)
    }))
  }))
}

const reviewBookSidebar = remapSidebarLinks(bookSidebar, '/content/zh-CN/', '/content/en-review/zh-CN/')
const reviewHandbookSidebar = remapSidebarLinks(handbookSidebar, '/content/zh-CN/', '/content/en-review/zh-CN/')
const reviewFeedbackSidebar = remapSidebarLinks(feedbackSidebar, '/content/zh-CN/', '/content/en-review/zh-CN/')

const reviewReferencesSidebar = [
  {
    text: '参考资料验收',
    items: [
      { text: '参考资料验收说明', link: '/content/en-review/zh-CN/references/README' },
      { text: 'Official Medical Sources 中文验收页', link: '/content/en-review/zh-CN/references/official-medical-sources' },
      { text: 'Evidence Policy 中文验收页', link: '/content/en-review/zh-CN/references/evidence-policy' },
      { text: 'Learning Influences 中文验收页', link: '/content/en-review/zh-CN/references/learning-influences' },
      { text: 'Source Registry 中文验收页', link: '/content/en-review/zh-CN/references/source-registry' }
    ]
  }
]

const reviewUpdatesSidebar = [
  {
    text: '更新验收',
    items: [
      { text: 'Updates 中文验收页', link: '/content/en-review/zh-CN/updates/README' },
      { text: 'Roadmap And Ideas 中文验收页', link: '/content/en-review/zh-CN/updates/roadmap-and-ideas' },
      { text: 'Book Blueprint 中文验收页', link: '/content/en-review/zh-CN/updates/book-blueprint' },
      { text: 'Topic Backlog 中文验收页', link: '/content/en-review/zh-CN/updates/topic-backlog' },
      { text: 'Checkup Tool Validation 中文验收页', link: '/content/en-review/zh-CN/updates/checkup-tool-validation' },
      { text: 'Small Actions Candidate Bank 中文验收页', link: '/content/en-review/zh-CN/updates/small-actions-candidate-bank' },
      { text: 'English Edition Adaptation Plan 中文验收页', link: '/content/en-review/zh-CN/updates/english-edition-plan' }
    ]
  },
  {
    text: '主题 brief 验收',
    items: [
      { text: 'Family Medical Record Agent Brief 中文验收页', link: '/content/en-review/zh-CN/updates/topic-briefs/family-medical-record-agent' },
      { text: 'Lifestyle Foundation Brief 中文验收页', link: '/content/en-review/zh-CN/updates/topic-briefs/lifestyle-foundation' }
    ]
  },
  {
    text: '写作包验收',
    items: [
      { text: 'Writing Packets 中文验收页', link: '/content/en-review/zh-CN/updates/writing-packets/README' },
      { text: 'Start Here Writing Packet 中文验收页', link: '/content/en-review/zh-CN/updates/writing-packets/00-start-here' },
      { text: 'Medical Boundaries Writing Packet 中文验收页', link: '/content/en-review/zh-CN/updates/writing-packets/medical-boundaries' },
      { text: 'Healthspan Writing Packet 中文验收页', link: '/content/en-review/zh-CN/updates/writing-packets/healthspan-and-risk-curve' },
      { text: 'Checkup Markers Writing Packet 中文验收页', link: '/content/en-review/zh-CN/updates/writing-packets/checkup-markers' },
      { text: 'Metabolic Health Writing Packet 中文验收页', link: '/content/en-review/zh-CN/updates/writing-packets/metabolic-health' },
      { text: 'Cardiovascular Event Chain Writing Packet 中文验收页', link: '/content/en-review/zh-CN/updates/writing-packets/cardiovascular-event-chain' },
      { text: 'Sleep And Recovery Writing Packet 中文验收页', link: '/content/en-review/zh-CN/updates/writing-packets/sleep-and-recovery' },
      { text: 'Brain And Mental Health Writing Packet 中文验收页', link: '/content/en-review/zh-CN/updates/writing-packets/brain-and-mental-health' },
      { text: 'Cancer And Major Illness Writing Packet 中文验收页', link: '/content/en-review/zh-CN/updates/writing-packets/cancer-and-major-illness' },
      { text: 'Specialty Care Map Writing Packet 中文验收页', link: '/content/en-review/zh-CN/updates/writing-packets/specialty-care-map' },
      { text: 'What To Manage Writing Packet 中文验收页', link: '/content/en-review/zh-CN/updates/writing-packets/what-to-manage' },
      { text: 'Doctor Visit Preparation Writing Packet 中文验收页', link: '/content/en-review/zh-CN/updates/writing-packets/doctor-visit-preparation' },
      { text: 'Talking With Parents Writing Packet 中文验收页', link: '/content/en-review/zh-CN/updates/writing-packets/talking-with-parents' },
      { text: 'Elder Care Basics Writing Packet 中文验收页', link: '/content/en-review/zh-CN/updates/writing-packets/elder-care-basics' },
      { text: 'Supplement Evidence Traps Writing Packet 中文验收页', link: '/content/en-review/zh-CN/updates/writing-packets/supplement-evidence-traps' },
      { text: 'Devices And Longevity Marketing Writing Packet 中文验收页', link: '/content/en-review/zh-CN/updates/writing-packets/devices-tests-and-longevity-marketing' },
      { text: 'Reading Health News Writing Packet 中文验收页', link: '/content/en-review/zh-CN/updates/writing-packets/reading-health-news' },
      { text: 'Red Flags Writing Packet 中文验收页', link: '/content/en-review/zh-CN/updates/writing-packets/red-flags' },
      { text: 'Symptom Action Guide Writing Packet 中文验收页', link: '/content/en-review/zh-CN/updates/writing-packets/symptom-action-guide' },
      { text: 'Doctor Visit Checklist Writing Packet 中文验收页', link: '/content/en-review/zh-CN/updates/writing-packets/doctor-visit-checklist' },
      { text: 'Family Health Card Writing Packet 中文验收页', link: '/content/en-review/zh-CN/updates/writing-packets/family-health-card' },
      { text: 'Family Health Record Writing Packet 中文验收页', link: '/content/en-review/zh-CN/updates/writing-packets/family-health-record' },
      { text: 'Chronic Marker Log Writing Packet 中文验收页', link: '/content/en-review/zh-CN/updates/writing-packets/chronic-marker-log' },
      { text: 'Health Product Checklist Writing Packet 中文验收页', link: '/content/en-review/zh-CN/updates/writing-packets/health-product-checklist' }
    ]
  }
]

const reviewErrataSidebar = [
  {
    text: '勘误验收',
    items: [
      { text: 'Errata 中文验收页', link: '/content/en-review/zh-CN/errata/README' },
      { text: 'Corrections 中文验收页', link: '/content/en-review/zh-CN/errata/corrections' },
      { text: 'Medical Fact Review Log 中文验收页', link: '/content/en-review/zh-CN/errata/review-log' },
      { text: 'Source Handling Policy 中文验收页', link: '/content/en-review/zh-CN/errata/source-policy' }
    ]
  }
]

const chineseNav = [
  { text: '首页', link: '/content/zh-CN/README' },
  { text: '主书', link: '/content/zh-CN/book/README' },
  { text: '危险信号', link: '/content/zh-CN/handbook/playbooks/red-flags' },
  { text: '手册', link: '/content/zh-CN/handbook/README' }
]

const englishNav = [
  { text: 'Home', link: '/content/en/README' },
  { text: 'Book', link: '/content/en/book/README' },
  { text: 'Red Flags', link: '/content/en/handbook/playbooks/red-flags' },
  { text: 'Handbook', link: '/content/en/handbook/README' }
]

const reviewNav = [
  { text: '校验首页', link: '/content/en-review/zh-CN/README' },
  { text: '主书验收', link: '/content/en-review/zh-CN/book/README' },
  { text: '危险信号验收', link: '/content/en-review/zh-CN/handbook/playbooks/red-flags' },
  { text: '手册验收', link: '/content/en-review/zh-CN/handbook/README' }
]

const chineseSearchTranslations = {
  button: {
    buttonText: '搜索',
    buttonAriaLabel: '搜索'
  },
  modal: {
    displayDetails: '显示详情',
    resetButtonTitle: '重置搜索',
    backButtonTitle: '关闭搜索',
    noResultsText: '没有结果',
    footer: {
      selectText: '选择',
      selectKeyAriaLabel: '回车',
      navigateText: '切换',
      navigateUpKeyAriaLabel: '上箭头',
      navigateDownKeyAriaLabel: '下箭头',
      closeText: '关闭',
      closeKeyAriaLabel: 'Esc'
    }
  }
}

const englishSearchTranslations = {
  button: {
    buttonText: 'Search',
    buttonAriaLabel: 'Search'
  },
  modal: {
    displayDetails: 'Display detailed list',
    resetButtonTitle: 'Reset search',
    backButtonTitle: 'Close search',
    noResultsText: 'No results for',
    footer: {
      selectText: 'to select',
      selectKeyAriaLabel: 'enter',
      navigateText: 'to navigate',
      navigateUpKeyAriaLabel: 'up arrow',
      navigateDownKeyAriaLabel: 'down arrow',
      closeText: 'to close',
      closeKeyAriaLabel: 'escape'
    }
  }
}

const zhThemeConfig = {
  logo: { src: '/logo.svg', alt: '健康有谱' },
  siteTitle: '健康有谱',
  nav: chineseNav,
  sidebar: {
    '/content/zh-CN/book/': bookSidebar,
    '/content/zh-CN/handbook/': handbookSidebar,
    '/content/zh-CN/feedback/': feedbackSidebar,
    '/content/zh-CN/references/': referencesSidebar,
    '/content/zh-CN/errata/': errataSidebar,
    '/content/zh-CN/updates/': updatesSidebar,
    '/content/zh-CN/': chineseHomeSidebar
  },
  outline: {
    level: [2, 3] as const,
    label: '本页'
  },
  docFooter: {
    prev: '上一章',
    next: '下一章'
  },
  i18nRouting: false,
  darkModeSwitchLabel: '外观',
  sidebarMenuLabel: '菜单',
  returnToTopLabel: '回到顶部',
  langMenuLabel: '切换版本',
  skipToContentLabel: '跳到正文',
  search: {
    provider: 'local',
    options: {
      translations: chineseSearchTranslations
    }
  },
  lastUpdated: {
    text: '最后更新',
    formatOptions: {
      dateStyle: 'medium',
      timeStyle: 'short'
    }
  }
}

const enThemeConfig = {
  logo: { src: '/logo.svg', alt: 'Health Decisions for Families' },
  siteTitle: 'Health Decisions',
  nav: englishNav,
  sidebar: {
    '/content/en/book/': englishBookSidebar,
    '/content/en/handbook/': englishHandbookSidebar,
    '/content/en/feedback/': englishFeedbackSidebar,
    '/content/en/references/': englishReferencesSidebar,
    '/content/en/updates/': englishUpdatesSidebar,
    '/content/en/errata/': englishErrataSidebar,
    '/content/en/': englishHomeSidebar
  },
  outline: {
    level: [2, 3] as const,
    label: 'On This Page'
  },
  docFooter: {
    prev: 'Previous',
    next: 'Next'
  },
  darkModeSwitchLabel: 'Appearance',
  sidebarMenuLabel: 'Menu',
  returnToTopLabel: 'Return to top',
  langMenuLabel: 'Switch edition',
  skipToContentLabel: 'Skip to content',
  search: {
    provider: 'local',
    options: {
      translations: englishSearchTranslations
    }
  },
  lastUpdated: {
    text: 'Last updated',
    formatOptions: {
      dateStyle: 'medium',
      timeStyle: 'short'
    }
  }
}

const reviewThemeConfig = {
  logo: { src: '/logo.svg', alt: '健康有谱英文校验版' },
  siteTitle: '英文校验版',
  nav: reviewNav,
  sidebar: {
    '/content/en-review/zh-CN/book/': reviewBookSidebar,
    '/content/en-review/zh-CN/handbook/': reviewHandbookSidebar,
    '/content/en-review/zh-CN/feedback/': reviewFeedbackSidebar,
    '/content/en-review/zh-CN/references/': reviewReferencesSidebar,
    '/content/en-review/zh-CN/updates/': reviewUpdatesSidebar,
    '/content/en-review/zh-CN/errata/': reviewErrataSidebar,
    '/content/en-review/zh-CN/': [
      {
        text: '英文校验版',
        items: [
          { text: '校验版说明', link: '/content/en-review/zh-CN/README' },
          { text: '主书验收', link: '/content/en-review/zh-CN/book/README' },
          { text: '手册验收', link: '/content/en-review/zh-CN/handbook/README' },
          { text: '参考资料验收', link: '/content/en-review/zh-CN/references/README' },
          { text: '更新验收', link: '/content/en-review/zh-CN/updates/README' },
          { text: '勘误验收', link: '/content/en-review/zh-CN/errata/README' },
          { text: '反馈验收', link: '/content/en-review/zh-CN/feedback/gray-trial-guide' }
        ]
      }
    ]
  },
  outline: {
    level: [2, 3] as const,
    label: '本页'
  },
  docFooter: {
    prev: '上一章',
    next: '下一章'
  },
  darkModeSwitchLabel: '外观',
  sidebarMenuLabel: '菜单',
  returnToTopLabel: '回到顶部',
  langMenuLabel: '切换版本',
  skipToContentLabel: '跳到正文',
  search: {
    provider: 'local',
    options: {
      translations: chineseSearchTranslations
    }
  },
  lastUpdated: {
    text: '最后更新',
    formatOptions: {
      dateStyle: 'medium',
      timeStyle: 'short'
    }
  }
}

export default defineConfig({
  title: '健康有谱',
  description: '给家庭的长期健康读本',
  lang: 'zh-CN',
  base: siteBase,
  cleanUrls: false,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${siteBase}logo.svg` }],
    ['meta', { property: 'og:title', content: 'Health Youpu / 健康有谱' }],
    ['meta', { property: 'og:description', content: 'An open-source health literacy book for families.' }],
    ['meta', { property: 'og:image', content: 'https://casperukee.github.io/health-book/social-preview.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: 'https://casperukee.github.io/health-book/social-preview.png' }]
  ],
  srcExclude: [
    'AGENTS.md',
    'local-notes/**',
    'promo/**',
    'content/zh-CN/updates/topic-briefs/longevity-thought-map.md',
  ],
  lastUpdated: false,
  ignoreDeadLinks: [
    /^https?:\/\//,
    'LICENSE',
    './LICENSE',
    '/LICENSE'
  ],
  themeConfig: zhThemeConfig,
  locales: {
    root: {
      label: '中文版',
      lang: 'zh-CN',
      link: '/content/zh-CN/README',
      title: '健康有谱',
      description: '给家庭的长期健康读本'
    },
    'content/en': {
      label: 'English',
      lang: 'en-US',
      link: '/content/en/README',
      title: 'Health Decisions for Families',
      description: 'A U.S.-first health literacy book for families.',
      themeConfig: enThemeConfig
    },
    'content/en-review/zh-CN': {
      label: '英文校验版',
      lang: 'zh-CN',
      link: '/content/en-review/zh-CN/README',
      title: '健康有谱英文校验版',
      description: '英文 adaptation 的中文验收工作台。',
      themeConfig: reviewThemeConfig
    }
  }
})
