//This is a comment, it helps with documentations

/*

This is a multi-line comment

String-eg Chai or Hello
Number-all numbers
boolean-true or false(very useful in any js)
Bigint-For big numbers, it is less used but it is there
undefined-I have no defition for you(might have a value in the future or maybe not, I know you exist but I do ot have a definition for you)
null-Empty(empty is not zero)

objects- we will have a dedicated lecture on this

Symbol-When you want to make something unique

*/

//Variable is like a placeholder, you can safe anything in it

//var score = 102;-This var keyword is problematic(when a variable is declared a space in memory is reserved)

let score = 102; //(There diff between the let and var keyword is on scope-This is an example of a number)

let name = "Dave"; //This is an example of a string

let isLogged = false; // This is an example of a boolean

//object
let teaTypes = ["lemon tea", "orange tea", "oolong tea"]
let user = {firstname: "Magobo",
            lastname: "Lesaomako"
}

//Is an array also an object?(Js is very object oriented)

//Borrowing values from other variables

let getScore = score;

console.log(getScore)

const userName = "dave@dave";
userName = "dave";

console.log(userName);

//Common practice start off all variables as consts and only when changes are needed later on can we change it to let

