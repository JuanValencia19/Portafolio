<template>
  <div class="skills-section min-vh-100 d-flex align-items-center py-5">
    <div class="container">
      <!-- Efectos de fondo -->
      <div class="dots"></div>
      <div class="glow"></div>

      <div class="row g-4">
        <!-- Experiencias y cursos Card -->
        <div class="col-12 col-md-4">
          <div class="skill-card p-4 bg-white rounded-4 text-center h-100">
            <div class="icon-circle mb-4 mx-auto">
              <i class="fas fa-layer-group"></i>
            </div>
            <h3 class="fw-bold mb-3">Experiencias</h3>
            <p class="text-muted mb-4">
              Me gusta mucho aprender cosas nuevas, explorar nuevos retos y superarme cada día.
            </p>

            <h5 class="text-purple mb-3">Temas en los que he trabajado:</h5>
            <p class="text-muted mb-4">UX, UI, Web, Bases de datos, Javascript</p>

            <h5 class="text-purple mb-3">Lugares en los que he trabajado:</h5>
            <ul class="list-unstyled">
              <li>Superpagos S.A.S</li>
              <li>Kygyoka</li>
              <li>Universidad Tecnologica de Pereira</li>
            </ul>
          </div>
        </div>

        <!-- Developer Card -->
        <div class="col-12 col-md-4">
          <div class="skill-card p-4 bg-white rounded-4 text-center h-100">
            <div class="icon-circle mb-4 mx-auto">
              <i class="fas fa-code"></i>
            </div>
            <h3 class="fw-bold mb-3">Developer</h3>
            <p class="text-muted mb-4">
              Me gusta pensar en soluciones a problemas, y crear cosas nuevas.
            </p>

            <h5 class="text-purple mb-3">Mis conocimientos:</h5>
            <p class="text-muted mb-4">HTML, Javascript, Python, CSS, Git, SQL</p>

            <h5 class="text-purple mb-3">Dev Tools:</h5>
            <ul class="list-unstyled">
              <li>Vue js</li>
              <li>MySQL</li>
              <li>Bootstrap</li>
              <li>Github</li>
            </ul>
          </div>
        </div>

        <!-- Mentor Card -->
        <div class="col-12 col-md-4">
          <div class="skill-card p-4 bg-white rounded-4 text-center h-100">
            <div class="icon-circle mb-4 mx-auto">
              <i class="fas fa-book-reader"></i>
            </div>
            <h3 class="fw-bold mb-3">Hobbies</h3>
            <p class="text-muted mb-4">
              Una parte importante de mi vida son las cosas que me gustan hacer en mi tiempo libre. Como jugar videojuegos, el futbol, y escuchar musica.
            </p>

            <h5 class="text-purple mb-3">Pasatiempos favoritos:</h5>
            <p class="text-muted mb-4">futbol, socializar, videojuegos, escuchar musica, programar, leer</p>

            <h5 class="text-purple mb-3">Habilidades:</h5>
            <ul class="list-unstyled">
              <li>Trabajo en equipo</li>
              <li>Pensamiento critico</li>
              <li>Empatia</li>
              <li>Adaptabilidad</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsSection'
}
</script>

<style scoped>
.skills-section {
  background-color: #0a061f;
  position: relative;
  overflow: hidden;
}

/* Efectos de fondo */
.dots {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle, #ffffff 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.1;
  pointer-events: none;
}

.glow {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: rgba(66, 185, 131, 0.05);
  filter: blur(80px);
  right: -100px;
  top: -100px;
  pointer-events: none;
}

.skill-card {
  transition: transform 0.3s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.skill-card:hover {
  transform: translateY(-5px);
}

.icon-circle {
  width: 80px;
  height: 80px;
  background-color: #42b983;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-circle i {
  font-size: 2rem;
  color: white;
}

.text-purple {
  color: #8B5CF6;
}

/* Estilos para las listas */
.list-unstyled li {
  margin-bottom: 0.5rem;
  color: #6c757d;
}

/* Media queries */
@media (max-width: 768px) {
  .skills-section {
    padding: 3rem 0;
  }

  .skill-card {
    margin-bottom: 2rem;
  }
}

/* Animaciones */
.skill-card {
  animation: fadeInUp 0.5s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Retraso en la animación para cada tarjeta */
.col-md-4:nth-child(1) .skill-card { animation-delay: 0.1s; }
.col-md-4:nth-child(2) .skill-card { animation-delay: 0.3s; }
.col-md-4:nth-child(3) .skill-card { animation-delay: 0.5s; }
</style>