var inquirer = require('inquirer');
var letter = require('./Letter.js');
var wordArray = ["Erick", "John", "Merry", "Bill", "Shilpa"];
var chosenWord = wordArray[Math.floor(Math.random() * wordArray.length)];

function letterGuess() {
    var letter1 = new letter(chosenWord, "-");
    letter1.printPlaceholder();
   
        inquirer
        .prompt({
            name: "char",
            type: "input",
            message: "Guess one letter to match with word?",
        })
        .then(function (answer) {
           var temp =  letter1.matchCharWithWord(answer.char);
           if(letter1.Gussed){
            console.log("" + temp);
           }
        });
}

letterGuess();