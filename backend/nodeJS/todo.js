//Working with filesystem
const fs = require("fs");
const filePath = "./data.json"

//Let us gather user arguments
const command = process.argv[2]
const task = process.argv[3]

let tasks = loadTask();

//Let us load the file
//Save the tasks

//Let us open the file and load tasks

function loadTask(){
    try{
      const dataBuffer = fs.readFileSync(filePath)
      const dataJson = dataBuffer.toString()
      return JSON.parse(dataJson)

    } catch (error){
       return []
    }
}

function saveTask(task){
    const dataJson = JSON.stringify(task)
    fs.writeFileSync(filePath, dataJson)
}

//Task function

function addTask(task){
    tasks.push({task})
    saveTask(tasks)
}

//Write the display function

function displayTask(){
   tasks.forEach((element, index) => {
       console.log(`${index + 1} - ${element.task}`)
   });
}

//function to remove a task

function removeTask(id){
    tasks.pop(id - 1)
    saveTask(tasks)
}

//Let us get the flow of our to do going first

if (command === "add"){
    addTask(task);
} else if (command === "list"){
    displayTask();
} else if (command === "delete"){
    removeTask(parseInt(task));
}
