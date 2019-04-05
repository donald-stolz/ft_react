const styles = theme => ({
  heroUnit: {
    background:
      'url(https://www.incimages.com/uploaded_files/image/970x450/getty_509107562_2000133320009280346_351827.jpg) no-repeat center center fixed',
    backgroundSize: 'cover',
    minHeight: 600,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  heroContent: {
    maxWidth: 600,
    margin: '0',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  }
});

export default styles;
