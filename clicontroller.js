var inquirer = require("inquirer");
var Deck = require("./deck.js");
var Card = require("./card.js");

var CliController = function(){
	inquirer.prompt([
	{
		type: "list",
		message: "Welcome to the this game of flashcards! To start, which deck would you like to choose from?",
		choices: ["Planets Deck", "Candy Deck"],
		name: "deckchoice"
	}])
	.then(function(inquirerResponse){
		if(inquirerResponse.deckchoice === "Planets Deck"){
			var p1Card = new Card("What planet is nicknamed the ‘Red Planet’?", "Mars", "planet");
			var p1Deck = new Deck(p1Card)
			p1Deck.runPlanetsDeck();
			fourPrompts();
		}else{
			//run candy deck
			fourPrompts();
		}
	});


	this.fourPrompts = function(){
		inquirer.prompt([
			{
				name: "action",
				type: "list",
				message: "What action would you like to take?",
				choices: ["Answer the question", "Flip to see the answer", "Skip this card to the next", "Exit the game"]
			}])

		.then(function(answer){
			switch(answer.action){
				case "Answer the question":
					//allow user to type in an answer
					break;
				case "Flip to see the answer":
					//show answer
					break;
				case "Skip this card to the next":
					//show the next question
					break;
				case "Exit the game":
					//exit and end the game
					break;
			}
		})
	};




	this.AnswerQuestion = function(){

	}


	this.FlipToAnswer = function(){

	}
};

module.exports = CliController;

