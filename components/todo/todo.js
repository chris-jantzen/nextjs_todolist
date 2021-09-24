import { useContext } from 'react';
import styles from './todo.module.css';
import { TodoContext } from '../../store/todoStore';

const Todo = ({ todo }) => {
  const { todos, setTodos } = useContext(TodoContext);

  const toggleComplete = (e) => {
    // Don't toggle if the delete button is clicked
    if (e.target.className.indexOf('todo_delete') !== -1) {
      return;
    }
    setTodos(
      todos.map((t) => {
        return t.id === todo.id ? { ...t, completed: !t.completed } : t;
      })
    );
  };

  const deleteTodo = () => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  return (
    <div className={styles.todo} onClick={toggleComplete}>
      <p className={`${styles.title} ${todo.completed ? styles.completed : ''}`}>
        {todo.title}
      </p>
      <button className={styles.delete} onClick={deleteTodo}>
        x
      </button>
    </div>
  );
};

export default Todo;
