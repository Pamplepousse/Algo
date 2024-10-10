import * as rl from 'readline-sync';

var a = true
var randomNumber = Math.floor(Math.random() * 3 + 1);

function rps(randomNumber: number): void {
    while (a) {
        let answer = rl.question("Rock, Paper, ou Scissors?  ");
        if (answer == "Paper") {
            if (randomNumber == 1) {
                console.log("Match Nul");
            } else if (randomNumber == 2) {
                console.log("Perdu");
            } else if (randomNumber == 3) {
                console.log("Gagné");
                a = false;
            }
        } else if (answer == "Rock") {
            if (randomNumber == 1) {
                console.log("Perdu");
            } else if (randomNumber == 2) {
                console.log("Gagné");
                a = false;
            } else if (randomNumber == 3) {
                console.log("Match Nul");
            }
        } else if (answer == "Scissors") {
            if (randomNumber == 1) {
                console.log("Gagné");
                a = false;
            } else if (randomNumber == 2) {
                console.log("Match Nul");
            } else if (randomNumber == 3) {
                console.log("Perdu");
            }
        }
        randomNumber = Math.floor(Math.random() * 3 + 1);
    };
}
rps(randomNumber);
