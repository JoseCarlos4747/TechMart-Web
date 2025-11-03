// ================ Obtener el formulario por su ID ================
var formulario = document.getElementById('formulariodelogin');

// ================ Cuando se envíe el formulario ================
formulario.onsubmit = function() {
    
// ================ Obtener los valores que escribió el usuario ================
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var mensaje = document.getElementById('mensaje');
    
// ================ Limpiar mensaje anterior ================
    mensaje.textContent = '';
    
// ================ Validar que no estén vacíos ================
    if (email == '' || password == '') {
        mensaje.style.color = '#d32f2f';
        mensaje.textContent = 'Por favor completa todos los campos';
        return false; // Evita que se envíe el formulario
    }
    
// ================ Validar que el email tenga @ ================
    if (email.indexOf('@') == -1) {  //no existe
        mensaje.style.color = '#d32f2f';
        mensaje.textContent = 'El correo debe contener @';
        return false;
    }
    
// ================ Validar que la contraseña tenga al menos 8 caracteres ================
    if (password.length < 8) {
        mensaje.style.color = '#d32f2f';
        mensaje.textContent = 'La contraseña debe tener mínimo 8 caracteres';
        return false;
    }
    
// ================ Si todo está bien, guardar datos ================
    localStorage.setItem('usuarioLogueado', 'true');
    localStorage.setItem('emailUser', email);
    
// ================ Mostrar mensaje de éxito ================
    mensaje.style.color = '#4caf50';
    mensaje.textContent = '¡Inicio de sesión exitoso!';
    
// ================ Redirigir a productos después de 1 segundo ================
    setTimeout(function() {
        window.location.href = '../html/productos.html';
    }, 1000);
    
    return false; 
};