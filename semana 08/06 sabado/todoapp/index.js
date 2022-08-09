import express from "express";
const app = express();
app.use(express.json());
app.use(express.urlencoded());

const todoListArray = [];

app.get("/tasks", (req, res) => {
    if(todoListArray.length==0){
        let task = {
            "id" : 1,
            "text" : "tarea 1",
            "created_at" : new Date()
        };
        todoListArray.push(task);
    }

    res.json({
      tasks: todoListArray,
    });
});

app.post("/task", (req, res) => {
    let task = {
        id : todoListArray.length + 1,
        text : req.body.task_text,
        status : "TODO",
        created_at : new Date()
    };
    todoListArray.push(task);
  
    res.json({
      message : "ok"
    });
});

app.listen(3000, () =>
    console.log("El servidor inicio en el puerto http://localhost:3000")
);