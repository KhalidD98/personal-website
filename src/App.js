import LeftSide from './LeftSide';
import { Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import RightSide from './RightSide';

const useStyles = makeStyles({
  left_side: {

  },
  right_side: {
    position: 'static',
    overflow: 'visible',
    backgroundColor: 'red',
  },
  main: {
    minHeight: '100%'
  }
})

function App() {
  const classes = useStyles()
  return (
    <>
      <Grid container direction="row"
        justify="center"
        alignItems="center"
        className={classes.main}>
        <Grid item xs={5} className={classes.left_side}>
          <LeftSide />
        </Grid>
        <Grid item xs={7} className={classes.right_side}>
          <RightSide />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
