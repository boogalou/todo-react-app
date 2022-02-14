import React, { ChangeEvent, FC, KeyboardEvent, MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import './Footer.css';
import { Button } from '../../elements/Button/Button';
import { todoCreate } from '../../actions';
import { TodoItem } from '../../types/todo.interface';

export const Footer: FC = () => {


  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const onChangeTextHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    setTitle(evt.target.value);
  };

  const addTaskHandler = (
    evt: KeyboardEvent<HTMLInputElement>
      | MouseEvent<HTMLButtonElement>): void => {
    if (('type' in evt && evt?.type === 'click')
      || ('key' in evt && evt?.key === 'Enter')) {

      dispatch(todoCreate({title, completed: false} as TodoItem)) ;

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

