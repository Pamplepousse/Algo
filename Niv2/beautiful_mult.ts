var a = 7;
var texto;

function beautiful_mult(a: number): String {
    let res : String = "";
    let text : String = "";
    for (let i = 1; i <= 10; i++) {
        text = a +"x"+ i.toString() +"="+ a*i;
        res = res +" "+ text; 
    }
    return res;
  }
  
  texto = beautiful_mult(a); 
  console.log(texto);