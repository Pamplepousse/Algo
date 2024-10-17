var mytabl: number[] = [0, 3, 2, 5, 7, 3, 9, 5, 12];
var sortie: number[];

function unique_array(mytabl: number[]): number[] {
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
sortie = unique_array(mytabl);
console.log(sortie);