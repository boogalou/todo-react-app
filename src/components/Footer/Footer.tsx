import React, { ChangeEvent, FC } from 'react';
import './Footer.css';
import { useAppDispatch, useAppSelector } from '../../hooks/useDispatch';
import { AppState } from '../../init/store';
import { addTask, textUpdateTask } from '../../bus/todos/action';

export const Footer: FC = () => {

  const titleMsg = useAppSelector((state: AppState) => state.todos.titleMsg)
  const dispatch = useAppDispatch();

  const onChangeTextHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    let text = evt.target.value
    dispatch(textUpdateTask(text))
  };

  const addTaskHandler = () => {
    dispatch(addTask());
  }

  return (
    <>
      <div className="app-form">
        <input
          name=""
          type="text"
          value={ titleMsg }
          className="input-text"
          placeholder="Add your task..."
          onChange={ onChangeTextHandler }
        />
        <button onClick={ addTaskHandler } className="btn btn-add">Add
        </button>
      </div>
    </>
  )
}

