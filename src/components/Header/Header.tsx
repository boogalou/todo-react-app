import React, { FC, useState } from 'react';
import styles from './Header.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/useDispatch';
import { AppState } from '../../init/store';
import { showAllTasks, showCompletedTasks, showCurrentTasks } from '../../bus/todos/action';

const Header: FC = () => {

  const all = [styles.btn, styles.btn__total].join(' ');
  const completed = [styles.btn, styles.btn__completed].join(' ');
  const current = [styles.btn, styles.btn__active].join(' ');

  const todos = useAppSelector((state: AppState) => state.todos.todos);
  const isActive = useAppSelector((state) => state.todos.filters);
  const dispatch = useAppDispatch();

  const onAllClickHandler = () => {
    dispatch(showAllTasks('all'));
  };

  const onDoneClickHandler = () => {
    dispatch(showCompletedTasks('done'));
  };

  const onActiveClickHandler = () => {
    dispatch(showCurrentTasks('active'));
  };

  const done = todos.filter(todo => todo.completed).length;
  const active = todos.length - todos.filter(todo => todo.completed).length;

  return (
    <>
      <div className={ styles.app__header }>
        <div className={ styles.today }>
          <h2>Список Задач</h2>
          <div className={ styles.task__count }>

            <button
              className={ isActive === 'all' ? `${all} ${styles.active}` : all  }
              onClick={ onAllClickHandler }
            >Все:
              { todos.length }
            </button>

            <button
              className={ isActive === 'done' ? `${completed} ${styles.active}` : all  }
              onClick={ onDoneClickHandler }
            >Завершенные:
              { done }
            </button>

            <button
              className={ isActive === 'active' ? `${current} ${styles.active}` : all }
              onClick={ onActiveClickHandler }
            >Текущие:
              { active }
            </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default Header;