
// Created a series of questions

//-----------Uses Inquirer to get the prompt the user to guess----------
function Letter(guess) {
  this.guess = guess;
  this.printGuess = function(){
 console.log("Guess: " + this.guess)  

   }
} 

var count = 0 
var guessArr = []
var tenChances = function(){
var inquirer = require("inquirer");
      if (count < 10)
      inquirer.prompt([
        {
          name: "guess",
          message: "Enter a letter"
        },
        
      ]).then(function(user) {
         var newLetter = new Letter(
        user.guess)
         var hunch = newLetter.guess
        if (hunch === newLetter.guess) {
          guessArr.push(hunch)
      newLetter.printGuess()
      
      console.log(guessArr)
      count++
  tenChances()
      }

      else{
        console.log("Game Over")
        }
    })
  }
tenChances();
//     console.log("==============================================");
//     console.log("");
//     console.log(guessArr)
//     console.log("");
//     console.log("==============================================");
//   }

//   }
// }

// inquirer()