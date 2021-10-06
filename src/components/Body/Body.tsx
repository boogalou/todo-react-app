import React, { FC } from 'react';
import './Body.css';
import { BodyItem } from './Body-item';
import { AppState } from '../../init/store';
import { useAppSelector } from '../../hooks/useDispatch';

export const Body: FC = () => {

  const filters = useAppSelector((state: AppState) => state.todos.filters);
  const todos = useAppSelector((state: AppState) => state.todos.todos.filter(todo => {
      if (filters === 'done') {
        return todo.completed;
      } else if (filters === 'active') {
        return !todo.completed;
      } else {
        return todo;
      }
    })
  );

  return (
    <>
      <div className="app-body">
        <ul className="wrap">
          { todos.map((todo) => <BodyItem key={ todo.id } { ...todo } />) }
        </ul>
      </div>
    </>
  );
};

