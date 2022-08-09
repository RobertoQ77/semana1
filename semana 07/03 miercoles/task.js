let arrayTask = JSON.parse(localStorage.getItem("tasks")) || [];

function storeTask(text) {
  // 1,2,3,4,5,6
  const task = {
    id: arrayTask.length + 1,
    text,
    status: "todo",
    created_at: new Date(),
  };

  arrayTask.push(task);
  saveInLocalStorage();
  return task;
}

function updateTask(id, key, value) {
  const task = arrayTask.find((task) => task.id === id);
  // esta actualizando la propiedad status en base al que recibimos como parametros
  task[key] = value;
  // para actualizar la data en localStorage solo hace falta llamar a la funcion saveInLocalStorga()
  saveInLocalStorage();
}

function saveInLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(arrayTask));
}