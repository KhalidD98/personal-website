import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { DiReact, DiJsBadge, DiCss3, DiNodejsSmall } from "react-icons/di"
import { SiMaterialUi } from "react-icons/si"
import { FaDigitalOcean, FaTwitch } from "react-icons/fa";
import { Grid } from '@material-ui/core'
import { motion } from "framer-motion"
import GitHubIcon from '@material-ui/icons/GitHub'
import HttpIcon from '@material-ui/icons/Http'
import albumReview from './content/examples/albumReview.mp4'
import minecraftServerDemo from './content/examples/minecraftServerDemo.mp4'
import { Link } from "react-router-dom"


const useStyles = makeStyles((theme) => ({
    main: {
        backgroundColor: props => props.color,
        display: 'flex',
        // width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white'
    },
    title: {
        padding: '10px',
        margin: '0',
        marginTop: '10%',
        marginBottom: '5%',
        fontFamily: 'poppins',
    },
    description: {
        width: '65%',
        fontFamily: 'poppins',
        textAlign: 'center',
        marginBottom: '1%'
    },
    icons: {
        width: '3vw',
        height: '3vw',
        [theme.breakpoints.down('md')]: {
            width: '35px',
            height: '35px',
        }
    },
    iconContainer: {
        // marginBottom: '1%',
        paddingTop: '6%'
    },
    routingContainers: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'poppins',
    },
    pointerCursor: {
        cursor: 'pointer'
    },
    routingIcons: {
        width: '30px',
        height: '30px',
    },
    moreInfoButton: {
        border: '1px solid #ffffff',
        color: 'white',
        borderRadius: '0.6em',
        backgroundColor: 'transparent',
        padding: '8px',
    },
    videoSection: {
        marginBottom: '30px'
    }
}))

export default function Projects({ data }) {
    const classes = useStyles(data)

    const githubClicked = () => {
        window.open(data.github)
    }

    const websiteClicked = () => {
        window.open(data.website)
    }

    return (
        <div className={classes.main}>

            {/*///// TITLE and DESCRIPTION from json /////*/}
            <h1 className={classes.title}>{data.name}</h1>
            <h2 className={classes.description}>{data.description}</h2>

            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.iconContainer}
                spacing={5}>

                {/*///// Show icons based on what is listed in json /////*/}
                {data.icons.map((icon, index) => {
                    switch (icon) {
                        case 'react':
                            return (
                                <Grid item>
                                    <DiReact key={index} className={classes.icons} />
                                </Grid>
                            )
                        case 'css':
                            return (
                                <Grid item>
                                    <DiCss3 key={index} className={classes.icons} />
                                </Grid>
                            )
                        case 'js':
                            return (
                                <Grid item>
                                    <DiJsBadge key={index} className={classes.icons} />
                                </Grid>
                            )
                        case 'materialui':
                            return (
                                <Grid item>
                                    <SiMaterialUi key={index} className={classes.icons} />
                                </Grid>
                            )
                        case 'nodejs':
                            return (
                                <Grid item>
                                    <DiNodejsSmall key={index} className={classes.icons} />
                                </Grid>
                            )
                        case 'digitcalocean':
                            return (
                                <Grid item>
                                    <FaDigitalOcean key={index} className={classes.icons} />
                                </Grid>
                            )
                        case 'twitch':
                            return (
                                <Grid item>
                                    <FaTwitch key={index} className={classes.icons} />
                                </Grid>
                            )
                        default:
                            return null
                    }
                })}

            </Grid>

            {/*////// GITHUB and WEBSITE Section //////*/}
            <Grid container direction="row"
                justify="center"
                alignItems="center"
                className={classes.iconContainer}
                spacing={5}
            >
                {/* If github is available and not private, show */}
                {data.github !== 'private' &&
                    <Grid item onClick={githubClicked} className={classes.routingContainers} className={classes.pointerCursor} >
                        <motion.div className={classes.pointerCursor} whileHover={{ scale: 1.1 }}>
                            <GitHubIcon className={classes.routingIcons} />
                            <p onClick={githubClicked}>Public</p>
                        </motion.div>
                    </Grid>
                }

                {/* If github is private */}
                {data.github === 'private' &&
                    <Grid item className={classes.routingContainers}>
                        <GitHubIcon className={classes.routingIcons} />
                        <p>Private</p>
                    </Grid>
                }

                {/* If website is available, show */}
                {data.website &&
                    <Grid item onClick={websiteClicked} className={classes.routingContainers} >
                        <motion.div className={classes.pointerCursor} whileHover={{ scale: 1.1 }}>
                            <HttpIcon className={classes.routingIcons} />
                            <p onClick={websiteClicked}>Website</p>
                        </motion.div>
                    </Grid>
                }
            </Grid>

            {/*///// MORE INFO Section //////*/}
            <Grid item>
                <Link to={{ pathname: '/' + data.link, state: { data } }}>
                    <motion.h3 whileHover={{ scale: 1.1 }}>
                        <button className={classes.moreInfoButton}>More Info</button>
                    </motion.h3>
                </Link>
            </Grid>

            {/*///// VIDEO Section //////*/}
            <Grid item className={classes.videoSection}>
                {/* If video is available, show */}
                {data.video === 'albumReview.mp4' &&
                    <video width="93%" height="88%" playbackRate={3} autoPlay loop muted >
                        <source src={albumReview} type="video/mp4"></source>
                    </video>
                }
                {data.video === 'minecraftServerDemo.mp4' &&
                    <video width="90%" height="85%" playbackRate={3} autoPlay loop muted >
                        <source src={minecraftServerDemo} type="video/mp4"></source>
                    </video>
                }
            </Grid>

        </div >
    )
}
