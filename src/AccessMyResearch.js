import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { motion } from "framer-motion"
import { Grid } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Link } from "react-router-dom"
import { Typography } from '@mui/material';
import mainExample from '../src/content/AMR examples/AMR Main Example.mp4'
import jsonData from "../src/content/projects.json"
import AMRCard from "./content/AMRCard"
import conversationCollection from './content/AMR examples/conversationCollection.PNG'
import conversationMessages from './content/AMR examples/conversationMessages.PNG'
import conversationMessage from './content/AMR examples/conversationIndividualMessage.PNG'

const useStyles = makeStyles((theme) => ({
    main: {
        backgroundColor: jsonData[3].color,
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
    dependencies: {
        marginLeft: '1.5vw',
    },
    dependecyTitle: {

    },
    dependencyColor: {
        color: '#79F1AB',
    },
    dependencyContainer: {
        marginBottom: '16vh',
        marginTop: '10vh',
        fontSize: '20px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px',
        },
    },
    homeButton: {
        color: 'white',
        fontFamily: 'poppins',
    },
    homeButtonContainer: {
        marginTop: '1%',
        marginLeft: '50%'
    },
    footerBackground: {
        background: '#393E46',
        height: '200px',
        width: '100%',
    },
    footerContainer: {
        width: '65vw',
        textAlign: 'center',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    },
    conversationsContainer: {
        margin: '1rem',
        padding: '1rem',
    },
    databaseTitle: {
        marginTop: '2rem'
    },
    lightBackground: {
        backgroundColor: '#3ea369',
    },
    textContainer: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        [theme.breakpoints.up('md')]: {
            width: '60%',
        },
        [theme.breakpoints.down('md')]: {
            width: '80%',
        },
    },
    roleContainer: {
        marginTop: '1rem',
        width: '100%',
        backgroundColor: '#3ea369',
    },
    challengeContainer: {
        width: '100%',
        backgroundColor: '#3ea369',
    },
    mainExample: {
        // padding: '0px',
        // margin: '0px'
    },
    exampleVideoItem: {
        width: '90%',
        height: '90%',
        // width: '1000px',
        // height: '700px',
        // [theme.breakpoints.down('sm')]: {
        //     width: '300px',
        //     height: '300px'
        // },
    },
    shapeDivider: {
        // position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        overflow: 'hidden',
        lineHeight: '0',
    },
    triangleSVG: {
        position: 'relative',
        display: 'block',
        width: 'calc(100% + 1.3px)',
        height: '70px',
    },
}))

