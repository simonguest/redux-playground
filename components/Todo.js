import React, {Component} from 'react'
import {Link} from 'react-router'

class Todo extends Component {
  render() {
    const {text, id, completed, toggleClick, deleteClick} = this.props;
    return (
      <div>
        <p style={{textDecoration: completed ? 'line-through' : ''}}><Link to={`/todo/${id}`}>{text}</Link>
          <button onClick={toggleClick}>Complete</button>
          <button onClick={deleteClick}>Delete</button>
        </p>
      </div>
    )
  }
}

export default Todo;