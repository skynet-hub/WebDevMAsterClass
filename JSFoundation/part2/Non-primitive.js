//Let us do objects

let user = {
    firstname: "DAve",
    grade: 'A'
}; //This is the most basic object

//When you initialise an obj, in memory more space is reserved
//When the object is made constant the memory(references) will not changed however this does not necessarily mean that the variables will never be changes

console.log(user.firstname)

user.firstname = "Magobo"

console.log(user)
console.log(typeof user);

//Another way of accessing the variables

let myData = {
    "my Name": "Magobo"
}

console.log(myData["my Name"]) //The dot notation here is not the most feasible

//Common inbuilt objects

let today = new Date()
console.log(today.toString())

//Arrays is just a collection of things

let heros = ["a", "b", "c", true]; //Speacial because different types are allowed, you can even have an array inside an array

//To access data from the array you need to be precise with indexing

console.log(heros[0])// -> The computer indexing starts from 0

//Let us cover a bit of type conversion
//Js tries to be smart by doing implicit type coversion

console.log(1 + '1');
console.log('1' + 1) //Seems to prioritize strings

//Boolean true is considered 1 and 0 is false

let isValue = true;
console.log(Number(isValue)) //-> This is explicity type conversion

let none = "2abc"
console.log(Number(none)); //Type of this is Number, because it depicts this is not a number

//When we convert null into a number we get 0
//When we convert undefined into a number we get Nan(Not necessarily a type but a value in JS)