// Core
import { all } from '@redux-saga/core/effects';

// Watchers
import { watchTodos } from '../bus/todos/saga';

export function* rootSaga(): Generator {
  yield all([watchTodos()]);
}