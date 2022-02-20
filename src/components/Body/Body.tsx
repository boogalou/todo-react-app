import React, { FC } from 'react';
import './Body.css';
import { BodyItem } from './Body-item';
import { filterBtn } from '../Header/Header';
import { useAppSelector } from '../../hooks/reduxHooks';



export const Body: FC = () => {

  const filters = useAppSelector((state) => state.todos.filters);
  const todosData = useAppSelector((state) => state.todos.todosData.filter(todo => {
      if (filters === filterBtn.done) {
        return todo.completed;
      } else if (filters === filterBtn.active) {
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
          { todosData.map((todo) => <BodyItem key={ todo.userId } { ...todo } />) }
        </ul>
      </div>
    </>
  );
};
