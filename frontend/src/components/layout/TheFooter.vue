<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h3>Pan Pacific Energy</h3>
          <p>Illuminating a Green Future, Advancing Clean Energy Development across Australia with sustainable solutions for homes and businesses.</p>
          <div class="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h3>Quick Links</h3>
          <ul class="footer-links">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/#about">About Us</router-link></li>
            <li><router-link to="/#services">Services</router-link></li>
            <li><router-link to="/#projects">Projects</router-link></li>
            <li><router-link to="/team">Our Team</router-link></li>
            <li><router-link to="/#funding">Investment</router-link></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>Core Business</h3>
          <ul class="footer-links">
            <li><router-link to="/#services">Residential Solar</router-link></li>
            <li><router-link to="/#services">Commercial Solutions</router-link></li>
            <li><router-link to="/#services">Industrial Systems</router-link></li>
            <li><router-link to="/#services">Energy Storage</router-link></li>
            <li><router-link to="/#projects">Solar Farm Development</router-link></li>
            <li><router-link to="/#services">Maintenance Services</router-link></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>Contact Us</h3>
          <ul class="contact-info">
            <li>
              <i class="fas fa-map-marker-alt"></i>
              <span>123 Energy Street, Sydney, NSW 2000, Australia</span>
            </li>
            <li>
              <i class="fas fa-phone"></i>
              <span>+61 2 9876 5432</span>
            </li>
            <li>
              <i class="fas fa-envelope"></i>
              <span>info@panpacificenergy.com</span>
            </li>
            <li>
              <i class="fas fa-clock"></i>
              <span>Monday-Friday: 8:00 AM - 6:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="copyright">
        <p>&copy; {{ currentYear }} Pan Pacific Energy Group. All rights reserved. | Designed with <i class="fas fa-heart"></i> for a sustainable future</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background: var(--dark-gray);
  color: var(--pure-white);
  padding: 5rem 0 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 4rem;
}

.footer-col h3 {
  color: var(--solar-yellow);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.footer-col p {
  margin-bottom: 1.5rem;
  opacity: 0.85;
  line-height: 1.8;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  transition: all 0.3s ease;
  display: block;
}

.footer-links a:hover {
  color: var(--bright-blue);
  padding-left: 0.5rem;
}

.contact-info {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-info li {
  margin-bottom: 1rem;
  padding-left: 2rem;
  position: relative;
}

.contact-info i {
  position: absolute;
  left: 0;
  top: 0.25rem;
  color: var(--bright-blue);
  font-size: 1.2rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: var(--pure-white);
  border-radius: 50%;
  transition: all 0.3s ease;
  font-size: 1.2rem;
}

.social-links a:hover {
  background: var(--bright-blue);
  color: var(--dark-gray);
  transform: translateY(-0.25rem);
}

.copyright {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 1rem;
  opacity: 0.7;
}

.copyright i {
  color: var(--bright-blue);
}

@media (max-width: 768px) {
  .footer {
    padding: 3rem 0 1.5rem;
  }

  .footer-grid {
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .footer-col h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  .contact-info li {
    font-size: 0.9rem;
  }
}
</style> 