import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const HeroImage = props => {
  const { classes } = props;
  return (
    <div className={classes.heroUnit}>
      <div className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Donald Stolz
        </Typography>
        <hr />
        {/* TODO: Social icons */}
      </div>
    </div>
  );
};

HeroImage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeroImage);
