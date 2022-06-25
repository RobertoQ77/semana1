function tablaMultiplicar(){
    const inputValor = document.getElementById("input_number").value;
    const container = document.querySelector(".resultado");
    container.innerHTML = "";
    if(isNaN(inputValor)){
        container.innerHTML = "<p> No es un número </p>";
        return;
    }else{
        container.innerHTML += "<p> Tabla del número " + inputValor + "</p>";
        for(let i= 0; i<=12; i++){
            let resultado = inputValor * i;
            container.innerHTML += "<p>" + inputValor + " x " + i + " = " + resultado + "</p>";
        }
    }
}