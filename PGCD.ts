var a = 200;
var b = 88;
var result;

function pgcd_(a: number, b: number): number {
let res : number = 0;
if (b<a)
    {
    while (b !== 0) 
        {
            res = b;
            b = a % b;
            a = res;
        }
    return a; 
    }
else if (a<b)
    {
        while (a !== 0) {
            res = a;
            a = b % a;
            b = res;
        }
    return b;
    }
return a;
}

  result = pgcd_(a,b); 
  console.log (result);