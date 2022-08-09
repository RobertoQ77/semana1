import express from "express";
import cors from "cors";

const client_path = "/semana_8/todoapp/index.html";

const app = express();

app.use(cors());
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); // Parse URL-encoded bodies

const tasks = [];

app.get("/", (req, res) => {
	res.json({
		app: "Mandame algo!",
	});
});
app.get("/tasks", (req, res) => {
	res.json({
		tasks: tasks,
	});
});

app.post("/task", (req, res) => {
	if (req.body.task_text === "") {
		return res.status(401).json({
			message: "params",
		});
	}
	const task = {
		id: tasks.length + 1,
		text: req.body.task_text,
		status: "todo",
		created_at: new Date(),
		udpdated_at: null,
		done_at: null,
		deleted_at: null,
	};
	tasks.push(task);
	// res.redirect(req.get("origin") + client_path + "?r=add");
	res.json({
		message: "ok",
	});
});

app.put("/task/:id/update", (req, res) => {
	const task_id = req.params.id;
	const index = tasks.findIndex((task) => task.id === Number(task_id));
	if (index === undefined) {
		return res.status(401).json({
			message: "id",
		});
	}
	tasks[index] = {
		...tasks[index],
		text: req.body.new_text,
		udpdated_at: new Date(),
	};
	res.json({
		message: "ok",
	});
});

app.put("/task/:id/done", (req, res) => {
	const task_id = req.params.id;
	const index = tasks.findIndex((task) => task.id === Number(task_id));
	if (index === undefined) {
		return res.status(401).json({
			message: "id",
		});
	}
	tasks[index] = {
		...tasks[index],
		status: "done",
		done_at: new Date(),
	};
	res.json({
		task: tasks[index],
	});
});

app.put("/task/:id/delete", (req, res) => {
	const task_id = req.params.id;
	const index = tasks.findIndex((task) => task.id === Number(task_id));
	if (index === undefined) {
		return res.status(401).json({
			message: "id",
		});
	}
	tasks[index] = {
		...tasks[index],
		status: "delete",
		deleted_at: new Date(),
	};
	res.json({
		task: tasks[index],
	});
});

app.listen(3000, () => console.log("Listening on port 3000"));