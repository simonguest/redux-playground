import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import {toggle, del, fetchTodos} from '../actions/todos';

const mapStateToProps = (state) => {
  return {
    todos: state.todos.items
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleClick: (id) => {
      dispatch(toggle(id));
    },
    deleteClick: (id) => {
      dispatch(del(id));
    },
    fetchTodos: () => {
      dispatch(fetchTodos())
    }
  }
};

const TodoPanel = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoPanel;