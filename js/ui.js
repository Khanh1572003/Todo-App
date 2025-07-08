function renderTodos() {
  const ul = document.querySelector(".todo_list ul");
  ul.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");

    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    span.textContent = todo.text;
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete_button");
    deleteBtn.setAttribute("aria-label", "Delete todo");
    if (todo.done) span.classList.add("todo_item_check");

    checkbox.addEventListener("change", () => {
      toggleTodo(index);
      renderTodos();
    });

    deleteBtn.addEventListener("click", () => {
      deleteTodo(index);
      renderTodos();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    ul.appendChild(li);
  });
}
function toggleDarkMode(isDark) {
  const method = isDark ? "add" : "remove";

  document.body.classList[method]("dark_mode");
  document.querySelector(".container").classList[method]("dark_mode");
  document.querySelector(".todo_input input").classList[method]("dark_mode");
  document.querySelector(".todo_input button").classList[method]("dark_mode");

  document
    .querySelectorAll(".delete_button")
    .forEach((btn) => btn.classList[method]("dark_mode"));
  document
    .querySelectorAll(".todo_list li span")
    .forEach((span) => span.classList[method]("dark_mode"));
  document.querySelector(".title_App")?.classList[method]("dark_mode");
}
