import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Projects from './Projects'
import projectData from './content/projects.json'
import { motion } from "framer-motion"

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        overflow: 'hidden'
    },
}))

export default function RightSide() {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <Projects data={projectData[0]} />
            <Projects data={projectData[1]} />
            <Projects data={projectData[2]} />
        </div>
    )
}
