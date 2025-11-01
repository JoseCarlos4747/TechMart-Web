// login.js - Sistema de autenticación simple

// Esperar a que cargue el DOM completamente
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulariodelogin');
    
    if (formulario) {
        // Evento cuando se envía el formulario
        formulario.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita recargar la página
            
            // Obtener valores de los campos
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const mensaje = document.getElementById('mensaje');
            const inputEmail = document.getElementById('email');
            const inputPassword = document.getElementById('password');
            
            // Limpiar clases de error previas
            inputEmail.classList.remove('error');
            inputPassword.classList.remove('error');
            mensaje.classList.remove('mostrar');
            
            // Validar que no estén vacíos
            if (!email || !password) {
                mostrarError(mensaje, '⚠️ Por favor completa todos los campos');
                return;
            }
            
            // Validar formato de email con expresión regular
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regexEmail.test(email)) {
                mostrarError(mensaje, '⚠️ Por favor ingresa un correo válido');
                inputEmail.classList.add('error');
                return;
            }
            
            // Validar longitud mínima de contraseña
            if (password.length < 6) {
                mostrarError(mensaje, '⚠️ La contraseña debe tener al menos 6 caracteres');
                inputPassword.classList.add('error');
                return;
            }
            
            // Guardar datos del usuario en localStorage
            localStorage.setItem('usuarioLogueado', 'true');
            localStorage.setItem('emailUser', email);
            localStorage.setItem('nombreUsuario', email.split('@')[0]); // Extraer nombre del email
            
            // Mostrar mensaje de éxito
            mensaje.style.color = '#4caf50';
            mensaje.textContent = '✅ ¡Inicio de sesión exitoso!';
            mensaje.classList.add('mostrar');
            
            // Redirigir a la página de productos después de 1 segundo
            setTimeout(function() {
                window.location.href = 'productos.html';
            }, 1000);
        });
    }
});

// Función auxiliar para mostrar mensajes de error
function mostrarError(elementoMensaje, textoError) {
    elementoMensaje.style.color = '#d32f2f';
    elementoMensaje.textContent = textoError;
    elementoMensaje.classList.add('mostrar');
}