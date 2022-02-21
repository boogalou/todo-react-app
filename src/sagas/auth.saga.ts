import { call, put, takeLatest } from 'redux-saga/effects';
import { checkAuth, loginRequest, logoutRequest, registrationRequest } from '../actions';
import { dataFetching, setAuth, setUser } from '../Reducers/authSlice';
import { authService } from '../Service/auth.service';
import { AxiosResponse } from 'axios';
import { ResponseAuthData } from '../types/authResponse.interface';
import { todoService } from '../Service/todo.service';
import { TodoItem } from '../types/todo.interface';
import { addTask } from '../Reducers/todosSlice';

function* registrationWorker(action: ReturnType<typeof registrationRequest>) {
  try {
    yield put(dataFetching())
    const response: AxiosResponse<ResponseAuthData> = yield call(authService.registration, action.payload);
    localStorage.setItem('token', response.data.accessToken);
    yield put(setAuth(true ));
    yield put(setUser({...response.data}));
    yield put(dataFetching())
  } catch (err) {
    console.error(err);
  }
}

function* loginWorker(action: ReturnType<typeof loginRequest>) {
  try {
    yield put(dataFetching());
    const response: AxiosResponse<ResponseAuthData> = yield call(authService.login, action.payload);
    localStorage.setItem('token', response.data.accessToken);
    yield put(setAuth( true));
    yield put(setUser({...response.data}));
    yield put(dataFetching());
  } catch (err) {
    console.error(err);
  }
}

function* logoutWorker() {
  try {
    yield put(dataFetching());
    const response: AxiosResponse = yield call(authService.logout);
    localStorage.removeItem('token');
    yield put(setAuth(false));
    yield setUser({} as ResponseAuthData);
    yield put(dataFetching());
  } catch (err) {
    console.error(err);
  }
}

function* checkAuthWorker() {
  try {
    yield put(dataFetching());
    const response: AxiosResponse<ResponseAuthData> = yield call(authService.checkAuth);
    localStorage.setItem('token', response.data.accessToken);
    yield put(setAuth(true));
    yield put(setUser({...response.data}));
    const todosData: AxiosResponse<TodoItem[]> =  yield call(todoService.getAll, response.data.user._id);
    yield put(addTask(  todosData.data  ))
    yield put(dataFetching());
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
