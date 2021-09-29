// Core
import { SagaIterator } from '@redux-saga/types';
import { all, call, takeEvery } from '@redux-saga/core/effects';
// Types
import { TODOS_FETCH_ASYNC } from '../types';
import { fetchTodos } from './workers/fetchTodos';




function* watchFetchTodos(): SagaIterator {
  yield takeEvery(TODOS_FETCH_ASYNC, fetchTodos)
};

export function* watchTodos(): SagaIterator {
  yield all([call(watchFetchTodos)])
};