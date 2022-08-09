const inputPassword = document.querySelector("#input-password");
const inputPasswordConfirm = document.querySelector("#input-password-confirm");
const checkBoxShowPassword = document.querySelector("#checkbox-show-password");
const textError = document.querySelector(".text-error");
const inputPhoneNumber = document.querySelector("#input-tel");
const inputEmail = document.querySelector("#input-email");
const emailError = document.querySelector(".email-error");

checkBoxShowPassword.onchange = function () {
  // if (this.checked) {
  //   inputPassword.type = "text"
  // } else {
  //   inputPassword.type = "password"
  // }

  // Conversion a ternario
  inputPassword.type = this.checked ? "text" : "password";
};

inputPasswordConfirm.onkeyup = function () {
    const password = inputPassword.value;
    const confirmPassword = this.value;
    if(inputPassword.value === ""){
        alert("debe completar el password para poder escribir en este input");
        this.value = "";
        inputPassword.focus();
        return;
    }
    if(password !== confirmPassword) {
        console.log("los password no son iguales");
        textError.style.display = "block";
        return;
    }
    textError.style.display = "none";
    console.log("los passwod coinciden");
};
/*
inputPhoneNumber.onkeyup = function () {
    const valor = this.value;
    const caracteres = valor.split("");
    let newVAlue ="";
    caracteres.forEach((caracter)=>{
    if(!isNaN(Number(caracter))) {
        newVAlue += caracter;
    }
  });
  this.value = newVAlue;
}
*/

inputEmail.onkeyup = function () {
    const value = this.value;
    const regex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/gm;
//  console.log(regex.test(value));  
// Reto
// Si regex es falso muestren un mensaje de error
// Si es verdade no muestren nada
    let estado = "none";
    if(!regex.test(value)) estado = "block";
    emailError.style.display = estado;
}