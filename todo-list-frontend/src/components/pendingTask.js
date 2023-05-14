const PendingTask = (props) => {
    console.log(props);
    return(
        <div>
            <div className="container">
                <div className="card">
                    <div className="card-body d-flex">
                        <p className="mt-3">{props.data.task}</p>&nbsp;
                        <button className="btn btn-primary" type="button" onClick={()=>props.changeStatus(props.data._id)}>Update Task as Completed</button>&nbsp;
                        <button className="btn btn-danger" type="button" onClick={()=>props.delete(props.data._id)}>Delete Task</button>
                    </div>
                </div>
            </div>
            <div className="pendingtasksdiv">   
                <div className="pendingtask">
                    
                </div>
            </div>
        </div>
    );
}

export default PendingTask;