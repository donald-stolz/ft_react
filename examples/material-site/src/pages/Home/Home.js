// Home component
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import styles from './Home.module.css';
import Toolbar from '@material-ui/core/Toolbar';

Home = () => {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar className={styles.NavBar}>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Button>Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
