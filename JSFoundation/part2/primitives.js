//Needed the basics for any programming language to be functional

//Strings, boolean, number, null, undefined, Symbol(Which one is this one)

//None primitives(Objects)
//Arrays, functions(These days even classes and others)

//Numbers

let num1 = 12;
//Checking if this is a number or not
console.log(typeof(num1))

let balance = new Number(120) //This is creating a new object of a number class

//The new keyword does not only create a basic datatype but it creates a complex datatypes, you can create any datatype using the new keyword

console.log(balance.valueOf())
console.log(typeof balance) //In Js everything is an object, the primitives can be turned into the none-primitives

//boolean

let isActive = true;
let isReallyActive = new Boolean(true) //Again this is not the recommended way

//null and undefined

let firstName;
console.log(firstName) // It exists but has no definition

let secondName = null;
console.log(secondName);

//You can explicitly give a variable a value undefined

//Strings

let myString = "Hello";
let myString1 = 'Hola';

//Realise that both single and double quotes works

//Let us explore backticks then

let userName = "David"

let oldGreet = myString + ' ' + userName

let greetMessage =  `Hello ${userName}`; //This is known as string interpolation

console.log(oldGreet);
console.log(greetMessage);

//Let us explore Symbol

let sm1 = Symbol()
let sm2 = Symbol()

console.log(sm1 == sm2) //Symbols gurantees uniqueness regardless named pr not -> it creates a unique symbol all the time....