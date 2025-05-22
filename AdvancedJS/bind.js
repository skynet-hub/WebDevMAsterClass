const person = {
    name: "Hitesh",
    greet() {
        console.log(`Hi my name is, ${this.name}`);
    }
};

person.greet()

//let us transfer this to a different variable in memory
let dave = person.greet.bind({name:"dave"})
dave()