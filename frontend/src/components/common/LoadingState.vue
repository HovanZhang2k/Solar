<template>
  <div class="loading-state" :class="{ 'is-error': isError }">
    <div v-if="isLoading" class="loading-spinner">
      <i class="fas fa-circle-notch fa-spin"></i>
      <span>{{ loadingText }}</span>
    </div>
    <div v-else-if="isError" class="error-message">
      <i class="fas fa-exclamation-circle"></i>
      <h3>{{ errorTitle }}</h3>
      <p>{{ errorMessage }}</p>
      <button v-if="retryAction" @click="retryAction" class="retry-button">
        <i class="fas fa-redo"></i> Retry
      </button>
    </div>
    <div v-else-if="isEmpty" class="empty-state">
      <i class="fas fa-inbox"></i>
      <h3>{{ emptyTitle }}</h3>
      <p>{{ emptyMessage }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isLoading: {
    type: Boolean,
    default: false
  },
  loadingText: {
    type: String,
    default: 'Loading...'
  },
  isError: {
    type: Boolean,
    default: false
  },
  errorTitle: {
    type: String,
    default: 'Error'
  },
  errorMessage: {
    type: String,
    default: 'Something went wrong. Please try again later.'
  },
  isEmpty: {
    type: Boolean,
    default: false
  },
  emptyTitle: {
    type: String,
    default: 'No Data'
  },
  emptyMessage: {
    type: String,
    default: 'No items found.'
  },
  retryAction: {
    type: Function,
    default: null
  }
})
</script>

<style scoped>
.loading-state {
  padding: 40px;
  text-align: center;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  color: #00def4;
}

.loading-spinner i {
  font-size: 2.5rem;
}

.error-message {
  color: #dc3545;
}

.error-message i {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.error-message h3 {
  margin-bottom: 10px;
  font-size: 1.5rem;
}

.retry-button {
  margin-top: 20px;
  padding: 10px 20px;
  background: #00def4;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.retry-button:hover {
  background: #00c1e9;
}

.empty-state {
  color: #666;
}

.empty-state i {
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: #00def4;
}

.empty-state h3 {
  margin-bottom: 10px;
  font-size: 1.5rem;
}
</style> 