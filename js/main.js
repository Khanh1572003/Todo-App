document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".todo_input_text");
  const addBtn = document.querySelector(".todo_input_button");
  const isDark = localStorage.getItem("dark_mode") === "true";
  const checkbox_dark = document.querySelector(".checkbox_ln");
  checkbox_dark.checked = isDark;
  toggleDarkMode(isDark);
  checkbox_dark.addEventListener("change", () => {
    const isDark = checkbox_dark.checked;
    toggleDarkMode(isDark);
    localStorage.setItem("dark_mode", isDark); // lưu trạng thái
  });

  addBtn.addEventListener("click", () => {
    if (input.value.trim()) {
      addTodo(input.value);
      input.value = "";
      renderTodos();
    }
  });

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addBtn.click();
    }
  });
  loadTodos();
  renderTodos();
});
