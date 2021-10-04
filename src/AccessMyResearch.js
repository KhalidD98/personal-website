import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { motion } from "framer-motion"
import { Grid } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Link } from "react-router-dom"
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
        marginTop: '16vh',
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
        background: '#008698',
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
}))

export default function AccessMyResearch({ data }) {
    const classes = useStyles(data)

    // Scroll to top on startup
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [])

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
                        alignItems="center">
                        <AMRCard
                            src={conversationCollection}
                            info={"We have a conversations collection that contains every conversation ever had"}
                        />
                        <AMRCard
                            src={conversationMessages}
                            info={"Within each conversation you have a messages collection, this contains every message from that individual conversation. As well as fields that contains every user within this conversation, allowing one-on-one chats, or group conversations."}
                        />
                        <AMRCard
                            src={conversationMessage}
                            info={"Within each messages field there is data containing the user who sent it, the message itself, as well as the timestamp allowing us to query them by timestamp"}
                        />
                    </Grid>
                </Grid>

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
                    {/* <div className={classes.footerCurve}>
                        <svg className={classes.footerCurveSVG} viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className={classes.curveFillBlue}></path>
                            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className={classes.curveFillBlue}></path>
                            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={classes.curveFillBlue}></path>
                        </svg>
                    </div> */}
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
