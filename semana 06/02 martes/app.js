// PLAYER:
const input_username = document.querySelector('#username');
const button_start = document.querySelector('#start');
const div_game = document.querySelector('#game');

input_username.addEventListener('keyup', function() {
    button_start.disabled = (this.value == "");
});

button_start.addEventListener('click', function() {
    this.parentElement.querySelector('h2').innerText += 
    `Hello ${input_username.value}, let's play`;
    this.parentElement.querySelector('h2').style.display = 'block';

    input_username.disabled = true;
    this.disabled = true;

    div_game.style.display = 'flex';
})

// GAME:
const pi_decimals = "1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109";
let position = 0;

let score = 0;
let attempts = 0;
let sattempts = 0;
let fattempts = 0;

const input_pi = document.querySelector("#user_pi");
const result_pi = document.querySelector("#result_pi");

const h3_attempts = document.querySelector("#h3_attempts");
const h3_sattempts = document.querySelector("#h3_sattempts");
const h3_fattempts = document.querySelector("#h3_fattempts");

// KeyDown -> KeyPress -> input value -> KeyUp

input_pi.addEventListener('keyup', function () {
    this.value = "";
    this.focus();
});

input_pi.addEventListener('keydown', function (evt) {
    const decimal = String.fromCharCode(evt.keyCode);

    attempts++;
    
    // evaluar reglas:
    if (decimal == "" || isNaN(decimal) || decimal != pi_decimals.charAt(position)) {
        div_game.style.backgroundColor = 'red';
        fattempts++;
    } else {
        // si pasó las reglas:
        div_game.style.backgroundColor = 'green';
        result_pi.innerText += decimal;
        position++;
        sattempts++;
    }
    // usar timeout para pintarlo de negro:
    setTimeout(function () {
        div_game.style.backgroundColor = 'transparent';
    }, 250);

    // SCORE:
    h3_attempts.querySelector('span').innerText = attempts;
    h3_sattempts.querySelector('span').innerText = sattempts;
    h3_fattempts.querySelector('span').innerText = fattempts;
    h3_score.querySelector('span').innerText = score;
});