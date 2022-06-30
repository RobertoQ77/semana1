const libros = [
    {
      marca: "O'RELLY",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJialZypWUgkotpBO1eI6FZJiw3MRZGbsvb5icrEP9t-xHm7wr",
      nombre: "Java Script The definitive Guide",
      vendedor: "Amazon",
      precioOferta: 14.94,
      precioNormal: 32.49,
      calificacion: 2,
    },
    {
      marca: "Robin Wieruch",
      imagen:
        "https://m.media-amazon.com/images/I/41m+5+-JRNL.jpg",
      nombre: "The Road to React",
      vendedor: "rw;eruch",
      precioOferta: 29,
      precioNormal: 29,
      calificacion: 5,
    },
  ];
  const container = document.querySelector(".container");
  libros.map((libro) => {
    // ahora en esta seccion vamos a crear los card
    // Esto es JS se llama template string => ``
    // Sirve para poder tener texto y variable juntos
    //return `La laptop se llama ${laptop.nombre} y el precio es ${laptop.precioOferta}`;
    container.innerHTML += `
    <div class="card">
        <h4 class="title">${libro.nombre}</h4>
          <div class="container-photo">
          <img
              src=${libro.imagen}
              alt=""
              width="300"
          />
          </div>
          <div class="container-price">
            <p class="price">Precio: S/ ${libro.precioNormal}</p>
            <p class="sale-price">Oferta: S/ ${libro.precioOferta}</p>
          </div>
          <button class="btn-buy">Comprar</button>
    </div>
     `;
  });