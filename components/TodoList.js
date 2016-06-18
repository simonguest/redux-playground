import React, {Component, PropTypes} from 'react'
import Todo from './Todo';

class TodoList extends Component {
  componentDidMount(){
    const { fetchTodos } = this.props;
    fetchTodos();
  }
  render() {
    const {todos, toggleClick, deleteClick} = this.props;
    var todoItems = todos.map((todo) => {
      return (
        <Todo key={todo.id} {...todo} toggleClick={() => toggleClick(todo.id)} deleteClick={() => deleteClick(todo.id)}/>
      );
    });
    return (
      <div>
        <p>{todos.length} Todos</p>
        {todoItems}
      </div>
    )
  }
}

export default TodoList;