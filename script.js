//Pantalla para pago
const Pago=document.getElementById("Pago");





const BotonAbrir_pago=document.getElementById("AbrirPago");
const Info_pago=document.getElementById("Informacion_Direccion");
const BotonCerrar_pago=document.getElementById("CerrarPago");
const BotonContinuar_pago_1=document.getElementById("ContinuarPago1");

const Detalle_pago=document.getElementById("Detalles_Compra");
const BotonContinuar_pago_2=document.getElementById("ContinuarPago2");
const BotonAtras_pago_2=document.getElementById("AtrasPago2");

const Metodo_pago=document.getElementById("Pagar");
const BotonContinuar_pago_3=document.getElementById("ContinuarPago3");
const BotonAtras_pago_3=document.getElementById("AtrasPago3");
const BotonConfirmar_pago_4=document.getElementById("ConfirmarPago");

const YAPE=document.getElementById("Metodo_Imagenes");

BotonAbrir_pago.addEventListener("click",function()
{
    Pago.style.display="block";
    Info_pago.style.display="block";
    Detalle_pago.style.display="none";
    Metodo_pago.style.display="none";
    general.style.filter="blur(5px)";
    //Para poner borroso el fondo
});
BotonCerrar_pago.addEventListener("click",function()
{
    Pago.style.display="none";
    Info_pago.style.display="none";
    general.style.filter="none";
});
window.onclick=e=>{if(e.target==Pago) Pago.style.display="none";}
BotonContinuar_pago_1.addEventListener("click",function()
{
    Detalle_pago.style.display="block";
    Info_pago.style.display="none";
});
BotonAtras_pago_2.addEventListener("click",function()
{
    Detalle_pago.style.display="none";
    Info_pago.style.display="block";
})
BotonContinuar_pago_2.addEventListener("click",function()
{
    Metodo_pago.style.display="flex";
    Detalle_pago.style.display="none";
});
BotonAtras_pago_3.addEventListener("click",function()
{
    Metodo_pago.style.display="none";
    Detalle_pago.style.display="block";
    YAPE.style.display="none";
});
BotonContinuar_pago_3.addEventListener("click",function()
{
    YAPE.style.display="block";
});

BotonConfirmar_pago_4.addEventListener("click",function()
{
    alert("Pago realizado con exito ✅");
    YAPE.style.display="none";
    Metodo_pago.style.display="none";
    general.style.filter="none";
});