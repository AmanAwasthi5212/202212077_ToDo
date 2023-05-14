const AddTask = (props) => {
    const doAddTask=()=>{
        const name = document.getElementById("task_desc").value;
        console.log(name);
        props.addTask(name);
    }
    return(
        <div>
            <div className="container mt-4 text-center">
                <div className="card">
                    <div className="card-header bg-white">
                        <h2>Add Task</h2>
                    </div>

                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="task_desc" className="form-label">Add your Task  </label>
                            <input type="text" name="task_desc" className="form-control" id="task_desc" />
                        </div>
                    </div>

                    <div className="card-footer bg-white">
                        <button className="btn btn-primary" onClick={doAddTask}>Add Task</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddTask;