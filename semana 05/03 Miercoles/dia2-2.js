  const container = document.querySelector(".container");
  const inputSearch = document.querySelector("#input-search");
  const btnSearch = document.querySelector("#btn-search");
  const btnReset = document.querySelector("#btn-reset")

  function createCards(arrayDatos) {
  
  container.innerHTML = "";
  inputSearch.value = "";
  if(arrayDatos.length===0){
    container.innerHTML = "<h2>no se encontró resultado</h2>"
    return;
  }
  
    arrayDatos.map((laptop) => {
    // ahora en esta seccion vamos a crear los card
    // Esto es JS se llama template string => ``
    // Sirve para poder tener texto y variable juntos
    //return `La laptop se llama ${laptop.nombre} y el precio es ${laptop.precioOferta}`;
    container.innerHTML += `
    <div class="card">
        <h4 class="title">${laptop.nombre}</h4>
          <div class="container-photo">
          <img
              src=${laptop.imagen}
              alt=""
              width="300"
          />
          </div>
          <div class="container-price">
            <p class="price">Precio: S/ ${laptop.precioNormal}</p>
            <p class="sale-price">Oferta: S/ ${laptop.precioOferta}</p>
          </div>
          <button class="btn-buy">Comprar</button>
    </div>
     `;
  });
}

createCards(laptops);

btnSearch.onclick = function () {
  const textSearch = inputSearch.value;

  if(textSearch===""){
    alert("Debe escribir un texto para iniciar la búsqueda");
    return;
  }
//? NOTA: se transforma a minúscula ambos textos
  const filtro = laptops.filter(laptop => laptop.nombre.toLocaleLowerCase().includes(textSearch.toLocaleLowerCase())||
  laptop.marca.toLocaleLowerCase().includes(textSearch.toLocaleLowerCase()));
  createCards(filtro);
}

btnReset.onclick = () => createCards(laptops);