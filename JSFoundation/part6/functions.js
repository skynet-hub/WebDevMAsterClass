// function makeTea(typeofTea){
//     return `Making ${typeofTea}`
// }

// let tea = teaOrder = makeTea("green tea")
// console.log(teaOrder)

// function oderTea(teatType){
//     function confirmOrder(){
//         return "Order  confirmed for Chai"
//     }

//     let result = confirmOrder()
//     return result;
// }

// console.log(oderTea())

//Let us dive into arrow functions now

const calculateTotal = (price, quantity) => {
    return price * quantity
}

let totalCost = calculateTotal(20, 4)

console.log(totalCost)