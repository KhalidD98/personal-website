import React from 'react'
import RightSide from './RightSide';
import LeftSide from './LeftSide';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({

});

export default function Home() {
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
    )
}
