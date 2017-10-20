var Deck = require("./deck.js");

var Card = function(question, answer, deck){
	this.question = question;
	this.answer = answer;
	this.deck = deck;

	this.planetCards = [{
		question: "What is the smallest planet in the Solar System?",
		answer: "Mercury",
	},{
		question: "What is the brightest planet in the night sky?",
		answer: "Venus",
	},{
		question: "The sixth planet from the Sun features an extensive ring system, what is the name of this planet?",
		answer: "Saturn",
	},{
		question: "What is the largest planet in the Solar System?",
		answer: "Jupiter"
	}]

	this.candyCards =[];
}



var p1 = new Card("What planet is nicknamed the ‘Red Planet’?", "Mars", "planet");
var p2 = new Card("What is the smallest planet in the Solar System?", "Mercury", "planet");
var p3 = new Card ("What is the brightest planet in the night sky?", "Venus", "planet");
var p4 = new Card ("The sixth planet from the Sun features an extensive ring system, what is the name of this planet?", "Saturn", "planet");
var p5 = new Card ("What is the largest planet in the Solar System?", "Jupiter", "planet");




module.exports = Card;
