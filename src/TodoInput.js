import React, { Component } from 'react';

class TodoInput extends Component {
  constructor() {
    super();
  }

  childAddTodo(e) {
    e.preventDefault();
    this.props.addTodoFunc({
      title: this.refs.title.value,
      description: this.refs.description.value,
      complete: this.refs.complete.value
    })
  }

  render () {
    return (
      <form>
        <input type="text" ref="title" />
        <input type="text" ref="description" />
        <select ref="complete">
          <option value="done sauce">done</option>
          <option value="not as much">not done</option>
        </select>
        <button onClick={this.childAddTodo.bind(this)}>Submit</button>
      </form>
    )
  }
}

export default TodoInput;
