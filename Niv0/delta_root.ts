var a: number = 4;
var b: number = 12;
var c: number = 2;
var monresult: number[];
var deltares: number;



    function root(a: number,b:number,c:number): number[] 
    {
        let resu : number [] = [];
        deltares=b*b
        deltares=deltares-4*a*c

        if (deltares == 0) 
            {

                resu.push(-b/2*a)
                return resu;
            }
        else if (deltares<0)
            {
                return resu;
            }
        else
            {
                let square : number= Math.sqrt(deltares);
                resu.push(-b-square/2*a)
                resu.push(-b+square/2*a)
                return resu;
            }
    }



  monresult = root(a,b,c); 
  console.log (monresult);