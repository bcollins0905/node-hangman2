//var inquirer = require("inquirer");
//--------------Constructor Function that creates words-------------------

function Words(word){
 this.word = word
 this.printWord = function(){
 console.log("Word: " + this.word)	

	 }
}	

var word_1 = new Words("wolves");
var word_2 = new Words("muscle");
var word_3 = new Words("thievery");
var word_4 = new Words("replicate");
var word_5 = new Words("jungle");
var word_6 = new Words("wimpy");
var word_7 = new Words("tumultuous")
//--------------Word Bank---------------------------------------------------

var word_bank = [
	word_1,
	word_2,
	word_3,
	word_4,
	word_5,
	word_6,
	word_7
]

//----------Selecting a random Word from the word bank---------------------
var randWord = word_bank[Math.floor(Math.random() * word_bank.length)];

//----------Function that displays letters as tics in an array-------------
function makeTics(){
	var ticArr = [];
	var tic = "_"
	for (var i = 0; i < randWord.word.length; i++){
		ticArr.push(tic);
	}
		console.log(ticArr.join(" "))
}

var ticMaker = makeTics
makeTics()

//-----------------Function displays the solution in an array----------------------------
function makeSolutionArr(){ 
var solutionArr = [];
for (var i = 0; i < randWord.word.length; i++){
	var letter = randWord.word.charAt(i);
	//console.log(indexWord)
	solutionArr.push(letter);
	}

console.log(solutionArr);
 }
 var answerArr = makeSolutionArr();
 makeSolutionArr()


//-----------Uses Inquirer to get the user to guess and store it in an array----------
function Letter(guess) {
  this.guess = guess;
  this.printGuess = function(){
 console.log("Guess: " + this.guess)  
	}
} 

var attempts = 0 
var guessArr = []
function guessArrMkr(){
var inquirer = require("inquirer");
      if (attempts < 5)
      inquirer.prompt([
        {
          name: "guess",
          message: "Enter a letter"
        },
        
      ]).then(function(user) {
         var newLetter = new Letter(
             user.guess)
         var hunch = newLetter.guess
   	   	   if(hunch === newLetter.guess) {
	         guessArr.push(hunch)
	         newLetter.printGuess()
	      
		     console.log(guessArr)
		     attempts++
   			}

 guessArrMkr()

  		})    
else{
     console.log("Game Over")
        
    }
}
 guessArrMkr()

//----------------Making a game function  **not working**---------------------

function gameOn(guessArrMkr){
	guessArrMkr()
	answerArr()
	ticMaker()
	if(solutionArr.include(hunch)){
		//console.log(solutionArr);
		//console.log(tic);
		tic.replace(hunch)
	}
}  

gameOn()

