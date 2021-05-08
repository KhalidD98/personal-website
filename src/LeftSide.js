import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import image from './content/profilePicture.png'
import { Link } from "react-router-dom"
import resumePFG from "./content/KhalidDakakResume.pdf"
import { motion } from "framer-motion"
import { MdContentCopy } from "react-icons/md"

const useStyles = makeStyles((theme) => ({
    name: {
        fontSize: '4vh',
        color: '#324E7B',
        fontFamily: 'poppins',
    },
    image: {
        borderRadius: '96px',
    },
    description: {
        fontSize: '2.8vh',
        fontFamily: 'poppins',
    },
    resume: {
        fontSize: '3vh',
    },
    resumeText: {
        textDecoration: 'none',
        color: '#324E7B',
        fontFamily: 'poppins',
    },
    container: {
        overflowY: 'hidden',
        fontSize: '2vh',
        [theme.breakpoints.up('sm')]: {
            position: 'fixed',
            left: '0px',
            top: '5%',
            right: '2em',
            width: '40%',
        },

        [theme.breakpoints.down('sm')]: {
            position: 'static',
            left: '0px',
            top: '5%',
            right: '2em',
            width: '100%',
        },
        [theme.breakpoints.down('xs')]: {
            position: 'static',
            left: '0px',
            top: '5%',
            right: '2em',
            width: '100%',
        }
    },
    icons: {
        marginTop: '20px',
    },
    routingContainers: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        fontFamily: 'poppins',
        fontSize: '2vh'
    },
    contactForm: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'poppins',
        fontSize: '2vh'
    },
    contactFormTitle: {
        marginTop: '20%',
        margin: '0',
        color: '#324E7B',
    },
    email: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    emailContent: {
        margin: '0.5vw'
    },
    clipboard: {
        cursor: 'pointer',
    },
    popup: {
        opacity: '0',
        color: '#709be0'
    }
}))

export default function LeftSide({ props }) {
    const classes = useStyles()
    const [isActive, setIsActive] = React.useState(false);

    const githubClicked = () => {
        window.open('https://github.com/KhalidD98/')
    }

    const linkedInClicked = () => {
        window.open('https://www.linkedin.com/in/khaliddakak/')
    }



    return (
        <Grid container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.container}>

            {/****** Image ******/}
            <Grid item>
                <img className={classes.image} src={image}></img>
            </Grid>

            {/****** Name ******/}
            <Grid item>
                <h1 className={classes.name}> Khalid Dakak </h1>
            </Grid>

            {/****** Description ******/}
            <Grid item>
                <h3 className={classes.description}> JS Developer - CS Graduate </h3>
            </Grid>

            {/****** Resume ******/}
            <Grid item className={classes.resume} >
                <a className={classes.resumeText} href={resumePFG} target="_blank"> <motion.h3 whileHover={{ scale: 1.1 }}> {props} </motion.h3> </a>
            </Grid>

            {/****** Icons ******/}
            <Grid item className={classes.icons}>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}>

                    {/****** Github Button ******/}
                    <Grid item onClick={githubClicked}>
                        <motion.div whileHover={{ scale: 1.1 }} className={classes.routingContainers}>
                            <GitHubIcon onClick={githubClicked} />
                            <p> My Github </p>
                        </motion.div>
                    </Grid>

                    {/****** Linkedin Button ******/}
                    <Grid item onClick={linkedInClicked}>
                        <motion.div whileHover={{ scale: 1.1 }} className={classes.routingContainers}>
                            <LinkedInIcon onClick={linkedInClicked} />
                            <p> My linkedin </p>
                        </motion.div>
                    </Grid>

                </Grid>
            </Grid>

            {/****** Contact Form Container ******/}
            <Grid item className={classes.contactForm}>

                {/****** Contact me Text ******/}
                <h2 className={classes.contactFormTitle}>Contact Me</h2>

                {/****** Copy Email Button ******/}
                <div className={classes.email}>
                    <p className={classes.emailContent}>khaliddakak@gmail.com</p>
                    <motion.div whileHover={{ color: 'rgb(200, 0, 0)' }}>
                        <MdContentCopy onClick={() => {

                            // Activate Copied animation
                            setIsActive(!isActive)
                            setTimeout(() => {
                                setIsActive(false)
                            }, 1000)
                            navigator.clipboard.writeText('khaliddakak@gmail.com')
                        }} className={classes.clipboard} />
                    </motion.div>
                </div>

                {/****** Copied text animation ******/}
                <motion.p animate={{ opacity: isActive ? [1, 0] : 0 }} transition={{ duration: 1 }} className={classes.popup}>Copied!</motion.p>
            </Grid>
        </Grid >
    )
}
