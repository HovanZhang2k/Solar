<template>
  <section id="news" class="section-padding">
    <div class="container">
      <div class="section-title" style="text-align: center;">
        <h2>Latest News</h2>
      </div>

      <!-- News Search Component -->
      <NewsSearch
        @search="handleSearch"
        @category-change="handleCategoryChange"
        @time-range-change="handleTimeRangeChange"
      />

      <!-- Loading and Error States -->
      <LoadingState
        :is-loading="isLoading"
        :is-error="isError"
        :error-title="errorTitle"
        :error-message="errorMessage"
        :isEmpty="filteredNews.length === 0"
        :empty-title="'No News Found'"
        :empty-message="'Try adjusting your search criteria or check back later for updates.'"
        :retry-action="fetchNews"
      />

      <!-- News Grid -->
      <div v-show="!isLoading && !isError" class="news-container">
        <div v-for="news in filteredNews" :key="news.id" class="news-card">
          <div class="news-img" v-lazy-load="{ src: news.image, loading: '/src/assets/images/placeholder.jpg' }">
            <span class="category-tag">{{ news.category }}</span>
          </div>
          <div class="news-content">
            <div class="news-meta">
              <span class="date">{{ formatDate(news.date) }}</span>
              <span class="reading-time">{{ news.readingTime }} min read</span>
            </div>
            <h3>{{ news.title }}</h3>
            <p>{{ news.summary }}</p>
            <router-link :to="`/news/${news.id}`" class="read-more">
              Read More <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import NewsSearch from './NewsSearch.vue'
import LoadingState from './common/LoadingState.vue'
import { formatDate } from '../utils/dateFormatter'

// 状态管理
const isLoading = ref(true)
const isError = ref(false)
const errorTitle = ref('')
const errorMessage = ref('')
const news = ref([])
const searchQuery = ref('')
const selectedCategory = ref('all')
const timeRange = ref('all')

// 缓存管理
const CACHE_KEY = 'news_cache'
const CACHE_DURATION = 5 * 60 * 1000 // 5分钟缓存

// 获取新闻数据
const fetchNews = async () => {
  try {
    isLoading.value = true
    isError.value = false

    // 检查缓存
    const cached = checkCache()
    if (cached) {
      news.value = cached
      isLoading.value = false
      return
    }

    // 模拟API调用
    await new Promise(resolve => setTimeout(resolve, 1000))
    const response = await fetch('/api/news')
    if (!response.ok) throw new Error('Failed to fetch news')
    
    const data = await response.json()
    news.value = data
    
    // 更新缓存
    updateCache(data)
  } catch (error) {
    isError.value = true
    errorTitle.value = 'Failed to Load News'
    errorMessage.value = error.message || 'Please check your internet connection and try again.'
  } finally {
    isLoading.value = false
  }
}

// 缓存管理函数
const checkCache = () => {
  const cached = localStorage.getItem(CACHE_KEY)
  if (!cached) return null
  
  const { data, timestamp } = JSON.parse(cached)
  if (Date.now() - timestamp > CACHE_DURATION) {
    localStorage.removeItem(CACHE_KEY)
    return null
  }
  
  return data
}

const updateCache = (data) => {
  localStorage.setItem(CACHE_KEY, JSON.stringify({
    data,
    timestamp: Date.now()
  }))
}

// 图片懒加载指令
const vLazyLoad = {
  mounted: (el, binding) => {
    const { src, loading } = binding.value
    
    // 设置占位图
    el.style.backgroundImage = `url(${loading})`
    
    // 使用 Intersection Observer 检测元素是否进入视口
    const observer = useIntersectionObserver(el, ([{ isIntersecting }]) => {
      if (isIntersecting) {
        // 预加载图片
        const img = new Image()
        img.src = src
        img.onload = () => {
          el.style.backgroundImage = `url(${src})`
        }
        observer.stop()
      }
    })
  }
}

// 生命周期钩子
onMounted(() => {
  fetchNews()
  
  // 预加载关键资源
  const preloadLinks = [
    { rel: 'preload', href: '/src/assets/images/placeholder.jpg', as: 'image' },
    { rel: 'preload', href: '/src/assets/fonts/fa-solid-900.woff2', as: 'font', crossorigin: true }
  ]
  
  preloadLinks.forEach(link => {
    const linkEl = document.createElement('link')
    Object.assign(linkEl, link)
    document.head.appendChild(linkEl)
  })
})

// 搜索和筛选逻辑
const handleSearch = (filters) => {
  searchQuery.value = filters.query
  selectedCategory.value = filters.category
  timeRange.value = filters.timeRange
}

const handleCategoryChange = (category) => {
  selectedCategory.value = category
}

const handleTimeRangeChange = (range) => {
  timeRange.value = range
}

// 过滤后的新闻列表
const filteredNews = computed(() => {
  let result = [...news.value]

  if (selectedCategory.value !== 'all') {
    result = result.filter(item => item.category === selectedCategory.value)
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.summary.toLowerCase().includes(query) ||
      item.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }

  if (timeRange.value !== 'all') {
    const now = new Date()
    const ranges = {
      week: 7,
      month: 30,
      year: 365
    }
    const days = ranges[timeRange.value]
    const cutoffDate = new Date(now.setDate(now.getDate() - days))
    
    result = result.filter(item => new Date(item.date) >= cutoffDate)
  }

  return result.sort((a, b) => new Date(b.date) - new Date(a.date))
})
</script>

<style scoped>
.news-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.news-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.news-img {
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
  transition: transform 0.3s ease;
}

.news-card:hover .news-img {
  transform: scale(1.05);
}

.category-tag {
  position: absolute;
  top: 15px;
  left: 15px;
  background: #00def4;
  color: #2d428d;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.news-content {
  padding: 20px;
}

.news-meta {
  display: flex;
  justify-content: space-between;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.news-content h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #2d428d;
}

.news-content p {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #00def4;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.read-more:hover {
  color: #00c1e9;
}

@media (max-width: 768px) {
  .news-container {
    grid-template-columns: 1fr;
  }
}
</style> 