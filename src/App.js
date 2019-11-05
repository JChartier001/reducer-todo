import React from 'react';
import ToDoForm from "./components/TodoComponents/TodoForm"
import ToDoList from "./components/TodoComponents/TodoList"
import "../src/components/TodoComponents/Todo.css";


const data= [{
  task: "Complete Prep",
  id: "201910281359",
  completed: false
},
{
  task: 'Organize Garage',
  id: 1528817077286,
  completed: false
},
{
  task: 'Bake Cookies',
  id: 1528817084358,
  completed: false
}];
class App extends React.Component {
  constructor(){
    super();
    this.state = {toDo: data};
  }
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addTask = task =>{
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      toDo: [...this.state.toDo, newTask]
    });
  };

  filterDone = () => {
    this.state.toDo.filter(completed => completed)

  };

  toggleDone = id => {
    console.log("ID",id);
    this.setState({
      toDo: this.state.toDo.map(task =>{
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          }; }
          else {
            return task;
          }
      })
    });
  };
  render() {
    return (
      <div className="App">
        <ToDoForm addTask={this.addTask} />
        <ToDoList toggleDone = {this.toggleDone} toDo={this.state.toDo} />
      </div>
    );
  }
}

export default App;

