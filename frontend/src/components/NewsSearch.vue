<template>
  <div class="news-search">
    <div class="search-container">
      <!-- 搜索框 -->
      <div class="search-input">
        <el-input
          v-model="searchQuery"
          placeholder="搜索新闻..."
          prefix-icon="el-icon-search"
          clearable
          @input="handleSearch"
        >
          <template #prefix>
            <i class="fas fa-search"></i>
          </template>
        </el-input>
      </div>

      <!-- 分类和时间范围选择 -->
      <div class="filters">
        <el-select
          v-model="selectedCategory"
          placeholder="选择分类"
          @change="handleCategoryChange"
        >
          <el-option label="全部分类" value="all" />
          <el-option label="行业新闻" value="Industry News" />
          <el-option label="技术" value="Technology" />
          <el-option label="政策" value="Policy" />
        </el-select>

        <el-select
          v-model="selectedTimeRange"
          placeholder="时间范围"
          @change="handleTimeRangeChange"
        >
          <el-option label="全部时间" value="all" />
          <el-option label="最近一周" value="week" />
          <el-option label="最近一月" value="month" />
          <el-option label="最近一年" value="year" />
        </el-select>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchQuery = ref('')
const selectedCategory = ref('all')
const selectedTimeRange = ref('all')

const emit = defineEmits(['search', 'category-change', 'time-range-change'])

const handleSearch = () => {
  emit('search', searchQuery.value)
}

const handleCategoryChange = (value) => {
  emit('category-change', value)
}

const handleTimeRangeChange = (value) => {
  emit('time-range-change', value)
}
</script>

<style scoped>
.news-search {
  margin-bottom: 2rem;
}

.search-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.search-input {
  flex: 1;
  min-width: 300px;
}

.filters {
  display: flex;
  gap: 1rem;
}

.filters .el-select {
  width: 150px;
}

@media (max-width: 768px) {
  .search-container {
    flex-direction: column;
  }

  .search-input,
  .filters {
    width: 100%;
  }

  .filters .el-select {
    width: 100%;
  }
}
</style> 