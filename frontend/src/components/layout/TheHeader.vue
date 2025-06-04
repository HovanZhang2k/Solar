<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
    <div class="container header-container">
      <div class="logo">
        <router-link to="/" class="logo-link">
          <img src="@/assets/images/logo.png" alt="Pan Pacific Energy Logo" class="logo-img">
          <h1>Pan Pacific <span>Energy</span></h1>
        </router-link>
      </div>

      <nav class="nav-desktop">
        <ul>
          <li v-for="item in navItems" :key="item.path">
            <router-link 
              :to="item.path"
              :class="{ active: isNavItemActive(item) }"
              @click.prevent="handleNavClick(item)"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </nav>

      <button 
        class="hamburger-btn" 
        :class="{ 'is-active': isMobileMenuOpen }"
        @click="toggleMobileMenu"
        aria-label="Toggle menu"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </div>

    <nav class="nav-mobile" :class="{ 'nav-mobile-open': isMobileMenuOpen }">
      <div class="nav-mobile-content">
        <ul>
          <li v-for="item in navItems" :key="item.path">
            <router-link 
              :to="item.path"
              :class="{ active: isNavItemActive(item) }"
              @click.prevent="handleNavClick(item)"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeSection = ref('home')

const navItems = [
  { name: 'Home', path: '/', id: 'home' },
  { name: 'About', path: '/#about', id: 'about' },
  { name: 'Services', path: '/#services', id: 'services' },
  { name: 'Projects', path: '/#projects', id: 'projects' },
  { name: 'Investment', path: '/#funding', id: 'funding' },
  { name: 'Team', path: '/team', id: 'team' },
  { name: 'Contact', path: '/contact', id: 'contact' }
]

const currentPath = computed(() => route.path)

// 检查元素是否在视口中
const isElementInViewport = (el) => {
  if (!el) return false
  const rect = el.getBoundingClientRect()
  const windowHeight = window.innerHeight || document.documentElement.clientHeight
  const threshold = windowHeight * 0.2 // 当元素进入视口20%时触发

  return (
    rect.top <= threshold &&
    rect.bottom >= 0
  )
}

// 获取元素相对于视口的位置
const getElementPosition = (el) => {
  if (!el) return Infinity
  const rect = el.getBoundingClientRect()
  return Math.abs(rect.top)
}

// 更新活动部分
const updateActiveSection = () => {
  if (route.path !== '/') {
    // 离开首页时，始终高亮当前路由对应项
    const match = navItems.find(item => item.path === route.path)
    activeSection.value = match ? match.id : ''
    return
  }
  // 首页时根据滚动位置高亮
  const sections = ['home', 'about', 'services', 'projects', 'funding', 'testimonials', 'news']
  let closestSection = 'home'
  let minDistance = Infinity
  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const distance = getElementPosition(element)
      if (distance < minDistance) {
        minDistance = distance
        closestSection = section
      }
    }
  }
  activeSection.value = closestSection
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  if (!window.scrollTimeout) {
    window.scrollTimeout = setTimeout(() => {
      updateActiveSection()
      window.scrollTimeout = null
    }, 100)
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

// 检查导航项是否处于活动状态
const isNavItemActive = (item) => {
  if (route.path !== '/') {
    return currentPath.value === item.path
  }
  return activeSection.value === item.id
}

// 点击导航项时立即高亮
const handleNavClick = (item) => {
  if (item.path.startsWith('/#')) {
    activeSection.value = item.id
    // 等待滚动动画后再更新（防止锚点跳转后高亮丢失）
    setTimeout(() => updateActiveSection(), 500)
  } else {
    activeSection.value = item.id
  }
  closeMobileMenu()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (window.scrollTimeout) {
    clearTimeout(window.scrollTimeout)
  }
})

// 监听路由变化，离开首页时高亮对应项
watch(() => route.path, () => {
  updateActiveSection()
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--brand-blue);
  color: var(--pure-white);
  padding: 0.5rem 0;
  z-index: 1000;
  transition: all 0.3s ease;
}

.header-scrolled {
  padding: 0.3rem 0;
  background: rgba(5, 50, 171, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
}

.logo-img {
  height: 2.5rem;
  width: auto;
  margin-right: 12px;
}

.logo-link {
  text-decoration: none;
  color: var(--pure-white);
  display: flex;
  align-items: center;
}

.logo h1 {
  font-size: 1.4rem;
  color: var(--pure-white);
  margin: 0;
  font-weight: 500;
}

.logo span {
  color: var(--bright-blue);
}

.nav-desktop ul {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-desktop a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 400;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  padding: 0.3rem 0;
  position: relative;
}

.nav-desktop a:hover,
.nav-desktop a.active {
  color: var(--pure-white);
}

.nav-desktop a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background-color: var(--solar-yellow);
  transition: all 0.3s ease;
}

.nav-desktop a:hover::after,
.nav-desktop a.active::after {
  width: 100%;
}

.hamburger-btn {
  display: none;
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  width: 30px;
  height: 24px;
  position: relative;
  z-index: 1001;
}

.hamburger-line {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--pure-white);
  position: absolute;
  left: 0;
  transition: all 0.3s ease;
}

.hamburger-line:nth-child(1) {
  top: 0;
}

.hamburger-line:nth-child(2) {
  top: 50%;
  transform: translateY(-50%);
}

.hamburger-line:nth-child(3) {
  bottom: 0;
}

.hamburger-btn.is-active .hamburger-line:nth-child(1) {
  transform: translateY(11px) rotate(45deg);
}

.hamburger-btn.is-active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.hamburger-btn.is-active .hamburger-line:nth-child(3) {
  transform: translateY(-11px) rotate(-45deg);
}

.nav-mobile {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: rgba(5, 50, 171, 0.98);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transform: translateX(100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-mobile-open {
  transform: translateX(0);
}

.nav-mobile-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
}

.nav-mobile ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}

.nav-mobile li {
  margin: 1.5rem 0;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
}

.nav-mobile-open li {
  opacity: 1;
  transform: translateY(0);
}

.nav-mobile li:nth-child(1) { transition-delay: 0.1s; }
.nav-mobile li:nth-child(2) { transition-delay: 0.2s; }
.nav-mobile li:nth-child(3) { transition-delay: 0.3s; }
.nav-mobile li:nth-child(4) { transition-delay: 0.4s; }
.nav-mobile li:nth-child(5) { transition-delay: 0.5s; }
.nav-mobile li:nth-child(6) { transition-delay: 0.6s; }
.nav-mobile li:nth-child(7) { transition-delay: 0.7s; }

.nav-mobile a {
  color: var(--pure-white);
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
  display: block;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
}

.nav-mobile a:hover,
.nav-mobile a.active {
  color: var(--solar-yellow);
  transform: scale(1.05);
}

@media (max-width: 992px) {
  .nav-desktop {
    display: none;
  }

  .hamburger-btn {
    display: block;
  }

  .nav-mobile {
    display: block;
  }
}

@media (max-width: 576px) {
  .logo-img {
    height: 1.8rem;
  }

  .logo h1 {
    font-size: 1.2rem;
  }

  .nav-mobile a {
    font-size: 1.3rem;
  }
}
</style> 