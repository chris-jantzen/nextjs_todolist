import Todo from '../todo/todo';
import styles from './todolist.module.css';

const TodoList = ({ todos }) => {
  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo._id} />
      ))}
    </div>
  );
};

export default TodoList;
