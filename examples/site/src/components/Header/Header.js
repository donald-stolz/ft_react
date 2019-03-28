import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navcontainer}>
        <div className={styles.logo}>LOGO</div>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/">
              Home
            </Link>
          </li>
          {/* <li className={styles.navItem}>
            <a className={styles.navLink} href="#about">
              About
            </a>
          </li> */}
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
