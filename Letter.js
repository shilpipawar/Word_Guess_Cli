
//var count = chosenWord.length;
var counter = 10;
var triedCharacters = [];
var correctCharacters = [];

function Letter(chosenWord, ans) {
    this.Word = chosenWord,
        this.Gussed = false,
        this.printPlaceholder = function () {
            var dasharr = "- ";
            for (i = 0; i < this.Word.length; i++) {
                dasharr += "- ";
            }
            console.log(dasharr);
        };
    this.isMatch = function () {
        for (var i = 0; i <= this.Word.length; i++) {
            if (this.Word[i] == correctCharacters[i]) {
                console.log("CORRET!! Ans");
                console.log(this.correctCharacters[i]);

            } else {
                console.log("INCORRET!! GAME OVER");
            }
        };
    };
    this.matchCharWithWord = function (temp) {
        for (i = 0; i < this.Word.length; i++) {
            if (this.Word[i] === temp) {
                this.Gussed = true;
                correctCharacters.push(temp);
                return temp;
            }
            else {
                this.Gussed = false;
                triedCharacters.push(temp);
                return temp;
            }
        };
    }
}

module.exports = Letter;