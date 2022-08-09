const FormAddTask = (props) => {
    const { manejarInput, inputTask, agregar } = props;

    return (
        <div>
            <h1>Todo App</h1>
                <div className="card">
                    <div className="card-body">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="New Task..."
                            onChange={manejarInput}
                            autoComplete="off"
                            ref={inputTask}
                        />
                        <button className="btn btn-primary" onClick={agregar}>
                        <i className="fa-solid fa-plus"></i>&nbsp; Add
                        </button>
                    </div>
                    </div>
                </div>
        </div>
    );
}
export default FormAddTask;