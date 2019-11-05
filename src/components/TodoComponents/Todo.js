import React from "react";


const ToDo = props => {
    console.log("todo", props)
    return (
        <div className={`task ${props.task.completed ? ' completed' : ''}`}
        onClick = {()=> props.toggleDone(props.id)}>
            <p>{props.task}</p>
        </div>
    );
};

export default ToDo;