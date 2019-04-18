import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from './styles';
import { AppBar } from '@material-ui/core';

const TabBar = props => {
  const { classes, tabs, value, onChange } = props;

  const labels = tabs.map((item, index) => {
    return <Tab label={item} key={index} />;
  });
  return (
    <AppBar position="static" color="default">
      <Tabs
        value={value}
        onChange={(event, value) => {
          onChange(value);
        }}
        indicatorColor="primary"
        textColor="primary"
        className={classes.tabs}
        centered
        variant="dense"
        scrollButtons="auto"
      >
        {labels}
      </Tabs>
    </AppBar>
  );
};

TabBar.propTypes = {
  classes: PropTypes.object.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

TabBar.defaultProps = {
  tabs: ['No', 'Tabs'],
  value: 0,
  onChange: () => {
    console.log('Tab bar press');
  }
};

export default withStyles(styles)(TabBar);
