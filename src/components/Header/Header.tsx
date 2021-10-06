import React, { FC } from 'react';
import styles from './Header.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/useDispatch';
import { AppState } from '../../init/store';
import { showAllTasks, showCompletedTasks, showCurrentTasks } from '../../bus/todos/action';

const Header: FC = () => {

  const all = [styles.btn, styles.btn__total].join(' ');
  const completed = [styles.btn, styles.btn__completed].join(' ');
  const current = [styles.btn, styles.btn__active].join(' ');




  const todos = useAppSelector((state: AppState) => state.todos.todos);
  const dispatch = useAppDispatch();

  const onAllClickHandler = () => {
    dispatch(showAllTasks('all'))
  }

  const onDoneClickHandler = () => {
    dispatch(showCompletedTasks('done'))
  }

  const onActiveClickHandler = () => {
    dispatch(showCurrentTasks('active'))
  }

  let done = todos.filter(todo => todo.completed).length;
  let active = todos.length - todos.filter(todo => todo.completed).length;

  return (
    <>
      <div className={ styles.app__header }>
        <div className={ styles.today }>
          <h2>Список Задач</h2>
          <div className={styles.task__count}>

            <button
              className={ all }
              onClick={onAllClickHandler}
            >Все:
              { todos.length }
            </button>

            <button
              className={ completed }
              onClick={onDoneClickHandler}
            >Завершенные:
              { done }
            </button>

            <button
              className={ current }
              onClick={onActiveClickHandler}
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