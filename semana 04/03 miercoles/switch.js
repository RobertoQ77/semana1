document.write("<h1>Día 3 Switch</h1>");
const angulo = Number(prompt("Ingrese un ángulo"));
switch (angulo) {
    case 0:
        msj = "Ángulo nulo";
        break;
    case 90:
        msj = "Ángulo recto";
        break;
    case 180:
        msj = "Ángulo llano";
        break;
    case 360:
        msj = "Ángulo completo";
        break;
    default:
        msj ="Ángulo inexistente";
        break;
}
document.write("<p>" + msj + "</p");