//Let us import the default function
import multiply from "./mathOperationsM.mjs";

//If you did not use default this is how you'd import
import {add, subtract} from "./mathOperationsM.mjs"

console.log(add(4, 5));  //9
console.log(subtract(5, 4));  //1
console.log(multiply(4, 5));  //20

