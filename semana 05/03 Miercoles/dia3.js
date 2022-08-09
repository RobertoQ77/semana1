/* every y some no retornan arrays, solo valor booleano
* nos sirve para validar una condición y que aplique a cada
* uno de los elementos iterados
*/

const edades = [10, 20, 30, 40];
const analizandoEdades = edades.every((edad) => edad > 20);
//! para que every retorne true, todos los elementos deben
//! cumplir con la condición
console.log(analizandoEdades);

const analizando2 = edades.every((edad) => edad !== " ");
console.log(analizando2);

const alumnos = [
    {
        name: "pepe",
        age: 21,
    },
    {
        name: "Luis",
        age: 18,
    },
    {
        name: "Maria",
        age: 19,
    },
];
console.log("es mayor",
alumnos.every((alumno) => alumno.age >= 18)
);

//! para que some retorne true, basta que uno debe cumplir
//! con la condicion
const precios = [120, 314, 121, 873];
console.log("Precios ",
precios.some((precio) => precio%2 === 0)
);