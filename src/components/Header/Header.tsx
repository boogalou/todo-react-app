import React, { FC } from 'react';
import './Header.css'
import { useAppSelector } from '../../hooks/useDispatch';
import { AppState } from '../../init/store';

const Header: FC = () => {

  const todos = useAppSelector((state: AppState) => state.todos.todos)

  let done = todos.filter(todo => todo.completed).length;
  let active = todos.length - todos.filter(todo => todo.completed).length;

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