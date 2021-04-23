import React from 'react'
import './Footer.css'

const Footer = ({ addNewTask, taskText, textTaskUpdate }) => {

  const handleTaskText = (evt) => {
    let text = evt.target.value
    textTaskUpdate(text)
  }

  return (
    <>
      <div className="app-form">
        <input
          name=""
          type="text"
          value={ taskText }
          className="input-text"
          placeholder="Add your task..."
          onChange={ handleTaskText }
        />
        <button onClick={ () => addNewTask() } className="btn btn-add">Add
        </button>
      </div>
    </>
  )
}

export default Footer
