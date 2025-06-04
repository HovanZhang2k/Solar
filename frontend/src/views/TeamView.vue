<template>
  <div class="team-view">
    <!-- 页面标题区域 -->
    <section class="page-header">
      <div class="container">
        <h1>Our Expert Team</h1>
        <p>Meet the professionals driving innovation in clean energy solutions</p>
      </div>
    </section>

    <!-- 团队介绍 -->
    <section class="team-intro section-padding">
      <div class="container">
        <div class="team-grid">
          <div v-for="member in teamMembers" :key="member.id" class="team-card">
            <div class="member-image">
              <img :src="member.image" :alt="member.name">
              <div class="member-overlay">
                <div class="member-social">
                  <a :href="member.linkedin" target="_blank" title="LinkedIn">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a :href="member.email" title="Email">
                    <i class="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="member-info">
              <h3>{{ member.name }}</h3>
              <span class="position">{{ member.position }}</span>
              <p class="expertise">{{ member.expertise }}</p>
              <div class="member-details">
                <p>{{ member.description }}</p>
                <ul class="achievements">
                  <li v-for="(achievement, index) in member.achievements" :key="index">
                    {{ achievement }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 团队优势 -->
    <section class="team-advantages section-padding">
      <div class="container">
        <h2>Why Choose Our Team</h2>
        <div class="advantages-grid">
          <div class="advantage-card">
            <i class="fas fa-certificate"></i>
            <h3>Certified Professionals</h3>
            <p>All team members hold relevant certifications and licenses</p>
          </div>
          <div class="advantage-card">
            <i class="fas fa-clock"></i>
            <h3>Extensive Experience</h3>
            <p>Combined experience of over 50 years in the industry</p>
          </div>
          <div class="advantage-card">
            <i class="fas fa-handshake"></i>
            <h3>Customer Focus</h3>
            <p>Dedicated to providing exceptional service and support</p>
          </div>
          <div class="advantage-card">
            <i class="fas fa-lightbulb"></i>
            <h3>Innovation Driven</h3>
            <p>Continuously exploring new technologies and solutions</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 加入我们 -->
    <section class="join-us section-padding">
      <div class="container">
        <div class="join-content">
          <h2>Join Our Team</h2>
          <p>We're always looking for talented individuals who share our passion for clean energy</p>
          <router-link to="/contact" class="btn btn-primary">Contact Us</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const teamMembers = ref([
  {
    id: 1,
    name: 'Allen Zhang',
    position: 'Electrical Engineer',
    expertise: 'Cross-state Application Specialist',
    image: '@/assets/images/logo.png',
    linkedin: '#',
    email: 'mailto:allen@panpacificenergy.com',
    description: 'Allen brings extensive experience in electrical engineering and solar system design. He specializes in navigating complex regulatory requirements across different states.',
    achievements: [
      'Certified Electrical Engineer',
      '10+ years of industry experience',
      'Expert in cross-state solar applications',
      'Led 100+ successful commercial projects'
    ]
  },
  {
    id: 2,
    name: 'Minghao Wang',
    position: 'Civil Engineer',
    expertise: 'Large-scale Solar Systems',
    image: '@/assets/images/logo.png',
    linkedin: '#',
    email: 'mailto:minghao@panpacificenergy.com',
    description: 'Minghao specializes in structural engineering for large-scale solar installations. His expertise ensures the safe and efficient implementation of major solar projects.',
    achievements: [
      'Professional Civil Engineer',
      'Specialized in solar farm structures',
      '15+ years of engineering experience',
      'Multiple award-winning project designs'
    ]
  },
  {
    id: 3,
    name: 'Simon Chen',
    position: 'Senior Electrician',
    expertise: 'Residential & Commercial Installations',
    image: '@/assets/images/logo.png',
    linkedin: '#',
    email: 'mailto:simon@panpacificenergy.com',
    description: 'Simon is our senior electrician with extensive experience in both residential and commercial electrical installations. He leads our installation teams with expertise and precision.',
    achievements: [
      'Licensed Master Electrician',
      '12+ years of field experience',
      'Expert in complex electrical systems',
      'Certified solar installation specialist'
    ]
  },
  {
    id: 4,
    name: 'Hongchao Li',
    position: 'Solar Installation Specialist',
    expertise: 'Professional Solar Installer',
    image: '@/assets/images/logo.png',
    linkedin: '#',
    email: 'mailto:hongchao@panpacificenergy.com',
    description: 'Hongchao is our certified solar installation specialist with over 8 years of hands-on experience. He ensures the highest quality standards in all our installations.',
    achievements: [
      'Certified Solar Installer',
      '8+ years of installation experience',
      'Expert in advanced solar technologies',
      'Specialized in residential systems'
    ]
  }
])
</script>

<style scoped>
.team-view {
  padding-top: 80px; /* 为固定导航栏留出空间 */
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

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.team-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.team-card:hover {
  transform: translateY(-10px);
}

.member-image {
  position: relative;
  height: 300px;
  overflow: hidden;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.member-image img {
  width: 80%;
  height: 80%;
  object-fit: contain;
  transition: transform 0.3s ease;
  padding: 20px;
}

.team-card:hover .member-image img {
  transform: scale(1.05);
}

.member-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(5, 50, 171, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.team-card:hover .member-overlay {
  opacity: 1;
}

.member-social {
  display: flex;
  gap: 20px;
}

.member-social a {
  width: 45px;
  height: 45px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0532ab;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.member-social a:hover {
  background: #00def4;
  color: white;
  transform: translateY(-5px);
}

.member-info {
  padding: 25px;
}

.member-info h3 {
  font-size: 1.5rem;
  color: #2d428d;
  margin-bottom: 5px;
}

.position {
  color: #00def4;
  font-weight: 600;
  display: block;
  margin-bottom: 15px;
}

.expertise {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.member-details {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.achievements {
  list-style: none;
  margin-top: 15px;
}

.achievements li {
  padding-left: 20px;
  position: relative;
  margin-bottom: 8px;
  font-size: 0.9rem;
  color: #666;
}

.achievements li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #00def4;
}

.team-advantages {
  background: #f5f5f5;
}

.team-advantages h2 {
  text-align: center;
  margin-bottom: 50px;
  color: #2d428d;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.advantage-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.advantage-card:hover {
  transform: translateY(-10px);
}

.advantage-card i {
  font-size: 2.5rem;
  color: #00def4;
  margin-bottom: 20px;
}

.advantage-card h3 {
  color: #2d428d;
  margin-bottom: 15px;
}

.join-us {
  background: linear-gradient(135deg, #2d428d, #0532ab);
  color: white;
  text-align: center;
}

.join-content h2 {
  color: white;
  margin-bottom: 20px;
}

.btn-primary {
  display: inline-block;
  padding: 15px 40px;
  background: #00def4;
  color: #2d428d;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  margin-top: 30px;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: white;
  transform: translateY(-5px);
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2.5rem;
  }
  
  .team-grid {
    grid-template-columns: 1fr;
  }
  
  .advantages-grid {
    grid-template-columns: 1fr;
  }
}
</style> 