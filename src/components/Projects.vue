<template>
  <div class="projects-section container-fluid dark-theme">
    <div class="container">
      <h2 class="text-center mb-5 text-light">Mis Proyectos</h2>
      <div class="row g-4">
        <!-- Proyecto 1 -->
        <div class="col-md-6 col-lg-4">
          <div class="project-card h-100" @mouseover="addShadow" @mouseout="removeShadow">
            <img src="../assets/logo.png" class="card-img-top" alt="Proyecto 1">
            <div class="card-body">
              <h3 class="card-title text-light">Sistema de Gestión</h3>
              <p class="card-text">Aplicación web para gestionar inventarios y ventas con Laravel y Vue.js</p>
              <div class="project-links">
                <a href="#" class="btn btn-success me-2" target="_blank">Visitar</a>
                <a href="#" class="btn btn-outline-light" target="_blank">Github</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Proyecto 2 -->
        <div class="col-md-6 col-lg-4">
          <div class="project-card h-100" @mouseover="addShadow" @mouseout="removeShadow">
            <img src="../assets/images/python2.png" class="card-img-top" alt="Proyecto 2">
            <div class="card-body">
              <h3 class="card-title text-light">App Móvil</h3>
              <p class="card-text">Aplicación móvil para seguimiento de ejercicios con React Native</p>
              <div class="project-links">
                <a href="#" class="btn btn-success me-2" target="_blank">Visitar</a>
                <a href="#" class="btn btn-outline-light" target="_blank">Github</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Proyecto 3 -->
        <div class="col-md-6 col-lg-4">
          <div class="project-card h-100" @mouseover="addShadow" @mouseout="removeShadow">
            <img src="../assets/images/mysql.png" class="card-img-top" alt="Proyecto 3">
            <div class="card-body">
              <h3 class="card-title text-light">E-commerce</h3>
              <p class="card-text">Tienda en línea con carrito de compras usando MERN Stack</p>
              <div class="project-links">
                <a href="#" class="btn btn-success me-2" target="_blank">Visitar</a>
                <a href="#" class="btn btn-outline-light" target="_blank">Github</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsSection',
  methods: {
    addShadow(event) {
      event.currentTarget.style.boxShadow = '0 0 15px rgba(40, 167, 69, 0.5)';
      event.currentTarget.style.transform = 'translateY(-5px)';
    },
    removeShadow(event) {
      event.currentTarget.style.boxShadow = 'none';
      event.currentTarget.style.transform = 'translateY(0)';
    }
  }
}
</script>

<style scoped>
.dark-theme {
  background-color: #121212;
  color: #ffffff;
  min-height: 100vh;
}

.projects-section {
  padding: 4rem 0;
}

.project-card {
  background-color: #1e1e1e;
  border: 1px solid #333;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.card-text {
  color: #b3b3b3;
  margin-bottom: 1.5rem;
}

.project-links {
  display: flex;
  gap: 0.5rem;
}

.btn-success {
  background-color: #28a745;
  border-color: #28a745;
}

.btn-success:hover {
  background-color: #218838;
  border-color: #1e7e34;
}

.btn-outline-light:hover {
  background-color: #333;
}
</style>