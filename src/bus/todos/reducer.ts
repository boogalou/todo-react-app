import {
  ADD_TASK,
  ADD_TEXT_TASK,
  COMPLETED_TASK,
  REMOVE_TASK,
  TASKS_FILTER_SWITCH,
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
  filters: '',
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

    case TASKS_FILTER_SWITCH:
      return {
        ...state,
        filters: action.payload,
      };


    default:
    // const x: never = action;

  }
  return state;
};
