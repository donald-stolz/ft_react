import React, { useState } from 'react';
import TabBar from '../../components/TabBar';
import { Card } from '../../components/Card';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Resume = props => {
  const [tab, setTab] = useState(0);
  const { classes } = props;

  return (
    <>
      <Grid xs={8} container spacing={40} className={classes.cardGrid}>
        <TabBar onChange={setTab} value={tab} />
        {tab === 0 && cards.map(card => <Card />)}
        {tab === 1 && cards.map(card => <Card />)}
        {tab === 2 && cards.map(card => <Card />)}
        {tab === 3 && cards.map(card => <Card />)}
        {tab === 4 && cards.map(card => <Card />)}
      </Grid>
    </>
  );
};

export default withStyles(styles)(Resume);
