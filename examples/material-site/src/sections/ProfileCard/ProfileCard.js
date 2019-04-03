import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const ProfileCard = props => {
  const { classes, profileImage } = props;
  const skills = [1, 2, 3];

  return (
    <Grid item sm={12} md={12} lg={12}>
      <Card className={classes.profileCard}>
        <CardMedia
          className={classes.profileImage}
          image={profileImage}
          title="Profile Image"
        >
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              className={classes.contactBTN}
            >
              Contact
            </Button>
          </CardActions>
        </CardMedia>
        <CardContent className={classes.CardContent}>
          <Typography gutterBottom variant="subheading" component="h2">
            About:
          </Typography>
          <Typography gutterBottom variant="body2" component="p">
            As the Internet becomes more driven by multimedia, job-seekers have
            sought to take advantage of the trend by moving their résumés away
            from the traditional paper and email media to website résumés or
            e-résumés.
            <br />
            This trend has attracted criticism from human resources management
            professionals, who warn that this may be a passing fad and point out
            that multimedia-based résumés may be overlooked by recruiters whose
            workflow is designed only to accommodate a traditional résumé
            format.
          </Typography>
          <hr />
          <br />
          <Typography gutterBottom variant="subheading" component="h2">
            Skills:
          </Typography>
          <List>
            {skills.map(() => {
              return (
                <ListItem>
                  <ListItemText primary="Single-line item" />
                  <ListItemAvatar>
                    <Avatar>
                      <Icon />
                    </Avatar>
                  </ListItemAvatar>
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Card>
    </Grid>
  );
};

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
  profileImage: PropTypes.string.isRequired
};

ProfileCard.defaultProps = {
  profileImage:
    'https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg'
};

export default withStyles(styles)(ProfileCard);
