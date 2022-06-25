const nombres = ["Pepe", "Juan", "Maria", "Luisa", "Carlos", "Lucas"];
console.log(nombres);
console.log(nombres[3]);
console.log(nombres[6]);
console.log(nombres.length);

const data = [1, true, false, -2, "Hola mundo"];
console.log(data.length);
console.log(data[data.length - 1]);

/* agregando datos */
data.push("un dato");
console.log(data);

/* agregando un array en un array */
data.push(nombres);
console.log(data);

/* accediendo a los datos del array que está denro de otro array */
console.log(data[6][2]);

/* para eliminar un elemento al final del array */
console.log(data.pop());
console.log(data);

/* agregar un elemento al inicio del array */
data.unshift("Primero");
console.log(data);

/* para eliminar un elemento al inicio del array */
console.log(data.shift());
console.log(data);

/* reemplazando un valor */
data[2] = "Nuevo";
console.log(data);

/* retorna la posición de un dato en el array*/
console.log("posición de -2: " + data.indexOf(-2));