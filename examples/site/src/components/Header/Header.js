import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navcontainer}>
        <div className={styles.logo}>LOGO</div>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#home">
              Home
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#about">
              About
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#Contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
