import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import TabBar from '../../components/TabBar';

const Resume = props => {
  const [tab, setTab] = useState(0);
  const tabList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      <TabBar value={tab} onChange={setTab} tabs={tabList} />
    </>
  );
};

Resume.propTypes = {
  classes: PropTypes.object.isRequired,
  profileImage: PropTypes.string.isRequired
};

Resume.defaultProps = {
  profileImage:
    'https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg'
};

export default withStyles(styles)(Resume);
