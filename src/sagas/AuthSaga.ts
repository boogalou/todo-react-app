import { call, put, takeLatest } from 'redux-saga/effects';
import { asyncRequest } from '../actions';
import { setUser, setAuth } from '../Reducers/authSlice';
import { authService } from '../Service/auth.service';
import { AxiosResponse } from 'axios';
import { ResponseAuthData } from '../types/auth.interface';

function* authWorkerSaga(action: ReturnType<typeof asyncRequest>) {
  try {
    const response: AxiosResponse<ResponseAuthData> = yield call(authService.registration, action.payload);
    localStorage.setItem('token', response.data.accessToken);
    yield put(setAuth());

    yield put(setUser({ ...response.data }));
  } catch (err) {
    console.error(err);
  }
}

export function* authWatcherSaga(): Generator {
  yield takeLatest(asyncRequest.type, authWorkerSaga);
}
