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
              :class="{ active: currentPath === item.path }"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </nav>

      <button class="mobile-menu-btn" @click="toggleMobileMenu">
        <i class="fas" :class="isMobileMenuOpen ? 'fa-times' : 'fa-bars'"></i>
      </button>
    </div>

    <!-- Mobile Menu -->
    <nav class="nav-mobile" :class="{ 'nav-mobile-open': isMobileMenuOpen }">
      <ul>
        <li v-for="item in navItems" :key="item.path">
          <router-link 
            :to="item.path"
            :class="{ active: currentPath === item.path }"
            @click="closeMobileMenu"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/#about' },
  { name: 'Services', path: '/#services' },
  { name: 'Projects', path: '/#projects' },
  { name: 'Investment', path: '/#funding' },
  { name: 'Team', path: '/team' },
  { name: 'Contact', path: '/contact' }
]

const currentPath = computed(() => route.path)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
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

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  color: var(--pure-white);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
}

.nav-mobile {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--brand-blue);
  padding: 5rem 2rem 2rem;
  transform: translateX(100%);
  transition: transform 0.3s ease;
}

.nav-mobile-open {
  transform: translateX(0);
}

.nav-mobile ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-mobile li {
  margin-bottom: 1.5rem;
}

.nav-mobile a {
  color: var(--pure-white);
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
  display: block;
  padding: 0.5rem 0;
}

.nav-mobile a.active {
  color: var(--solar-yellow);
}

@media (max-width: 992px) {
  .nav-desktop {
    display: none;
  }

  .mobile-menu-btn {
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
}
</style> 