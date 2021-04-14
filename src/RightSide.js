import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Projects from './Projects'
import projectData from './content/projects.json'

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%'
    },
}))

export default function RightSide() {
    const classes = useStyles()
    return (
        <>
            <Projects data={projectData[0]} />
            <Projects data={projectData[1]} />
            <Projects data={projectData[2]} />
        </>
        // <Grid container
        //     direction="column"
        //     justify="center"
        //     alignItems="center"
        //     className={classes.container}>
        //     <Grid item>
        //         <Projects />
        //     </Grid>
        // </Grid>
    )
}
