import React from 'react';
import { TodoData } from './components/TodoData';
import Form from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      todo: TodoData
    }
  }
//function to add task - pass in task that comes from input form
// use setState method to set new task to state
// setState is method and uses ()
// state is an object, so use {}
// todo is the state object being called
// use an array to spread in the defined todo state data
// define the task variables being passed into state.
  addNewTask = (task) => {
    this.setState({
      todo: [...this.state.todo, {
        title: task,
        id: Date.now(),
        completed: false
      }]
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
          <Form addNewTask={this.addNewTask} />
          <TodoList />
      </div>
    );
  }
}

export default App;
