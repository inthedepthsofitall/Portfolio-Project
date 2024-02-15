import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about" className={styles.link}>
            About
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/projects" className={styles.link}>
            Projects
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact" className={styles.link}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;