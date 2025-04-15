function Person(name, age){
    this.name = name
    this.age = age
}

function Car(make, model){
    this.make = make
    this.model = model
}

let myCar = new Car("Toyota", "Camry")
console.log(myCar)

let myNewCar = new Car("Tata", "Safari")
console.log(myNewCar)

//Let us get a little more deep and see how we can store functions inside variables in a constructor function

function Tea(type){
    this.type = type
    this.describe = function(){
        return `This is a cup of ${this.type}`
    }
}

let myTea = new Tea("black tea")
console.log(myTea.describe())

//Prototype and constructor functions

function Animal(species){
    this.species = species
}

let dog = new Animal("Dog")

Animal.prototype.sound = function(){
    return `${this.species} makes a sound`
}

// console.log(dog.sound())

//Let us look into throw keyword and errors

function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new Keyword!")
    }

    this.name = name
}

let coffee = Drink()