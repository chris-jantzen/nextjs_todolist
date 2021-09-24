import { useContext, useState } from 'react';
import { TodoContext } from '../../store/todoStore';
import styles from './addtodo.module.css';

const AddTodo = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [newTodoTitle, setNewTodoTitle] = useState('');

  const addTodo = () => {
    const t = {
      title: newTodoTitle,
      id: ~~(Math.random() * 10000 + 1),
      completed: false,
    };
    setTodos([...todos, t]);
    setNewTodoTitle('');
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
      <button className={styles.add} onClick={addTodo}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;
