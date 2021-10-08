// Tools
import { ApiService } from '../../../../api';
import { call, put } from '@redux-saga/core/effects';
import { DATA_FILLING, FAIL_FETCHING } from '../../types';


export function* fetchTodos(): Generator {
  try {
    const data = yield call(ApiService.getTodos);
    console.log(put);
    yield put({ type: DATA_FILLING, payload: data })
  } catch (err) {
    yield put({type: FAIL_FETCHING, payload: { message: err.message }})
  }
}