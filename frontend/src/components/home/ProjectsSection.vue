<template>
  <section id="projects" class="projects section-padding">
    <div class="container">
      <div class="section-title animate-fade-in">
        <h2>Featured Projects</h2>
        <p>Discover our successful clean energy installations across Australia</p>
      </div>

      <div class="projects-grid">
        <div v-for="(project, index) in projects" 
             :key="project.title" 
             class="project-card animate-fade-in"
             :style="{ animationDelay: `${index * 100}ms` }">
          <div class="project-image" :style="{ backgroundImage: `url(${project.image})` }">
            <div class="project-overlay">
              <router-link :to="`/projects/${project.id}`" class="view-project">
                View Details <i class="fas fa-arrow-right"></i>
              </router-link>
            </div>
          </div>
          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <div class="location">
              <i class="fas fa-map-marker-alt"></i>
              <span>{{ project.location }}</span>
            </div>
            <p>{{ project.description }}</p>
            <div class="project-stats">
              <div v-for="stat in project.stats" :key="stat.label" class="stat">
                <div class="stat-value">{{ stat.value }}</div>
                <div class="stat-label">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="view-all-container animate-fade-in">
        <router-link to="/projects" class="btn btn-secondary">
          View All Projects <i class="fas fa-arrow-right"></i>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    id: '1',
    title: 'Elements of Byron Bay',
    location: 'Byron Bay, NSW',
    description: 'Large-scale resort solar installation with integrated battery storage solution',
    image: '@/assets/images/logo.png',
    stats: [
      { value: '1 MW', label: 'Solar PV' },
      { value: '1 MWh', label: 'Storage' },
      { value: '500 kW', label: 'PCS' }
    ]
  },
  {
    id: '2',
    title: 'Narre Warren Facility',
    location: 'Narre Warren, Victoria',
    description: 'Commercial solar and battery storage solution for manufacturing facility',
    image: '@/assets/images/logo.png',
    stats: [
      { value: '99 kW', label: 'Solar PV' },
      { value: '215 kWh', label: 'Storage' }
    ]
  },
  {
    id: '3',
    title: 'Upper Mount Gravatt',
    location: 'Upper Mount Gravatt, QLD',
    description: 'Commercial solar power system for retail and office complex',
    image: '@/assets/images/logo.png',
    stats: [
      { value: '90 kW', label: 'Solar PV' },
      { value: 'Lightweight', label: 'Panel Type' }
    ]
  }
]
</script>

<style scoped>
.projects {
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.project-card {
  background: var(--pure-white);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.project-image {
  height: 250px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(5, 50, 171, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.view-project {
  color: var(--pure-white);
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: 2px solid var(--pure-white);
  border-radius: 50px;
  transition: all 0.3s ease;
}

.view-project:hover {
  background: var(--pure-white);
  color: var(--brand-blue);
}

.project-content {
  padding: 2rem;
}

.project-content h3 {
  font-size: 1.6rem;
  color: var(--brand-blue);
  margin-bottom: 1rem;
}

.location {
  color: var(--medium-gray);
  font-size: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.location i {
  color: var(--fresh-green);
  font-size: 1.2rem;
}

.project-content p {
  color: var(--dark-gray);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.project-stats {
  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;
  border-top: 1px solid var(--light-gray);
}

.stat {
  text-align: center;
  flex: 1;
}

.stat-value {
  font-weight: 700;
  font-size: 1.4rem;
  color: var(--brand-blue);
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.95rem;
  color: var(--medium-gray);
}

.view-all-container {
  text-align: center;
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: var(--bright-blue);
  color: var(--dark-gray);
  text-decoration: none;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: var(--sky-blue);
  color: var(--pure-white);
  transform: translateY(-3px);
}

.btn-secondary i {
  transition: transform 0.3s ease;
}

.btn-secondary:hover i {
  transform: translateX(5px);
}

@media (max-width: 992px) {
  .section-title h2 {
    font-size: 2.2rem;
  }
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .project-content {
    padding: 1.5rem;
  }

  .project-content h3 {
    font-size: 1.4rem;
  }

  .stat-value {
    font-size: 1.2rem;
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

  .project-image {
    height: 200px;
  }

  .project-content h3 {
    font-size: 1.3rem;
  }

  .stat-value {
    font-size: 1.1rem;
  }
}
</style> 