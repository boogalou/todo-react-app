import { all } from '@redux-saga/core/effects';
import { authWatcherSaga } from '../sagas/AuthSaga';


export function* rootSaga(): Generator {
  yield all([
    authWatcherSaga(),
  ])
}