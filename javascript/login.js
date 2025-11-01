// login.js - Sistema de autenticación simple

// Cuando se envía el formulario
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulariodelogin');
    
    if (formulario) {
        formulario.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita que recargue la página
            
            // Obtener valores
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const mensaje = document.getElementById('mensaje');
            
            // Validar que no estén vacíos
            if (!email || !password) {
                mensaje.textContent = '⚠️ Por favor completa todos los campos';
                return;
            }
            
            // Validar longitud de contraseña
            if (password.length < 6) {
                mensaje.textContent = '⚠️ La contraseña debe tener al menos 6 caracteres';
                return;
            }
            
            // Guardar en localStorage
            localStorage.setItem('usuarioLogueado', 'true');
            localStorage.setItem('emailUser', email);
            localStorage.setItem('nombreUsuario', email.split('@')[0]);
            
            // Mostrar mensaje de éxito
            mensaje.style.color = '#4caf50';
            mensaje.textContent = '✅ ¡Inicio de sesión exitoso!';
            
            // Redirigir después de 1 segundo
            setTimeout(function() {
                window.location.href = 'productos.html';
            }, 1000);
        });
    }
});