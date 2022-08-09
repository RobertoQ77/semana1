// recuerden como hemos puesto "type": "module" podemos usar import
import express from "express";

const app = express();

// vamos a agregar lo siguiente para que node pueda entender lo que el cliente envia
app.use(express.json());

// vamos a crear un arreglo que contega las tareas
const todoListArray = [];

app.get("/", (request, response) => {
  /**
   * total: 100
   * tasks: []
   */
  response.json({
    total: todoListArray.length,
    tasks: todoListArray,
  });
});

app.post("/create-task", (request, response) => {
  // request.body : Es la data que el cliente envie
  const task = request.body;
  task.created_at = new Date();
  task.id = todoListArray.length + 1;

  todoListArray.push(task);

  response.json({
    tarea: task,
  });
});

app.put("/update-task/:id", (req, res) => {
  // viene en el params
  //! nota todo lo que venga de params es un string
  const id = req.params.id;

  // lo que el cliente envie estara en el body
  const data = req.body;
  // buscar la tarea

  const taskIndex = todoListArray.findIndex(
    (todoTask) => todoTask.id === Number(id)
  );

  todoListArray[taskIndex] = {
    ...todoListArray[taskIndex],
    ...data,
  };

  return res.json({
    tarea: todoListArray[taskIndex],
  });
});

app.listen(6001, () =>
  console.log("El servidor inicio en el puerto http://localhost:6001")
);