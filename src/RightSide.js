import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        height: '100%'
    },
    project_one: {
        width: '100%'
    },
    project_two: {

    },
    project_three: {

    },
    project_four: {

    }
})

export default function RightSide() {
    const classes = useStyles()
    return (
        <>
            <Grid container
                direction="column"
                justify="center"
                alignItems="center"
                className={classes.container}>
                <Grid item className={classes.project_one}>

                </Grid>
                <Grid item className={classes.project_two}>

                </Grid>
                <Grid item className={classes.project_three}>

                </Grid>
                <Grid item className={classes.project_four}>

                </Grid>
            </Grid>
        </>
    )
}
