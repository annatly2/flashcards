var Deck = require("./deck.js");

var Card = function(question, answer){
	this.question = question;
	this.answer = answer;

	//object with planet cards
	this.planetCards = [{
		question: "What is the smallest planet in the Solar System?",
		answer: "mercury"
	},{
		question: "What is the brightest planet in the night sky?",
		answer: "venus"
	},{
		question: "The sixth planet from the Sun features an extensive ring system, what is the name of this planet?",
		answer: "saturn"
	},{
		question: "What is the largest planet in the Solar System?",
		answer: "jupiter"
	}];
	
	//object with candy cards
	this.candyCards =[{
		question: "What candy bar was named after its inventor's family horse?",
		answer: "snickers"
	},{
		question: "What candy bar was invented by the Curtiss Candy Company of Chicago in 1923?",
		answer: "butterfingers"
	},{
		question: "This popular treat contains a coconut base and is coated in dark chocolate. Which Hershey's candy is this?",
		answer: "mounds"
	},{
		question: "Hershey’s calls these 'licorice candy', but most of these do not have licorice as the main ingredient. What candy is this?",
		answer: "twizzlers"
	}];

}
module.exports = Card;
