var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

//!Filter: validador si cumple alguna condicion, crea un nuevo array, busca en todos los elementos
// var articulosFiltrados = articulos.filter(function (articulo) {
//     return articulo.costo <= 500;
// })
// console.log(articulosFiltrados);
// console.log(articulos);

//!Map crea un nuevo array, recorre todos los elementos del array
// var nombreArticulos = articulos.map(function (articulo) {
//     return articulo.nombre;
// })
// console.log(nombreArticulos);

//!Find busca algo dentro de un articulo, solo busca hasta encontrar el primer valor, crea un nuevo array
// var findArticulo = articulos.find(function (articulo) {
//     return articulo.nombre === "Laptop";
// })
// console.log(findArticulo);

//!ForEach recorre todos los atributos, no crea un nuevo array 
articulos.forEach(function (articulo) {
    console.log(articulo.nombre);
})

//!Some retorna true o false, si es que algun articulo cumple con la condicion
var articulosBaratos = articulos.some(function (articulo) {
    return articulo.costo <= 700;
})
console.log(articulosBaratos);