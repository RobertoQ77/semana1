/*
 * creando una variable
*/
let numero = 10;
/*
 * imprime un valor en la consola del navegador
*/
console.log("Primer tipo ", numero);
/*
 * cambiando el tipo de variable de nuemro a cadena
*/
numero = "Pepe";
console.log("Segundo tipo ", numero);
/*
 * valor de igv constante
*/
const igv = 0.18;
console.log("Primer igv ", igv);

alert("valor de igv " + igv);

/*
 * concatenación
*/
const primerNombre = "Roberto";
const primerApellido = "Quiroga";
let edad = 40;
let dias = 20;
console.log("Concatenación:");
console.log(primerNombre + " " + primerApellido + " " + edad);

/* convirtiendo a cadena cualquier valor */
console.log(String(edad));
console.log(String(edad) + String(dias));
console.log(edad, dias);

let estaVivo = false;
console.log("Bool", estaVivo);
console.log("String", String(estaVivo));

/* Aqui suma los valores de tipo number*/
console.log(edad + dias);

/* operaciones */
numero = 10;
let numero2 = 20;
console.log("suma",(numero + numero2));
console.log("resta",(numero - numero2));
console.log("multiplicación",(numero * numero2));
console.log("división",(numero / numero2));

/* Conversiones */
console.log(Number("veinti dos"));
console.log(Number("one"));

// Otras formas de transformar un string -> number
let numero5 = "33.5";
// Forma 1
console.log("Forma1", Number(numero5));
// Forma 2
console.log("Forma2", parseInt(numero5));
// Forma 3
console.log("Forma3", +numero5);
// Forma 4
console.log("Forma4", parseFloat(numero5));

console.log("Probando un caso", Number("12hola"));
console.log(Number("12hola"));

/* Math */
console.log(Math.sqrt(4));
console.log(Math.pow(4,3));

/* Solicitando valores */
const catA = Number(prompt("Ingrese el valor de A"));
const catB = Number(prompt("Ingrese el valor de B"));
let hyp = Math.sqrt(Math.pow(catA,2)+Math.pow(catB,2));
console.log("la hipoenusa es", hyp);