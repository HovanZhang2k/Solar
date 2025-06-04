<template>
  <section id="testimonials" class="testimonials section-padding">
    <div class="container">
      <div class="section-title animate-fade-in">
        <h2>Client Testimonials</h2>
        <p>What our clients say about our services and solutions</p>
      </div>

      <div class="testimonials-slider">
        <div class="testimonials-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <div v-for="(testimonial, index) in testimonials" 
               :key="index" 
               class="testimonial-card animate-fade-in"
               :class="{ active: currentSlide === index }">
            <div class="quote-icon">
              <i class="fas fa-quote-left"></i>
            </div>
            <p class="testimonial-text">{{ testimonial.text }}</p>
            <div class="client-info">
              <div class="client-avatar">
                <i class="fas fa-user"></i>
              </div>
              <div class="client-details">
                <h4>{{ testimonial.name }}</h4>
                <p>{{ testimonial.position }}</p>
                <div class="rating">
                  <i v-for="n in 5" 
                     :key="n" 
                     class="fas fa-star"
                     :class="{ 'active': n <= testimonial.rating }">
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="slider-controls">
          <button class="control-btn prev" @click="prevSlide" :disabled="currentSlide === 0">
            <i class="fas fa-chevron-left"></i>
          </button>
          <div class="slider-dots">
            <button v-for="(_, index) in testimonials" 
                    :key="index"
                    class="dot"
                    :class="{ active: currentSlide === index }"
                    @click="currentSlide = index">
            </button>
          </div>
          <button class="control-btn next" 
                  @click="nextSlide" 
                  :disabled="currentSlide === testimonials.length - 1">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const testimonials = [
  {
    text: "Pan Pacific Energy Group transformed our resort's energy infrastructure with a state-of-the-art solar installation. Their expertise and professionalism exceeded our expectations.",
    name: "Sarah Thompson",
    position: "Facility Manager, Elements of Byron",
    rating: 5
  },
  {
    text: "The commercial solar system installed by Pan Pacific has significantly reduced our operational costs. Their team's attention to detail and ongoing support has been exceptional.",
    name: "Michael Chen",
    position: "Operations Director, Narre Warren Facility",
    rating: 5
  },
  {
    text: "As a residential customer, I'm extremely satisfied with my solar installation. The team was professional, efficient, and the system has exceeded our energy savings expectations.",
    name: "David Wilson",
    position: "Homeowner, Upper Mount Gravatt",
    rating: 5
  },
  {
    text: "The industrial solar solution provided by Pan Pacific has been a game-changer for our manufacturing facility. Their expertise in large-scale installations is unmatched.",
    name: "Emma Rodriguez",
    position: "Sustainability Manager, Industrial Complex",
    rating: 5
  }
]

const currentSlide = ref(0)
let autoplayInterval

const nextSlide = () => {
  if (currentSlide.value < testimonials.length - 1) {
    currentSlide.value++
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    if (currentSlide.value === testimonials.length - 1) {
      currentSlide.value = 0
    } else {
      currentSlide.value++
    }
  }, 5000)
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  clearInterval(autoplayInterval)
})
</script>

<style scoped>
.testimonials {
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

.testimonials-slider {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  overflow: hidden;
}

.testimonials-track {
  display: flex;
  transition: transform 0.5s ease;
}

.testimonial-card {
  flex: 0 0 100%;
  padding: 3rem;
  background: var(--pure-white);
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
}

.testimonial-card.active {
  opacity: 1;
  transform: translateY(0);
}

.quote-icon {
  position: absolute;
  top: 2rem;
  left: 2rem;
  font-size: 2rem;
  color: var(--brand-blue);
  opacity: 0.2;
}

.testimonial-text {
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--dark-gray);
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.client-info {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.client-avatar {
  width: 4rem;
  height: 4rem;
  background: var(--light-gray);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--brand-blue);
}

.client-details h4 {
  font-size: 1.2rem;
  color: var(--brand-blue);
  margin-bottom: 0.25rem;
}

.client-details p {
  color: var(--medium-gray);
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.rating {
  display: flex;
  gap: 0.25rem;
}

.rating i {
  color: var(--light-gray);
  font-size: 1rem;
}

.rating i.active {
  color: var(--solar-yellow);
}

.slider-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.control-btn {
  background: var(--pure-white);
  border: none;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.control-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.control-btn:not(:disabled):hover {
  background: var(--brand-blue);
  color: var(--pure-white);
  transform: translateY(-2px);
}

.slider-dots {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: var(--light-gray);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: var(--brand-blue);
  transform: scale(1.2);
}

@media (max-width: 992px) {
  .section-title h2 {
    font-size: 2.2rem;
  }

  .testimonial-card {
    padding: 2.5rem;
  }
}

@media (max-width: 768px) {
  .testimonial-card {
    padding: 2rem;
  }

  .testimonial-text {
    font-size: 1.1rem;
  }

  .quote-icon {
    top: 1.5rem;
    left: 1.5rem;
    font-size: 1.5rem;
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

  .testimonial-card {
    padding: 1.5rem;
  }

  .testimonial-text {
    font-size: 1rem;
  }

  .client-info {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .slider-controls {
    gap: 1rem;
  }

  .control-btn {
    width: 2.5rem;
    height: 2.5rem;
  }
}
</style> 