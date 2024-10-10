var numo: number = 17;
var monresu : boolean;

function is_Prime(numo: number): boolean {

    for (let i = 2; i < numo; i++) {
        if (numo%i == 0) 
            {
                return false;
            }
    }
    return true;
  }
  monresu = is_Prime(numo); 
  console.log (monresu);