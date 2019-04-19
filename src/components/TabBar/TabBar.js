import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from './styles';

const TabBar = props => {
  const { classes, value, onChange, tabs } = props;

  const labels = tabs.map((item, idx) => {
    return <Tab label={item} key={idx} />;
  });

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
        className={classes.tabs}
        centered
        variant="dense"
      >
        {labels}
      </Tabs>
    </AppBar>
  );
};

TabBar.propTypes = {
  classes: PropTypes.object.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

TabBar.defaultProps = {
  tabs: ['No', 'tabs'],
  value: 0,
  onChange: val => {
    console.log(val);
  }
};

export default withStyles(styles)(TabBar);
