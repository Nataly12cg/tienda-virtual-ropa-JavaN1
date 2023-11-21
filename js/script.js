// Manejar la lógica del carrito de compras

// Seleccionar elementos del DOM
const botonesAgregar = document.querySelectorAll('.agregar-carrito');
const botonVaciar = document.querySelector('.vaciar-carrito');
const listaCarrito = document.querySelector('.lista-carrito');
const totalCarrito = document.querySelector('#total-carrito');

// Array para guardar los productos en el carrito
const carrito = [];
let total = 0; // Variable para almacenar el precio total inicializado en 0

// Event listeners para los botones de agregar al carrito
botonesAgregar.forEach((boton) => {
  boton.addEventListener('click', agregarAlCarrito);
});

// Función para agregar productos al carrito
function agregarAlCarrito(event) {
  const boton = event.target;
  const producto = boton.parentElement;

  const nuevoProducto = {
    nombre: producto.querySelector('h2').textContent,
    precio: parseFloat(producto.querySelector('p').textContent.replace('Precio: $', '')),
    id: producto.querySelector('.agregar-carrito').getAttribute('data-id'),
  };

  // Agregar producto al carrito
  carrito.push(nuevoProducto);

  // Sumar el precio del nuevo producto al total
  total += nuevoProducto.precio;

  // Actualizar el carrito en la interfaz
  mostrarCarrito();
}

// Función para mostrar el carrito en la interfaz
function mostrarCarrito() {
  // Limpiar el contenido previo del carrito
  listaCarrito.innerHTML = '';

  // Recorrer el carrito y mostrar cada producto
  carrito.forEach((producto) => {
    const li = document.createElement('li');
    li.textContent = `${producto.nombre} - Precio: $${producto.precio}`;
    listaCarrito.appendChild(li);
  });

  // Mostrar el total del carrito
  totalCarrito.textContent = total.toFixed(2);
}

// Event listener para vaciar el carrito
botonVaciar.addEventListener('click', vaciarCarrito);

// Función para vaciar el carrito
function vaciarCarrito() {
  carrito.length = 0;
  total = 0; // Restablecer el total a 0 al vaciar el carrito
  mostrarCarrito();
}