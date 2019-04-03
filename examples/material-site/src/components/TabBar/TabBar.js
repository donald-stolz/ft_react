import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from './styles';

// TODO: Needs to accept array of strings
const TabBar = props => {
  const { classes, value, onChange } = props;

  return (
    <AppBar position="static" color="default">
      <Tabs
        value={value}
        onChange={(e, val) => {
          console.log(val);

          onChange(val);
        }}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
      </Tabs>
    </AppBar>
  );
};

TabBar.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

TabBar.defaultProps = {
  value: 0,
  onChange: val => {
    console.log(val);
  }
};

export default withStyles(styles)(TabBar);
