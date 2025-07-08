let todos = [];

function addTodo(text) {
  todos.push({ text, done: false });
  saveTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  saveTodos();
}

function toggleTodo(index) {
  todos[index].done = !todos[index].done;
  saveTodos();
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
  try {
    const data = localStorage.getItem("todos");
    todos = data ? JSON.parse(data) : [];
  } catch (e) {
    todos = [];
  }
}
