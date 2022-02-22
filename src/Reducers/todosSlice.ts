import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoItem } from '../types/todo.interface';


export interface TodosState {
  todosData: TodoItem[];
  filters: string;
  status: null | string;
  error: null | string;
  isFetch: boolean;
}

const initialState: TodosState = {
  todosData: [],
  filters: '',
  status: null,
  error: null,
  isFetch: false
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,

  reducers: {
    addTask(state, action: PayloadAction<TodoItem | TodoItem[]>) {
      if (Array.isArray(action.payload)) {
       state.todosData = action.payload.map(item => item) ;
      } else {
        state.todosData.push(
          action.payload
        );
      }
    },

    removeTask(state, action) {
      state.todosData = state.todosData.filter(
        todo => todo._id !== action.payload._id);
    },

    setCompleted(state, action) {
      state.todosData.find(todo => {
        if (todo._id === action.payload._id) {
          todo.completed = !todo.completed;
        }
      });
    },

    taskFilterSwitch(state, action) {
      state.filters = action.payload;
    },

    dataFetching(state) {
      state.isFetch = !state.isFetch;
    },
  }
});

export const { addTask, removeTask, setCompleted, taskFilterSwitch, dataFetching, } = todosSlice.actions;
export default todosSlice.reducer;
