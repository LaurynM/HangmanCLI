var inquirer = require('inquirer');
var Word = require("./word.js");
var Letter = require("./letter.js");

console.log("Let's Play!")
var word = {};
var wordChoice = "";
var letters ={};
var lives = 0;
var name = "";

var playAgain = function() {
    inquirer.prompt([
    {
            type: "confirm",
            name: "newRound",
            message: "\n" + "\n" + "Play a new game?"
        }
    ]).then(response => {
        if(response.newRound){newGame()}
        else {console.log("Thanks for playing, " + name + ". Goodbye!")}
    })
};

var yourTurn = function(){
    console.log("\n" + "\n")
    letters.display();
    console.log("extra lives remaining: " + lives + "\n");
    inquirer.prompt([
        {
            type: "input",
            name: "letterGuess",
            message: "Guess a letter: "
        }
    ]).then(response => {
        if (response.letterGuess === "cheat"){
            console.log("Very sneaky! " + "\n" + "*hint* the word is " + wordChoice);
            yourTurn();
            return
        }
        var check = letters.search(response.letterGuess, -1);
        if(check !== -1){
            console.log("Good guess!");
        } else {
            console.log("Sorry! That's not right.")
            lives--;
        }
        if (letters.array.indexOf("_") == -1){
            letters.display();
            console.log("Congrats, " + name + "! You Won!")
            playAgain();
            return
        }
        if (lives < 1) {
            console.log("\n" + "Game over! The word was " + wordChoice + ". Better luck next time!");
            playAgain();
        } else if (lives >= 1){
            yourTurn();
        }
    });//close promise
}// close yourTurn function

var newGame = function() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter your name: "
        },{
            type: "list",
            name: "theme",
            message: "Choose a game theme: ",
            choices: ["foods", "animals"]
        }
    ]).then(function(res) {
        name = res.name;
        console.log("Welcome, "+ name +". Let's get started..." + "\n");
        word = new Word(res.theme);
        wordChoice = word.choice;
//         console.log(wordChoice); //un-comment this line to display the answer

        letters = new Letter(wordChoice);
        letters.add();
        lives = Math.floor((wordChoice.length * .5));

        yourTurn();
    })//close promise
}//close newGame function

newGame();