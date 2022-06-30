const products = [
    {
      name: "Laptop HP",
      price: 1300,
      brand: "HP",
    },
    {
      name: "Laptop Gamer",
      price: 2100,
      brand: "Lenovo",
    },
    {
      name: "Laptop Super Poderosa",
      price: 5300,
      brand: "Alien Ware",
    },
    {
      name: "Laptop/Tablet",
      price: 2400,
      brand: "ASUS",
    },
  ];

  const productsIterForEach = products.forEach((product) => {
    // forEach no retorna ningún valor;
    return product.price - 100;
  });

  const productsIterMap = products.map((product) => {
    // map retorna el array
    return product.price - 100;
  });

console.log("forEach", productsIterForEach);
console.log("map", productsIterMap);

const clothes = [
    {
      brand: "Mango",
      type: "Shirt",
      price: 200,
      store: "Falabella",
      rating: 4.3,
      features: {
        color: "green",
        size: "small",
      },
    },
    {
      brand: "Zara",
      type: "Pants",
      price: 300,
      store: "Zara",
      rating: 3.9,
      features: {
        color: "black",
        size: 32,
      },
    },
    {
      brand: "Tommy",
      type: "T-shirt",
      price: 120,
      store: "Tommy",
      rating: 4.3,
      features: {
        color: "blue",
        size: "M",
      },
    },
  ];

//Filtro para precio de ropa > 150
const filtro = clothes.filter((clothe) => clothe.price > 150);
console.log("filtro 1", filtro);

// Filtro de 2 condiciones
// Pedimos que el precio sea > 150 y rating > 4
const filtro2 = clothes.filter(
  (clothe) => clothe.price > 150 && clothe.rating > 4
);
console.log("filtro 2", filtro2);

// vamos a buscar en el array de objetos las prendas que contengan la palabra shirt
// En la condicion clothe.type.includes("shirt")
// quiero que en el string clothe.type busques si "shirt" existe
// un truco para evitarnos el tema del las mayusculas o minusculas
// es convertir el texo a mayusulas o minusculas
// T-shirt => t-shirt
// pants => pants
// Shirt => shirt

// includes basicamente sirve para buscar algo en un texto
// ejempo
const frase = "HolameLlamocarlos";
// Basicamente include recibe un paramtro string y lo busca en el texto
// si lo encuentro retorna true, si no lo hace retorana false
//HolameLlamocarlos => holamellamocarlos
console.log(frase.toLowerCase().includes("llamo"));

const filtroShirt = clothes.filter((clothe) =>
  clothe.type.toLowerCase().includes("shirt")
);
console.log("filtroShirt", filtroShirt);

const filtroPants = clothes.filter((clothe) =>
  clothe.type.toLowerCase().includes("pant")
);
console.log("filtroPants", filtroPants);

const numbers = [10, 20, 30, 40, 50, 60, 70];
const numerosMayores = numbers.filter((number, index) => number > 30);
console.log(numerosMayores);

// Solo retorna un elemento, es decir no da una busqueda de solamente 1 elemento
// ojo: Find no retorna un array el solo retorna 1 elemento
// el elemnto que retorne find sera el primero que encuentre
// por ende como en la condicion dice > 30
// va a buscar al numero mayor a este y al primero que encuentro lo va a retornar
const numeroMayoresFind = numbers.find((number) => number > 30);
console.log("numeroMayoresFind", numeroMayoresFind);

// Ejmplo2
const cars = [
  {
    model: "GLA 200",
    price: 34000,
    brand: "Mercedez",
  },
  {
    model: "A 200",
    price: 14000,
    brand: "Mercedez",
  },
  {
    model: "X6",
    price: 34000,
    brand: "BMW",
  },
];
// Queremos el primero elemento de lista que sea de la marca mercedez
const filtroMercedez = cars.find((car) => car.brand === "Mercedez");
console.log("filtroMercedez", filtroMercedez.model);

// Find tiene un hermanito llamado findIndex
// El es lo mismo que find sin embargo lo que retorna es el indice
const filtroIndice = cars.findIndex((car) => car.brand === "Mercedez");
const filtroBMW = cars.findIndex((car) => car.brand === "BMW");
console.log("filtroIndice", filtroIndice);
console.log("filtoBMW", filtroBMW);