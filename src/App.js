import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {
          title: 'do things',
          description: 'blah',
          complete: 'done'
        },
        {
          title: 'do more things',
          description: 'blahhhh',
          complete: 'not done'
        }
      ]
    }
  }

  addTodo(todo, e) {
    this.setState({
      todos: this.state.todos.concat({
        title: todo.title,
        description: todo.description,
        complete: todo.complete
      })
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
