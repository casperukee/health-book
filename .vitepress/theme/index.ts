import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import LastReviewed from './LastReviewed.vue'
import MedicalStatus from './MedicalStatus.vue'
import PageFeedback from './PageFeedback.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => [h(MedicalStatus), h(LastReviewed), h(PageFeedback)]
    })
  }
}
