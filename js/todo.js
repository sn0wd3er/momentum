const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY = "todos"

let toDos = [] 

function saveToDos() {
    //JSON.stringify : object, array를 문자열로 변환
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))
}

function paintToDo(newTodoObj) {
    const span = document.createElement("span")
    const btn = document.createElement("button")
    const li = document.createElement("li")
    li.id=newTodoObj.id
    span.innerText = newTodoObj.text;
    btn.innerText = "❌"
    btn.addEventListener("click",deleteToDo)
    li.appendChild(span);
    li.appendChild(btn)
    toDoList.appendChild(li)
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((item) => item.id !== parseInt(li.id) )
    saveToDos();
}


function handleToDoSubmit (event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value=""
    const newTodoObj = {
        text:newTodo,
        id:Date.now()
    }
    toDos.push(newTodoObj)
    paintToDo(newTodoObj)
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit)


const savedToDos = localStorage.getItem(TODOS_KEY)
if(savedToDos) {
    // JSON.parse : 문자열을 Object , array로 변경해줌
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos;
    parsedToDos.forEach(function (item) {
        paintToDo(item)
    }) 

}