import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import HeroImage from './components/HeroImage';
import TabBar from './components/TabBar';
import ProfileCard from './components/ProfileCard';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import withRoot from './withRoot';
import 'typeface-roboto';
import { Experience } from './sections';
import resume from './assets/resume.json';
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
          <Grid xs={8} className={classes.resumeContainer}>
            <div className={classes.gridAlign}>
              <Grid className={classes.resume} xs={8} container spacing={40}>
                {section === 0 && <Experience experiences={resume.work} />}
                {/* {value === 0 && cards.map(card => <Card />)}
                {value === 1 && cards.map(card => <Card />)}
                {value === 2 && cards.map(card => <Card />)}
                {value === 3 && cards.map(card => <Card />)}
                {value === 4 && cards.map(card => <Card />)} */}
              </Grid>
            </div>
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
