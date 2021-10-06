import {
  ADD_TASK,
  ADD_TEXT_TASK,
  addTaskAction,
  addTextTaskActionAction,
  COMPLETED_TASK,
  completedTaskAction,
  DATA_FILLING,
  dataFillingAction,
  REMOVE_TASK,
  removeTaskAction,
  SHOW_ALL_TASKS,
  SHOW_COMPLETED_TASKS,
  SHOW_CURRENT_TASKS,
  showAllTasksAction,
  showCompletedTasksAction,
  showCurrentTasksAction,
  START_FETCHING,
  startFetchingAction,
  STOP_FETCHING,
  stopFetchingAction,
  TODOS_FETCH_ASYNC,
  TodosActionTypes,
  TodosType,
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

export const showAllTasks = (payload: string): showAllTasksAction => ({
  type: SHOW_ALL_TASKS,
  payload,
});

export const showCompletedTasks = (payload: string): showCompletedTasksAction => ({
  type: SHOW_COMPLETED_TASKS,
  payload
});

export const showCurrentTasks = (payload: string): showCurrentTasksAction => ({
  type: SHOW_CURRENT_TASKS,
  payload,
});

// Async
export const fetchAsync = (): TodosActionTypes => ({
  type: TODOS_FETCH_ASYNC,
});


