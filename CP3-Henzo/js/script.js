document.addEventListener("DOMContentLoaded", () => {
    const todoForm = document.getElementById("todo-form");
    const newTaskInput = document.getElementById("new-task");
    const todoList = document.getElementById("todo-list");
  
    function saveTasks(tasks) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function getTasks() {
      const tasks = localStorage.getItem("tasks");
      return tasks ? JSON.parse(tasks) : [];
    }

    function renderTasks() {
      todoList.innerHTML = "";
      const tasks = getTasks();
      tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;
  
        const deleteButton = document.createElement("button-1");
        deleteButton.textContent = "Excluir Tarefa";
        deleteButton.addEventListener("click", () => {
          deleteTask(index);
        });
  
        li.appendChild(deleteButton);
        todoList.appendChild(li);
      });
    }

    function addTask(task) {
      const tasks = getTasks();
      tasks.push(task);
      saveTasks(tasks);
      renderTasks();
    }
  
    function deleteTask(index) {
      const tasks = getTasks();
      tasks.splice(index, 1);
      saveTasks(tasks);
      renderTasks();
    }

    todoForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const newTask = newTaskInput.value.trim();
      if (newTask) {
        addTask(newTask);
        newTaskInput.value = "";
      }
    });
    renderTasks();
  });
  