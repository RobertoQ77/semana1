const api_url = "http://localhost:3000";

const addtask = async (text) => {
    try {
        const response = await fetch(api_url + "/task", {
            method: "POST",
            body: JSON.stringify({
                task_text: text,
            }),
            headers: {
                "Content-type": "application/json",
            },
        });
        return response.ok;
    } catch (error) {
        console.log(error);
    }
};

const listtasks = async () => {
    try {
        const response = await fetch(api_url + "/tasks");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

const updateTask = async (id, text) => {
    try {
        const response = await fetch(api_url + "/task/" + id + "/update", {
            method: "PUT",
            body: JSON.stringify({
                new_text: text,
            }),
            headers: {
                "Content-type": "application/json",
            },
        });
        return response.ok;
    } catch (error) {
        console.log(error);
    }
};

const doneTask = async (id) => {
    try {
        const response = await fetch(api_url + "/task/" + id + "/done", {
            method: "PUT",
        });
        const data = await response.json();
        return data.task;
    } catch (error) {
        console.log(error);
    }
};

const deleteTask = async (id) => {
    try {
        const response = await fetch(api_url + "/task/" + id + "/delete", {
            method: "PUT",
        });
        const data = await response.json();
        return data.task;
    } catch (error) {
        console.log(error);
    }
};

const TodoApi = {
    addtask,
    listtasks,
    updateTask,
    doneTask,
    deleteTask,
};

export default TodoApi;