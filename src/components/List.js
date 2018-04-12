import React from 'react'

function List(props) {

  const todos = props.items.map((todo, index) => (
    <li key={index}>{todo}</li>
  ))

  return (
    <ul>
      {todos}
    </ul>
  )
}

export default List
