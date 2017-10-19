var Card = require("./card.js");

var Deck = function(){
	this.cards = [];

	this.addCards = function(f,b){
		this.cards.push(new Card(f,b));
	};

	this.cardCount = function(){
		return this.cards.length;
	}

	this.runPlanetsDeck = function(){
	console.log("You chose the Planets deck!");
	//display questions with for loop
	}

	this.runCandyDeck = function(){
	console.log("You chose the Candy deck!");
	//display questions with for loop
	}


};


//organize cards into decks

module.exports = Deck;
