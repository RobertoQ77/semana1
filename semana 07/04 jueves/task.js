let arrayTask = [];

if (localStorage.getItem("tasks")) {
	arrayTask = JSON.parse(localStorage.getItem("tasks"));
}

// Aquí felizmente vamos a recrear la function toHtml() para cada task:
// arrayTask solo tiene task con prop (NO TIENEN FUNCIONES).
arrayTask = arrayTask.map((task) => {
	return {
		id: task.id,
		text: task.text,
		status: task.status,
		created_at: new Date(task.created_at),
		toHtml: function () {
			return taskToHtml(this);
		},
	};
});
// arrayTask ahora tiene task con PROP + FUNC

function storeTask(text) {
	const task = {
		id: arrayTask.length + 1,
		text,
		status: "todo",
		created_at: new Date(),
		toHtml: function () {
			return taskToHtml(this);
		},
	};

	arrayTask.push(task);
	saveInLocalStorage();
	return task;
}

function taskToHtml(task) {
	const div_task = $("<div>", {
		class: "row my-2 py-2",
		"data-id": task.id,
	}).html(`
  <div class='col-6 col-sm-8 col-md-9'>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" onchange="doneTask(this, ${task.id})" id="check_${task.id}">
      <label class="form-check-label" for="check_${task.id}">
        ${task.text}
      </label>
    </div>
  </div>
  <div class='col-6 col-sm-4 col-md-3'>
    <button class='btn btn-dark' role="edit" onclick="editTask(this)"><i class="fa-solid fa-pencil text-warning"></i></button>
    <button class='btn btn-dark' role="show" onclick="showTask(${task.id})"><i class="fa-solid fa-eye"></i></button>
    <button class='btn btn-dark' role="delete" onclick="deleteTask(this)"><i class="fa-solid fa-trash-can text-danger"></i></button>
  </div>
  `);
	if (task.status == "done") {
		div_task
			.find("input[type='checkbox'")
			.prop("disabled", true)
			.prop("checked", true);
		div_task.addClass(
			"bg-info bg-opacity-75 rounded text-white fst-italic"
		);
		div_task.find("button").each(function () {
			if ($(this).attr("role") == "show") return;
			$(this).hide();
		});
	} else if (task.status == "delete") {
		div_task.find("input[type='checkbox'").prop("disabled", true);
		div_task.addClass("bg-danger bg-opacity-50 rounded text-white");
		div_task.find("label").addClass("text-decoration-line-through");
		div_task.find("button").hide();
	}
	return div_task;
}

function updateTask(id, key, value) {
	const task = arrayTask.find((task) => task.id === id);
	// esta actualizando la propiedad status en base al que recibimos como parametros
	task[key] = value;
	// para actualizar la data en localStorage solo hace falta llamar a la funcion saveInLocalStorga()
	saveInLocalStorage();
	return task;
}

// Aquí lamentablemente se perderán las funciones del objeto task:
function saveInLocalStorage() {
	localStorage.setItem("tasks", JSON.stringify(arrayTask));
}