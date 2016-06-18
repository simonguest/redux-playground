import {map, reject} from 'ramda'
import update from 'react/lib/update'

export default function todos(state = {items: [], isFetching: false}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return update(state,
        {
          items: {
            $push: [{
              id: action.id,
              text: action.text,
              completed: action.completed
            }]
          }
        });
    case 'TOGGLE_TODO':
      return update(state,
        {
          items: {
            $set: map((item) => {
              if (item.id === action.id) item.completed = !item.completed;
              return item;
            }, state.items)
          }
        });
    case 'DELETE_TODO':
      return update(state, {items: {$set: reject((item) => item.id === action.id, state.items)}});
    case 'REQUEST_TODO':
      return update(state, {isFetching: {$set: true}});
    case 'RECEIVE_TODO':
      return update(state, {
        isFetching: {$set: false},
        items: { $set: action.data.data.todos }
      });
    default:
      return state;
  }
}