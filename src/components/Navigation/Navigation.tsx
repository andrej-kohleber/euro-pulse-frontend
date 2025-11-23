import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.link}>🏠 Главная</Link>
      <Link to="/news" className={styles.link}>📰 Новости</Link>
      <Link to="/article/1" className={styles.link}>📄 Статья 1</Link>
    </nav>
  );
};

export default Navigation;