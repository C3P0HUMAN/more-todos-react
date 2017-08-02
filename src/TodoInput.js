import React, { Component } from 'react';

class TodoInput extends Component {
  constructor() {
    super();

    this.state = {
      newTodo: ''
    }
  }

  handleChange(e) {
    this.setState({
      newTodo: e.target.value
    })
  }

  childAddTodo() {
    this.props.addTodoFunc(this.state.newTodo)
  }

  render () {
    return (
      <div>
        <input type="text" onChange={this.handleChange.bind(this)} value={this.state.newTodo} />
        <button onClick={() => this.props.addTodoFunc(this.state.newTodo)}>Submit</button>
      </div>
    )
  }
}

export default TodoInput;
