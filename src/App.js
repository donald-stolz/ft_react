import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import HeroImage from './components/HeroImage';
import TabBar from './components/TabBar';
import ProfileCard from './sections/ProfileCard';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import withRoot from './withRoot';
import 'typeface-roboto';
import Resume from './sections/Resume';

const sections = [
  'Experience',
  'Portfolio',
  'References',
  'Education',
  'Volunteer'
];

const App = props => {
  const { classes } = props;
  const [section, setSection] = useState(0);
  return (
    <>
      <main>
        <HeroImage />
        <TabBar value={section} onChange={setSection} tabs={sections} />
        <div className={classes.layout}>
          <Grid xs={4} className={classes.profileGrid}>
            <ProfileCard />
          </Grid>
          <Grid xs={8} className={classes.resumeGrid}>
            <Resume value={section} />
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
