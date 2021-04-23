import { applyMiddleware, combineReducers, createStore } from 'redux'
import { todoReducer } from './reducers/todo-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  todos: todoReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()))

