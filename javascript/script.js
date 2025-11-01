const productos = [
    {
        id: 1,
        nombre: 'iPhone 15 Pro',
        descripcion: 'Último modelo de Apple con chip A17 Pro y cámara de 48MP',
        precio: 999.99,
        categoria: 'smartphones',
        icono: '📱'
    },
    {
        id: 2,
        nombre: 'Samsung Galaxy S24',
        descripcion: 'Smartphone Android con pantalla AMOLED y AI integrada',
        precio: 899.99,
        categoria: 'smartphones',
        icono: '📱'
    },
    {
        id: 3,
        nombre: 'MacBook Pro 14"',
        descripcion: 'Laptop profesional con chip M3 Pro y pantalla Retina',
        precio: 1999.99,
        categoria: 'laptops',
        icono: '💻'
    },
    {
        id: 4,
        nombre: 'Dell XPS 13',
        descripcion: 'Ultrabook compacta con procesador Intel Core i7',
        precio: 1299.99,
        categoria: 'laptops',
        icono: '💻'
    },
    {
        id: 5,
        nombre: 'AirPods Pro 2',
        descripcion: 'Auriculares inalámbricos con cancelación de ruido',
        precio: 249.99,
        categoria: 'audio',
        icono: '🎧'
    },
    {
        id: 6,
        nombre: 'Sony WH-1000XM5',
        descripcion: 'Auriculares premium con la mejor cancelación de ruido',
        precio: 399.99,
        categoria: 'audio',
        icono: '🎧'
    },
    {
        id: 7,
        nombre: 'Mouse Logitech MX',
        descripcion: 'Mouse ergonómico inalámbrico para profesionales',
        precio: 99.99,
        categoria: 'accesorios',
        icono: '🖱️'
    },
    {
        id: 8,
        nombre: 'Teclado Mecánico RGB',
        descripcion: 'Teclado gaming con switches Cherry MX',
        precio: 149.99,
        categoria: 'accesorios',
        icono: '⌨️'
    }
];

// Carrito de compras
let carrito = [];

