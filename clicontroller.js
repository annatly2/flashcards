var inquirer = require("inquirer");
var Deck = require("./deck.js");
var Card = require("./card.js");

var cardIndex = 0;

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
			console.log(firstPCard.planetCards[cardIndex].question);
			fourPrompts();

		}else{
			var firstCCard = new Card ("question", "answer", "candy");
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
				console.log(answer);
				var answerCard = new Card ("q", "a", "d");
				console.log(answerCard.planetCards[cardIndex].answer);

					if(answer.userInput === answerCard.planetCards[cardIndex].answer){
						console.log("You are correct!");
						cardIndex++;
						nextPQuestion();
						fourPrompts();

					}else{
						console.log("You're wrong!");
						cardIndex++;
						nextPQuestion();
						fourPrompts();
					}
				
			})
	};

	//displays next Planet Question
	this.nextPQuestion = function(){
		cardIndex++;
		var nextPCard = new Card("question", "answer", "planet");
		console.log(nextPCard.planetCards[cardIndex].question);
		fourPrompts();
	};

	//displays next Candy Question
	this.nextCQuestion = function(){
		var nextCCard = new Card("question", "answer", "candy");
		console.log(nextCCard.candyCards[cardIndex].question);
	};

	this.flipToAnswer = function(){
		var answerPCard = new Card("question", "answer", "planet");
		console.log(answerPCard.planetCards[cardIndex].answer);
		nextPQuestion();
		fourPrompts();
	};


	this.exitGame = function(){
		console.log("Goodbye! Thanks for playing!");
	};



};


module.exports = CliController;

