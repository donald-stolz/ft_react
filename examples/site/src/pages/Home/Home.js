import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className="page">
      <div className={styles.content}>
        <h1>Home Page</h1>
        <p className={styles.paragraph}>
          &emsp; React (also known as React.js or ReactJS) is a JavaScript
          library for building user interfaces. It is maintained by Facebook and
          a community of individual developers and companies. React can be used
          as a base in the development of single-page or mobile applications.
          Complex React applications usually require the use of additional
          libraries for state management, routing, and interaction with an API.
        </p>
      </div>
    </div>
  );
};

export default Home;
