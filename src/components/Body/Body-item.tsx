import React, { FC } from 'react';
import { Button } from '../../elements/Button/Button';
import { removeTask, setCompleted } from '../../Reducers/todosSlice';
import { useAppDispatch } from '../../hooks/reduxHooks';


type BodyItemProps = {
  userId: string;
  title: string;
  completed: boolean;
}

export const BodyItem: FC<BodyItemProps> = ({ userId, title, completed }: BodyItemProps) => {

  const dispatch = useAppDispatch();

  const completedTaskHandler = () => {
    dispatch(setCompleted({userId}));
  };
  const removeTaskHandler = () => {
    dispatch(removeTask({userId}));
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
              classes={  completed  ? 'btn-done active' : 'btn-done' }>Ok
            </Button>
            <Button
              callback={ removeTaskHandler }
              classes="btn-delete">Del.
            </Button>
          </div>
        </div>
      </li>
    </>
  );
};
