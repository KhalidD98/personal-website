import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { makeStyles } from '@material-ui/core/styles'
import inChatExample from './content/examples/InChatExample.mp4'
import inGameExample from './content/examples/InGameExample.mp4'
import loginExample from './content/examples/LoginExample.mp4'
import exampleOne from './content/examples/example_one.mp4'
import exampleTwo from './content/examples/example_two.mp4'
import exampleThree from './content/examples/example_three.mp4'
import { Grid } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Link } from "react-router-dom"
import jsonData from "../src/content/projects.json"
import Divider from '@material-ui/core/Divider';
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
        marginTop: '20vh',
        fontSize: '7vh',
        textAlign: 'center',
        margin: '10px'
    },
    description: {
        width: '74vw',
        fontSize: '26px',
        textAlign: 'center',
        marginBottom: '170px',
        marginTop: '40px'
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
    },
    dependencies: {
        marginLeft: '1.5vw',
    },
    dependecyTitle: {

    },
    dependencyColor: {
        color: '#ff967a'
    },
    dependencyContainer: {
        marginBottom: '16vh',
        marginTop: '16vh',
        fontSize: '20px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px',
        },
    },
    achievements: {
        width: '45%',
        [theme.breakpoints.down('sm')]: {
            width: '75%'
        },
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '55vw',
        textAlign: 'center',
        margin: '10vh',
    },
    achievementText: {
        fontSize: '33px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '28px'
        },
    },
    darkBackground: {
        width: '100%',
        background: '#FF6960',
    },
    coloredAchievementText: {
        color: '#2827CC'
    },
    moreInfo: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '55vw',
        textAlign: 'center',
        margin: '10vh',
        fontSize: '25px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '17px'
        },
    },
    footerContainer: {
        width: '65vw',
        textAlign: 'center',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    footerBackground: {
        background: '#008698',
        height: '200px',
        width: '100%',
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    },
    featuresContainer: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '66vw',
        textAlign: 'center',
        marginBottom: '5vh',
        fontSize: '25px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '17px'
        },
    },
    moreExamples: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    examplesContainer: {
        width: '100%',
        padding: '0px',
        margin: '0px',
        textAlign: 'center',
        fontSize: '20px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '3vw'
        },
    },
    exampleItem: {
        padding: '0px',
        margin: '0px'
    },
    exampleVideoItem: {
        padding: '0px',
        margin: '0px',
        width: '500px',
        height: '300px',
        [theme.breakpoints.down('sm')]: {
            width: '300px',
            height: '300px'
        },
    },

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

                {/* Examples */}
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={6}
                    className={classes.examplesContainer}>


                    {/* Twitch channel points example */}
                    <Grid item className={classes.videoContainer}>
                        <video className={classes.videoElement} playbackRate={3} preload="auto" autoPlay loop muted>
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
                        <video className={classes.videoElement} playbackRate={3} preload="auto" autoPlay loop muted>
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
                        <video className={classes.videoElement} playbackRate={3} preload="auto" autoPlay loop muted>
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
                <Grid item className={classes.dependencyContainer}>
                    <h3 className={classes.dependecyTitle}>"dependencies":</h3>
                    <p>{"{"}</p>
                    <div className={classes.dependencies}>
                        <p>"<span className={classes.dependencyColor}>animejs</span>": "^3.1.0",</p>
                        <p>"<span className={classes.dependencyColor}>axios</span>": "^0.21.1",</p>
                        <p>"<span className={classes.dependencyColor}>json-query</span>": "^2.2.2",</p>
                        <p>"<span className={classes.dependencyColor}>node-fetch</span>": "^2.6.1",</p>
                        <p>"<span className={classes.dependencyColor}>scriptserver</span>": "^1.2.0",</p>
                        <p>"<span className={classes.dependencyColor}>scriptserver-event</span>": "^1.1.1",</p>
                        <p>"<span className={classes.dependencyColor}>socket.io</span>": "^2.3.0",</p>
                        <p>"<span className={classes.dependencyColor}>socket.io-client</span>": "^2.3.0",</p>
                        <p>"<span className={classes.dependencyColor}>twitch-bot</span>": "^1.3.5",</p>
                    </div>
                    <p>{"}"}</p>
                </Grid>

                {/* Achievements */}
                <Grid item className={classes.darkBackground}>
                    <div className={classes.achievements}>
                        <p className={classes.achievementText}>
                            This Minecraft Server as well as a few small robots we created helped raise over
                            <span className={classes.coloredAchievementText}> $18,000 </span>
                            along side a
                            few other streamers for
                            <span className={classes.coloredAchievementText}> Make a Wish. </span>
                            As well as
                            <span className={classes.coloredAchievementText}> $5,000 </span>
                            along side a few other streamers for the
                            <span className={classes.coloredAchievementText}> Australian Wildfires </span>
                        </p>
                    </div>
                </Grid>

                {/* More Examples */}
                <Grid item className={classes.moreExamples}>
                    <h1>More Examples</h1>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={6}
                        className={classes.examplesContainer}>

                        {/* Example One */}
                        <Grid item className={classes.exampleItem}>
                            <video className={classes.exampleVideoItem} playbackRate={3} preload="auto" autoPlay loop muted>
                                <source src={exampleOne} type="video/mp4"></source>
                            </video>
                            <p> User gifted 5 subscribers, spawning in 25 mobs </p>
                        </Grid>

                        {/* Example Two */}
                        <Grid item className={classes.exampleItem}>
                            <video className={classes.exampleVideoItem} playbackRate={3} preload="auto" autoPlay loop muted>
                                <source src={exampleTwo} type="video/mp4"></source>
                            </video>
                            <p> User gifted 25 subs, spawning in 100 mobs </p>
                        </Grid>

                        {/* Example Three */}
                        <Grid item className={classes.exampleItem}>
                            <video className={classes.exampleVideoItem} playbackRate={3} preload="auto" autoPlay loop muted>
                                <source src={exampleThree} type="video/mp4"></source>
                            </video>
                            <p> Viewer in chat used Channel Points to spawn in mobs </p>
                        </Grid>

                    </Grid>
                </Grid>

                {/* More info */}
                <Grid item className={classes.darkBackground}>
                    <div className={classes.moreInfo}>
                        <h1>More Information</h1>
                        <p>
                            This project has been an almost 2 year continuous project. It started out where a $1 donation
                            would spawn a random mob. Then added the feature that when a viewer subscribed to the channel
                            they would get 5 random mobs spawn on the server. Although people really enjoyed these features
                            it didn't allow new viewers who didn't want to spend money participate. Which is where
                            Channel Point Redemptions comes into play.
                    </p>
                        <Divider />
                        <p>
                            I then learned to read Channel Point Redemptions on Twitch, which allowed viewers to spawn
                            mobs and potion effects individually as if shopping online. At first implementation we would
                            manually create every redemption and manually pause them when the streamer was logged off the
                            server. So I took the time to learn and implement the creation and deletion of channel point
                            redemptions to better automate the process.
                    </p>
                    </div>
                </Grid>

                {/* Future Features */}
                <Grid item>
                    <div className={classes.featuresContainer}>
                        <h3>Future Features:</h3>
                        <p>- Front End Website for purchasing similar to an online shop</p>
                        <p>- Front End Website for Mod control of redemptions</p>
                        <p>- Turning the server into a Modded Server</p>
                        <p>- More redemptions for users to purchase</p>
                    </div>
                </Grid>

                {/* Footer */}
                <Grid item className={classes.footerBackground}>
                    <div className={classes.footerContainer}>
                        <h3>Next project:</h3>
                        <Link className={classes.link} to={{ pathname: '/personalwebsite' }}>
                            <h3>Personal Website</h3>
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </motion.div>
    )
}
