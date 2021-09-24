import Head from 'next/head';
import Navbar from '../navbar/navbar';
import styles from './layout.module.css';

export const siteTitle = 'TodoList';
const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Learn how to build a todo list using Next.js' />
        <meta name='og:title' content={siteTitle} />
      </Head>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
