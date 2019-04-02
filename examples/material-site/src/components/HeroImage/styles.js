const styles = theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
    minHeight: 800,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  heroContent: {
    maxWidth: 600,
    margin: '0',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  }
});

export default styles;
