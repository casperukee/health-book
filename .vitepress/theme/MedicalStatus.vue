<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'

const route = useRoute()
const { frontmatter } = useData()

const lastReviewed = computed(() => {
  const value = frontmatter.value.last_reviewed
  if (!value) return ''

  if (value instanceof Date) return value.toISOString().slice(0, 10)

  return String(value).split('T')[0]
})

const evidenceStatus = computed(() => String(frontmatter.value.evidence_status || ''))
const medicalReviewStatus = computed(() => String(frontmatter.value.medical_review_status || ''))

const shouldShow = computed(() => {
  const path = route.path || ''
  return path.includes('/content/zh-CN/') && evidenceStatus.value === 'needs_periodic_review'
})

const medicalReviewLabel = computed(() => {
  switch (medicalReviewStatus.value) {
    case 'reviewed':
      return '已完成专业审阅'
    case 'not_required':
      return '不单独审阅'
    case 'needs_review':
      return '待专业审阅'
    default:
      return medicalReviewStatus.value || '未标注'
  }
})

const evidenceLabel = computed(() => {
  switch (evidenceStatus.value) {
    case 'needs_periodic_review':
      return '需周期复查'
    case 'stable':
      return '相对稳定'
    default:
      return evidenceStatus.value || '未标注'
  }
})

const nextReviewPlan = computed(() => {
  if (evidenceStatus.value === 'needs_periodic_review') {
    return '3-6 个月内，或指南更新时'
  }

  return '12 个月内，或资料更新时'
})
</script>

<template>
  <section v-if="shouldShow" class="medical-status-card" aria-labelledby="medical-status-title">
    <p id="medical-status-title" class="medical-status-title">医学状态</p>
    <div class="medical-status-grid">
      <div class="medical-status-item">
        <span>最后复查</span>
        <strong v-if="lastReviewed"><time :datetime="lastReviewed">{{ lastReviewed }}</time></strong>
        <strong v-else>未标注</strong>
      </div>
      <div class="medical-status-item">
        <span>医学审阅</span>
        <strong>{{ medicalReviewLabel }}</strong>
      </div>
      <div class="medical-status-item">
        <span>证据状态</span>
        <strong>{{ evidenceLabel }}</strong>
      </div>
      <div class="medical-status-item">
        <span>下次复查</span>
        <strong>{{ nextReviewPlan }}</strong>
      </div>
    </div>
  </section>
</template>
