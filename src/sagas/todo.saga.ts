import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { getAllTodos, todoCreate } from '../actions';
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

function* getAllTodosWorker(action: ReturnType<typeof getAllTodos>) {
  try {
    console.log(action.payload);
    const response: AxiosResponse<TodoItem[]> = yield call(todoService.getAll, action.payload)
  } catch (err) {
    console.error(err);
  }
}


export function* todoWatcherSaga() {
  yield takeLatest(todoCreate.type, createTodoWorker);
  yield takeEvery(getAllTodos.type, getAllTodosWorker)
}

