function toggleMenu() {
    var navlinks = document.getElementById("navlinks");
    navlinks.classList.toggle("active");
}

// Función que se ejecuta cuando carga la página
window.onload = function () {
    // Revisar si el usuario está logueado
    const estaLogueado = localStorage.getItem('usuarioLogueado') === 'true';
    const nombreUsuario = localStorage.getItem('nombreUsuario') || 'Usuario';

    // Buscar los botones en el navbar
    const loginLink = document.querySelector('#e2 ul li:first-child a');
    const logoutLink = document.querySelector('#e2 ul li:last-child a');

    if (estaLogueado) {
        // Si está logueado: ocultar "Log In" y mostrar "Log Out"
        loginLink.parentElement.style.display = 'none';
        logoutLink.textContent = '👋 Cerrar Sesión (' + nombreUsuario + ')';
        logoutLink.href = '#';

        // Cuando haga clic en "Cerrar Sesión"
        logoutLink.onclick = function (e) {
            e.preventDefault();
            if (confirm('¿Seguro que quieres cerrar sesión?')) {
                // Borrar datos del localStorage
                localStorage.removeItem('usuarioLogueado');
                localStorage.removeItem('emailUsuario');
                localStorage.removeItem('nombreUsuario');
                // Recargar página
                location.reload();
            }
        };
    } else {
        // Si NO está logueado: mostrar "Log In" y ocultar "Log Out"
        loginLink.href = 'login.html';
        logoutLink.parentElement.style.display = 'none';
    }
};
