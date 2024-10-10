import * as rl from 'readline-sync';

var a = true
var randomNumber = Math.floor(Math.random() * 1000 + 1);

function myst_guess_num(randomNumber: number): void {
    while (a) {
        let answer = rl.question("Ecrivez un chiffre entre 1 et 1000 : ");
        let b:number =+answer
        if (b == randomNumber) {
                console.log("Gagné");
                a = false;
        } else if (randomNumber%b == 0) {
                console.log("True");
        } else { {
                console.log("False");
        }
    };
}
}
myst_guess_num(randomNumber);
