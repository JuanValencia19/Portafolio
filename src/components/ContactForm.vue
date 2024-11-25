<template>
  <div class="contact-section min-vh-100 d-flex align-items-center">
    <div class="container">
      <div class="dots"></div>
      <div class="glow"></div>

      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6">
          <h1 class="display-2 text-white mb-4 animate__animated animate__fadeIn">
            Contacto.
          </h1>

          <p class="text-light lead mb-5 animate__animated animate__fadeIn animate__delay-1s">
            Ponte en contacto conmigo llenando el formulario para enviar un mensaje a mi correo electrónico:
            <a href="mailto:your.email@example.com" class="text-primary">juanjovt16@gmail.com</a>
          </p>

          <form @submit.prevent="handleSubmit" class="contact-form animate__animated animate__fadeIn animate__delay-2s">
            <!-- Nombre -->
            <div class="form-group mb-4">
              <input 
                type="text" 
                class="form-control form-control-lg bg-transparent text-white" 
                placeholder="Nombre"
                v-model="formData.name"
                required
                :class="{ 'is-invalid': errors.name }"
              >
              <div class="invalid-feedback" v-if="errors.name">
                {{ errors.name }}
              </div>
            </div>

            <!-- Email -->
            <div class="form-group mb-4">
              <input 
                type="email" 
                class="form-control form-control-lg bg-transparent text-white" 
                placeholder="Email o asunto"
                v-model="formData.email"
                required
                :class="{ 'is-invalid': errors.email }"
              >
              <div class="invalid-feedback" v-if="errors.email">
                {{ errors.email }}
              </div>
            </div>

            <!-- Mensaje -->
            <div class="form-group mb-4">
              <textarea 
                class="form-control form-control-lg bg-transparent text-white" 
                rows="5" 
                placeholder="Mensaje"
                v-model="formData.message"
                required
                :class="{ 'is-invalid': errors.message }"
              ></textarea>
              <div class="invalid-feedback" v-if="errors.message">
                {{ errors.message }}
              </div>
            </div>

            <button 
              type="submit" 
              class="btn btn-primary btn-lg px-5"
              :disabled="isSubmitting"
            >
              {{ isSubmitting ? 'Enviando...' : 'Enviar Mensaje' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useToast } from 'vue-toastification' // Asegúrate de instalar este paquete

// Estado del formulario
const formData = reactive({
  name: '',
  email: '',
  message: ''
})

// Estado de errores y envío
const errors = reactive({
  name: '',
  email: '',
  message: ''
})
const isSubmitting = ref(false)
const toast = useToast()

// Validaciones
const validateForm = () => {
  let isValid = true
  errors.name = ''
  errors.email = ''
  errors.message = ''

  if (!formData.name.trim()) {
    errors.name = 'Name is required'
    isValid = false
  }

  if (!formData.email.trim()) {
    errors.email = 'Email is required'
    isValid = false
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email'
    isValid = false
  }

  if (!formData.message.trim()) {
    errors.message = 'Message is required'
    isValid = false
  }

  return isValid
}

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

// Manejo del envío
const handleSubmit = async () => {
  if (!validateForm()) return

  try {
    isSubmitting.value = true
    
    // Aquí iría tu lógica de envío a una API
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulación de envío
    
    // Ejemplo de envío a una API:
    // const response = await fetch('tu-api-endpoint', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData)
    // })
    
    // if (!response.ok) throw new Error('Failed to send message')

    toast.success('Message sent successfully!')
    
    // Limpiar el formulario
    formData.name = ''
    formData.email = ''
    formData.message = ''
    
  } catch (error) {
    console.error('Error sending message:', error)
    toast.error('Failed to send message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-section {
  background-color: #0a061f;
  position: relative;
  overflow: hidden;
  padding: 4rem 0;
}

/* Estilos para los inputs */
.form-control {
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0;
  padding: 1rem 0;
  color: white !important;
}

.form-control:focus {
  box-shadow: none;
  background-color: transparent;
  border-color: #42b983;
}

.form-control::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

/* Estilos para el botón */
.btn-primary {
  background-color: #42b983;
  border-color: #42b983;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #3aa876;
  border-color: #3aa876;
  transform: translateY(-2px);
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

/* Enlaces */
a.text-primary {
  color: #42b983 !important;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

a.text-primary:hover {
  opacity: 0.8;
}

/* Media queries */
@media (max-width: 768px) {
  .contact-section {
    padding: 2rem 0;
  }

  h1 {
    font-size: 3rem;
  }

  .form-control-lg {
    font-size: 1rem;
  }
}

/* Animación de entrada para el formulario */
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

.contact-form {
  animation: fadeInUp 0.5s ease forwards;
}

/* Agregar estilos para estados de validación */
.form-control.is-invalid {
  border-color: #dc3545;
  background-image: none;
}

.invalid-feedback {
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

/* Estilo para el botón deshabilitado */
.btn:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}
</style>