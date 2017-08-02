import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {
          task: 'do things'
        },
        {
          task: 'do more things'
        }
      ]
    }
  }

  addTodo(todo, e) {
    this.setState({
      todos: this.state.todos.concat({task:todo})
    })
  }

  render() {
    return (
      <div className="App">
        <TodoInput addTodoFunc={this.addTodo.bind(this)} />
        <TodoList thetodos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
