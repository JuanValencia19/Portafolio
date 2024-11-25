<template>
  <nav class="navbar navbar-expand-lg bg-success navbar-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">Mi Portafolio</router-link>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/home">Inicio</router-link>
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

.nav-link {
  color: white !important;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
}

.nav-link:hover {
  opacity: 0.8;
}

.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}

.navbar-brand {
  color: white !important;
  font-weight: bold;
}

@media (max-width: 991.98px) {
  .navbar-nav {
    padding: 1rem 0;
  }
  
  .nav-link {
    padding: 0.5rem 0;
  }
}
</style>