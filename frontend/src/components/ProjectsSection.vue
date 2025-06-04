<template>
  <section id="projects" class="section-padding">
    <div class="container">
      <div class="section-title" style="text-align: center;">
        <h2>Featured Projects</h2>
      </div>

      <!-- Project Filter Component -->
      <ProjectFilter
        @filter-change="handleCategoryChange"
        @search="handleSearch"
        @sort="handleSort"
      />

      <!-- Loading and Error States -->
      <LoadingState
        :is-loading="isLoading"
        :is-error="isError"
        :error-title="errorTitle"
        :error-message="errorMessage"
        :isEmpty="filteredProjects.length === 0"
        :empty-title="'No Projects Found'"
        :empty-message="'Try adjusting your search criteria or check back later for updates.'"
        :retry-action="fetchProjects"
      />

      <!-- Projects Grid -->
      <div v-show="!isLoading && !isError" class="projects-container">
        <div v-for="project in filteredProjects" :key="project.id" class="project-card">
          <div class="project-img" v-lazy-load="{ src: project.image, loading: '/src/assets/images/placeholder.jpg' }">
            <span class="category-tag">{{ project.category }}</span>
          </div>
          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <div class="location">
              <i class="fas fa-map-marker-alt"></i>
              <span>{{ project.location }}</span>
            </div>
            <p>{{ project.description }}</p>
            <div class="project-stats">
              <div class="stat">
                <div class="stat-value">{{ project.capacity }}</div>
                <div class="stat-label">Solar PV</div>
              </div>
              <div v-if="project.storage" class="stat">
                <div class="stat-value">{{ project.storage }}</div>
                <div class="stat-label">Storage</div>
              </div>
              <div v-if="project.pcs" class="stat">
                <div class="stat-value">{{ project.pcs }}</div>
                <div class="stat-label">PCS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import ProjectFilter from './ProjectFilter.vue'
import LoadingState from './common/LoadingState.vue'

// 状态管理
const isLoading = ref(true)
const isError = ref(false)
const errorTitle = ref('')
const errorMessage = ref('')
const projects = ref([
  {
    id: 1,
    title: 'Elements of Byron Bay',
    category: 'Large Scale',
    location: 'Byron Bay, NSW',
    description: 'Large-scale resort solar installation with integrated battery storage solution',
    capacity: '1 MW',
    storage: '1 MWh',
    pcs: '500 kW',
    image: '@/assets/images/logo.png',
    date: '2024-02-15'
  },
  {
    id: 2,
    title: 'Narre Warren Facility',
    category: 'Commercial',
    location: 'Narre Warren, Victoria',
    description: 'Commercial solar and battery storage solution for manufacturing facility',
    capacity: '99 kW',
    storage: '215 kWh',
    pcs: '100 kW',
    image: '@/assets/images/logo.png',
    date: '2024-01-20'
  },
  {
    id: 3,
    title: 'Upper Mount Gravatt',
    category: 'Commercial',
    location: 'Upper Mount Gravatt, QLD',
    description: 'Commercial solar power system for retail and office complex',
    capacity: '90 kW',
    storage: 'N/A',
    pcs: 'N/A',
    image: '@/assets/images/logo.png',
    date: '2023-12-10'
  }
])
const searchQuery = ref('')
const selectedCategory = ref('all')
const sortBy = ref('date-desc')

// 缓存管理
const CACHE_KEY = 'projects_cache'
const CACHE_DURATION = 5 * 60 * 1000 // 5分钟缓存

// 获取项目数据
const fetchProjects = async () => {
  try {
    isLoading.value = true
    isError.value = false

    // 检查缓存
    const cached = checkCache()
    if (cached) {
      projects.value = cached
      isLoading.value = false
      return
    }

    // 模拟API调用
    await new Promise(resolve => setTimeout(resolve, 1000))
    const response = await fetch('/api/projects')
    if (!response.ok) throw new Error('Failed to fetch projects')
    
    const data = await response.json()
    projects.value = data
    
    // 更新缓存
    updateCache(data)
  } catch (error) {
    isError.value = true
    errorTitle.value = 'Failed to Load Projects'
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
  fetchProjects()
  
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
const handleSearch = (query) => {
  searchQuery.value = query
}

const handleCategoryChange = (category) => {
  selectedCategory.value = category
}

const handleSort = (sort) => {
  sortBy.value = sort
}

// 过滤和排序后的项目列表
const filteredProjects = computed(() => {
  let result = [...projects.value]

  // 应用分类筛选
  if (selectedCategory.value !== 'all') {
    result = result.filter(item => item.category === selectedCategory.value)
  }

  // 应用搜索筛选
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.location.toLowerCase().includes(query)
    )
  }

  // 应用排序
  result.sort((a, b) => {
    switch (sortBy.value) {
      case 'date-desc':
        return new Date(b.date) - new Date(a.date)
      case 'date-asc':
        return new Date(a.date) - new Date(b.date)
      case 'capacity-desc':
        return parseFloat(b.capacity) - parseFloat(a.capacity)
      case 'capacity-asc':
        return parseFloat(a.capacity) - parseFloat(b.capacity)
      default:
        return 0
    }
  })

  return result
})
</script>

<style scoped>
.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.project-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.project-img {
  height: 250px;
  background-size: cover;
  background-position: center;
  position: relative;
  transition: transform 0.3s ease;
}

.project-card:hover .project-img {
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

.project-content {
  padding: 20px;
}

.location {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.location i {
  color: #00def4;
}

.project-content h3 {
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: #2d428d;
}

.project-content p {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.project-stats {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.stat {
  text-align: center;
  flex: 1;
}

.stat-value {
  font-weight: 700;
  font-size: 1.2rem;
  color: #2d428d;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 0.9rem;
  color: #666;
}

@media (max-width: 768px) {
  .projects-container {
    grid-template-columns: 1fr;
  }
}
</style> 