export default function AccessMyResearch({ data }) {
    const classes = useStyles(data)

    // Scroll to top on startup
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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

                {/*----- Home button -----*/}
                <Grid item className={classes.homeButtonContainer}>
                    <Link to={{ pathname: '/' }}>
                        <Button className={classes.homeButton}>Home</Button>
                    </Link>
                </Grid>

                {/*----- Title -----*/}
                <Grid item>
                    <h1 className={classes.title}>
                        {jsonData[3].name}
                    </h1>
                </Grid>

                {/*----- Description -----*/}
                <Grid item className={classes.description}>
                    {jsonData[3].description}
                </Grid>

                {/* Main Example Video */}
                <Grid item style={{ textAlign: "center" }} className={classes.mainExample}>
                    <video className={classes.exampleVideoItem} playbackRate={3} preload="auto" autoPlay loop muted>
                        <source src={mainExample} type="video/mp4"></source>
                    </video>
                </Grid>

                {/*-----  Our Goal  -----*/}
                <Grid item className={classes.lightBackground}>
                    <div className={classes.shapeDivider}>
                        <svg className={classes.triangleSVG} style={{ fill: '#358D5A' }} viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M1200 0L0 0 598.97 114.72 1200 0z"></path>
                        </svg>
                    </div>
                    <div className={classes.textContainer}>
                        <h1>
                            The Goal
                        </h1>
                        <p>
                            The primary goal for my group was to implement a fully functional chat system feature both on the front end and back end of the website. We decided to use Firestore from Firebase as the cloud-hosted NoSQL database because it is easily scalable, has a multi-model structure, and has real-time document listening capabilities.
                        </p>
                        <p>
                            On the contrary, relational databases store data in a fixed and predefined structure. This means you must design and create the database schema in terms of tables and columns when starting development. Anytime the requirements are modified, changes in the schema must be made, which includes defining new relations, creating new columns, and reflecting the changes in your application. NoSQL on the other hand provides more flexibility. There is no requirement to design a schema in order to begin working on the application, and it does not put a restriction on the types of data you can store together.
                        </p>
                        <p>
                            The primary reason we chose a NoSQL database, like Firestore, is because it has the ability to scale easily. NoSQL databases are built on a masterless, peer-to-peer architecture, unlike relational databases. Data is partitioned and balanced across multiple nodes in a cluster, and aggregated queries are automatically distributed by default. This allows for easy scalability by simply executing a few commands which adds a new cluster to the server. This also improves the performance, allowing for continuous availability.

                        </p>
                        <p>
                            Finally, Firestore has an onSnapshot() method  that allows you to listen to any document changes. When a new message is created, the method will run for every user within the conversation, rendering the new messages in real-time. This creates seamless conversations and eliminates waiting for messages to appear. Additional features can be implemented, such as "typing..." notifications which indicate if a user is in the middle of sending a message.

                        </p>
                    </div>
                </Grid>
                <div className={classes.shapeDivider}>
                    <svg style={{ fill: '#3EA369' }} className={classes.triangleSVG} viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 0L0 0 598.97 114.72 1200 0z"></path>
                    </svg>
                </div>

                {/*----- Database Structure Title -----*/}
                <Grid item className={classes.databaseTitle}>
                    <h1> Database Structure </h1>
                </Grid>

                {/*----- Database Structure Cards -----*/}
                <Grid item className={classes.conversationsContainer}>
                    {/* TODO: Fix for mobile */}
                    <Grid container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        style={{ justifyContent: 'center' }}
                        spacing={2}>
                        <Grid item>
                            <AMRCard
                                src={conversationCollection}
                                info={"We have a conversations collection that contains every conversation ever had"}
                            />
                        </Grid>
                        <Grid item >
                            <AMRCard
                                src={conversationMessages}
                                info={"Within each conversation you have a messages collection, this contains every message from that individual conversation. As well as fields that contains every user within this conversation, allowing one-on-one chats, or group conversations."}
                            />
                        </Grid>
                        <Grid item >
                            <AMRCard
                                src={conversationMessage}
                                info={"Within each messages field there is data containing the user who sent it, the message itself, as well as the timestamp allowing us to query them chronologically"}
                            />
                        </Grid>
                    </Grid>
                </Grid>

                {/*-----  My Role  -----*/}
                <Grid item className={classes.roleContainer}>
                    <div className={classes.shapeDivider}>
                        <svg className={classes.triangleSVG} style={{ fill: '#358D5A' }} viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M1200 0L0 0 598.97 114.72 1200 0z"></path>
                        </svg>
                    </div>
                    <div className={classes.textContainer}>
                        <h1>
                            My Role
                        </h1>
                        <p>
                            Our team had two members. I was the developer of all the functions that were used to communicate with the Firestore Database. The other team member used my functions to display information from the database on screen using the Vue.Js Framework. These functions were used to query information, such as usernames, past messages, and message timestamps from Firestore. This data was put into a stack to keep the order of messages intact. Each message was held in an object containing the user who sent it, the text, and the message timestamp. My team member then easily created a loop displaying each message in chronological order and would reformat the timestamp according to the instructions given to us by our team leads.
                        </p>
                    </div>
                </Grid>
                {/*-----  The Challenges  -----*/}
                <Grid item className={classes.challengeContainer}>
                    <div className={classes.textContainer}>
                        <h1>
                            Biggest Challenge
                        </h1>
                        <p>
                            The problem we faced when creating this new feature was accessing AWS Cognito, which would allow us to retrieve the display name for the logged in user. My teammate and I had no prior experience with AWS Cognito, so we swiftly taught ourselves how it worked. Once I retrieved the display name, it was assigned to the users collection for each conversation document.
                        </p>
                    </div>
                </Grid>
                <div className={classes.shapeDivider}>
                    <svg className={classes.triangleSVG} style={{ fill: '#3EA369' }} viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 0L0 0 598.97 114.72 1200 0z"></path>
                    </svg>
                </div>

                {/*----- Dependencies -----*/}
                <Grid item className={classes.dependencyContainer}>
                    <h3 className={classes.dependecyTitle}>"dependencies used":</h3>
                    <p>{"{"}</p>
                    <div className={classes.dependencies}>
                        <p>"<span className={classes.dependencyColor}>firebase</span>": "^3.1.0",</p>
                        <p>"<span className={classes.dependencyColor}>vue</span>": "^2.6.12",</p>
                        <p>"<span className={classes.dependencyColor}>aws-amplify</span>": "^3.3.14",</p>
                        <p>"<span className={classes.dependencyColor}>aws-amplify-vue</span>": "^2.1.3",</p>
                        <p>"<span className={classes.dependencyColor}>axios</span>": "^0.21.1",</p>
                    </div>
                    <p>{"}"}</p>
                </Grid>

                {/*----- Footer -----*/}
                <Grid item className={classes.footerBackground}>
                    <div className={classes.shapeDivider}>
                        <svg className={classes.triangleSVG} style={{ fill: '#358D5A' }} viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M1200 0L0 0 598.97 114.72 1200 0z"></path>
                        </svg>
                    </div>
                    <div className={classes.footerContainer}>
                        <h3>Next project:</h3>
                        <Link className={classes.link} to={{ pathname: '/twitchmcserver' }}>
                            <h3>Twitch Controlled Minecraft Server</h3>
                        </Link>
                    </div>
                </Grid>

            </Grid>
        </motion.div >
    )
}
