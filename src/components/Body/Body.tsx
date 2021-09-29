import React, { FC } from 'react';
import './Body.css'
import { BodyItem } from './Body-item'
import { AppState } from '../../init/store';
import { useAppSelector } from '../../hooks/useDispatch';

export const Body: FC = () => {

  const todos = useAppSelector((state: AppState) => state.todos.todos);

  return (
    <>
      <div className="app-body">
        <ul className="wrap">
          {todos.map((todo) => <BodyItem key={todo.id} {...todo} />)}
        </ul>
      </div>
    </>
  )
}

