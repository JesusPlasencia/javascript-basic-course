function Auto(MARCA, MODELO, ANNIO) {
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
}

var autos = [];

for (let i = 0; i < 4; i++) {
    var marca = prompt("Ingresa la marca de auto: ");
    var modelo = prompt("Ingresa el modelo del auto: ");
    var annio = prompt("Ingresa el año del auto: ");
    autos.push(new Auto(marca, modelo, annio));
}

for (let auto of autos) {
    console.log(auto);
}