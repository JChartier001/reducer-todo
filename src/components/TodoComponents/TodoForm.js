import React from "react";



class ToDoForm extends React.Component {
    constructor(){
        super();
        this.state={
            newTask: ""
        };

    }

    handleInputChange = e => {
        this.setState({newTask: e.target.value});
    }
    

    handleButtonClick = (e) => {
        e.preventDefault();
        console.log(this);
        this.props.addTask(this.state.newTask);
        this.setState({newTask: ''});
    };
    

    render(){
    return (
        <div className="toDoForm">
            <form onSubmit={this.handleButtonClick}>
                <label htmlFor="toDo">Task</label>
                <input type="text" name="toDo" placeholder="Enter To Do Item" id="toDo" value={this.state.newToDo} onChange={this.handleInputChange} />
                <button className="addNew">Add New To Do</button>
            </form>
        </div>
    );
    }
};

export default ToDoForm;