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
        marginBottom: '4vh',
        marginTop: '8vh',
        fontSize: '7vh',
        textAlign: 'center',
        margin: '10px'
    },
    description: {
        width: '74vw',
        fontSize: '26px',
        textAlign: 'center',
        marginBottom: '70px',
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
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
        background: '#ff4f47',
        padding: '0',
        margin: '0'
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
        background: '#CD494F',
        height: '200px',
        width: '100%',
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    },
    featuresContainer: {
        width: '100%'
    },
    featuresContainerDiv: {
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
        width: '100%'
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

    achievementCurve: {
        top: '0',
        left: '0',
        width: '100%',
        overflow: 'hidden',
        lineHeight: '0',
        marginBottom: '6vh'
    },
    achievementCurveSVG: {
        position: 'relative',
        display: 'block',
        width: 'calc(104% + 1.3px)',
        height: '60px',
    },
    curveFillGray: {
        fill: '#393E46',
    },
    curveFillRed: {
        fill: '#ff4f47',
    },
    curveFillBlue: {
        fill: '#CD494F',
    },
    achievementCurveBottom: {
        top: '0',
        left: '0',
        width: '100%',
        overflow: 'hidden',
        lineHeight: '0',
        transform: 'rotate(180deg)',
        marginBottom: '-1px',
        marginTop: '4vh'
    },
    achievementCurveSVGBottom: {
        position: 'relative',
        display: 'block',
        width: 'calc(104% + 1.3px)',
        height: '80px',
    },
    examplesCurveBottom: {
        top: '0',
        left: '0',
        width: '100%',
        overflow: 'hidden',
        lineHeight: '0',
        transform: 'rotate(180deg)',
        marginBottom: '-1px',
        marginTop: '4vh'
    },
    examplesCurveSVGBottom: {
        position: 'relative',
        display: 'block',
        width: 'calc(144% + 1.3px)',
        height: '80px',
    },
    footerCurve: {
        top: '0',
        left: '0',
        width: '100%',
        overflow: 'hidden',
        lineHeight: '0',
        transform: 'rotate(180deg)',
        backgroundColor: '#393E46'
    },
    footerCurveSVG: {
        position: 'relative',
        display: 'block',
        width: 'calc(144% + 1.3px)',
        height: '80px',
    }


}))

