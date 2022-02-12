import React, { ChangeEvent, FC, KeyboardEvent, MouseEvent, useState } from 'react';
import './Footer.css';
import { useAppSelector, } from '../../hooks/reduxHooks';
import { Button } from '../../elements/Button/Button';
import { addTask } from '../../Reducers/todosSlice';
import { useDispatch } from 'react-redux';

export const Footer: FC = () => {

  const dispatch = useDispatch();
  const todo = useAppSelector((state) => state.todos.todosData);

  const [title, setTitle] = useState('');

  const onChangeTextHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    setTitle(evt.target.value);
  };

  const addTaskHandler = (
    evt: KeyboardEvent<HTMLInputElement>
      | MouseEvent<HTMLButtonElement>): void => {
    if (('type' in evt && evt?.type === 'click')
      || ('key' in evt && evt?.key === 'Enter')) {
      dispatch(addTask({ title }));
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
          classes={'btn-add' }>Add
        </Button>
      </div>
    </>
  );
};

