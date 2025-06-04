<template>
  <div class="project-detail-view">
    <div class="container">
      <div v-if="project">
        <h1 class="project-title">{{ project.title }}</h1>
        <div class="project-meta">
          <span>{{ project.location }}</span>
          <span v-if="project.capacity">· {{ project.capacity }}</span>
        </div>
        <div class="project-image">
          <img :src="project.image" :alt="project.title" />
        </div>
        <p class="project-description">{{ project.description }}</p>
        <ul class="project-params">
          <li v-if="project.storage">Storage: {{ project.storage }}</li>
          <li v-if="project.pcs">PCS: {{ project.pcs }}</li>
          <li v-if="project.date">Date: {{ project.date }}</li>
        </ul>
      </div>
      <div v-else class="not-found">
        <h2>Project Not Found</h2>
        <p>The project you are looking for does not exist or is coming soon.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const projectId = route.params.id

// 示例项目数据（实际可从API或全局store获取）
const projects = [
  {
    id: '1',
    title: 'Elements of Byron Bay',
    location: 'Byron Bay, NSW',
    description: 'Large-scale resort solar installation with integrated battery storage solution',
    capacity: '1 MW',
    storage: '1 MWh',
    pcs: '500 kW',
    panelType: 'Solar PV',
    image: '@/assets/images/logo.png',
    date: '2023-08-01'
  },
  {
    id: '2',
    title: 'Narre Warren Facility',
    location: 'Narre Warren, Victoria',
    description: 'Commercial solar and battery storage solution for manufacturing facility',
    capacity: '99 kW',
    storage: '215 kWh',
    pcs: '',
    panelType: 'Solar PV',
    image: '@/assets/images/logo.png',
    date: '2023-06-15'
  },
  {
    id: '3',
    title: 'Upper Mount Gravatt',
    location: 'Upper Mount Gravatt, QLD',
    description: 'Commercial solar power system for retail and office complex',
    capacity: '90 kW',
    storage: '',
    pcs: '',
    panelType: 'Lightweight',
    image: '@/assets/images/logo.png',
    date: '2023-05-10'
  }
]

const project = projects.find(p => p.id === projectId)
</script>

<style scoped>
.project-detail-view {
  padding: 40px 0;
}
.container {
  max-width: 800px;
  margin: 0 auto;
  padding-top: 4rem;
}
.project-title {
  font-size: 2.2rem;
  color: var(--brand-blue, #2d428d);
  margin-bottom: 0.5rem;
}
.project-meta {
  color: #888;
  margin-bottom: 1.5rem;
}
.project-image {
  width: 100%;
  max-width: 600px;
  margin: 0 auto 2rem;
  border-radius: 12px;
  overflow: hidden;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
}
.project-image img {
  width: 100%;
  max-height: 350px;
  object-fit: contain;
  display: block;
}
.project-description {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}
.project-params {
  list-style: none;
  padding: 0;
  color: #555;
}
.project-params li {
  margin-bottom: 0.5rem;
}
.not-found {
  text-align: center;
  margin: 4rem 0;
}
</style> 