const taskInput = document.getElementById("input");
const addButton = document.getElementById("add-button");
const tasksList = document.getElementById("tasks-list");

const createTask = () => {
  const taskText = taskInput.value;
  const newTask = document.createElement("li");
  newTask.textContent = taskText;
  tasksList.appendChild(newTask);

  taskInput.value = "";
};

const checkTask = (evt) => {
  if (evt.target.tagName === "LI") {
    evt.target.classList.toggle("done");
  }
};

addButton.addEventListener("click", createTask);
tasksList.addEventListener("click", checkTask);
