if (false) {
    console.log("Hola");
} else {
    console.log("Soy Falso");
}

var edad = 21;
if (edad < 18) {
    console.log("Menor de edad")
} else if (edad === 18) {
    console.log("Tienes 18");
} else {
    console.log("Mayor de edad");
}

var miNombre = "Mario";
(miNombre === "Jesus") ? console.log("Adivinaste!") : console.log("Try Again!");

// !Juego de Piedra, Papel y Tijera
var choice = Math.round(Math.random() * 2);
var options = ["Piedra", "Tijera", "Papel"]
var pc = options[choice];

var user = options[0];

if (user === "Piedra") {
    if (pc === "Piedra") {
        console.log("Empate");
    } else if (pc === "Tijera") {
        console.log("Ganaste, la maquina eligio Tijera");
    } else {
        console.log("Perdiste, la maquina eligio Papel");
    }
} else if (user === "Tijera") {
    if (pc === "Piedra") {
        console.log("Perdiste, la maquina eligio Piedra");
    } else if (pc === "Tijera") {
        console.log("Empate");
    } else {
        console.log("Ganaste, la maquina eligio Papel");
    }
} else {
    if (pc === "Piedra") {
        console.log("Empate");
    } else if (pc === "Tijera") {
        console.log("Ganaste, la maquina eligio Tijera");
    } else {
        console.log("Perdiste, la maquina eligio Papel");
    }
}