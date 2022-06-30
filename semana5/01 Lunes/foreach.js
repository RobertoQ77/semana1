const alumnos = ["Juan", "pepe", "luis", "maria", "carla", "ale"];
alumnos.forEach((value, index) => {
    console.log("index =>", index);
    console.log("value =>", value);
});

const carros = [
    {modelo: "Nissan GTR", price: 10000},
    {modelo: "Mercedez GLA", price: 20000},
    {modelo: "BMW x6", price: 30000}
]
carros.forEach((carro, index) => {
    console.log(carro);
})