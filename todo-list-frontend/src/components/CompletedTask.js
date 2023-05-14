const CompletedTask = (props) => {
    console.log(props.data);
    return(
        <div>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <h3>{props.data.task}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompletedTask;