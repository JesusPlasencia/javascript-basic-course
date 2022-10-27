var miAuto = {
    marca: "Honda",
    modelo: "Pilot",
    annio: 2022,
    precio: 50000,
    detalleDeAuto: function () {
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
}

console.log(miAuto);

//!Log Marca de miAuto
console.log(miAuto.marca);

//!Ejecucion de una funcion de objeto
miAuto.detalleDeAuto();