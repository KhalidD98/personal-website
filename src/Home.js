import React from 'react'
import RightSide from './RightSide'
import LeftSide from './LeftSide'
import { Grid } from '@material-ui/core'


export default function Home() {
    return (
        <Grid container direction="row">
            <Grid item xs={12} sm={12} md={5}>
                <LeftSide props={"Resume"} />
            </Grid>
            <Grid item xs={12} sm={12} md={7}>
                <RightSide />
            </Grid>
        </Grid>
    )
}
