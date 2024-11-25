<template>
  <footer class="footer py-5">
    <div class="container">
      <div class="row justify-content-center text-center">
        <!-- Logo -->
        <div class="col-12 mb-4">
          <img src="@/assets/images/3784735.jpg" alt="Logo" class="footer-logo img-fluid logo-style">
        </div>

        <!-- Texto descriptivo -->
        <div class="col-12 col-md-8 col-lg-6 mb-4">
          <p class="text-white fs-5 mb-0">
            Si lo puedes imaginar, lo puedes programar.
          </p>
          <p class="text-white fs-5">
            un dia a la vez.
          </p>
        </div>

        <!-- Iconos sociales -->
        <div class="col-12 mb-4">
          <div class="d-flex justify-content-center gap-3">
            <!-- LinkedIn -->
            <a href="https://www.linkedin.com/in/juan-jose-valencia-trejos-a9b952272/" class="social-icon d-flex align-items-center justify-content-center" 
               target="_blank" rel="noopener noreferrer">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <!-- GitHub -->
            <a href="https://github.com/JuanValencia19" class="social-icon d-flex align-items-center justify-content-center" 
               target="_blank" rel="noopener noreferrer">
              <i class="fab fa-github"></i>
            </a>
            <!-- Instagram -->
            <a href="https://www.instagram.com/juanchitovt/" class="social-icon d-flex align-items-center justify-content-center" 
               target="_blank" rel="noopener noreferrer">
              <i class="fab fa-instagram"></i>
            </a>
            <!-- Facebook -->
            <a href="https://www.facebook.com/juanjose.valenciatrejos" class="social-icon d-flex align-items-center justify-content-center" 
               target="_blank" rel="noopener noreferrer">
              <i class="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>

        <!-- Copyright -->
        <div class="col-12">
          <p class="text-white-50 small mb-0">
            Creditos de la imagen: FreePik.com.
          </p>
          <p class="text-white-50 small mb-0">
            Hecho por JuanValencia © {{ new Date().getFullYear() }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter'
}
</script>

<style scoped>
.footer {
  background-color: #42b983;
  position: relative;
  overflow: hidden;
}

.logo-style {
  max-width: 250px; /* Ajusta este valor según el tamaño que desees */
  height: auto;
  opacity: 0.9; /* Ajusta la transparencia */
  transition: transform 0.3s ease;
}

.logo-style:hover {
  transform: scale(1.1); /* Efecto hover opcional */
}

/* Para asegurar que la imagen se vea bien en móviles */
@media (max-width: 576px) {
  .logo-style {
    max-width: 80px;
  }
}

.social-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
  color: white;
  text-decoration: none;
}

.social-icon i {
  font-size: 1.2rem;
}

/* Efecto de gradiente en el fondo */
.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
  pointer-events: none;
}

/* Media queries para responsividad */
@media (max-width: 768px) {
  .social-icon {
    width: 35px;
    height: 35px;
  }

  .social-icon i {
    font-size: 1rem;
  }

  .fs-5 {
    font-size: 1rem !important;
  }
}

@media (max-width: 576px) {
  .footer {
    padding-top: 2rem !important;
    padding-bottom: 2rem !important;
  }

  .social-icon {
    width: 32px;
    height: 32px;
  }

  .gap-3 {
    gap: 0.5rem !important;
  }
}

/* Animación para los iconos sociales */
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

.social-icon {
  animation: fadeInUp 0.5s ease forwards;
}

/* Retraso en la animación para cada icono */
.social-icon:nth-child(1) { animation-delay: 0.1s; }
.social-icon:nth-child(2) { animation-delay: 0.2s; }
.social-icon:nth-child(3) { animation-delay: 0.3s; }
.social-icon:nth-child(4) { animation-delay: 0.4s; }
</style>