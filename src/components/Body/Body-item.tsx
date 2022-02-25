import React, { FC, useEffect } from 'react';
import { Button } from '../../elements/Button/Button';
import { removeTask, setCompleted } from '../../Reducers/todosSlice';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { todoCompleted, todoDelete } from '../../actions';
import { TodoItem } from '../../types/todo.interface';



export const BodyItem: FC<TodoItem> = ({_id, userId, title, completed}: TodoItem) => {

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
