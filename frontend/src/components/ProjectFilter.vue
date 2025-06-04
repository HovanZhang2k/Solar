<template>
  <div class="project-filter">
    <div class="filter-container">
      <!-- Search Box -->
      <div class="search-box">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Search projects..."
          @input="handleSearch"
        >
        <i class="fas fa-search"></i>
      </div>

      <!-- Category Filter -->
      <div class="filter-tags">
        <button 
          v-for="category in categories" 
          :key="category.value"
          :class="['filter-tag', { active: selectedCategory === category.value }]"
          @click="selectCategory(category.value)"
        >
          {{ category.label }}
        </button>
      </div>

      <!-- Sort Options -->
      <div class="sort-options">
        <select v-model="sortBy" @change="handleSort">
          <option value="date-desc">Latest Projects</option>
          <option value="date-asc">Oldest Projects</option>
          <option value="capacity-desc">Capacity (High to Low)</option>
          <option value="capacity-asc">Capacity (Low to High)</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['filter-change', 'search', 'sort'])

const searchQuery = ref('')
const selectedCategory = ref('all')
const sortBy = ref('date-desc')

const categories = [
  { label: 'All Projects', value: 'all' },
  { label: 'Large Scale', value: 'large' },
  { label: 'Commercial', value: 'commercial' },
  { label: 'Residential', value: 'residential' }
]

const selectCategory = (category) => {
  selectedCategory.value = category
  emit('filter-change', category)
}

const handleSearch = () => {
  emit('search', searchQuery.value)
}

const handleSort = () => {
  emit('sort', sortBy.value)
}
</script>

<style scoped>
.project-filter {
  margin-bottom: 40px;
}

.filter-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.search-box {
  position: relative;
  flex: 1;
  min-width: 250px;
}

.search-box input {
  width: 100%;
  padding: 12px 40px 12px 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.search-box input:focus {
  border-color: #00def4;
  box-shadow: 0 0 0 3px rgba(0, 222, 244, 0.1);
  outline: none;
}

.search-box i {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
}

.filter-tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.filter-tag {
  padding: 8px 20px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  background: white;
  color: #666;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-tag:hover {
  border-color: #00def4;
  color: #00def4;
}

.filter-tag.active {
  background: #00def4;
  border-color: #00def4;
  color: white;
}

.sort-options select {
  padding: 10px 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
}

.sort-options select:focus {
  border-color: #00def4;
  outline: none;
}

@media (max-width: 768px) {
  .filter-container {
    flex-direction: column;
    align-items: stretch;
  }

  .search-box {
    width: 100%;
  }

  .filter-tags {
    justify-content: center;
  }

  .sort-options {
    width: 100%;
  }

  .sort-options select {
    width: 100%;
  }
}
</style> 