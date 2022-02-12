import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../Reducers/authSlice";
import todosSlice from '../Reducers/todosSlice';

export const rootReducer = combineReducers({
  todos: todosSlice,
  auth: authSlice,

})