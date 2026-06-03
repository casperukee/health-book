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
      { text: '专科问题', link: '/content/zh-CN/book/part-2-body-risk-map/specialty-care-map' }
    ]
  },
  {
    text: 'Part 3：家庭健康操作系统',
    items: [
      { text: '家庭健康到底要管理什么', link: '/content/zh-CN/book/part-3-family-health-os/what-to-manage' },
      { text: '就医前如何准备信息', link: '/content/zh-CN/book/part-3-family-health-os/doctor-visit-preparation' },
      { text: '父母沟通', link: '/content/zh-CN/book/part-3-family-health-os/talking-with-parents' },
      { text: '老年健康和照护', link: '/content/zh-CN/book/part-3-family-health-os/elder-care-basics' }
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
      { text: '就医前问题清单', link: '/content/zh-CN/handbook/playbooks/doctor-visit-checklist' },
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
      { text: 'v0.8 灰度试读说明', link: '/content/zh-CN/feedback/gray-trial-guide' }
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
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${siteBase}logo.svg` }]
  ],
  srcExclude: [
    'AGENTS.md',
    'local-notes/**',
    'promo/**',
    'content/zh-CN/updates/**',
    'content/en/**'
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
      { text: '主书目录', link: '/content/zh-CN/book/README' },
      { text: '手册', link: '/content/zh-CN/handbook/README' },
      { text: '灰度试读', link: '/content/zh-CN/feedback/gray-trial-guide' },
      { text: '参考资料', link: '/content/zh-CN/references/README' },
      { text: 'GitHub', link: 'https://github.com/casperukee/health-book' }
    ],
    sidebar: {
      '/content/zh-CN/book/': bookSidebar,
      '/content/zh-CN/handbook/': handbookSidebar,
      '/content/zh-CN/feedback/': feedbackSidebar
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
