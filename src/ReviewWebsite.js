import { Button } from '@material-ui/core'
import React from 'react'
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'
import { motion } from "framer-motion"
import { Grid } from '@material-ui/core'
import albumReviewRow from './content/reviewWebsiteRow.png'
import apiFlow from './content/apiFlow.png'
import searchBar from './content/searchBar.png'
let temp

const useStyles = makeStyles((theme) => ({
    main: {
        backgroundColor: temp.state.data.color,
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
        marginBottom: '20%',
        textAlign: 'center'
    },
    title: {
        marginBottom: '10vh',
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
        marginBottom: '19vh',
        width: '100%',
        background: '#f67e7d75'
    },
    dependencies: {
        marginLeft: '1.5vw',
    },
    dependencyColor: {
        color: '#001f3f'
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
        marginTop: '19vh',
        marginBottom: '19vh',
    },
    featuresContainer: {
        width: '66vw',
        textAlign: 'center',
        marginBottom: '15vh'
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
    },
    coloredText: {
        color: '#000000'
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    }
}))

export default function ReviewWebsite({ data }) {
    temp = useLocation()
    // console.log(temp.state.data)
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
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        className={classes.titleanddescription}
                        spacing={10}>
                        <Grid item>
                            <h1 className={classes.title}>
                                {temp.state.data.name}
                            </h1>
                        </Grid>

                        <Grid item>
                            <h3 className={classes.description}>
                                {temp.state.data.description}
                            </h3>
                        </Grid>
                    </Grid>
                </Grid>

                {/* First Photo of album row */}
                <Grid item>
                    <img className={classes.albumReviewRow} src={albumReviewRow}></img>
                </Grid>

                {/* API Explanation */}
                <Grid item className={classes.apiExplanationContainer}>
                    <p className={classes.apiExplanation}>
                        Albums are <span className={classes.coloredText}>dynamically</span> created from the google sheets API.
                        It imports all reviews that have a minimum of a
                        single review from
                        a reviewer, gets album cover from the album-art API, then creates a new card.
                    </p>
                </Grid>

                {/* Dependencies used */}
                <Grid item>
                    <h3>"dependencies":</h3>
                    <p>{"{"}</p>
                    <div className={classes.dependencies}>
                        <p>"<span className={classes.dependencyColor}>album-art</span>": "^2.0.2",</p>
                        <p>"<span className={classes.dependencyColor}>axios</span>": "^0.21.1",</p>
                        <p>"<span className={classes.dependencyColor}>google-spreadsheet</span>": "^3.1.15",</p>
                        <p>"<span className={classes.dependencyColor}>@material-ui/core</span>": "^4.11.3",</p>
                    </div>
                    <p>{"}"}</p>
                </Grid>

                {/* API path photo */}
                <Grid item>
                    <img className={classes.apiPath} src={apiFlow}></img>
                </Grid>

                {/* Biggest Struggle */}
                <Grid item className={classes.darkRedBackground}>
                    <div className={classes.biggestStruggle}>
                        <h3>Biggest Struggles:</h3>
                        <p>My first struggle was I was attempting to get all the google-sheet API data as well as
                        the album-art API back to back <span className={classes.coloredText}>before</span> rendering. This caused issues since I needed to loop
                        over all the google-sheet API data in order to know which album to get the cover for. This would mean
                        making 200+ API calls to the album-cover API and having all of them be awaited which caused the browser to
                        stall most of the time.
                        I eventually moved the album-cover API call inside of the card creation file
                        which improved speed since I didn't make 200+ API calls back to back, but instead by the time one card was created
                        the response from the album-cover API had been recieved. </p>
                    </div>
                </Grid>

                {/* Search feature photo */}
                <Grid item>
                    <img className={classes.searchBar} src={searchBar}></img>
                </Grid>

                {/* Features */}
                <Grid item>
                    <div className={classes.featuresContainer}>
                        <h3>Future Features:</h3>
                        <p>- Having people upvote or downvote reviews</p>
                        <p>- Users can send in suggestions</p>
                        <p>- Filter based on reviewer</p>
                        <p>- Users can rate the albums as well</p>
                    </div>
                </Grid>

                {/* Footer */}
                <Grid item className={classes.footerBackground}>
                    <div className={classes.footerContainer}>
                        <h3>Next project:</h3>
                        <Link className={classes.link} to={{ pathname: './MinecraftServer' }}>
                            <h3>Twitch Controlled Minecraft Server</h3>
                        </Link>
                    </div>
                </Grid>

            </Grid>
        </motion.div>
    )
}
