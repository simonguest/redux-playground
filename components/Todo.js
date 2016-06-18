import React from 'react'

const Todo = ({text, completed, toggleClick, deleteClick}) => {
  return (
    <div>
      <p style={{textDecoration: completed ? 'line-through' : ''}}>{text}
        <button onClick={toggleClick}>Complete</button>
        <button onClick={deleteClick}>Delete</button>
      </p>
    </div>
  )
};

export default Todo;