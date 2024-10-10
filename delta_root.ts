var a: number = 4;
var b: number = 12;
var c: number = 2;
var monresult: number[];
var deltares: number;

function deltaa(a: number,b:number,c:number): number 
    {
        let res : number = 0;
        res=b*b
        res=res-4*a*c
        return res;

    
    }
    deltares = deltaa(a,b,c); 

    function root(a: number,b:number,c:number,deltares:number): number[] 
    {
        let resu : number [] = [0];
        if (deltares == 0) 
            {
                resu[0]= -b/2*a
                return resu;
            }
        else if (deltares<0)
            {
                return resu;
            }
        else
            {
                let square : number= Math.sqrt(deltares);
                resu[0]= -b-square/2*a
                resu[1]= -b+square/2*a
                return resu;
            }
    }



  monresult = root(a,b,c,deltares); 
  console.log (monresul);