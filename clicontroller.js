var inquirer = require("inquirer");
var colors = require("colors");

var Deck = require("./deck.js");
var Card = require("./card.js");


var cardIndex = 0; //card index counter
var currentDeck =[]; //currentDeck will be planets or candy deck

//Initiates Command Line Interface Constructor
var CliController = function(){
	inquirer.prompt([
	{
		type: "list",
		message: "Welcome to the this game of flashcards! \nTo start, which deck would you like to choose from?".cyan,
		choices: ["Planets Deck".green, "Candy Deck".magenta],
		name: "deckchoice"
	}])
	.then(function(inquirerResponse){
		if(inquirerResponse.deckchoice === "Planets Deck".green){
			var firstPCard = new Card("question", "answer");
			currentDeck = firstPCard.planetCards;
			console.log(firstPCard.planetCards[cardIndex].question.blue.bold.underline);
			fourPrompts();

		}else{
			var firstCCard = new Card ("question", "answer");
			currentDeck = firstCCard.candyCards;
			console.log(firstCCard.candyCards[cardIndex].question.blue.bold.underline);
			fourPrompts();
		}
	});

//Function for the four different prompts
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
					answerQuestion();
					break;

				case "Flip to see the answer":
					flipToAnswer();
					break;

				case "Skip this card to the next":
					nextQuestion();
					break;

				case "Exit the game":
					exitGame();
					break;
			}
		})
	};

//Function when user chooses to answer the question
	this.answerQuestion = function(){
		inquirer.prompt([
			{
				name: "userInput",
				message: "Type your answer.",
				type: "input"
			}]).then(function(answer){
				var answerCard = new Card ("q", "a", "d");
					if(answer.userInput === currentDeck[cardIndex].answer){
						console.log("You are correct!");
						console.log("The answer is " + currentDeck[cardIndex].answer.red.bold);
						nextQuestion();
					}else{
						console.log("You're wrong!");
						console.log("The answer is " + currentDeck[cardIndex].answer.red.bold);
						nextQuestion();
					}
			})
	};

	//displays next question
	this.nextQuestion = function(){
		cardIndex++;
		var nextCard = new Card("question", "answer");

		//once the user has cycled through all the cards, end the game
		if(cardIndex >= currentDeck.length){
			exitGame();
		}else{
		console.log(currentDeck[cardIndex].question.blue.bold.underline);
		fourPrompts();
	}
};

	//flips card to display answer
	this.flipToAnswer = function(){
		var answerCard = new Card("question", "answer");
		console.log("The answer is " + currentDeck[cardIndex].answer.red.bold);
		nextQuestion();
	};

	//exits the game
	this.exitGame = function(){
		console.log("Goodbye! Thanks for playing!".rainbow.bold);
	};

};

module.exports = CliController;