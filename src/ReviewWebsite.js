import React, { useEffect } from 'react';
import { Button } from '@material-ui/core'
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'
import { motion } from "framer-motion"
import { Grid } from '@material-ui/core'
import albumReviewRow from './content/Review Website Content/reviewWebsiteRow.png'
import searchBar from './content/searchBar.png'
import jsonData from "../src/content/projects.json"

const useStyles = makeStyles((theme) => ({
    main: {
        backgroundColor: jsonData[0].color,
        width: '100%',
        height: '100%',
        color: 'white',
        fontFamily: 'poppins',
        overflow: 'hidden'
    },
    homeButton: {
        color: 'white',
        fontFamily: 'poppins',
    },
    homeButtonContainer: {
        marginTop: '1%',
        marginLeft: '50%'
    },
    titleanddescription: {
        width: '80vw',
        marginBottom: '8%',
        textAlign: 'center'
    },
    title: {
        marginBottom: '5vh',
        fontSize: '7vw'
    },
    description: {
        width: '44vw',
        fontSize: '22px',
        textAlign: 'center'
    },
    albumReviewRow: {
        width: '90vw'
    },
    apiExplanation: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '55vw',
        fontSize: '22px',
        textAlign: 'center',
        margin: '7vh',
    },
    apiExplanationContainer: {
        marginTop: '19vh',
        marginBottom: '12vh',
        width: '100%',
        background: '#f67e7d75'
    },
    dependencies: {
        marginLeft: '1.5vw',
    },
    dependencyColor: {
        color: '#001f3f'
    },
    dependencyContainer: {
        marginBottom: '10vh',
        fontSize: '2vh'
    },
    apiPath: {
        width: '25vw',
        minWidth: '270px',
        borderRadius: '37px',
        marginTop: '19vh',
        marginBottom: '19vh',
    },
    darkRedBackground: {
        width: '100%',
        background: '#f67e7d75'
    },
    biggestStruggle: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '55vw',
        textAlign: 'center',
        margin: '10vh',

    },
    searchBar: {
        width: '25vw',
        minWidth: '270px',
        marginTop: '12vh',
        marginBottom: '0vh',
    },
    filterText: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '55vw',
        textAlign: 'center',
        marginBottom: '10vh',
    },
    featuresContainer: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '66vw',
        textAlign: 'center',
        marginBottom: '5vh'
    },
    footerContainer: {
        width: '65vw',
        textAlign: 'center',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    footerBackground: {
        background: '#393E46',
        height: '200px',
        width: '100%',
        height: '14vh'
    },
    coloredText: {
        color: '#000000',
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    },
    apiExplanationCurveBottom: {
        top: '0',
        left: '0',
        width: '100%',
        overflow: 'hidden',
        lineHeight: '0',
    },
    apiExplanationSVG: {
        position: 'relative',
        display: 'block',
        width: 'calc(142% + 1.3px)',
        height: '52px',
        fill: '#CD494F'
    },
    apiExplanationCurveTop: {
        top: '0',
        left: '0',
        width: '100%',
        overflow: 'hidden',
        lineHeight: '0',
        transform: 'rotate(180deg)'
    },
    biggestStruggleCurveTop: {
        top: '0',
        left: '0',
        width: '100%',
        overflow: 'hidden',
        lineHeight: '0',
        transform: 'rotate(180deg)'
    },
    biggestStruggleCurveTopSVG: {
        position: 'relative',
        display: 'block',
        width: 'calc(130% + 1.3px)',
        height: '42px',
        fill: '#CD494F'
    },
    biggestStruggleCurveBottom: {
        top: '0',
        left: '0',
        width: '100%',
        overflow: 'hidden',
        lineHeight: '0',
    },
    biggestStruggleSVG: {
        position: 'relative',
        display: 'block',
        width: 'calc(150% + 1.3px)',
        height: '70px',
        fill: '#CD494F'
    },

    futureFeaturesCurve: {
        top: '0',
        left: '0',
        width: '100%',
        overflow: 'hidden',
        lineHeight: '0',
        transform: 'rotate(180deg)'
    },
    futureFeaturesCurveSVG: {
        position: 'relative',
        display: 'block',
        width: 'calc(150% + 1.3px)',
        height: '70px',
        fill: '#CD494F'
    },
    futureFeaturesBottomCurve: {
        top: '0',
        left: '0',
        width: '100%',
        overflow: 'hidden',
        lineHeight: '0',
        transform: 'rotate(180deg)'
    },
    futureFeaturesCurveBottomSVG: {
        position: 'relative',
        display: 'block',
        width: 'calc(123% + 1.3px)',
        height: '40px',
        fill: '#393E46'
    }
}))

