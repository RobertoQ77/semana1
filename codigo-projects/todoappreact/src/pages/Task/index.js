import {useState, useRef, useEffect} from "react";
import TodoApi from "../../services/todoapi";
import FormAddTask from "../../components/FormAddTask";
import TaskListContainer from "../../components/TaskListContainer";

const Task = () => {
    const inputTask = useRef(null);
    const [text, setText] = useState("");
    const [tasks, setTasks] = useState([]);

    function manejarInput(e){
    setText(e.target.value);
    }

    async function agregar () {
    const res = await TodoApi.addtask(text);
        if(res){
            inputTask.current.value = "";
            inputTask.current.focus();
            refrescar();
        }
    }

    async function refrescar () {
    const data = await TodoApi.listtasks();
    setTasks(data.tasks);
    }

    useEffect (() => {
        refrescar();
    }, []);

    return (
        <div className="container mt-5 mx-auto" style={{width: 600}}>
            <FormAddTask 
                inputTask={inputTask}
                agregar={agregar}
                manejarInput={manejarInput}
                refrescar={refrescar}
            />
        <TaskListContainer tasks={tasks} refrescar={refrescar}/>
    </div>
    );
}
export default Task;