import { all } from '@redux-saga/core/effects';
import { authWatcherSaga } from '../sagas/auth.saga';
import { todoWatcherSaga } from '../sagas/todo.saga';


export function* rootSaga(): Generator {
  yield all([
    authWatcherSaga(),
    todoWatcherSaga()
  ])
}