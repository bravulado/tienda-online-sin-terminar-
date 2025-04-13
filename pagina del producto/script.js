document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const agregarCarritoBtn = document.getElementById('agregar-carrito');
    const cantidadInput = document.getElementById('cantidad');
    const talleSelect = document.getElementById('talle');
    const mensajeDiv = document.getElementById('mensaje');
    
    // Datos del producto (podrían venir de una base de datos o API)
    const producto = {
        nombre: "Remera de Verano",
        precio: 99.99,
        descripcion: "Remera manga corta, de alta calidad muy buena para la temporada de verano  .",
        imagen: "https://static.wixstatic.com/media/c837a6_944cb31b5c7d4659b7a0c6612b4df573~mv2.jpg/v1/fill/w_256,h_341,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_944cb31b5c7d4659b7a0c6612b4df573~mv2.jpg",
        tallesDisponibles: ['S', 'M', 'L', 'XL']
    };
    
    // Mostrar datos del producto en la página
    document.getElementById('producto-nombre').textContent = producto.nombre;
    document.getElementById('producto-precio').textContent = `$${producto.precio.toFixed(2)}`;
    document.getElementById('producto-descripcion').textContent = producto.descripcion;
    document.getElementById('producto-img').src = producto.imagen;
    document.getElementById('producto-img').alt = producto.nombre;
    
    // Evento para agregar al carrito
    agregarCarritoBtn.addEventListener('click', function() {
        const cantidad = parseInt(cantidadInput.value);
        const talle = talleSelect.value;
        
        // Validaciones
        if (cantidad < 1) {
            mostrarMensaje("Por favor ingrese una cantidad válida", "error");
            return;
        }
        
        if (cantidad > 6) {
            mostrarMensaje("Por favor ingrese una cantidad válida", "error");
            return;
        }


        if (!talle) {
            mostrarMensaje("Por favor seleccione un talle", "error");
            return;
        }
        
        if (!producto.tallesDisponibles.includes(talle)) {
            mostrarMensaje("El talle seleccionado no está disponible", "error");
            return;
        }
        
        // Aquí normalmente enviaríamos los datos a un carrito de compras
        // Por ahora solo mostraremos un mensaje
        const total = (producto.precio * cantidad).toFixed(2);
        mostrarMensaje(`Agregado al carrito: ${cantidad} x ${producto.nombre} (Talle: ${talle}) - Total: $${total}`, "exito");
        
        // Resetear cantidad y talle
        cantidadInput.value = 1;
        talleSelect.value = "";
    });
    
    // Función para mostrar mensajes
    function mostrarMensaje(texto, tipo = "exito") {
        mensajeDiv.textContent = texto;
        mensajeDiv.className = `mensaje visible ${tipo}`;
        
        // Ocultar mensaje después de 3 segundos
        setTimeout(() => {
            mensajeDiv.className = "mensaje";
        }, 3000);
    }
});