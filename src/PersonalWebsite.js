import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { Button } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { motion } from "framer-motion"
import jsonData from "../src/content/projects.json"



const useStyles = makeStyles((theme) => ({
    buttonContainer: {
        paddingTop: '13vh'
    },
    main: {
        backgroundColor: jsonData[2].color,
        width: '100%',
        height: '100%',
        color: 'white',
        fontFamily: 'poppins',
        overflow: 'hidden',
    },
    dependencies: {
        marginLeft: '1.5vw',
    },
    dependecyTitle: {

    },
    dependencyColor: {
        color: '#ff997a'
    },
    dependencyContainer: {
        marginBottom: '10vh',
        marginTop: '10vh',
        fontSize: '20px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px',
        },
        fontSize: '20px'
    },
    footerContainer: {
        width: '65vw',
        textAlign: 'center',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    footerBackground: {
        background: '#6ab04c',
        height: '200px',
        width: '100%',
    },
    link: {
        textDecoration: 'none',
        color: 'white',
    },
    homeButton: {
        color: 'white',
        fontFamily: 'poppins',
    },
    homeButtonContainer: {
        marginTop: '1%',
        marginLeft: '50%'
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
    coloredText: {
        color: '#ff997a'
    },
    darkBackground: {
        width: '100%',
        backgroundColor: '#006698',
        display: 'flex',
        justifyContent: 'center'
    },
    goalsContainer: {
        backgroundColor: '#006698',
        width: '26rem',
        fontSize: '20px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px',
        },
    },
    hyperlink: {
        textDecoration: 'none',
        color: '#ff997a'
    },
    strugglesContainer: {
        width: '50vw',
        textAlign: 'center',
        fontSize: '20px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px',
        },
    },
    featuresContainer: {
        fontSize: '20px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px',
        },
    }
}))

export default function PersonalWebsite() {

    const classes = useStyles()

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
                alignItems="center"
                spacing={10}>

                {/****** Home button ******/}
                <Grid item className={classes.homeButtonContainer}>
                    <Link to={{ pathname: '/' }}>
                        <Button className={classes.homeButton}>Home</Button>
                    </Link>
                </Grid>

                {/****** Title and description ******/}
                <Grid item>
                    <h1 className={classes.title}>
                        {jsonData[2].name}
                    </h1>
                </Grid>

                {/****** Description ******/}
                <Grid item className={classes.description}>
                    {jsonData[2].description}
                </Grid>

                {/****** Goals for the site ******/}
                <Grid item className={classes.darkBackground}>
                    <div className={classes.goalsContainer}>
                        <h2>Goals:</h2>
                        <p>- Make website mobile friendly</p>
                        <p>- Have everything be <span className={classes.coloredText}>no more</span> than two clicks away</p>
                        <p>- Proper visual hierarchy</p>
                        <p>- Add animations when transitioning between pages</p>
                        <p>- Include videos to show examples</p>
                    </div>
                </Grid>

                {/****** Dependencies ******/}
                <Grid item className={classes.dependencyContainer}>
                    <h3 className={classes.dependecyTitle}>"dependencies used":</h3>
                    <p>{"{"}</p>
                    <div className={classes.dependencies}>
                        <p>"<span className={classes.dependencyColor}>framer-motion</span>": "^4.1.10",</p>
                        <p>"<span className={classes.dependencyColor}>material-ui</span>": "^1.0.0-beta.47",</p>
                        <p>"<span className={classes.dependencyColor}>react</span>": "^17.0.2",</p>
                    </div>
                    <p>{"}"}</p>
                </Grid>

                {/****** Struggles ******/}
                <Grid item className={classes.darkBackground}>
                    <div className={classes.strugglesContainer}>
                        <h3>Biggest Struggles:</h3>
                        <p>I had 3 main struggles when desigining and programming this personal website. First
                            on the home page it took me an entire day to get the left side to be static and the right
                            side to scroll. The difficult part was getting the entire page to fit on any aspect ratio,
                            as well as stopping the page from expanding horizontally. To fix this I seperated the left
                            and right side into seperate files that way I can style entire pages rather than trying to
                            get every element on the screen to work properly.
                        </p>
                        <p>
                            The second struggle was implementing animations on transition. At first I tried using pure
                            css to get elements to move, but that became way too tedious and difficult especially with
                            different aspect ratios. So I looked for any libraries to use and found
                            <a className={classes.hyperlink} href="https://www.framer.com/motion/"> Framer Motion</a>.
                            Within a few hours I had every transition working exactly how I wanted it.
                        </p>
                        <p>
                            Finally the biggest struggle was optimizing everything to work on every aspect ratio.
                            I decided early on that I wanted everything to stay organized as you see it, but they
                            just change in size and shape to accomidate the different aspect ratios.
                            The only exception was the home page going from side to side, to stacked as the
                            screen size became smaller.
                        </p>
                    </div>
                </Grid>

                {/****** Future Features ******/}
                <Grid item>
                    <div className={classes.featuresContainer}>
                        <h3>Future Features:</h3>
                        <p>- Including a blog to write articles</p>
                        <p>- Continuing to expand portfolio with projects</p>
                        <p>- Attaching Notion Database to automatically show In-progress projects</p>
                    </div>
                </Grid>

                {/****** Footer ******/}
                <Grid item className={classes.footerBackground}>
                    <div className={classes.footerContainer}>
                        <h3>Next project:</h3>
                        <Link className={classes.link} to={{ pathname: '/' }}>
                            <h3>Future Project</h3>
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </motion.div>
    )
}