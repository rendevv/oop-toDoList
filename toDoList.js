class TodoList {
  constructor() {
    const storedTasks = localStorage.getItem("tasks");
    this.task = storedTasks ? JSON.parse(storedTasks) : [];
    this.renderTask();
  }

  saveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.task));
  }

  renderTask() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    this.task.forEach((task, index) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
          <span>${task.text}</span>
          <span>
          <button class="edit-button">Edit</button>
          <button class="delete-button">Delete</button>
          </span>`;

      const editButton = listItem.querySelector(".edit-button");
      const deleteButton = listItem.querySelector(".delete-button");

      editButton.addEventListener("click", () => this.editTask(index));
      deleteButton.addEventListener("click", () => this.deleteTask(index));

      taskList.appendChild(listItem);
    });
  }

  addTask(taskText) {
    const task = {
      text: taskText,
    };
    this.task.push(task);
    this.saveToLocalStorage();
    this.renderTask();
  }

  editTask(index) {
    const newTaskText = prompt("Edit task:", this.task[index].text);
    if (newTaskText !== null && newTaskText.trim() !== "") {
      this.task[index].text = newTaskText.trim();
      this.saveToLocalStorage();
      this.renderTask();
    }
  }

  deleteTask(index) {
    this.task.splice(index, 1);
    this.saveToLocalStorage();
    this.renderTask();
  }
}
