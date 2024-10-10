var year: number = 2024;
var monresu:boolean;

function is_leap(year: number): boolean {


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
                    return true;
                }
        }
    else
        {
            return false;
        }
  }
  monresu = is_leap(year); 
  console.log (monresu);