import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Card from '../components/Card/Card';

const Experience = props => {
  const { classes, experiences } = props;

  const cards = experiences.map((item, idx) => {
    const image_path = `/images/work/${item.image}`;
    return (
      <Card
        heading={item.company}
        description={item.summary}
        image={image_path}
        startDate={item.startDate}
        endDate={item.endDate}
      />
    );
  });
  return cards;
};

Experience.propTypes = {
  classes: PropTypes.object.isRequired,
  experiences: PropTypes.arrayOf(PropTypes.object).isRequired
};

// Experience.defaultProps = {

// };

export default withStyles(styles)(Experience);
