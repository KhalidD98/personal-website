import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { DiReact, DiJsBadge, DiCss3 } from "react-icons/di"
import { SiMaterialUi } from "react-icons/si"
import { Grid } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import HttpIcon from '@material-ui/icons/Http'
import albumReview from './content/albumReview.mp4'


const useStyles = makeStyles((theme) => ({
    main: {
        backgroundColor: props => props.color,
        display: 'flex',
        // width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white'
    },
    title: {
        padding: '0',
        margin: '0',
        marginTop: '10%',
        marginBottom: '7%',
        fontFamily: 'poppins',
    },
    description: {
        width: '65%',
        fontFamily: 'poppins',
        textAlign: 'center',
        marginBottom: '8%'
    },
    icons: {
        width: '60px',
        height: '60px',
    },
    iconContainer: {
        marginBottom: '5%',
    },
    routingContainers: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    },
    routingIcons: {
        width: '30px',
        height: '30px',
    },
    video: {
        width: "100%",
        height: "95%",
    }
}))

export default function Projects({ data }) {
    const classes = useStyles(data)

    const githubClicked = () => {
        window.location = data.github
    }

    const websiteClicked = () => {
        window.location = data.website
    }

    return (
        <div className={classes.main}>

            {/* Title and description from json */}
            <h1 className={classes.title}>{data.name}</h1>
            <h2 className={classes.description}>{data.description}</h2>

            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.iconContainer}
                spacing={5}>

                {/* Show icons based on what is listed in json */}
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
                    }
                })}

            </Grid>

            <Grid container direction="row"
                justify="center"
                alignItems="center"
                className={classes.iconContainer}
                spacing={5}
            >
                {/* If github is available, show */}
                {data.github &&
                    <Grid item className={classes.routingContainers}>
                        <GitHubIcon onClick={githubClicked} className={classes.routingIcons} />
                        <p>Github</p>
                    </Grid>
                }

                {/* If website is available, show */}
                {data.website &&
                    <Grid item className={classes.routingContainers}>
                        <HttpIcon onClick={websiteClicked} className={classes.routingIcons} />
                        <p>Website</p>
                    </Grid>
                }
            </Grid>

            <Grid item>
                {/* If video is available, show */}
                {data.video === 'albumReview.mp4' &&
                    <video width="100%" height="95%" playbackRate={3} autoPlay loop muted playsinline >
                        <source src={albumReview} type="video/mp4"></source>
                    </video>
                }
            </Grid>
        </div>
    )
}
