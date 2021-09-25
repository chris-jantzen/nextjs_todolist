import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from './addtodo.module.css';

const AddTodo = () => {
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };

  const createNewTodo = () => {
    const newTodo = { title: newTodoTitle, completed: false };
    axios
      .post(`${process.env.BASE_URL}/todo`, newTodo)
      .then((res) => {
        setNewTodoTitle('');
        if (res.status < 300) {
          refreshData();
        }
      })
      .catch((err) => console.error(err.message));
  };

  const handleChange = (e) => {
    setNewTodoTitle(e.target.value);
  };

  return (
    <div className={styles.addTodo}>
      <input
        className={styles.todoInput}
        onChange={handleChange}
        value={newTodoTitle}
        type='text'
        name='newtodo'
        id='newtodo'
        placeholder='New Todo...'
      />
      <button className={styles.add} onClick={createNewTodo}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;
