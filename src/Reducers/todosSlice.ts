import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoItem } from '../types/todo.interface';


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
    addTask(state, action: PayloadAction<TodoItem>) {
      state.todosData.push(
        action.payload
      );
    },

    removeTask(state, action) {
      state.todosData = state.todosData.filter(
        todo => todo.userId !== action.payload.userId);
    },

    setCompleted(state, action) {
      state.todosData.find(todo => {
        if (todo.userId === action.payload.id) {
          todo.completed = !todo.completed;
        }
      });
    },

    taskFilterSwitch(state, action) {
      state.filters = action.payload;
    }
  }
});

export const { addTask, removeTask, setCompleted, taskFilterSwitch,  } = todosSlice.actions;
export default todosSlice.reducer;
