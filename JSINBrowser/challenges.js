//Two things we will mainly do in DOM manipulation are get the element and event listening

document.getElementById('changeTextButton').addEventListener('click', ()=>{
    document.getElementById("myParagraph").innerText = "The text has been changed"
})

//Quick lesson, in this eventlisterner when we print out this in the functionality we expect, then it will return the global this in the case of arrow function, but then when it is a normal function being used, it will know exactly what triggered the event(These are asked on interviews sometimes) 

//Example 2

let list = document.getElementById('highlightFirstCity').addEventListener('click', function(){
    let citiesList = document.getElementById('citiesList')
    citiesList.firstElementChild.classList.add('highlight')
})

//Another key takeaway DOM is not HTML, when site is rendered to browser C++ runs and create a list of elements in a tree like, and this is DOM

//example 3

document.getElementById("changeOrder").addEventListener('click', function(){
    document.getElementById("coffeeType").textContent = "Espresso"
})

//Example 4

document.getElementById("addNewItem").addEventListener('click', function(){
    //Creaying the element
    let newItem = document.createElement('li')
    newItem.textContent = "Eggs"
    document.getElementById("shoppingList").appendChild(newItem)
})

//Example 5
document.getElementById('removeLastTask').addEventListener('click', function(){
    let deleteItem = document.getElementById('taskList').lastElementChild.remove()
})


