<template>
  <div class="home">
    <!-- 导航栏组件将在这里引入 -->
    <TheHeader />
    
    <!-- 主要内容区域 -->
    <main>
      <!-- 各个区块组件将在这里引入 -->
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="funding">
        <InvestmentSection />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="news">
        <NewsSection />
      </section>
    </main>

    <!-- 页脚组件将在这里引入 -->
    <TheFooter />
  </div>
</template>

<script setup>
// 组件将在后续实现
import TheHeader from '../components/layout/TheHeader.vue'
import TheFooter from '../components/layout/TheFooter.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import ServicesSection from '@/components/home/ServicesSection.vue'
import ProjectsSection from '@/components/home/ProjectsSection.vue'
import InvestmentSection from '@/components/home/InvestmentSection.vue'
import TestimonialsSection from '@/components/home/TestimonialsSection.vue'
import NewsSection from '@/components/home/NewsSection.vue'
</script>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.banner {
  min-height: 100vh;
  background: linear-gradient(rgba(5, 50, 171, 0.9), rgba(5, 50, 171, 0.9));
  color: var(--pure-white);
  display: flex;
  align-items: center;
  padding: 6rem 0 4rem;  /* 增加上边距，减小下边距 */
  position: relative;
  overflow: hidden;
}

@media (max-width: 768px) {
  .banner {
    padding: 5rem 0 3rem;  /* 移动端也相应调整 */
    text-align: center;
  }
}
</style> 