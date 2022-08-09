/* valores predefinidos*/
const limiteH = 35;
const limiteF = 50;
let denominacion = "El Joven.";
let resultado = "sobresaliente";
let color = "#00FF00";

/* Ingreso de valores */
let nombre = prompt("Ingrese el nombre");
let genero = prompt("Ingrese el genero");
let edad = Number(prompt("Ingrese la edad"));
let nota = Number(prompt("Ingrese la nota"));

/* Muestra los valores */
document.write("<h2>Valores ingresados</h2>");
document.write("<h2>====================</h2>");
document.write("<p>Nombre: " + nombre + "</p>");
document.write("<p>Genero: " + genero + "</p>");
document.write("<p>Edad  : " + edad + "</p>");
document.write("<p>Nota  : " + nota + "</p>");
document.write("<h2>====================</h2>");

/* Condicionantes */
genero = genero.toLowerCase();
if(genero == "hombre" && edad > limiteH){denominacion = "El Sr.";}
if(genero == "mujer" && edad > limiteF){denominacion = "La Sra.";}
if(genero == "mujer" && edad <= limiteF){denominacion = "La Srta.";}

if(nota < 3){resultado = "Muy deficiente"; color = "#FF0000";}
if(nota >= 3 && nota < 5){resultado = "Insuficiente"; color = "#CC3300";}
if(nota >= 5 && nota < 6){resultado = "Suficiente"; color = "#9E6100";}
if(nota >= 6 && nota < 7){resultado = "bien"; color = "#679800";}
if(nota >= 7 && nota < 9){resultado = "Notable"; color = "#2CD300";}

/* Muestra el resultado */
document.write("<h3>RESULTADO</h3>");
document.write("<p style='color: " + color + "'>" + denominacion + " " + nombre + " (" + edad + " años) tiene " + nota + ". Esta " + resultado + "</p>");