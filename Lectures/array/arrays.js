// !Arrays
var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

//!longitud
var longitud = frutas.length;
console.log("Longitud:", longitud);

//!Agregar elementos
var masFrutas = frutas.push("Uvas");
console.log(frutas);

//!Ultimo Posicion
var ultimo = frutas.pop("Uvas");
console.log(frutas);

//!Agregar elemento al inicio
var frutaInicio = frutas.unshift("Uvas");
console.log(frutas);

//!Eliminar elemento del inicio
var borrarFruta = frutas.shift();
console.log(frutas);

//!Obtener index
var posicion = frutas.indexOf("Cereza");
console.log(posicion);

//!Obtener elemento (2)
var cereza = frutas[2];
console.log(cereza);