// var wordBank = []

// function words() {
//   if (word.length < 5) {
//     console.log("\nNEW WORD!\n");
//     inquirer.prompt([
//       {
//         word: "word",
//         message: "New Word: "
//       }

// function makeUnderScore(){ 
// 	var word_1 = [];
// 	for (var i = 0; i < word_1.length; i++){
//  		var underscore = ["__"];	
// 		word_1.push(underscore);
// 	//	console.log(underscore)
// 	}
// 	console.log('inside: ', word_1);
// 	//console.log(word_1)
// }
// var underScoreVar = makeUnderScore();

// var wordArray = []
// function(){

// }

//why am I not saying this.printWord
//what's wrong with console.log(word_1)




// function Character(name, profession, gender, age, strength, hitpoints) {
//   this.name = name;
//   this.profession = profession;
//   this.gender = gender;
//   this.age = age;
//   this.strength = strength;
//   this.hitpoints = hitpoints;
//   // method which prints all of the stats for a character
//   this.printStats = function() {
//     console.log("Name: " + this.name + "\nProfession: " + this.profession +
//     "\nGender: " + this.gender + "\nAge: " + this.age + "\nStrength: " +
//     this.strength + "\nHitPoints: " + this.hitpoints);
//     console.log("\n-------------\n");
//   };
//  }

// var warrior = new Character("Crusher", "Warrior", "Male", 25, 10, 75);
// var rogue = new Character("Dodger", "Rogue", "Female", 23, 20, 50);

// warrior.printStats();
// rogue.printStats();

// var words = ['centaurus', 'martian', 'abduction', 'specimen', 'crop circles', 'little green men', 'beam me up scotty'];

// // This function will pick our word
// var randWord = words[Math.floor(Math.random() * words.length)];
// // This gives us the blanks

// // I'd suggest adding console.logs all over the place so you can verify your assumptions by checking the console
// // It's also a nice way to see intermediate process when nothing's appearing on the screen quite yet


// var s = "overpopulation";
// var ar = [];
// ar = s.split();
// console.log(ar[0]);


// console.log('randWord: ', randWord)

//var inquirer = require('inquirer');

// var arr = [10, 13, 17, 21]
// for (var i = 0; i<arr.length; i++){
// setTimeout(function(){
// 	console.log(arr[i])
// 	}, 1000)

// }
// var question = [{
//   name: 'tacoIngredient',
//   message: 'Whats another tasty thing to add to your taco?',
//   default : ''
// }]

// var tacoIngredients = [];

// function finalAction(){

//   console.log('Make a taco with: =>' + tacoIngredients)
// }

// function askOrPerformFinalAction(answer) {

//   ingredientsList.push(answers.tacoIngredient);

//   if (!answers.tacoIngredient) {
//     finalAction(tacoIngredients);
//     return;
//   }

//   return inquirer.prompt(question, askOrPerformFinalAction);
// }

// var inquirer = require("inquirer");

// inquirer
//   .prompt([
//     {
//       type: "list",
//       message: "Would you like to play an amazing word game?",
//       choices: ["Yes", "No"],
//       name: "playgame"
//     },
//     {
//       type: "input",
//       message: "Guess a Letter",
//       name: "letterguess"
//     },
          
 
//   ])
//   .then(function(inquirerResponse) {
//     // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
//     if (inquirerResponse.playgame) {
//       console.log("\nGreat!  Let's Play!\n");
//     }
//     else {
//       console.log("\nReally? Fine then.\n");
//     }
//   });


   // {
    //   type: "input",
    //   message: "Enter a letter",
    //   name: "username"
    // },

//inquirer

//   .prompt([





// .then(function (answers) {
//  console.log(answers.input)
// }); 
// function gameLoop(){
// var guessArr  = [];
// for(var i=0; i < 10; i++){
//     var userGuess = "";
// 	var inquirer = require("inquirer");
// guessArr.push(userGuess);

// inquirer.prompt([
//   {
//     type: "input",
//     name: "guess",
//     message: "Enter a letter"
//   },
// ]).then(function(user) {
//       console.log("joy")
      //if (user.guess === guess) {
  	
  	  //guessArr.push(user.guess)
// 	})

// }
// }
	 	
// 	})
//     console.log("==============================================");
//     console.log("");
//     console.log(guessArr)
//     console.log("");
//     console.log("==============================================");


// 	}

// }

// gameLoop()

var answerArr = ["h", "o", "t"]
