import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { makeStyles } from '@material-ui/core/styles'
import inChatExample from './content/examples/InChatExample.mp4'
import inGameExample from './content/examples/InGameExample.mp4'
import loginExample from './content/examples/LoginExample.mp4'
import { Grid } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Link } from "react-router-dom"
import jsonData from "../src/content/projects.json"
let temp

const useStyles = makeStyles((theme) => ({
    main: {
        backgroundColor: jsonData[1].color,
        width: '100%',
        height: '100%',
        color: 'white',
        fontFamily: 'poppins',
        overflow: 'hidden'
    },
    title: {
        marginBottom: '10vh',
        fontSize: '7vh',
        textAlign: 'center',
        margin: '10px'
    },
    description: {
        width: '74vw',
        fontSize: '26px',
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
    videoContainer: {
        // margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '600px',
        margin: '10px',
    },
    examplesContainer: {
        width: '100%',
        paddingTop: '160px'
    },
    exampleText: {
        width: '90%',
        maxWidth: '550px',
        padding: '0',
        margin: '0',
        textAlign: 'center',
        fontSize: '25px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px',
        },
    },
    videoElement: {
        width: "500px",
        height: "500px",
        [theme.breakpoints.down('sm')]: {
            width: '400px',
            height: '400px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '300px',
            height: '300px',
        }
    },
    coloredText: {
        color: '#ff967a'
    }
}))

export default function MinecraftServer({ data }) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
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
                        {jsonData[1].name}
                    </h1>
                </Grid>

                {/* Description */}
                <Grid item className={classes.description}>
                    {jsonData[1].description}
                </Grid>

                {/* Explaining creation and deletion of redemptions */}

                {/* Examples */}
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={6}
                    className={classes.examplesContainer}>


                    {/* Twitch channel points example */}
                    <Grid item className={classes.videoContainer}>
                        <video className={classes.videoElement} playbackRate={3} autoPlay loop muted>
                            <source src={inChatExample} type="video/mp4"></source>
                        </video>

                        <p className={classes.exampleText}>
                            Streamer and Moderators have the ability
                            <span className={classes.coloredText}> in the Twitch Chat </span>
                            to control the creation and deletion, as well as refresh api tokens
                            of Minecraft Redemptions as a fail safe incase anything goes wrong.
                        </p>
                    </Grid>

                    {/* Gifting Subs example */}
                    <Grid item className={classes.videoContainer}>
                        <video className={classes.videoElement} playbackRate={3} autoPlay loop muted>
                            <source src={inGameExample} type="video/mp4" ></source>
                        </video>
                        <p className={classes.exampleText}>
                            Streamer and Moderators have the ability
                            <span className={classes.coloredText}> in the Minecraft Server </span>
                            to control the creation and deletion, as well as refresh api tokens
                            of Minecraft Redemptions as a fail safe incase anything goes wrong.
                        </p>
                    </Grid>

                    {/* Donation example */}
                    <Grid item className={classes.videoContainer}>
                        <video className={classes.videoElement} playbackRate={3} autoPlay loop muted>
                            <source src={loginExample} type="video/mp4"></source>
                        </video>
                        <p className={classes.exampleText}>
                            When Streamer
                            <span className={classes.coloredText}> logs into </span> the server
                            Minecraft Redemptions are <span className={classes.coloredText}> created </span>
                            for viewers to use, when the streamer
                            <span className={classes.coloredText}> leaves </span> the server Minecraft Redemptions
                            are deleted and commands are
                            <span className={classes.coloredText}> disabled </span>
                        </p>
                    </Grid>
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
