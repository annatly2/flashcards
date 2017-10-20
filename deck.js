var Card = require("./card.js");

var Deck = function(Card){
	this.card = [];


	this.addCards = function(f,b){
		this.cards.push(new Card(f,b));
	};

	this.cardCount = function(){
		return this.cards.length;
	}

	this.initialPlanetsDeck = function(){
	console.log("You chose the Planets deck!");
	
	//console.log(Card.question);
	//console.log(planetCards)
	//display questions with for loop?
	
	}

	this.runCandyDeck = function(){
	console.log("You chose the Candy deck!");
	//display questions with for loop
	}


};


module.exports = Deck;