// Renderizar productos
function renderizarProductos(categoria = 'todos') {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    const productosFiltrados = categoria === 'todos' 
        ? productos 
        : productos.filter(p => p.categoria === categoria);

    productosFiltrados.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">${producto.icono}</div>
            <span class="product-category">${producto.categoria}</span>
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <div class="product-price">$${producto.precio.toFixed(2)}</div>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
        `;
        grid.appendChild(card);
    });
}

// Agregar producto al carrito
function agregarAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    const itemExistente = carrito.find(item => item.id === idProducto);

    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        carrito.push({
            ...producto,
            cantidad: 1
        });
    }

    actualizarCarrito();
    mostrarNotificacion('Producto agregado al carrito');
}

// Actualizar carrito
function actualizarCarrito() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    cartCount.textContent = totalItems;

    renderizarCarrito();
}

// Renderizar carrito
function renderizarCarrito() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    if (carrito.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Tu carrito está vacío</div>';
        cartTotal.innerHTML = '';
        return;
    }

    cartItems.innerHTML = carrito.map(item => `
        <div class="cart-item">
            <div style="font-size: 2rem;">${item.icono}</div>
            <div class="cart-item-info">
                <h4>${item.nombre}</h4>
                <div class="cart-item-price">$${item.precio.toFixed(2)}</div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="cambiarCantidad(${item.id}, -1)">-</button>
                    <span class="quantity">${item.cantidad}</span>
                    <button class="quantity-btn" onclick="cambiarCantidad(${item.id}, 1)">+</button>
                </div>
                <button class="remove-btn" onclick="eliminarDelCarrito(${item.id})">Eliminar</button>
            </div>
        </div>
    `).join('');

    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    cartTotal.innerHTML = `
        <h3>
            <span>Total:</span>
            <span>$${total.toFixed(2)}</span>
        </h3>
        <button class="checkout-btn" onclick="mostrarFormularioPago()">Proceder al Pago</button>
    `;
}

// Cambiar cantidad
function cambiarCantidad(idProducto, cambio) {
    const item = carrito.find(i => i.id === idProducto);
    if (item) {
        item.cantidad += cambio;
        if (item.cantidad <= 0) {
            eliminarDelCarrito(idProducto);
        } else {
            actualizarCarrito();
        }
    }
}

// Eliminar del carrito
function eliminarDelCarrito(idProducto) {
    carrito = carrito.filter(item => item.id !== idProducto);
    actualizarCarrito();
}

// Mostrar/ocultar modal del carrito
document.getElementById('cartIcon').addEventListener('click', function() {
    document.getElementById('cartModal').style.display = 'block';
    document.getElementById('cartItemsContainer').style.display = 'block';
    document.getElementById('checkoutForm').style.display = 'none';
    document.getElementById('successMessage').style.display = 'none';
});

document.getElementById('closeCart').addEventListener('click', function() {
    document.getElementById('cartModal').style.display = 'none';
});

// Cerrar modal al hacer clic fuera
document.getElementById('cartModal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});

// Mostrar formulario de pago
function mostrarFormularioPago() {
    if (carrito.length === 0) return;
    document.getElementById('cartItemsContainer').style.display = 'none';
    document.getElementById('checkoutForm').style.display = 'block';
}

// Volver al carrito desde formulario
document.getElementById('backToCart').addEventListener('click', function() {
    document.getElementById('cartItemsContainer').style.display = 'block';
    document.getElementById('checkoutForm').style.display = 'none';
});

// Validación de formulario
document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener valores
    const nombre = document.getElementById('cardName').value.trim();
    const numeroTarjeta = document.getElementById('cardNumber').value.replace(/\s/g, '');
    const expiracion = document.getElementById('cardExpiry').value;
    const cvv = document.getElementById('cardCVV').value;

    // Reset errores
    document.querySelectorAll('.error-message').forEach(msg => msg.style.display = 'none');
    document.querySelectorAll('input').forEach(input => input.classList.remove('error'));

    let valido = true;

    // Validar nombre
    if (nombre.length < 3) {
        document.getElementById('nameError').style.display = 'block';
        document.getElementById('cardName').classList.add('error');
        valido = false;
    }

    // Validar número de tarjeta (16 dígitos)
    if (!/^\d{16}$/.test(numeroTarjeta)) {
        document.getElementById('cardError').style.display = 'block';
        document.getElementById('cardNumber').classList.add('error');
        valido = false;
    }

    // Validar expiración (MM/AA)
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiracion)) {
        document.getElementById('expiryError').style.display = 'block';
        document.getElementById('cardExpiry').classList.add('error');
        valido = false;
    }

    // Validar CVV (3 dígitos)
    if (!/^\d{3}$/.test(cvv)) {
        document.getElementById('cvvError').style.display = 'block';
        document.getElementById('cardCVV').classList.add('error');
        valido = false;
    }

    // Si todo es válido, procesar compra
    if (valido) {
        procesarCompra();
    }
});

// Procesar compra
function procesarCompra() {
    document.getElementById('checkoutForm').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
    
    // Limpiar carrito
    carrito = [];
    actualizarCarrito();

    // Limpiar formulario
    document.getElementById('paymentForm').reset();

    // Cerrar modal después de 3 segundos
    setTimeout(() => {
        document.getElementById('cartModal').style.display = 'none';
        document.getElementById('successMessage').style.display = 'none';
    }, 3000);
}

// Formatear número de tarjeta mientras se escribe
document.getElementById('cardNumber').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\s/g, '');
    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
    e.target.value = formattedValue;
});

// Formatear fecha de expiración
document.getElementById('cardExpiry').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    e.target.value = value;
});

// Solo números en CVV
document.getElementById('cardCVV').addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/\D/g, '');
});

// Notificación simple
function mostrarNotificacion(mensaje) {
    // Crear elemento de notificación temporal
    const notif = document.createElement('div');
    notif.textContent = mensaje;
    notif.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #2ecc71;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 2000;
        animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 2000);
}

// Event listeners para filtros
document.querySelectorAll('input[name="category"]').forEach(radio => {
    radio.addEventListener('change', function() {
        renderizarProductos(this.value);
    });
});

// Inicializar
renderizarProductos();