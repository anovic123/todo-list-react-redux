import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../';
import { useAppDispatch } from '../../redux/store';
import { RootState } from '../../redux/store';
import { removeTodo, checkTodo } from '../../redux/slices/todoSlice';
import { Todo } from '../../redux/slices/types';

import styles from './TodoItem.module.css';

export const TodoItem = () => {
  const dispatch = useAppDispatch();

  const todoList = useSelector((state: RootState) => state.todo.todoList);

  const onClickRemoveTodo = (id: Todo['id']) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="todo">
      {todoList.length < 1 ? (
        <h2 className={styles.todoEmpty}>TodoList is Empty</h2>
      ) : (
        todoList.map((todo: Todo) => (
          <div className={styles.todoItem} style={{ opacity: todo.checked ? 0.8 : 1 }}>
            <div className={styles.todoItemDescription}>
              <div
                className={styles.todoItemTitle}
                onClick={() => dispatch(checkTodo(todo.id))}
                style={{ textDecoration: todo.checked ? 'line-through' : 'none' }}
              >
                {todo.title}
              </div>
              <div className={styles.todoItemDescription}>{todo.description}</div>
            </div>
            <Button onClick={() => onClickRemoveTodo(todo.id)}>Delete</Button>
          </div>
        ))
      )}
    </div>
  );
};
