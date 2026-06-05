<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useData, useRoute, withBase } from 'vitepress'

const route = useRoute()
const { page } = useData()
const statusText = ref('')
const pixels: HTMLImageElement[] = []
const githubRepoUrl = 'https://github.com/casperukee/health-book'
const githubCloneCommand = 'git clone https://github.com/casperukee/health-book.git'
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

function buildShareText() {
  if (typeof window === 'undefined') return ''

  const title = page.value.title || document.title || '健康有谱'
  const shareUrl = window.location.href

  return [
    `我在看《健康有谱》这本开源家庭健康小册子，这页可能对你有用：${title}`,
    shareUrl,
    '',
    '它不做诊断、不替代医生，主要帮普通家庭分清什么时候记录观察、什么时候联系医生、什么时候不能再等。'
  ].join('\n')
}

async function handleShare() {
  record('share')

  if (typeof window === 'undefined') return

  const shareText = buildShareText()

  const copied = await copyText(shareText)
  setStatus(copied ? '已复制转发文案，可粘贴发送。' : '已记录，可手动复制链接。')
}

function handleComment() {
  record('comment')

  if (typeof window === 'undefined') return

  const feedbackUrl = new URL(withBase('/content/zh-CN/feedback/gray-trial-guide.html'), window.location.origin)
  feedbackUrl.searchParams.set('from', route.path || window.location.pathname)
  window.location.href = feedbackUrl.toString()
}

function handleGithub(action: string) {
  record(action)
}

async function handleCopyClone() {
  record('github_clone')

  if (typeof window === 'undefined') return

  const copied = await copyText(githubCloneCommand)
  setStatus(copied ? '已复制 clone 命令。' : githubCloneCommand)
}

watch(() => route.path, recordPageview, { immediate: true })
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
    <div class="page-feedback-divider" aria-hidden="true"></div>
    <div class="open-source-support">
      <div class="open-source-copy">
        <p class="open-source-title">喜欢这个开源小册子？</p>
        <p class="open-source-note">
          国内镜像方便阅读，GitHub 用来关注更新、Star 支持和 clone 项目。
        </p>
      </div>
      <div class="open-source-actions" aria-label="开源项目支持">
        <a
          :href="githubRepoUrl"
          target="_blank"
          rel="noreferrer"
          data-feedback-action="github_repo"
          @click="handleGithub('github_repo')"
        >GitHub 项目</a>
        <a
          :href="githubRepoUrl"
          target="_blank"
          rel="noreferrer"
          data-feedback-action="github_star"
          data-primary-action="true"
          @click="handleGithub('github_star')"
        >去 Star</a>
        <button type="button" data-feedback-action="github_clone" @click="handleCopyClone">复制 clone</button>
      </div>
    </div>
    <p v-if="statusText" class="page-feedback-status" aria-live="polite">{{ statusText }}</p>
  </section>
</template>
