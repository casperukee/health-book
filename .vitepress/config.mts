import { defineConfig } from 'vitepress'

const siteBase = process.env.VITEPRESS_BASE || '/health-book/'

const bookSidebar = [
  {
    text: '进入方式和边界',
    items: [
      { text: '如何使用这本书', link: '/content/zh-CN/book/00-start-here' },
      { text: '医疗边界与危险信号', link: '/content/zh-CN/book/medical-boundaries' }
    ]
  },
  {
    text: 'Part 1：健康寿命、风险曲线与体检指标',
    items: [
      { text: '健康寿命与风险曲线', link: '/content/zh-CN/book/part-1-healthspan-risk-and-markers/healthspan-and-risk-curve' },
      { text: '体检指标', link: '/content/zh-CN/book/part-1-healthspan-risk-and-markers/checkup-markers' }
    ]
  },
  {
    text: 'Part 2：身体的几条主风险线',
    items: [
      { text: '代谢与四高', link: '/content/zh-CN/book/part-2-body-risk-map/metabolic-health' },
      { text: '心血管事件链', link: '/content/zh-CN/book/part-2-body-risk-map/cardiovascular-event-chain' },
      { text: '睡眠与恢复', link: '/content/zh-CN/book/part-2-body-risk-map/sleep-and-recovery' },
      { text: '大脑与心理健康', link: '/content/zh-CN/book/part-2-body-risk-map/brain-and-mental-health' },
      { text: '癌症与重大疾病', link: '/content/zh-CN/book/part-2-body-risk-map/cancer-and-major-illness' },
      { text: '儿童与青少年健康', link: '/content/zh-CN/book/part-2-body-risk-map/children-and-adolescent-health' },
      { text: '专科问题', link: '/content/zh-CN/book/part-2-body-risk-map/specialty-care-map' }
    ]
  },
  {
    text: 'Part 3：家庭健康操作系统',
    items: [
      { text: '家庭健康到底要管理什么', link: '/content/zh-CN/book/part-3-family-health-os/what-to-manage' },
      { text: '就医前如何准备信息', link: '/content/zh-CN/book/part-3-family-health-os/doctor-visit-preparation' },
      { text: '父母沟通', link: '/content/zh-CN/book/part-3-family-health-os/talking-with-parents' },
      { text: '老年照护：守住生活能力', link: '/content/zh-CN/book/part-3-family-health-os/elder-care-basics' }
    ]
  },
  {
    text: 'Part 4：健康信息防御系统',
    items: [
      { text: '保健品证据陷阱', link: '/content/zh-CN/book/part-4-health-information-defense/supplement-evidence-traps' },
      { text: '设备、检测和抗衰营销', link: '/content/zh-CN/book/part-4-health-information-defense/devices-tests-and-longevity-marketing' },
      { text: '健康新闻和新研究', link: '/content/zh-CN/book/part-4-health-information-defense/reading-health-news' }
    ]
  }
]

const handbookSidebar = [
  {
    text: '手册与模板',
    items: [
      { text: '危险信号速查', link: '/content/zh-CN/handbook/playbooks/red-flags' },
      { text: '症状与对应动作速查', link: '/content/zh-CN/handbook/playbooks/symptom-action-guide' },
      { text: '心理健康风险识别与自我照护', link: '/content/zh-CN/handbook/playbooks/mental-health-check-in' },
      { text: '急诊、门诊和挂号科室怎么选', link: '/content/zh-CN/handbook/playbooks/department-navigation-guide' },
      { text: '体检前：到底该查什么', link: '/content/zh-CN/handbook/playbooks/checkup-planning-guide' },
      { text: '常见异常指标速查', link: '/content/zh-CN/handbook/playbooks/common-checkup-markers' },
      { text: '就医前问题清单', link: '/content/zh-CN/handbook/playbooks/doctor-visit-checklist' },
      { text: '家庭健康卡模板', link: '/content/zh-CN/handbook/templates/family-health-card' },
      { text: '家庭健康档案模板', link: '/content/zh-CN/handbook/templates/family-health-record' },
      { text: '慢病指标记录表', link: '/content/zh-CN/handbook/templates/chronic-marker-log' },
      { text: '健康产品购买前检查清单', link: '/content/zh-CN/handbook/templates/health-product-checklist' }
    ]
  }
]

const feedbackSidebar = [
  {
    text: '试读与反馈',
    items: [
      { text: 'v0.9 灰度试读说明', link: '/content/zh-CN/feedback/gray-trial-guide' }
    ]
  }
]

const englishPreviewSidebar = [
  {
    text: 'English Preview',
    items: [
      { text: 'Overview', link: '/content/en/README' },
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
    text: 'Source Edition',
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
  lastUpdated: true,
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
      { text: '开始阅读', link: '/content/zh-CN/book/00-start-here' },
      { text: '危险信号', link: '/content/zh-CN/handbook/playbooks/red-flags' },
      { text: '主书目录', link: '/content/zh-CN/book/README' },
      { text: '手册', link: '/content/zh-CN/handbook/README' },
      { text: '灰度试读', link: '/content/zh-CN/feedback/gray-trial-guide' },
      { text: '参考资料', link: '/content/zh-CN/references/README' },
      { text: 'English Preview', link: '/content/en/README' },
      { text: 'GitHub', link: 'https://github.com/casperukee/health-book' }
    ],
    sidebar: {
      '/content/zh-CN/book/': bookSidebar,
      '/content/zh-CN/handbook/': handbookSidebar,
      '/content/zh-CN/feedback/': feedbackSidebar,
      '/content/en/': englishPreviewSidebar
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
