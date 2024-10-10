var num: number = 28;
var monresulti: boolean;

function is_perfect(num: number): boolean 
    {
        let resu : number [] = [0];
        let x : number = 0;
        let y : number = 0;
        for (let i = 1; i < num; i++) {
            if (num%i == 0) 
                {
                    resu[x]=i;
                    x=x+1;
                }
        }
        
        for (let i = 0; i < resu.length; i++) {
            y=y+resu[i];
        }

        if(y==num){
            return true
        }
        else{
            return false
        }
    }
  monresulti = is_perfect(num); 
  console.log (monresulti);