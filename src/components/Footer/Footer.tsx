import React, { ChangeEvent, FC, KeyboardEvent, MouseEvent, useState } from 'react';
import './Footer.css';
import { useAppDispatch,  } from '../../hooks/useAppDispatch';

// import { TODOS_FETCH_ASYNC } from '../../bus/todos/types';
import { Button } from '../Button/Button';
import { useAppSelector } from '../../hooks/useAppSelector';
import { addTask } from '../../Reducers/todosSlice';

export const Footer: FC = () => {

  const dispatch = useAppDispatch();
  const todo = useAppSelector((state) => state.todos.todosData);

  const [title, setTitle] = useState('');

  const onChangeTextHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    setTitle(evt.target.value);
  };


  // console.log(todo.slice(-1)[0]);

  const addTaskHandler = (
    evt: KeyboardEvent<HTMLInputElement>
      | MouseEvent<HTMLButtonElement>): void => {
    if (('type' in evt && evt?.type === 'click')
      || ('key' in evt && evt?.key === 'Enter')) {
      dispatch(addTask({ title }));
      // dispatch({type: TODOS_FETCH_ASYNC, payload: todo.slice(-1)[0] })
      setTitle('');
    }
  };

  return (
    <>
      <div className="app-form">
        <input
          name=""
          type="text"
          value={ title }
          className="input-text"
          placeholder="Add your task..."
          onChange={ onChangeTextHandler }
          onKeyDown={ addTaskHandler }
        />
        <Button
          callback={ addTaskHandler }
          className={'btn-add' }>Add
        </Button>
      </div>
    </>
  );
};

