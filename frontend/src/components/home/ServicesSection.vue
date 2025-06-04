<template>
  <section id="services" class="services section-padding">
    <div class="container">
      <div class="section-title animate-fade-in">
        <h2>Our Core Services</h2>
        <p>Comprehensive energy solutions tailored to your needs</p>
      </div>

      <div class="services-grid">
        <div v-for="(service, index) in services" 
             :key="service.title" 
             class="service-card animate-fade-in"
             :style="{ animationDelay: `${index * 100}ms` }">
          <div class="service-icon">
            <i :class="service.icon"></i>
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <router-link :to="service.link" class="service-link">
            Learn More <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Residential Solutions',
    description: 'Custom solar and storage solutions for homeowners to reduce energy bills and carbon footprint.',
    icon: 'fas fa-house-user',
    link: '/#services'
  },
  {
    title: 'Commercial Solutions',
    description: 'Energy solutions for businesses to improve efficiency and reduce operational costs.',
    icon: 'fas fa-building',
    link: '/#services'
  },
  {
    title: 'Industrial Solutions',
    description: 'Large-scale solar and storage systems for industrial applications and manufacturing.',
    icon: 'fas fa-industry',
    link: '/#services'
  },
  {
    title: 'Energy Storage',
    description: 'Advanced battery storage systems to maximize energy independence and resilience.',
    icon: 'fas fa-car-battery',
    link: '/#services'
  }
]
</script>

<style scoped>
.services {
  background-color: var(--light-gray);
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

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.service-card {
  background: var(--pure-white);
  border-radius: 1rem;
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--brand-blue), var(--bright-blue));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-icon {
  font-size: 3.5rem;
  color: var(--brand-blue);
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.service-card:hover .service-icon {
  transform: scale(1.1);
  color: var(--bright-blue);
}

.service-card h3 {
  font-size: 1.8rem;
  color: var(--dark-blue);
  margin-bottom: 1rem;
}

.service-card p {
  color: var(--dark-gray);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.service-link {
  color: var(--brand-blue);
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.service-link i {
  transition: transform 0.3s ease;
}

.service-link:hover {
  color: var(--bright-blue);
}

.service-link:hover i {
  transform: translateX(5px);
}

@media (max-width: 992px) {
  .section-title h2 {
    font-size: 2.2rem;
  }
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .service-card {
    padding: 2rem 1.5rem;
  }

  .service-icon {
    font-size: 3rem;
  }

  .service-card h3 {
    font-size: 1.6rem;
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

  .service-card {
    padding: 1.5rem 1.25rem;
  }

  .service-icon {
    font-size: 2.5rem;
  }

  .service-card h3 {
    font-size: 1.4rem;
  }
}
</style> 