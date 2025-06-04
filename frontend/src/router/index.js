import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TeamView from '@/views/TeamView.vue'
import ContactView from '@/views/ContactView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home | Pan Pacific Energy Group'
      }
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView,
      meta: {
        title: 'Our Team | Pan Pacific Energy Group'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        title: 'Contact Us | Pan Pacific Energy Group'
      }
    },
    {
      path: '/news/:slug?',
      name: 'news',
      component: () => import('@/views/NewsView.vue'),
      meta: {
        title: 'News | Pan Pacific Energy Group'
      }
    },
    {
      path: '/projects/:id',
      name: 'project-detail',
      component: () => import('@/views/ProjectDetailView.vue'),
      meta: {
        title: 'Project Detail | Pan Pacific Energy Group'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
      meta: {
        title: '404 Not Found | Pan Pacific Energy Group'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80 // 为固定导航栏留出空间
      }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// 全局前置守卫：更新页面标题
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Pan Pacific Energy Group'
  next()
})

export default router 