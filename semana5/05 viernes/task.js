class Task {
    constructor(_text) {
      this.id = "_" + Math.random().toString(36).slice(2);
      this.text = _text;
      this.status = "todo"; // done | delete
      this.created_at = new Date();
      // this.priority = 'high';
      this.done_at = null;
      this.deleted_at = null;
      this.modified_at = null;
    }
  
    done() {
      this.ejecutar("done");
    }
  
    delete() {
      this.ejecutar("delete");
    }

    update() {
        this.ejecutar("update");

    }

    ejecutar(parametro) {
      this.status = parametro;
      if(parametro="done") this.done_at = new Date();
      if(parametro="delete") this.deleted_at = new Date();
      const element = document.querySelector("#" + this.id);
      element.classList.add(parametro);
      element.classList.remove("todo");
    }
  
    createElement() {
      const element = document.createElement("p");
      element.setAttribute("id", this.id);
      element.setAttribute("class", "task todo");
      element.innerHTML = `
            <div>  
              <input type="checkbox" onchange="checkTask(this);">
              <span>${this.text}</span>
            </div>
            <div>
              <a onclick="updateTask(this);">✏️</a>
              <a onclick="deleteTask(this);">❌</a>
            </div>
          `;
      return element; // elemento HTML
    }
  }