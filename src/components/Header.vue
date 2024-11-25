<template>
  <nav class="navbar navbar-expand-lg bg-success navbar-dark">
    <div class="container">
      <!-- Logo o Nombre -->
      <a class="navbar-brand" href="/">Mi Portafolio</a>
      
      <!-- Botón hamburguesa para móvil -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <!-- Menú de navegación -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Sobre Mí</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/projects">Proyectos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/skills">Habilidades</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contacto</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'SiteHeader'
}
</script>

<style scoped>
/* Estilos personalizados para los enlaces activos */
.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}

/* Si deseas personalizar el tono de verde */
.bg-success {
  background-color: #42b983 !important; /* Mantiene tu color verde original */
}

/* Ajustes adicionales para mejorar la apariencia */
.nav-link {
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: rgba(255, 255, 255, 0.8) !important;
}

/* Ajustes para dispositivos móviles */
@media (max-width: 991.98px) {
  .navbar-nav {
    padding: 1rem 0;
  }
  
  .nav-link {
    padding: 0.5rem 0;
  }
}
</style>