//Grab todo list, input, and addbtn

document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.getElementById('add-task-btn');
  const inputField = document.getElementById('todo-input');
  const toDoList = document.getElementById('todo-list');

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  tasks.forEach(task => renderTask(task));


  //Let us add an event listener to the button(submit)

  addBtn.addEventListener('click', ()=> {
    const todoItem = inputField.value.trim();
    if (todoItem === "") return;


    const newTask = {
      id: Date.now(),
      name: todoItem,
      completed: false
    };

    tasks.push(newTask);
    storeTask()
    renderTask(newTask);
    inputField.value = "";
  })

    function renderTask(task){
      const li = document.createElement('li');
      li.setAttribute('todo-id', task.id)
      if (task.completed) li.classList.add('completed')
      li.innerHTML = `
      <span>${task.name}</span>
      <button>delete</button>
      `
      li.addEventListener('click', (e) => {
        if (e.target.targetName === "BUTTON") return;
        task.completed = !task.completed;
        li.classList.toggle("completed");
        storeTask();
      })

      li.querySelector('button').addEventListener("click", (e) => {
        e.stopPropagation();
        tasks = tasks.filter(t => t.id !== task.id)
        li.remove();
        storeTask();
      })

      toDoList.appendChild(li)
    }
  
    function storeTask(){
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

})

