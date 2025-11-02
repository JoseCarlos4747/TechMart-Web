//Pantalla para pago
const Pago=document.getElementById("Pago");
//const para evitar posibles errores tecnicos, tambien se puede usar let





const BotonAbrir_pago=document.getElementById("AbrirPago");
const BotonCerrar_pago=document.getElementById("CerrarPago");
const BotonContinuar_pago_1=document.getElementById("ContinuarPago1");
const Detalle_pago=document.getElementById("Detalles_Compra");

const Info_pago=document.getElementById("Informacion_Direccion");
const BotonContinuar_pago_2=document.getElementById("ContinuarPago2");
const BotonAtras_pago_2=document.getElementById("AtrasPago2");

const Metodo_pago=document.getElementById("Pagar");
const BotonContinuar_pago_3=document.getElementById("ContinuarPago3");
const BotonAtras_pago_3=document.getElementById("AtrasPago3");
const BotonConfirmar_pago_4=document.getElementById("ConfirmarPago");

const YAPE=document.getElementById("Metodo_Imagenes");




BotonAbrir_pago.addEventListener("click",function()
//el addEventlistener es para escuchar eventos como clicks, movimientos del mouse, etc
{
    Pago.style.display="block";
    Detalle_pago.style.display="block";
    Info_pago.style.display="none";
    Metodo_pago.style.display="none";
    general.style.filter="blur(5px)";//Para poner borroso el fondo
});

BotonCerrar_pago.addEventListener("click",function()
{
    Pago.style.display="none";
    Detalle_pago.style.display="none";
    general.style.filter="none";
});



BotonContinuar_pago_1.addEventListener("click",function()
{
    Info_pago.style.display="block";
    Detalle_pago.style.display="none";
});

BotonAtras_pago_2.addEventListener("click",function()
{
    Detalle_pago.style.display="block";
    Info_pago.style.display="none";
    
})
BotonContinuar_pago_2.addEventListener("click",function(event)
{

    event.preventDefault();//Para que no se cierre esta ventana, evitar enviar el formulario y que se recargue la pagina
    const Input_departamento=document.getElementById("Departamento").value.trim();//trim para omitir espacios
    const Input_nombre=document.getElementById("name").value.trim();
    const Input_apellidopaterno=document.getElementById("apellido_paterno").value.trim();
    const Input_apellidomaterno=document.getElementById("apellido_materno").value.trim();
    const Input_telefono=document.getElementById("telefono").value.trim();
    if(Input_departamento==="" || Input_nombre==="" || Input_apellidopaterno==="" || Input_apellidomaterno==="" || Input_telefono==="")
    {
        alert("Error, campos vacios");
        return;//para que no pase a la siguiente ventana
    }
    Metodo_pago.style.display="flex";
    Info_pago.style.display="none";
});
BotonAtras_pago_3.addEventListener("click",function()
{
    Metodo_pago.style.display="none";
    Info_pago.style.display="block";
    YAPE.style.display="none";
});
BotonContinuar_pago_3.addEventListener("click",function(event)
{
    event.preventDefault();//Para que no se cierre esta ventana, evitar enviar el formulario y que se recargue la pagina
    const Input_radio_yape=document.getElementById("yape");
    const Input_radio_tarjeta=document.getElementById("tarjeta");
    const Input_radio_Entrega=document.getElementById("ConEntrega");

    if(!Input_radio_yape.checked && !Input_radio_tarjeta.checked && !Input_radio_Entrega.checked)
    {
        alert("Error, seleccione un campo");
        return;
    }
    YAPE.style.display="block";
});

BotonConfirmar_pago_4.addEventListener("click",function()
{
    alert("Pago realizado con exito ✅");
    YAPE.style.display="none";
    Metodo_pago.style.display="none";
    general.style.filter="none";
});