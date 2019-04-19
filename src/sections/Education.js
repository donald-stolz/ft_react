import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Card from '../components/Card/Card';

const Education = props => {
  const { classes, schools } = props;

  const cards = schools.map((item, idx) => {
    const image_path = `/images/education/${item.image}`;
    console.log(item);

    return (
      <Card
        heading={item.institution}
        description={item.highlights}
        image={image_path}
        startDate={item.startDate}
        endDate={item.endDate}
      />
    );
  });
  return cards;
};

Education.propTypes = {
  classes: PropTypes.object.isRequired,
  schools: PropTypes.arrayOf(PropTypes.object).isRequired
};

// Experience.defaultProps = {

// };

export default withStyles(styles)(Education);
