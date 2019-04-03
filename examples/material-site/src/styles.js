const styles = theme => ({
  layout: {
    display: 'flex',
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1280,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  profileGrid: {
    marginTop: '-20vh'
  },
  cardGrid: {
    paddingTop: theme.spacing.unit * 6,
    paddingLeft: theme.spacing.unit * 6
  }
});

export default styles;
