import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Card } from './components/Card';
import HeroImage from './components/HeroImage';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import withRoot from './withRoot';
import 'typeface-roboto';
import ProfileCard from './sections/ProfileCard';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const App = props => {
  const { classes } = props;
  return (
    <>
      <main>
        <HeroImage />
        <div className={classes.layout}>
          <Grid xs={4} className={classes.profileGrid}>
            <ProfileCard />
          </Grid>
          <Grid xs={8} container spacing={40} className={classes.cardGrid}>
            {cards.map(card => (
              <Card />
            ))}
          </Grid>
        </div>
      </main>
    </>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(App));
