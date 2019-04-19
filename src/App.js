import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import HeroImage from './components/HeroImage';
import ProfileCard from './components/ProfileCard';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import withRoot from './withRoot';
import 'typeface-roboto';
import TabBar from './components/TabBar';
import resume from './assets/resume';
import { Experience, Education } from './sections';

const sections = ['Experience', 'Education', 'Volunteer'];

const App = props => {
  const { classes } = props;
  const [tab, setTab] = useState(0);
  return (
    <>
      <main className={classes.background}>
        <HeroImage />
        <TabBar tabs={sections} onChange={setTab} value={tab} />

        <div className={classes.layout}>
          <Grid xs={4} className={classes.profileGrid}>
            <ProfileCard />
          </Grid>
          <Grid xs={8} className={classes.resumeContainer}>
            <div className={classes.gridAlign}>
              <Grid className={classes.resume} xs={8} container spacing={40}>
                {tab === 0 && <Experience experiences={resume.work} />}
                {tab === 1 && <Education schools={resume.education} />}
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
