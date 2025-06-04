<template>
  <div class="contact-view">
    <!-- 页面标题区域 -->
    <section class="page-header" style="background: linear-gradient(rgba(5, 50, 171, 0.9), rgba(5, 50, 171, 0.9));">
      <div class="container">
        <h1>Contact Us</h1>
        <p>Get in touch with our team for any inquiries about our services or investment opportunities</p>
      </div>
    </section>

    <!-- 联系信息卡片 -->
    <section class="contact-cards section-padding">
      <div class="container">
        <div class="cards-grid">
          <div class="contact-card">
            <i class="fas fa-map-marker-alt"></i>
            <h3>Our Location</h3>
            <p>123 Energy Street</p>
            <p>Sydney, NSW 2000</p>
            <p>Australia</p>
          </div>
          <div class="contact-card">
            <i class="fas fa-phone"></i>
            <h3>Phone Number</h3>
            <p>+61 2 9876 5432</p>
            <p>Monday - Friday</p>
            <p>8:00 AM - 6:00 PM</p>
          </div>
          <div class="contact-card">
            <i class="fas fa-envelope"></i>
            <h3>Email Address</h3>
            <p>info@panpacificenergy.com</p>
            <p>invest@panpacificenergy.com</p>
            <p>support@panpacificenergy.com</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系表单和地图 -->
    <section class="contact-main section-padding">
      <div class="container">
        <div class="contact-grid">
          <!-- 联系表单 -->
          <div class="contact-form">
            <h2>Send Us a Message</h2>
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  required
                  placeholder="Enter your full name"
                >
              </div>
              
              <div class="form-group">
                <label for="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  required
                  placeholder="Enter your email address"
                >
              </div>
              
              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="form.phone"
                  placeholder="Enter your phone number"
                >
              </div>
              
              <div class="form-group">
                <label for="subject">Subject</label>
                <select id="subject" v-model="form.subject" required>
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="investment">Investment Opportunity</option>
                  <option value="service">Service Request</option>
                  <option value="support">Technical Support</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="message">Message</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  required
                  rows="5"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              
              <button type="submit" class="btn-submit" :disabled="isSubmitting">
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>

          <!-- 地图 -->
          <div class="contact-map">
            <h2>Find Us</h2>
            <div class="map-container">
              <img src="@/assets/images/logo.png" alt="Office Location Map" class="map-image">
            </div>
            <div class="business-hours">
              <h3>Business Hours</h3>
              <ul>
                <li>
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </li>
                <li>
                  <span>Saturday:</span>
                  <span>9:00 AM - 2:00 PM</span>
                </li>
                <li>
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 常见问题 -->
    <section class="faq-section section-padding">
      <div class="container">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-grid">
          <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
            <div class="faq-question" @click="toggleFaq(index)">
              <h3>{{ faq.question }}</h3>
              <i :class="['fas', faq.isOpen ? 'fa-chevron-up' : 'fa-chevron-down']"></i>
            </div>
            <div class="faq-answer" :class="{ 'open': faq.isOpen }">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// 表单数据
const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

// 处理表单提交
const handleSubmit = async () => {
  isSubmitting.value = true
  try {
    // 这里添加表单提交逻辑
    await new Promise(resolve => setTimeout(resolve, 1000)) // 模拟API调用
    alert('Thank you for your message. We will get back to you soon!')
    // 重置表单
    Object.keys(form).forEach(key => form[key] = '')
  } catch (error) {
    alert('Sorry, there was an error sending your message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

// FAQ数据
const faqs = ref([
  {
    question: 'What areas do you service?',
    answer: 'We currently provide services across major cities in Australia, including Sydney, Melbourne, Brisbane, Perth, and Adelaide. We are expanding our coverage to more regions.',
    isOpen: false
  },
  {
    question: 'How long does a typical solar installation take?',
    answer: 'A typical residential solar installation takes 1-2 days, while commercial installations may take 1-2 weeks depending on the system size and complexity.',
    isOpen: false
  },
  {
    question: 'What maintenance is required for solar systems?',
    answer: 'Solar systems require minimal maintenance. We recommend annual inspections and cleaning to ensure optimal performance. Our maintenance packages include regular check-ups and cleaning services.',
    isOpen: false
  },
  {
    question: 'What investment opportunities are available?',
    answer: 'We offer various investment opportunities in our growing clean energy projects. Please contact our investment team for detailed information about current opportunities.',
    isOpen: false
  }
])

// 切换FAQ展开/收起
const toggleFaq = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}
</script>

<style scoped>
.contact-view {
  padding-top: 80px;
}

.page-header {
  background: linear-gradient(rgba(5, 50, 171, 0.9), rgba(5, 50, 171, 0.9));
  color: white;
  padding: 100px 0 60px;
  text-align: center;
}

.page-header h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: white;
}

.page-header p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.section-padding {
  padding: 80px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 联系信息卡片样式 */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: -50px;
}

.contact-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-10px);
}

.contact-card i {
  font-size: 2.5rem;
  color: #00def4;
  margin-bottom: 20px;
}

.contact-card h3 {
  color: #2d428d;
  margin-bottom: 15px;
}

.contact-card p {
  color: #666;
  margin-bottom: 5px;
}

/* 联系表单和地图样式 */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-top: 50px;
}

.contact-form {
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.contact-form h2 {
  color: #2d428d;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #2d428d;
  font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #00def4;
  outline: none;
}

.btn-submit {
  background: #2d428d;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.btn-submit:hover:not(:disabled) {
  background: #0532ab;
  transform: translateY(-2px);
}

.btn-submit:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.contact-map {
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.contact-map h2 {
  color: #2d428d;
  margin-bottom: 30px;
}

.map-container {
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 30px;
}

.map-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
}

.business-hours h3 {
  color: #2d428d;
  margin-bottom: 20px;
}

.business-hours ul {
  list-style: none;
}

.business-hours li {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.business-hours li:last-child {
  border-bottom: none;
}

/* FAQ部分样式 */
.faq-section {
  background: #f5f5f5;
}

.faq-section h2 {
  text-align: center;
  color: #2d428d;
  margin-bottom: 50px;
}

.faq-grid {
  display: grid;
  gap: 20px;
}

.faq-item {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.faq-question {
  padding: 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;
}

.faq-question:hover {
  background-color: #f8f8f8;
}

.faq-question h3 {
  color: #2d428d;
  font-size: 1.1rem;
  margin: 0;
}

.faq-answer {
  padding: 0 20px;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-answer.open {
  padding: 0 20px 20px;
  max-height: 200px;
}

.faq-answer p {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 992px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-map {
    order: -1;
  }
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2.5rem;
  }
  
  .cards-grid {
    margin-top: -30px;
  }
  
  .contact-form,
  .contact-map {
    padding: 30px;
  }
}
</style> 