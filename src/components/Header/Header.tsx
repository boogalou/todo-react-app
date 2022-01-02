import React, { FC } from 'react';
import styles from './Header.module.css';

import { taskFilterSwitch } from '../../Reducers/todosSlice';
import { Button } from '../Button/Button';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';

export enum filterBtn {
  all = 'Все',
  done = 'Завершенные',
  active = 'Текущие',
}

export const Header: FC = () => {


  const todosData = useAppSelector((state) => state.todos.todosData);
  const isActive = useAppSelector((state) => state.todos.filters);
  const dispatch = useAppDispatch();

  const toggleFilterHandler = (evt: React.MouseEvent<HTMLButtonElement>): void => {
    let switchPosition = evt.currentTarget.textContent!.slice(0, -2);
    dispatch(taskFilterSwitch(switchPosition));
  };

  const done = todosData.filter(todo => todo.completed).length;
  const active = todosData.length - todosData.filter(todo => todo.completed).length;

  return (
    <>
      <div className={ styles.app__header }>
        <div className={ styles.today }>
          <h2>Список Задач</h2>
          <div className={ styles.task__count }>

            <Button
              className={ isActive === filterBtn.all ? `btn-total active` : filterBtn.all }
              callback={ toggleFilterHandler }
            >{ filterBtn.all }:
              { todosData.length }
            </Button>

            <Button
              className={ isActive === filterBtn.done ? `btn-completed active` : filterBtn.all }
              callback={ toggleFilterHandler }
            >{ filterBtn.done }:
              { done }
            </Button>

            <Button
              className={ isActive === filterBtn.active ? `btn active` : filterBtn.all }
              callback={ toggleFilterHandler }
            >{ filterBtn.active }:
              { active }
            </Button>

          </div>
        </div>
      </div>
    </>
  );
};
