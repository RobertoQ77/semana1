//! FECHAS
/*
cambio poe zona horario
recordemos que cambiar la hora, pero el minuto y segundo se mantiene
js tiene funciones que es en base a la zona horaria
van a setear la hora
*/
const fecha = new Date();
console.log(fecha);

//* Date() tiene diversas funciones
const dia = fecha.getDate();
console.log("dia: ", dia);

const mes = fecha.getMonth();
console.log("mes: ", mes + 1);

const año = fecha.getFullYear();
console.log("año: ", año);

const hora = fecha.getTime();
console.log("hora: ", hora);

const minuto = fecha.getMinutes();
console.log("minutos: ", minuto)

const segundo = fecha.getSeconds();
console.log("segundos: ", segundo);

const diaglobal = fecha.getUTCDate();
console.log("día global", diaglobal);

console.log("tipo de variable", typeof fecha);
const fechaString = String(fecha);
console.log("tipo de ", typeof fechaString);
console.log("fecha ", fechaString);

const frase = "Hola me llano juan";
const frase2 = "Como,estas,bien,seguro";
const frase3 = "Mi numero es >= 99999";

console.log(frase.split(" "));
console.log(frase2.split(":"));
console.log(frase3.split(9));

console.log ("Fecha en string ", fechaString.split(" ")[5]);
console.log("Pais ", fechaString.split (" ")[6]);

const pais = fechaString.split(" ")[6];
console.log(pais.replace("(", ""));