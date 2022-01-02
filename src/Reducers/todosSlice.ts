import { createSlice } from '@reduxjs/toolkit';
import { TodoItem } from '../types/todo.interface';
import { v4 as uuidv4 } from 'uuid';


export interface TodosState {
  todosData: TodoItem[];
  filters: string;
  status: null | string;
  error: null | string;
};

const initialState: TodosState = {
  todosData: [],
  filters: '',
  status: null,
  error: null,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,

  reducers: {
    addTask(state, action) {
      state.todosData.push({
        id: uuidv4(),
        title: action.payload.title,
        completed: false
      });
    },

    removeTask(state, action) {
      state.todosData = state.todosData.filter(
        todo => todo.id !== action.payload.id);
    },

    setCompleted(state, action) {
      state.todosData.find(todo => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
        }
      });
    },

    taskFilterSwitch(state, action) {
      state.filters = action.payload;
    }
  }
});

export const { addTask, removeTask, setCompleted, taskFilterSwitch } = todosSlice.actions;
export default todosSlice.reducer;
