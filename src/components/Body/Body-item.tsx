import React, { FC, useEffect } from 'react';
import { Button } from '../../elements/Button/Button';
import { removeTask, setCompleted } from '../../Reducers/todosSlice';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { todoCompleted, todoDelete } from '../../actions';

type BodyItemProps = {
  _id: string
  userId: string;
  title: string;
  completed: boolean;
}

export const BodyItem: FC<BodyItemProps> = ({_id, userId, title, completed}: BodyItemProps) => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(todoCompleted({_id, completed}));
  }, [completed])

  const completedTaskHandler = () => {
    dispatch(setCompleted({_id}));
  };
  const removeTaskHandler = () => {
    dispatch(removeTask({_id}));
    dispatch(todoDelete({data: { _id }}))
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
            <Button
              callback={ completedTaskHandler }
              classes={ completed ? 'btn-done active' : 'btn-done' }>Ok
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
