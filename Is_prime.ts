var numo: number = 17;
var monresu : boolean;

function Is_Prime(numo: number): boolean {

    for (let i = 2; i < numo; i++) {
        if (numo%i == 0) 
            {
                return false;
            }
    }
    return true;
  }
  monresu = Is_Prime(numo); 
  console.log (monresu);