import { ADD_TASK, ADD_TEXT_TASK, COMPLETED_TASK, REMOVE_TASK, TodosActionTypes, TodosType } from './types';




type TodosStateTypes = {
  todos: TodosType[];
  titleMsg: string,
}

const initialState: TodosStateTypes = {
  todos: [],
  titleMsg: '',
};

export const todosReducer = (state = initialState, action: TodosActionTypes): TodosStateTypes => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Math.floor(Math.random() * 1000),
            title: state.titleMsg,
            completed: false,
          }],
        titleMsg: ''
      };

    case ADD_TEXT_TASK:
      return {
        ...state,
        titleMsg: action.payload,
      }

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
          : todo)
      };

    default:
      return state;
  }
};