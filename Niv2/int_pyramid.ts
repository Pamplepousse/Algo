var a = 5;
var texto;

function int_pyramid(a: number): String {
    let res : String = "";
    let text : String = "";
    for (let i = 1; i <= a; i++) {
        text = text + i.toString();
        res = res + "\n" + text; 
    }
    return res;
  }
  
  texto = int_pyramid(a); 
  console.log(texto);