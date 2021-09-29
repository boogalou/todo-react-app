import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { todosReducer } from '../bus/todos/reducer';
import { sagaMiddleware } from './middleWare';
import { rootSaga } from './rootSaga';


export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware: [...getDefaultMiddleware({thunk: false}), sagaMiddleware],
})

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

sagaMiddleware.run(rootSaga);