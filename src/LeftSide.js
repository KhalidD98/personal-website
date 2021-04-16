import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import image from './content/profilePicture.png'
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { MdContentCopy } from "react-icons/md"

const useStyles = makeStyles((theme) => ({
    icons: {
        marginTop: '20px',
    },
    name: {
        fontSize: '64px',
        fontSize: '3vw',
        color: '#324E7B',
        [theme.breakpoints.down('md')]: {
            fontSize: '36px'
        },
        fontFamily: 'poppins',
    },
    image: {
        borderRadius: '96px',
    },
    description: {
        fontSize: '36px',
        [theme.breakpoints.down('md')]: {
            fontSize: '24px',
        },
        fontFamily: 'poppins',
    },
    resume: {
        fontSize: '36px',
        [theme.breakpoints.down('md')]: {
            fontSize: '24px'
        },
    },
    resumeText: {
        textDecoration: 'none',
        color: '#324E7B',
        fontFamily: 'poppins',
    },
    container: {
        [theme.breakpoints.up('sm')]: {
            position: 'fixed',
            left: '0px',
            top: '0px',
            right: '2em',
            width: '40%',
            height: '100%',
        },

        [theme.breakpoints.down('sm')]: {
            position: 'static',
            width: '100%',
            height: '50em',
        },
        [theme.breakpoints.down('xs')]: {
            position: 'static',
            width: '100%',
            height: '50em',
        }
    },
    routingContainers: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        fontFamily: 'poppins',
    },
    contactForm: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'poppins',
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
        opacity: '0'
    }
}))

export default function LeftSide({ props }) {
    const classes = useStyles()
    const [isActive, setIsActive] = React.useState(false);

    const githubClicked = () => {
        window.location = 'https://github.com/KhalidD98/'
    }

    const linkedInClicked = () => {
        window.location = 'https://www.linkedin.com/in/khaliddakak/'
    }

    return (
        <Grid container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.container}>

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
            <Grid item className={classes.resume} >
                <Link className={classes.resumeText} to={'/' + props}> <motion.h3 whileHover={{ scale: 1.1 }}> {props} </motion.h3> </Link>
            </Grid>

            {/* Icons */}
            <Grid item className={classes.icons}>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}>

                    <Grid item onClick={githubClicked}>
                        <motion.div whileHover={{ scale: 1.1 }} className={classes.routingContainers}>
                            <GitHubIcon onClick={githubClicked} />
                            <p> My Github </p>
                        </motion.div>
                    </Grid>

                    <Grid item onClick={githubClicked}>
                        <motion.div whileHover={{ scale: 1.1 }} className={classes.routingContainers}>
                            <LinkedInIcon onClick={linkedInClicked} />
                            <p> My linkedin </p>
                        </motion.div>
                    </Grid>

                </Grid>
            </Grid>

            {/* Contact Form */}
            <Grid item className={classes.contactForm}>
                <h2 className={classes.contactFormTitle}>Contact Me</h2>
                <div className={classes.email}>
                    <p className={classes.emailContent}>khaliddakak@gmail.com</p>
                    <motion.div whileHover={{ color: 'rgb(200, 0, 0)' }}>
                        <MdContentCopy onClick={() => {
                            setIsActive(!isActive)
                            setTimeout(() => {
                                setIsActive(false)
                            }, 1000)
                            navigator.clipboard.writeText('khaliddakak@gmail.com')
                        }} className={classes.clipboard} />
                    </motion.div>
                </div>
                <motion.p animate={{ opacity: isActive ? [1, 0] : 0 }} transition={{ duration: 1 }} className={classes.popup}>Copied!</motion.p>
            </Grid>
        </Grid >
    )
}
// onClick={() => setIsActive(!isActive)}
// animate={{
//     rotate: isActive ? 90 : 0,
// }}
