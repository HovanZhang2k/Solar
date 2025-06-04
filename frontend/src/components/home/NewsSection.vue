<template>
  <section id="news" class="news section-padding">
    <div class="container">
      <div class="section-title animate-fade-in">
        <h2>Latest News</h2>
        <p>Stay updated with our latest developments and industry insights</p>
      </div>

      <div class="news-grid">
        <article v-for="(article, index) in newsArticles" 
                 :key="index" 
                 class="news-card animate-fade-in"
                 :style="{ animationDelay: `${index * 0.2}s` }">
          <div class="news-image">
            <img :src="article.image" :alt="article.title">
            <div class="news-category">{{ article.category }}</div>
          </div>
          <div class="news-content">
            <div class="news-meta">
              <span class="date">
                <i class="far fa-calendar-alt"></i>
                {{ article.date }}
              </span>
              <span class="read-time">
                <i class="far fa-clock"></i>
                {{ article.readTime }} min read
              </span>
            </div>
            <h3 class="news-title">{{ article.title }}</h3>
            <p class="news-excerpt">{{ article.excerpt }}</p>
            <router-link :to="article.link" class="read-more">
              Read More
              <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>
        </article>
      </div>

      <div class="news-cta">
        <router-link to="/news" class="btn btn-primary">
          View All News
          <i class="fas fa-arrow-right"></i>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
const newsArticles = [
  {
    title: "Pan Pacific Energy Group Expands Operations to Queensland",
    excerpt: "We are excited to announce our expansion into Queensland, bringing our expertise in renewable energy solutions to more Australian communities.",
    image: "@/assets/images/logo.png",
    category: "Company News",
    date: "March 15, 2024",
    readTime: 5,
    link: "/news/expansion-queensland"
  },
  {
    title: "New Solar Installation Project at Elements of Byron Resort",
    excerpt: "Our team has completed a major solar installation project at the Elements of Byron resort, setting new standards for sustainable tourism.",
    image: "@/assets/images/logo.png",
    category: "Projects",
    date: "March 10, 2024",
    readTime: 4,
    link: "/news/byron-resort-project"
  },
  {
    title: "Industry Recognition: Excellence in Renewable Energy",
    excerpt: "Pan Pacific Energy Group has been recognized for our outstanding contribution to Australia's renewable energy sector.",
    image: "@/assets/images/logo.png",
    category: "Awards",
    date: "March 5, 2024",
    readTime: 3,
    link: "/news/industry-recognition"
  }
]
</script>

<style scoped>
.news {
  background-color: var(--pure-white);
}

.section-title {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title h2 {
  font-size: 2.5rem;
  color: var(--brand-blue);
  margin-bottom: 1rem;
}

.section-title p {
  color: var(--dark-gray);
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.news-card {
  background: var(--pure-white);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}

.news-image {
  position: relative;
  height: 240px;
  overflow: hidden;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.news-card:hover .news-image img {
  transform: scale(1.05);
}

.news-category {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: var(--brand-blue);
  color: var(--pure-white);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.news-content {
  padding: 1.5rem;
}

.news-meta {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: var(--medium-gray);
}

.news-meta span {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.news-title {
  font-size: 1.25rem;
  color: var(--brand-blue);
  margin-bottom: 1rem;
  line-height: 1.4;
}

.news-excerpt {
  color: var(--dark-gray);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--brand-blue);
  font-weight: 500;
  text-decoration: none;
  transition: gap 0.3s ease;
}

.read-more:hover {
  gap: 0.75rem;
}

.news-cta {
  text-align: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 2rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-primary {
  background: var(--brand-blue);
  color: var(--pure-white);
}

.btn-primary:hover {
  background: var(--brand-blue-dark);
  transform: translateY(-2px);
}

@media (max-width: 1200px) {
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .news-grid {
    grid-template-columns: 1fr;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .section-title h2 {
    font-size: 2.2rem;
  }

  .news-image {
    height: 200px;
  }
}

@media (max-width: 576px) {
  .section-title {
    margin-bottom: 3rem;
  }

  .section-title h2 {
    font-size: 2rem;
  }

  .section-title p {
    font-size: 1.1rem;
  }

  .news-content {
    padding: 1.25rem;
  }

  .news-title {
    font-size: 1.2rem;
  }

  .news-meta {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style> 