import { Action, configureStore, getDefaultMiddleware, ThunkAction } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { logger, sagaMiddleware } from './middleware';
import { rootSaga } from './rootSaga';

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [...getDefaultMiddleware({thunk: false}), logger, sagaMiddleware]
})


export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga);

