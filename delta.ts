var a: number = 4;
var b: number = 12;
var c: number = 2;
var monresul: number;

function delta(a: number,b:number,c:number): number 
    {
        let res : number = 0;
        res=b*b
        res=res-4*a*c
        return res;

    
    }
  monresul = delta(a,b,c); 
  console.log (monresul);