import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import HeroImage from './components/HeroImage';
import ProfileCard from './sections/ProfileCard';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import withRoot from './withRoot';
import 'typeface-roboto';
import Resume from './sections/Resume';

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
          <Resume />
        </div>
      </main>
    </>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(App));
