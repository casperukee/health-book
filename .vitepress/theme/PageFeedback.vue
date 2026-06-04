<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData, useRoute, withBase } from 'vitepress'

const route = useRoute()
const { page } = useData()
const statusText = ref('')
const pixels: HTMLImageElement[] = []

const shouldShow = computed(() => {
  const path = route.path || ''
  return path.includes('/content/zh-CN/') && !path.includes('/feedback/gray-trial-guide')
})

function getSource() {
  if (typeof window === 'undefined') return 'ssr'

  const host = window.location.hostname

  if (host === 'health.mindarae.com') return 'mirror'
  if (host.endsWith('github.io')) return 'github'
  if (host === '127.0.0.1' || host === 'localhost') return 'local'

  return 'other'
}

function setStatus(text: string) {
  statusText.value = text
  window.setTimeout(() => {
    if (statusText.value === text) statusText.value = ''
  }, 2600)
}

function record(action: string) {
  if (typeof window === 'undefined') return

  const url = new URL(withBase('/logo.svg'), window.location.origin)
  url.searchParams.set('hb_feedback', '1')
  url.searchParams.set('action', action)
  url.searchParams.set('page', route.path || window.location.pathname)
  url.searchParams.set('title', page.value.title || document.title || '')
  url.searchParams.set('source', getSource())
  url.searchParams.set('ts', String(Date.now()))

  const img = new Image()
  img.referrerPolicy = 'strict-origin-when-cross-origin'
  img.src = url.toString()
  pixels.push(img)
  if (pixels.length > 8) pixels.shift()
}

function handleSimple(action: string) {
  record(action)
  setStatus('已记录，谢谢。')
}

async function handleShare() {
  record('share')

  if (typeof window === 'undefined') return

  const shareUrl = window.location.href
  const title = page.value.title || document.title || '健康有谱'

  try {
    if (navigator.share) {
      await navigator.share({ title, url: shareUrl })
      setStatus('已打开分享。')
      return
    }

    await navigator.clipboard.writeText(shareUrl)
    setStatus('已复制链接。')
  } catch {
    setStatus('已记录，可手动复制链接。')
  }
}

function handleComment() {
  record('comment')

  if (typeof window === 'undefined') return

  const feedbackUrl = new URL(withBase('/content/zh-CN/feedback/gray-trial-guide.html'), window.location.origin)
  feedbackUrl.searchParams.set('from', route.path || window.location.pathname)
  window.location.href = feedbackUrl.toString()
}
</script>

<template>
  <section v-if="shouldShow" class="page-feedback" aria-labelledby="page-feedback-title">
    <div class="page-feedback-copy">
      <p id="page-feedback-title" class="page-feedback-title">这页有帮到你吗？</p>
      <p class="page-feedback-note">
        点击不需要登录，只做按钮计数，帮助后续优先打磨内容。请不要提交病历、电话、身份证等敏感信息。
      </p>
    </div>
    <div class="page-feedback-actions" aria-label="页面反馈">
      <button type="button" data-feedback-action="useful" @click="handleSimple('useful')">有用</button>
      <button type="button" data-feedback-action="not_useful" @click="handleSimple('not_useful')">没帮上</button>
      <button type="button" data-feedback-action="share" @click="handleShare">转发</button>
      <button type="button" data-feedback-action="comment" @click="handleComment">提意见</button>
    </div>
    <p v-if="statusText" class="page-feedback-status" aria-live="polite">{{ statusText }}</p>
  </section>
</template>
