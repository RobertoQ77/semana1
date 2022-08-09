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
    arrayTask.forEach((task) => {
      if (filter) {
        if (task.status == filter || filter == "all") {
          addTaskToSection(task);
        }
      } else {
        addTaskToSection(task);
      }
    });

    if (filter) {
      switch (filter) {
        case "todo":
          $("#filter_todo").addClass("active");
          break;
        case "done":
          $("#filter_done").addClass("active");
          break;
        case "delete":
          $("#filter_delete").addClass("active");
          break;
        default:
          $("#filter_all").addClass("active");
          break;
      }
    }

    // updateCalcChart();
  }

  if (sectionTask.html() == "") {
    new Noty({
      theme: "relax",
      type: "info",
      layout: "center",
      text: "No hay nada",
      timeout: 3000,
    }).show();
  }
});

function showFilteredModalTask(filter) {
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

  addTaskToSection(task);
  new Noty({
    theme: "relax",
    type: "success",
    layout: "topCenter",
    text: "Nueva tarea agregada!",
    timeout: 3000,
  }).show();
});

function deleteTask(element) {
  const div_task = $(element).closest(".row");
  const id = div_task.data("id");
  const task = updateTask(id, "status", "delete");
  div_task.replaceWith(task.toHtml());

  new Noty({
    theme: "relax",
    type: "error",
    layout: "topCenter",
    text: "Tarea borrada",
    timeout: 3000,
  }).show();
}

function saveTask(element) {
  const div_task = $(element).closest(".row");
  const id = Number(div_task.attr("data-id"));
  const newText = div_task.find("input").val();
  const task = updateTask(id, "text", newText);
  div_task.replaceWith(task.toHtml());
  Swal.fire("Tarea actualizada", `[ ${newText} ]`, "success");
}

function editTask(element) {
  const div_task = $(element).closest(".row");
  div_task.html(`
      <div class='col-6 col-sm-8 col-md-9'>
        <input placeholder="editar tarea" type="text" class="form-control"/>
      </div>
      <div class='col-6 col-sm-4 col-md-3'>
        <button class="btn btn-dark" onclick="saveTask(this)"><i class="fa-solid fa-floppy-disk"></i></button>
        <button class="btn btn-dark" onclick="resetTask(this)"><i class="fa-solid fa-xmark"></i></button>
      </div>
  `);
}

function resetTask(element) {
  const div_task = $(element).closest(".row");
  const id = div_task.data("id");
  const task = arrayTask.find((task) => task.id === id);
  div_task.replaceWith(task.toHtml());
}

function showTask(id) {
  const task = arrayTask.find((task) => task.id === id);
  sectionDetailTask.empty().show();

  sectionDetailTask.append(
    `
    <div class="card" style="width: 300px; padding: 0;">
      <img src="https://source.unsplash.com/user/erondu/300x200?v=${Math.random()}" class="card-img-top" />
      <div class="card-body">
        <div class="card-title">${task.text}</div>
        <div class="card-text">
        ${task.status}
        </div>
         <div class="card-text">
        ${task.created_at.toLocaleString()}
        </div>
      </div>
    </div>
    `
  );
}

function doneTask(element, id) {
  const task = updateTask(id, "status", "done");
  const div_task = $(element).closest(".row");
  div_task.replaceWith(task.toHtml());
}

function addTaskToSection(task) {
  const div_task = task.toHtml();
  div_task.appendTo(sectionTask).hide().fadeIn(1000);
}

function resetStorage() {
  Swal.fire({
    title: "Estás seguro?",
    text: "(estas a punto de borrar el localStorage...)",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, borrar!",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("tasks");
      Swal.fire(
        "localStorage se borró!",
        "Todas las tareas se han eliminado",
        "success"
      );
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  });
}