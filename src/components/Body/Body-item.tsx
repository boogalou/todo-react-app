import React, { FC } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { Button } from '../Button/Button';
import { removeTask, setCompleted } from '../../Reducers/todosSlice';

type BodyItemProps = {
  id: string;
  title: string;
  completed: boolean;
}

export const BodyItem: FC<BodyItemProps> = ({ id, title, completed }: BodyItemProps) => {

  const dispatch = useAppDispatch();

  const completedTaskHandler = () => {
    dispatch(setCompleted({id}));
  };
  const removeTaskHandler = () => {
    dispatch(removeTask({id}));
  };

  return (
    <>
      <li
        className="todo-list">
        <div className="list-item-view">
          <div className="item">
            <label className={ completed  ? 'title done' : 'title' }>
              { title }
            </label>
          </div>
          <div className="btn-block">
            <Button
              callback={ completedTaskHandler }
              className={  completed  ? 'btn-done active' : 'btn-done' }>Ok
            </Button>
            <Button
              callback={ removeTaskHandler }
              className="btn-delete">Del.
            </Button>
          </div>
        </div>
      </li>
    </>
  );
};
