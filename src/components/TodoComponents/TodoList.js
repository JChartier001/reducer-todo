import React from "react";
import ToDo from "./Todo";




const ToDoList = props =>{
    console.log("ToDOLIst", props);
    return (
    <div className="toDoList">
        {props.toDo.map(task => (
            // console.log("inMap", task)
            <ToDo className="task"
            key={task.id}
            id={task.id}
            task={task.task}
            completed={task.completed}
            toggleDone={props.toggleDone}
            />
        ))}
    </div>
    )
};
export default ToDoList;