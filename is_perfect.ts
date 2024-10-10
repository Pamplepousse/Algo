var num: number = 9;
var monresulti: boolean;

function is_perfect(num: number): boolean 
    {
        let resu : number [] = [0];
        let x : number = 0;
        for (let i = 1; i <= num; i++) {
            if (num%i == 0) 
                {
                    resu[x]=i
                }
        }
        x=0;
        for (let i = 0; i < resu.length; i++) {
            x=+resu[i]
        }

        if(x==num){
            return true
        }
        else{
            return false
        }
    }
  monresulti = is_perfect(num); 
  console.log (monresulti);