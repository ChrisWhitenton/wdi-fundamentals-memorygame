var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];//declared variable for cards in play and whose value is an empty array
//set id gameboard to variable
var gameBoard = document.getElementById('game-board');

//function to accomplish loop through card array and give each element an attribute that equals card value
var createBoard = function() {
    for(var i=0; i<cards.length; i++) {
    var cardDiv = document.createElement("div");
    cardDiv.className = 'card';
    //gives cards an attribute that equals the card value
    cardDiv.setAttribute('data-card', cards[i]);
    cardDiv.addEventListener('click', isTwoCards);
    gameBoard.appendChild(cardDiv);
    }
};

//checks if two cards are in play
var isTwoCards = function() {
    cardsInPlay.push(this.getAttribute('data-card'));
    console.log(this.getAttribute('data-card'));
    if (this.getAttribute('data-card') === 'king') {
        this.innerHTML = "<img src='kingofspades.jpg' alt='King of Spades'>"; // King of Spades Image
    } else {
        this.innerHTML = "<img src='queenofdiamonds.jpg' alt='Queen of Diamonds'>"; // Queen of Diamonds Image
    }
    if (cardsInPlay.length === 2) {
        isMatch(cardsInPlay);
        cardsInPlay = [];
    }
}
//checks if 2 cards selected are a match and alerts match or no match
var isMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("Winner, Winner. Chicken dinner!");
  } else  {
    alert("Sorry, no match");

  }
}
//calls the function
createBoard();

