import React from 'react'
import { Link } from "react-router-dom"
import { Button } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'



const useStyles = makeStyles((theme) => ({
    buttonContainer: {
        paddingTop: '13vh'
    }
}))

export default function PersonalWebsite() {

    const classes = useStyles()

    return (
        <div>
            <Grid container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={10}>
                <Grid item className={classes.buttonContainer}>
                    <Link to={{ pathname: '/' }}>
                        <Button >Home</Button>
                    </Link>
                </Grid>

                <Grid item>
                    <h1> Under Construction </h1>
                </Grid>
            </Grid>
        </div>
    )
}
