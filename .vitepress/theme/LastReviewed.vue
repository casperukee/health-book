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

const shouldShow = computed(() => {
  const path = route.path || ''
  return !(path.includes('/content/zh-CN/') && frontmatter.value.evidence_status === 'needs_periodic_review')
})

const label = computed(() => {
  const path = route.path || ''
  if (path.includes('/content/en/')) return 'Last updated: '
  return '最后更新：'
})
</script>

<template>
  <p v-if="shouldShow && lastReviewed" class="last-reviewed">
    {{ label }}<time :datetime="lastReviewed">{{ lastReviewed }}</time>
  </p>
</template>
