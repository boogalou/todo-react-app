import { call, put, takeLatest } from 'redux-saga/effects';
import { todoCreate } from '../actions';
import { todoService } from '../Service/todo.service';
import { TodoItem } from '../types/todo.interface';
import { AxiosResponse } from 'axios';
import { addTask } from '../Reducers/todosSlice';


function* createTodoWorker(action: ReturnType<typeof todoCreate>) {
  try {
    const response: AxiosResponse<TodoItem> = yield call(todoService.create, action.payload);
    yield put(addTask(response.data))
  } catch (err) {
    console.error(err)
  }
}


export function* todoWatcherSaga() {
  yield takeLatest(todoCreate.type, createTodoWorker)
}

