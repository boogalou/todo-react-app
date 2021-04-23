const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const UPDATE_TEXT = 'UPDATE_TEXT';
const DONE_STATUS_TOGGLE = 'DONE_STATUS_TOGGLE';


const initialState = {
  todos: [
    { id: 1, title: 'Learn React', done: true},
    { id: 2, title: 'Learn Vue', done: false },
    { id: 3, title: 'Deploy React app', done: true },
  ],

  taskText: '',
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        todos: [...state.todos,
        {
          id: Math.floor(Math.random() * 100),
          title: state.taskText,
          done: false,
        }],
        taskText: '',
      }
    }

    case REMOVE_ITEM: {
      return {
        ...state,
        todos: state.todos.filter(task => task.id !== action.payload)
      }
    }

    case UPDATE_TEXT: {
      return { ...state,
        taskText: action.payload,

      }
    }

    case DONE_STATUS_TOGGLE: {
      return {
        ...state,
        todos: state.todos.map(item => item.id === action.payload
          ? { ...item, done: !item.done }
          : item)
      }
    }

    default:
      return state;
  }

}


export const addNewTaskAction = (payload) => ({ type: ADD_ITEM, payload });
export const removeTaskAction = (payload) => ({ type: REMOVE_ITEM, payload });
export const textTaskUpdateAction = (payload) => ({ type: UPDATE_TEXT, payload });
export const toggleDoneStatusAction = (payload) => ({ type: DONE_STATUS_TOGGLE, payload });
