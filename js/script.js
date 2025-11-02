const contenedorTarjetaselectronicos = document.getElementById("productos-electronicos");

function crearTarjetasProductosProductoelectronicos(productos_electronicos) {
    productos_electronicos.forEach(producto => {
        const nuevoElectronico = document.createElement("div");
        nuevoElectronico.classList = "tarjeta-producto";
        nuevoElectronico.innerHTML = `
        <img src="${producto.img}">
        <h2>${producto.marca}</h2>
        <h3 class="h3-nombre">${producto.nombre}</h3>
        <p>S/${producto.precio}</p>
        <button class="boton-productos">Agregar al carrito</button>
        `
        contenedorTarjetaselectronicos.appendChild(nuevoElectronico);
        contenedorTarjetaselectronicos.getElementsByTagName("button")[0].addEventListener("click", () => agregarAlCarrito(producto))
    });
}
crearTarjetasProductosProductoelectronicos(electronicos);