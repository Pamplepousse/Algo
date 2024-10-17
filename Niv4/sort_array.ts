var mytabl: number[] = [0, 3, 2, 5, 7, 3, 9, 5, 12,0,1,3];
var sortie: number[];

function sort_array(mytabl: number[]): number[] {
    let res: number[] = [];
    let a: number;
    let n: number;
    for (let i = 0; i < mytabl.length; i++) {
        for (let j = 0; j < mytabl.length; j++) {
            if (mytabl[j] > mytabl[j + 1]) {
                a = mytabl[j];
                mytabl[j] = mytabl[j + 1];
                mytabl[j + 1] = a;
            }
        }
    }
    return mytabl;
}
sortie = sort_array(mytabl);
console.log(sortie);
