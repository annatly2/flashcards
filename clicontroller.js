var inquirer = require("inquirer");
var Deck = require("./deck.js");
var Card = require("./card.js");

var cardIndex = 0;
var currentDeck =[];

//Initiates Command Line Interface Constructor
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
			var firstPCard = new Card("question", "answer", "planet");
			currentDeck = firstPCard.planetCards;
			console.log(firstPCard.planetCards[cardIndex].question);
			fourPrompts();

		}else{
			var firstCCard = new Card ("question", "answer", "candy");
			currentDeck = firstCCard.candyCards;
			console.log(firstCCard.candyCards[cardIndex].question);
			//run candy deck
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


//how do I get this to work for both planets & candy? Right now only works for planets

	this.answerQuestion = function(){
		inquirer.prompt([
			{
				name: "userInput",
				message: "Type your answer.",
				type: "input"
			}]).then(function(answer){
				var answerCard = new Card ("q", "a", "d");
				console.log(currentDeck[cardIndex].answer);

					if(answer.userInput === currentDeck[cardIndex].answer){
						console.log("You are correct!");
						console.log("The answer is " + currentDeck[cardIndex].answer);
						nextPQuestion();

					}else{
						console.log("You're wrong!");
						console.log("The answer is " + currentDeck[cardIndex].answer);
						nextPQuestion();
					}
			})
	};

	//displays next Planet Question
	this.nextPQuestion = function(){
		cardIndex++;
		var nextPCard = new Card("question", "answer", "planet");
		if(cardIndex >= currentDeck.length){
			exitGame();
		}else{
		console.log(currentDeck[cardIndex].question);
		fourPrompts();
	}
};

	//displays next Candy Question
	this.nextCQuestion = function(){
		cardIndex++;
		var nextCCard = new Card("question", "answer", "candy");
		if(cardIndex >= currentDeck.length){
			exitGame();
		}else{
			console.log(currentDeck[cardIndex].question);
			fourPrompts();
		}
	};

	this.flipToAnswer = function(){
		var answerPCard = new Card("question", "answer", "planet");
		console.log(currentDeck[cardIndex].answer);
		nextPQuestion();

	};


	this.exitGame = function(){
		console.log("Goodbye! Thanks for playing!");
	};




};


module.exports = CliController;

