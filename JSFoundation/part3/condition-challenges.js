//check if a number is greater than another number

// let num = 12;
// let anotherNum = 16;

// if (num > anotherNum){
//     console.log("another number is greater");
// }else {
//     console.log("Another number is greater than number");
// }

// console.log("I am a regular bottom");

// //Checking if a string is equal to another string

// let username = "Dave";
// let anotherUserName = "Dave";

// if (username == anotherUserName){
//     console.log("Pick up another name");
    
// } else {
//     console.log("Success this is your username");
// }

let digit = []; //But how can we specifically single out that is is specifically an array

if (typeof digit === "object"){
    console.log("The variable is of type Number..");
} else {
    console.log("Nope this is not a number");
    
}

let isboolean = true;

if (isboolean){
    console.log("This is a true value");
} else {
    console.log("This is a false value");
    
}

//Check if an array is empty or not

let myArray = [];

if (myArray.length === 0){
    console.log("The array is empty");
} else{
    console.log("Array is Not empty!");   
}
