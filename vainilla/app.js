//selectors
const todoInput = document.querySelector(".todo-input");
const todobutton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo")
const refreshButton = document.querySelector("#refresh")

//Event listeners
todobutton.addEventListener("click", addtodo);


//functions

function addtodo(event){
    //prevent from submitting
    event.preventDefault();
    // to do div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    // add todo to localStorage
    // saveLocalTodos(todoInput.value)
    // check button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fas fa-trash"></i>`
    deleteButton.classList.add("trash-btn");
    todoDiv.appendChild(deleteButton)
    //append to list
    todolist.appendChild(todoDiv)
    //clear Todo input value

    todoInput.value = ""

}


const deleteCheck = (e) => {
    const item = e.target;
    //Delete item
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        saveLocalTodos(todo)
        setTimeout(() =>{
            todo.remove() 
        },300)  
    }
    //check mark
    if(item.classList[0] === "complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
    }
}

function filterTodo(e){
    const todos = todolist.childNodes;
   todos.forEach((todo)=>{
    switch(e.target.value){
        case "all":
            todo.style.display = "flex"
            break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex"
                }else{
                    todo.style.display = "none"
                }
                break;
                case "uncompleted":
                    if(!todo.classList.contains("completed")){
                        
                            todo.style.display = "flex"
                        }else{
                            todo.style.display = "none"
                        }
                        break;
                    }
    }
   )
}

// const saveLocalTodos = (todo) => {
//     //check
//     let todos;
//     if(localStorage.geItem("todos") === null){
//         todos = []
//     } else{
//         todos = JSON.parse(localStorage.getItem("todos"))
//     }

//     todos.push(todo);
//     localStorage.setItem("todos", JSON.stringify(todos));
// }

// function getTodos(){
//     let todos;
//     if(localStorage.geItem("todos") === null){
//         todos = []
//     } else{
//         todos = JSON.parse(localStorage.getItem("todos"))
//     }
//     todos.forEach(function(todo){
//         // todo div
//         const todoDiv = document.createElement("div");
//     todoDiv.classList.add("todo");
//     //create LI
//     const newTodo = document.createElement("li");
//     newTodo.innerText = todo;
//     newTodo.classList.add("todo-item");
//     todoDiv.appendChild(newTodo);
//     // check button
//     const completedButton = document.createElement("button");
//     completedButton.innerHTML = `<i class="fas fa-check"></i>`
//     completedButton.classList.add("complete-btn");
//     todoDiv.appendChild(completedButton);
//     // delete button
//     const deleteButton = document.createElement("button");
//     deleteButton.innerHTML = `<i class="fas fa-trash"></i>`
//     deleteButton.classList.add("trash-btn");
//     todoDiv.appendChild(deleteButton)
//     //append to list
//     todolist.appendChild(todoDiv)
//     })
// }

// function removeLocalTodos(){
//     let todos;
//     if(localStorage.geItem("todos") === null){
//         todos = []
//     } else{
//         todos = JSON.parse(localStorage.getItem("todos"))
//     }
//     const todoIndex = todo.children[0].innerText;
//     todos.splice(todos.indexOf(todoIndex),1)
//}

todolist.addEventListener("click", deleteCheck);
// filterOption.addEventListener("click",filterTodo);
// refreshButton.addEventListener("click", getTodos)