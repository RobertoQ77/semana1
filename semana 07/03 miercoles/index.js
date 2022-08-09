const inputTask = $("#input-task");
const btnTask = $("#btn-task");
const formTask = $("#form-task");
const sectionTask = $("#section-task");
const sectionDetailTask = $("#section-detail-task");
const form = document.querySelector("#form-task");

$(function () {
  // vamos a obtener el queryString de la url
  const queryString = new URLSearchParams(window.location.search);
  const filter = queryString.get("filter"); // todo || done || delete

  if (arrayTask.length > 0) {
    // aca iteremos el array y pintemos las tareas
    arrayTask.forEach((task) => {
      createInputTask(task.id, task.text, task.status);
    });

    if (filter) {
      showFilteredModalTask();
    }
  }
});

function showFilteredModalTask() {
  const filterTask = arrayTask.filter((task) => task.status === filter);

  const tbody = $("#tbody");

  filterTask.forEach((task) => {
    tbody.append(
      `<tr>
            <td>${task.id}</td>
            <td>${task.text}</td>
            <td>${task.status}</td>
            <td>${task.created_at}</td>
          </tr>
          `
    );
  });

  const myModal = new bootstrap.Modal(document.getElementById("exampleModal"));

  myModal.show();
}

formTask.submit(function (e) {
  e.preventDefault();
  inputTask.focus();
  //! checkValidity analiza los inputs y si tienen required y estan vacios
  //! esta funcion retorna false caso contrario esten lleno
  //* retorna true
  if (!form.checkValidity()) {
    // agregamos la clase was-validated al formulario
    // esto al ser agregado buscara los invalid-feedback y los mostrara
    form.classList.add("was-validated");
    return;
  }

  const text = inputTask.val();
  const task = storeTask(text);
  // console.log("Task", task);

  inputTask.val("");

  createInputTask(task.id, task.text, task.status);
});

function deleteTask(element) {
  const div_task = $(element).closest(".row");
  const id = div_task.data("id");
  div_task
    .find("label")
    .addClass("text-uppercase text-decoration-line-through");
  updateTask(id, "status", "delete");
}

function saveTask(element) {
  const div_task = $(element).closest(".row");
  const id = Number(div_task.attr("data-id"));
  const newText = div_task.find("input").val();
  updateTask(id, "text", newText);
  const task = arrayTask.find((task) => task.id === id);
  div_task.html(`
    <div class='col-6 col-sm-8 col-md-9'>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="check_${id}">
        <label class="form-check-label ${task.status}" for="check_${id}">
          ${task.text}
        </label>
      </div>
    </div>
    <div class='col-6 col-sm-4 col-md-3'>
      <button class='btn btn-light' onclick="editTask(this)">✏️</button>
      <button class='btn btn-light'>👁</button>
      <button class='btn btn-dark' onclick="deleteTask(this)">❌</button>
    </div>
  `);
}

function editTask(element) {
  const div_task = $(element).closest(".row");
  div_task.html(`
      <div class='col-6 col-sm-8 col-md-9'>
        <input placeholder="editar tarea" type="text" class="form-control"/>
      </div>
      <div class='col-6 col-sm-4 col-md-3'>
        <button class="btn btn-dark" onclick="saveTask(this)">✅</button>
      </div>
  `);
}

function showTask(id) {
  const task = arrayTask.find((task) => task.id === id);
  sectionDetailTask.empty().show();

  sectionDetailTask.append(
    `
    <div class="card" style="width: 300px; padding: 0;">
      <img src="https://source.unsplash.com/user/erondu/300x200" class="card-img-top" />
      <div class="card-body">
        <div class="card-title">${task.text}</div>
        <div class="card-text">
        ${task.status}
        </div>
         <div class="card-text">
        ${task.created_at}
        </div>
      </div>
    </div>
    `
  );
  // .fadeOut(5000);
}

function doneTask(element, id) {
  updateTask(id, "status", "done");
  const container = $(element).closest(".row");

  container.addClass("bg-success bg-opacity-50 rounded text-white fst-italic");
}

function createInputTask(id, text, status) {
  $(
    `<div class='row py-2 my-2 ${
      status === "done"
        ? "bg-success bg-opacity-50 rounded text-white fst-italic"
        : ""
    }'  data-id='${id}'>`
  )
    .html(
      `
      <div class='col-6 col-sm-8 col-md-9'>
        <div class="form-check">
          <input ${
            status === "done" ? "disabled checked" : ""
          } class="form-check-input" type="checkbox" onchange="doneTask(this, ${id})" id="check_${id}">
          <label class="form-check-label ${status}" for="check_${id}">
            ${text}
          </label>
        </div>
      </div>
      <div class='col-6 col-sm-4 col-md-3'>
        <button class='btn btn-light' onclick="editTask(this)">✏️</button>
        <button class='btn btn-light' onclick="showTask(${id})">👁</button>
        <button class='btn btn-dark' onclick="deleteTask(this)">❌</button>
      </div>
    `
    )
    .appendTo(sectionTask)
    .hide()
    .fadeIn(1000);
}