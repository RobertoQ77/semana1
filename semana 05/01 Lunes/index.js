const h1 = document.querySelector("h1");
//innerHTML se usa para escribir etiquetas
//innerText se usa para escribir dentro de las etiquetas
h1.innerHTML = "Cambiando del valor del H1 desde JS"
console.log(h1);

document.title = "Lo hicimos en JS";

// Se recomienda no usar CSS dentro de JS
document.body.style.backgroundColor = "#C3C3C3";
document.body.style.marginTop = "10px";
document.body.style.fontFamily = "Helvetica";
h1.style.color = "blue";
//-----------------------------------------------
