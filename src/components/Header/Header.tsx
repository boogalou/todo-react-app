import React, { FC, MouseEvent } from 'react';
import styles from './Header.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/useDispatch';
import { AppState } from '../../init/store';
import { taskFilterSwitch } from '../../bus/todos/action';

export enum filterBtn {
  all = 'Все',
  done = 'Завершенные',
  active = 'Текущие',
}

const Header: FC = () => {

  const all = [styles.btn, styles.btn__total].join(' ');
  const completed = [styles.btn, styles.btn__completed].join(' ');
  const current = [styles.btn, styles.btn__active].join(' ');

  const todos = useAppSelector((state) => state.todos.todos);
  const isActive = useAppSelector((state) => state.todos.filters);
  const dispatch = useAppDispatch();

  const toggleFilterHandler = (evt: MouseEvent<HTMLButtonElement>) => {
    let switchPosition = evt.currentTarget.textContent;
    dispatch(taskFilterSwitch(switchPosition!.slice(0, -2)));
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
              className={ isActive === filterBtn.all
                ? `${ all } ${ styles.active }` : all }
              onClick={ toggleFilterHandler }
            >{ filterBtn.all }:
              { todos.length }
            </button>

            <button
              className={ isActive === filterBtn.done
                ? `${ completed } ${ styles.active }` : all }
              onClick={ toggleFilterHandler }
            >{ filterBtn.done }:
              { done }
            </button>

            <button
              className={ isActive === filterBtn.active
                ? `${ current } ${ styles.active }` : all }
              onClick={ toggleFilterHandler }
            >{ filterBtn.active }:
              { active }
            </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default Header;