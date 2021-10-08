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

export const FAIL_FETCHING = 'FAIL_FETCHING';
export type failFetchingAction = {
  type: typeof FAIL_FETCHING,
  payload: string;
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

export const TASKS_FILTER_SWITCH = 'TASKS_FILTER_SWITCH';
export type taskFilterSwitchAction = {
  type: typeof TASKS_FILTER_SWITCH;
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
  | taskFilterSwitchAction
  | failFetchingAction