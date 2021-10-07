import {
  ADD_TASK,
  ADD_TEXT_TASK,
  COMPLETED_TASK,
  REMOVE_TASK,
  SHOW_ALL_TASKS,
  SHOW_CURRENT_TASKS,
  SHOW_COMPLETED_TASKS,
  TodosActionTypes,
  TodosType
} from './types';


type TodosStateTypes = {
  todos: TodosType[];
  filters: string
  titleMsg: string,
}

const initialState: TodosStateTypes = {
  todos: [],
  filters: 'all',
  titleMsg: '',
};

export const todosReducer = (state = initialState, action: TodosActionTypes): TodosStateTypes => {
  switch (action.type) {
    case ADD_TASK:
      let date = new Date();
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: +date.toISOString().slice(-4, -1),
            title: state.titleMsg,
            completed: false,
          }],
        titleMsg: ''
      };

    case ADD_TEXT_TASK:
      return {
        ...state,
        titleMsg: action.payload,
      };

    case REMOVE_TASK:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      };

    case COMPLETED_TASK:
      return {
        ...state,
        todos: state.todos.map((todo) => todo.id === action.payload
          ? {...todo, completed: !todo.completed}
          : todo),
      };

    case SHOW_ALL_TASKS:
      return {
        ...state,
        filters: action.payload,
      };

    case SHOW_COMPLETED_TASKS:
      return {
        ...state,
        filters: action.payload,
      };

    case SHOW_CURRENT_TASKS:
      return {
        ...state,
        filters: action.payload,
      };

    default:
    // const x: never = action;

  }
  return state;
};
