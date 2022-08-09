const div_container = document.getElementById("resultado");
/*
* camelCase / strip-case / snake_case
*/
class Carro {
    constructor(color, velocidad) {
        this.setColor(color);
        this.setVelocidad(velocidad);
    }
    setColor(color) {
        this.color = String(color).toLocaleLowerCase();
    }
    setVelocidad(velocidad) {
        this.velocidad = velocidad + "km/h";
    }
    getColor() {
        return this.color;
    }
    getVelocidad() {
        return this.velocidad;
    }
    presentacion() {
        const texto ="Hola, soy un carro de color " + this.getColor()
        + " y tengo una velocidad de: " + this.getVelocidad();
        return texto;
    }
}

class Cuadrado {
    constructor(_lado){
        this.lado = _lado;
    }
    get area(){
        return (this.lado^2 + "m2");
    }
    set area(_area){
        this.lado = Math.sqrt(_area);
    }
}
const c1 = new Cuadrado(4);
c1.lado = 5;

div_container.innerHTML +="<p>"+ c1.area + "</p>";
div_container.innerHTML +="<hr>";

c1.area = 36;
div_container.innerHTML +="<p>"+ c1.lado + "</p>";
div_container.innerHTML +="<hr>";


class User {
    static cantidad = 0;
    constructor(_id, _fist_name, _last_name){
        this.id = _id;
        this.fist_name = _fist_name;
        this.last_name = _last_name;
        User.cantidad++;
    }
    get fullName() {
        return this.fist_name + " " + this.last_name;
    }
    set fullName(_fullname){
        this.first_name = _fullname.split(" ")[0];
        this.last_name = _fullname.split(" ")[1];
    }

    static getCantidad(){
        return User.cantidad;
    }
}

const u1 = new User(1, "Roberto", "Quiroga");
const u2 = new User(2, "Roberto", "Quiroga");
const u3 = new User(3, "Roberto", "Quiroga");
const u4 = new User(4, "Roberto", "Quiroga");



div_container.innerHTML += "<p>"+ u1.fullName + "</p>";
div_container.innerHTML += "<hr>";
div_container.innerHTML += "<p>"+ u2.fullName + "</p>";
div_container.innerHTML += "<hr>";
div_container.innerHTML += "<p>"+ u3.fullName + "</p>";
div_container.innerHTML += "<hr>";
div_container.innerHTML += "<p>"+ u4.fullName + "</p>";
div_container.innerHTML += "<hr>";

console.log(User);
//console.log(User.length());
console.log(User.cantidad);
console.log(User.getCantidad());

function crearCarros(){
    let carroArray = [];
    const cantidad = document.querySelector("#cantidad").value;
    
    for (let i=1; i<=cantidad; i++){
        carroArray.push(new Carro("PLATA", 200 * Math.random()));
    }
    div_container.innerHTML = "";
    for (carro of carroArray) {
        div_container.innerHTML += "<p>" + carro.presentacion() + "</p>";
        div_container.innerHTML += "<hr>";
        
    }
}
