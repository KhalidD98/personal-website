import React from 'react'
import LeftSide from './LeftSide'
import { Grid } from '@material-ui/core';

export default function Resume() {
    return (
        <Grid container >
            <Grid item xs={12} sm={12} md={5}>
                <LeftSide props={"Home"} />
            </Grid>
            <Grid item xs={12} sm={12} md={7}>
                <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center" spacing={0}>
                    <Grid item>
                        <h1>Khalid Dakak</h1>
                    </Grid>
                    <Grid item>
                        <h2>Computer Science Student</h2>
                    </Grid>
                    <Grid item>
                        <h3>P | (321)431-2250</h3>
                    </Grid>
                    <Grid item>
                        <h3>E | khaliddakak@gmail.com</h3>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
