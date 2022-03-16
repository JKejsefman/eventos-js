const habitaciones = [
    { id: '0', tipo: "single", modelo: "Single Pequena", precio: 3000, img: "img/singlepequena.jpg" },
    { id: '1', tipo: "single", modelo: "Single Standard", precio: 3500, img: "img/singlestandard.jpg" },
    { id: '2', tipo: "doble", modelo: "Doble Pro", precio: 4000, img: "img/doble.jpg" },
    { id: '3', tipo: "doble", modelo: "Doble Standard", precio: 4100, img: "img/doblesimple.jpg" },
    { id: '4', tipo: "doble", modelo: "Doble Matrimonial", precio: 4000, img: "img/matrimonial.jpg" },
    { id: '5', tipo: "triple", modelo: "Triple Standard", precio: 5800, img: "img/triplesimple.jpg" },
    { id: '6', tipo: "triple", modelo: "Triple c/ Matrimonial", precio: 6500, img: "img/tripleconmatrimonial.jpg" },
    { id: '7', tipo: "cuadruple", modelo: "Cuadruple", precio: 5800, img: "img/cuadruple.jpg" },
    { id: '8', tipo: "hostel", modelo: "Hostel Hab. Chica", precio: 2000, img: "img/habitacionhostelsimple.jpg" },
    { id: '9', tipo: "hostel", modelo: "Hostel Hab. Compartida", precio: 1700, img: "img/habitaciongrandecompartida.jpg" },
];
const contenedorTienda = document.getElementById('contenedorTienda');
const contenedorCarrito = document.getElementById('contenedorCarrito');
const carrito = []

for (const habitacion of habitaciones) {
  const divHabitacion = document.createElement('div');
  const imgHabitacion = document.createElement('img');
  const nombreHabitacion = document.createElement('h2');
  const precioHabitacion = document.createElement('h3');
  const botonComprar = document.createElement('button');

  divHabitacion.className = 'card';
  imgHabitacion.className = 'card-img-top';
  nombreHabitacion.className = 'nombre-habitacion';
  precioHabitacion.className = 'card-precio';
  botonComprar.className = 'btn btn-primary';

  imgHabitacion.src = habitacion.img;
  nombreHabitacion.append(habitacion.modelo);
  precioHabitacion.append(`$${habitacion.precio}`);
  botonComprar.append('Comprar');
  botonComprar.id = `${habitacion.id}`;

  botonComprar.onclick = () => {
    const habitacionComprado = habitaciones.find(habitacion => habitacion.id === botonComprar.id);
    carrito.push({ nombre: habitacionComprado.modelo, precio: habitacionComprado.precio })
  }
  divHabitacion.append(imgHabitacion, nombreHabitacion, precioHabitacion, botonComprar);
  contenedorTienda.append(divHabitacion);
}
const mostrarCarrito = () => {

  for (const habitacion of carrito) {
      const nombreHabitacion = `<h4>habitacion : ${habitacion.nombre}</h4>`
      const precioHabitacion = `<h4>Precio : ${habitacion.precio}</h4>`
      contenedorCarrito.innerHTML += nombreHabitacion
      contenedorCarrito.innerHTML += precioHabitacion
  }
  const total = carrito.reduce((accumulador, habitacion) => accumulador + habitacion.precio, 0);
  contenedorCarrito.append(`Total Compra :  ${total}`)
  
}
let botonCarrito = document.getElementById("btnCarrito")
botonCarrito.onclick = mostrarCarrito;