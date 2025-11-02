//LOGIN USUARIO
// Cuando se envía el formulario
document.addEventListener('DOMContentLoaded',function()
{
    const formulario=document.getElementById("formulariodelogin");
    if(formulario)
    {
        formulario.addEventListener("submit",function(e)
        {
            e.preventDefault();//evita que se recargue la pagina
            const email=document.getElementById("email").value;
            const password=document.getElementById("password").value;
            const mensaje=document.getElementById("mensaje");

            //Validar que no esten vacios
            if(!email || !password)
            {
                mensaje.textContent="Porfavor completa todo los campos";
                return;
            }
            //validar longitud de la contraseña
            if(password.length<6)
            {
                mensaje.textContent="La contraseña debe tener al menos  6 caracteres";
                return;
            }

            //Guardar en localStorage
            localStorage.setItem("usuariologeado","true");
            localStorage.setItem("emailuser",email);
            localStorage.setItem("nombreusuario",email.split("@")[0]);

            //Mostrar mensaje de exito
            mensaje.style.color="#4caf50";
            mensaje.textContent="Inicio de sesion exitoso";

            setItem(function()
            {
                window.location.href="index.html";
            },1000);
        });
    }
});