import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers/todos'
import { routerReducer } from 'react-router-redux'

export default function configureStore(initialState) {
  return createStore(combineReducers({todos:reducers, routing:routerReducer}), initialState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
}