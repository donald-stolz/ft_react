import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './Layout.css';

const Layout = props => {
  return (
    <>
      <Header />
      <>{props.children}</>
      <Footer />
    </>
  );
};

export default Layout;
