const ToDoForm = document.getElementById("todo-form");
const ToDoInput = ToDoForm.querySelector("input");
const ToDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  // const li = event.target.parentElement.parentElement;
  const li = event.target.closest("li");
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  li.remove();
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const span2 = document.createElement("span");
  span2.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  li.appendChild(span);
  li.appendChild(span2);
  ToDoList.appendChild(li);
  span2.addEventListener("click", deleteTodo);
  // const todos = document.querySelectorAll("#todo-list li")
  // if (todos.length == 5) return;
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = ToDoInput.value;
  ToDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

ToDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
