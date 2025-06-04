<template>
  <section id="home" class="hero">
    <div class="hero-content animate-fade-in">
      <h1>Illuminating a Green Future</h1>
      <p>Advancing Clean Energy Development Across Australia</p>
      <p class="hero-highlight">
        Cumulative solar installations exceeding 5 MW with over 1 MWh of energy storage
      </p>
      <div class="hero-btns">
        <router-link to="/#projects" class="btn">Our Projects</router-link>
        <router-link to="/#funding" class="btn btn-secondary">Investment Opportunities</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional logic needed for now
</script>

<style scoped>
.hero {
  height: 100vh;
  background: linear-gradient(rgba(5, 50, 171, 0.7), rgba(0, 0, 0, 0.7)),
              url('@/assets/images/logo.png') center/cover no-repeat;
  display: flex;
  align-items: center;
  text-align: center;
  color: var(--pure-white);
  padding-top: 80px;
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.5) 100%);
}

.hero-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  z-index: 1;
}

.hero h1 {
  font-size: 3.8rem;
  color: var(--pure-white);
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  line-height: 1.2;
  font-weight: 700;
}

.hero p {
  font-size: 1.6rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.hero-highlight {
  color: var(--solar-yellow);
  font-weight: 600;
  background: rgba(0, 0, 0, 0.3);
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  margin-top: 1.25rem;
  font-size: 1.3rem;
  backdrop-filter: blur(5px);
}

.hero-btns {
  display: flex;
  justify-content: center;
  gap: 1.25rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 0.875rem 2rem;
  background: var(--dark-blue);
  color: var(--pure-white);
  text-decoration: none;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  box-shadow: 0 4px 15px rgba(45, 66, 141, 0.25);
}

.btn:hover {
  background: var(--brand-blue);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(45, 66, 141, 0.35);
}

.btn-secondary {
  background: var(--bright-blue);
  color: var(--dark-gray);
}

.btn-secondary:hover {
  background: var(--sky-blue);
  color: var(--pure-white);
}

@media (max-width: 992px) {
  .hero h1 {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .hero p {
    font-size: 1.3rem;
  }

  .hero-btns {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 300px;
  }
}

@media (max-width: 576px) {
  .hero {
    padding-top: 150px;
  }

  .hero h1 {
    font-size: 2.2rem;
  }

  .hero p {
    font-size: 1.1rem;
  }

  .hero-highlight {
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
  }
}
</style> 