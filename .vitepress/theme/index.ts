import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import PageFeedback from './PageFeedback.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(PageFeedback)
    })
  }
}
