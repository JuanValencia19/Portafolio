<template>
  <div class="home-page">
    <div class="container">
      <!-- Efecto de puntos y brillo -->
      <div class="dots"></div>
      <div class="glow"></div>

      <div class="row min-vh-100 align-items-center">
        <!-- Columna de texto -->
        <div class="col-12 col-lg-6 order-2 order-lg-1 mt-4 mt-lg-0">
          <div class="content-wrapper">
            <h1 class="display-1 text-white mb-4 animate__animated animate__fadeIn">
              {{ title }}
            </h1>
            <p class="text-light lead mb-5 animate__animated animate__fadeIn animate__delay-1s">
              {{ description }}
            </p>
            <!-- Botones de acción -->
            <div class="d-flex flex-wrap gap-3 animate__animated animate__fadeIn animate__delay-2s">
              <button 
                @click="$router.push({ name: 'Projects' })"
                class="btn btn-primary btn-lg">
                Ver Proyectos
              </button>

              <button 
                @click="$router.push({ name: 'Contact' })"
                class="btn btn-outline-light btn-lg">
                Contactar
              </button>
            </div>
          </div>
        </div>

        <!-- Columna de imagen -->
        <div class="col-12 col-lg-6 order-1 order-lg-2 text-center">
          <img 
            :src="logoUrl" 
            :alt="imageAlt" 
            class="img-fluid floating-image animate__animated animate__fadeIn"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// Datos reactivos
const title = ref('Bienvenido.')
const description = ref('Hola, soy Juan José Valencia, desarrollador web jr apasionado por crear y aportar a soluciones completas que combinan interfaces atractivas con funcionalidades robustas. Disfruto trabajando en el desarrollo de aplicaciones modernas, tanto en el frontend para ofrecer experiencias de usuario intuitivas, como en el backend para asegurar sistemas eficientes y escalables.')

// Importar imagen
const logoUrl = new URL('../assets/images/3929637.jpg', import.meta.url).href
const imageAlt = ref('Laptop coding illustration')

</script>

<style scoped>
.home-page {
  background-color: #0a061f;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

/* Estilos del contenido */
.content-wrapper {
  padding: 2rem 0;
}

h1 {
  font-weight: 300;
  letter-spacing: -2px;
}

@media (max-width: 768px) {
  h1 {
    font-size: 3.5rem;
  }
}

.lead {
  font-size: 1.25rem;
  line-height: 1.8;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .lead {
    font-size: 1.1rem;
  }
}

/* Animación de la imagen */
.floating-image {
  max-width: 90%;
  height: auto;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

/* Efectos de fondo */
.home-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at top right, rgba(66, 185, 131, 0.1) 0%, transparent 60%);
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

.dots {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle, #ffffff 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.1;
  pointer-events: none;
}

/* Estilos de botones personalizados */
.btn-primary {
  background-color: #42b983;
  border-color: #42b983;
  padding: 0.8rem 2rem;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #3aa876;
  border-color: #3aa876;
  transform: translateY(-2px);
}

.btn-outline-light {
  padding: 0.8rem 2rem;
  transition: all 0.3s ease;
}

.btn-outline-light:hover {
  transform: translateY(-2px);
}

/* Media queries adicionales */
@media (max-width: 991.98px) {
  .content-wrapper {
    text-align: center;
    padding: 1rem;
  }

  .d-flex.gap-3 {
    justify-content: center;
  }

  .floating-image {
    max-width: 80%;
    margin-bottom: 2rem;
  }
}

@media (max-width: 575.98px) {
  h1 {
    font-size: 3rem;
  }

  .lead {
    font-size: 1rem;
  }

  .btn-lg {
    padding: 0.6rem 1.5rem;
    font-size: 1rem;
  }
}

.btn-primary, .btn-outline-light {
  z-index: 10; /* Asegúrate de que los botones estén en la parte superior */
}
</style>