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
      { text: '反馈与维护说明', link: '/content/zh-CN/feedback/gray-trial-guide' }
    ]
  }
]

const englishSidebar = [
  {
    text: 'English Web Edition',
    items: [
      { text: 'Overview', link: '/content/en/README' },
      { text: 'Book Roadmap', link: '/content/en/book/README' },
      { text: 'Start Here', link: '/content/en/book/00-start-here' },
      { text: 'Medical Boundaries', link: '/content/en/book/medical-boundaries' },
      { text: 'Symptom Action Guide', link: '/content/en/handbook/playbooks/symptom-action-guide' },
      { text: 'Department Navigation', link: '/content/en/handbook/playbooks/department-navigation-guide' },
      { text: 'Before A Checkup', link: '/content/en/handbook/playbooks/checkup-planning-guide' },
      { text: 'Checkup Markers', link: '/content/en/book/part-1-healthspan-risk-and-markers/checkup-markers' },
      { text: 'Sleep And Recovery', link: '/content/en/book/part-2-body-risk-map/sleep-and-recovery' },
      { text: 'Talking With Parents', link: '/content/en/book/part-3-family-health-os/talking-with-parents' },
      { text: 'Health Product Checklist', link: '/content/en/handbook/templates/health-product-checklist' },
      { text: 'Doctor Visit Checklist', link: '/content/en/handbook/playbooks/doctor-visit-checklist' },
      { text: 'Family Health Card', link: '/content/en/handbook/templates/family-health-card' }
    ]
  },
  {
    text: 'Chinese Source',
    items: [
      { text: 'Chinese Home', link: '/content/zh-CN/book/00-start-here' },
      { text: 'Chinese Handbook', link: '/content/zh-CN/handbook/README' }
    ]
  }
]

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
    'content/zh-CN/updates/**',
    'content/en/book/part-1-healthspan-risk-and-markers/healthspan-and-risk-curve.md',
    'content/en/book/part-2-body-risk-map/metabolic-health.md',
    'content/en/book/part-2-body-risk-map/cardiovascular-event-chain.md',
    'content/en/book/part-2-body-risk-map/brain-and-mental-health.md',
    'content/en/book/part-2-body-risk-map/cancer-and-major-illness.md',
    'content/en/book/part-2-body-risk-map/specialty-care-map.md',
    'content/en/book/part-3-family-health-os/what-to-manage.md',
    'content/en/book/part-3-family-health-os/doctor-visit-preparation.md',
    'content/en/book/part-3-family-health-os/elder-care-basics.md',
    'content/en/book/part-4-health-information-defense/supplement-evidence-traps.md',
    'content/en/book/part-4-health-information-defense/reading-health-news.md',
    'content/en/errata/**',
    'content/en/references/**',
    'content/en/updates/**',
    'content/en/handbook/playbooks/red-flags.md',
    'content/en/handbook/templates/chronic-marker-log.md',
    'content/en/handbook/templates/family-health-record.md'
  ],
  lastUpdated: false,
  ignoreDeadLinks: [
    /^https?:\/\//,
    'LICENSE',
    './LICENSE',
    '/LICENSE'
  ],
  themeConfig: {
    logo: { src: '/logo.svg', alt: '健康有谱' },
    siteTitle: '健康有谱',
    nav: [
      { text: '主书', link: '/content/zh-CN/book/README' },
      { text: '危险信号', link: '/content/zh-CN/handbook/playbooks/red-flags' },
      { text: '手册', link: '/content/zh-CN/handbook/README' }
    ],
    sidebar: {
      '/content/zh-CN/book/': bookSidebar,
      '/content/zh-CN/handbook/': handbookSidebar,
      '/content/zh-CN/feedback/': feedbackSidebar,
      '/content/en/': englishSidebar
    },
    outline: {
      level: [2, 3],
      label: '本页'
    },
    docFooter: {
      prev: '上一章',
      next: '下一章'
    },
    search: {
      provider: 'local',
      options: {
        translations: {
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
})
