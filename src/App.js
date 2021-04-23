import { Component } from 'react'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import './App.css'
import { connect } from 'react-redux'
import {
  addNewTaskAction,
  removeTaskAction, textTaskUpdateAction, toggleDoneStatusAction,
} from './store/reducers/todo-reducer'


class App extends Component {
  render () {

    const { todos, toggleDoneStatus,
            removeTask, taskText,
            addNewTask, textTaskUpdate  } = this.props



    const active = todos.filter(todo => !todo.done).length
    const done = todos.filter(todo => todo.done).length

    return (
      <div id="app-container" className="app-container">
        <Header active={ active } done={ done }/>

        <Body todos={ todos } removeTask={ removeTask }
              toggleDoneStatus={ toggleDoneStatus }
        />

        <Footer taskText={ taskText } addNewTask={ addNewTask } textTaskUpdate={ textTaskUpdate }
        />
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos,
    taskText: state.todos.taskText,
  }
}

const mapDispatchToProps = (dispatch) =>  ({
  addNewTask: (newItem) => { dispatch(addNewTaskAction(newItem)) },
  removeTask: (id) => { dispatch(removeTaskAction(id)) },
  textTaskUpdate: (text) => {dispatch(textTaskUpdateAction(text)) },
  toggleDoneStatus: (id) => { dispatch(toggleDoneStatusAction(id)) },

})


export default connect(mapStateToProps, mapDispatchToProps) (App);
