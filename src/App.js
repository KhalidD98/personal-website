import LeftSide from './LeftSide';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';
import RightSide from './RightSide';

const useStyles = makeStyles((theme) => ({

}))

function App() {
  const classes = useStyles()
  return (
    <>
      <Grid container >
        <Grid item xs={12} sm={12} md={5}>
          <LeftSide />
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          <RightSide />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
