import Swal from "sweetalert2";
import TodoApi from "../../services/todoapi";
const TaskItem = ({task, refrescar}) => {
    const checkTask = async () => {
        const response = await Swal.fire({
        title: `¿Está seguro de marcar la tarea ${task.text} como <u><b>terminada</b></u>?`,
        showDenyButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `No`,
      })
      if (response.value) {
        await TodoApi.doneTask(task.id);
        await refrescar();
      }
    };
    
    const editTask = async () => {
      const response = await Swal.fire({
        title: 'Editar',
        input: 'text',
        inputLabel: 'Editando tarea',
        inputValue: task.text,
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return '¡Necesitas escribir algo!'
          }
        }
      })
      await TodoApi.updateTask(task.id, response.value);
      await refrescar();
    };
    
    const delTask = async () => {
      const response = await Swal.fire({
      title: `¿Está seguro de <u><b>eliminar</b></u> la tarea ${task.text}?`,
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
      })
      if (response.value) {
        await TodoApi.deleteTask(task.id);
        await refrescar();
      }
    };
    
    const bgStatus = {
      todo: "",
      done: "list-group-item-success",
      delete: "list-group-item-danger"
    };

    return (
        <li className={`list-group-item ${bgStatus[task.status]}`}>
              <div className="row">
                <div className="col-md-8">{task.text}</div>
                {task.status === "todo" && (
                    <div className="col-md-4">
                      <button onClick={checkTask} className="btn btn-sm btn-success"><i className="fa fa-check"></i></button>&nbsp;
                      <button onClick={editTask} className="btn btn-sm btn-warning"><i className="fa fa-edit"></i></button>&nbsp;
                      <button onClick={delTask} className="btn btn-sm btn-danger"><i className="fa fa-trash"></i></button>&nbsp;
                    </div>
                )}
              </div>
        </li>
    );
};
export default TaskItem;