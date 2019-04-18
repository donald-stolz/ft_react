import React from 'react';
// TODO: Create menu & implement
import { Card } from '../../components/Card';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

const cards = [1, 2, 3, 4, 5];

const Resume = props => {
  const { classes, value } = props;

  return (
    <div className={classes.gridAlign}>
      <Grid className={classes.grid} xs={8} container spacing={40}>
        {value === 0 && cards.map(card => <Card />)}
        {value === 1 && cards.map(card => <Card />)}
        {value === 2 && cards.map(card => <Card />)}
        {value === 3 && cards.map(card => <Card />)}
        {value === 4 && cards.map(card => <Card />)}
      </Grid>
    </div>
  );
};

Resume.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired
};

export default withStyles(styles)(Resume);
