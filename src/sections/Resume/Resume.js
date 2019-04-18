import React, { useState } from 'react';
// TODO: Create menu & implement
import Menu from '../../components/Menu';
import { Card } from '../../components/Card';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

const cards = [1, 2, 3, 4, 5];

const Resume = props => {
  const [section, setSection] = useState(0);
  const { classes } = props;
  const sections = [
    'Experience',
    'Portfolio',
    'References',
    'Education',
    'Volunteer'
  ];

  return (
    <>
      <Menu values={sections} onChange={setSection} current={section} />
      <Grid xs={8} container spacing={40} className={classes.cardGrid}>
        {section === 0 && cards.map(card => <Card />)}
        {section === 1 && cards.map(card => <Card />)}
        {section === 2 && cards.map(card => <Card />)}
        {section === 3 && cards.map(card => <Card />)}
        {section === 4 && cards.map(card => <Card />)}
      </Grid>
    </>
  );
};

export default withStyles(styles)(Resume);
