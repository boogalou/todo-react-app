import {
  ADD_TASK,
  ADD_TEXT_TASK,
  COMPLETED_TASK,
  REMOVE_TASK,
  START_FETCHING,
  STOP_FETCHING,
  DATA_FILLING,
  TODOS_FETCH_ASYNC,
  addTaskAction,
  addTextTaskActionAction,
  completedTaskAction,
  removeTaskAction,
  startFetchingAction,
  stopFetchingAction,
  dataFillingAction,
  TodosType,
  TodosActionTypes,
} from './types';

export const addTask = (): addTaskAction => ({
  type: ADD_TASK,
});

export const removeTask = (payload: number): removeTaskAction => ({
  type: REMOVE_TASK,
  payload,
});

export const completedTask = (payload: number): completedTaskAction => ({
  type: COMPLETED_TASK,
  payload,
});

export const textUpdateTask = (payload: string): addTextTaskActionAction => ({
  type: ADD_TEXT_TASK,
  payload,
});

export const startFetching = (): startFetchingAction => ({
  type: START_FETCHING,
});

export const stopFetching = (): stopFetchingAction => ({
  type: STOP_FETCHING,
});

export const dataFilling = (payload: TodosType[]): dataFillingAction => ({
  type: DATA_FILLING,
  payload
});

// Async
export const fetchAsync = (): TodosActionTypes => ({
  type: TODOS_FETCH_ASYNC,
});


