//challenge 1(I will make use of break keyword to achieve this)

// let teas = ["green tea", "black tea", "chai", "oolong tea"]
// let selectedTeas = [];

// for (let i = 0; i < teas.length; i++){
//     if (teas[i] === "chai") break;
//     else {
//         selectedTeas.push(teas[i])
//     }
// }

// console.log(selectedTeas)

// let cities = ["London", "New York", "Paris", "Berlin"]
// let visitedCities = [];


// for (let i=0; i<cities.length; i++){
//     if (cities[i] === "Paris"){
//         continue;
//     } else {
//         visitedCities.push(cities[i]);
//     }
// } 

// console.log(visitedCities);

// let numbers = [1, 2, 3, 4, 5]
// let smallnumbers = [];


// for (let num of numbers){
//     if(num === 4){break;}
//     smallnumbers.push(num)
// }

// console.log(smallnumbers);

// let Teas = ["chai", "Green tea", "herbal tea", "black tea"]
// let preferredTeas = [];

// for (const tea of Teas) {
//     if (tea === 'herbal tea') continue;
//     preferredTeas.push(tea)    
// }

// console.log(preferredTeas)

// let citiesPopulation = {
//     "London": 8900000,
//     "New York": 8400000,
//     "Paris": 2200000,
//     "Berlin": 3500000
// };

// let cityPopulations = {};

// for (const city in citiesPopulation) {
//      if (city === "Berlin") break;

//     cityPopulations[city] = citiesPopulation[city]    
// }

// console.log(cityPopulations)

// let worldCities = {
//     "Sydney": 5000000,
//     "Tokyo": 9000000,
//     "Berlin": 3500000,
//     "Paris": 2200000
// };

// let largeCities = {};

// for (let city in worldCities){
//     if (worldCities[city] < 3000000){
//         continue;
//     }
//     largeCities[city] = worldCities[city]
// }

// console.log(largeCities)

// let teaTypes = ["earl grey", "green tea", "chai", "oolong tea"];
// let availableTeas = [];

// teaTypes.forEach(tea =>{
//     if (tea === "chai"){ 
//         return;
//     }

//     availableTeas.push(tea);
// })

// console.log(availableTeas)

// let numbers = [2, 5, 7, 9];
// let doubledNumbers = [];

// for (let i=0; i<numbers.length; i++){
//     if (numbers[i] === 7){
//         continue;
//     }

//     doubledNumbers.push(numbers[i] * 2)    
// }

// console.log(doubledNumbers)

let Teas = ["chai", "green tea", "black teas", "jasmine tea", "herbal tea"]

let shortTeas = [];

for (let tea of Teas) {
    if (tea.length >10) {break;}
    shortTeas.push(tea)

}

console.log(shortTeas)