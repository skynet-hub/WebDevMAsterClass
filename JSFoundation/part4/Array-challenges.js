// let teaFlavours = ["green tea", "black tea", "oolong tea"]

// // let firstTea = teaFlavours[0]

// // console.log(firstTea)

// console.log("Hello, WOrld")

// //Second problem
// let cities = new Array("London", "Tokyo", "Paris", "New York")

// const favoriteCity = cities[2]

// console.log(favoriteCity)

//3rd challenge

// const teaTypes = ["hearbal tea", "white tea", "masala chai"]

// teaTypes[1] = "jasmine tea"

// console.log(teaTypes)

//4th exercise -> make use of the push method

// let citiesVisited = ["Mumbai", "Sydney"]

// citiesVisited.push("Berlin")

// console.log(citiesVisited);

//Delete the last item of the array by using pop

// let teaOrders = ["chai", "iced tea", "matcha", "earl grey"]

// teaOrders.pop()

// console.log(teaOrders)

//Challenge 6

let popularTeas = ["green tea", "colong tea", "chai"]

let softCopyTeas = popularTeas.copyWithin(0, popularTeas.length)
popularTeas.pop()
console.log(softCopyTeas)

//challenge 6, create a hard copy

let topCities = new Array("Berlin", "Singapore", "New York");

// let hardCopyCities = [...topCities] We will learn more about these spread operators

let hardCopyCities = topCities.slice();

topCities.pop()

console.log((hardCopyCities)); //This is one way of creating hard copy of an array

//SLice and [...] can be very helpful when you want to create a hardcopy in memory of an array

let europeanCities = ["Paris", "Rome"]
let asianCities = ["Tokyo", "Bangkok"]

//challenge 8 merge these two

let worldCities = europeanCities.concat(asianCities)
// console.log(worldCities) 

//challenge 9 find length and store it in a variable

let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"]

let menuLength = teaMenu.length

//Check if item is in array

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"]

if (cityBucketList.indexOf("London") != -1){
    isLondonInList = true
    console.log(isLondonInList)
}  //You could have just used includes instead NB includes works with true and false only

