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
    marginTop: -theme.spacing.unit * 22
  },
  resumeContainer: {
    padding: theme.spacing.unit * 5
  },
  gridAlign: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  resume: {
    flexGrow: 1,
    maxWidth: '96%'
  }
});

export default styles;
