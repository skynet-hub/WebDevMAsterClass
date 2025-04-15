//Recall that all in Js is an object

// let Car = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2020,
//     start: function(){
//         return `${this.make} was started in ${this.year}`
//     }
// }


// console.log(Car.start())

//The issue with what you see above is that this cannot make as many copies, it has limations

//We have already seen that constructor functions can help solve this

function Person(name, age){
    this.age = age
    this.name = name
}

let john = new Person("John", 20) //As many as these objects can be created

//Let us now look at what can be done with prototype chains

Array.prototype.hitesh = function(){
    return `This is a custom methods ${this}`
}

let myArray = [1, 2, 3]
// console.log(myArray.hitesh());

//Let us do classes

//To create a class we need to make use of the class keyword, to have a constructor for it we will use constructor keyword

class Vehicle{
    constructor(make, model){
        this.make = make
        this.model = model
    }

    start(){
        return `${this.model} is a car from ${this.make}`
    }
}

//From this we can make as many copies as we want

//Inheritance means borrowing

//Here's the syntax we use

class Car extends Vehicle{
    drive(){
        return `${this.make} : This is an inheritance example`
    }
}

let myCar = new Car("Toyota", "Camry")
// console.log(myCar.start());
// console.log(myCar.drive());

//Encapsulation
//One of the pillars of OOP(Inheritance, Encapsulation, Abstraction and Polymorphism)

//Encapsulation means I want to restrict the direct access to the object data

class BankAccount {
    #balance = 0; //We don't want anybody to access this

    deposit(amount){
        this.#balance += amount //I can access it inside the class but this cannot be accessed outside
        return this.#balance 
    }

    getBalance(){
        return `$ ${this.#balance}` //This function is known as a getter
    }
}

let account = new BankAccount()
// console.log(account.getBalance());

//Abstraction
//Means it hides the complex implementation detail
//Whatever is done on the background keep it going I just want whatever it is I am using.

class CoffeeMachine{
    start(){
        //Call DB
        //Filter value
        return `Starting the machine...`

        //I do not have to know how calling the database and filtering work
    }

    brewCoffee(){
        // complex calc
        return `Brewing Coffee`
    }

    startMachineButton(){
        return `${this.start()}\n${this.brewCoffee()}`
    }
}


let coffee = new CoffeeMachine();
// console.log(coffee.startMachineButton());


//Polymorphism
// The ability of something to have or to be displayed in more than one form
//morphism means structure and poly means many
//Let us do an example of polymorphism

class Bird {
    fly(){
        return  `I am flying....`
    }
}

//here's another class

class Penguin extends Bird{
    fly(){
        return `Penguins can't fly`
    }
}


let bird = new Bird();
let penguin = new Penguin();

// console.log(bird.fly());
// console.log(penguin.fly());

//The fly is exactly the same but the behaviour of it is different, and this is exactly what it meant by polymorphism

//Let us look at static methods

class Calculator {
    static add(a, b){
        return a + b;
    }
}

//Special methods that can only be called by the class and nobody else can

let miniCalc = new Calculator();
// console.log(Calculator.add(2, 3));


//Sometimes you will want methods that can be called directly on the class and never associated with the objects.

//Getters and Setters(They allow for more control)


class Employee{
    #salary;
    constructor(name, salary){
        this.name = name;
        if(salary < 0){
            throw new Error("Invalid Salary, salary cannot be negative")
        }
        this.#salary = salary; //There's non special about this underscore(Doesn't have anyeaning in JS)
    }

    get salary(){
        return "You are not allowed to see salary"
    }

    set salary(value){
        if(value<0){
            console.error("Invalid salary")
        }else {
            this.#salary = value
        }
    }
}

let emp = new Employee("Dave", 50000)
emp.salary = 20000
console.log(emp.salary);

//Whenerv you see an uderscore in Js just know that the getters and setters are coming

class Shape{
    area(){
        return 0;
    }
}

class Circle extends Shape{
    area(radius){
        return Math.PI * radius ** 2
    }
}

class Rectangle extends Shape{
    area(width, height){
        return width * height
    }
}



let shape1 = new Rectangle()
console.log(shape1.area(4, 6));

