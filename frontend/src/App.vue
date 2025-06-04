<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'

const router = useRouter()

// 页面过渡动画钩子
const beforeLeave = (el) => {
  // 保存滚动位置
  el._scrollPosition = window.scrollY
}

const enter = (el) => {
  // 重置滚动位置
  window.scrollTo(0, 0)
}

const afterEnter = (el) => {
  // 如果存在锚点，滚动到锚点位置
  const hash = router.currentRoute.value.hash
  if (hash) {
    const target = document.querySelector(hash)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

// 初始化时处理锚点导航
onMounted(() => {
  const hash = window.location.hash
  if (hash) {
    const target = document.querySelector(hash)
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }
})
</script>

<template>
  <div class="app">
    <TheHeader />
    <router-view v-slot="{ Component }">
      <transition 
        name="page" 
        mode="out-in"
        @before-leave="beforeLeave"
        @enter="enter"
        @after-enter="afterEnter"
      >
        <component :is="Component" />
      </transition>
    </router-view>
    <TheFooter />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 页面过渡动画 */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* 确保页面内容在过渡期间不会闪烁 */
.page-enter-active {
  position: absolute;
  width: 100%;
}

.page-leave-active {
  position: absolute;
  width: 100%;
}

/* 防止页面过渡时的滚动条跳动 */
html {
  scrollbar-gutter: stable;
}
</style>
