import { call, put, takeLatest } from 'redux-saga/effects';
import { checkAuth, loginRequest, logoutRequest, registrationRequest } from '../actions';
import { setAuth, setUser } from '../Reducers/authSlice';
import { authService } from '../Service/auth.service';
import { AxiosResponse } from 'axios';
import { ResponseAuthData } from '../types/authResponse.interface';

function* registrationWorker(action: ReturnType<typeof registrationRequest>) {
  try {
    const response: AxiosResponse<ResponseAuthData> = yield call(authService.registration, action.payload);
    localStorage.setItem('token', response.data.accessToken);
    yield put(setAuth(true ));
    yield put(setUser({...response.data}));
  } catch (err) {
    console.error(err);
  }
}

function* loginWorker(action: ReturnType<typeof loginRequest>) {
  try {
    const response: AxiosResponse<ResponseAuthData> = yield call(authService.login, action.payload);
    localStorage.setItem('token', response.data.accessToken);
    yield put(setAuth( true));
    yield put(setUser({...response.data}));
  } catch (err) {
    console.error(err);
  }
}

function* logoutWorker() {
  try {
    const response: AxiosResponse = yield call(authService.logout);
    localStorage.removeItem('token');
    yield put(setAuth(false));
    yield setUser({} as ResponseAuthData);
  } catch (err) {
    console.error(err);
  }
}

function* checkAuthWorker() {
  try {
    const response: AxiosResponse<ResponseAuthData> = yield call(authService.checkAuth);
    localStorage.setItem('token', response.data.accessToken);
    yield put(setAuth(true));
    yield put(setUser({...response.data}));
  } catch (err) {
    console.error(err);
  }
}

export function* authWatcherSaga(): Generator {
  yield takeLatest(registrationRequest.type, registrationWorker);
  yield takeLatest(loginRequest.type, loginWorker,);
  yield takeLatest(logoutRequest.type, logoutWorker);
  yield takeLatest(checkAuth.type, checkAuthWorker);
}
