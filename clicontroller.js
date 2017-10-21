var inquirer = require("inquirer");
var colors = require("colors");

var Deck = require("./deck.js");
var Card = require("./card.js");

var cardIndex = 0;
var currentDeck =[];

//Initiates Command Line Interface Constructor
var CliController = function(){
	inquirer.prompt([
	{
		type: "list",
		message: "Welcome to the this game of flashcards! \nTo start, which deck would you like to choose from?".rainbow,
		choices: ["Planets Deck".green, "Candy Deck".magenta],
		name: "deckchoice"
	}])
	.then(function(inquirerResponse){
		if(inquirerResponse.deckchoice === "Planets Deck".green){
			var firstPCard = new Card("question", "answer", "planet");
			currentDeck = firstPCard.planetCards;
			console.log(firstPCard.planetCards[cardIndex].question.green);
			fourPrompts();

		}else{
			var firstCCard = new Card ("question", "answer", "candy");
			currentDeck = firstCCard.candyCards;
			console.log(firstCCard.candyCards[cardIndex].question.magenta);
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
					nextPQuestion();
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
						console.log("The answer is " + currentDeck[cardIndex].answer.red);
						nextPQuestion();
					}else{
						console.log("You're wrong!");
						console.log("The answer is " + currentDeck[cardIndex].answer.red);
						nextPQuestion();
					}
			})
	};

	//displays next Planet Question
	this.nextPQuestion = function(){
		cardIndex++;
		var nextPCard = new Card("question", "answer", "planet");

		//once the user has cycled through all the cards, end the game
		if(cardIndex >= currentDeck.length){
			exitGame();
		}else{
		console.log(currentDeck[cardIndex].question.green);
		fourPrompts();
	}
};

	//displays next Candy Question
	this.nextCQuestion = function(){
		cardIndex++;
		var nextCCard = new Card("question", "answer", "candy");
		//once the user has cycled through all the cards, end the game		
		if(cardIndex >= currentDeck.length){
			exitGame();
		}else{
			console.log(currentDeck[cardIndex].question.magenta);
			fourPrompts();
		}
	};

	//flips card to display answer
	this.flipToAnswer = function(){
		var answerPCard = new Card("question", "answer", "planet");
		console.log("The answer is " + currentDeck[cardIndex].answer.red);
		nextPQuestion();
	};

	//exits the game
	this.exitGame = function(){
		console.log("Goodbye! Thanks for playing!".rainbow);
	};

};


module.exports = CliController;