class Carrito {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('carritoTechMart') || '[]');
        this.actualizarVista();
        this.configurarEventos();
    }

    actualizarVista() {
        const vacio = document.getElementById('carrito-vacio');
        const contenido = document.getElementById('carrito-contenido');
        const items = document.querySelector('.carrito-items');
        
        if (this.items.length === 0) {
            vacio.style.display = 'block';
            contenido.style.display = 'none';
            return;
        }
        
        vacio.style.display = 'none';
        contenido.style.display = 'flex';
        items.innerHTML = '';
        
        this.items.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'producto-carrito';
            div.innerHTML = `
                <img src="${item.img}" class="producto-imagen">
                <div class="producto-info">
                    <div class="producto-nombre">${item.nombre}</div>
                    <div class="producto-precio">S/ ${item.precio.toFixed(2)}</div>
                </div>
                <div class="producto-controls">
                    <button class="cantidad-btn" data-index="${index}" data-action="decrementar">-</button>
                    <span>${item.cantidad}</span>
                    <button class="cantidad-btn" data-index="${index}" data-action="incrementar">+</button>
                    <button class="eliminar-btn" data-index="${index}">X</button>
                </div>
            `;
            items.appendChild(div);
        });
        
        this.calcularTotal();
    }

    configurarEventos() {
        document.getElementById('btn-proceder-pago').addEventListener('click', () => {
            this.procederPago();
        });

        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('cantidad-btn')) {
                const index = parseInt(e.target.dataset.index);
                const action = e.target.dataset.action;
                
                if (action === 'incrementar') {
                    this.cambiarCantidad(index, 1);
                } else if (action === 'decrementar') {
                    this.cambiarCantidad(index, -1);
                }
            }
            
            if (e.target.classList.contains('eliminar-btn')) {
                const index = parseInt(e.target.dataset.index);
                this.eliminar(index);
            }
        });
    }

    cambiarCantidad(index, cambio) {
        this.items[index].cantidad += cambio;
        if (this.items[index].cantidad < 1) {
            this.eliminar(index);
        } else {
            this.guardarYActualizar();
        }
    }

    eliminar(index) {
        this.items.splice(index, 1);
        this.guardarYActualizar();
        alert('Producto eliminado del carrito');
    }

    guardarYActualizar() {
        localStorage.setItem('carritoTechMart', JSON.stringify(this.items));
        this.actualizarVista();
    }

    calcularTotal() {
        const subtotal = this.items.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
        const envio = subtotal > 200 ? 0 : 15;
        const total = subtotal + envio;
        
        document.getElementById('subtotal').textContent = `S/ ${subtotal.toFixed(2)}`;
        document.getElementById('envio').textContent = `S/ ${envio.toFixed(2)}`;
        document.getElementById('total').textContent = `S/ ${total.toFixed(2)}`;
    }

    procederPago() {
        if (this.items.length === 0) {
            alert('Tu carrito está vacío');
            return;
        }
        window.location.href = 'pagos.html';
    }
}

// Inicializar carrito cuando la página cargue
document.addEventListener('DOMContentLoaded', () => {
    const carrito = new Carrito();
});
