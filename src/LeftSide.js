import React from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import image from './content/profilePicture.png'

const useStyles = makeStyles({
    icons: {
        marginTop: '20px',
    },
    name: {
        fontSize: '64px',
        color: '#324E7B'
    },
    image: {
        borderRadius: '96px',
    },
    description: {
        fontSize: '36px'
    },
    resume: {
        fontSize: '36px'
    }
})

export default function LeftSide() {
    const classes = useStyles()
    return (
        <Grid container
            direction="column"
            justify="center"
            alignItems="center">

            {/* Image */}
            <Grid item>
                <img className={classes.image} src={image}></img>
            </Grid>

            {/* Name */}
            <Grid item>
                <h1 className={classes.name}> Khalid Dakak </h1>
            </Grid>

            {/* Description */}
            <Grid item>
                <h3 className={classes.description}> JS Developer - CS Graduate </h3>
            </Grid>

            {/* Resume */}
            <Grid item className={classes.resume}>
                <h3> Resume </h3>
            </Grid>

            {/* Icons */}
            <Grid item className={classes.icons}>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}>
                    <Grid item>
                        <GitHubIcon />
                    </Grid>

                    <Grid item>
                        <LinkedInIcon />
                    </Grid>
                </Grid>
            </Grid>


        </Grid>
    )
}