export default function MinecraftServer({ data }) {

    // Scroll to top on startup
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
                alignItems="center">

                {/****** Home button ******/}
                <Grid item className={classes.homeButtonContainer}>
                    <Link to={{ pathname: '/' }}>
                        <Button className={classes.homeButton}>Home</Button>
                    </Link>
                </Grid>

                {/****** Title and description ******/}
                <Grid item>
                    <h1 className={classes.title}>
                        {jsonData[1].name}
                    </h1>
                </Grid>

                {/****** Description ******/}
                <Grid item className={classes.description}>
                    {jsonData[1].description}
                </Grid>

                {/****** Examples ******/}
                <Grid container
                    direction="row"
                    justify="space-evenly"
                    alignItems="flex-start"
                    className={classes.examplesContainer}
                >

                    {/****** Twitch channel points example ******/}
                    <Grid item className={classes.videoContainer}>
                        <video className={classes.videoElement} playbackRate={3} preload="auto" autoPlay loop muted>
                            <source src={inChatExample} type="video/mp4"></source>
                        </video>

                        <p className={classes.exampleText}>
                            The streamer and moderators have the ability,
                            <span className={classes.coloredText}> in the Twitch Chat, </span>
                            to create, delete, and refresh API tokens
                            of Minecraft Redemptions as a fail safe incase anything goes wrong.
                        </p>
                    </Grid>

                    {/****** Gifting Subs example ******/}
                    <Grid item className={classes.videoContainer}>
                        <video className={classes.videoElement} playbackRate={3} preload="auto" autoPlay loop muted>
                            <source src={inGameExample} type="video/mp4" ></source>
                        </video>
                        <p className={classes.exampleText}>
                            The streamer and moderators have the ability
                            <span className={classes.coloredText}> in the Minecraft Server </span>
                            to control the creation and deletion, as well as refresh API tokens
                            of Minecraft Redemptions as a fail safe incase anything goes wrong.
                        </p>
                    </Grid>

                    {/****** Donation example ******/}
                    <Grid item className={classes.videoContainer}>
                        <video className={classes.videoElement} playbackRate={3} preload="auto" autoPlay loop muted>
                            <source src={loginExample} type="video/mp4"></source>
                        </video>
                        <p className={classes.exampleText}>
                            When the streamer
                            <span className={classes.coloredText}> logs into </span> the server,
                            Minecraft Redemptions are <span className={classes.coloredText}> created </span>
                            for viewers to use. When the streamer
                            <span className={classes.coloredText}> leaves </span> the server, Minecraft Redemptions
                            are deleted and commands are
                            <span className={classes.coloredText}> disabled. </span>
                        </p>
                    </Grid>
                </Grid>

                {/****** Dependencies ******/}
                <Grid item className={classes.dependencyContainer}>
                    <h3 className={classes.dependecyTitle}>"dependencies used":</h3>
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

                {/****** Achievements ******/}
                <Grid item className={classes.darkBackground}>
                    <div className={classes.achievementCurve}>
                        <svg className={classes.achievementCurveSVG} viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className={classes.curveFillGray}></path>
                            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className={classes.curveFillGray}></path>
                            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={classes.curveFillGray}></path>
                        </svg>
                    </div>
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
                    <div className={classes.achievementCurveBottom}>
                        <svg className={classes.achievementCurveSVGBottom} viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className={classes.curveFillGray}></path>
                            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className={classes.curveFillGray}></path>
                            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={classes.curveFillGray}></path>
                        </svg>
                    </div>
                </Grid>

                {/****** Examples Container ******/}
                <Grid item className={classes.moreExamples}>
                    <h1 className={classes.moreExamplesTitle}>More Examples</h1>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={6}
                        className={classes.examplesContainer}>

                        {/****** Minecraft Server Example ONE ******/}
                        <Grid item className={classes.exampleItem}>
                            <video className={classes.exampleVideoItem} playbackRate={3} preload="auto" autoPlay loop muted>
                                <source src={exampleOne} type="video/mp4"></source>
                            </video>
                            <p> User gifted 5 subscribers, spawning in 25 mobs </p>
                        </Grid>

                        {/****** Minecraft Server Example TWO ******/}
                        <Grid item className={classes.exampleItem}>
                            <video className={classes.exampleVideoItem} playbackRate={3} preload="auto" autoPlay loop muted>
                                <source src={exampleTwo} type="video/mp4"></source>
                            </video>
                            <p> User gifted 25 subs, spawning in 100 mobs </p>
                        </Grid>

                        {/****** Minecraft Server Example THREE ******/}
                        <Grid item className={classes.exampleItem}>
                            <video className={classes.exampleVideoItem} playbackRate={3} preload="auto" autoPlay loop muted>
                                <source src={exampleThree} type="video/mp4"></source>
                            </video>
                            <p> Viewer in chat used Channel Points to spawn in mobs </p>
                        </Grid>

                    </Grid>
                    <div className={classes.examplesCurveBottom}>
                        <svg className={classes.examplesCurveSVGBottom} viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className={classes.curveFillRed}></path>
                            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className={classes.curveFillRed}></path>
                            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={classes.curveFillRed}></path>
                        </svg>
                    </div>
                </Grid>

                {/****** More info ******/}
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

                {/****** Future Features ******/}
                <Grid item className={classes.featuresContainer}>
                    <div className={classes.achievementCurve}>
                        <svg className={classes.achievementCurveSVG} viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className={classes.curveFillRed}></path>
                            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className={classes.curveFillRed}></path>
                            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={classes.curveFillRed}></path>
                        </svg>
                    </div>
                    <div className={classes.featuresContainerDiv}>
                        <h3>Future Features:</h3>
                        <p>- Front End Website for purchasing similar to an online shop</p>
                        <p>- Front End Website for Mod control of redemptions</p>
                        <p>- Turning the server into a Modded Server</p>
                        <p>- More redemptions for users to purchase</p>
                    </div>
                </Grid>

                {/****** Footer ******/}
                <Grid item className={classes.footerBackground}>
                    <div className={classes.footerCurve}>
                        <svg className={classes.footerCurveSVG} viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className={classes.curveFillBlue}></path>
                            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className={classes.curveFillBlue}></path>
                            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={classes.curveFillBlue}></path>
                        </svg>
                    </div>
                    <div className={classes.footerContainer}>
                        <h3>Next project:</h3>
                        <Link className={classes.link} to={{ pathname: '/reviewwebsite' }}>
                            <h3>Album Review Website</h3>
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </motion.div>
    )
}
