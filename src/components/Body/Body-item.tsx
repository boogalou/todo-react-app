import React, { FC, DragEvent } from 'react';
import { useAppDispatch } from '../../hooks/useDispatch';
import { completedTask, removeTask } from '../../bus/todos/action';

type BodyItemProps = {
  id: number;
  title: string;
  completed: boolean;
}

export const BodyItem: FC<BodyItemProps> = ({id, title, completed}: BodyItemProps) => {

  const dispatch = useAppDispatch();

  const completedTaskHandler = () => {
    dispatch(completedTask(id));
  };
  const removeTaskHandler = () => {
    dispatch(removeTask(id));
  };

  return (
    <>
      <li
        className="todo-list">
        <div className="list-item-view">
          <div className="item">
            <label className={ completed ? 'title done' : 'title' }>
              { title }
            </label>
          </div>
          <div className="btn-block">
            <button
              onClick={ completedTaskHandler }
              className="btn btn-done">Ok
            </button>
            <button
              onClick={ removeTaskHandler }
              className="btn btn-delete">Del.
            </button>
          </div>
        </div>
      </li>
    </>
  );
};
