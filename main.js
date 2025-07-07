const input_value = document.querySelector(".todo_input_text");
const add_button = document.querySelector(".todo_input_button");
const todo_list = document.querySelector(".todo_list ul");
const checkbox = document.querySelector(".checkbox_ln");
function add_todo(input_value) {
  if (input_value.trim() === "") {
    alert("Pls enter a task");
    return;
  }
  const ul = document.querySelector(".todo_list ul");
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const delete_button = document.createElement("button");
  checkbox.type = "checkbox";
  delete_button.textContent = "Delete";
  delete_button.classList.add("delete_button");
  const span = document.createElement("span");
  span.textContent = input_value;
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      span.classList.add("todo_item_check");
    } else {
      span.classList.remove("todo_item_check");
    }
  });
  delete_button.addEventListener("click", (e) => {
    const li = e.target.parentElement;
    li.remove(); // Remove the todo item from the list
  });
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delete_button);
  ul.appendChild(li);
}
add_button.addEventListener("click", () => {
  add_todo(input_value.value);
  input_value.value = ""; // Clear the input field after adding the todo
});
input_value.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default action of the Enter key
    add_button.click(); // Trigger the click event on the add button
  }
  input_value = ""; // Clear the input field after adding the todo
});
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark_mode");
  document.querySelector(".container").classList.toggle("dark_mode");
  document.querySelector(".todo_input input").classList.toggle("dark_mode");
  document.querySelector(".todo_input button").classList.toggle("dark_mode");
  document
    .querySelectorAll(".delete_button")
    .forEach((btn) => btn.classList.toggle("dark_mode"));
  document
    .querySelectorAll(".todo_list li span")
    .forEach((span) => span.classList.toggle("dark_mode"));
  document.querySelector(".title_App").classList.toggle("dark_mode");
});
