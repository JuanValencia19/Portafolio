<template>
  <div class="about-section bg-dark text-white">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-8">
          <h1 class="display-1 fw-bold mb-4">Acerca de mi</h1>
          
          <div class="about-content pe-lg-4">
            <p class="lead mb-4">
              Soy un desarrollador jr comprometido con la creación de soluciones digitales completas e innovadoras, combinando diseño atractivo con funcionalidades robustas y eficientes. Mi pasión por el desarrollo me lleva a especializarme tanto en el frontend, diseñando interfaces intuitivas y centradas en el usuario, como en el backend, asegurando que las aplicaciones sean escalables y de alto rendimiento.

Trabajo con tecnologías como Vue.js, JavaScript, MongoDB y Git, lo que me permite abordar proyectos con una perspectiva integral, desde la experiencia del usuario hasta la lógica del sistema. Además, estoy en constante aprendizaje, explorando nuevas herramientas y frameworks que me permitan mantenerme actualizado en este campo en constante evolución.

Mi objetivo es contribuir a proyectos que no solo cumplan con los requerimientos técnicos, sino que también generen un impacto positivo en los usuarios y las empresas. Estoy siempre listo para enfrentar nuevos retos y colaborar con equipos multidisciplinarios para crear soluciones modernas y funcionales.
            </p>
            
            <a href="/Curriculum.pdf" 
               download="JuanJoseValencia_CV.pdf"
               class="btn btn-outline-light btn-lg mt-3">
              <i class="fas fa-download me-2"></i> 
              Curriculum
            </a>
          </div>
        </div>
        
        <div class="col-lg-4 d-none d-lg-block">
          <div class="profile-image-container">
            <img src="../assets/images/yo2.jpg" alt="Foto de perfil" class="img-fluid rounded-circle shadow">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%);
}

.profile-image-container {
  position: relative;
  padding: 1rem;
}

.profile-image-container::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 2px solid rgba(255,255,255,0.1);
  border-radius: 50%;
  transform: scale(1.1);
}

/* Animación hover para el botón */
.btn-outline-light:hover {
  background-color: rgba(255,255,255,0.1);
  transform: translateY(-2px);
  transition: all 0.3s ease;
}

/* Asegura que el texto sea responsivo */
@media (max-width: 768px) {
  .display-1 {
    font-size: 3rem;
  }
  
  .lead {
    font-size: 1.1rem;
  }
}
</style>