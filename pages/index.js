import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout/layout';
import { TodoContextProvider } from '../store/todoStore';
import TodoList from '../components/todolist/todolist';
import styles from '../styles/home.module.css';
import AddTodo from '../components/addTodo/addTodo';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h2 className={styles.header}>Todos</h2>
      <TodoContextProvider>
        <AddTodo />
        <TodoList />
        {/* Add Todo Component */}
        {/*
          Todo List Component
          // Click on a todo item to go to an individual todo view
        */}
      </TodoContextProvider>
    </Layout>
  );
}
