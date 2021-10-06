export type TodosType = {
  id: number;
  title: string;
  completed: boolean;
}


export const START_FETCHING = 'START_FETCHING';
export type startFetchingAction = {
  type: typeof START_FETCHING;
};

export const STOP_FETCHING = 'STOP_FETCHING';
export type stopFetchingAction = {
  type: typeof STOP_FETCHING;
};

export const DATA_FILLING = 'DATA_FILLING';
export type dataFillingAction = {
  type: typeof DATA_FILLING;
  payload: TodosType[];
}


export const ADD_TASK = 'ADD_TASK';
export type addTaskAction = {
  type: typeof ADD_TASK;
};

export const REMOVE_TASK = 'REMOVE_TASK';
export type  removeTaskAction = {
  type: typeof REMOVE_TASK;
  payload: number;
};

export const COMPLETED_TASK = 'COMPLETED_TASK';
export type completedTaskAction = {
  type: typeof COMPLETED_TASK
  payload: number;
};

export const ADD_TEXT_TASK = 'ADD_TEXT_TASK';
export type  addTextTaskActionAction = {
  type: typeof ADD_TEXT_TASK;
  payload: string
}

export const SHOW_ALL_TASKS = 'SHOW_ALL_TASKS';
export type showAllTasksAction = {
  type: typeof SHOW_ALL_TASKS;
  payload: string;
}

export const SHOW_COMPLETED_TASKS = 'SHOW_CONPLETED_TASKS';
export type showCompletedTasksAction = {
  type: typeof SHOW_COMPLETED_TASKS;
  payload: string;
}

export const SHOW_CURRENT_TASKS = 'SHOW_CURRENT_TASKS';
export type showCurrentTasksAction = {
  type: typeof SHOW_CURRENT_TASKS;
  payload: string;
}

// Async
export const TODOS_FETCH_ASYNC = 'TODOS_FETCH_ASYNC';
type TodosFetchAsyncAction = {
  type: typeof TODOS_FETCH_ASYNC;
};


export type TodosActionTypes =
  | addTaskAction
  | removeTaskAction
  | completedTaskAction
  | addTextTaskActionAction
  | startFetchingAction
  | stopFetchingAction
  | dataFillingAction
  | TodosFetchAsyncAction
  | showAllTasksAction
  | showCompletedTasksAction
  | showCurrentTasksAction