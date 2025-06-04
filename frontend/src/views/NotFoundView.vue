<template>
  <div class="not-found">
    <div class="container">
      <div class="error-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist or has been moved.</p>
        <div class="actions">
          <router-link to="/" class="btn-primary">
            <i class="fas fa-home"></i>
            Return to Home
          </router-link>
          <router-link to="/contact" class="btn-secondary">
            <i class="fas fa-envelope"></i>
            Contact Support
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
  padding: 20px;
}

.container {
  max-width: 600px;
  width: 100%;
  text-align: center;
}

.error-content {
  background: white;
  padding: 60px 40px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 8rem;
  color: #2d428d;
  margin: 0;
  line-height: 1;
  background: linear-gradient(135deg, #2d428d, #00def4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: pulse 2s infinite;
}

h2 {
  font-size: 2.5rem;
  color: #2d428d;
  margin: 20px 0;
}

p {
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 40px;
}

.actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #2d428d;
  color: white;
}

.btn-primary:hover {
  background: #0532ab;
  transform: translateY(-3px);
}

.btn-secondary {
  background: #00def4;
  color: #2d428d;
}

.btn-secondary:hover {
  background: #00c1e9;
  transform: translateY(-3px);
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@media (max-width: 768px) {
  .error-content {
    padding: 40px 20px;
  }

  h1 {
    font-size: 6rem;
  }

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1.1rem;
  }

  .actions {
    flex-direction: column;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }
}
</style> 