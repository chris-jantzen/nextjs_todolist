import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout/layout';
import { TodoContextProvider } from '../store/todoStore';
import TodoList from '../components/todolist/todolist';
import styles from '../styles/home.module.css';
import AddTodo from '../components/addTodo/addTodo';
import axios from 'axios';

export default function Home({ todos }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h2 className={styles.header}>Todos</h2>
      <TodoContextProvider>
        <AddTodo />
        <TodoList todos={todos} />
      </TodoContextProvider>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await axios.get(`${process.env.BASE_URL}/todo`);
  const todos = await res.data;
  return {
    props: {
      todos,
    },
  };
}

