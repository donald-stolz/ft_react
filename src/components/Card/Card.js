import React from 'react';
import PropTypes from 'prop-types';
import MaterialCard from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Card = props => {
  const {
    classes,
    image,
    heading,
    description,
    onClick,
    startDate,
    endDate
  } = props;

  let end = endDate === '' ? 'Present' : endDate;

  return (
    <Grid item sm={6} md={8} lg={6}>
      <MaterialCard className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={image}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {heading}
          </Typography>
          <Typography variant="subtitle1">
            {startDate} - {end}
          </Typography>
          <Typography>{description}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={onClick} size="small" color="primary">
            View
          </Button>
        </CardActions>
      </MaterialCard>
    </Grid>
  );
};

Card.propTypes = {
  classes: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

Card.defaultProps = {
  image: 'http://qsen.org/wp-content/themes/oria/images/placeholder.png',
  heading: 'Header',
  description: 'Lorem Ipsum',
  onClick: () => {
    console.log('Portfolio Item Click');
  }
};

export default withStyles(styles)(Card);
