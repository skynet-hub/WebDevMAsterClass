let Computer = {CPU: 12} //12 represents threads

let lenovo = {
    screen: "HD",
}

Object.setPrototypeOf(lenovo, Computer)

console.log(Object.getOwnPropertyNames(Computer))