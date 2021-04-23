import React from 'react'

const BodyItem = ({ todos, removeTask, toggleDoneStatus }) => {
  return (
    <>
      { todos.map(todo => {
        return <li key={ todo.id } className='todo-list'>
          <div className='list-item-view'>
            <div className='item' >
              <label className={ todo.done ? 'title done' : 'title'}>{ todo.title }</label>
            </div>
            <div className='btn-block'>
              <button onClick={ () => toggleDoneStatus(todo.id) }
                      className='btn btn-done'>Done
              </button>

              <button onClick={ () => removeTask(todo.id) }
                      className='btn btn-delete'>Remove
              </button>
            </div>
          </div>
        </li>
      }) }
    </>
  )
}

export default BodyItem;