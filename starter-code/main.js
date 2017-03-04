var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];



var currentScore = document.getElementById('score');

var createBoard = function () { 
	for (var i = 0; i < cards.length; i++) {
	var newCard = document.createElement('div');
		newCard.setAttribute('data-card', cards[i]);
		newCard.className = 'card';
		gameBoard.appendChild(newCard);
		newCard.addEventListener('click', isTwoCards);
	}
}
createBoard();



var gameBoard = document.getElementById('game-board');
var allCards = document.getElementsByClassName('card');
var currentScore = document.getElementById('score');

var createCards = function() {
	for(var i=0; i<4; i++);
	var cardDiv = document.createElement("div");
	cardDiv.className = 'card';
	gameBoard.appendChild(cardDiv);	
}
createCards();


var isMatch = function() {
   if (cardsInPlay[0] === cardsInPlay[1]) {
     score += 1;
     tallyElement.innerHTML = score;
     setTimeout(function(){
       alert ("You found a match!")
   } else {
     setTimeout(function) 
       alert("Sorry, no match.");
     }
   }

var isTwoCards = function () {
   	cardsInPlay.push(this.getAttribute('data-card'));
   	if (this.getAttribute('data-card') === 'king') {
			this.innerHTML = '<img src="king of hearts.jpeg" alt="King of Hearts" />';
	   } else {
			this.innerHTML = '<img src="queen of hearts.jpg" alt="Queen of Clubs" />';
		}
		if (cardsInPlay.length === 2) {
			isMatch(cardsInPlay);
			cardsInPlay = [];
	}