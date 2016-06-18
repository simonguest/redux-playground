import fetch from 'isomorphic-fetch'

let id = 0;

export const toggle = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
};

export const add = (text) => {
  return {
    type: 'ADD_TODO',
    id: id++,
    text,
    completed: false
  }
};

export const del = (id) => {
  return {
    type: 'DELETE_TODO',
    id: id
  }
};

export const requestTodos = () => {
  return {
    type: 'REQUEST_TODO'
  }
};

export const receiveTodos = (data) => {
  return {
    type: 'RECEIVE_TODO',
    data
  }
};

export const fetchTodos = () => {
  return dispatch => {
    dispatch(requestTodos());
    return fetch(`/graphql`, {
      method: 'POST',
      headers: {'Content-Type':'application/graphql'},
      body: 'query test { todos { id:_id, text:title, description, completed, } }'})
      .then(response => response.json())
      .then(json => dispatch(receiveTodos(json)))
  }
};