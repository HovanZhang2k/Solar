<template>
  <div class="news-view">
    <div class="container">
      <h1 class="page-title">Latest News</h1>
      
      <!-- 新闻列表 -->
      <div class="news-grid">
        <div v-if="loading" class="loading-state">
          <el-skeleton :rows="3" animated />
        </div>
        
        <template v-else>
          <div v-if="filteredNews.length === 0" class="no-results">
            <el-empty description="No news articles found" />
          </div>
          
          <div v-else class="news-list">
            <div v-for="news in filteredNews" :key="news.id" class="news-card">
              <router-link :to="'/news/' + news.id" class="news-link">
                <div class="news-image">
                  <img :src="news.image" :alt="news.title" loading="lazy">
                </div>
                <div class="news-content">
                  <div class="news-meta">
                    <span class="category">{{ news.category }}</span>
                    <span class="date">{{ formatDate(news.date) }}</span>
                    <span class="reading-time">{{ news.readingTime }} min read</span>
                  </div>
                  <h2 class="news-title">{{ news.title }}</h2>
                  <p class="news-summary">{{ news.summary }}</p>
                  <div class="news-tags">
                    <span v-for="tag in news.tags" :key="tag" class="tag">
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { formatDate } from '@/utils/date'

// 状态
const loading = ref(false)
const searchQuery = ref('')
const selectedCategory = ref('all')
const timeRange = ref('all')

// 模拟新闻数据
const news = ref([
  {
    id: 1,
    title: 'Australia\'s Clean Energy Revolution: A Decade of Progress',
    category: 'Industry News',
    date: '2024-03-15',
    readingTime: 5,
    image: '@/assets/images/logo.png',
    summary: 'Exploring Australia\'s remarkable journey in renewable energy adoption and its impact on the national energy landscape.',
    tags: ['Renewable Energy', 'Market Trends', 'Policy']
  },
  {
    id: 2,
    title: 'New Solar Technology Breakthrough Announced',
    category: 'Technology',
    date: '2024-03-10',
    readingTime: 4,
    image: '@/assets/images/logo.png',
    summary: 'Revolutionary solar panel technology promises higher efficiency and lower costs for residential installations.',
    tags: ['Technology', 'Innovation', 'Solar']
  },
  {
    id: 3,
    title: 'Government Announces New Renewable Energy Incentives',
    category: 'Policy',
    date: '2024-03-05',
    readingTime: 6,
    image: '@/assets/images/logo.png',
    summary: 'New government incentives aim to accelerate the adoption of renewable energy systems across Australia.',
    tags: ['Policy', 'Incentives', 'Government']
  }
])

// 过滤新闻（只保留全部，不再用搜索和筛选）
const filteredNews = computed(() => news.value)
</script>

<style scoped>
.news-view {
  padding: 40px 0;
}

.container {
  padding-top: 3rem;
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2.5rem;
  color: var(--dark-blue);
  margin-bottom: 3rem;
  text-align: center;
}

.news-grid {
  margin-top: 40px;
}

.news-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

.news-card {
  background: var(--pure-white);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.news-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.news-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.news-image {
  height: 200px;
  overflow: hidden;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.news-card:hover .news-image img {
  transform: scale(1.1);
}

.news-content {
  padding: 25px;
}

.news-meta {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  font-size: 0.9rem;
  color: var(--medium-gray);
}

.category {
  color: var(--brand-blue);
  font-weight: 600;
}

.news-title {
  font-size: 1.4rem;
  color: var(--dark-blue);
  margin-bottom: 15px;
  line-height: 1.4;
}

.news-summary {
  color: var(--dark-gray);
  margin-bottom: 20px;
  line-height: 1.6;
}

.news-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  background: var(--light-gray);
  color: var(--dark-blue);
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
}

.loading-state {
  padding: 20px;
}

.no-results {
  text-align: center;
  padding: 40px;
}

@media (max-width: 768px) {
  .news-list {
    grid-template-columns: 1fr;
  }
  
  .page-title {
    font-size: 2rem;
  }
}
</style> 