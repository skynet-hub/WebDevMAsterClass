//Loops have these three spheres keyword(for, while etc), terminations condition(what determines when the loop will end), and body loop(execution statements will happen for as long as the condition remains true)

//Types of loops we have while loop, do while(This is like a while loop however it will execute at least once even if the condition is false)

//For loops, we have for each, for/in and for/of(for now we will cover for only the rest will be covered in later sections)

//Challenge 1

// let sum = 0;
// let count = 1

// while (count <= 5){
//     sum += count
//     count++
// }

// console.log(sum)

// let count = 5;
// let nums = [];


// while (count >= 1){
//     nums.push(count);
//     count--;
// }

// console.log(nums)

// let teaCollection = [];
// let tea;

// do {
//     tea = prompt("Enter your favorite tea?: ('Enter to stop')")

//     if (tea != "stop") {
//         teaCollection.push(tea)
//     }
// } while (tea !== "stop")

// let total = 0;
// let i = 1;

// do {
//     total += i
//     i++
// } while (i <= 3)

// console.log(total)    

// let numbers = [2, 4, 6]
// let multipliedNumbers = [];


// for (let i = 0; i < numbers.length; i++){
//     multipliedNumbers.push(numbers[i] * 2)
// }

// console.log(multipliedNumbers)

let cities = ["Paris", "New York", "Tokyo", "London"]
let cityList = [];


for (let i=0; i < cities.length; i++){
    console.log(cities[i]);
    cityList.push(cities[i]);
    console.log(cityList);
}
