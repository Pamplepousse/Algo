import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var randomNumber = Math.floor(Math.random() * 3 + 1);

function rps(randomNumber: number): void {
    rl.question("Rock, Paper, ou Scissors? ", function(answer) {
        
        if (answer == "Paper") {
            if (randomNumber == 1) {
                console.log("Match Nul");
            } else if (randomNumber == 2) {
                console.log("Perdu");
            } else if (randomNumber == 3) {
                console.log("Gagné");
                rl.close();
                return;
            }
        } else if (answer == "Rock") {
            if (randomNumber == 1) {
                console.log("Perdu");
            } else if (randomNumber == 2) {
                console.log("Gagné");
                rl.close();
                return;
            } else if (randomNumber == 3) {
                console.log("Match Nul");
            }
        } else if (answer == "Scissors") {
            if (randomNumber == 1) {
                console.log("Gagné");
                rl.close();
                return;
            } else if (randomNumber == 2) {
                console.log("Match Nul");
            } else if (randomNumber == 3) {
                console.log("Perdu");
            }
        }
        
        rps(randomNumber);
    });
}

rps(randomNumber);
