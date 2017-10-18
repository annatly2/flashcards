var inquirer = require("inquirer");


function Deck(){



}


function Card(front,back){
	this.front = front;
	this.back = back;

back:"The Great Red Spot is a gigantic storm located on which planet in our solar system?"
front: "Jupiter"
}



function CliController(){
	inquirer.prompt([
	{
		type: "list",
		message: "Welcome to the this game of flashcards! To start, which deck would you like to choose from?",
		choices: ["Planets Deck", "Candy Deck"],
		name: "deckchoice"
	}])
	.then(function(inquirerResponse){
		if(inquirerResponse.deckchoice === "Planets Deck"){
			//run planets deck
			//else for candy deck
			inquirer.prompt([
			{
				type: "list",
				message: "What action would you like to take?",
				choices: ["answer", "flip", "next", "exit"],
				name: "action"
			}])
		}
	})
}


CliController();
