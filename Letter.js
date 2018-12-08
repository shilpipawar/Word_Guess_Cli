var inquirer = require('inquirer');
var wordArray = ["Erick", "John", "Merry", "Bill", "Shilpa"];
var chooseRandomWord = function (array) {
    return array[Math.floor(Math.random() * array.length)];
}

var chosenWord = chooseRandomWord(wordArray);
var count = chosenWord.length;
var counter = 10;
var triedCharacters = [];
var correctCharacters = [];

function Letter(word, char) {
    this.Word = word,
        this.Gussed = false,
        this.printMatchCharacter = function () {
            for (i = 0; i < word.length; i++) {
                word[i]
                for (z = 0; z < char.length; z++) {
                    if (char[z] === word[i]) {
                        this.Gussed = true;
                        correctCharacters.push(char[z])
                        console.log("correct " + correctCharacters)
                    }
                    else {
                        this.Gussed = false;
                        triedCharacters.push(char[z])
                        console.log("incorrect " + triedCharacters)
                    }
                };
            }
        }
    }


function letterGuess() {
    inquirer
        .prompt({
            name: "char",
            type: "input",
            message: "Guess one letter to match with word?",
        })
        .then(function (answer) {
            var letter1 = new Letter(chooseRandomWord, answer.char);
            if(count > 0){
                letterGuess();
            }else{
                console.log("Currect Guessed Letters :" + correctCharacters + "Word to guess :" + chosenWord);
            }
            count--;
        });
}

letterGuess();

// prompt(questions).then(
//     //Match leter
//     console.log(questions.char)
// );
// // inquirer.prompt([{
// //     name: 'char',
// //     type: 'input',
// //     message: 'Guess letter:'
// //   }, {
// //     when: function (response) {
// //         var letter1 = new Letter(chooseRandomWord, response.char);
// //       return response.char;
// //     },
// //     name: 'good-or-not',
// //     message: 'good?'
// //   }], function (response) {
// //     response.when();
// //     letter1.printMatchCharacter();
// //   });


// // initializing: function () {
// //   this.movies = [];
// // },
// // askMovie: function (cb) {
// //   cb = cb || this.async();

// //   var prompts = [{
// //       type: 'input',
// //       name: 'movie',
// //       message: chalk.yellow('  What is your favorite movie'),
// //       default: 'Star Wars!'
// //   }, {
// //     type: 'confirm',
// //     name: 'askAgain',
// //     message: 'ask again?'
// //   }];

// //   this.prompt(prompts, function (props) {
// //     this.movies.push(props.movie)
// //     if (props.askAgain) {
// //       this.askMovie(cb);
// //     } else {
// //       cb();
// //     }
// //   }.bind(this));
// //   }
// // }
