var mytabl: number[] = [0, 3, 2, 5, 7, 3, 9, 5, 12];
var sortie: number[];

function myst_guess_num(mytabl: number[]): number[] {
    let res: number[] = [];
    let a:number;
    for (let i = 0; i < mytabl.length; i++) {
        a=mytabl[i]
        if (res.length != 0) {
            let vrai:boolean =true
            for (let j = 0; j < res.length-1; j++) {
                if (res[j] == mytabl[i]) {
                    vrai=false;
                }
            }
            if (vrai){
                res.push(mytabl[i])
            }
        }
        else{
            res.push(mytabl[i])
        }
    }
    return res;
}
sortie = myst_guess_num(mytabl);
console.log(sortie);