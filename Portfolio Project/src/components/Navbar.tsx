import React from 'react';
import styles from './Navbar.module.css';
const Navbar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>Home</li>
        <li className={styles.navItem}>About</li>
      </ul>
    </nav>
  );
};

export default Navbar;
