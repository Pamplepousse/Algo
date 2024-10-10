import { text } from "stream/consumers";

var num:number = 9;
var monresulto;

    function reverse_int(num:number): String {
        let res : String = "";
        let text : number;
        for (let i = 0; i < num; i++) {
            text= num-i
            res = res + text.toString();
        }
        return res;
      }
  monresulto = reverse_int(num); 
  console.log (monresulto);