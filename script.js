const todoList = new TodoList();

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText.length > 0) {
    todoList.addTask(taskText);
    taskInput.value = "";
    todoList.renderTask;
  }
}

document.getElementById("addButton").addEventListener("click", addTask);
document.getElementById("taskInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
