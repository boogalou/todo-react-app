import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import  todosSlice  from '../Reducers/todosSlice';

export const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
  devTools: true,
})

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;

