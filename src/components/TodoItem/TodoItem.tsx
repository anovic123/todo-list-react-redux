import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { removeTodo } from '../../redux/slices/todoSlice';
import { Todo } from '../../redux/slices/types';
import { Button } from '../Button/Button';

import { RootState } from '../../redux/store';

import styles from './TodoItem.module.css';

export const TodoItem = () => {
  const dispatch = useAppDispatch();

  const todoList = useSelector((state: RootState) => state.todo.todoList);

  const onClickRemoveTodo = (id: Todo['id']) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="todo">
      {todoList.map((todo: Todo) => (
        <div key={todo.id} className={styles.todoItem}>
          <div className={styles.todoItemBody}>
            <div className={styles.todoItemTitle}>{todo.title}</div>
            <div className={styles.todoItemDescription}>{todo.description}</div>
          </div>
          <Button onClick={() => onClickRemoveTodo(todo.id)}>Delete</Button>
        </div>
      ))}
    </div>
  );
};
