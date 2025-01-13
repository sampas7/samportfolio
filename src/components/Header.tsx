import Link from 'next/link'; 
import styles from '../styles/Header.module.css';


const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles['nav-links']}>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projetos</Link>
          </li>
          <li>
            <Link href="/tools">Ferramentas</Link>
          </li>
          <li>
            <Link href="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

