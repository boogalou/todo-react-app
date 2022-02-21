import { combineReducers } from '@reduxjs/toolkit';
import todosSlice from '../Reducers/todosSlice';
import authSlice from '../Reducers/authSlice';


export const rootReducer = combineReducers({
  todos: todosSlice,
  auth: authSlice,

})