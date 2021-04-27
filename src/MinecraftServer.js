import React from 'react'
import { useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Link } from "react-router-dom"
let temp

const useStyles = makeStyles((theme) => ({
    main: {
        backgroundColor: temp.state.data.color,
        width: '100%',
        height: '100%',
        color: 'white',
        fontFamily: 'poppins',
        overflow: 'hidden'
    },
    title: {
        marginBottom: '10vh',
        fontSize: '5vw',
        textAlign: 'center'
    },
    description: {
        width: '44vw',
        fontSize: '22px',
        textAlign: 'center'
    },
    homeButton: {
        color: 'white',
        fontFamily: 'poppins',
    },
    homeButtonContainer: {
        marginTop: '1%',
        marginLeft: '50%'
    },
}))

export default function MinecraftServer({ data }) {
    temp = useLocation()
    const classes = useStyles(data)
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={classes.main}>

            <Grid container 
            direction="column"
            justify="center"
            alignItems="center"
            spacing={10}>

                {/* Home button */}
                <Grid item className={classes.homeButtonContainer}>
                    <Link to={{ pathname: '/' }}>
                        <Button className={classes.homeButton}>Home</Button>
                    </Link>
                </Grid>

                {/* Title and description */}
                <Grid item>
                    <h1 className={classes.title}>
                        {temp.state.data.name}
                    </h1>
                </Grid>

                {/* Description */}
                <Grid item className={classes.description}>
                    {temp.state.data.description}
                </Grid>

                {/* Twitch channel points example */}
                <Grid item>

                </Grid>

                {/* Gifting Subs example */}
                <Grid item>

                </Grid>

                {/* Donation example */}
                <Grid item>

                </Grid>

                {/* Dependencies */}
                <Grid item>

                </Grid>

                {/* More Examples */}
                <Grid item>

                </Grid>

                {/* Achievements */}
                <Grid item>

                </Grid>

                {/* More info */}
                <Grid item>

                </Grid>
            </Grid>
        </motion.div>
    )
}
