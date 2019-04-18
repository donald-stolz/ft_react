// Menu component
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import { Select, MenuItem } from '@material-ui/core';

const Menu = props => {
  const { classes, values, onChange, current } = props;
  const options = values.map((element, idx) => {
    return (
      <MenuItem value={idx} key={idx}>
        {element}
      </MenuItem>
    );
  });
  return (
    <Select
      value={current}
      onChange={event => {
        onChange(event.target.value);
      }}
      name="select"
      className={classes.select}
    >
      {options}
    </Select>
  );
};

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  values: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  current: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

Menu.defaultProps = {
  values: ['No', 'Sections'],
  current: 0,
  onChange: value => {
    console.log(`Item: ${value} selected`);
  }
};

export default withStyles(styles)(Menu);
