var mytabl: number[] = [0, 3, 2, 5, 7, 3, 9, 5, 12];
var sortie: number[];

function sort_array(mytabl: number[]): number[] {
    let res: number[] = [];
    let a: number;
    for (let i = 0; i < mytabl.length; i++) {
        if (res.length != 0) {
            if (mytabl[i] <= res[0]) {
                res.unshift(mytabl[i]);
            }
            else if (mytabl[i] > res[res.length - 1]) {
                res.push(mytabl[i])
            }
            else {
                for (let j = 0; j < res.length; j++) {
                    if (res[j] > mytabl[i]) {
                        res.push(0);

                        for (let k = res.length - 1; k > j; k--) {
                            res[k] = res[k - 1];
                        }
                        res[j] = mytabl[i];
                        break;
                    }
                }
            }
        }
        else {
    res.push(mytabl[i])
}
        }
return res;
    }
sortie = sort_array(mytabl);
console.log(sortie);

