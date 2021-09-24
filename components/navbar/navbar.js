import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.title}>TodoList</h1>
    </nav>
  );
};

export default Navbar;
