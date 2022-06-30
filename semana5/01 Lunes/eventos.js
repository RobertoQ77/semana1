const btnTest = document.querySelector("#btn-test");
btnTest.onclick = () => {
    console.log("Es un click");
}

const h1 = document.querySelector("#h1-test");
h1.onclick = () => {
    console.log("click desde el h1");
    h1.innerText = "Cambiando el texto";
}

const users = [];
const form = document.querySelector("#form-store-user");

form.onsubmit = (event) => {
    // para bloquear la acción de refrescar la página
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const user = {};
    for(let dato of formData.entries()){
        console.log("key", dato[0]);
        console.log("value", dato[1]);
        console.log("---------------");
        user[dato[0]] = dato[1];
    }
    users.push(user);
}