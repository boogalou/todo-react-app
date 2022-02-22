import { call, put, takeLatest } from 'redux-saga/effects';
import { todoCompleted, todoCreate, todoDelete } from '../actions';
import { todoService } from '../Service/todo.service';
import { TodoItem } from '../types/todo.interface';
import { AxiosResponse } from 'axios';
import { addTask, dataFetching } from '../Reducers/todosSlice';


function* createTodoWorker(action: ReturnType<typeof todoCreate>) {
  try {
    yield put(dataFetching());
    const response: AxiosResponse<TodoItem> = yield call(todoService.create, action.payload);
    yield put(addTask({...response.data}));
    yield put(dataFetching());
  } catch (err) {
    console.error(err);
  }
}

function* todoCompletedWorker(action: ReturnType<typeof todoCompleted>) {
  try {
    put(dataFetching());
    yield call(todoService.completed, action.payload);
    put(dataFetching());
  } catch (err) {
    console.error(err);
  }

}

function* todoDeleteWorker(action: ReturnType<typeof todoDelete>) {
  try {
    put(dataFetching());
    yield call(todoService.deleteTodo, action.payload);
    put(dataFetching());
  } catch (err) {
    console.error(err);
  }
}


export function* todoWatcherSaga() {
  yield takeLatest(todoCreate.type, createTodoWorker);
  yield takeLatest(todoCompleted.type, todoCompletedWorker);
  yield takeLatest(todoDelete.type, todoDeleteWorker);
}