export default function ReviewWebsite({ data }) {

    // Scroll window to top at startup
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
                alignItems="center"
            >

                {/****** Home button ******/}
                <Grid item className={classes.homeButtonContainer}>
                    <Link to={{ pathname: '/' }}>
                        <Button className={classes.homeButton}>Home</Button>
                    </Link>
                </Grid>

                {/****** Title and description ******/}
                <Grid item>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        className={classes.titleanddescription}
                        spacing={10}>
                        <Grid item>
                            <h1 className={classes.title}>
                                {jsonData[0].name}
                            </h1>
                        </Grid>

                        <Grid item>
                            <h3 className={classes.description}>
                                {jsonData[0].description}
                            </h3>
                        </Grid>
                    </Grid>
                </Grid>

                {/******* First Photo of album row ******/}
                <Grid item>
                    <img className={classes.albumReviewRow} src={albumReviewRow}></img>
                </Grid>

                {/*******  API Explanation ******/}
                <Grid item className={classes.apiExplanationContainer}>
                    <div className={classes.apiExplanationCurveTop}>
                        <svg className={classes.apiExplanationSVG} viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                        </svg>
                    </div>
                    <p className={classes.apiExplanation}>
                        Albums are <span className={classes.coloredText}>dynamically</span> created from the google sheets API.
                        It imports all reviews that have a minimum of a
                        single review from
                        a reviewer, then gets the album cover from the album-art API,
                        finally, a new card containing the title, reviews, and the album cover is created.
                    </p>
                    <div className={classes.apiExplanationCurveBottom}>
                        <svg className={classes.apiExplanationSVG} viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
                        </svg>
                    </div>
                </Grid>

                {/****** Dependencies used ******/}
                <Grid item className={classes.dependencyContainer}>
                    <h3>"dependencies used":</h3>
                    <p>{"{"}</p>
                    <div className={classes.dependencies}>
                        <p>"<span className={classes.dependencyColor}>album-art</span>": "^2.0.2",</p>
                        <p>"<span className={classes.dependencyColor}>axios</span>": "^0.21.1",</p>
                        <p>"<span className={classes.dependencyColor}>google-spreadsheet</span>": "^3.1.15",</p>
                        <p>"<span className={classes.dependencyColor}>@material-ui/core</span>": "^4.11.3",</p>
                    </div>
                    <p>{"}"}</p>
                </Grid>

                {/****** Biggest Struggle *******/}
                <Grid item className={classes.darkRedBackground}>


                    <div className={classes.biggestStruggleCurveTop}>
                        <svg className={classes.biggestStruggleCurveTopSVG} viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" ></path>
                        </svg>
                    </div>
                    <div className={classes.biggestStruggle}>
                        <h3>Biggest Struggles:</h3>
                        <p>My first struggle was I was attempting to get all the google-sheet API data as well as
                            the album-art API covers for each album simultaneously <span className={classes.coloredText}>before</span> rendering. This caused issues since I needed to loop
                            over all the google-sheet API data in order to know which album to get the cover for. This would mean
                            making 200+ API calls to the album-cover API and having all of them be awaited simultaneously which caused the browser to
                            stall most of the time.
                            I eventually moved the album-cover API call inside of the card creation file
                            which improved speed since I didn't make 200+ API calls back to back, but instead by the time one card was created
                            the response from the album-cover API had been recieved. </p>
                    </div>

                    <div className={classes.biggestStruggleCurveBottom}>
                        <svg className={classes.biggestStruggleSVG} viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" ></path>
                        </svg>
                    </div>
                </Grid>

                {/****** Search feature photo ******/}
                <Grid item>
                    <img className={classes.searchBar} src={searchBar}></img>
                </Grid>


                {/******* Filter Search Explanation ******/}
                <Grid item>
                    <div className={classes.filterText}>
                        <h2>Filter Feature:</h2>
                        <p>
                            The website has filter capabilities so you can search for an artist or an album title.
                        </p>
                    </div>
                </Grid>

                {/******* Features ******/}
                <Grid item className={classes.darkRedBackground}>
                    <div className={classes.futureFeaturesCurve}>
                        <svg className={classes.futureFeaturesCurveSVG} viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" ></path>
                        </svg>
                    </div>
                    <div className={classes.featuresContainer}>
                        <h3>Future Features:</h3>
                        <p>- Having people upvote or downvote reviews</p>
                        <p>- Users can send in suggestions</p>
                        <p>- Filter based on reviewer</p>
                        <p>- Users can rate the albums as well</p>
                    </div>
                    <div className={classes.futureFeaturesBottomCurve}>
                        <svg className={classes.futureFeaturesCurveBottomSVG} viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                        </svg>
                    </div>
                </Grid>

                {/******* Footer *******/}
                <Grid item className={classes.footerBackground}>
                    <div className={classes.footerContainer}>
                        <h3>Next project:</h3>
                        <Link className={classes.link} to={{ pathname: '/twitchmcserver' }}>
                            <h3>Twitch Controlled Minecraft Server</h3>
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </motion.div>
    )
}
