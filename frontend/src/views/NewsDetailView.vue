<template>
  <div class="news-detail">
    <!-- 页面标题区域 -->
    <section class="page-header" :style="{ backgroundImage: `url(${article.image})` }">
      <div class="container">
        <div class="article-meta">
          <span class="category">{{ article.category }}</span>
          <span class="date">{{ article.date }}</span>
          <span class="reading-time">{{ article.readingTime }} min read</span>
        </div>
        <h1>{{ article.title }}</h1>
        <div class="author-info">
          <img :src="article.author.avatar" :alt="article.author.name" class="author-avatar">
          <div class="author-details">
            <span class="author-name">{{ article.author.name }}</span>
            <span class="author-role">{{ article.author.role }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 文章内容 -->
    <section class="article-content section-padding">
      <div class="container">
        <div class="content-grid">
          <!-- 主要内容 -->
          <div class="main-content">
            <div class="article-body" v-html="article.content"></div>
            
            <!-- 标签 -->
            <div class="article-tags">
              <span v-for="tag in article.tags" :key="tag" class="tag">
                #{{ tag }}
              </span>
            </div>

            <!-- 分享按钮 -->
            <div class="share-buttons">
              <h3>Share this article</h3>
              <div class="share-links">
                <a href="#" class="share-link" @click.prevent="shareOnLinkedIn">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" class="share-link" @click.prevent="shareOnTwitter">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="share-link" @click.prevent="shareOnFacebook">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="share-link" @click.prevent="copyLink">
                  <i class="fas fa-link"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- 侧边栏 -->
          <aside class="sidebar">
            <!-- 相关新闻 -->
            <div class="related-news">
              <h3>Related Articles</h3>
              <div class="related-articles">
                <div v-for="related in relatedArticles" :key="related.id" class="related-article">
                  <img :src="related.image" :alt="related.title">
                  <div class="related-content">
                    <span class="related-category">{{ related.category }}</span>
                    <h4>{{ related.title }}</h4>
                    <span class="related-date">{{ related.date }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 订阅卡片 -->
            <div class="subscribe-card">
              <h3>Stay Updated</h3>
              <p>Subscribe to our newsletter for the latest news and updates</p>
              <form @submit.prevent="handleSubscribe" class="subscribe-form">
                <input 
                  type="email" 
                  v-model="subscribeEmail" 
                  placeholder="Enter your email"
                  required
                >
                <button type="submit" class="btn-subscribe">Subscribe</button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const subscribeEmail = ref('')

// 模拟文章数据
const article = ref({
  id: 1,
  title: 'Australia\'s Clean Energy Revolution: A Decade of Progress',
  category: 'Industry News',
  date: 'March 15, 2024',
  readingTime: 8,
  image: '/src/assets/images/news/clean-energy-revolution.jpg',
  author: {
    name: 'Sarah Johnson',
    role: 'Energy Analyst',
    avatar: '/src/assets/images/team/sarah-johnson.jpg'
  },
  content: `
    <p>The Australian clean energy sector has witnessed remarkable growth over the past decade, with solar energy leading the charge in the nation's transition to renewable power sources.</p>
    
    <h2>The Rise of Solar Energy</h2>
    <p>Australia's abundant sunshine and vast land area make it an ideal location for solar energy development. The country has seen a dramatic increase in solar installations, from residential rooftops to large-scale solar farms.</p>
    
    <blockquote>
      "Australia's solar energy capacity has grown by over 300% in the last five years, positioning the country as a global leader in renewable energy adoption."
    </blockquote>
    
    <h2>Government Initiatives</h2>
    <p>The Australian government has implemented various incentives and policies to support the clean energy transition, including:</p>
    <ul>
      <li>Renewable Energy Target (RET) scheme</li>
      <li>Solar rebates and incentives</li>
      <li>Grid modernization programs</li>
      <li>Energy storage initiatives</li>
    </ul>
    
    <h2>Future Outlook</h2>
    <p>With continued technological advancements and increasing public support, Australia is well-positioned to achieve its renewable energy targets. The sector is expected to create thousands of new jobs and attract significant investment in the coming years.</p>
  `,
  tags: ['Clean Energy', 'Solar Power', 'Renewable Energy', 'Australia', 'Industry Trends']
})

// 相关文章数据
const relatedArticles = ref([
  {
    id: 2,
    title: 'New Solar Technology Breakthrough',
    category: 'Technology',
    date: 'March 10, 2024',
    image: '/src/assets/images/news/solar-tech.jpg'
  },
  {
    id: 3,
    title: 'Investment Opportunities in Renewable Energy',
    category: 'Investment',
    date: 'March 5, 2024',
    image: '/src/assets/images/news/investment.jpg'
  },
  {
    id: 4,
    title: 'Community Solar Projects Making Impact',
    category: 'Community',
    date: 'February 28, 2024',
    image: '/src/assets/images/news/community-solar.jpg'
  }
])

// 分享功能
const shareOnLinkedIn = () => {
  const url = encodeURIComponent(window.location.href)
  const title = encodeURIComponent(article.value.title)
  window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`, '_blank')
}

const shareOnTwitter = () => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent(article.value.title)
  window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank')
}

const shareOnFacebook = () => {
  const url = encodeURIComponent(window.location.href)
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')
}

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href)
    alert('Link copied to clipboard!')
  } catch (err) {
    console.error('Failed to copy link:', err)
  }
}

// 订阅处理
const handleSubscribe = async () => {
  try {
    // 这里添加订阅逻辑
    await new Promise(resolve => setTimeout(resolve, 1000))
    alert('Thank you for subscribing!')
    subscribeEmail.value = ''
  } catch (error) {
    alert('Sorry, there was an error. Please try again.')
  }
}

// 页面加载时获取文章数据
onMounted(async () => {
  // 这里可以根据路由参数获取实际的文章数据
  const articleId = route.params.id
  // const response = await fetch(`/api/articles/${articleId}`)
  // article.value = await response.json()
})
</script>

<style scoped>
.news-detail {
  padding-top: 80px;
}

.page-header {
  background: linear-gradient(rgba(5, 50, 171, 0.8), rgba(5, 50, 171, 0.8)),
              var(--bg-image) center/cover;
  color: white;
  padding: 100px 0 60px;
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.article-meta {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  font-size: 0.9rem;
}

.category {
  background: #00def4;
  color: #2d428d;
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: 600;
}

.date, .reading-time {
  opacity: 0.9;
}

.page-header h1 {
  font-size: 2.8rem;
  margin-bottom: 30px;
  line-height: 1.3;
  color: white;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 15px;
}

.author-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.author-details {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-weight: 600;
  font-size: 1.1rem;
}

.author-role {
  opacity: 0.8;
  font-size: 0.9rem;
}

.section-padding {
  padding: 80px 0;
}

.content-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 50px;
}

.main-content {
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.article-body {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
}

.article-body h2 {
  color: #2d428d;
  margin: 40px 0 20px;
  font-size: 1.8rem;
}

.article-body p {
  margin-bottom: 20px;
}

.article-body blockquote {
  border-left: 4px solid #00def4;
  padding: 20px;
  margin: 30px 0;
  background: #f8f9fa;
  font-style: italic;
}

.article-body ul {
  margin: 20px 0;
  padding-left: 20px;
}

.article-body li {
  margin-bottom: 10px;
}

.article-tags {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.tag {
  display: inline-block;
  padding: 5px 15px;
  background: #f5f5f5;
  border-radius: 20px;
  margin-right: 10px;
  margin-bottom: 10px;
  color: #666;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.tag:hover {
  background: #00def4;
  color: #2d428d;
}

.share-buttons {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.share-buttons h3 {
  color: #2d428d;
  margin-bottom: 20px;
}

.share-links {
  display: flex;
  gap: 15px;
}

.share-link {
  width: 45px;
  height: 45px;
  background: #f5f5f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2d428d;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.share-link:hover {
  background: #00def4;
  color: white;
  transform: translateY(-3px);
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.related-news {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.related-news h3 {
  color: #2d428d;
  margin-bottom: 20px;
}

.related-articles {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.related-article {
  display: flex;
  gap: 15px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.related-article:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.related-article img {
  width: 100px;
  height: 70px;
  object-fit: cover;
  border-radius: 8px;
}

.related-content {
  flex: 1;
}

.related-category {
  font-size: 0.8rem;
  color: #00def4;
  font-weight: 600;
  display: block;
  margin-bottom: 5px;
}

.related-content h4 {
  font-size: 1rem;
  color: #2d428d;
  margin-bottom: 5px;
  line-height: 1.4;
}

.related-date {
  font-size: 0.8rem;
  color: #666;
}

.subscribe-card {
  background: linear-gradient(135deg, #2d428d, #0532ab);
  padding: 30px;
  border-radius: 15px;
  color: white;
}

.subscribe-card h3 {
  color: white;
  margin-bottom: 15px;
}

.subscribe-card p {
  opacity: 0.9;
  margin-bottom: 20px;
}

.subscribe-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.subscribe-form input {
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
}

.btn-subscribe {
  background: #00def4;
  color: #2d428d;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-subscribe:hover {
  background: white;
  transform: translateY(-2px);
}

@media (max-width: 992px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
  
  .sidebar {
    order: -1;
  }
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2.2rem;
  }
  
  .article-meta {
    flex-wrap: wrap;
  }
  
  .main-content {
    padding: 30px;
  }
  
  .related-article {
    flex-direction: column;
  }
  
  .related-article img {
    width: 100%;
    height: 200px;
  }
}
</style> 