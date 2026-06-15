<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()

const lastReviewed = computed(() => {
  const value = frontmatter.value.last_reviewed
  if (!value) return ''

  if (value instanceof Date) return value.toISOString().slice(0, 10)

  return String(value).split('T')[0]
})
</script>

<template>
  <p v-if="lastReviewed" class="last-reviewed">
    最后更新：<time :datetime="lastReviewed">{{ lastReviewed }}</time>
  </p>
</template>
