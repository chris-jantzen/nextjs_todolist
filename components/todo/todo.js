import { useRouter } from 'next/router';
import axios from 'axios';
import styles from './todo.module.css';

const Todo = ({ todo }) => {
  // const { todos, setTodos } = useContext(TodoContext);
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };

  const toggleComplete = (e) => {
    // Don't toggle if the delete button is clicked
    if (e.target.className.indexOf('todo_delete') !== -1) {
      return;
    }
    axios
      .put(`${process.env.BASE_URL}/todo/${todo._id}`, { completed: !todo.completed })
      .then((res) => {
        todo.completed = !todo.completed;
        if (res.status < 300) {
          refreshData();
        }
      })
      .catch((err) => console.error(err.message));
  };

  const deleteTodo = () => {
    axios
      .delete(`${process.env.BASE_URL}/todo/${todo._id}`)
      .then((res) => {
        if (res.status < 300) {
          refreshData();
        }
      })
      .catch((err) => console.error(err.message));
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
