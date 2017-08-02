import React from 'react'

const TodoList = (props) => {
  let thetodolist = props.thetodos.map((todo, index) => <li key={index}>{todo.title} - {todo.description} - Done or no?: {todo.complete}</li>)
  return (
    <ul>{thetodolist}</ul>
  )
}

export default TodoList;
