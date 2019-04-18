import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../components/Card';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Experience = props => {
  const { classes, experiences } = props;

  const result = experiences.map((item, index) => {
    const image_path = `images/work/${item.image}`;
    return (
      <Card
        image={image_path}
        heading={item.company}
        description={item.summary}
        onClick={() => {
          console.log(item.website);
        }}
      />
    );
  });

  return result;
};

Experience.propTypes = {
  classes: PropTypes.object.isRequired
  // TODO: experiences props
};

export default withStyles(styles)(Experience);
