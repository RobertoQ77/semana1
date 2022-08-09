const cardArray = [
	{
		name: "fries",
		img: "images/fries.png",
	},
	{
		name: "cheeseburger",
		img: "images/cheeseburger.png",
	},
	{
		name: "hotdog",
		img: "images/hotdog.png",
	},
	{
		name: "ice-cream",
		img: "images/ice-cream.png",
	},
	{
		name: "milkshake",
		img: "images/milkshake.png",
	},
	{
		name: "pizza",
		img: "images/pizza.png",
	},
	{
		name: "fries",
		img: "images/fries.png",
	},
	{
		name: "cheeseburger",
		img: "images/cheeseburger.png",
	},
	{
		name: "hotdog",
		img: "images/hotdog.png",
	},
	{
		name: "ice-cream",
		img: "images/ice-cream.png",
	},
	{
		name: "milkshake",
		img: "images/milkshake.png",
	},
	{
		name: "pizza",
		img: "images/pizza.png",
	},
];

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
		card.setAttribute("src", "images/blank.png");
		card.setAttribute("data-id", i);
		card.addEventListener("click", flipCard);
		gridDisplay.append(card);
	}
}
createBoard();

function checkForMatch() {
	// cards es un array de todas las img renderizadas.
	const cards = document.querySelectorAll("img");
	const optionOneId = cardsChosenId[0];
	const optionTwoId = cardsChosenId[1];

	if (optionOneId === optionTwoId) {
		// Esta misma card debe cerrarse (blank.png):
		cards[optionOneId].setAttribute("src", "images/blank.png");
	} else if (cardsChosen[0] === cardsChosen[1]) {
		// Queremos colocar ambas cartas como white.png:
		cards[optionOneId].setAttribute("src", "images/white.png");
		cards[optionTwoId].setAttribute("src", "images/white.png");
		// Quitar event click a las cartas white:
		cards[optionOneId].removeEventListener("click", flipCard);
		cards[optionTwoId].removeEventListener("click", flipCard);
		cardsWon.push(cardsChosen);
	} else {
		// Queremos volver a cerrar estas 2 cartas.
		cards[optionOneId].setAttribute("src", "images/blank.png");
		cards[optionTwoId].setAttribute("src", "images/blank.png");
	}

	cardsChosen = [];
	cardsChosenId = [];

	resultDisplay.textContent = cardsWon.length;
	if (cardsWon.length === cardArray.length / 2) {
		resultDisplay.textContent = "you win";
	}
}

function flipCard() {
	let cardId = this.getAttribute("data-id");
	this.setAttribute("src", cardArray[cardId].img);
	cardsChosen.push(cardArray[cardId].name);
	cardsChosenId.push(cardId);

	if (cardsChosen.length === 2) {
		setTimeout(checkForMatch, 100);
	}
}