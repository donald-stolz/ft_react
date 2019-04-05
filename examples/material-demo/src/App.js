import React from 'react';
import PropTypes from 'prop-types';
import HeroImage from './components/HeroImage';
import Resume from './sections/Resume';
import Grid from '@material-ui/core/Grid';
import ProfileCard from './sections/ProfileCard';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import withFTReact from './withRoot';
import 'typeface-roboto';

const App = props => {
  const { classes } = props;
  return (
    <body>
      <HeroImage />
      <div className={classes.layout}>
        <Grid xs={4} className={classes.profileGrid}>
          <ProfileCard />
        </Grid>
        <Grid>
          <Resume />
        </Grid>
      </div>
    </body>
  );
};

// App.propT;

export default withFTReact(withStyles(styles)(App));
