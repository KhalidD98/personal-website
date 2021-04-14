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
                <p>Test message</p>
            </Grid>
        </Grid>
    )
}
