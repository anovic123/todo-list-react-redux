import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Input, Button } from '../';
import { useAppDispatch } from '../../redux/store';
import { addTodo } from '../../redux/slices/todoSlice';

import styles from './Header.module.css';
import 'react-toastify/dist/ReactToastify.css';

const DEFAULT = {
  title: '',
  description: '',
};

export const Header = () => {
  const dispatch = useAppDispatch();

  const [addTodoId, setAddTodoId] = React.useState<number>(0);
  const [todoValue, setTodoValue] = React.useState(DEFAULT);

  const onClickAddTodo = () => {
    if (todoValue.title.length <= 3) {
      return toast.warn(`fill title input more than 3 symbols`);
    } else if (todoValue.description.length <= 3) {
      return toast.warn(`fill description input more than 3 symbols`);
    }
    setAddTodoId(addTodoId + 1);
    dispatch(
      addTodo({
        id: addTodoId,
        title: todoValue.title,
        description: todoValue.description,
        checked: false,
      }),
    );
    setTodoValue(DEFAULT);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTodoValue({ ...todoValue, [name]: value });
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerInputs}>
        <Input placeholder="Type a task" value={todoValue.title} name="title" onChange={onChange} />
        <Input
          placeholder="Type a description"
          value={todoValue.description}
          name="description"
          onChange={onChange}
        />
      </div>
      <Button onClick={onClickAddTodo}>Add</Button>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </header>
  );
};
