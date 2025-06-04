<template>
  <section id="about" class="about section-padding">
    <div class="container">
      <div class="about-content">
        <div class="about-text animate-fade-in">
          <h3>Transforming Energy Solutions</h3>
          <p>Pan Pacific Energy Group evolved from Ifix Electrical, founded by Mr. Hong Chen 10 years ago, with 3 years of successful operation in the clean energy sector.</p>
          <p>We specialize in residential, commercial, and industrial electrical installations, as well as the design and installation of solar and energy storage systems.</p>
          
          <div class="achievements">
            <div class="achievement-card animate-fade-in delay-100">
              <i class="fas fa-sun"></i>
              <h4>5+ MW</h4>
              <p>Cumulative Solar Installations</p>
            </div>
            <div class="achievement-card animate-fade-in delay-200">
              <i class="fas fa-battery-full"></i>
              <h4>1+ MWh</h4>
              <p>Energy Storage Deployed</p>
            </div>
            <div class="achievement-card animate-fade-in delay-300">
              <i class="fas fa-home"></i>
              <h4>600+</h4>
              <p>Residential Customers</p>
            </div>
            <div class="achievement-card animate-fade-in delay-400">
              <i class="fas fa-building"></i>
              <h4>80+</h4>
              <p>Commercial & Industrial Clients</p>
            </div>
          </div>
        </div>
        <div class="about-image animate-fade-in delay-500"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional logic needed for now
</script>

<style scoped>
.about {
  background-color: var(--pure-white);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text h3 {
  font-size: 2rem;
  color: var(--brand-blue);
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 1rem;
}

.about-text h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 5rem;
  height: 4px;
  background: var(--solar-yellow);
  border-radius: 2px;
}

.about-text p {
  margin-bottom: 1.5rem;
  color: var(--dark-gray);
  line-height: 1.8;
  font-size: 1.1rem;
}

.achievements {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;
}

.achievement-card {
  background: var(--light-gray);
  padding: 2rem 1.5rem;
  border-radius: 1rem;
  text-align: center;
  transition: all 0.3s ease;
  border-top: 4px solid var(--fresh-green);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
}

.achievement-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.achievement-card i {
  font-size: 2.8rem;
  color: var(--brand-blue);
  margin-bottom: 1.25rem;
}

.achievement-card h4 {
  font-size: 2.2rem;
  color: var(--brand-blue);
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.achievement-card p {
  color: var(--medium-gray);
  font-size: 1.1rem;
  margin: 0;
}

.about-image {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  height: 500px;
  background: url('@/assets/images/logo.png') center/cover no-repeat;
  position: relative;
}

.about-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 193, 233, 0.1), rgba(5, 50, 171, 0.2));
}

@media (max-width: 992px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .about-text {
    order: 2;
  }

  .about-image {
    order: 1;
    height: 400px;
  }
}

@media (max-width: 768px) {
  .achievements {
    grid-template-columns: 1fr;
  }

  .about-text h3 {
    font-size: 1.8rem;
  }

  .achievement-card {
    padding: 1.5rem 1rem;
  }

  .achievement-card i {
    font-size: 2.2rem;
  }

  .achievement-card h4 {
    font-size: 1.8rem;
  }
}

@media (max-width: 576px) {
  .about-image {
    height: 300px;
  }

  .about-text h3 {
    font-size: 1.6rem;
  }

  .about-text p {
    font-size: 1rem;
  }
}
</style> 