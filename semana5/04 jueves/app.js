class Task {

    constructor(_text) {
        this.id = '_' + Math.random().toString(36).slice(2);
        this.text = _text;
        this.status = 'todo'; // done | delete
        this.created_at = new Date();
        // this.priority = 'high';
        this.done_at = null;
        this.deleted_at = null;
        this.modified_at = null;
    }

    done() {
        this.status = 'done';
        this.done_at = new Date(); // fecha y hora actual.
        document.querySelector("#" + this.id).classList.add('done');
    }

    delete() {
        this.status = 'delete';
        this.deleted_at = new Date();
        document.querySelector("#" + this.id).classList.add('delete');
    }

    modify() {
        if(this.status=='done') {
            checkbox.removeAttribute('disabled');
            document.querySelector("#" + this.id).classList.remove('done');
        }
        if(this.status=='delete')
            document.querySelector("#" + this.id).classList.remove('delete');
        this.status = 'modify';
        this.modfied_at = new Date();
    }

    createElement() {
        const element = document.createElement('p');
        element.setAttribute('id', this.id);
        element.setAttribute('class', 'task');
        element.innerHTML = `
            <input type="checkbox" onchange="checkTask(this);">
            <span>${this.text}</span>
            <a onclick="deleteTask(this);">❌</a>
            `;
        return element; // elemento HTML
    }
}

// DOM:
const listTasks = document.querySelector("#list");
const inputTask = document.querySelector('#input_newtask');
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
    document.querySelector('.form').before(task.createElement());
    inputTask.value = "";
    inputTask.focus();
}

function checkTask(checkbox) {
    if (checkbox.checked) {
        const task_id = checkbox.parentElement.id;
        const task = arrayTasks.find(task => task.id == task_id);
        task.done();
        checkbox.setAttribute('disabled', true);
    }
}

function deleteTask(anchor) {
    const task_id = anchor.parentElement.id;
    const task = arrayTasks.find(task => task.id == task_id);
    task.delete();
}

const chcTaskDo 
function checkTaskDo() {
    webkitURL.apply.
}