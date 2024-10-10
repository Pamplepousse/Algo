import * as rl from 'readline-sync';

var a = true
var randomNumber = Math.floor(Math.random() * 1000 + 1);

function guess_num(randomNumber: number): void {
    while (a) {
        let answer = rl.question("Ecrivez un chiffre entre 1 et 1000 : ");
        let b:number =+answer
        if (b == randomNumber) {
                console.log("Gagné");
                a = false;
        } else if (b > randomNumber) {
                console.log("Trop grand");
        } else { {
                console.log("Trop petit");
        }
    };
}
}
guess_num(randomNumber);
