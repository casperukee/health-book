<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useData, useRoute, withBase } from 'vitepress'

const route = useRoute()
const { page } = useData()
const statusText = ref('')
const pixels: HTMLImageElement[] = []
let lastPageviewPath = ''

const shouldShow = computed(() => {
  const path = route.path || ''
  return path.includes('/content/zh-CN/') && !path.includes('/feedback/gray-trial-guide')
})

const shouldRecordPageview = computed(() => {
  const path = route.path || ''
  return path.includes('/content/zh-CN/') || path.includes('/content/en/')
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
  if (pixels.length > 16) pixels.shift()
}

function recordPageview() {
  if (typeof window === 'undefined' || !shouldRecordPageview.value) return

  window.setTimeout(() => {
    const currentPath = route.path || window.location.pathname
    if (!currentPath || currentPath === lastPageviewPath) return

    lastPageviewPath = currentPath
    record('pageview')
  }, 0)
}

function handleSimple(action: string) {
  record(action)
  setStatus('已记录，谢谢。')
}

async function copyText(text: string) {
  if (typeof window === 'undefined') return false

  if (navigator.clipboard?.writeText && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      // Fall through to the textarea fallback below.
    }
  }

  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.top = '0'
  textarea.style.left = '-9999px'
  textarea.style.opacity = '0'

  document.body.appendChild(textarea)
  textarea.focus()
  textarea.select()
  textarea.setSelectionRange(0, textarea.value.length)

  try {
    return document.execCommand('copy')
  } catch {
    return false
  } finally {
    document.body.removeChild(textarea)
  }
}

function buildSharePayload() {
  if (typeof window === 'undefined') return { title: '健康有谱', text: '', url: '' }

  const title = page.value.title || document.title || '健康有谱'
  const url = window.location.href
  const text = '《健康有谱》是一本文明一点的家庭健康判断小册子：先分急缓，整理事实，准备就医，不替代医生。'

  return { title, text, url }
}

async function handleShare() {
  record('share')

  if (typeof window === 'undefined') return

  const payload = buildSharePayload()

  if (navigator.share && window.isSecureContext) {
    try {
      await navigator.share(payload)
      setStatus('已打开系统分享。')
      return
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        setStatus('已取消分享。')
        return
      }
    }
  }

  const copied = await copyText(`${payload.text}\n${payload.title}\n${payload.url}`)
  setStatus(copied ? '已复制链接。' : '已记录，可手动复制链接。')
}

function handleComment() {
  record('comment')

  if (typeof window === 'undefined') return

  const feedbackUrl = new URL(withBase('/content/zh-CN/feedback/gray-trial-guide.html'), window.location.origin)
  feedbackUrl.searchParams.set('from', route.path || window.location.pathname)
  window.location.href = feedbackUrl.toString()
}

watch(() => route.path, recordPageview, { immediate: true })
</script>

<template>
  <section v-if="shouldShow" class="page-feedback" aria-labelledby="page-feedback-title">
    <div class="page-feedback-copy">
      <p id="page-feedback-title" class="page-feedback-title">这页有帮到你吗？</p>
      <p class="page-feedback-note">
        不提交病历等敏感信息。
      </p>
    </div>
    <div class="page-feedback-actions" aria-label="页面反馈和分享">
      <button type="button" data-feedback-action="useful" aria-label="有用" title="有用" @click="handleSimple('useful')">
        <span aria-hidden="true">✓</span>
      </button>
      <button type="button" data-feedback-action="not_useful" aria-label="没帮上" title="没帮上" @click="handleSimple('not_useful')">
        <span aria-hidden="true">×</span>
      </button>
      <button type="button" data-feedback-action="share" aria-label="转发" title="转发" @click="handleShare">
        <span aria-hidden="true">↗</span>
      </button>
      <button type="button" data-feedback-action="comment" aria-label="提意见" title="提意见" @click="handleComment">
        <span aria-hidden="true">✎</span>
      </button>
    </div>
    <p v-if="statusText" class="page-feedback-status" aria-live="polite">{{ statusText }}</p>
  </section>
</template>
