import { useContext } from 'react';
import Todo from '../todo/todo';
import styles from './todolist.module.css';
import { TodoContext } from '../../store/todoStore';

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
