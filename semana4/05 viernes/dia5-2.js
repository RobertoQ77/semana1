/*
function restar(n1 = 4, n2 = 5){
    return n1 - n2;
}
//n2 tiene el valor de 5 por defaul
console.log("Resta1 ", restar(6));
console.log("Resta2 ", restar(4, 8));
console.log("Resta3 ", restar());
console.log("Resta4 ", restar(4, 4));

const multiplicar = funcion (n1, n2 = 3) {
    return n1 * n2;
}
console.log("multiplicar ", multiplicar(5,6));

const dividir =(n1, n2) => {
    return validarSiEsNumero(n1) || validarSiEsNumero(n2);
    ?"Error número no valido";
    : 11 / n2;
}

function validarSiEsNumero(numero){
    return !isNaN(numero);
}
*/
//Creando un array
const alumnos = [];
const imprimirAlumnos = () => {
    const inputNombre = document.querySelector("#input_name");
    const nombre = inputNombre.value;
    // Estamos agregando el alumnos al array
    alumnos.push(nombre);
    // Estamos indicando el value del input es igual cuando hacemos estos
    // estamos limpiado el contenido del input
    inputNombre.value = "";
    const resultado = document.querySelector(".resultado");
  
    // Siempre debemos limpiar el espacio del resultado antes del for
    resultado.innerHTML = "";
  
    for (let alumno of alumnos) {
      // += es adicion es una suma la
      //  resultado.innerHTML = resultado.innerHTML + "<p>" + alumno + "</p>";
      // Indica que al contenido anterior le agremos esto si yo no uso el +=
      // va a reemplazar el contenido
      resultado.innerHTML += "<p>" + alumno + "</p>";
    }
  };

const calcularPromedio = () => {
    const nota1 = Number(document.querySelector("#nota1").value);
    const nota2 = Number(document.querySelector("#nota2").value);
    const nota3 = Number(document.querySelector("#nota3").value);
    const nota4 = Number(document.querySelector("#nota4").value);
    const resultado2 = document.querySelector(".resultado2");
  
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
      alert("Ingrese numeros validos");
      return;
    }
  
    if (nota1 > 20) {
      alert("La nota 1 no debe ser mayor a 20");
      return;
    }
  
    if (nota2 > 20) {
      alert("La nota 2 no debe ser mayor a 20");
      return;
    }
  
    if (nota3 > 20) {
      alert("La nota 3 no debe ser mayor a 20");
      return;
    }
  
    if (nota4 > 20) {
      alert("La nota 4 no debe ser mayor a 20");
      return;
    }
  
    const promedio = (nota1 + nota2 + nota3 + nota4) / 4;
    resultado2.innerHTML = "<p>El pomedio es: " + promedio + "</p>";
  };