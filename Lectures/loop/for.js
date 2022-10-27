var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes (estudiante) {
    console.log(`Hola, ${estudiante}`);
}

// !For Classic ~ 10ms
// console.time("classic");
// for (var i = 0; i < estudiantes.length; i++) {
//     saludarEstudiantes(estudiantes[i]);
// }
// console.timeEnd("classic");

// !For Of ~ 9ms
// console.time("forof")
// for (var estudiante of estudiantes) {
//     saludarEstudiantes(estudiante);
// }
// console.timeEnd("forof")