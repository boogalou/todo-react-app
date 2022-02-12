import React, { FC } from 'react';
import { Button } from '../../elements/Button/Button';
import { removeTask, setCompleted } from '../../Reducers/todosSlice';
import { useAppDispatch } from '../../hooks/reduxHooks';


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
