import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Card } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles({
    container: {
        height: '100%'
    },
    project_one: {
        width: '100%',
        height: '100%',
        backgroundColor: 'red'
    },
    project_two: {

    },
    project_three: {

    },
    project_four: {

    },
    project_one_card: {
        backgroundColor: 'red'
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
                    <Card className={classes.project_one_card}>

                    </Card>
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
