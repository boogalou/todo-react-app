import React from 'react'
import './Header.css'

const Header = ({active, done}) => {
  return (
    <>
      <div className="app-header">
        <div className="today">
          <h2>ToDo List</h2>
          <div className="task-count">
            <span>Done: {done}</span>
            <span>Active: {active}</span>
          </div>
        </div>

      </div>


    </>
  )
}

export default Header