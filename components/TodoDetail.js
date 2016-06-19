import React, {Component} from 'react'

class TodoDetail extends Component {
  render(){
    return (
      <div>Details for {this.props.params.todoId}</div>
    )
  }
}

export default TodoDetail;