var Deck = require("./deck.js");

function Card(question,answer){
	this.question = question;
	this.answer = answer;
}



var q1 = new Card("The Great Red Spot is a gigantic storm located on which planet in our solar system?", "Jupiter");

module.exports = Card;
