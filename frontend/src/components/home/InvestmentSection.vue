<template>
  <section id="funding" class="investment section-padding">
    <div class="container">
      <div class="section-title animate-fade-in">
        <h2>Investment Opportunities</h2>
        <p>Join us in shaping the future of clean energy in Australia</p>
      </div>

      <div class="investment-content">
        <div class="market-overview animate-fade-in">
          <h3>Market Overview</h3>
          <div class="market-stats">
            <div class="stat-card">
              <div class="stat-icon">
                <i class="fas fa-chart-line"></i>
              </div>
              <div class="stat-info">
                <h4>10%+</h4>
                <p>Annual Market Growth</p>
              </div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">
                <i class="fas fa-dollar-sign"></i>
              </div>
              <div class="stat-info">
                <h4>$16M</h4>
                <p>Government Subsidies</p>
              </div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">
                <i class="fas fa-calendar-alt"></i>
              </div>
              <div class="stat-info">
                <h4>2025</h4>
                <p>Market Projection</p>
              </div>
            </div>
          </div>
        </div>

        <div class="investment-grid">
          <div class="investment-card animate-fade-in">
            <div class="card-header">
              <i class="fas fa-bullseye"></i>
              <h3>Market Opportunities</h3>
            </div>
            <ul class="opportunity-list">
              <li>
                <i class="fas fa-check-circle"></i>
                <span>Government subsidies (e.g., $16M by Western Australia)</span>
              </li>
              <li>
                <i class="fas fa-check-circle"></i>
                <span>Solar PV market growth >10% annually</span>
              </li>
              <li>
                <i class="fas fa-check-circle"></i>
                <span>Rising energy prices driving demand</span>
              </li>
              <li>
                <i class="fas fa-check-circle"></i>
                <span>Growing need for energy storage solutions</span>
              </li>
              <li>
                <i class="fas fa-check-circle"></i>
                <span>2025 clean energy market projected at billions</span>
              </li>
              <li>
                <i class="fas fa-check-circle"></i>
                <span>Increasing corporate sustainability commitments</span>
              </li>
            </ul>
          </div>

          <div class="investment-card animate-fade-in">
            <div class="card-header">
              <i class="fas fa-chart-pie"></i>
              <h3>Funding Allocation</h3>
            </div>
            <ul class="allocation-list">
              <li>
                <div class="allocation-item">
                  <span class="label">Marketing & Business Development</span>
                  <div class="progress-bar">
                    <div class="progress" style="width: 30%"></div>
                  </div>
                </div>
              </li>
              <li>
                <div class="allocation-item">
                  <span class="label">Team Expansion & Training</span>
                  <div class="progress-bar">
                    <div class="progress" style="width: 25%"></div>
                  </div>
                </div>
              </li>
              <li>
                <div class="allocation-item">
                  <span class="label">Advanced Equipment Procurement</span>
                  <div class="progress-bar">
                    <div class="progress" style="width: 20%"></div>
                  </div>
                </div>
              </li>
              <li>
                <div class="allocation-item">
                  <span class="label">Company Operations & Infrastructure</span>
                  <div class="progress-bar">
                    <div class="progress" style="width: 15%"></div>
                  </div>
                </div>
              </li>
              <li>
                <div class="allocation-item">
                  <span class="label">R&D for New Energy Technologies</span>
                  <div class="progress-bar">
                    <div class="progress" style="width: 10%"></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="cta-container animate-fade-in">
          <router-link to="/contact" class="btn btn-primary">
            Contact for Investment Details <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional logic needed for now
</script>

<style scoped>
.investment {
  background: linear-gradient(135deg, var(--dark-blue), var(--brand-blue));
  color: var(--pure-white);
}

.section-title {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title h2 {
  color: var(--pure-white);
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.section-title p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
}

.market-overview {
  text-align: center;
  margin-bottom: 4rem;
}

.market-overview h3 {
  color: var(--solar-yellow);
  font-size: 1.8rem;
  margin-bottom: 2rem;
}

.market-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.stat-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.stat-icon {
  font-size: 2.5rem;
  color: var(--solar-yellow);
}

.stat-info h4 {
  font-size: 2rem;
  color: var(--pure-white);
  margin-bottom: 0.5rem;
}

.stat-info p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  margin: 0;
}

.investment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.investment-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.card-header i {
  font-size: 2rem;
  color: var(--solar-yellow);
}

.card-header h3 {
  color: var(--pure-white);
  font-size: 1.8rem;
  margin: 0;
}

.opportunity-list,
.allocation-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.opportunity-list li {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

.opportunity-list i {
  color: var(--solar-yellow);
  font-size: 1.2rem;
  margin-top: 0.2rem;
}

.allocation-item {
  margin-bottom: 1.5rem;
}

.allocation-item .label {
  display: block;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.progress-bar {
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: var(--solar-yellow);
  border-radius: 4px;
  transition: width 1s ease;
}

.cta-container {
  text-align: center;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: var(--solar-yellow);
  color: var(--dark-blue);
  text-decoration: none;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s ease;
  font-size: 1.1rem;
}

.btn-primary:hover {
  background: var(--pure-white);
  transform: translateY(-3px);
}

.btn-primary i {
  transition: transform 0.3s ease;
}

.btn-primary:hover i {
  transform: translateX(5px);
}

@media (max-width: 992px) {
  .section-title h2 {
    font-size: 2.2rem;
  }

  .investment-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .market-stats {
    grid-template-columns: 1fr;
  }

  .stat-card {
    padding: 1.5rem;
  }

  .card-header h3 {
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

  .stat-icon {
    font-size: 2rem;
  }

  .stat-info h4 {
    font-size: 1.8rem;
  }

  .investment-card {
    padding: 1.5rem;
  }
}
</style> 