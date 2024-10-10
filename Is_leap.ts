var year: number = 2001;
var monresu:boolean;

function Is_leap(year: number): boolean {


    if (year%4 == 0) 
        {
            if (year%100 == 0) 
                {
                    if (year%400 == 0) 
                        {
                            return true;
                        }
                    else
                        {
                            return false;
                        }
                }
            else
                {
                    return false;
                }
        }
    else
        {
            return false;
        }
  }
  monresu = Is_leap(year); 
  console.log (monresu);