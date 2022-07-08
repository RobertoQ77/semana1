const listTasks = document.querySelector("#list");
const inputTask = document.querySelector("#input_newtask");
inputTask.focus();

const arrayTasks = [];

// Funciones para las tareas:
function addTask() {
  if (inputTask.value == "") {
    alert("Ingresa un texto para la tarea.");
    return;
  }
  // Creamos la nueva tarea:
  const task = new Task(inputTask.value);
  // Agregamos al arreglo de tareas:
  arrayTasks.push(task);
  // Agregamos la tarea al DOM:
  document.querySelector(".form").before(task.createElement());
  inputTask.value = "";
  inputTask.focus();
}

function checkTask(checkbox) {
  if (checkbox.checked) {
    const task_id = checkbox.parentElement.id;
    const task = arrayTasks.find((task) => task.id == task_id);
    task.done();
    checkbox.setAttribute("disabled", true);
  }
}

function deleteTask(anchor) {
  const task_id = anchor.parentElement.id;
  const task = arrayTasks.find((task) => task.id == task_id);
  task.delete();
}

function updateTask(anchor) {
    parentTask(anchor).delete();
}

const chxTaskDone = document.querySelector("#chx_task_done");
const chxTaskDelete = document.querySelector("#chx_task_delete");
const chxTaskTodo = document.querySelector("#chx_task_todo");

// Checkbox tiene el evento onchange
chxTaskDone.onchange = function () {
  showOrHideElement(this.checked, ".todo", ".delete");
};

chxTaskDelete.onchange = function () {
  showOrHideElement(this.checked, ".todo", ".done");
};

chxTaskTodo.onchange = function () {
  showOrHideElement(this.checked, ".delete", ".done");
};

function showOrHideElement(checked, typeOne, typeTwo) {
  const elementsOne = document.querySelectorAll(typeOne);
  const elementsTwo = document.querySelectorAll(typeTwo);
  let display = "block";
  if (checked) display ="none";
  elementsOne.forEach((todo) => (todo.style.display = display));
  elementsTwo.forEach((task) => (task.style.display = display));
}