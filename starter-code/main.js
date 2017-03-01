var cardOne='queen';
var cardTwo='queen';
var cardThree='king';
var cardFour='king';

var cardTwo='queen'; cardFour='king'; cardOne='queen'; cardThree='king';

	if (cardTwo === cardFour && cardOne === cardThree){ 
	result = alert ("Sorry, try again.");
	}
	else if  (cardOne === cardTwo && cardThree === cardFour){
	result = alert ("You found a match!");
	}
