import { Component } from 'react'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)

    this.removeTodoItem = this.removeTodoItem.bind(this)
    this.isDoneHandle = this.isDoneHandle.bind(this)
    this.addNewTask = this.addNewTask.bind(this)
    this.addTextToTask = this.addTextToTask.bind(this)

    this.state = {
      todos: [
        { id: 1, title: 'Learn React', done: false },
        { id: 2, title: 'Learn Vue', done: false },
        { id: 3, title: 'Learn Angular', done: false },
      ],
      taskText: '',
    }
  }

  componentDidMount () {
    localStorage.getItem('todoListTasks')
  }

  componentDidUpdate () {
    console.log('save')
    localStorage.setItem('todoListTasks', this.state)
  }

  addNewTask () {
    const newItem = {
      id: Math.floor(Math.random() * 100 + 1),
      title: this.state.taskText,
      done: false,
    }

    this.setState(({ todos }) => {
      const newState = [...todos, newItem]
      return {
        todos: newState,
      }
    })
    this.setState({ taskText: '' })
  }

  addTextToTask (text) {
    this.setState({
      taskText: text,
    })
  }

  isDoneHandle (id) {
    const index = this.state.todos.map(item => item.id).indexOf(id)
    this.setState(({ todos }) => todos[index].done = true)
  }

  removeTodoItem (id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id),
    })
  }

  render () {

    const { todos, taskText } = this.state
    const { warningMsg } = this.props

    const active = todos.filter(todo => !todo.done).length
    const done = todos.filter(todo => todo.done).length

    return (
      <div id="app-container" className="app-container">
        <Header active={ active } done={ done }/>

        <Body todos={ todos }
              isDoneHandle={ this.isDoneHandle }
              removeTodoItem={ this.removeTodoItem }
        />

        <Footer taskText={ taskText }
                addNewTask={ this.addNewTask }
                addTextToTask={ this.addTextToTask }
        />
      </div>

    )
  }
}

export default App