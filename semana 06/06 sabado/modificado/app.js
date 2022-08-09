import { cardArray, flipCard } from "./card.js";

// Barajamos las cartas aleatoriamente:
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");

let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.src = "images/blank.png";
    // card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", function () {
      flipCard(card, cardsChosen, cardsChosenId, checkForMatch);
    });
    gridDisplay.append(card);
  }
}

createBoard();

function checkForMatch() {
  // cards es un array de todas las img renderizadas.
  const cards = document.querySelectorAll("img"); // nodelist

  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];

  if (optionOneId === optionTwoId) {
    // Esta misma card debe cerrarse (blank.png):
    cards[optionOneId].src = "images/blank.jpg";
  } else if (cardsChosen[0] === cardsChosen[1]) {
    // Queremos colocar ambas cartas como white.png:
    cards[optionOneId].src = "images/cup.jpg";
    cards[optionOneId].style.width = "100px";
    cards[optionTwoId].src = "images/cup.jpg";
    cards[optionTwoId].style.width = "100px";
    // Quitar event click a las cartas white:
    cards[optionOneId].removeEventListener("click", function () {
      flipCard(cards[optionOneId], cardsChosen, cardsChosenId, checkForMatch);
    });
    cards[optionTwoId].removeEventListener("click", function () {
      flipCard(cards[optionTwoId], cardsChosen, cardsChosenId, checkForMatch);
    });
    cardsWon.push(cardsChosen);
  } else {
    // Queremos volver a cerrar estas 2 cartas.
    cards[optionOneId].src = "images/blank.png";
    cards[optionTwoId].src = "images/blank.png";
  }

  cardsChosen = [];
  cardsChosenId = [];

  resultDisplay.textContent = cardsWon.length;
  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.textContent = "you win";
  }
}