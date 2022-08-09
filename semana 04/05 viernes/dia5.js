/*
function nombreDeLaFuncion(){
    const alumnos = ["Pepe", "Juan", "Maria", "Luis", "Lex", "Lucas", "Clark"];
    for(let alumno of alumnos){
        console.log(alumno);
    }
}
nombreDeLaFuncion();

function cuboNumero(){
    return Math.pow(10, 3);
}
const resultado = cuboNumero();
console.log("resultado", resultado);

function potenciaNumero(numero, potencia){
    return Math.pow(numero, potencia);
}
console.log("potencia", potenciaNumero(4, 3));
console.log("potencia", potenciaNumero(6, 2));

function suma(a, b){
    const n1 = Number(a);
    const n2 = Number(b);
    if(isNaN(n1) || isNaN(n2))
    return "no se puede sumar";
    return (a + b);
}
document.write("<p>El resultado es " + suma ("sdf", 4)+"</p>");
*/
function factorial(numero){
    if(isNaN(numero))
        return "No es un numero";

    let resultado = 1;
    for(let i = 1; i<= numero; i++){
        resultado *= i;
    }
    return resultado;
}

function imprimirFactorial(){
    const inputValor = document.getElementById("input_number").value;
    const resultado = factorial(inputValor);
/*Cuando es un clase document.querySelector(".container")
  Cuando es un ID document.querySelector("#container")
  Cuando es un elemento document.querySelector("div")
*/
    const container = document.querySelector(".container");
    container.innerHTML += "<p>Factorial de " + inputValor + " es: "+ resultado + "</p>";
}

